import React from 'react';

function BenefitCard({
  title,
  icon,
  hoverImage,
}: {
  title?: string;
  icon?: HTMLOrSVGImageElement;
  hoverImage: string;
}) {
  return (
    <div className="relative border-gray-800 border rounded-xl w-auto h-auto mt-2 p-2 cursor-pointer">
      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <img
          src={hoverImage}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="transition-opacity duration-300 hover:opacity-0 ">
        <div className="relative flex h-24 justify-center p-4 lg:h-32">
          <svg
            viewBox="0 0 159 158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M157.67 79c0-18.064-6.024-34.621-16.189-47.79-12.538-16.243-31.377-27.33-52.98-29.724A80.146 80.146 0 0 0 79.668 1C62.495 1 46.683 6.445 33.85 15.717a77.628 77.628 0 0 0-8.858 7.466L79.67 79v78c18.421 0 35.276-6.264 48.567-16.796 16.546-13.111 27.571-32.834 29.219-55.317.143-1.943.215-3.906.215-5.887Z"
              fill="#1E1E21"
            ></path>
            <path
              d="M79.67 1C62.494 1 46.682 6.445 33.85 15.717a77.628 77.628 0 0 0-8.858 7.466L79.67 79v78c18.421 0 35.276-6.264 48.567-16.796 16.546-13.111 27.571-32.834 29.219-55.317.143-1.943.215-3.906.215-5.887 0-18.064-6.024-34.621-16.188-47.79C128.943 14.967 110.104 3.88 88.5 1.486A80.146 80.146 0 0 0 79.67 1Zm0 0v17.89M157.454 79H139.78"
              stroke="#1E1E21"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <path
              d="M79.667 157c18.42 0 35.276-6.264 48.567-16.796 16.546-13.111 27.57-32.834 29.219-55.317.143-1.943.215-3.906.215-5.887 0-18.064-6.024-34.621-16.189-47.79-12.538-16.243-31.377-27.33-52.98-29.724A80.147 80.147 0 0 0 79.666 1m0 156c-4.005 0-7.936-.296-11.773-.868a77.544 77.544 0 0 1-48.566-27.494C8.276 115.187 1.668 97.919 1.668 79m78 78V79L24.99 23.183M1.668 79c0-5.036.468-9.956 1.364-14.717a77.516 77.516 0 0 1 21.958-41.1M1.668 79h17.66m60.34-78C62.492 1 46.68 6.445 33.847 15.717a77.628 77.628 0 0 0-8.858 7.466M79.667 1v17.89M157.453 79h-17.675M21.705 42.504l3.578 2.147m17.89 93.028 2.862-3.578m-24.33-17.89 3.578-2.147"
              stroke="#1E1E21"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <path
              d="m43.172 21.037 2.862 3.578m68.697-3.578-2.862 3.578m24.33 17.89-3.578 2.146m-17.89 93.028-2.862-3.578m24.33-17.89-3.578-2.147M96.126 41.789l-17.89 37.927h32.202M96.126 41.789l-10.018 6.44m10.018-6.44 1.431 10.734m12.881 27.193-7.156-5.725m7.156 5.725-7.156 7.155M79.667 3.122v15.919M139.627 79h15.918"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <p className="mt-6 text-center text-sm text-black lg:text-base">
          {title || 'Flexible working hours'}
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
