/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import React from "react";

interface Image {
  url: string;
  alt: string;
}

interface Props {
  images: string | string[];
  color: string;
}

const Two: React.FC<Props> = ({ images, color }) => {
  return (
    <div className="w-full h-full justify-start items-start gap-[22px] inline-flex">
      <div className="w-1/2 h-full flex-col justify-start items-end gap-[38px] inline-flex">
        <div className={`w-full h-2 bg-${color}`} />
        <Image
          unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full md:h-[300px] object-cover object-center"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            display: "block",
          }}
          src={images[0]}
          alt="Image"
        />
      </div>
      <div className="w-1/2 h-full flex-col justify-start items-start gap-[38px] inline-flex">
        <Image
          unoptimized
          placeholder="empty"
          blurDataURL={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Crect width='60' height='60' rx='8' ry='8' fill='%23E2E8F0'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='%234B5563' stroke-width='1.5'/%3E%3C/svg%3E`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full md:h-[300px] object-cover object-center"
          src={images[1]}
          alt="Image"
        />
        <div className={`w-full h-2 bg-${color}`} />
      </div>
    </div>
  );
};

export default Two;
