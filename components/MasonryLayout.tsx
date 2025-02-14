// components/MasonryGrid.tsx
import React, { ReactNode } from 'react';
import Masonry from 'react-masonry-css';

interface MasonryLayoutProps {
    children: ReactNode;
}

const breakpointColumnsObj = {
    default: 3, // Number of columns by default
    1100: 2,   // Number of columns on screens >= 1100px
    700: 1,    // Number of columns on screens >= 700px
};

const MasonryLayout: React.FC<MasonryLayoutProps> = ({children}) => {
    return (
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid flex"
            columnClassName="grid-cols-2 md:grid-cols-3"
        >
            {children}
        </Masonry>
    );
};

export default MasonryLayout;
