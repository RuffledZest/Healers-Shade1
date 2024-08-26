"use client";
// import { curve, loading, yourlogo } from "../../assets";
// import Button from "../Buttons/Button";
import Section from "../Section/Section";
// import { MouseParallax, ScrollParallax } from "react-just-parallax";
import {useRef} from "react";
// import Notification from "../Notification/Notification";
// import PlusSvg from "../../assets/svg/PlusSvg";
// import PropTypes from "prop-types";
// import Video from "../Video";
// import { gradient} from "../../assets";
// import Lottie from 'react-lottie';
// import animationData1 from '../../lotties/medicalIcon1.json';
import {Tooltip} from "flowbite-react";


// const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData1,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice"
//     }
//   };
 
// import DNA from "../3D_Elements/DNA";
import { TextGenerateEffect } from "../ui/text-generate-effect";
// import { TypewriterEffectSmoothDemo } from "../Typewriter";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
// import { Link } from "react-router-dom";

// const BackgroundCircles = ({ parallaxRef }) => {
//     // Add prop validation for 'parallaxRef'
    
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         setMounted(true);
//     }, []);

//     return (
//         <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[36rem]">
            
//             <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
//             <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            
//             <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
                
//                 <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                
//                 <Lottie 
// 	    options={defaultOptions}
//         height={200}
//         width={200}
//       />
                
//                 {/* <svg width="92" className="rotate-[320deg]" height="90" viewBox="0 0 92 90"  fill="none" xmlns="http://www.w3.org/2000/svg ">
// <g clipPath="url(#clip0_23_156)">
// <path d="M56.2156 43.3151L47.1378 51.9802L8.80341 88.5661C7.79702 89.5289 6.506 90.0103 5.21497 90.0103C3.80196 90.0103 2.38894 89.4367 1.36222 88.2998C-0.660727 86.0669 -0.396422 82.5743 1.93149 80.6692L47.1378 43.8272L52.1189 39.7712L56.2156 43.3151Z" fill="url(#paint0_linear_23_156)"/>
// <path d="M46.7413 52.4206L37.8058 60.9423L36.9824 52.185L41.872 48.2007L46.7413 52.4206Z" fill="#28B52D" fillOpacity="0.8"/>
// <path d="M91.978 29.9078C91.978 46.4288 78.6815 59.8259 62.2946 59.8259C51.9664 59.8259 42.8682 54.5101 37.5516 46.4391C34.4308 41.7071 32.6111 36.0225 32.6111 29.9078C32.6111 13.3868 45.9077 0 62.2946 0C69.6951 0 76.4552 2.72448 81.6498 7.23114C87.9728 12.7211 91.978 20.8433 91.978 29.9078Z" fill="url(#paint1_linear_23_156)"/>
// <path d="M62.2946 53.2093C75.0671 53.2093 85.4213 42.7768 85.4213 29.9078C85.4213 17.0387 75.0671 6.60632 62.2946 6.60632C49.5221 6.60632 39.1679 17.0387 39.1679 29.9078C39.1679 42.7768 49.5221 53.2093 62.2946 53.2093Z" fill="white"/>
// <path opacity="0.06" d="M91.978 29.9078C91.978 46.4288 78.6815 59.8259 62.2946 59.8259C51.9664 59.8259 42.8682 54.5101 37.5516 46.4391C71.0268 43.6941 79.8505 15.1178 81.66 7.23114C87.9728 12.7211 91.978 20.8433 91.978 29.9078Z" fill="#67E32C" fillOpacity="0.5"/>
// <path d="M62.2946 29.959C64.9783 29.959 67.1537 27.7672 67.1537 25.0632C67.1537 22.3592 64.9783 20.1673 62.2946 20.1673C59.6109 20.1673 57.4354 22.3592 57.4354 25.0632C57.4354 27.7672 59.6007 29.959 62.2946 29.959ZM62.2946 32.407C59.0518 32.407 52.5763 34.0458 52.5763 37.3028V38.5319C52.5763 39.2079 53.1252 39.761 53.7962 39.761H70.8133C71.4842 39.761 72.0332 39.2079 72.0332 38.5319V37.3028C72.0128 34.056 65.5374 32.407 62.2946 32.407Z" fill="#C2CF78"/>
// </g>
// <defs>
// <linearGradient id="paint0_linear_23_156" x1="5.67475" y1="84.3265" x2="53.9244" y2="40.7922" gradientUnits="userSpaceOnUse">
// <stop stopColor="#9CF367"/>
// <stop offset="1" stopColor="#78C43D"/>
// </linearGradient>
// <linearGradient id="paint1_linear_23_156" x1="50.0173" y1="2.11336" x2="72.7818" y2="52.9053" gradientUnits="userSpaceOnUse">
// <stop stopColor="#CFF367"/>
// <stop offset="1" stopColor="#138B34"/>
// </linearGradient>
// <clipPath id="clip0_23_156">
// <rect width="91.978" height="90" fill="white"/>
// </clipPath>
// </defs>
// </svg> */}

