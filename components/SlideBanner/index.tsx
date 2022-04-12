// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: '111111111111111111111111',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&h=250&q=60',
//   },
//   {
//     label: '222222222222222222222222',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&h=250&q=60',
//   },
//   {
//     label: '333333333333333333333333',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&h=250&q=80',
//   },
//   {
//     label: '44444444444444444444444444',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&h=250&q=60',
//   },
// ];

// function SilderBanner() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step: React.SetStateAction<number>) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//     {/* maxWidth: 400,  */}
//       {/* <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper> */}

//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: 'block',
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>

//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             {/* Next */}
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             {/* Back */}
//           </Button>
//         }
//       />

//     </Box>
//   );
// }

// export default SilderBanner;

import React, { useState } from "react";
import Image from "next/image";
import styles from "./sliderBanner.module.css";
import BtnSlider from "./BtnSlider";
import cn from "classnames";

const dataSlider = [
  {
    title: "1",
    subTitle: "asdasdasd",
    src: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/73513702_2467832439920811_378673402333888512_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGqK95hO9LlerTVKPXa8wkPwT9VXkt5TbrBP1VeS3lNuovXEh24MvH0vTVxQZeRb1jXBV63X-RltC6sBcjY0IgZ&_nc_ohc=sRR5PyCvzSAAX_Nmyub&_nc_ht=scontent.fbkk17-1.fna&oh=00_AT-eLkAXW9-VcK0Nghw23f6pL9mQ5qsD-MMv1IULvajDEg&oe=627D04E1",
  },
  {
    title: "2",
    subTitle: "asdasdasd",
    src: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t39.30808-6/259461919_4511015012269200_6613344800225731484_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=19026a&_nc_eui2=AeFF00BUmRir64H_2_0wpVS2LKObkAIRTKIso5uQAhFMorz6WNw2vy4r6GSAgOPmXbguy_Hg_5fla5T6uBc0Yzp1&_nc_ohc=B6reqSeMIRsAX9NhOA2&_nc_ht=scontent.fbkk17-1.fna&oh=00_AT-7xQJ0MKVDdBaOxxL-_Ikk6Z_lv6jd0GoNDS_iCk-Q7Q&oe=625A5E81",
  },
  {
    title: "3",
    subTitle: "asdasdasd",
    src: "https://scontent.fbkk17-1.fna.fbcdn.net/v/t1.6435-9/118833311_3223201177717263_3133469185319302187_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEdDyEkR_5Q7nN9xHqe0ASi01Ao3msFueTTUCjeawW55KplG0FxoVRFkBi0_OslwLYrr0-RaqvmwyWmU1oM5g4i&_nc_ohc=b3RrtchoSt4AX9jh5XU&_nc_ht=scontent.fbkk17-1.fna&oh=00_AT9aLN_YHuxMyNoUuKflg8TibktkmOQ5szyaiFqoj5YnDQ&oe=627C9B4E",
  },
];

export default function SliderBanner() {
  const [slideIndex, setSliderIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex === dataSlider.length - 1) {
      setSliderIndex(0);
    } else {
      setSliderIndex(slideIndex + 1);
    }
  };
  const prevSlide = () => {
    if (slideIndex === 0) {
      setSliderIndex(dataSlider.length - 1);
    } else {
      setSliderIndex(slideIndex - 1);
    }
  };

  return (
    <div className={styles.containerSlider}>
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={index}
            className={cn(styles.silde, {
              [styles.activeAnim]: slideIndex === index,
            })}
          >
            <Image
              className={styles.slideImg}
              src={dataSlider[slideIndex].src}
              alt={dataSlider[slideIndex].title}
              layout='fill'
              width={1000}
              height={1000}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className={styles.containerDots}>
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            key={index}
            className={cn(styles.dot, {
              [styles.active]: slideIndex === index,
            })}
          ></div>
        ))}
      </div>
    </div>
  );
}
