import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";

const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C02HomepagePopupsCategory = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-[63%] md:w-full">
            <SelectBox
              className="!text-white-A700 font-medium font-publicsans text-left text-sm w-[23%] md:w-full"
              placeholderClassName="!text-white-A700"
              indicator={
                <Img
                  className="h-4 w-4"
                  src="images/img_arrowdown_12x12.svg"
                  alt="arrow_down"
                />
              }
              isMulti={false}
              name="button"
              options={buttonOptionsList}
              isSearchable={false}
              placeholder="All Category"
              shape="round"
              color="deep_orange_A200"
              size="sm"
              variant="fill"
            />
            <div className="flex sm:flex-col flex-row gap-6 items-center justify-center w-auto sm:w-full">
              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.trackorder}
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_settings.svg"
                  alt="settings"
                />
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.compare}
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_regularheadphones.svg"
                  alt="regularheadphon"
                />
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.customersupportOne}
                </Text>
              </div>
              <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                <Img
                  className="h-6 w-6"
                  src="images/img_inbox.svg"
                  alt="inbox"
                />
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.needhelp}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-3 items-center justify-between w-full">
            <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start py-3 rounded-[3px] shadow-bs7 w-auto">
              <div className="flex flex-col items-start justify-end p-2 w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronics}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-end p-2 w-full">
                <Text
                  className="md:ml-[0] ml-[7px] mt-0.5 text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsOne}
                </Text>
              </div>
              <div className="bg-gray-100 flex flex-row items-center justify-between p-[9px] w-full">
                <Text
                  className="ml-1.5 text-gray-900 text-sm"
                  size="txtPublicSansMedium14Gray900"
                >
                  {props?.electronicsTwo}
                </Text>
                <Img
                  className="h-3 mr-2.5 w-3"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowright"
                />
              </div>
              <div className="flex flex-col items-start justify-end p-2 w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsThree}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-[9px] w-full">
                <Text
                  className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsFour}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-end p-2 w-full">
                <Text
                  className="md:ml-[0] ml-[7px] mt-0.5 text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsFive}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-[9px] w-full">
                <Text
                  className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsSix}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-end p-2 w-full">
                <Text
                  className="md:ml-[0] ml-[7px] text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsSeven}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start p-[9px] w-full">
                <Text
                  className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsEight}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-end p-2 w-full">
                <Text
                  className="md:ml-[0] ml-[7px] mt-0.5 text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsNine}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-end p-2 w-full">
                <Text
                  className="md:ml-[0] ml-[7px] mt-0.5 text-blue_gray-600 text-sm"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  {props?.electronicsTen}
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 border border-gray-300 border-solid flex md:flex-1 md:flex-col flex-row gap-5 items-start justify-start p-5 rounded-[3px] shadow-bs7 w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-start p-[9px] rounded-[3px] w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.language}
                  </Text>
                </div>
                <Text
                  className="bg-gray-100 justify-center pl-4 sm:pr-5 pr-[35px] py-[9px] rounded-[3px] text-gray-900 text-sm w-auto"
                  size="txtPublicSansMedium14Gray900"
                >
                  {props?.navitem}
                </Text>
                <div className="flex flex-col items-start justify-end p-2 rounded-[3px] w-full">
                  <Text
                    className="md:ml-[0] ml-[7px] mt-0.5 text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsEleven}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-[9px] rounded-[3px] w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsTwelve}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-[9px] rounded-[3px] w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsThirteen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-2 rounded-[3px] w-full">
                  <Text
                    className="md:ml-[0] ml-[7px] mt-0.5 text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsFourteen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-[9px] rounded-[3px] w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsFifteen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-[9px] rounded-[3px] w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsSixteen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-[9px] rounded-[3px] w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsSeventeen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start p-[9px] rounded-[3px] w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsEighteen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end p-[9px] rounded-[3px] w-full">
                  <Text
                    className="ml-1.5 md:ml-[0] text-blue_gray-600 text-sm"
                    size="txtPublicSansRegular14Bluegray600"
                  >
                    {props?.electronicsNineteen}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto">
                <Text
                  className="text-base text-gray-900 w-auto"
                  size="txtPublicSansSemiBold16"
                >
                  {props?.text}
                </Text>
                <List
                  className="flex flex-col gap-4 items-center w-full"
                  orientation="vertical"
                >
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_image_80x80.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[196px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        {props?.canoneos1500d}
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          {props?.price}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_image_24.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <Text
                        className="leading-[20.00px] max-w-[196px] md:max-w-full text-gray-900 text-sm"
                        size="txtPublicSansRegular14Gray900"
                      >
                        {props?.time}
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue-500 text-sm w-auto"
                          size="txtPublicSansSemiBold14Blue500"
                        >
                          {props?.price1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row gap-3 items-center justify-center p-3 rounded-[3px] w-auto">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_image_172x202.png"
                    alt="image_Two"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start w-auto">
                    <Text
                      className="leading-[20.00px] max-w-[196px] md:max-w-full text-gray-900 text-sm"
                      size="txtPublicSansRegular14Gray900"
                    >
                      {props?.canoneos1500d1}
                    </Text>
                    <div className="flex flex-row gap-1 items-start justify-start w-auto">
                      <Text
                        className="line-through text-blue_gray-300 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray300"
                      >
                        {props?.priceFour}
                      </Text>
                      <Text
                        className="text-blue-500 text-sm w-auto"
                        size="txtPublicSansSemiBold14Blue500"
                      >
                        {props?.priceFive}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-200 flex flex-col gap-6 items-center justify-center p-8 sm:px-5 rounded w-auto">
                <div className="flex flex-col gap-3 items-center justify-center w-[248px]">
                  <Img
                    className="h-24 md:h-auto object-cover w-[248px] sm:w-full"
                    src="images/img_image_305x312.png"
                    alt="image_Three"
                  />
                  <div className="flex flex-col gap-4 items-center justify-center w-auto">
                    <div className="flex flex-col gap-2 items-center justify-center w-auto">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 w-auto"
                        size="txtPublicSansSemiBold28Gray900"
                      >
                        {props?.offer}
                      </Text>
                      <Text
                        className="leading-[24.00px] max-w-[248px] md:max-w-full text-base text-blue_gray-700 text-center"
                        size="txtPublicSansRegular16Bluegray700"
                      >
                        {props?.escapethenoise}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Text
                        className="text-blue_gray-700 text-sm w-auto"
                        size="txtPublicSansRegular14Bluegray700"
                      >
                        {props?.startingpriceOne}
                      </Text>
                      <Button
                        className="!text-gray-900 cursor-pointer font-publicsans font-semibold min-w-[93px] rounded-[3px] text-base text-center"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        {props?.p99usd}
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center w-[248px]"
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
                    {props?.shopNowTwo}
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepagePopupsCategory.defaultProps = {
  electronics: "Computer & Laptop",
  electronicsOne: "Computer Accessories",
  electronicsTwo: "SmartPhone",
  electronicsThree: "Headphone",
  electronicsFour: "Mobile Accessories",
  electronicsFive: "Gaming Console",
  electronicsSix: "Camera & Photo",
  electronicsSeven: "TV & Homes Appliances",
  electronicsEight: "Watchs & Accessories",
  electronicsNine: "GPS & Navigation",
  electronicsTen: "Warable Technology",
  language: "All ",
  navitem: "iPhone",
  electronicsEleven: "Sansung",
  electronicsTwelve: "Realme",
  electronicsThirteen: "Xiaomi",
  electronicsFourteen: "Oppo",
  electronicsFifteen: "Vivo",
  electronicsSixteen: "OnePlus",
  electronicsSeventeen: "Huawei",
  electronicsEighteen: "Infinix",
  electronicsNineteen: "Tecno",
  text: "FEATURED PHONES",
  canoneos1500d: "Samsung Electronics Samsung Galexy S21 5G",
  price: "$160",
  time: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
  price1: "$1,500",
  canoneos1500d1: "Sony DSCHX8 High Zoom Point & Shoot Camera",
  priceFour: "$3200",
  priceFive: "$2,300",
  offer: "21% Discount",
  escapethenoise:
    "Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.",
  startingpriceOne: "Starting price:",
  p99usd: "$99 USD",
  shopNowTwo: "Shop now",
};

export default C02HomepagePopupsCategory;
