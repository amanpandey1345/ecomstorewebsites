import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Input, Line, List, ReactTable, Text } from "components";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import C25BlogListPagination from "components/C25BlogListPagination";
import C27DasboardColumndashboardnavite from "components/C27DasboardColumndashboardnavite";
import C28DasboardOrderHistoryOrderhistory from "components/C28DasboardOrderHistoryOrderhistory";
import Footer from "components/Footer";

const DasboardOrderHistoryPage = () => {
  const table2Data = React.useRef([
    {
      orderid: "#96459761",
      status: "IN PROGRESS",
      date: "Dec 30, 2019 07:52",
      total: "$80 (5 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#71667167",
      status: "COMPLETED",
      date: "Dec 7, 2019 23:26",
      total: "$70 (4 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#95214362",
      status: "CANCELED",
      date: "Dec 7, 2019 23:26",
      total: "$2,300 (2 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#71667167",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$250 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#51746385",
      status: "COMPLETED",
      date: "Dec 30, 2019 07:52",
      total: "$360 (2 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#51746385",
      status: "CANCELED",
      date: "Dec 4, 2019 21:42",
      total: "$220 (7 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Feb 2, 2019 19:28",
      total: "$80 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Mar 20, 2019 23:14",
      total: "$160 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Dec 4, 2019 21:42",
      total: "$1,500 (3 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Dec 30, 2019 07:52",
      total: "$1,200 (19 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "CANCELED",
      date: "Dec 30, 2019 05:18",
      total: "$1,500 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
    {
      orderid: "#673971743",
      status: "COMPLETED",
      date: "Dec 30, 2019 07:52",
      total: "$80 (1 Products)",
      action: "images/img_arrowdown.svg",
    },
  ]);
  const table2Columns = React.useMemo(() => {
    const table2ColumnHelper = createColumnHelper();
    return [
      table2ColumnHelper.accessor("orderid", {
        cell: (info) => (
          <Text
            className="pb-[13px] sm:pl-5 pl-6 pt-[25px] text-gray-900 text-sm"
            size="txtPublicSansMedium14Gray900"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[172px] sm:pl-5 pl-6 py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Order ID
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("status", {
        cell: (info) => (
          <Text
            className="pb-[13px] pt-[25px] text-deep_orange-A200 text-sm"
            size="txtPublicSansSemiBold14DeeporangeA200"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[176px] py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Status
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("date", {
        cell: (info) => (
          <Text
            className="pb-3 pt-[26px] text-blue_gray-600 text-sm"
            size="txtPublicSansRegular14Bluegray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[224px] py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Date
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("total", {
        cell: (info) => (
          <Text
            className="pb-[13px] pt-[25px] text-blue_gray-700 text-sm"
            size="txtPublicSansRegular14Bluegray700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="min-w-[272px] py-[11px] text-blue_gray-700 text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Total
          </Text>
        ),
      }),
      table2ColumnHelper.accessor("action", {
        cell: (info) => (
          <div className="flex flex-row gap-2 items-start justify-center pr-[13px] py-[13px]">
            <Text
              className="mt-[11px] text-blue-500 text-sm"
              size="txtPublicSansSemiBold14Blue500"
            >
              View Details
            </Text>
            <Img
              className="h-4 mr-5 mt-3 w-4"
              alt="arrowdown_One"
              src={info?.getValue()}
            />
          </div>
        ),
        header: (info) => (
          <Text
            className="min-w-[140px] py-[11px] text-blue_gray-700 text-center text-xs uppercase"
            size="txtPublicSansMedium12"
          >
            Action
          </Text>
        ),
      }),
    ];
  }, []);

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
          macbookprotext="Order History"
        />
        <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-start justify-start max-w-[1320px] mx-auto pb-[72px] pt-10 md:px-5 w-full">
          <C27DasboardColumndashboardnavite className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start py-4 rounded shadow-bs10 w-auto" />
          <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 flex-col items-center justify-center pb-6 rounded w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start p-[17px] rounded-tl rounded-tr w-full">
                <Text
                  className="ml-1.5 md:ml-[0] text-gray-900 text-sm uppercase"
                  size="txtPublicSansMedium14Gray900"
                >
                  Order HIstory
                </Text>
              </div>
            </div>
            <div className="overflow-auto w-full">
              <ReactTable
                columns={table2Columns}
                data={table2Data.current}
                rowClass={""}
                headerClass="bg-gray-100 border border-gray-300"
              />
            </div>
            <C25BlogListPagination className="flex sm:flex-col flex-row gap-5 items-center justify-center w-auto sm:w-full" />
          </div>
        </div>
        <C28DasboardOrderHistoryOrderhistory className="flex sm:flex-col flex-row gap-6 items-center justify-center md:px-5 w-[380px] sm:w-full" />
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default DasboardOrderHistoryPage;
