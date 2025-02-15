"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { toast } from "sonner";

interface Setting {
    id: string
    key: string
    value: string
}

export default function SettingsPage() {
    const [settings, setSettings] = useState<Setting[]>([])
    const [newKey, setNewKey] = useState("")
    const [newValue, setNewValue] = useState("")

    useEffect(() => {
        fetchSettings()
    }, [])

    const fetchSettings = async () => {
        const response = await fetch("/api/settings")
        const data = await response.json()
        setSettings(data)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/settings", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({key: newKey, value: newValue}),
            })
            if (response.ok) {
                toast("Setting updated successfully")
                setNewKey("")
                setNewValue("")
                fetchSettings()
            } else {
                console.error(response)
                toast("Failed to update setting. Please try again.")
            }
        } catch (error) {
            console.error("Error updating setting:", error)
            toast("Failed to update setting. Please try again.")
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-4">
                <SidebarTrigger/>
                <h1 className="text-3xl font-bold">Settings</h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Current Settings</h2>
                    {settings.map((setting) => (
                        <div key={setting.id} className="flex justify-between items-center mb-2">
                            <span className="font-medium">{setting.key}:</span>
                            <span>{setting.value}</span>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Add/Update Setting</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="key">Key</Label>
                            <Input id="key" value={newKey} onChange={(e) => setNewKey(e.target.value)} required/>
                        </div>
                        <div>
                            <Label htmlFor="value">Value</Label>
                            <Input id="value" value={newValue} onChange={(e) => setNewValue(e.target.value)} required/>
                        </div>
                        <Button type="submit">Save Setting</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
