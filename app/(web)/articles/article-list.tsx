"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Article = {
    id: string;
    title: string;
    slug: string;
    status: string;
    createdAt: Date;
};

export default function ArticleList({articles}: { articles: Article[] }) {
    const router = useRouter();

    const handleViewArticle = (slug: string) => {
        router.push(`/articles/${slug}`);
    };

    return (
        <div className="h-full">
            {articles.map((article) => (
                <article
                    key={article.id}
                    className="p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <h2 className="text-2xl font-semibold mb-2 md:mb-0">
                            {article.title}
                        </h2>
                        <span className="text-sm text-gray-500">
                          {new Date(article.createdAt).toLocaleDateString()}
                        </span>
                    </div>

                    <div className="mt-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewArticle(article.slug)}
                        >
                            View Article
                        </Button>
                    </div>
                </article>
            ))}
        </div>
    );
}
