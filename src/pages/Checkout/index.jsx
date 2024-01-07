import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";

const CheckoutPage = () => {
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
          <div className="bg-white-A700 flex flex-1 flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 shadow-bs2 w-full">
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
          shoptext="Shopping Card"
          arrowrightoneimage="images/img_arrowright.svg"
          macbookprotext="Checkout"
        />
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtPublicSansMedium18"
              >
                Billing Information
              </Text>
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-end justify-center w-auto sm:w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-[206px]">
                      <Text
                        className="text-gray-900 text-sm w-full"
                        size="txtPublicSansRegular14Gray900"
                      >
                        User name
                      </Text>
                      <Input
                        name="inputfield"
                        placeholder="First name"
                        className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                        wrapClassName="border border-gray-300 border-solid w-full"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <Text
                      className="bg-white-A700 border border-gray-300 border-solid justify-center pl-4 sm:pr-5 pr-[35px] py-[13px] rounded-sm text-blue_gray-400 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray400"
                    >
                      Last name
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[428px] sm:w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      <span className="text-gray-900 font-publicsans text-left font-normal">
                        Company Name{" "}
                      </span>
                      <span className="text-blue_gray-300 font-publicsans text-left font-normal">
                        (Optional)
                      </span>
                    </Text>
                    <Input
                      name="inputfield_Two"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start max-w-[872px] w-full">
                  <Text
                    className="text-gray-900 text-sm w-full"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Address
                  </Text>
                  <Input
                    name="inputfield_Three"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                </div>
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Country
                    </Text>
                    <Input
                      name="dropdown"
                      placeholder="Select..."
                      className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
                      wrapClassName="border border-gray-300 border-solid flex w-full"
                      suffix={
                        <Img
                          className="h-4 ml-[35px] my-px"
                          src="images/img_arrowdown_blue_gray_200.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Region/State
                    </Text>
                    <Input
                      name="dropdown_One"
                      placeholder="Select..."
                      className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
                      wrapClassName="border border-gray-300 border-solid flex w-full"
                      suffix={
                        <Img
                          className="h-4 ml-[35px] my-px"
                          src="images/img_arrowdown_blue_gray_200.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      City
                    </Text>
                    <Input
                      name="dropdown_Two"
                      placeholder="Select..."
                      className="!placeholder:text-blue_gray-300 !text-blue_gray-300 p-0 text-left text-sm w-full"
                      wrapClassName="border border-gray-300 border-solid flex w-full"
                      suffix={
                        <Img
                          className="h-4 ml-[35px] my-px"
                          src="images/img_arrowdown_blue_gray_200.svg"
                          alt="arrow_down"
                        />
                      }
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Zip Code
                    </Text>
                    <Input
                      name="inputfield_Four"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-[428px] sm:w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Email
                    </Text>
                    <Input
                      name="inputfield_Five"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[428px] sm:w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Phone Number
                    </Text>
                    <Input
                      name="inputfield_Six"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
              <CheckBox
                className="text-left text-sm"
                inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] w-5"
                name="shipintodiffere_One"
                id="shipintodiffere_One"
                label="Ship into different address"
                color="white_A700"
                variant="fill"
              ></CheckBox>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-5 items-center justify-center pb-8 pt-5 rounded w-auto md:w-full">
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtPublicSansMedium18"
              >
                Payment Option
              </Text>
              <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row gap-[3px] items-start justify-start p-6 sm:px-5 w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-[3px] grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] w-4/5 md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-4 items-center justify-center w-auto">
                    <div className="flex flex-col gap-2 items-center justify-center w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_user_deep_orange_a200.svg"
                        alt="user"
                      />
                      <Text
                        className="text-center text-gray-900 text-sm w-auto"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Cash on Delivery
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid h-5 rounded-[50%] w-5"></div>
                  </div>
                  <Line className="self-center h-24 bg-gray-300 w-px" />
                  <div className="flex flex-col gap-4 items-center justify-center w-auto">
                    <div className="flex flex-col gap-2 items-center justify-center w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_icon_blue_600.svg"
                        alt="icon"
                      />
                      <Text
                        className="text-center text-gray-900 text-sm w-auto"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Venmo
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid h-5 rounded-[50%] w-5"></div>
                  </div>
                  <Line className="self-center h-24 bg-gray-300 w-px" />
                  <div className="flex flex-col gap-4 items-center justify-center w-auto">
                    <div className="flex flex-col gap-2 items-center justify-center w-auto">
                      <Img
                        className="h-8 md:h-auto object-cover w-8"
                        src="images/img_image9_32x32.png"
                        alt="imageNine"
                      />
                      <Text
                        className="text-center text-gray-900 text-sm w-auto"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Paypal
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid h-5 rounded-[50%] w-5"></div>
                  </div>
                  <Line className="self-center h-24 bg-gray-300 w-px" />
                  <div className="flex flex-col gap-4 items-center justify-center w-auto">
                    <div className="flex flex-col gap-2 items-center justify-center w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_amazonicon11.svg"
                        alt="amazoniconEleven"
                      />
                      <Text
                        className="text-center text-gray-900 text-sm w-auto"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Amazon Pay
                      </Text>
                    </div>
                    <div className="bg-white-A700 border border-blue_gray-100 border-solid h-5 rounded-[50%] w-5"></div>
                  </div>
                </List>
                <div className="flex flex-col gap-4 items-center justify-center w-auto">
                  <div className="flex flex-col gap-2 items-center justify-center w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_calendar_deep_orange_a200.svg"
                      alt="calendar"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Debid/Credit Card
                    </Text>
                  </div>
                  <div className="bg-deep_orange-A200 flex flex-col h-5 items-center justify-start p-1.5 rounded-[50%] w-5">
                    <div className="bg-white-A700 h-2 rounded-[50%] w-2"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start pt-3 w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start max-w-[808px] w-full">
                  <Text
                    className="text-gray-900 text-sm w-full"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Name on Card
                  </Text>
                  <Input
                    name="inputfield_Seven"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start max-w-[808px] w-full">
                  <Text
                    className="text-gray-900 text-sm w-full"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Card Number
                  </Text>
                  <Input
                    name="inputfield_Eight"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                    shape="round"
                    color="white_A700"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-start justify-start w-auto md:w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-[396px] sm:w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Expire Date
                    </Text>
                    <Input
                      name="inputfield_Nine"
                      placeholder="DD/YY"
                      className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                      wrapClassName="border border-gray-300 border-solid w-full"
                      shape="round"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-2 items-start justify-start w-[396px] sm:w-full">
                    <Text
                      className="text-gray-900 text-sm w-full"
                      size="txtPublicSansRegular14Gray900"
                    >
                      CVC
                    </Text>
                    <Input
                      name="inputfield_Ten"
                      placeholder=""
                      className="p-0 w-full"
                      wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                      shape="round"
                      color="white_A700"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtPublicSansMedium18"
              >
                Additional Information
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start max-w-[872px] w-full">
                <Text
                  className="text-gray-900 text-sm w-full"
                  size="txtPublicSansRegular14Gray900"
                >
                  <span className="text-gray-900 font-publicsans text-left font-normal">
                    Order Notes{" "}
                  </span>
                  <span className="text-blue_gray-400 font-publicsans text-left font-normal">
                    (Optional)
                  </span>
                </Text>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-3.5 rounded-sm w-full">
                  <Text
                    className="mb-[78px] text-blue_gray-300 text-sm"
                    size="txtPublicSansRegular14Bluegray300"
                  >
                    Notes about your order, e.g. special notes for delivery
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-center pb-6 md:px-5 rounded w-auto sm:w-full">
            <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-5 w-auto sm:w-full">
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtPublicSansMedium18"
              >
                Order Summery
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
              <List
                className="flex flex-col gap-4 items-start pb-6 w-auto"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-center my-0 w-auto sm:w-full">
                  <Img
                    className="h-16 md:h-auto object-cover rounded-sm w-16"
                    src="images/img_image_39.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Canon EOS 1500D DSLR Camera Body+ 18-...
                    </Text>
                    <div className="flex flex-row gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-600 text-sm"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        1 x
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
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-center my-0 w-auto sm:w-full">
                  <Img
                    className="h-16 md:h-auto object-cover rounded-sm w-16"
                    src="images/img_image_40.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Wired Over-Ear Gaming Headphones with U...
                    </Text>
                    <div className="flex flex-row gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        3 x
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
              </List>
              <div className="flex flex-col gap-4 items-start justify-start pb-6 w-auto sm:w-full">
                <div className="flex flex-col gap-3 items-start justify-start pb-1 w-auto sm:w-full">
                  <div className="flex flex-row items-center justify-between w-[376px] sm:w-full">
                    <Text
                      className="text-blue_gray-600 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      Sub-total
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      $320
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[376px] sm:w-full">
                    <Text
                      className="text-blue_gray-600 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      Shipping
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Free
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[376px] sm:w-full">
                    <Text
                      className="text-blue_gray-600 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      Discount
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      $24
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-between w-[376px] sm:w-full">
                    <Text
                      className="text-blue_gray-600 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray600"
                    >
                      Tax
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      $61.99
                    </Text>
                  </div>
                </div>
                <Line className="bg-gray-300 h-px w-full" />
                <div className="flex flex-row items-center justify-between w-[376px] sm:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPublicSansRegular16"
                  >
                    Total
                  </Text>
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtPublicSansSemiBold16"
                  >
                    $357.99 USD
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center rounded-[3px] w-[376px]"
                rightIcon={
                  <Img
                    className="h-6 ml-3"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrow_down"
                  />
                }
                shape="round"
                color="deep_orange_A200"
                size="xl"
                variant="fill"
              >
                <div className="font-bold text-base text-left tracking-[0.19px] uppercase">
                  Place order
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

export default CheckoutPage;
