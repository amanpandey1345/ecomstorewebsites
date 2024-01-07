import React from "react";

import { Img, Text } from "components";

const C02HomepagePopupsWidget1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute bottom-[0] h-[201px] object-cover right-[0] w-[56%]"
          src="images/img_image5.png"
          alt="imageFive"
        />
        <div className="absolute bg-amber-A200 flex flex-col h-10 md:h-auto items-center justify-end px-4 py-2 right-[6%] rounded-sm top-[10%] w-[102px]">
          {!!props?.offer ? (
            <Text
              className="text-base text-gray-900_01 w-auto"
              size="txtPublicSansSemiBold16Gray90001"
            >
              {props?.offer}
            </Text>
          ) : null}
        </div>
        <div className="absolute flex flex-col gap-[18px] h-max inset-y-[0] items-center justify-start left-[9%] my-auto w-auto">
          <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
            <Text
              className="text-amber-500 text-sm uppercase w-auto"
              size="txtPublicSansMedium14Amber500"
            >
              {props?.summersales}
            </Text>
            <Text
              className="leading-[32.00px] max-w-[160px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtPublicSansSemiBold24"
            >
              {props?.newgooglepixel}
            </Text>
          </div>
          <div className="bg-deep_orange-A200 flex flex-row gap-2 items-center justify-center sm:px-5 px-6 rounded-sm w-auto">
            <Text
              className="text-sm text-white-A700 tracking-[0.17px] uppercase w-auto"
              size="txtPublicSansBold14"
            >
              {props?.label}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_arrowleft_white_a700.svg"
              alt="arrowdown"
            />
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepagePopupsWidget1.defaultProps = {
  summersales: "Summer Sales",
  newgooglepixel: "New Google Pixel 6 Pro",
  label: "Shop Now",
};

export default C02HomepagePopupsWidget1;
