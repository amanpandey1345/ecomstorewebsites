import React from "react";

import { Img, Line, PagerIndicator, Text } from "components";

const C02HomepagePopupsWidget = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-9 items-end justify-start my-0.5 w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-[90px] items-start justify-start md:mt-0 mt-[84px] w-[47%] md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Line className="bg-blue-500 h-0.5 w-[12%]" />
                    <Text
                      className="text-blue-700 text-sm w-auto"
                      size="txtPublicSansSemiBold14"
                    >
                      {props?.price}
                    </Text>
                  </div>
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
                    size="txtPublicSansSemiBold48"
                  >
                    {props?.xboxconsoles}
                  </Text>
                </div>
                <Text
                  className="leading-[24.00px] max-w-[356px] md:max-w-full text-blue_gray-700 text-lg"
                  size="txtPublicSansRegular18"
                >
                  {props?.priceOne}
                </Text>
              </div>
              <div className="bg-deep_orange-A200 flex flex-row gap-3 items-center justify-center sm:px-5 px-8 rounded-[3px] w-auto">
                {!!props?.label ? (
                  <Text
                    className="text-base text-white-A700 tracking-[0.19px] uppercase w-auto"
                    size="txtPublicSansBold16"
                  >
                    {props?.label}
                  </Text>
                ) : null}
                {!!props?.arrowdown ? (
                  <Img
                    className="h-6 w-6"
                    alt="arrowdown"
                    src={props?.arrowdown}
                  />
                ) : null}
              </div>
            </div>
            <PagerIndicator
              className="flex gap-2 h-2.5 items-start justify-start w-[46px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-gray-900 w-2.5"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-200 w-2.5"
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
          <div className="h-[408px] relative w-[49%] md:w-full">
            <Img
              className="absolute h-[408px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_image.png"
              alt="image"
            />
            <div className="absolute bg-blue-500 flex flex-col items-center justify-start outline outline-[4px] outline-white-A700 sm:px-5 px-[22px] right-[0] rounded-[50px] top-[0] w-[101px]">
              {!!props?.priceTwo ? (
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl w-auto"
                  size="txtPublicSansSemiBold22"
                >
                  {props?.priceTwo}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepagePopupsWidget.defaultProps = {
  price: "THE BEST PLACE TO PLAY",
  xboxconsoles: "Xbox Consoles",
  priceOne:
    "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
};

export default C02HomepagePopupsWidget;
