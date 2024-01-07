import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";

const ShoppingCardPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
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
            macbookprotext="Shoping Card"
          />
          <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1320px] mt-[72px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-start justify-start mb-[182px] rounded w-auto md:w-full">
              <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-5 w-auto md:w-full">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtPublicSansMedium18"
                >
                  Shopping Card
                </Text>
              </div>
              <div className="bg-gray-100 border border-gray-300 border-solid flex flex-row gap-6 items-center justify-start sm:px-5 px-6 py-2.5 w-auto md:w-full">
                <Text
                  className="text-blue_gray-700 text-xs uppercase w-auto"
                  size="txtPublicSansMedium12"
                >
                  Products
                </Text>
                <Text
                  className="text-blue_gray-700 text-xs uppercase w-auto"
                  size="txtPublicSansMedium12"
                >
                  Price
                </Text>
                <Text
                  className="text-blue_gray-700 text-xs uppercase w-auto"
                  size="txtPublicSansMedium12"
                >
                  Quantity
                </Text>
                <Text
                  className="text-blue_gray-700 text-xs uppercase w-auto"
                  size="txtPublicSansMedium12"
                >
                  Sub-Total
                </Text>
              </div>
              <List
                className="flex flex-col gap-4 items-start p-6 sm:px-5 w-auto"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row gap-6 items-center justify-center my-0 w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_close_blue_gray_300_24x24.svg"
                      alt="close"
                    />
                    <Img
                      className="h-[72px] md:h-auto object-cover rounded-sm w-[72px]"
                      src="images/img_image_39.png"
                      alt="image"
                    />
                    <Text
                      className="leading-[20.00px] max-w-[260px] md:max-w-full text-gray-900 text-sm"
                      size="txtPublicSansRegular14Gray900"
                    >
                      4K UHD LED Smart TV with Chromecast Built-in
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-center w-[11%] md:w-full">
                    <Text
                      className="line-through text-blue_gray-300 text-sm"
                      size="txtPublicSansRegular14Bluegray300"
                    >
                      $99
                    </Text>
                    <Text
                      className="ml-1 mr-[29px] text-blue_gray-700 text-sm"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      $70
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-6 w-auto">
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-6 items-center justify-between px-5 py-3 rounded-[3px] w-[148px]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_television_blue_gray_300.svg"
                        alt="television"
                      />
                      <Text
                        className="text-base text-blue_gray-700 w-auto"
                        size="txtPublicSansRegular16Bluegray700"
                      >
                        01
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansMedium14Gray900"
                  >
                    $70
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row gap-6 items-center justify-center my-0 w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-auto sm:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_close_red_400.svg"
                      alt="close"
                    />
                    <Img
                      className="h-[72px] md:h-auto object-cover rounded-sm w-[72px]"
                      src="images/img_image_40.png"
                      alt="image"
                    />
                    <Text
                      className="leading-[20.00px] max-w-[260px] md:max-w-full text-gray-900 text-sm"
                      size="txtPublicSansRegular14Gray900"
                    >
                      Wired Over-Ear Gaming Headphones with USB
                    </Text>
                  </div>
                  <Text
                    className="text-blue_gray-700 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray700"
                  >
                    $250
                  </Text>
                  <div className="flex flex-col items-start justify-start sm:pr-5 pr-6 w-auto">
                    <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-6 items-center justify-between px-5 py-3 rounded-[3px] w-[148px]">
                      <Img
                        className="h-4 w-4"
                        src="images/img_television.svg"
                        alt="television"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtPublicSansRegular16Bluegray700"
                      >
                        03
                      </Text>
                      <Img
                        className="h-4 w-4"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansMedium14Gray900"
                  >
                    $250
                  </Text>
                </div>
              </List>
              <Line className="bg-gray-300 h-px w-full" />
              <div className="flex flex-row flex-wrap sm:gap-10 items-center justify-between max-w-[872px] p-6 sm:px-5 w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[203px]"
                  leftIcon={
                    <Img
                      className="h-5 mr-2"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  shape="round"
                  color="blue_500"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-bold text-left text-sm tracking-[0.17px] uppercase">
                    Return to Shop
                  </div>
                </Button>
                <Button
                  className="cursor-pointer font-bold min-w-[147px] text-center text-sm tracking-[0.17px] uppercase"
                  shape="round"
                  color="blue_500"
                  size="xl"
                  variant="outline"
                >
                  Update cart
                </Button>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start w-[33%] md:w-full">
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-center pb-6 rounded w-auto sm:w-full">
                <div className="flex flex-col items-start justify-start sm:px-5 px-6 py-5 w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtPublicSansMedium18"
                  >
                    Card Totals
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[89%] md:w-full">
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
                      Proceed to Checkout
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-center rounded w-auto sm:w-full">
                <div className="border border-gray-300 border-solid flex flex-col items-start justify-start sm:px-5 px-6 py-5 w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtPublicSansMedium18"
                  >
                    Coupon Code
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start pb-6 w-auto sm:w-full">
                  <Input
                    name="inputfield"
                    placeholder="Email address"
                    className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                    wrapClassName="border border-gray-300 border-solid w-full"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                  <Button
                    className="cursor-pointer font-bold min-w-[159px] text-center text-sm tracking-[0.17px] uppercase"
                    shape="round"
                    color="blue_500"
                    size="xl"
                    variant="fill"
                  >
                    Apply Coupon
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex items-center justify-center mt-20 md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ShoppingCardPage;
