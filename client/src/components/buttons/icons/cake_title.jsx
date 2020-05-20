import React from "react";

function Icon({ style, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 153.851 50.605"
    >
      <g transform="translate(-1102.243 -1290.366) translate(-148 -3)">
        <rect
          width="144.198"
          height="41.2"
          fill={{ fill } == "A" ? "#ec728c" : "#6cc"}
          stroke="#e94c56"
          strokeMiterlimit="10"
          strokeWidth="2.524"
          rx="7.645"
          transform="translate(1258.635 1301.509)"
        ></rect>
        <rect
          width="144.198"
          height="41.2"
          fill={{ fill } != "A" ? "#ec728c" : "#6cc"}
          stroke="#e94c56"
          strokeLinejoin="round"
          strokeWidth="2.524"
          rx="7.645"
          transform="translate(1251.505 1294.628)"
        ></rect>
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3.109"
          d="M1375.358 1311.11l4.353 4.353-4.353 4.353"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
