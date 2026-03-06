"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../app/actorsstyles.css';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ActorsType } from '@/types/ActorsType';
import Link from 'next/link';

const Actorscomponentimges = ({ actorlar }: { actorlar: ActorsType[] }) => {

    // Array tekshiruvi
    const actorList = Array.isArray(actorlar)
        ? actorlar
        : (actorlar as { data: ActorsType[] })?.data ?? []

    if (!actorList.length) return null

    return (
        <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {actorList.map((el: ActorsType) => (
                <SwiperSlide key={el.id} className="w-62.5! ">
                    <Link href={`/actors/${el?.id}`} className="flex items-center justify-center">
                        <div className="w-65 bg-linear-to-b bg-[#1d1f1e] to-gray-950 border border-gray-700 rounded-3xl p-4 shadow-lg hover:shadow-2xl hover:border-gray-500 transition-all duration-300 group">

                            {/* Image */}
                            <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                                <Image
                                    src={el?.photo_url}
                                    alt={el?.full_name ?? 'Actor'}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                            </div>

                            {/* Text */}
                            <div className="mt-4">
                                <h2 className="text-white text-md font-semibold tracking-wide line-clamp-1">
                                    {el?.full_name}
                                </h2>
                                <p className="text-gray-400 text-sm mt-1">
                                    {el?.country}
                                </p>
                            </div>

                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Actorscomponentimges