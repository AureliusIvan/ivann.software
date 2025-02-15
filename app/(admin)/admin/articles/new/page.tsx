"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import { Label } from "@components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select"
import TipTapEditor from "@/components/TipTapEditor"
import { htmlToMarkdown, markdownToHtml } from "@/utils/markdownConverter"

export default function NewArticle() {
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [status, setStatus] = useState("draft")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const response = await fetch("/api/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({title, content, status}),
            })
            if (response.ok) {
                alert("Article created successfully!")
                router.push("/admin/articles")
            } else {
                console.error(response)
            }
        } catch (error) {
            console.error("Error creating article:", error)
            alert("Failed to create article. Please try again.")
        }
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = async (e) => {
                const markdown = e.target?.result as string
                const html = await markdownToHtml(markdown)
                setContent(html)
            }
            reader.readAsText(file)
        }
    }

    const handleDownloadMarkdown = async () => {
        const markdown = await htmlToMarkdown(content)
        const blob = new Blob([markdown], {type: "text/markdown"})
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `${title || "article"}.md`
        a.click()
        URL.revokeObjectURL(url)
    }

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">New Article</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </div>
                <div>
                    <Label htmlFor="content">Content</Label>
                    <TipTapEditor content={content} onChange={setContent}/>
                </div>
                <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={status} onValueChange={setStatus}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select status"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-2">
                    <Button type="submit">Create Article</Button>
                    <Button type="button" variant="outline"
                            onClick={() => document.getElementById("markdown-upload")?.click()}>
                        Import Markdown
                    </Button>
                    <input id="markdown-upload" type="file" accept=".md" onChange={handleFileUpload}
                           className="hidden"/>
                    <Button type="button" variant="outline" onClick={handleDownloadMarkdown}>
                        Download as Markdown
                    </Button>
                </div>
            </form>
        </div>
    )
}
