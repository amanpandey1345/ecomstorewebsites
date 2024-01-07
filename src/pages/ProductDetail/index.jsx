import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C01HomepageProduct6 from "components/C01HomepageProduct6";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C08ProductDetailColumndescriptionFour from "components/C08ProductDetailColumndescriptionFour";
import Footer from "components/Footer";

const ProductDetailPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-center mx-auto w-auto sm:w-full md:w-full">
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
          shoptext="Shop"
          arrowrightoneimage="images/img_arrowright.svg"
          shopgridtext="Shop Grid"
          arrowrighttwoimage="images/img_arrowright.svg"
          electronicsdevicestext="Electronics Devices"
          arrowrightthreeimage="images/img_arrowright.svg"
        />
        <div className="flex md:flex-col flex-row gap-14 items-start justify-start max-w-[1344px] mx-auto pb-[72px] pt-8 md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
            <Img
              className="h-[464px] sm:h-auto object-cover rounded w-[616px] md:w-full"
              src="images/img_mainimage.png"
              alt="mainimage"
            />
            <div className="h-24 md:h-[616px] relative w-full">
              <div className="absolute flex md:flex-col flex-row gap-2 h-full inset-[0] items-center justify-start m-auto w-auto">
                <Img
                  className="h-24 md:h-auto object-cover rounded-sm w-24"
                  src="images/img_01.png"
                  alt="One"
                />
                <Img
                  className="h-24 md:h-auto object-cover rounded-sm w-24"
                  src="images/img_05.png"
                  alt="Five"
                />
                <Img
                  className="h-24 md:h-auto object-cover rounded-sm w-24"
                  src="images/img_03.png"
                  alt="Three"
                />
                <Img
                  className="h-24 md:h-auto object-cover rounded-sm w-24"
                  src="images/img_04.png"
                  alt="Four"
                />
                <Img
                  className="h-24 md:h-auto object-cover rounded-sm w-24"
                  src="images/img_02.png"
                  alt="Two"
                />
                <Img
                  className="h-24 md:h-auto object-cover rounded-sm w-24"
                  src="images/img_06.png"
                  alt="Six"
                />
              </div>
              <div className="absolute flex flex-row sm:gap-10 gap-[568px] h-max inset-[0] items-center justify-between m-auto w-auto">
                <Button
                  className="border-2 border-solid border-white-A700 flex h-12 items-center justify-center w-12"
                  shape="circle"
                  color="deep_orange_A200"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrowdown_One"
                  />
                </Button>
                <Button
                  className="border-2 border-solid border-white-A700 flex h-12 items-center justify-center w-12"
                  shape="circle"
                  color="deep_orange_A200"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowleft_white_a700.svg"
                    alt="arrowdown_Two"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-6 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
                  <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_signal_deep_orange_a200_20x20.svg"
                      alt="signal"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_signal_deep_orange_a200_20x20.svg"
                      alt="signal_One"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_signal_deep_orange_a200_20x20.svg"
                      alt="signal_Two"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_signal_deep_orange_a200_20x20.svg"
                      alt="signal_Three"
                    />
                    <Img
                      className="h-5 w-5"
                      src="images/img_signal_deep_orange_a200_20x20.svg"
                      alt="signal_Four"
                    />
                  </div>
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansSemiBold14Gray900"
                  >
                    4.7 Star Rating
                  </Text>
                  <Text
                    className="text-blue_gray-600 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    (21,671 User feedback)
                  </Text>
                </div>
                <Text
                  className="leading-[28.00px] max-w-[648px] md:max-w-full text-gray-900 text-xl"
                  size="txtPublicSansRegular20"
                >
                  2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,
                  256GB SSD Storage) - Space Gray
                </Text>
              </div>
              <div className="flex flex-col font-inter gap-2 items-start justify-start w-auto md:w-full">
                <div className="flex flex-row gap-6 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                      Sku:{" "}
                    </span>
                    <span className="text-gray-900 font-publicsans text-left font-semibold">
                      A264671
                    </span>
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                      Availability:{" "}
                    </span>
                    <span className="text-green-700 font-publicsans text-left font-semibold">
                      In Stock
                    </span>
                  </Text>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start w-auto md:w-full">
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                      Brand:{" "}
                    </span>
                    <span className="text-gray-900 font-publicsans text-left font-semibold">
                      Apple
                    </span>
                  </Text>
                  <Text
                    className="text-black-900 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                      Category:{" "}
                    </span>
                    <span className="text-gray-900 font-publicsans text-left font-semibold">
                      Electronics Devices
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-center w-auto">
              <div className="flex flex-row gap-1 items-center justify-start w-auto">
                <Text
                  className="text-2xl md:text-[22px] text-blue-500 sm:text-xl w-auto"
                  size="txtPublicSansSemiBold24Blue500"
                >
                  $1699
                </Text>
                <Text
                  className="line-through text-blue_gray-400 text-lg w-auto"
                  size="txtPublicSansRegular18Bluegray400"
                >
                  $1999.00
                </Text>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[78px] text-center text-sm"
                shape="round"
                color="amber_A200"
                size="md"
                variant="fill"
              >
                21% OFF
              </Button>
            </div>
            <Line className="bg-gray-300 h-px w-full" />
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Color
                  </Text>
                  <Img
                    className="h-11 w-[100px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Size
                  </Text>
                  <Input
                    name="price_Two"
                    placeholder="14-inch Liquid Retina XDR display"
                    className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                    wrapClassName="border border-gray-300 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-4 ml-[35px]"
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
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Memory
                  </Text>
                  <Input
                    name="filesize_One"
                    placeholder="16GB unified memory"
                    className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                    wrapClassName="border border-gray-300 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-4 ml-[35px]"
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
                <div className="flex flex-col gap-2 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Storage
                  </Text>
                  <Input
                    name="dropdown"
                    placeholder="1TV SSD Storage"
                    className="p-0 placeholder:text-blue_gray-700 text-left text-sm w-full"
                    wrapClassName="border border-gray-300 border-solid flex w-full"
                    suffix={
                      <Img
                        className="mt-auto mb-px h-4 ml-[35px]"
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
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-4 items-start justify-start pt-3 w-auto md:w-full">
              <div className="bg-white-A700 border-2 border-gray-300 border-solid flex flex-row gap-6 items-center justify-between px-5 py-4 rounded-[3px] w-[164px]">
                <Img
                  className="h-4 w-4"
                  src="images/img_television.svg"
                  alt="television"
                />
                <Text
                  className="text-base text-blue_gray-700 text-center w-auto"
                  size="txtPublicSansRegular16Bluegray700"
                >
                  01
                </Text>
                <Img className="h-4 w-4" src="images/img_plus.svg" alt="plus" />
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center rounded-[3px] w-[310px]"
                rightIcon={
                  <Img
                    className="h-6 ml-3"
                    src="images/img_cart_white_a700_24x24.svg"
                    alt="cart"
                  />
                }
                shape="round"
                color="deep_orange_A200"
                size="xl"
                variant="fill"
              >
                <div className="font-bold text-base text-left tracking-[0.19px] uppercase">
                  Add to card
                </div>
              </Button>
              <Button
                className="!text-deep_orange-A200 cursor-pointer font-bold min-w-[142px] outline-[2px] rounded-[3px] text-base text-center tracking-[0.19px] uppercase"
                shape="round"
                color="deep_orange_A200"
                size="2xl"
                variant="outline"
              >
                Buy now
              </Button>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[648px] pb-2 w-full">
              <div className="flex flex-row gap-6 items-start justify-start w-auto">
                <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_favorite_blue_gray_700.svg"
                    alt="favorite_One"
                  />
                  <Text
                    className="text-blue_gray-700 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray700"
                  >
                    Add to Wishlist
                  </Text>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_qrcode.svg"
                    alt="qrcode"
                  />
                  <Text
                    className="text-blue_gray-700 text-sm w-auto"
                    size="txtPublicSansRegular14Bluegray700"
                  >
                    Add to Compare
                  </Text>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center justify-center w-auto">
                <Text
                  className="text-blue_gray-700 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray700"
                >
                  Share product:
                </Text>
                <div className="flex flex-row gap-3 items-center justify-center w-auto">
                  <Img
                    className="h-6 w-6"
                    src="images/img_regularcopy.svg"
                    alt="regularcopy"
                  />
                  <div className="bg-deep_orange-A200 flex flex-col h-4 items-center justify-start pt-[3px] px-[3px] rounded-[50%] w-4">
                    <Img
                      className="h-3"
                      src="images/img_vector_white_a700.svg"
                      alt="vector_Four"
                    />
                  </div>
                  <Img
                    className="h-4 w-4"
                    src="images/img_twitter_blue_gray_600.svg"
                    alt="twitter_One"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_pinterest_blue_gray_600.svg"
                    alt="pinterest_One"
                  />
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-3 items-start justify-start p-5 rounded-[3px] w-auto md:w-full">
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtPublicSansRegular14Gray900"
              >
                100% Guarantee Safe Checkout
              </Text>
              <Img
                className="h-[18px] sm:h-auto object-cover w-[312px] md:w-full"
                src="images/img_paymentmethod.png"
                alt="paymentmethod"
              />
            </div>
          </div>
        </div>
        <C08ProductDetailColumndescriptionFour className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-10 items-center justify-center max-w-[1320px] mx-auto pb-10 md:px-5 rounded w-full" />
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              RELATED PRODUCT
            </Text>
            <C01HomepageProduct6 className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto" />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_6.png"
              title="Simple Mobile 4G LTE Prepaid Smartphone"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_19.png"
              title="4K UHD LED Smart TV with Chromecast Built-in"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              PRODUCT ACCESSORIES
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_80x80.png"
              title="Samsung Electronics Samsung Galexy S21 5G"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_24.png"
              title="Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_172x202.png"
              title="Sony DSCHX8 High Zoom Point & Shoot Camera"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              APPLE PRODUCT
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_1.png"
              title="TOZO T6 True Wireless Earbuds Bluetooth Headpho..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_22.png"
              title="JBL FLIP 4 - Waterproof Portable Bluetooth Speaker..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_2.png"
              title="Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar..."
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              FEATURED PRODUCTS
            </Text>
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_16.png"
              title="Portable Wshing Machine, 11lbs capacity Model 18NMF..."
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_25.png"
              title="Sony DSCHX8 High Zoom Point & Shoot Camera"
            />
            <C01HomepageProduct6
              className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto"
              image="images/img_image_26.png"
              title="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
            />
          </div>
        </List>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ProductDetailPage;
