import styles from '@styles/Home.module.css';

import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { judulSlider, sliderData } from '@data/_data';

export default function section() {
    return (
        <>
            <section className="w-screen h-auto mt-[-1.5rem]" id='logos'>
                <div className="flex">
                    {judulSlider.map((data: any) => (
                        <div key={data.id}>
                            <div className={styles.containerSec1}>
                                <div className={styles.titleSec1}>{data.title}</div>
                                <div className={styles.descSec1}>{data.desc}</div>
                            </div>
                        </div>
                    ))}

                    {/* slider */}
                    <Marquee className={styles.element2} speed={100} pauseOnClick={true}>
                        {sliderData.map((Data: any) => (
                            <div key={Data.id} className="flex items-center justify-center w-full"
                                 style={{
                                     background: '#FFCDFF'
                                 }}>
                                <div id='slider'
                                     className={"flex image items-start w-auto h-[31.25rem] max-md:h-[19rem] justify-between mx-[-2rem] overflow-hidden"}
                                     key={Data.id}
                                     style={{
                                         position: Data.id % 2 === 0 ? 'relative' : 'static',
                                         zIndex: Data.id % 2 === 0 ? '20' : '0',
                                     }}
                                >
                                    <Image id='slider-handle' className={'flex w-auto h-[31.25rem] max-md:h-[15rem]'}
                                           src={Data.src} alt={Data.alt}
                                           style={{
                                               height: Data.id % 2 === 0 ? '33rem' : '31.25rem',
                                               maxHeight: Data.id % 2 === 0 ? '' : '100%',
                                               marginTop: Data.id % 2 === 0 ? '-0.7rem' : '0',
                                               marginRight:
                                                   Data.id === 2 || Data.id === 10
                                                       ? '2.4rem'
                                                       : Data.id === 4 || Data.id === 8
                                                           ? '2.1rem'
                                                           : Data.id === 6
                                                               ? '2.3rem'
                                                               : '0',
                                               marginLeft: Data.id === 2 ? '0.9rem' : '0',
                                               background: Data.id % 2 === 0 ? '' : '',
                                               // Media query: atur gaya sesuai dengan lebar layar maksimum 770px
                                               ...(Data.id === 2
                                                   ? {
                                                       '@media (maxWidth: 770px)': {
                                                           height: '29rem',
                                                       },
                                                   }
                                                   : {}),
                                           }}/>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>
        </>
    );
}
