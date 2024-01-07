import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import C01HomepageNewsletter from "components/C01HomepageNewsletter";
import C01HomepageProduct6 from "components/C01HomepageProduct6";
import C23AboutUsTeammember from "components/C23AboutUsTeammember";
import Footer from "components/Footer";

const AboutUsPage = () => {
  const c23AboutUsTeammemberPropList = [
    {},
    { chiefexecutive: "Assistant of CEO" },
    { chiefexecutive: "Head of Designer" },
    { chiefexecutive: "UX Designer" },
    { chiefexecutive: "Product Designer" },
    { chiefexecutive: "Head of Development" },
    { chiefexecutive: "Design Engineer" },
    { chiefexecutive: "UI Designer" },
  ];

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
              <Img
                className="h-8 w-8"
                src="images/img_cart_white_a700_32x32.svg"
                alt="cart"
              />
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
        <div className="flex md:flex-col flex-row md:gap-10 gap-[136px] items-center justify-center pb-[124px] pt-[72px] md:px-10 sm:px-5 px-[300px] w-auto md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <Button
                  className="cursor-pointer font-semibold min-w-[124px] text-center text-sm"
                  shape="round"
                  color="blue_500"
                  size="md"
                  variant="fill"
                >
                  WHO WE ARE
                </Button>
                <Text
                  className="leading-[48.00px] max-w-[536px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                  size="txtPublicSansSemiBold40Gray900"
                >
                  Kinbo - largest electronics retail shop in the world.
                </Text>
              </div>
              <Text
                className="leading-[24.00px] max-w-[536px] md:max-w-full text-base text-blue_gray-700"
                size="txtPublicSansRegular16Bluegray700"
              >
                Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit
                vestibulum risus, ac tincidunt diam lectus id magna. Praesent
                maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a
                dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <CheckBox
                className="text-base text-gray-900 text-left"
                inputClassName="mr-[5px]"
                name="great247custome_One"
                id="great247custome_One"
                label="Great 24/7 customer services."
                shape="square"
              ></CheckBox>
              <CheckBox
                className="text-base text-gray-900 text-left"
                inputClassName="mr-[5px]"
                name="600dedicatedemp_One"
                id="600dedicatedemp_One"
                label="600+ Dedicated employe."
                shape="square"
              ></CheckBox>
              <CheckBox
                className="text-base text-gray-900 text-left"
                inputClassName="mr-[5px]"
                name="50branchesall"
                id="50branchesall"
                label="50+ Branches all over the world."
                shape="square"
              ></CheckBox>
              <CheckBox
                className="text-base text-gray-900 text-left"
                inputClassName="mr-[5px]"
                name="over1millionele_One"
                id="over1millionele_One"
                label="Over 1 Million Electronics Products"
                shape="square"
              ></CheckBox>
            </div>
          </div>
          <Img
            className="h-[536px] sm:h-auto object-cover rounded w-[648px] md:w-full"
            src="images/img_unsplashalwcwgfmwq.png"
            alt="unsplashalwcwgf"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[300px] py-[72px] shadow-bs6 w-auto md:w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1320px] mx-auto w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900 w-auto"
              size="txtPublicSansSemiBold32"
            >
              Our core team member
            </Text>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {c23AboutUsTeammemberPropList.map((props, index) => (
                  <React.Fragment key={`C23AboutUsTeammember${index}`}>
                    <C23AboutUsTeammember
                      className="bg-white-A700 border border-gray-300 border-solid flex flex-1 flex-row gap-4 items-center justify-center p-6 sm:px-5 rounded-[3px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-gradient2  bg-no-repeat flex flex-col h-[440px] items-start justify-start md:px-10 sm:px-5 px-[300px] py-[88px] w-auto md:w-full"
          style={{ backgroundImage: "url('images/img_banner.png')" }}
        >
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1320px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="leading-[40.00px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                size="txtPublicSansSemiBold32"
              >
                <>
                  Your trusted and
                  <br />
                  reliable retail shop
                </>
              </Text>
              <Text
                className="leading-[24.00px] max-w-[423px] md:max-w-full text-gray-900 text-lg"
                size="txtPublicSansRegular18Gray900"
              >
                Praesent sed semper metus. Nunc aliquet dolor mauris, et
                fringilla elit gravida eget. Nunc consequat auctor urna a
                placerat.
              </Text>
            </div>
            <Button
              className="flex h-[72px] items-center justify-center rounded-[50%] w-[72px]"
              shape="circle"
              color="deep_orange_A200"
              size="3xl"
              variant="fill"
            >
              <Img
                className="h-6"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </Button>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              FLASH SALE TODAY
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
              BEST SELLERS
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
              TOP RATED
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
          <div className="flex flex-col gap-4 items-start justify-start w-auto">
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtPublicSansSemiBold16"
            >
              NEW ARRIVAL
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
        </List>
        <C01HomepageNewsletter className="bg-light_blue-900 flex flex-col gap-8 items-center justify-center md:px-10 sm:px-5 px-[300px] py-[72px] w-auto md:w-full" />
        <Footer className="flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