//                     <div className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
//                 </div>

//                 <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                    
//                     <div className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
//                     <svg width="62" height="85" className="rotate-[30deg]" viewBox="0 0 62 85" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clipPath="url(#clip0_27_36)">
// <path d="M61.8574 26.4806L61.6657 66.2815L61.6338 73.9797C61.6018 80.0968 55.7882 85.0319 48.633 85L12.8889 84.8403C5.74971 84.7924 -0.0319427 79.8093 1.18176e-07 73.6762L0.2236 26.1772C0.239572 21.226 4.07271 17.0415 9.31134 15.652L9.32732 13.0966V11.7869L52.8814 11.9946L52.8654 15.8596C58.0881 17.313 61.8733 21.5135 61.8574 26.4806Z" fill="url(#paint0_linear_27_36)"/>
// <path d="M56.1236 1.77283V2.1242L56.0917 6.27678L56.0598 10.3495V10.8446C56.0598 11.6112 55.4209 12.2341 54.6543 12.2341H54.3189L52.2106 12.2182L49.8948 12.2022L47.7866 12.1862L45.4707 12.1702L43.3305 12.1383L41.0147 12.1223L38.9064 12.1064L36.5746 12.0904L34.4504 12.0744L32.1345 12.0584L30.0263 12.0265L27.7105 12.0105L25.6022 11.9945L23.2704 11.9786L21.1462 11.9626L18.8463 11.9466L16.7381 11.9307L14.4222 11.9147L12.298 11.8987L9.98216 11.8828L7.85795 11.8668H7.52255C6.75593 11.8668 6.13304 11.2279 6.13304 10.4613V10.4453V10.0939L6.19692 1.88463V1.38952C6.19692 0.622886 6.83578 0 7.61838 0H7.95378L12.3938 0.0319429L16.8339 0.0638858L18.9581 0.0798572L21.274 0.0958286L23.3822 0.1118L27.8063 0.159714L30.1221 0.175686L32.2304 0.191657L34.5462 0.207629L36.6545 0.2236L38.9703 0.239572L41.0786 0.255543L43.3944 0.271514L45.5026 0.287486L47.8504 0.319429L49.9587 0.3354L52.2745 0.351372L54.3987 0.367343H54.7341C55.5167 0.383315 56.1236 1.0062 56.1236 1.77283Z" fill="url(#paint1_linear_27_36)"/>
// <path d="M56.1236 2.14019L56.0917 6.27679L56.0598 10.3495L54.1592 10.3335L51.6357 10.3176L49.3198 10.3016H46.7804L44.4645 10.2856L41.941 10.2697L39.6251 10.2537H37.0857L34.7698 10.2377L32.2304 10.2217L29.9305 10.2058H27.391L25.0752 10.1898L22.5357 10.1738L20.2198 10.1579H17.6964L15.3805 10.1419L12.841 10.1259L10.5252 10.1099H8.0017L6.13304 10.094L6.19692 1.88464L10.637 1.90061L15.4763 1.93256L17.7922 1.94853L20.3316 1.9645H22.6475L27.4869 1.99644L30.0263 2.01242H32.3422L34.8816 2.02839L37.1815 2.04436L39.721 2.06033H42.0368L44.5763 2.0763L46.8762 2.09227L49.4156 2.10824H51.7315L54.271 2.12422L56.1236 2.14019Z" fill="#0C8142"/>
// <path d="M61.8105 34.8841L0.176762 34.5927L0.0475271 61.9198L61.6813 62.2112L61.8105 34.8841Z" fill="#F7F9FC"/>
// <path d="M61.8215 34.884L0.18766 34.5927L0.164404 39.5119L61.7982 39.8032L61.8215 34.884Z" fill="#FBFCF7"/>
// <path d="M24.2127 45.5803L20.2358 45.5644L20.2518 41.5715L14.7736 41.5555L14.7576 45.5324L10.7807 45.5165L10.7488 50.9787L14.7257 50.9947L14.7097 54.9875L20.1879 55.0035L20.2039 51.0266L24.1808 51.0426L24.2127 45.5803Z" fill="url(#paint2_linear_27_36)"/>
// <path d="M51.2364 46.906L31.5276 46.8102C31.0006 46.8102 30.5693 46.379 30.5693 45.8519V45.4047C30.5693 44.8776 31.0006 44.4464 31.5276 44.4464L51.2364 44.5422C51.7634 44.5422 52.1947 44.9735 52.1947 45.5005V45.9477C52.1947 46.4748 51.7634 46.906 51.2364 46.906Z" fill="url(#paint3_linear_27_36)"/>
// <path opacity="0.5" d="M51.2204 52.7675L31.5116 52.6717C30.9846 52.6717 30.5534 52.2405 30.5534 51.7134V51.2662C30.5534 50.7392 30.9846 50.3079 31.5116 50.3079L51.2204 50.4038C51.7475 50.4038 52.1787 50.835 52.1787 51.362V51.8092C52.1787 52.3363 51.7475 52.7675 51.2204 52.7675Z" fill="url(#paint4_linear_27_36)"/>
// <path opacity="0.08" d="M6.13304 1.77286V2.12423L6.16498 6.2768L6.19692 10.3335V10.8287C6.19692 11.5953 6.83578 12.2182 7.60241 12.2182H7.93781L10.062 12.2022L12.3779 12.1862L14.4861 12.1703L16.802 12.1543L18.9102 12.1383L21.226 12.1223L23.3343 12.1064L25.6501 12.0904L27.7743 12.0744L30.0902 12.0585L32.1984 12.0425L34.5143 12.0265L36.6225 12.0105L38.9384 11.9946L41.0626 11.9786L43.3784 11.9626L45.4867 11.9467L47.8025 11.9307L49.9108 11.9147L52.2266 11.8987L54.3508 11.8828H54.6862C55.4528 11.8828 56.0757 11.2439 56.0757 10.4773V10.4613V10.1099C31.3679 11.18 7.52255 0.367371 7.52255 0.367371C6.75593 0.383342 6.13304 1.00623 6.13304 1.77286Z" fill="#80D264"/>
// </g>
// <defs>
// <linearGradient id="paint0_linear_27_36" x1="-2.08595e-07" y1="11.3333" x2="57.1389" y2="90.1944" gradientUnits="userSpaceOnUse">
// <stop stopColor="#6CFC8C"/>
// <stop offset="1" stopColor="#2E3E57"/>
// </linearGradient>
// <linearGradient id="paint1_linear_27_36" x1="-629.93" y1="-39.931" x2="-27.6041" y2="2.02206" gradientUnits="userSpaceOnUse">
// <stop stopColor="#B0F4FF"/>
// <stop offset="0.0525488" stopColor="#A9F2FF"/>
// <stop offset="0.2879" stopColor="#8DE8FE"/>
// <stop offset="0.5247" stopColor="#79E1FD"/>
// <stop offset="0.7618" stopColor="#6DDDFC"/>
// <stop offset="1" stopColor="#69DCFC"/>
// </linearGradient>
// <linearGradient id="paint2_linear_27_36" x1="21.9779" y1="43.0953" x2="12.5975" y2="53.9124" gradientUnits="userSpaceOnUse">
// <stop stopColor="#6CBCFC"/>
// <stop offset="1" stopColor="#458DFC"/>
// </linearGradient>
// <linearGradient id="paint3_linear_27_36" x1="52.3847" y1="45.671" x2="28.8866" y2="45.671" gradientUnits="userSpaceOnUse">
// <stop stopColor="#6CBCFC"/>
// <stop offset="1" stopColor="#458DFC"/>
// </linearGradient>
// <linearGradient id="paint4_linear_27_36" x1="30.5519" y1="51.5322" x2="52.179" y2="51.5322" gradientUnits="userSpaceOnUse">
// <stop stopColor="#876F42"/>
// <stop offset="1" stopColor="#458DFC"/>
// </linearGradient>
// <clipPath id="clip0_27_36">
// <rect width="61.8574" height="85" fill="white"/>
// </clipPath>
// </defs>
// </svg>

