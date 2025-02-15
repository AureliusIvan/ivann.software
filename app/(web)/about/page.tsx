"use client"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import AboutCard from "@components/AboutCard";

import { Pagination, Navigation } from "swiper/modules";

const About: React.FC = () => {
    return (
        <>
            <section>
                <div className="flex items-center justify-center mt-20">
                    <div className="bg-grayishRed w-16 h-px mx-4"></div>
                    <h1 className={" font-lanche text-2xl md:text-4xl text-grayishRed"}>
                        About.
                    </h1>
                    <div className="bg-grayishRed w-16 h-px mx-4"></div>
                </div>
                <div className="flex mt-16 justify-between">
                    <Image
                        src="/images/icon/rectangle.png"
                        width={426}
                        height={347}
                        alt="flower"
                    />
                    <div className="w-1/2">
                        <div className="h-1/2"/>
                        <div className="text-grayishRed">
                            <Image
                                src="/images/icon/dot.png"
                                width={100}
                                height={100}
                                alt="flower"
                            />
                            <h1 className="font-lanche text-5xl mt-4">Lorem Ipsum</h1>
                            <p className="font-argentum-light">
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                posuere cubilia curae; Nullam nec facilisis sem, quis ultrices
                                erat. Mauris tincidunt, lacus aliquam porttitor suscipit, leo
                                nunc lobortis augue, eget lacinia augue ante et odio. Aenean a
                                tempus magna, ut venenatis nunc. Sed interdum cursus ligula,
                                vitae ultrices purus ullamcorper vel.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <Image
                                src="/images/icon/line.png"
                                width={26}
                                height={177}
                                alt="line"
                            />
                            <div className="w-20"/>
                        </div>
                        <div>
                            <div className="w-1/2"/>
                            <div className="w-1/2"/>
                        </div>
                    </div>
                </div>
                <div className="bg-grayishRed mt-32 p-16 shadow-lg ">
                    <h1 className="font-lanche text-2xl md:text-4xl text-darkPink text-center mb-12">
                        Our Services
                    </h1>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        style={{width: "1000px"}}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 1"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 2"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 3"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 4"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 5"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 6"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 7"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 8"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <AboutCard
                                title={"THIS IS SERVICE 9"}
                                desc={
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dapibus aliquet sem, non finibus lorem laoreet vel. Aliquam ex enim, imperdiet a sodales in, gravida nec eros."
                                }
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default About;
