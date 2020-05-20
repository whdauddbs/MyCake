import React from "react";

function Icon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      viewBox="0 0 56.007 68.378"
    >
      <defs>
        <filter id="a" style={style} x="0" y="0" filterUnits="userSpaceOnUse">
          <feOffset dy="3"></feOffset>
          <feGaussianBlur result="b" stdDeviation="3"></feGaussianBlur>
          <feFlood floodOpacity="0.161"></feFlood>
          <feComposite in2="b" operator="in"></feComposite>
          <feComposite in="SourceGraphic"></feComposite>
        </filter>
      </defs>
      <g filter="url(#a)" transform="translate(10 7) translate(-10 -7)">
        <path
          fill="#fff"
          stroke="#ec728c"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M28.361 7a2.8 2.8 0 00-.363.026A2.819 2.819 0 0027.635 7a17.641 17.641 0 00-17.64 17.641c0 17.047 17.883 30.841 18 30.787.12.054 18-13.74 18-30.787A17.641 17.641 0 0028.361 7z"
        ></path>
      </g>
      <g
        stroke="#ec728c"
        strokeLinejoin="round"
        strokeWidth="1.113"
        transform="translate(10 7) translate(5.71 7.88)"
      >
        <path
          fill="#ec728c"
          d="M22.097 5.419c-1.065.007-1.3 1.4-1.994 1.989-1.365 1.163-1.68.241-2.98-.179-1.722-.555-2.524 1.057-3.252 2.271-.756 1.26-1.862 2.666-3.48 2.291s-2.181-1.8-2.69-3.2c-.369-1.016-.85-1.874-2.065-1.444-1.071.379-1.311 1.879-2.438 2-1.249.137-1.814-1.173-2.262-2.084A15.673 15.673 0 000 5.282v4.454c0 2.73 5.363 4.944 11.98 4.944s11.98-2.214 11.98-4.944V6.189c-.615.072-1.236-.774-1.863-.77z"
          transform="translate(0 6.666)"
        ></path>
        <path
          fill="#6cc"
          d="M0 0v5.286a15.671 15.671 0 01.936 1.781c.448.911 1.013 2.221 2.262 2.084 1.127-.123 1.368-1.624 2.438-2 1.216-.431 1.7.427 2.065 1.444.509 1.4 1.065 2.823 2.69 3.2s2.724-1.031 3.48-2.291c.728-1.214 1.53-2.826 3.252-2.271 1.3.42 1.615 1.341 2.98.179.69-.587.929-1.982 1.994-1.989.627 0 1.248.842 1.863.774V.004z"
          transform="translate(0 6.666)"
        ></path>
        <ellipse
          cx="11.98"
          cy="4.944"
          fill="#6cc"
          rx="11.98"
          ry="4.944"
          transform="translate(0 2.002)"
        ></ellipse>
        <path
          fill="#fff"
          d="M9.567 5.833a2.113 2.113 0 002.135-2.226A4.825 4.825 0 009.548-.001a4.824 4.824 0 00-2.163 3.608 2.04 2.04 0 002.182 2.226z"
        ></path>
        <path
          fill="#fff"
          d="M5.436 7.4A2.114 2.114 0 007.57 5.174a4.825 4.825 0 00-2.154-3.608 4.824 4.824 0 00-2.162 3.608A2.04 2.04 0 005.436 7.4zM14.372 5.833a2.113 2.113 0 01-2.134-2.226 4.825 4.825 0 012.154-3.608 4.824 4.824 0 012.162 3.608 2.04 2.04 0 01-2.182 2.226z"
        ></path>
        <path
          fill="#fff"
          d="M18.504 7.4a2.114 2.114 0 01-2.134-2.226 4.825 4.825 0 012.154-3.608 4.824 4.824 0 012.162 3.608A2.04 2.04 0 0118.504 7.4z"
        ></path>
        <circle
          cx="0.831"
          cy="0.831"
          r="0.831"
          fill="#fff"
          transform="translate(1.114 6.574)"
        ></circle>
        <circle
          cx="0.831"
          cy="0.831"
          r="0.831"
          fill="#fff"
          transform="translate(4.566 8.113)"
        ></circle>
        <circle
          cx="0.831"
          cy="0.831"
          r="0.831"
          fill="#fff"
          transform="translate(20.774 6.188)"
        ></circle>
        <circle
          cx="0.831"
          cy="0.831"
          r="0.831"
          fill="#fff"
          transform="translate(17.579 8.113)"
        ></circle>
        <path
          fill="#fff"
          d="M9.567 10.167a2.114 2.114 0 002.135-2.226 4.825 4.825 0 00-2.154-3.608 4.824 4.824 0 00-2.163 3.608 2.04 2.04 0 002.182 2.226zM14.372 10.167a2.113 2.113 0 01-2.134-2.226 4.825 4.825 0 012.154-3.608 4.824 4.824 0 012.162 3.608 2.04 2.04 0 01-2.182 2.226z"
        ></path>
      </g>
    </svg>
  );
}

export default Icon;
