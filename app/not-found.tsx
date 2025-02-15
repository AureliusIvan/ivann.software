"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@components/ui/button";

const NotFound = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl">
                404 - Page Not Found
            </h1>

            <Button
                onClick={() => router.push('/')}
            >
                Go Back
            </Button>
        </div>
    );
};

export default NotFound;