//                 </div>

//                 <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
//                     <div className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
//                 </div>

//                 <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
//                     <div className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
//                 </div>

//                 <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                
//                     <div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
//                     {/* <svg width="68" height="95" className="rotate-[100deg]" viewBox="0 0 68 95" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clipPath="url(#clip0_27_0)">
// <path d="M64.9697 0H2.32971C1.04143 0 0 1.02822 0 2.30017V92.7074C0 93.9794 1.04143 95.0076 2.32971 95.0076H64.9697C66.258 95.0076 67.2994 93.9794 67.2994 92.7074V2.30017C67.2917 1.02822 66.2502 0 64.9697 0Z" fill="url(#paint0_linear_27_0)"/>
// <path d="M60.858 4.09766H6.43371C5.184 4.09766 4.16571 5.10303 4.16571 6.34451V81.0923C4.16571 82.3338 5.184 83.3316 6.43371 83.3316H60.858C62.1154 83.3316 63.126 82.3262 63.126 81.0923V6.34451C63.126 5.10303 62.1154 4.09766 60.858 4.09766Z" fill="white"/>
// <path d="M44.7737 39.636H22.5257C21.5074 39.636 20.682 38.8211 20.682 37.8157V15.8422C20.682 14.8369 21.5074 14.0219 22.5257 14.0219H44.7737C45.792 14.0219 46.6174 14.8369 46.6174 15.8422V37.8081C46.6174 38.8135 45.792 39.636 44.7737 39.636Z" fill="#999E65"/>
// <path d="M33.6497 92.5475C35.5413 92.5475 37.0748 91.0335 37.0748 89.1658C37.0748 87.2981 35.5413 85.7841 33.6497 85.7841C31.758 85.7841 30.2245 87.2981 30.2245 89.1658C30.2245 91.0335 31.758 92.5475 33.6497 92.5475Z" fill="white"/>
// <path d="M53.0357 51.015H14.256C13.2763 51.015 12.474 50.2229 12.474 49.2556C12.474 48.2883 13.2763 47.4962 14.256 47.4962H53.028C54.0077 47.4962 54.81 48.2883 54.81 49.2556C54.81 50.2229 54.0154 51.015 53.0357 51.015Z" fill="#EED70A"/>
// <path opacity="0.6" d="M46.4708 60.764H13.608C12.9831 60.764 12.4817 60.2613 12.4817 59.652V59.5302C12.4817 58.9132 12.9909 58.4182 13.608 58.4182H46.4708C47.0957 58.4182 47.5971 58.9208 47.5971 59.5302V59.652C47.6048 60.2613 47.0957 60.764 46.4708 60.764Z" fill="url(#paint1_linear_27_0)"/>
// <path opacity="0.3" d="M40.2146 66.9562H13.5C12.9369 66.9562 12.474 66.4992 12.474 65.9432V65.6081C12.474 65.0521 12.9369 64.5951 13.5 64.5951H40.2068C40.77 64.5951 41.2328 65.0521 41.2328 65.6081V65.9432C41.2328 66.4992 40.77 66.9562 40.2146 66.9562Z" fill="url(#paint2_linear_27_0)"/>
// <path opacity="0.6" d="M43.578 72.6914H13.5617C12.9677 72.6914 12.4817 72.2116 12.4817 71.6251V71.4119C12.4817 70.8254 12.9677 70.3456 13.5617 70.3456H43.578C44.172 70.3456 44.658 70.8254 44.658 71.4119V71.6251C44.658 72.204 44.172 72.6914 43.578 72.6914Z" fill="url(#paint3_linear_27_0)"/>
// <path d="M33.7166 26.1208C35.9441 26.1208 37.7498 24.3141 37.7498 22.0854C37.7498 19.8566 35.9441 18.05 33.7166 18.05C31.489 18.05 29.6833 19.8566 29.6833 22.0854C29.6833 24.3141 31.4805 26.1208 33.7166 26.1208ZM33.7166 28.1385C31.0249 28.1385 25.65 29.4892 25.65 32.1739V33.1869C25.65 33.7441 26.1056 34.2 26.6625 34.2H40.7875C41.3444 34.2 41.8 33.7441 41.8 33.1869V32.1739C41.7831 29.4977 36.4082 28.1385 33.7166 28.1385Z" fill="white"/>
// </g>
// <defs>
// <linearGradient id="paint0_linear_27_0" x1="4.07698" y1="45.0301" x2="67.3445" y2="50.4539" gradientUnits="userSpaceOnUse">
// <stop stopColor="#6CFC7A"/>
// <stop offset="1" stopColor="#359D97"/>
// </linearGradient>
// <linearGradient id="paint1_linear_27_0" x1="47.6026" y1="59.5877" x2="12.4813" y2="59.5877" gradientUnits="userSpaceOnUse">
// <stop stopColor="#E0B726"/>
// <stop offset="1" stopColor="#937F19"/>
// </linearGradient>
// <linearGradient id="paint2_linear_27_0" x1="41.2336" y1="65.7799" x2="12.4813" y2="65.7799" gradientUnits="userSpaceOnUse">
// <stop stopColor="#56EBA4"/>
// <stop offset="1" stopColor="#458DFC"/>
// </linearGradient>
// <linearGradient id="paint3_linear_27_0" x1="44.6574" y1="71.5124" x2="12.4813" y2="71.5124" gradientUnits="userSpaceOnUse">
// <stop stopColor="#6CBCFC"/>
// <stop offset="1" stopColor="#458DFC"/>
// </linearGradient>
// <clipPath id="clip0_27_0">
// <rect width="67.2917" height="95" fill="white"/>
// </clipPath>
// </defs>
// </svg> */}
//                 </div>

