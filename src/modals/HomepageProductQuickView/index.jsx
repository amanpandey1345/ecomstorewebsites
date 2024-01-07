import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Line, Text } from "components";

const HomepageProductQuickViewModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[73%]"
      overlayClassName="bg-black-900_a2 fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row gap-14 items-start justify-start max-w-[1400px] mx-auto p-10 md:px-5 rounded w-full">
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
                    alt="arrowdown"
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
                    alt="arrowdown_One"
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
                    alt="favorite"
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
                      alt="vector"
                    />
                  </div>
                  <Img
                    className="h-4 w-4"
                    src="images/img_twitter_blue_gray_600.svg"
                    alt="twitter"
                  />
                  <Img
                    className="h-4 w-4"
                    src="images/img_pinterest_blue_gray_600.svg"
                    alt="pinterest"
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
      </div>
    </ModalProvider>
  );
};

export default HomepageProductQuickViewModal;
