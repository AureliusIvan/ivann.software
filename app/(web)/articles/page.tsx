import ArticleList from "./article-list"
import prisma from "@/lib/prisma"
import { Suspense } from "react";
import { Skeleton } from "@components/ui/skeleton";

async function getArticles() {
    return prisma.article.findMany()
}

export default async function ArticlesPage() {
    const articles = await getArticles()

    return (
        <section className="w-full px-4 py-8 min-h-screen bg-[#FEE3E1]">
            <Suspense fallback={<Skeleton/>}>
                <ArticleList articles={articles}/>
            </Suspense>
        </section>
    )
}
