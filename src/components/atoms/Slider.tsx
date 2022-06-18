/* eslint-disable import/no-unresolved */
import { FC, memo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';

import SwiperClass from 'swiper/types/swiper-class';
import { projectDataType } from '../../types/projectData';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '../../theme/swiper.css';

type Props = {
  project: projectDataType;
};

export const Slider: FC<Props> = memo((props) => {
  const { project } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <>
      <Swiper
        loop
        spaceBetween={10}
        navigation
        pagination
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className="mySwiper2"
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,
                    @typescript-eslint/no-unsafe-call */}
        {project.slider.map((slider: string, index) => (
          <SwiperSlide key={slider}>
            <img
              src={`${String(process.env.PUBLIC_URL)}${String(slider)}`}
              alt={`${String(project.title)}${String(index)}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,
                    @typescript-eslint/no-unsafe-call */}
        {project.slider.map((slider: string, index) => (
          <SwiperSlide key={slider}>
            <img
              src={`${String(process.env.PUBLIC_URL)}${String(slider)}`}
              alt={`${String(project.title)}${String(index)}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});
