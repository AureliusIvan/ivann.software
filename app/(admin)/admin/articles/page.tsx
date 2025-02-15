import Link from "next/link"
import { Button } from "@components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table"
import { PlusCircle } from "lucide-react"
import prisma from "@/lib/prisma"

export default async function ArticlesList() {
    const articles = await prisma.article.findMany({
        orderBy: {createdAt: "desc"},
    })

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Articles</h1>
                <Link href="/admin/articles/new">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4"/> New Article
                    </Button>
                </Link>
            </div>
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
                                <Button variant="outline" size="sm">
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
