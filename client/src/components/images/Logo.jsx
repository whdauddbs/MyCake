import React from "react";

function Icon({ style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="116"
      height="30"
      viewBox="0 0 116 30"
      style={style}
    >
      <defs>
        <pattern
          id="a"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 485 125"
        >
          <image
            width="485"
            height="125"
            xlinkHref="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <rect width="116" height="30" fill="url(#a)" />
    </svg>
  );
}

export default Icon;
