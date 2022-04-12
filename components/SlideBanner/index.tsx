// Main file
import React, { useState, useEffect, useCallback, useRef } from "react";
import { PrevButton, NextButton } from "./emblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { mediaByIndex } from "../../mocks/slideBanner";
import styles from "./embla.module.css";
import Image from 'next/image';

function EmblaCarousel({ slides, options = { loop: false } }: any) {
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index: any) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__inner}>
                <Image
                  className={styles.embla__slide__img}
                  src={mediaByIndex(index)}
                  alt="mock cat"
                  layout="fill" // if want ratio, you can set width and height ex: 16:9
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
}

export default EmblaCarousel;
