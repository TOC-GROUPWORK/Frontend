import media1 from "./media-1.png";
import media2 from "./media-2.png";
import media3 from "./media-3.png";
import media4 from "./media-4.png";
import media5 from "./media-5.png";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];
