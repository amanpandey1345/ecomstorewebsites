import React from "react";

import { Button, Img, Text } from "components";

const C02HomepagePopupsWidget2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-40 md:h-auto object-cover w-40"
          src="images/img_image4.png"
          alt="imageFour"
        />
        <div className="flex flex-col gap-5 items-start justify-start w-auto">
          <div className="flex flex-col gap-3 items-start justify-start w-auto">
            <Text
              className="leading-[32.00px] max-w-[172px] md:max-w-full text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtPublicSansSemiBold24Gray900"
            >
              {props?.title}
            </Text>
            <Text
              className="text-blue-500 text-lg w-auto"
              size="txtPublicSansSemiBold18"
            >
              {props?.price}
            </Text>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[156px]"
            rightIcon={
              <Img
                className="h-5 ml-2"
                src="images/img_arrowleft_white_a700.svg"
                alt="arrow_down"
              />
            }
            shape="round"
            color="deep_orange_A200"
            size="xl"
            variant="fill"
          >
            <div className="font-bold font-publicsans text-left text-sm tracking-[0.17px] uppercase">
              {props?.buttontext}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

C02HomepagePopupsWidget2.defaultProps = {
  title: "Xiaomi FlipBuds Pro",
  price: "$299 USD",
  buttontext: "Shop Now",
};

export default C02HomepagePopupsWidget2;
