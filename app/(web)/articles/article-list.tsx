"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation";

type Article = {
    id: string
    title: string
    slug: string;
    status: string
    createdAt: Date
}

export default function ArticleList({articles}: { articles: Article[] }) {
    const [selectedArticle, setSelectedArticle] = useState<string | null>(null)
    const router = useRouter()

    const handleViewArticle = (slug: string) => {
        router.push(`/articles/${slug}`)
    }

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {articles.map((article) => (
                        <TableRow key={article.id}>
                            <TableCell>{article.title}</TableCell>
                            <TableCell>{article.status}</TableCell>
                            <TableCell>{new Date(article.createdAt).toLocaleDateString()}</TableCell>
                            <TableCell>
                                <Button variant="outline" onClick={() => handleViewArticle(article.slug)} size="sm">
                                    View Article
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {selectedArticle && (
                <div className="mt-4">
                    <p>Editing article with ID: {selectedArticle}</p>
                    {/* Add your edit form or modal here */}
                </div>
            )}
        </div>
    )
}
