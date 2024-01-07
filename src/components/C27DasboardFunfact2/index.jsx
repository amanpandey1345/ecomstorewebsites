import React from "react";

import { Button, Img, Text } from "components";

const C27DasboardFunfact2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-14 items-center justify-center w-14"
          shape="round"
          color="white_A700"
          size="xl"
          variant="fill"
        >
          <Img
            className="h-8"
            src="images/img_thumbsup_green_700.svg"
            alt="thumbsup"
          />
        </Button>
        <div className="flex flex-col gap-1 items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-xl w-auto"
            size="txtPublicSansSemiBold20Gray900"
          >
            {props?.ordercount}
          </Text>
          <Text
            className="text-blue_gray-700 text-sm w-auto"
            size="txtPublicSansRegular14Bluegray700"
          >
            {props?.completedorderstext}
          </Text>
        </div>
      </div>
    </>
  );
};

C27DasboardFunfact2.defaultProps = {
  ordercount: "149",
  completedorderstext: "Completed Orders",
};

export default C27DasboardFunfact2;
