import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Text,
} from "components";
import C01HomepageFeature from "components/C01HomepageFeature";
import C01HomepageFeature1 from "components/C01HomepageFeature1";
import C01HomepageFeature2 from "components/C01HomepageFeature2";
import C01HomepageFeature3 from "components/C01HomepageFeature3";
import C02HomepagePopupsColumn from "components/C02HomepagePopupsColumn";
import C02HomepagePopupsWidget from "components/C02HomepagePopupsWidget";
import C02HomepagePopupsWidget1 from "components/C02HomepagePopupsWidget1";
import C02HomepagePopupsWidget2 from "components/C02HomepagePopupsWidget2";
import C03HomepageUserPopupsSigninpopup from "components/C03HomepageUserPopupsSigninpopup";
import Footer1 from "components/Footer1";
import Header3 from "components/Header3";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const buttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepageUserPopupsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-publicsans items-center justify-end mx-auto w-full">
        <Header3 className="bg-gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="md:h-[1736px] h-[764px] md:px-5 relative w-full">
          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-light_blue-900 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-3 shadow-bs w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <Text
                      className="text-sm text-white-A700 w-auto"
                      size="txtPublicSansRegular14WhiteA700"
                    >
                      Welcome to Clicon online eCommerce store.{" "}
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
                      <Line className="bg-white-A700_68 h-7 sm:h-px sm:w-full w-px" />
                      <div className="flex flex-col items-center justify-start w-[12%] sm:w-full">
                        <SelectBox
                          className="text-left text-sm text-white-A700 w-full"
                          placeholderClassName="text-white-A700"
                          indicator={
                            <Img
                              className="h-3 w-3"
                              src="images/img_arrowdown_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="dropdown"
                          options={dropdownOptionsList}
                          isSearchable={false}
                          placeholder="Eng"
                          size="xs"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-[12%] sm:w-full">
                        <SelectBox
                          className="text-left text-sm text-white-A700 w-full"
                          placeholderClassName="text-white-A700"
                          indicator={
                            <Img
                              className="h-3 w-3"
                              src="images/img_arrowdown_12x12.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="dropdown_One"
                          options={dropdownOneOptionsList}
                          isSearchable={false}
                          placeholder="USD"
                          size="xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-light_blue-900 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-5 w-full">
                  <div className="flex flex-row gap-2 items-center justify-center w-auto">
                    <div className="bg-white-A700 h-12 rounded-[50%] w-12"></div>
                    <Text
                      className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 tracking-[-0.64px] w-auto"
                      size="txtPublicSansBold32"
                    >
                      CLICON
                    </Text>
                  </div>
                  <Input
                    name="frameEighteen"
                    placeholder="Search for anything..."
                    className="!placeholder:text-blue_gray-400 !text-blue_gray-400 p-0 text-left text-sm w-full"
                    wrapClassName="flex md:flex-1 shadow-bs1 w-auto md:w-full"
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
                  <div className="flex flex-row gap-6 items-center justify-start w-auto">
                    <C02HomepagePopupsColumn className="flex flex-col items-center justify-start w-1/4" />
                    <Img
                      className="h-8 w-8"
                      src="images/img_favorite.svg"
                      alt="favorite"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-row items-center justify-between max-w-[1920px] md:px-10 sm:px-5 px-[300px] py-4 shadow-bs2 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
                      <div className="flex flex-col items-center justify-start w-[23%] md:w-full">
                        <SelectBox
                          className="font-medium text-left text-sm w-full"
                          placeholderClassName="text-gray-900"
                          indicator={
                            <Img
                              className="h-4 w-4"
                              src="images/img_arrowdown_gray_900.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="button"
                          options={buttonOptionsList}
                          isSearchable={false}
                          placeholder="All Category"
                          shape="round"
                          color="gray_100"
                          size="sm"
                          variant="fill"
                        />
                      </div>
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
                            Track Order
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
                            Compare
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
                            Customer Support
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
                            Need Help
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-center w-auto">
                      <Img
                        className="h-7 w-7"
                        src="images/img_call_gray_900.svg"
                        alt="call"
                      />
                      <Text
                        className="text-gray-900 text-lg w-auto"
                        size="txtPublicSansRegular18Gray900"
                      >
                        +1-202-555-0104
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <C02HomepagePopupsWidget className="bg-gray-100 flex flex-col items-center justify-center p-[54px] md:px-10 sm:px-5 rounded-md w-[67%] md:w-full" />
                <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                  <C02HomepagePopupsWidget1
                    className="bg-gray-900 md:h-[201px] h-[248px] sm:pl-5 pl-6 pt-6 relative rounded-md w-full"
                    offer="29% OFF"
                  />
                  <C02HomepagePopupsWidget2 className="bg-gray-100 flex flex-row gap-5 items-center justify-center pl-8 pr-10 sm:px-5 py-10 rounded-md w-auto sm:w-full" />
                </div>
              </div>
            </div>
          </div>
          <C03HomepageUserPopupsSigninpopup className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-center justify-start p-8 sm:px-5 right-[16%] rounded shadow-bs7 top-[16%] w-auto" />
        </div>
        <List
          className="bg-white-A700 border border-gray-300 border-solid sm:flex-col flex-row gap-7 grid sm:grid-cols-[repeat(0,_1fr_1px)_1fr] md:grid-cols-[repeat(1,_1fr_1px)_1fr] grid-cols-[repeat(3,_1fr_1px)_1fr] justify-center max-w-[1320px] mt-6 mx-auto p-4 md:px-5 rounded-md w-full"
          orientation="horizontal"
        >
          <C01HomepageFeature className="bg-white-A700 flex flex-row gap-4 items-center justify-center p-4 w-auto" />
          <Line className="self-center h-14 bg-gray-300 w-px" />
          <C01HomepageFeature1 className="bg-white-A700 flex flex-row gap-4 items-center justify-center p-4 w-auto" />
          <Line className="self-center h-14 bg-gray-300 w-px" />
          <C01HomepageFeature2 className="bg-white-A700 flex flex-row gap-4 items-center justify-center p-4 w-auto" />
          <Line className="self-center h-14 bg-gray-300 w-px" />
          <C01HomepageFeature3 className="bg-white-A700 flex flex-row gap-4 items-center justify-center p-4 w-auto" />
        </List>
        <Footer1 className="flex gap-6 items-center justify-center md:px-5 px-[300px] py-[72px] w-full" />
      </div>
    </>
  );
};

export default HomepageUserPopupsPage;
