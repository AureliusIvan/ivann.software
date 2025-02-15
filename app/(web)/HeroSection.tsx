import React from 'react';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import styles from '@styles/Home.module.css';
import { sliderTitle, sliderData } from '@data/_data';

interface SliderTitle {
    id: number;
    title: string;
    desc: string;
}

interface SliderData {
    id: number;
    src: string;
    alt: string;
}

const getImageStyle = (id: number): React.CSSProperties => {
    // Base styles for the image
    const style: React.CSSProperties = {
        height: id % 2 === 0 ? '33rem' : '31.25rem',
        maxHeight: id % 2 === 0 ? undefined : '100%',
        marginTop: id % 2 === 0 ? '-0.7rem' : '0',
        marginRight: '0',
        marginLeft: '0',
    };

    // Adjust marginRight based on id values
    if (id === 2 || id === 10) {
        style.marginRight = '2.4rem';
    } else if (id === 4 || id === 8) {
        style.marginRight = '2.1rem';
    } else if (id === 6) {
        style.marginRight = '2.3rem';
    }

    // Adjust marginLeft for id 2
    if (id === 2) {
        style.marginLeft = '0.9rem';
    }

    return style;
};

export default function Section() {
    return (
        <section className="w-screen h-auto" id="hero-section">

            <div className="flex">
                {sliderTitle.map((data: SliderTitle) => (
                    <div key={data.id}>
                        <div className={styles.containerSec1}>
                            <div className={styles.titleSec1}>{data.title}</div>
                            <div className={styles.descSec1}>{data.desc}</div>
                        </div>
                    </div>
                ))}

                {/* Slider */}
                <Marquee className={styles.marquee} speed={100} pauseOnClick={true}>
                    {sliderData.map((data: SliderData) => (
                        <div
                            key={data.id}
                            className="flex items-center justify-center w-full"
                            style={{background: '#FFCDFF'}}
                        >
                            <div
                                id="slider"
                                className="flex items-start w-auto h-[31.25rem] max-md:h-[19rem] justify-between mx-[-2rem] overflow-hidden"
                                style={{
                                    position: data.id % 2 === 0 ? 'relative' : 'static',
                                    zIndex: data.id % 2 === 0 ? 20 : 0,
                                }}
                            >
                                <Image
                                    id="slider-handle"
                                    className="flex w-auto h-[31.25rem] max-md:h-[15rem]"
                                    src={data.src}
                                    alt={data.alt}
                                    style={getImageStyle(data.id)}
                                />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}