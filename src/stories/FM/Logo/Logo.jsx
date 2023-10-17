import React from "react";
import "./logo.css";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <rect class="logo-type" width="40" height="40"></rect>
      <path
        class="logo-background"
        d="M40,0H0V40H40V0ZM11.45,22.07v3.74h-3.45V14.41h8.63v3.01h-5.19v1.65h5.19v3.01h-5.19Zm20.55-7.66v11.4h-3.45v-6.86l-2.54,6.86h-1.54l-2.54-6.86v6.86h-3.45V14.41h4.76l2,5.47,2-5.47h4.76Z"
      ></path>
    </svg>
  );
};
