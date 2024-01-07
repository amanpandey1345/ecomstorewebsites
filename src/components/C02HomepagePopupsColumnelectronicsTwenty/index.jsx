import React from "react";

import { Img, SelectBox, Text } from "components";

const dropdownOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C02HomepagePopupsColumnelectronicsTwenty = (props) => {
  return (
    <>
      <div className={props.className}>
        <SelectBox
          className="font-publicsans text-left text-sm text-white-A700 w-[27%] sm:w-full"
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
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start py-2 rounded-[3px] shadow-bs7 w-auto md:w-full">
          <div className="flex flex-row items-center justify-between p-2 w-full">
            <Text
              className="ml-[7px] text-deep_orange-A200 text-sm"
              size="txtPublicSansMedium14DeeporangeA200"
            >
              {props?.optiontext}
            </Text>
            <Img
              className="h-4 mr-[7px] w-4"
              src="images/img_checkmark.svg"
              alt="checkmark_One"
            />
          </div>
          <div className="flex flex-col items-start justify-end p-2 w-full">
            <Text
              className="md:ml-[0] ml-[7px] text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.optiontext1}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepagePopupsColumnelectronicsTwenty.defaultProps = {
  optiontext: "Dollar (USD)",
  optiontext1: "Euro (EUR)",
};

export default C02HomepagePopupsColumnelectronicsTwenty;
