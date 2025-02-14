import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import content from "@data/_content";

interface Image {
    id: number;
    imageSrc: string;
    title: string;
}

const InfiniteScrollMasonry: React.FC = () => {
    const [displayImages, setDisplayImages] = useState<Image[]>([]);
    const [loading, setLoading] = useState(false);
    const pageSize = 10;
    const totalImages = content.length;

    const fetchImages = () => {
        setLoading(true);
        const newDisplayImages = [...displayImages];
        for (let i = 0; i < pageSize; i++) {
            newDisplayImages.push(content[i % totalImages]);
        }
        setDisplayImages(newDisplayImages);
        setLoading(false);
    };

    useEffect(() => {
        fetchImages();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 200
            ) {
                if (!loading) {
                    fetchImages();
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading]);

    return (
        <div>
            <Masonry
                breakpointCols={{
                    default: 3,
                    1100: 2,
                    700: 1,
                }}
                className="my-masonry-grid flex"
                columnClassName="my-masonry-grid_column"
            >
                {displayImages.map((image, index) => (
                    <div key={index} className="">
                        <img src={image.imageSrc} alt={image.title}/>
                    </div>
                ))}
            </Masonry>
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default InfiniteScrollMasonry;
