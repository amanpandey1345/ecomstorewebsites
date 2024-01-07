import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C10TrackOrderDetailsActivity from "components/C10TrackOrderDetailsActivity";
import C27DasboardColumndashboardnavite from "components/C27DasboardColumndashboardnavite";
import C29DasboardOrderDetailHeading from "components/C29DasboardOrderDetailHeading";
import C29DasboardOrderDetailProduct from "components/C29DasboardOrderDetailProduct";
import Footer from "components/Footer";

const DasboardOrderDetailPage = () => {
  const c10TrackOrderDetailsActivityPropList = [
    {},
    {
      timetext: "23 Jan, 2021 at 2:00 PM",
      ordertext:
        "Our delivery man (John Wick) Has picked-up your order for delvery. ",
    },
    {
      timetext: "22 Jan, 2021 at 8:00 AM",
      ordertext: "Your order has reached at last mile hub.",
    },
    {
      timetext: "21, 2021 at 5:32 AM",
      ordertext: "Your order on the way to (last mile) hub.",
    },
    {
      timetext: "20 Jan, 2021 at 7:32 PM",
      ordertext: "Your order is successfully verified.",
    },
    {
      timetext: "19 Jan, 2021 at 2:61 PM",
      ordertext: "Your order has been confirmed.",
    },
  ];

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
          macbookprotext="Order Details"
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start pb-[72px] pt-10 md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <C27DasboardColumndashboardnavite className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start md:px-5 py-4 rounded shadow-bs10 w-auto" />
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-center justify-center md:px-5 rounded w-auto md:w-full">
            <C29DasboardOrderDetailHeading className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row md:gap-5 items-center justify-start p-2.5 rounded-tl rounded-tr w-full" />
            <div className="flex flex-col gap-6 items-start justify-start p-6 sm:px-5 w-auto md:w-full">
              <div className="bg-yellow-50 border border-solid border-yellow-200 flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[936px] p-6 sm:px-5 rounded w-full">
                <div className="flex sm:flex-1 flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtPublicSansRegular20"
                  >
                    #96459761
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      4 Products
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      •
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      Order Placed in 17 Jan, 2021 at 7:32 PM
                    </Text>
                  </div>
                </div>
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-blue-500 w-auto"
                  size="txtPublicSansSemiBold28Blue500"
                >
                  $1199.00
                </Text>
              </div>
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtPublicSansRegular14Gray900"
              >
                <span className="text-blue_gray-700 font-publicsans text-left font-normal">
                  Order expected arrival
                </span>
                <span className="text-gray-900 font-publicsans text-left font-normal">
                  {" "}
                </span>
                <span className="text-gray-900 font-publicsans text-left font-medium">
                  23 Jan, 2021
                </span>
              </Text>
              <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
                <div className="h-6 relative w-[78%] md:w-full">
                  <div className="absolute h-2 inset-[0] justify-center m-auto overflow-hidden w-[98%]">
                    <div className="w-full h-full absolute bg-orange_50 rounded-[4px]"></div>
                    <div
                      className="h-full absolute bg-deep_orange_A200  rounded-[4px]"
                      style={{ width: "33%" }}
                    ></div>
                  </div>
                  <Button
                    className="absolute flex h-6 inset-y-[0] items-center justify-center left-[0] my-auto rounded-[50%] w-6"
                    shape="circle"
                    color="deep_orange_A200"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-3"
                      src="images/img_arrowdown_white_a700_12x12.svg"
                      alt="checkmark"
                    />
                  </Button>
                  <div className="absolute flex flex-row h-full inset-[0] items-center justify-between m-auto w-[36%]">
                    <div className="bg-deep_orange-A200 border-2 border-solid border-white-A700 h-6 rounded-[50%] w-6"></div>
                    <div className="bg-white-A700 border-2 border-deep_orange-A200 border-solid h-6 rounded-[50%] w-6"></div>
                  </div>
                  <div className="absolute bg-white-A700 border-2 border-deep_orange-A200 border-solid h-6 inset-y-[0] my-auto right-[0] rounded-[50%] w-6"></div>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-3 items-center justify-center sm:ml-[0] w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_grid_green_700.svg"
                      alt="grid"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Order Placed
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center sm:ml-[0] w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Packaging
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center sm:ml-[0] w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_television_deep_orange_a200.svg"
                      alt="television"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      On The Road
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-center sm:ml-[0] w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_settings_deep_orange_a200_32x32.svg"
                      alt="settings"
                    />
                    <Text
                      className="text-center text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      Delivered
                    </Text>
                  </div>
                </List>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-start sm:px-5 px-6 py-8 w-auto md:w-full">
              <Text
                className="text-gray-900 text-lg w-auto"
                size="txtPublicSansMedium18"
              >
                Order Activity
              </Text>
              <List
                className="flex flex-col gap-4 items-start w-auto"
                orientation="vertical"
              >
                {c10TrackOrderDetailsActivityPropList.map((props, index) => (
                  <React.Fragment key={`C10TrackOrderDetailsActivity${index}`}>
                    <C10TrackOrderDetailsActivity
                      className="flex md:flex-col flex-row gap-4 items-start justify-start my-0 w-auto md:w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="flex flex-col gap-6 items-center justify-center py-8 w-auto md:w-full">
              <div className="flex flex-col gap-5 items-center justify-center w-auto md:w-full">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtPublicSansMedium18"
                >
                  <span className="text-gray-900 font-publicsans text-left font-medium">
                    Product{" "}
                  </span>
                  <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                    (02)
                  </span>
                </Text>
                <div className="bg-gray-100 border border-gray-300 border-solid flex md:flex-col flex-row gap-12 items-center justify-start sm:px-5 px-6 py-2.5 w-auto md:w-full">
                  <Text
                    className="text-blue_gray-700 text-xs uppercase w-auto"
                    size="txtPublicSansMedium12"
                  >
                    Products
                  </Text>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto sm:w-full">
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
                </div>
              </div>
              <List
                className="flex flex-col gap-4 items-start w-auto"
                orientation="vertical"
              >
                <div className="flex md:flex-col flex-row gap-12 items-center justify-center my-0 w-auto md:w-full">
                  <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-auto sm:w-full">
                    <Img
                      className="h-20 md:h-auto object-cover rounded w-20"
                      src="images/img_image_48.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-1 items-start justify-start w-auto">
                      <Text
                        className="text-blue-500 text-xs w-auto"
                        size="txtPublicSansSemiBold12Blue500"
                      >
                        SMARTPHONE
                      </Text>
                      <Text
                        className="leading-[20.00px] max-w-[304px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Google Pixel 6 Pro - 5G Android Phone - Unlocked
                        Smartphone with Advanced Pixel C...
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-6 items-start justify-start w-auto sm:w-full">
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      $899
                    </Text>
                    <Text
                      className="text-blue_gray-700 text-sm w-auto"
                      size="txtPublicSansRegular14Bluegray700"
                    >
                      x1
                    </Text>
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtPublicSansMedium14Gray900"
                    >
                      $899
                    </Text>
                  </div>
                </div>
                <Line className="self-center h-px bg-gray-300 w-full" />
                <C29DasboardOrderDetailProduct className="flex md:flex-col flex-row gap-12 items-center justify-center my-0 w-auto md:w-full" />
              </List>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-col flex-row gap-6 items-start justify-start sm:px-5 px-6 py-8 w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] grid-cols-[repeat(1,_1fr_1px)_1fr] w-[65%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtPublicSansMedium18"
                  >
                    Billing Address
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-center w-auto">
                    <div className="flex flex-col gap-2 items-start justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Kevin Gilbert
                      </Text>
                      <Text
                        className="leading-[20.00px] max-w-[280px] md:max-w-full text-blue_gray-600 text-sm"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House
                        no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Phone Number:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        +1-202-555-0118
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Email:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        kevin.gilbert@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="self-center h-[184px] bg-gray-300 w-px" />
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-lg w-auto"
                    size="txtPublicSansMedium18"
                  >
                    Shipping Address
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-center w-auto">
                    <div className="flex flex-col gap-2 items-start justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansMedium14Gray900"
                      >
                        Kevin Gilbert
                      </Text>
                      <Text
                        className="leading-[20.00px] max-w-[280px] md:max-w-full text-blue_gray-600 text-sm"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        East Tejturi Bazar, Word No. 04, Road No. 13/x, House
                        no. 1320/C, Flat No. 5D, Dhaka - 1200, Bangladesh
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Phone Number:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        +1-202-555-0118
                      </Text>
                    </div>
                    <div className="flex flex-row items-center justify-center w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtPublicSansRegular14Gray900"
                      >
                        Email:
                      </Text>
                      <Text
                        className="text-blue_gray-600 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray600"
                      >
                        {" "}
                        kevin.gilbert@gmail.com
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-gray-900 text-lg w-auto"
                  size="txtPublicSansMedium18"
                >
                  Order Notes
                </Text>
                <Text
                  className="leading-[20.00px] max-w-[280px] md:max-w-full text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare,
                  eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam
                  magna odio.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DasboardOrderDetailPage;
