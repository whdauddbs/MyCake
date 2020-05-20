import React from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="179"
      height="62"
      viewBox="0 0 179 62"
    >
      <defs>
        <filter
          id="a"
          x="0"
          y="0"
          width="179"
          height="62"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="2" result="b" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="b" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="translate(-57.821 -1.914)">
        <g transform="translate(69.515 5.495)">
          <g transform="matrix(1, 0, 0, 1, -11.69, -3.58)" filter="url(#a)">
            <g
              transform="translate(6 3)"
              fill="#fff"
              stroke="#6cc"
              strokeWidth="1.5"
            >
              <rect width="167" height="50" rx="25" stroke="none" />
              <rect
                x="0.75"
                y="0.75"
                width="165.5"
                height="48.5"
                rx="24.25"
                fill="none"
              />
            </g>
          </g>
          <text
            transform="translate(20.306 20.419)"
            fill="#f0959d"
            fontSize="12"
            fontFamily="NotoSansCJKkr-Bold, Noto Sans CJK KR"
            fontWeight="700"
            letterSpacing="-0.039em"
          >
            <tspan x="0" y="0">
              플러스채널
            </tspan>
            <tspan y="0" fontSize="10">
              {" "}
            </tspan>
            <tspan y="0" fill="#6cc" fontSize="10">
              추가하면,
            </tspan>
            <tspan x="0" y="18">
              사은품
            </tspan>
            <tspan y="18" fontSize="10">
              {" "}
            </tspan>
            <tspan y="18" fill="#6cc" fontSize="10">
              제공!
            </tspan>
            <tspan x="97" y="22" fontSize="9">
              Touch!
            </tspan>
          </text>
        </g>
        <a href="http://pf.kakao.com/_BExnxlxb">
          <g transform="translate(-1 -6)">
            <ellipse
              cx="12.5"
              cy="11"
              rx="12.5"
              ry="11"
              transform="translate(188.821 21.914)"
              fill="#f0959d"
            />
            <path
              d="M194.3,39.91v6.319l4.656-3.658Z"
              transform="matrix(1, 0.017, -0.017, 1, -0.218, -3.425)"
              fill="#f0959d"
            />
            <text
              transform="translate(192.821 37.914)"
              fill="#fff"
              fontSize="15"
              fontFamily="YanoljaYacheR, Yanolja Yache"
            >
              <tspan x="0" y="0">
                Ch
              </tspan>
            </text>
          </g>
        </a>
      </g>
    </svg>
  );
}

export default Icon;