//                 <div className="absolute bottom-[20%] left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                
                    
//                     <div className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`} />
//                     <svg width="80" height="72" className="rotate-[270deg]" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clipPath="url(#clip0_33_0)">
// <path d="M66.4755 14.0107H13.2584V71.1274H66.4755V14.0107Z" fill="url(#paint0_linear_33_0)"/>
// <path d="M13.0382 14.0107C13.1024 14.0107 13.1666 14.0383 13.2584 14.0658C13.2584 33.068 13.2584 52.0701 13.2584 71.0998C9.13864 71.421 5.66118 70.3841 2.89939 67.7233C0.945041 65.8332 -2.18718e-05 63.6127 -2.18718e-05 61.0987C-2.18718e-05 52.1986 -2.18718e-05 43.3077 -2.18718e-05 34.4076C-2.18718e-05 31.0127 -0.00919724 27.6178 -0.00919724 24.2229C-0.00919724 20.1215 2.20207 17.1395 6.26675 15.1209C8.35873 14.0933 10.6801 13.9373 13.0382 14.0107Z" fill="url(#paint1_linear_33_0)"/>
// <path d="M21 3V15C21 16.6569 22.3431 18 24 18C25.6569 18 27 16.6569 27 15V3C27 1.34315 25.6569 -2.38418e-07 24 -2.38418e-07C22.3431 -2.38418e-07 21 1.34315 21 3Z" fill="#47AA37"/>
// <path d="M50 3V15C50 16.6569 51.3431 18 53 18C54.6569 18 56 16.6569 56 15V3C56 1.34315 54.6569 -2.38418e-07 53 -2.38418e-07C51.3431 -2.38418e-07 50 1.34315 50 3Z" fill="#47AA37"/>
// <path d="M51.8 0L25.2 0C22.8804 0 21 1.8804 21 4.2C21 6.51959 22.8804 8.4 25.2 8.4L51.8 8.4C54.1196 8.4 56 6.51959 56 4.2C56 1.8804 54.1196 0 51.8 0Z" fill="#47AA37"/>
// <path d="M80 24.0762C80 20.2959 77.9356 17.4791 74.2654 15.433C72.0083 14.176 69.4483 13.9374 66.8242 13.9925C66.4205 14.0016 66.4755 14.2127 66.4755 14.4329C66.4755 21.0391 66.4755 27.6362 66.4755 34.2425C66.4755 45.8493 66.4755 57.447 66.4663 69.0538C66.4663 69.7236 66.4663 70.3934 66.4663 71.1183C68.1179 71.1733 69.6869 71.1825 71.2284 70.8155C76.44 69.586 79.9908 65.7048 79.9908 61.1263C80.0092 48.7854 80 36.4262 80 24.0762Z" fill="url(#paint2_linear_33_0)"/>
// <rect x="18" y="14" width="44" height="57" fill="white"/>
// <path d="M44.2161 46.7852C44.2161 47.9688 44.2161 49.0882 44.2161 50.2168C44.2161 51.4921 44.2161 52.7675 44.2161 54.0337C44.2161 54.7953 43.8307 55.199 43.0783 55.199C41.0047 55.2082 38.9311 55.2082 36.8574 55.199C36.1693 55.199 35.7839 54.7677 35.7839 54.0429C35.7839 51.7674 35.7839 49.4919 35.7839 47.2164C35.7839 47.088 35.7839 46.9503 35.7839 46.7852C35.6096 46.7852 35.4811 46.7852 35.3435 46.7852C33.1047 46.7852 30.8567 46.7852 28.618 46.7852C27.7279 46.7852 27.3609 46.4273 27.3609 45.5373C27.3609 43.5646 27.3609 41.5919 27.3609 39.6192C27.3609 38.72 27.7188 38.3622 28.6088 38.3622C30.8384 38.3622 33.068 38.3622 35.2976 38.3622C35.4444 38.3622 35.5821 38.3622 35.7747 38.3622C35.7747 38.2154 35.7747 38.0961 35.7747 37.9768C35.7747 35.7013 35.7747 33.4258 35.7747 31.1504C35.7747 30.3062 36.1509 29.9392 36.9951 29.9392C38.9678 29.9392 40.9405 29.9392 42.9132 29.9392C43.8399 29.9392 44.1977 30.2879 44.1977 31.2329C44.2069 33.4901 44.1977 35.738 44.1977 37.9952C44.1977 38.1053 44.1977 38.2154 44.1977 38.3714C44.3445 38.3714 44.473 38.3714 44.5923 38.3714C46.8678 38.3714 49.1433 38.3714 51.4187 38.3805C52.2537 38.3805 52.6115 38.7476 52.6115 39.5825C52.6115 41.5644 52.6115 43.5463 52.6115 45.5282C52.6115 46.4365 52.2629 46.7852 51.3729 46.7852C49.1065 46.7852 46.8402 46.7852 44.5831 46.7944C44.4913 46.7852 44.3812 46.7852 44.2161 46.7852Z" fill="#51C156"/>
// </g>
// <defs>
// <linearGradient id="paint0_linear_33_0" x1="13.2597" y1="42.5656" x2="66.473" y2="42.5656" gradientUnits="userSpaceOnUse">
// <stop stopColor="#B0F4FF"/>
// <stop offset="1" stopColor="#69DCFC"/>
// </linearGradient>
// <linearGradient id="paint1_linear_33_0" x1="-2.18711e-05" y1="42.5746" x2="13.2597" y2="42.5746" gradientUnits="userSpaceOnUse">
// <stop stopColor="#6FFC6C"/>
// <stop offset="1" stopColor="#088B1D"/>
// </linearGradient>
// <linearGradient id="paint2_linear_33_0" x1="66.4686" y1="42.569" x2="80.0007" y2="42.569" gradientUnits="userSpaceOnUse">
// <stop stopColor="#91FC6C"/>
// <stop offset="1" stopColor="#0C672B"/>
// </linearGradient>
// <clipPath id="clip0_33_0">
// <rect width="80" height="71.1549" fill="white"/>
// </clipPath>
// </defs>
// </svg>


