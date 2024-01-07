import React from "react";

import { Img, Input, Text } from "components";

const C27DasboardColumndashboardnavite = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.edittextstyle ? (
          <Input
            name="dashboardnavite"
            placeholder="Dashboard"
            value={props?.edittextstyle}
            className="!placeholder:text-white-A700 !text-white-A700 font-publicsans font-semibold p-0 text-left text-sm w-full"
            wrapClassName="flex w-full"
            prefix={
              <Img
                className="h-5 mr-3 my-auto"
                src="images/img_arrowdown_white_a700.svg"
                alt="arrow_down"
              />
            }
            shape="square"
            color="deep_orange_A200"
            size="xs"
            variant="fill"
          ></Input>
        ) : null}
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image ? (
            <Img className="h-5 ml-3.5 w-5" alt="thumbsup" src={props?.image} />
          ) : null}
          {!!props?.text ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image1 ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="linkedin_One"
              src={props?.image1}
            />
          ) : null}
          {!!props?.text1 ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text1}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image2 ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="cart_One"
              src={props?.image2}
            />
          ) : null}
          {!!props?.text2 ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text2}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image3 ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="favorite_One"
              src={props?.image3}
            />
          ) : null}
          {!!props?.text3 ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text3}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image4 ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="settings_One"
              src={props?.image4}
            />
          ) : null}
          {!!props?.text4 ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text4}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image5 ? (
            <Img className="h-5 ml-3.5 w-5" alt="reply" src={props?.image5} />
          ) : null}
          {!!props?.text5 ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text5}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image6 ? (
            <Img className="h-5 ml-3.5 w-5" alt="clock" src={props?.image6} />
          ) : null}
          {!!props?.text6 ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text6}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image7 ? (
            <Img className="h-5 ml-3.5 w-5" alt="search" src={props?.image7} />
          ) : null}
          {!!props?.text7 ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text7}
            </Text>
          ) : null}
        </div>
        <div className="flex flex-row gap-3 items-center justify-start p-2.5 w-full">
          {!!props?.image8 ? (
            <Img
              className="h-5 ml-3.5 w-5"
              alt="thumbsup_One"
              src={props?.image8}
            />
          ) : null}
          {!!props?.text8 ? (
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.text8}
            </Text>
          ) : null}
        </div>
      </div>
    </>
  );
};

C27DasboardColumndashboardnavite.defaultProps = {};

export default C27DasboardColumndashboardnavite;
