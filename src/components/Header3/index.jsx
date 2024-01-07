import React from "react";

import { Button, Img, Text } from "components";

const Header3 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Button
          className="cursor-pointer font-publicsans font-semibold min-w-[75px] md:ml-[0] ml-[299px] md:mt-0 my-[18px] rotate-[3deg] text-center text-xl"
          shape="square"
          color="amber_A100"
          size="md"
          variant="fill"
        >
          Black
        </Button>
        <Text
          className="mb-[22px] ml-3 md:ml-[0] md:mt-0 mt-7 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtPublicSansSemiBold24"
        >
          Friday
        </Text>
        <div className="flex flex-row gap-2 items-center justify-center md:ml-[0] ml-[411px] md:mt-0 my-4 w-auto">
          <Text
            className="text-sm text-white-A700 w-auto"
            size="txtPublicSansMedium14"
          >
            Up to
          </Text>
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-amber-500 w-auto"
            size="txtPublicSansSemiBold40"
          >
            59%
          </Text>
          <Text
            className="text-white-A700 text-xl w-auto"
            size="txtPublicSansSemiBold20"
          >
            OFF
          </Text>
        </div>
        <Button
          className="cursor-pointer flex items-center justify-center min-w-[156px] md:ml-[0] ml-[414px] md:mt-0 my-4"
          rightIcon={
            <Img
              className="h-5 ml-2"
              src="images/img_arrowleft.svg"
              alt="arrow_left"
            />
          }
          shape="round"
          color="amber_500"
          size="xl"
          variant="fill"
        >
          <div className="font-bold font-publicsans text-left text-sm tracking-[0.17px] uppercase">
            Shop now
          </div>
        </Button>
        <Button
          className="flex h-8 items-center justify-center md:ml-[0] ml-[243px] mr-6 md:mt-0 my-6 w-8"
          shape="round"
          color="blue_gray_900"
          size="md"
          variant="fill"
        >
          <Img className="h-4" src="images/img_close.svg" alt="close" />
        </Button>
      </header>
    </>
  );
};

Header3.defaultProps = {};

export default Header3;
