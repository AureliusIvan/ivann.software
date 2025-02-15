"use client"

import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Image from "@tiptap/extension-image"
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight"
import { common, createLowlight } from "lowlight"
import { Button } from "@/components/ui/button"
import { Bold, Italic, List, ListOrdered, Code, ImageIcon } from "lucide-react"
import { uploadToS3 } from "@/utils/s3Upload"

const lowlight = createLowlight(common)

const TipTapEditor = ({content, onChange}: { content: string; onChange: (content: string) => void }) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],
        immediatelyRender: false,
        content: content,
        onUpdate: ({editor}) => {
            onChange(editor.getHTML())
        },
    })

    if (!editor) {
        return null
    }

    const addImage = async () => {
        const input = document.createElement("input")
        input.type = "file"
        input.accept = "image/*"
        input.onchange = async () => {
            if (input.files?.length) {
                const file = input.files[0]
                try {
                    const url = await uploadToS3(file)
                    editor.chain().focus().setImage({src: url}).run()
                } catch (error) {
                    console.error("Failed to upload image:", error)
                }
            }
        }
        input.click()
    }

    return (
        <div className="border border-input rounded-md p-2">

            <div className="mb-2 flex gap-2">
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive("bold") ? "bg-accent" : ""}
                >
                    <Bold className="h-4 w-4"/>
                </Button>

                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive("italic") ? "bg-accent" : ""}
                >
                    <Italic className="h-4 w-4"/>
                </Button>

                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive("bulletList") ? "bg-accent" : ""}
                >
                    <List className="h-4 w-4"/>
                </Button>

                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive("orderedList") ? "bg-accent" : ""}
                >
                    <ListOrdered className="h-4 w-4"/>
                </Button>

                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive("codeBlock") ? "bg-accent" : ""}
                >
                    <Code className="h-4 w-4"/>
                </Button>

                <Button size="icon" variant="outline" onClick={addImage}>
                    <ImageIcon className="h-4 w-4"/>
                </Button>

            </div>

            <EditorContent editor={editor} className="prose max-w-none"/>

        </div>
    )
}

export default TipTapEditor
