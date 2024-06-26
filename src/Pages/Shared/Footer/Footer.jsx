import React from "react";
import { FaRegCopyright } from "react-icons/fa";

// Footer List -1
const footerList = ["Help", "Products", "Sizing Guide", "Policy", "Stories"];

// Footer List -1
const footerList2 = ["FAQS", "About", "Contacts", "Siddles", "Stories"];

// Footer List -1
const footerList3 = [
  "Branches",
  "Guideline",
  "Sizing Guide",
  "Summer Suit",
  "Stories",
];

// Footer List -1
const footerList4 = [
  "Winter Cap",
  " Jump Case",
  "Nexa.co ",
  "Careers ",
  "Stories",
];

// Footer List -1
const footerList5 = ["Legal", "  Vultures", "Site Map ", "Jangle ", "Glasses"];

const Footer = () => {
  return (
    <footer className="bg-[#111E2C] rounded-xl mt-5">
      <h2 className="flex justify-center py-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="315"
          height="140"
          viewBox="0 0 315 140"
          fill="none"
        >
          <path
            d="M39.1057 103.418C31.9102 103.418 25.3405 101.591 19.3964 97.9383C13.5045 94.2852 8.78575 89.3973 5.24016 83.2745C1.74672 77.1003 0 70.283 0 62.8225C0 57.1628 1.01675 51.889 3.05024 47.0011C5.08374 42.0617 7.87328 37.7398 11.4189 34.0353C15.0166 30.2793 19.1879 27.3466 23.9327 25.237C28.6775 23.1275 33.7352 22.0728 39.1057 22.0728C44.9976 22.0728 50.3942 23.2562 55.2954 25.6229C60.2488 27.9383 64.4723 31.1797 67.9657 35.3473C71.5113 39.5149 74.1444 44.3513 75.865 49.8567C77.6378 55.362 78.2896 61.2532 77.8203 67.5303H13.9998C14.6255 71.9037 16.0855 75.814 18.3797 79.2613C20.6739 82.6571 23.5938 85.3583 27.1393 87.3649C30.7371 89.3716 34.7259 90.4006 39.1057 90.452C43.7984 90.452 48.0479 89.2687 51.8541 86.9019C55.6604 84.4837 58.7367 81.1907 61.0831 77.0232L74.4572 80.1103C71.3288 86.9533 66.61 92.5616 60.301 96.935C53.9919 101.257 46.9268 103.418 39.1057 103.418ZM13.6088 57.3429H64.6026C64.1855 53.0209 62.7777 49.0849 60.3792 45.5347C57.9807 41.9331 54.9305 39.0518 51.2285 36.8909C47.5264 34.7299 43.4855 33.6494 39.1057 33.6494C34.7259 33.6494 30.711 34.7042 27.0611 36.8137C23.4113 38.9232 20.3871 41.7788 17.9886 45.3804C15.6423 48.9305 14.1823 52.918 13.6088 57.3429Z"
            fill="white"
          />
          <path
            d="M130.597 37.1996H112.843L112.765 101.411H99.6254L99.7036 37.1996H86.2513V24.2337H99.7036L99.6254 0H112.765L112.843 24.2337H130.597V37.1996Z"
            fill="white"
          />
          <path
            d="M205.514 24.2337H218.653V101.411H205.514L204.966 88.3683C202.516 92.8446 199.127 96.4719 194.799 99.2503C190.523 102.029 185.414 103.418 179.469 103.418C173.734 103.418 168.363 102.363 163.358 100.254C158.352 98.0926 153.92 95.1341 150.062 91.3782C146.256 87.5708 143.284 83.1974 141.146 78.258C139.008 73.3186 137.939 67.9934 137.939 62.2822C137.939 56.7769 138.982 51.5803 141.068 46.6924C143.153 41.8045 146.047 37.534 149.749 33.8809C153.503 30.1764 157.831 27.2951 162.732 25.237C167.633 23.1275 172.9 22.0728 178.531 22.0728C184.684 22.0728 190.08 23.5134 194.721 26.3947C199.361 29.2245 203.115 32.9033 205.983 37.4311L205.514 24.2337ZM179.235 90.8379C184.397 90.8379 188.855 89.6031 192.609 87.1334C196.415 84.6123 199.335 81.2165 201.369 76.946C203.454 72.6755 204.497 67.9677 204.497 62.8225C204.497 57.5744 203.454 52.8409 201.369 48.6218C199.283 44.3513 196.337 40.9813 192.531 38.5116C188.777 35.9904 184.345 34.7299 179.235 34.7299C174.073 34.7299 169.38 35.9904 165.157 38.5116C160.933 41.0327 157.57 44.4285 155.067 48.699C152.617 52.918 151.392 57.6259 151.392 62.8225C151.392 68.0191 152.669 72.7527 155.224 77.0232C157.779 81.2422 161.168 84.6123 165.391 87.1334C169.615 89.6031 174.229 90.8379 179.235 90.8379Z"
            fill="white"
          />
          <path
            d="M247.425 140H234.286V24.2337H247.425V37.4311C250.085 32.9033 253.63 29.2503 258.062 26.4719C262.494 23.642 267.76 22.2271 273.861 22.2271C279.544 22.2271 284.863 23.2819 289.816 25.3914C294.821 27.5009 299.201 30.4337 302.955 34.1896C306.71 37.8942 309.656 42.1904 311.793 47.0783C313.931 51.9662 315 57.2143 315 62.8225C315 68.4307 313.931 73.7045 311.793 78.6439C309.656 83.5832 306.71 87.9309 302.955 91.6869C299.201 95.3914 294.821 98.2984 289.816 100.408C284.863 102.517 279.544 103.572 273.861 103.572C267.76 103.572 262.494 102.183 258.062 99.4046C253.63 96.5748 250.085 92.896 247.425 88.3683V140ZM273.704 34.8071C268.647 34.8071 264.215 36.0676 260.408 38.5888C256.602 41.1099 253.656 44.48 251.571 48.699C249.537 52.918 248.52 57.6259 248.52 62.8225C248.52 67.9677 249.537 72.6755 251.571 76.946C253.656 81.2165 256.576 84.6123 260.33 87.1334C264.137 89.6545 268.595 90.9151 273.704 90.9151C278.762 90.9151 283.403 89.6803 287.626 87.2106C291.849 84.6895 295.239 81.3194 297.793 77.1003C300.348 72.8298 301.626 68.0706 301.626 62.8225C301.626 57.6773 300.374 52.9952 297.872 48.7762C295.369 44.5057 292.006 41.1099 287.782 38.5888C283.559 36.0676 278.866 34.8071 273.704 34.8071Z"
            fill="white"
          />
        </svg>
      </h2>

      <section className="flex  flex-wrap">
        <div className="border-1 border-[#767676] py-10 pl-[50px]  flex-grow ">
          {footerList.map((list, i) => (
            <a
              href="#"
              key={i}
              className="block text-xl font-semibold leading-[33.6px] text-white duration-300 mb-2"
            >
              {list}
            </a>
          ))}
        </div>

        <div className="border-1 border-[#767676] py-10 pl-[50px] flex-grow  border-x-0">
          {footerList2.map((list, i) => (
            <a
              href="#"
              key={i}
              className="block text-xl font-semibold leading-[33.6px] text-white duration-300 mb-2"
            >
              {list}
            </a>
          ))}
        </div>

        <div className="border-1 border-[#767676] py-10 pl-[50px] flex-grow ">
          {footerList3.map((list, i) => (
            <a
              href="#"
              key={i}
              className="block text-xl font-semibold leading-[33.6px] text-white duration-300 mb-2"
            >
              {list}
            </a>
          ))}
        </div>

        <div className="border-1 border-[#767676] py-10 pl-[50px] flex-grow border-x-0">
          {footerList4.map((list, i) => (
            <a
              href="#"
              key={i}
              className="block text-xl font-semibold leading-[33.6px] text-white duration-300 mb-2"
            >
              {list}
            </a>
          ))}
        </div>

        <div className="border-1 border-[#767676] py-10 pl-[50px] flex-grow ">
          {footerList5.map((list, i) => (
            <a
              href="#"
              key={i}
              className="block text-xl font-semibold leading-[33.6px] text-white duration-300 mb-2"
            >
              {list}
            </a>
          ))}
        </div>
      </section>
      <p className="text-white text-xl font-medium flex items-center gap-3 justify-center mt-5 pb-7 leading-7">
        <FaRegCopyright className="text-2xl" />

        <span>etap 2023 All right reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
