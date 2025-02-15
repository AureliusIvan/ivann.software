import styles from '@styles/Home.module.css';

import { section2 } from "@data/_data";
import Image from "next/image";

export default function sect2() {
    return (
        <>
            <section className="flex w-[100%] mt-[7rem] overflow-x-hidden max-lg:mt-[3rem]">

                <div
                    className="flex w-[90%] h-auto mb-[9rem] justify-between overflow-x-hidden max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center max-lg:w-full max-lg:mb-[1rem] ">

                    {/* Left site image content */}
                    <div className={styles.rectangle}>
                        <div id="rectangle26-container" className={styles.rectangle26Container}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={styles.rectangle26} width="194"
                                 height='455' viewBox="0 0 194 455" fill="#A4183F">
                                <path
                                    d="M19.5 0H94C149.228 0 194 44.7715 194 100V355C194 410.228 149.228 455 94 455H21.5L31.5 441.5V382L0 331.5V270L13.5 225L7.5 150.5L19.5 112.5V0Z"
                                    fill="#A4183F"/>
                            </svg>
                        </div>
                        <div className={styles.rectangle27Container}>
                            <div>
                                <img className={styles.rectangle27} src="/images/icon/vektorHome.png"
                                     alt="stroke vektor"/>
                            </div>
                        </div>

                        <div id="ripped" className={styles.ripped}></div>
                    </div>

                    {/* bagian tengah : desc and author */}
                    <div
                        className="flex flex-col justify-center items-center text-right max-[1350px]:mt-[-0.5rem] max-lg:text-center max-lg:items-center">
                        {section2.map((data: any) => (
                            <div key={data.id}>
                                <div id="desc-text" className={styles.descText}>{data.desc}</div>
                                <div id="author-text" className={styles.authorText}>{data.author}</div>
                            </div>
                        ))}
                    </div>

                    {/* bagian kanan, gambar, svg dll */}
                    <div className="flex max-lg:mt-[1.5rem]">

                        <div className="flex flex-col">
                            {/* svg paper polos  */}
                            <div className={styles.vectorpaperHome}>
                                <svg className={styles.svgPaperHome} width="246" height="58" viewBox="0 0 246 58"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" fillRule="evenodd" clipRule="evenodd"
                                          d="M20.499 0.867996C24.573 1.751 24.951 3.876 21.167 4.633C17.255 5.415 17.226 6.806 21.095 8.155L24.108 9.205L20.923 12.853C19.172 14.859 15.976 17.805 13.822 19.401C10.748 21.678 10.003 22.813 10.36 24.678C10.698 26.448 10.083 27.575 7.947 29.095C4.399 31.622 4.345 33.888 7.697 39.607L10.312 44.071L5.156 50.785L0 57.5L103.791 57.804C160.875 57.972 212.553 57.821 218.631 57.468L229.681 56.828V53.285C229.681 50.401 230.369 49.19 233.381 46.774C237.551 43.429 237.998 41.589 235.081 39.768C232.228 37.986 232.575 37.107 236.831 35.345C243.245 32.688 243.545 32.046 239.864 28.855L236.581 26.009L240.236 22.754L243.892 19.5L243.365 11.911C243.031 7.089 243.26 3.533 243.995 2.161L245.151 0L131.366 0.117996C68.784 0.182996 18.894 0.520996 20.499 0.867996Z"
                                          fill="#FDD3C4"/>
                                </svg>
                            </div>

                            {/* gambar bunga */}
                            <div className="shrink-0 z-20" id="flowerHome">
                                {section2.map((data: any) => (
                                    <div key={data.id} className={styles.flowerHome} id="flowerHome">
                                        <Image src={data.src} alt={data.alt}
                                               style={{
                                                   zIndex: '10'
                                               }}/>
                                    </div>
                                ))}
                            </div>

                            {/* svg 3 dot */}
                            <div className={styles.dot3}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.dotSvg} width="80" height="18"
                                     viewBox="0 0 80 18" fill="none">
                                    <circle cx="9" cy="9" r="8.5" stroke="#FDD3C4"/>
                                    <circle cx="40" cy="9" r="8.5" stroke="#FDD3C4"/>
                                    <circle cx="71" cy="9" r="8.5" stroke="#FDD3C4"/>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                {/* svg paper */}
                <div className={styles.paper}>
                    <img className={styles.paperImg} src="/images/icon/paper.jpeg" alt="paper.svg"/>
                </div>

                {/* svg stroke line 2 */}
                <div id="stroke-line" className={styles.strokeLine}>
                    <div className="mb-[1.5rem] max-[1350px]:w-[10rem]">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="w-[527px] min-w-[300px] max-w-[600px] h-auto max-[1350px]:w-[39vw]" width="527"
                             height="3" viewBox="0 0 527 3" fill="none">
                            <path d="M1 1.5H526" stroke="#FEE3E1" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className="max-[1350px]:w-[10rem]">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             className="w-[527px] min-w-[300px] max-w-[600px] h-auto max-[1350px]:w-[39vw]" width="527"
                             height="3" viewBox="0 0 527 3" fill="none">
                            <path d="M1 1.5H526" stroke="#FEE3E1" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
            </section>
        </>
    )
}
