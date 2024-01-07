import React from "react";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import C01HomepageProduct3 from "components/C01HomepageProduct3";
import C01HomepageProduct4 from "components/C01HomepageProduct4";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C27DasboardColumndashboardnavite from "components/C27DasboardColumndashboardnavite";
import Footer from "components/Footer";

const DasboardBrowsingHistoryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="flex flex-col items-center justify-center md:px-5 w-full">
          <div className="bg-light_blue-900 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs w-full">
            <Text
              className="text-sm text-white-A700 w-auto"
              size="txtPublicSansRegular14WhiteA700"
            >
              <span className="text-white-A700 font-publicsans text-left font-normal">
                Welcome to{" "}
              </span>
              <span className="text-white-A700 font-publicsans text-left font-bold">
                E.com
              </span>
              <span className="text-white-A700 font-publicsans text-left font-normal">
                {" "}
                online eCommerce store.{" "}
              </span>
            </Text>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPublicSansRegular14WhiteA700"
                >
                  Follow us:
                </Text>
                <div className="flex flex-row gap-3 items-start justify-start w-auto">
                  <Img
                    className="h-4 w-4"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                  <div className="bg-white-A700 flex flex-col h-4 items-center justify-start pt-[3px] px-[3px] rounded-[50%] w-4">
                    <Img
                      className="h-3"
                      src="images/img_vector_light_blue_900.svg"
                      alt="vector"
                    />
                  </div>
                  <Img
                    className="h-4 w-4"
                    src="images/img_pinterest.svg"
                    alt="pinterest"
                  />
                  <div className="bg-white-A700 flex flex-col h-4 items-center justify-start p-0.5 rounded-[50%] w-4">
                    <Img
                      className="h-[9px] w-2.5"
                      src="images/img_vector.svg"
                      alt="vector_One"
                    />
                  </div>
                  <Img
                    className="h-4 w-4"
                    src="images/img_youtube.svg"
                    alt="youtube"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_instagram.svg"
                    alt="instagram"
                  />
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-3 grid grid-cols-[repeat(1,_1fr_1px)_1fr] w-[30%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPublicSansRegular14WhiteA700"
                    >
                      Eng
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowdown_12x12.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Line className="self-center h-7 bg-white-A700_68 w-px" />
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPublicSansRegular14WhiteA700"
                    >
                      USD
                    </Text>
                    <Img
                      className="h-3 w-3"
                      src="images/img_arrowdown_12x12.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-light_blue-900 flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-5 w-full">
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <div className="bg-white-A700 h-12 rounded-[50%] w-12"></div>
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-auto"
                size="txtPublicSansBold32"
              >
                E.com
              </Text>
            </div>
            <div className="bg-white-A700 flex md:flex-1 flex-row gap-2 items-start justify-start px-5 py-3.5 rounded-sm shadow-bs1 w-auto md:w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtPublicSansRegular14Bluegray400"
              >
                Search for anything...
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_rewind.svg"
                alt="rewind"
              />
            </div>
            <div className="flex flex-row gap-6 items-center justify-start w-auto">
              <div className="flex flex-col items-center justify-start w-1/4">
                <div className="flex flex-col items-center justify-start w-[34px] md:w-full">
                  <div className="md:h-5 h-[26px] relative w-full">
                    <Img
                      className="absolute bottom-[0] h-[18px] left-[0]"
                      src="images/img_cart.svg"
                      alt="cart"
                    />
                    <Text
                      className="absolute bg-white-A700 justify-center outline outline-[1px] outline-light_blue-900 px-[5px] py-0.5 right-[0] rounded-[9px] text-center text-light_blue-900 text-xs top-[0] w-[19px]"
                      size="txtPublicSansSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[9px] items-center justify-between mt-[3px] w-1/2 md:w-full">
                    <div className="bg-white-A700 h-1 rounded-[50%] w-1"></div>
                    <div className="bg-white-A700 h-1 rounded-[50%] w-1"></div>
                  </div>
                </div>
              </div>
              <Img
                className="h-8 w-8"
                src="images/img_favorite.svg"
                alt="favorite"
              />
              <Img className="h-8 w-8" src="images/img_lock.svg" alt="lock" />
            </div>
          </div>
          <div className="bg-white-A700 flex flex-1 flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 w-full">
            <ul className="flex md:flex-col flex-row gap-6 md:hidden items-center justify-center w-auto common-row-list">
              <li>
                <div className="flex flex-col items-center justify-start">
                  <div className="bg-gray-100 flex flex-row gap-2 items-center justify-center sm:px-5 px-6 py-3.5 rounded-sm w-auto">
                    <Text
                      className="hover:font-medium text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      All Category
                    </Text>
                    <Img
                      className="h-4 w-4"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-1.5 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Text
                    className="hover:font-medium text-blue_gray-600 hover:text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    Track Order
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-1.5 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="hover:font-medium text-blue_gray-600 hover:text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    Compare
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-1.5 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_regularheadphones.svg"
                    alt="regularheadphon"
                  />
                  <Text
                    className="hover:font-medium text-blue_gray-600 hover:text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    Customer Support
                  </Text>
                </div>
              </li>
              <li>
                <div className="flex flex-row gap-1.5 items-center justify-start">
                  <Img
                    className="h-6 w-6"
                    src="images/img_inbox.svg"
                    alt="inbox"
                  />
                  <Text
                    className="hover:font-medium text-blue_gray-600 hover:text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    Need Help
                  </Text>
                </div>
              </li>
            </ul>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Img className="h-7 w-7" src="images/img_call.svg" alt="call" />
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtPublicSansRegular18Gray900"
              >
                +1-202-555-0104
              </Text>
            </div>
          </div>
        </header>
        <C07ShopPageBreadcrumb
          className="bg-gray-100 flex flex-col items-start justify-start p-[26px] sm:px-5 w-full"
          shoptext="User Account"
          arrowrightoneimage="images/img_arrowright.svg"
          shopgridtext="Dashboard"
          arrowrighttwoimage="images/img_arrowright.svg"
          macbookprotext="Cards & Address"
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start pb-[72px] pt-10 md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <C27DasboardColumndashboardnavite className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start md:px-5 py-4 rounded shadow-bs10 w-auto" />
          <div className="flex flex-col gap-6 items-start justify-start w-3/4 md:w-full">
            <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between max-w-[984px] w-full">
              <Text
                className="text-gray-900 text-xl w-auto"
                size="txtPublicSansSemiBold20Gray900"
              >
                Browsing History
              </Text>
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  Turn Browsing History on/off
                </Text>
                <Switch
                  onColor="#f98131"
                  offColor="#f98131"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  value={true}
                  className="w-[16%]"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-3 items-start justify-start w-auto md:w-full">
              <Input
                name="inputfield"
                placeholder="Search in browsing history"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                wrapClassName="border border-gray-300 border-solid flex w-[57%] md:w-full"
                prefix={
                  <Img
                    className="h-5 mr-3 my-auto"
                    src="images/img_rewind_deep_orange_a200.svg"
                    alt="rewind"
                  />
                }
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <Input
                name="date"
                placeholder="DD/MM/YYYY"
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                wrapClassName="border border-gray-300 border-solid flex w-[42%] md:w-full"
                prefix={
                  <Img
                    className="h-5 mr-3 my-auto"
                    src="images/img_calendar_deep_orange_a200_20x20.svg"
                    alt="calendar"
                  />
                }
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  17 Oct, 2020
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-1 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_172x202.png"
                    p25off="HOT"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                    p56767="(738)"
                    dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                    priceOne="$70"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct4
                    className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                    userimage="images/img_image_6.png"
                    signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                    textcomponent="536)"
                    dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                    priceOne="$2,300"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_15.png"
                    p25off="BEST DEALS"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                    p56767="423)"
                    dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                    priceOne="$360"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct4
                    className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                    userimage="images/img_image_3.png"
                    signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalfourimage="images/img_signal_white_a700_16x16.svg"
                    textcomponent="816)"
                  />
                </List>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  17 Oct, 2020
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-1 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(2,_1fr_1px)_1fr] justify-start sm:pl-5 pl-6 w-auto md:w-full"
                orientation="horizontal"
              >
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                  image="images/img_image_18.png"
                  p25off="BEST DEALS"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_white_a700_16x16.svg"
                  p56767="(994)"
                  dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                  priceOne="$360"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct4
                  className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                  userimage="images/img_image_3.png"
                  signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                  image="images/img_image_19.png"
                  p25off="HOT"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                  p56767="(600)"
                  dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                  priceOne="$70"
                />
              </List>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  24 May, 2020
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-1 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_18.png"
                    p25off="BEST DEALS"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_white_a700_16x16.svg"
                    p56767="(994)"
                    dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                    priceOne="$360"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct4
                    className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                    userimage="images/img_image_3.png"
                    signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct3
                    className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                    image="images/img_image_19.png"
                    p25off="HOT"
                    signal="images/img_signal_deep_orange_a200_20x20.svg"
                    signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                    signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                    signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                    signalFour="images/img_signal_deep_orange_a200_20x20.svg"
                    p56767="(600)"
                    dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                    priceOne="$70"
                  />
                  <Line className="self-center h-80 bg-gray-300 w-px" />
                  <C01HomepageProduct4
                    className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                    userimage="images/img_image_20.png"
                    signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                    signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                    textcomponent="(492)"
                    dell215inchfull="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                    priceOne="$250"
                  />
                </List>
                <Line className="bg-gray-300 h-px w-[98%]" />
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-1/4 md:w-full"
                  image="images/img_image_9.png"
                  p25off="SOLD OUT"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_white_a700_16x16.svg"
                  p56767="(740)"
                  dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                  priceOne="$2,300"
                />
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  21 Sep, 2020
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-1 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <C01HomepageProduct4
                  className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                  userimage="images/img_image_7.png"
                  signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                  textcomponent="(647)"
                  dell215inchfull="Wired Over-Ear Gaming Headphones with USB"
                  priceOne="$1,500"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_white_a700_16x16.svg"
                  price="$1600"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct4
                  className="flex flex-col gap-6 items-center justify-start p-4 w-full"
                  userimage="images/img_image_20.png"
                  signalimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaloneimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signaltwoimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalthreeimage="images/img_signal_deep_orange_a200_20x20.svg"
                  signalfourimage="images/img_signal_deep_orange_a200_20x20.svg"
                  textcomponent="(492)"
                  dell215inchfull="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                  priceOne="$250"
                />
                <Line className="self-center h-80 bg-gray-300 w-px" />
                <C01HomepageProduct3
                  className="flex flex-col gap-6 items-center justify-start p-3 w-full"
                  image="images/img_image_23.png"
                  signal="images/img_signal_deep_orange_a200_20x20.svg"
                  signalOne="images/img_signal_deep_orange_a200_20x20.svg"
                  signalTwo="images/img_signal_deep_orange_a200_20x20.svg"
                  signalThree="images/img_signal_deep_orange_a200_20x20.svg"
                  signalFour="images/img_signal_white_a700_16x16.svg"
                  p56767="(423)"
                  price="$1600"
                />
              </List>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-center pb-6 rounded w-auto md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-end p-4 rounded-tl rounded-tr w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  22 Oct, 2020
                </Text>
              </div>
              <div className="flex flex-col items-start justify-center sm:pl-5 pl-6 w-auto">
                <C01HomepageProduct3 className="flex flex-col gap-1 items-start justify-start w-auto" />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-4 md:px-10 sm:px-5 px-[394px] w-auto md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[197px] rounded-[3px]"
                leftIcon={
                  <Img
                    className="h-6 mr-3"
                    src="images/img_close_deep_orange_a200_24x24.svg"
                    alt="close"
                  />
                }
                shape="round"
                color="orange_50"
                size="2xl"
                variant="outline"
              >
                <div className="font-bold text-base text-left tracking-[0.19px] uppercase">
                  Load more
                </div>
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DasboardBrowsingHistoryPage;
