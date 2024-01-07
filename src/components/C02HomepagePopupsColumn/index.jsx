import React from "react";

import { Img, Text } from "components";

const C02HomepagePopupsColumn = (props) => {
  return (
    <>
      <div className={props.className}>
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
              {props?.cartcount}
            </Text>
          </div>
          <div className="flex flex-row gap-[9px] items-center justify-between mt-[3px] w-1/2 md:w-full">
            <div className="bg-white-A700 h-1 rounded-[50%] w-1"></div>
            <div className="bg-white-A700 h-1 rounded-[50%] w-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepagePopupsColumn.defaultProps = { cartcount: "2" };

export default C02HomepagePopupsColumn;
