import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const C03HomepageUserPopupsSigninpopup = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-5 items-start justify-start w-auto">
          <Text
            className="text-center text-gray-900 text-xl w-auto"
            size="txtPublicSansSemiBold20Gray900"
          >
            {props?.signintoyour}
          </Text>
          <div className="flex flex-col gap-5 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
                <Text
                  className="text-gray-900 text-sm w-full"
                  size="txtPublicSansRegular14Gray900"
                >
                  {props?.emailaddress}
                </Text>
                <Input
                  name="inputfield"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-[360px]">
                <div className="flex flex-row gap-2 items-center justify-between w-full">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtPublicSansRegular14Gray900"
                  >
                    {props?.password}
                  </Text>
                  <Text
                    className="text-blue-500 text-sm w-auto"
                    size="txtPublicSansMedium14Blue500"
                  >
                    {props?.passwordtext}
                  </Text>
                </div>
                <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-end justify-start p-3 rounded-sm w-full">
                  <Img
                    className="h-5 mr-1 w-5"
                    src="images/img_eye.svg"
                    alt="eye"
                  />
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center w-[360px]"
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
                {props?.loginbutton}
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-start justify-start w-auto">
          <div className="h-5 relative w-full">
            <Line className="absolute bg-gray-300 bottom-[45%] h-px inset-x-[0] mx-auto w-full" />
            <Text
              className="absolute bg-white-A700 h-full inset-[0] justify-center m-auto px-2 text-blue_gray-400 text-sm w-max"
              size="txtPublicSansRegular14Bluegray400"
            >
              {props?.noaccounttext}
            </Text>
          </div>
          <Button
            className="cursor-pointer font-bold font-publicsans text-center text-sm tracking-[0.17px] uppercase w-[360px]"
            shape="round"
            color="orange_50"
            size="xl"
            variant="outline"
          >
            {props?.createaccountbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

C03HomepageUserPopupsSigninpopup.defaultProps = {
  signintoyour: "Sign in to your account",
  emailaddress: "Email Address",
  password: "Password",
  passwordtext: "Forget Password",
  loginbutton: "Login",
  noaccounttext: "Don’t have account",
  createaccountbutton: "Create account",
};

export default C03HomepageUserPopupsSigninpopup;
