import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {

        const redirectTimeout = setTimeout(() => {
            router.push('/');
        }, 0);

        return () => clearTimeout(redirectTimeout);
    }, [router]);

};

export default NotFound;
