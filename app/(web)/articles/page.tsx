import ArticleList from "./article-list"
import prisma from "@/lib/prisma"

async function getArticles() {
    return prisma.article.findMany()
}

export default async function ArticlesPage() {
    const articles = await getArticles()

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Articles</h1>
            <ArticleList articles={articles}/>
        </div>
    )
}
