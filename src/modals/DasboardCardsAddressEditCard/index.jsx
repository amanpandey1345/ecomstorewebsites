import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";

const DasboardCardsAddressEditCardModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[23%]"
      overlayClassName="bg-black-900_7f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col gap-6 items-start justify-center pb-6 md:px-5 rounded w-auto sm:w-full">
          <div className="bg-white-A700 border border-gray-300 border-solid flex flex-row items-center justify-between p-4 rounded-tl rounded-tr w-full">
            <Text
              className="ml-2 text-gray-900 text-sm uppercase"
              size="txtPublicSansMedium14Gray900"
            >
              Add New Card
            </Text>
            <Img
              className="h-5 mr-2 w-5"
              src="images/img_close_blue_gray_300.svg"
              alt="close"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-center sm:px-5 px-6 w-auto sm:w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-[376px] sm:w-full">
              <Text
                className="text-gray-900 text-sm w-full"
                size="txtPublicSansRegular14Gray900"
              >
                Name on Card
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
            <div className="flex flex-col gap-2 items-start justify-start w-[376px] sm:w-full">
              <Text
                className="text-gray-900 text-sm w-full"
                size="txtPublicSansRegular14Gray900"
              >
                Card Number
              </Text>
              <Input
                name="inputfield_One"
                placeholder=""
                className="p-0 w-full"
                wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                shape="round"
                color="white_A700"
                variant="fill"
              ></Input>
            </div>
            <div className="flex sm:flex-col flex-row gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-2 items-start justify-start w-[180px]">
                <Text
                  className="text-gray-900 text-sm w-full"
                  size="txtPublicSansRegular14Gray900"
                >
                  Expire Date
                </Text>
                <Input
                  name="inputfield_Two"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-[180px]">
                <Text
                  className="text-gray-900 text-sm w-full"
                  size="txtPublicSansRegular14Gray900"
                >
                  CVC
                </Text>
                <Input
                  name="inputfield_Three"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="border border-gray-300 border-solid flex h-11 w-full"
                  shape="round"
                  color="white_A700"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center sm:pl-5 pl-6 w-auto">
            <Button
              className="cursor-pointer font-bold min-w-[123px] text-center text-sm tracking-[0.17px] uppercase"
              shape="round"
              color="deep_orange_A200"
              size="xl"
              variant="fill"
            >
              Add Card
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DasboardCardsAddressEditCardModal;
