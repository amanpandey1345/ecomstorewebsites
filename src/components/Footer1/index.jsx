import React from "react";

import { Button, Img, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-6 items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1320px] w-full">
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtPublicSansSemiBold24Gray900"
              >
                Today Best Deals
              </Text>
              <div className="flex flex-row gap-3 items-center justify-start w-auto">
                <Text
                  className="text-black-900 text-sm w-auto"
                  size="txtPublicSansRegular14"
                >
                  Deals ends in
                </Text>
                <ul className="bg-amber-A100 flex flex-row gap-1.5 items-center justify-start px-3 py-1.5 rounded-sm w-auto md:w-full common-column-list">
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtPublicSansRegular16"
                    >
                      16d
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtPublicSansRegular16"
                    >
                      :
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtPublicSansRegular16"
                    >
                      21h
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtPublicSansRegular16"
                    >
                      :
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtPublicSansRegular16"
                    >
                      57m
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-center text-gray-900"
                      size="txtPublicSansRegular16"
                    >
                      :
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="text-base text-gray-900"
                      size="txtPublicSansRegular16"
                    >
                      23s
                    </Text>
                  </li>
                </ul>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[154px]"
              rightIcon={
                <Img
                  className="h-5 ml-2"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              shape="square"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              <div className="!text-blue-500 font-publicsans font-semibold text-left text-sm">
                Browse All Product
              </div>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col gap-6 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full">
                <div className="md:h-[268px] h-[276px] relative w-[98%]">
                  <Img
                    className="absolute h-[268px] inset-[0] justify-center m-auto object-cover w-[98%]"
                    src="images/img_image_268x280.png"
                    alt="image_Two"
                  />
                  <div className="absolute flex flex-col gap-2 items-start justify-start left-[0] top-[0] w-auto">
                    <Button
                      className="cursor-pointer font-publicsans font-semibold min-w-[73px] text-center text-xs"
                      shape="round"
                      color="amber_A200"
                      size="md"
                      variant="fill"
                    >
                      32% OFF
                    </Button>
                    <Button
                      className="cursor-pointer font-publicsans font-semibold min-w-[46px] text-center text-xs"
                      shape="round"
                      color="red_400"
                      size="md"
                      variant="fill"
                    >
                      HOT
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start mb-1.5 w-[97%] md:w-full">
                  <div className="flex flex-col gap-3 items-start justify-start w-auto">
                    <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                      <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_amber_500.svg"
                          alt="signal"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_amber_500.svg"
                          alt="signal_One"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_amber_500.svg"
                          alt="signal_Two"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_amber_500.svg"
                          alt="signal_Three"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_signal_amber_500.svg"
                          alt="signal_Four"
                        />
                        <Text
                          className="text-blue_gray-400 text-sm w-auto"
                          size="txtPublicSansRegular14Bluegray400"
                        >
                          {" "}
                          (52,677)
                        </Text>
                      </div>
                      <Text
                        className="leading-[24.00px] max-w-[280px] md:max-w-full text-base text-gray-900"
                        size="txtPublicSansRegular16"
                      >
                        Xbox Series S - 512GB SSD Console with Wireless
                        Controller - EU Versio...
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Text
                        className="line-through text-base text-blue_gray-200 w-auto"
                        size="txtPublicSansRegular16Bluegray200"
                      >
                        $865.99
                      </Text>
                      <Text
                        className="text-blue-500 text-lg w-auto"
                        size="txtPublicSansSemiBold18"
                      >
                        $442.12
                      </Text>
                    </div>
                    <Text
                      className="leading-[20.00px] max-w-[280px] md:max-w-full text-blue_gray-600 text-sm"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      Games built using the Xbox Series X|S development kit
                      showcase unparalleled load times, visuals.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="orange_50"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_favorite_gray_900.svg"
                        alt="favorite_One"
                      />
                    </Button>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[173px] px-6"
                      leftIcon={
                        <Img
                          className="h-5 mr-2 my-3.5"
                          src="images/img_cart_white_a700.svg"
                          alt="cart"
                        />
                      }
                      shape="round"
                      color="deep_orange_A200"
                      variant="fill"
                    >
                      <div className="font-bold font-publicsans sm:px-5 text-left text-sm tracking-[0.17px] uppercase">
                        Add to card
                      </div>
                    </Button>
                    <Button
                      className="flex h-12 items-center justify-center w-12"
                      shape="round"
                      color="orange_50"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_eye.svg"
                        alt="eye_One"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[76%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-3 w-1/4 md:w-full">
                    <div className="h-48 md:h-[188px] relative w-[99%]">
                      <Img
                        className="absolute h-[188px] inset-[0] justify-center m-auto object-cover w-[99%]"
                        src="images/img_image_188x216.png"
                        alt="image_Three"
                      />
                      <Button
                        className="!text-white-A700 absolute cursor-pointer font-publicsans font-semibold left-[0] min-w-[80px] text-center text-xs top-[0]"
                        shape="round"
                        color="blue_gray_300"
                        size="xs"
                        variant="fill"
                      >
                        SOLD OUT
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mb-1 w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Bose Sport Earbuds - Wireless Earphones - Bluetooth In
                        Ear...
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          $2,300
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full">
                    <Img
                      className="h-[188px] md:h-auto object-cover w-full"
                      src="images/img_image_1.png"
                      alt="image_Four"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Simple Mobile 4G LTE Prepaid Smartphone
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          $220
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-3 w-1/4 md:w-full">
                    <div className="h-48 md:h-[188px] relative w-[99%]">
                      <Img
                        className="absolute h-[188px] inset-[0] justify-center m-auto object-cover w-[99%]"
                        src="images/img_image_2.png"
                        alt="image_Five"
                      />
                      <Button
                        className="absolute cursor-pointer font-publicsans font-semibold left-[0] min-w-[70px] text-center text-xs top-[0]"
                        shape="round"
                        color="amber_A200"
                        size="md"
                        variant="fill"
                      >
                        19% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mb-1 w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        4K UHD LED Smart TV with Chromecast Built-in
                      </Text>
                      <div className="flex flex-row gap-1 items-start justify-start w-auto">
                        <Text
                          className="line-through text-blue_gray-300 text-sm w-auto"
                          size="txtPublicSansRegular14Bluegray300"
                        >
                          $865
                        </Text>
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          $1,50
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full">
                    <div className="h-[188px] relative w-full">
                      <Img
                        className="h-[188px] m-auto object-cover w-full"
                        src="images/img_image_3.png"
                        alt="image_Six"
                      />
                      <div className="absolute bg-black-900_33 flex flex-col h-full inset-[0] items-center justify-center m-auto p-7 sm:px-5 w-full">
                        <div className="flex flex-row gap-2 items-start justify-start my-[42px] w-auto">
                          <Button
                            className="flex h-12 items-center justify-center w-12"
                            shape="circle"
                            color="deep_orange_A200"
                            size="xl"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_favorite.svg"
                              alt="favorite_Two"
                            />
                          </Button>
                          <Button
                            className="flex h-12 items-center justify-center w-12"
                            shape="circle"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_cart_gray_900.svg"
                              alt="cart_One"
                            />
                          </Button>
                          <Button
                            className="flex h-12 items-center justify-center w-12"
                            shape="circle"
                            color="white_A700"
                            size="xl"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_eye.svg"
                              alt="eye_Two"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Sony DSCHX8 High Zoom Point & Shoot Camera
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          $1,200
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full">
                    <Img
                      className="h-[188px] md:h-auto object-cover w-full"
                      src="images/img_image_6.png"
                      alt="image_Seven"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Dell Optiplex 7000x7480 All-in-One Computer Monitor
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          $299
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-4 w-1/4 md:w-full">
                    <Img
                      className="h-[188px] md:h-auto object-cover w-full"
                      src="images/img_image_7.png"
                      alt="image_Eight"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Portable Wshing Machine, 11lbs capacity Model 18NMFIAM
                      </Text>
                      <div className="flex flex-row gap-1 items-start justify-start w-auto">
                        <Text
                          className="line-through text-blue_gray-300 text-sm w-auto"
                          size="txtPublicSansRegular14Bluegray300"
                        >
                          $865.99
                        </Text>
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          $70
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-3 w-1/4 md:w-full">
                    <div className="h-48 md:h-[188px] relative w-[99%]">
                      <Img
                        className="absolute h-[188px] inset-[0] justify-center m-auto object-cover w-[99%]"
                        src="images/img_image_8.png"
                        alt="image_Nine"
                      />
                      <Button
                        className="absolute cursor-pointer font-publicsans font-semibold left-[0] min-w-[46px] text-center text-xs top-[0]"
                        shape="round"
                        color="red_400"
                        size="md"
                        variant="fill"
                      >
                        HOT
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mb-1 w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        2-Barrel Carburetor Carb 2100 Engine Increase Horsepower
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          $160
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex md:flex-1 flex-col gap-2 items-center justify-start outline outline-[0.5px] outline-gray-300 p-3 w-1/4 md:w-full">
                    <div className="h-48 md:h-[188px] relative w-[99%]">
                      <Img
                        className="absolute h-[188px] inset-[0] justify-center m-auto object-cover w-[99%]"
                        src="images/img_image_9.png"
                        alt="image_Ten"
                      />
                      <Button
                        className="absolute cursor-pointer font-publicsans font-semibold left-[0] min-w-[73px] text-center text-xs top-[0]"
                        shape="round"
                        color="amber_A200"
                        size="md"
                        variant="fill"
                      >
                        32% OFF
                      </Button>
                    </div>
                    <div className="flex flex-col gap-2 items-start justify-start mb-1 w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[216px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        JBL FLIP 4 - Waterproof Portable Bluetooth Speaker -
                        Black
                      </Text>
                      <div className="flex flex-row gap-1 items-start justify-start w-auto">
                        <Text
                          className="line-through text-blue_gray-300 text-sm w-auto"
                          size="txtPublicSansRegular14Bluegray300"
                        >
                          $360
                        </Text>
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          $250
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
