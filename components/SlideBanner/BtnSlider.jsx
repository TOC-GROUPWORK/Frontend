import React from "react";
import styles from "./sliderBanner.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import cn from "classnames";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={cn( styles.btnSlide,
        { [styles.next]: direction === "next" },
        { [styles.prev]: direction === "prev" },
      )}
    >
      <FontAwesomeIcon
        icon={direction === "next" ? faArrowRight : faArrowLeft}
      />
    </button>
  );
}
