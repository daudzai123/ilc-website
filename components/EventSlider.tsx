"use client";

import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import events from '../data/events.json';
import ErrorBoundary from './ErrorBoundary';

export default function EventSlider(){
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // defensive: ensure events is an array and provide fallbacks for missing images
  const items = Array.isArray(events) ? events : [];
  const placeholder = '/images/events/event1-1.svg';

  return (
    <ErrorBoundary fallback={<div className="p-4 border rounded text-red-600">Failed to load events. Please refresh.</div>}>
      <div>
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          spaceBetween={10}
          // only pass thumbs when we have a valid swiper instance
          {...(thumbsSwiper ? { thumbs: { swiper: thumbsSwiper } } : {})}
          className="rounded-md overflow-hidden"
        >
          {items.map((e:any)=> (
            <SwiperSlide key={e?.id ?? Math.random()}>
              <div className="relative h-64 bg-gray-100">
                <img src={e?.images?.[0] ?? placeholder} alt={e?.title ?? 'Event image'} className="w-full h-full object-cover"/>
                <div className="absolute bottom-2 left-2 bg-black/50 text-white p-2 rounded">{e?.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper onSwiper={setThumbsSwiper} spaceBetween={8} slidesPerView={4} className="mt-4">
          {items.map((e:any)=> (
            <SwiperSlide key={e?.id ?? Math.random()} className="h-20">
              <img src={e?.images?.[0] ?? placeholder} alt={e?.title ?? 'Event thumbnail'} className="w-full h-20 object-cover rounded"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ErrorBoundary>
  )
}