//                 </div>
//             </MouseParallax>
//         </div>
//     );
// };


const HeaderWords = [
    {
      text: "Treatment",
      className: "text-cyan-500 dark:text-green-500",
    },
    {
      text: "With",
      className: "text-white"
    },
    
   
  ];

  const HeaderWords2 = [
    {
        text: "The",
        className: "text-white"
      },
    {
      text: "Best",
      className: "text-white"
    },
    {
      text: "Doctor",
      className: "text-green-400 dark:text-blue-500",
      
    },
  ];


const Hero = () => {
    const parallaxRef = useRef(null);
    const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
`;

    return (

        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero">

            <div className="subContainer " >


                {/* <MouseParallax ref={parallaxRef} className="relative z-10">

                    
                <div className="hidden sm:block absolute inset-0 right- w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                        <img className="w-full" src={gradient} width={942} height={942} alt="" />
                    </div>
                </div>
                </MouseParallax> */}
                


                {/* <div className="absolute top-[30.25rem] -right-[20.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
                        <img className="w-full" src={gradient} width={942} height={942} alt="" />
                    </div>
                </div> */}

            
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 top-20 max-w-full mb-[3.875rem] md:mb-20 lg:mb-[18.25rem] lg:mt-[1.25rem]">
                    {/* <h1 className="h1 mb-6 mt-10">
                        <span className="text-green-500">
                        Treatment {` `}
                        </span>
                         with the {` `}
                    </h1> */}
                    {/* <h1 className="h1 mb-6">
                  
                        <span className="inline-block relative">
                            Best Doctor <img src={curve} className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} alt="" />
                        </span>
                    </h1> */}
                    
                    <div className="HeroTitleAndSubTitle  w-full flex  justify-around ">

                        

                        <div className=" flex flex-col justify-center items-center sm:items-start  h-[20rem]   ">

                            <div className="HeroTitle flex flex-col ">
                            <TypewriterEffectSmooth words={HeaderWords} nextline={false}/>
                            <TypewriterEffectSmooth words={HeaderWords2} nextline={true}/>

                            </div>
        
                            <div className="subtext w-[75%] text-center sm:text-left" >
                                <TextGenerateEffect words={words} />
                            </div>
                        </div>


                        <div className="hidden sm:flex flex-row  items-center justify-center h-[20rem]  ">
                        
                        <img
                            src="/HealersHealthcareLogo.png"
                            alt="hero"
                            className="CompanyLogo object-cover"
                        />

                        <div className="CompanyNameContainer flex flex-col  items-start">

                        <h1 className="CompanyName
                        text-7xl font-bold bg-gradient-to-r from-[#9029c1] via-[#00e7ea] to-[#4b73d1] inline-block text-transparent drop-shadow-2xl bg-clip-text">Healers</h1>
                         <h1 className="CompanyName
                        text-7xl font-bold bg-gradient-to-r from-[#9029c1] via-[#00e7ea] to-[#5079d8] inline-block text-transparent drop-shadow-2xl bg-clip-text">Healthcare</h1>
                        </div>                         
                        </div>
                    </div>
                </div>

                <div className="bottomButtonsSticky flex justify-around mb-10">
                <Tooltip title="Coming Soon" position="top" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                    <button className="z-20 relative inline-flex h-12  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="text-black inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#fff] px-3 py-1 text- font-medium backdrop-blur-3xl ">
                            Download Our Mobile App 
                        </span>
                    </button> 
                    </Tooltip>
                    <Tooltip title="Coming Soon" position="top" content="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                            <button className="z-20 relative inline-flex h-12  overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transform hover:-translate-y-1 transition duration-400">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="text-white inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#000000] px-3 py-1 text- font-medium backdrop-blur-3xl ">
                            Login as a Hospital 
                        </span>
                    </button>
                    </Tooltip>

                     
                </div>
            </div>

            
            



                            
                {/* <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl ">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className=" rounded-t-[0.9rem]" />


                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <div className="">
                                    <Video className="w-full"/>
                                </div>

                                <div className="flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 text-base">
                                    <img className="w-5 h-5 mr-4" src={loading} alt="" />
                                    Get medical help in seconds
                                </div>

                                <ScrollParallax isAbsolutelyPositioned className="z-50">
                                    <div className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-[#474060]/40 backdrop-blur border border-white/10 rounded-2xl xl:flex transition hover:scale-105">
                                        
                                        <h6 className="p-5 font-semibold text-base">
                                            I will change this later
                                        </h6>
                                    </div>
                                </ScrollParallax>

                                <ScrollParallax isAbsolutelyPositioned>
                                    <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="Meet the Team" />
                                </ScrollParallax>
                            </div>
                        </div>

                        <div className="relative z-1 h-6 mx-2.5 bg-[#2c9e5a] shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
                        <div className="relative z-1 h-6 mx-6 bg-[#165a31] shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
                    </div>
                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                    </div>
                </div> */}
            </div>

                {/* <div className="hidden relative z-10 mt-20 lg:block">
                    <h5 className="tagline mb-6 text-center text-white/50">Helping people create beautiful content at</h5>
                    <ul className="flex">
                        <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                            <img src={yourlogo} width={134} height={28} alt="" />
                        </li>
                        <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                            <img src={yourlogo} width={134} height={28} alt="" />
                        </li>
                        <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                            <img src={yourlogo} width={134} height={28} alt="" />
                        </li>
                        <li className="flex items-center justify-center flex-1 h-[8.5rem]">
                            <img src={yourlogo} width={134} height={28} alt="" />
                        </li>
                    </ul>
                </div> */}

                                            
        </Section>
    );
};


// BackgroundCircles.propTypes = {
//     parallaxRef: PropTypes.object,
// };

export default Hero;
