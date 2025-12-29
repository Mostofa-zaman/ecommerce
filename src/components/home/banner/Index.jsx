import React, { useRef } from 'react'
import Container from '../../commonComponent/Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards, Autoplay, Navigation } from 'swiper/modules';
import { imagesProvider } from '../../../helpers/ImgProvider';

const Banner = () => {

    // Right Swiper #1 Refs
    const progressCircle1 = useRef(null);
    const progressContent1 = useRef(null);

    // Right Swiper #2 Refs
    const progressCircle2 = useRef(null);
    const progressContent2 = useRef(null);

    // Handler for both swipers (pass refs manually)
    const onAutoplayTimeLeft = (circleRef, contentRef, time, progress) => {
        if (!circleRef.current || !contentRef.current) return;
        circleRef.current.style.setProperty('--progress', 1 - progress);
        contentRef.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className="my-10">
            <Container className={"h-full"}>
                <div className="flex items-center justify-between h-[520px] gap-x-5">

                    {/* LEFT MAIN SWIPER */}
                    <div className="w-[872px] h-full">
                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, EffectCards, Autoplay]}
                            effect="cards"
                            grabCursor={true}
                            className="h-full"
                        >
                            {[...new Array(6)].map((_, index) => (
                                <SwiperSlide key={`big-${index}`} className="h-full">
                                    <picture>
                                        <img
                                            src={imagesProvider.BannerOne}
                                            alt="Banner One"
                                            className="w-full h-full"
                                        />
                                    </picture>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-[424px] h-full flex flex-col gap-y-6">

                        {/* RIGHT SLIDER #1 */}
                        <div className="w-full h-full relative">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                grabCursor={true}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                onAutoplayTimeLeft={(swiper, time, progress) =>
                                    onAutoplayTimeLeft(progressCircle1, progressContent1, time, progress)
                                }
                                className="mySwiper"
                            >
                                {[...new Array(6)].map((_, index) => (
                                    <React.Fragment key={index}>
                                        <SwiperSlide key={`right1-two-${index}`}>
                                            <picture className="w-full h-[20px]">
                                                <img
                                                    src={imagesProvider.BannerTwo}
                                                    alt="Banner Two"
                                                />
                                            </picture>
                                        </SwiperSlide>

                                        <SwiperSlide key={`right1-three-${index}`}>
                                            <picture className="w-full h-[20px]">
                                                <img
                                                    src={imagesProvider.BannerThree}
                                                    alt="Banner Three"
                                                />
                                            </picture>
                                        </SwiperSlide>
                                    </React.Fragment>
                                ))}

                                {/* Progress Circle */}
                                <div className="autoplay-progress absolute bottom-2 right-2">
                                    <svg viewBox="0 0 48 48" ref={progressCircle1}>
                                        <circle cx="24" cy="24" r="20"></circle>
                                    </svg>
                                    <span ref={progressContent1}></span>
                                </div>
                            </Swiper>
                        </div>

                        {/* RIGHT SLIDER #2 */}
                        <div className="w-full h-full relative">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                grabCursor={true}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                onAutoplayTimeLeft={(swiper, time, progress) =>
                                    onAutoplayTimeLeft(progressCircle2, progressContent2, time, progress)
                                }
                                className="mySwiper"
                            >
                                {[...new Array(6)].map((_, index) => (
                                    <React.Fragment key={index}>
                                        <SwiperSlide key={`right2-two-${index}`}>
                                            <picture className="w-full h-[20px]">
                                                <img
                                                    src={imagesProvider.BannerTwo}
                                                    alt="Banner Two"
                                                />
                                            </picture>
                                        </SwiperSlide>

                                        <SwiperSlide key={`right2-three-${index}`}>
                                            <picture className="w-full h-[20px]">
                                                <img
                                                    src={imagesProvider.BannerThree}
                                                    alt="Banner Three"
                                                />
                                            </picture>
                                        </SwiperSlide>
                                    </React.Fragment>
                                ))}

                                {/* Progress Circle */}
                                <div className="autoplay-progress absolute bottom-2 right-2">
                                    <svg viewBox="0 0 48 48" ref={progressCircle2}>
                                        <circle cx="24" cy="24" r="20"></circle>
                                    </svg>
                                    <span ref={progressContent2}></span>
                                </div>

                            </Swiper>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Banner;
