import React from "react";

import { Button, Img, Line, List, Text } from "components";

const C04HomepageShoppingCartPopupShoppingcart = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-6 py-4 shadow-bs2 w-auto md:w-full">
          {props?.shoppingcarttext}
        </div>
        <List
          className="flex flex-col gap-4 items-start w-auto"
          orientation="vertical"
        >
          <div className="bg-white-A700 flex flex-row gap-4 items-center justify-center my-0 rounded-[3px] w-auto">
            <Img
              className="h-20 md:h-auto object-cover w-20"
              src="images/img_image_50.png"
              alt="image"
            />
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="leading-[20.00px] max-w-[200px] md:max-w-full text-gray-900 text-sm"
                size="txtPublicSansRegular14Gray900"
              >
                {props?.producttext1}
              </Text>
              <div className="flex flex-row gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.productcounter1}
                </Text>
                <Text
                  className="text-blue-500 text-sm w-auto"
                  size="txtPublicSansSemiBold14Blue500"
                >
                  {props?.productprice1}
                </Text>
              </div>
            </div>
            <Img
              className="h-4 w-4"
              src="images/img_close_blue_gray_300.svg"
              alt="close"
            />
          </div>
          <div className="bg-white-A700 flex flex-row gap-4 items-center justify-center my-0 rounded-[3px] w-auto">
            <Img
              className="h-20 md:h-auto object-cover w-20"
              src="images/img_image_3.png"
              alt="image"
            />
            <div className="flex flex-col gap-2 items-start justify-start w-auto">
              <Text
                className="leading-[20.00px] max-w-[200px] md:max-w-full text-gray-900 text-sm"
                size="txtPublicSansRegular14Gray900"
              >
                {props?.producttext2}
              </Text>
              <div className="flex flex-row gap-1 items-start justify-start w-auto">
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.productcounter2}
                </Text>
                <Text
                  className="text-blue-500 text-sm w-auto"
                  size="txtPublicSansSemiBold14Blue500"
                >
                  {props?.productprice2}
                </Text>
              </div>
            </div>
            <Img
              className="h-4 w-4"
              src="images/img_close_blue_gray_300.svg"
              alt="close"
            />
          </div>
        </List>
        <Line className="bg-gray-300 h-px w-full" />
        <div className="flex flex-row gap-[164px] items-start justify-between w-auto">
          <Text
            className="text-blue_gray-700 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray700"
          >
            {props?.subtotaltext}
          </Text>
          <Text
            className="text-gray-900 text-sm w-auto"
            size="txtPublicSansMedium14Gray900"
          >
            {props?.subtotalprice}
          </Text>
        </div>
        <div className="flex flex-col gap-3 items-start justify-start w-auto">
          <Button
            className="cursor-pointer flex items-center justify-center w-[328px]"
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
              {props?.checkoutbutton}
            </div>
          </Button>
          <Button
            className="cursor-pointer font-bold font-publicsans text-center text-sm tracking-[0.17px] uppercase w-[328px]"
            shape="round"
            color="orange_50"
            size="xl"
            variant="outline"
          >
            {props?.viewcartbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

C04HomepageShoppingCartPopupShoppingcart.defaultProps = {
  shoppingcarttext: (
    <Text
      className="text-base text-gray-900 w-auto"
      size="txtPublicSansMedium16"
    >
      <span className="text-gray-900 font-publicsans text-left font-medium">
        Shopping Cart{" "}
      </span>
      <span className="text-blue_gray-600 font-publicsans text-left font-normal">
        (02)
      </span>
    </Text>
  ),
  producttext1: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm",
  productcounter1: "1 x",
  productprice1: "$1,500",
  producttext2: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
  productcounter2: "2 x",
  productprice2: "$269",
  subtotaltext: "Sub-Total:",
  subtotalprice: "$2038.00 USD",
  checkoutbutton: "Checkout now",
  viewcartbutton: "View Cart",
};

export default C04HomepageShoppingCartPopupShoppingcart;
