import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Line, List, Text } from "components";

const C01HomepageNavigation = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="bg-light_blue-900 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            {props?.welcometext}
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Text
                  className="text-sm text-white-A700 w-auto"
                  size="txtPublicSansRegular14WhiteA700"
                >
                  {props?.followustext}
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
                      {props?.languagetext}
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
                      {props?.currencytext}
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
        </div>
        <div
          className="common-pointer bg-light_blue-900 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-5 w-full"
          onClick={() => navigate("/wishlist")}
        >
          <div className="flex flex-row gap-2 items-center justify-center w-auto">
            <div className="bg-white-A700 h-12 rounded-[50%] w-12"></div>
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-auto"
              size="txtPublicSansBold32"
            >
              {props?.weburl}
            </Text>
          </div>
          <div className="bg-white-A700 flex md:flex-1 flex-row gap-2 items-start justify-start px-5 py-3.5 rounded-sm shadow-bs1 w-auto md:w-full">
            <Text
              className="text-blue_gray-400 text-sm w-auto"
              size="txtPublicSansRegular14Bluegray400"
            >
              {props?.searchtext}
            </Text>
            <Img className="h-5 w-5" src="images/img_rewind.svg" alt="rewind" />
          </div>
          <div className="flex flex-row gap-6 items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-1/4">
              <div className="flex flex-col items-center justify-start w-[34px] md:w-full">
                <div className="md:h-5 h-[26px] relative w-full">
                  <Img
                    className="common-pointer absolute bottom-[0] h-[18px] left-[0]"
                    src="images/img_cart.svg"
                    alt="cart"
                    onClick={() => navigate("/shoppingcard")}
                  />
                  <Text
                    className="absolute bg-white-A700 justify-center outline outline-[1px] outline-light_blue-900 px-[5px] py-0.5 right-[0] rounded-[9px] text-center text-light_blue-900 text-xs top-[0] w-[19px]"
                    size="txtPublicSansSemiBold12"
                  >
                    {props?.cartitemcount}
                  </Text>
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between mt-[3px] w-1/2 md:w-full">
                  <div className="bg-white-A700 h-1 rounded-[50%] w-1"></div>
                  <div className="bg-white-A700 h-1 rounded-[50%] w-1"></div>
                </div>
              </div>
            </div>
            <Img
              className="common-pointer h-8 w-8"
              src="images/img_favorite.svg"
              alt="favorite"
              onClick={() => navigate("/wishlist")}
            />
            <Img className="h-8 w-8" src="images/img_lock.svg" alt="lock" />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 shadow-bs2 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <ul className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
              <li>
                <div className="flex flex-col items-center justify-start">
                  <div
                    className="common-pointer bg-gray-100 flex flex-row gap-2 items-center justify-center sm:px-5 px-6 py-3.5 rounded-sm w-auto"
                    onClick={() => navigate("/homepagepopups")}
                  >
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      {props?.categorytext}
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
                <div
                  className="common-pointer flex flex-row gap-1.5 items-center justify-start"
                  onClick={() => navigate("/trackorder")}
                >
                  <Img
                    className="h-6 w-6"
                    src="images/img_linkedin.svg"
                    alt="linkedin"
                  />
                  <Text
                    className="text-blue_gray-600 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.trackordertext}
                  </Text>
                </div>
              </li>
              <li>
                <div
                  className="common-pointer flex flex-row gap-1.5 items-center justify-start"
                  onClick={() => navigate("/compare")}
                >
                  <Img
                    className="h-6 w-6"
                    alt="settings"
                    src={props?.settingsicon}
                  />
                  <Text
                    className="text-blue_gray-600 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.comparetext}
                  </Text>
                </div>
              </li>
              <li>
                <div
                  className="common-pointer flex flex-row gap-1.5 items-center justify-start"
                  onClick={() => navigate("/customersupport")}
                >
                  <Img
                    className="h-6 w-6"
                    src="images/img_regularheadphones.svg"
                    alt="regularheadphon"
                  />
                  <Text
                    className="text-blue_gray-600 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.customersupporttext}
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
                    className="text-blue_gray-600 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.needhelptext}
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
                {props?.phonenumber}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C01HomepageNavigation.defaultProps = {
  welcometext: (
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
  ),
  followustext: "Follow us:",
  languagetext: "Eng",
  currencytext: "USD",
  weburl: "E.com",
  searchtext: "Search for anything...",
  categorytext: "All Category",
  trackordertext: "Track Order",
  settingsicon: "images/img_settings.svg",
  comparetext: "Compare",
  customersupporttext: "Customer Support",
  needhelptext: "Need Help",
  phonenumber: "+1-202-555-0104",
};

export default C01HomepageNavigation;
