import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  SelectBox,
  Text,
} from "components";
import C01HomepageProduct3 from "components/C01HomepageProduct3";
import C01HomepageProduct4 from "components/C01HomepageProduct4";
import C01HomepageProduct5 from "components/C01HomepageProduct5";
import C07ShopPageBanner from "components/C07ShopPageBanner";
import C07ShopPageBreadcrumb from "components/C07ShopPageBreadcrumb";
import Footer from "components/Footer";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPagePage = () => {
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
          macbookprotext="Electronics Devices"
        />
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start max-w-[1320px] mx-auto pb-[72px] pt-10 md:px-5 w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 uppercase w-auto"
                size="txtPublicSansMedium16"
              >
                Category
              </Text>
              <RadioGroup
                selectedValue="ElectronicsDevices"
                className="flex flex-col gap-3 items-start justify-start w-auto"
                name="radio"
              >
                <Radio
                  value="ElectronicsDevices"
                  className="font-medium sm:pr-5 text-gray-900 text-left text-sm"
                  inputClassName="bg-deep_orange-A200 h-5 mr-[5px] rounded-[10px] w-5"
                  checked={true}
                  name="radio"
                  label="Electronics Devices"
                  id="ElectronicsDevices"
                ></Radio>
                <Radio
                  value="ComputerLaptop"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="Computer  Laptop"
                  id="ComputerLaptop"
                ></Radio>
                <Radio
                  value="ComputerAccessories"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="Computer Accessories"
                  id="ComputerAccessories"
                ></Radio>
                <Radio
                  value="SmartPhone"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="SmartPhone"
                  id="SmartPhone"
                ></Radio>
                <Radio
                  value="Headphone"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="Headphone"
                  id="Headphone"
                ></Radio>
                <Radio
                  value="MobileAccessories"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="Mobile Accessories"
                  id="MobileAccessories"
                ></Radio>
                <Radio
                  value="GamingConsole"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="Gaming Console"
                  id="GamingConsole"
                ></Radio>
                <Radio
                  value="CameraPhoto"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="Camera  Photo"
                  id="CameraPhoto"
                ></Radio>
                <Radio
                  value="TVHomesAppliances"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="TV  Homes Appliances"
                  id="TVHomesAppliances"
                ></Radio>
                <Radio
                  value="WatchsAccessories"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="Watchs  Accessories"
                  id="WatchsAccessories"
                ></Radio>
                <Radio
                  value="GPSNavigation"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="GPS  Navigation"
                  id="GPSNavigation"
                ></Radio>
                <Radio
                  value="WarableTechnology"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio"
                  label="Warable Technology"
                  id="WarableTechnology"
                ></Radio>
              </RadioGroup>
            </div>
            <Line className="bg-gray-300 h-px w-full" />
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 uppercase w-auto"
                size="txtPublicSansMedium16"
              >
                Price Range
              </Text>
              <Img
                className="h-3 w-[312px]"
                src="images/img_pricerange.svg"
                alt="pricerange_One"
              />
              <div className="flex flex-row gap-3 items-start justify-start w-auto">
                <Text
                  className="bg-white-A700 border border-gray-300 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-[11px] rounded-[3px] text-blue_gray-400 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray400"
                >
                  Min price
                </Text>
                <Text
                  className="bg-white-A700 border border-gray-300 border-solid justify-center pl-3 sm:pr-5 pr-[35px] py-[11px] rounded-[3px] text-blue_gray-400 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray400"
                >
                  Max price
                </Text>
              </div>
              <RadioGroup
                className="flex flex-col gap-3 items-start justify-start w-auto"
                name="radio1"
              >
                <Radio
                  value="AllPrice"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio1"
                  label="All Price"
                  id="AllPrice"
                ></Radio>
                <Radio
                  value="Under20"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio1"
                  label="Under 20"
                  id="Under20"
                ></Radio>
                <Radio
                  value="25to100"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio1"
                  label="25 to 100"
                  id="25to100"
                ></Radio>
                <Radio
                  value="100to300"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio1"
                  label="100 to 300"
                  id="100to300"
                ></Radio>
                <Radio
                  value="300to500"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border-2 border-deep_orange-A200 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio1"
                  label="300 to 500"
                  id="300to500"
                ></Radio>
                <Radio
                  value="500to1000"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio1"
                  label="500 to 1000"
                  id="500to1000"
                ></Radio>
                <Radio
                  value="1000to10000"
                  className="sm:pr-5 text-blue_gray-700 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-5 mr-[5px] rounded-[10px] w-5"
                  checked={false}
                  name="radio1"
                  label="1000 to 10000"
                  id="1000to10000"
                ></Radio>
              </RadioGroup>
            </div>
            <Line className="bg-gray-300 h-px w-full" />
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 uppercase w-auto"
                size="txtPublicSansMedium16"
              >
                popular Brands
              </Text>
              <div className="flex flex-col gap-3 items-start justify-start w-auto">
                <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="apple"
                    id="apple"
                    label="Apple"
                    color="deep_orange_A200"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="google"
                    id="google"
                    label="Google"
                    color="deep_orange_A200"
                    variant="fill"
                  ></CheckBox>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="microsoft"
                    id="microsoft"
                    label="Microsoft"
                    color="deep_orange_A200"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] w-5"
                    name="samsung"
                    id="samsung"
                    label="Samsung"
                    color="white_A700"
                    variant="fill"
                  ></CheckBox>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] w-5"
                    name="dell"
                    id="dell"
                    label="Dell"
                    color="white_A700"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="hp"
                    id="hp"
                    label="HP"
                    color="deep_orange_A200"
                    variant="fill"
                  ></CheckBox>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] w-5"
                    name="symphony"
                    id="symphony"
                    label="Symphony"
                    color="white_A700"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] w-5"
                    name="xiaomi"
                    id="xiaomi"
                    label="Xiaomi"
                    color="white_A700"
                    variant="fill"
                  ></CheckBox>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="border-2 border-deep_orange-A200 border-solid h-5 mr-[5px] w-5"
                    name="sony"
                    id="sony"
                    label="Sony"
                    color="white_A700"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="panasonic"
                    id="panasonic"
                    label="Panasonic"
                    color="deep_orange_A200"
                    variant="fill"
                  ></CheckBox>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="h-5 mr-[5px] w-5"
                    name="lg"
                    id="lg"
                    label="LG"
                    color="deep_orange_A200"
                    variant="fill"
                  ></CheckBox>
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] w-5"
                    name="intel"
                    id="intel"
                    label="Intel"
                    color="white_A700"
                    variant="fill"
                  ></CheckBox>
                </div>
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <CheckBox
                    className="text-left text-sm"
                    inputClassName="border border-blue_gray-100 border-solid h-5 mr-[5px] w-5"
                    name="oneplus"
                    id="oneplus"
                    label="One Plus"
                    color="white_A700"
                    variant="fill"
                  ></CheckBox>
                </div>
              </div>
            </div>
            <Line className="bg-gray-300 h-px w-full" />
            <div className="flex flex-col gap-[18px] items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 uppercase w-auto"
                size="txtPublicSansMedium16"
              >
                Popular Tag
              </Text>
              <div className="flex flex-col gap-2 items-start justify-start w-auto">
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium min-w-[63px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Game
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[69px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    iPhone
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[43px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    TV
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[113px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Asus Laptops
                  </Button>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium min-w-[85px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Macbook{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[53px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    SSD
                  </Button>
                  <Button
                    className="border border-deep_orange-A200 border-solid cursor-pointer font-medium min-w-[117px] text-center text-sm"
                    shape="round"
                    color="red_50"
                    size="md"
                    variant="fill"
                  >
                    Graphics Card{" "}
                  </Button>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium min-w-[102px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Power Bank{" "}
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[87px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Smart TV
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[79px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Speaker
                  </Button>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start w-auto">
                  <Button
                    className="cursor-pointer font-medium min-w-[66px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Tablet
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[95px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Microwave
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[86px] text-center text-sm"
                    shape="round"
                    color="gray_300"
                    size="md"
                    variant="outline"
                  >
                    Samsung
                  </Button>
                </div>
              </div>
            </div>
            <C07ShopPageBanner className="bg-white-A700 border-4 border-orange-50 border-solid flex flex-col gap-6 items-center justify-center p-8 sm:px-5 rounded w-auto" />
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-3/4 md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[307px] items-start justify-between w-auto md:w-full">
              <Input
                name="search"
                placeholder="Search for anything..."
                className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                wrapClassName="border border-gray-300 border-solid flex w-auto md:w-full"
                suffix={
                  <Img
                    className="h-5 ml-[35px] my-auto"
                    src="images/img_rewind.svg"
                    alt="rewind"
                  />
                }
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              ></Input>
              <div className="flex flex-row gap-[22px] items-center justify-start w-auto">
                <Text
                  className="text-gray-900 text-sm w-auto"
                  size="txtPublicSansRegular14Gray900"
                >
                  Sort by:
                </Text>
                <SelectBox
                  className="border border-gray-300 border-solid text-left text-sm w-[72%] sm:w-full"
                  placeholderClassName="text-blue_gray-700"
                  indicator={
                    <Img
                      className="h-4 mr-[0] w-4"
                      src="images/img_arrowdown_blue_gray_200.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="dropdown"
                  options={dropdownOptionsList}
                  isSearchable={false}
                  placeholder="Most Popular"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
              </div>
            </div>
            <div className="bg-gray-100 flex sm:flex-col flex-row sm:gap-10 items-center justify-between max-w-[984px] mt-4 sm:px-5 px-6 py-3 rounded w-full">
              <div className="flex sm:flex-1 sm:flex-col flex-row gap-4 items-center justify-start w-auto sm:w-full">
                <Text
                  className="text-blue_gray-600 text-sm w-auto"
                  size="txtPublicSansRegular14Bluegray600"
                >
                  Active Filters:
                </Text>
                <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    Electronics Devices
                  </Text>
                  <Img
                    className="h-3 w-3"
                    src="images/img_close_blue_gray_300.svg"
                    alt="close"
                  />
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    5 Star Rating
                  </Text>
                  <Img
                    className="h-3 w-3"
                    src="images/img_close_blue_gray_300.svg"
                    alt="close_One"
                  />
                </div>
              </div>
              <Text
                className="text-gray-900 text-sm w-auto"
                size="txtPublicSansRegular14Gray900"
              >
                <span className="text-gray-900 font-publicsans text-left font-semibold">
                  65,867
                </span>
                <span className="text-gray-900 font-publicsans text-left font-normal">
                  {" "}
                </span>
                <span className="text-blue_gray-600 font-publicsans text-left font-normal">
                  Results found.
                </span>
              </Text>
            </div>
            <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start min-h-[auto] mt-6 w-auto md:w-full">
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_172x202.png"
                p25off="HOT"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="(738)"
                dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                priceOne="$70"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_6.png"
                textcomponent="536)"
                dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                priceOne="$2,300"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_27.png"
                p25off="BEST DEALS"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="423)"
                dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                priceOne="$360"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_3.png"
                signalfourimage="images/img_signal_white_a700.svg"
                textcomponent="816)"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_7.png"
                textcomponent="(647)"
                dell215inchfull="Wired Over-Ear Gaming Headphones with USB"
                priceOne="$1,500"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                price="$1600"
              />
              <C01HomepageProduct5 className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full" />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_1.png"
                p25off="SALE"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="(583)"
                dell215inchfull="4K UHD LED Smart TV with Chromecast Built-in"
                priceOne="$220"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_18.png"
                p25off="BEST DEALS"
                p56767="(994)"
                dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                priceOne="$360"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_3.png"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_19.png"
                p25off="HOT"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="(600)"
                dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                priceOne="$70"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_20.png"
                textcomponent="(492)"
                dell215inchfull="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                priceOne="$250"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_9.png"
                signalfourimage="images/img_signal_white_a700.svg"
                textcomponent="(740)"
                dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                priceOne="$2,300"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_21.png"
                p25off="SALE"
                p56767="(556)"
                dell215inchfull="4K UHD LED Smart TV with Chromecast Built-in"
                priceOne="$220"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_22.png"
                signalfourimage="images/img_signal_white_a700.svg"
                textcomponent="(536)"
                dell215inchfull="Wired Over-Ear Gaming Headphones with USB"
                priceOne="$1,500"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_23.png"
                p56767="(423)"
                price="$1600"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_28.png"
                p25off="HOT"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="(738)"
                dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                price="$75"
                priceOne="$70"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_6.png"
                textcomponent="536)"
                dell215inchfull="Samsung Electronics Samsung Galexy S21 5G"
                priceOne="$2,300"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_15.png"
                p25off="BEST DEALS"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="423)"
                dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                priceOne="$360"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_3.png"
                signalfourimage="images/img_signal_white_a700.svg"
                textcomponent="816)"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_29.png"
                p25off="BEST DEALS"
                p56767="(994)"
                dell215inchfull="Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6..."
                priceOne="$360"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                userimage="images/img_image_30.png"
                textcomponent="(492)"
                dell215inchfull="Dell Optiplex 7000x7480 All-in-One Computer Monitor"
                priceOne="$250"
              />
              <C01HomepageProduct4
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-4 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                price="$124"
              />
              <C01HomepageProduct3
                className="bg-white-A700 hover:border border hover:border-gray-300 border-gray-300 hover:border-solid border-solid hover:cursor-pointer flex flex-col gap-6 items-center justify-start p-3 rounded-[3px] hover:shadow-bs3 hover:w-full w-full"
                image="images/img_image_32.png"
                p25off="HOT"
                signalFour="images/img_signal_deep_orange_a200.svg"
                p56767="(600)"
                dell215inchfull="TOZO T6 True Wireless Earbuds Bluetooth Headphon..."
                priceOne="$70"
              />
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-center mt-10 w-auto sm:w-full">
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                color="deep_orange_A200"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowleft_deep_orange_a200.svg"
                  alt="arrowleft"
                />
              </Button>
              <div className="flex flex-row gap-2 items-start justify-start w-auto">
                <Text
                  className="bg-deep_orange-A200 flex h-10 items-center justify-center rounded-[50%] text-center text-sm text-white-A700 w-10"
                  size="txtPublicSansSemiBold14WhiteA700"
                >
                  01
                </Text>
                <Text
                  className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
                  size="txtPublicSansRegular14Gray900"
                >
                  02
                </Text>
                <Text
                  className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
                  size="txtPublicSansRegular14Gray900"
                >
                  03
                </Text>
                <Text
                  className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
                  size="txtPublicSansRegular14Gray900"
                >
                  04
                </Text>
                <Text
                  className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
                  size="txtPublicSansRegular14Gray900"
                >
                  05
                </Text>
                <Text
                  className="bg-white-A700 border border-gray-300 border-solid flex h-10 items-center justify-center rounded-[50%] text-center text-gray-900 text-sm w-10"
                  size="txtPublicSansRegular14Gray900"
                >
                  06
                </Text>
              </div>
              <Button
                className="flex h-10 items-center justify-center rounded-[50%] w-10"
                shape="circle"
                color="deep_orange_A200"
                size="md"
                variant="outline"
              >
                <Img
                  className="h-6"
                  src="images/img_arrowleft_deep_orange_a200.svg"
                  alt="arrowleft_One"
                />
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default ShopPagePage;
