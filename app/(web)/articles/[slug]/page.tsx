"use server";

import prisma from "@lib/prisma";

export default async function Page({params}: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;

    // Fetch the post data from the database
    const post = await prisma.article.findUnique({
        where: {
            status: "published",
            slug,
        },
    });

    // Handle the case when no article is found
    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-xl font-semibold text-gray-700">
                    Article not found.
                </p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-3xl mx-auto px-4">
                <article className="bg-white rounded-lg shadow p-6">
                    <header className="mb-6">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            {post.title}
                        </h1>
                        <p className="text-sm text-gray-500">Slug: {post.slug}</p>
                    </header>
                    <section
                        className="prose prose-indigo max-w-none"
                        dangerouslySetInnerHTML={{__html: post.content}}
                    />
                </article>
            </div>
        </main>
    );
}
