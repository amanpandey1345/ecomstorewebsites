import React from "react";

import { Img, SelectBox, Text } from "components";

const dropdownOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const C02HomepagePopupsColumnellipseten = (props) => {
  return (
    <>
      <div className={props.className}>
        <SelectBox
          className="font-publicsans text-left text-sm text-white-A700 w-1/4 sm:w-full"
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
        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start py-2 rounded-[3px] shadow-bs7 w-auto md:w-full">
          <div className="flex flex-row items-center justify-start p-2 w-full">
            <Img
              className="h-5 md:h-auto ml-2 rounded-[50%] w-5"
              src="images/img_ellipse10.png"
              alt="ellipseTen"
            />
            <Text
              className="ml-3 text-gray-900 text-sm"
              size="txtPublicSansMedium14Gray900"
            >
              {props?.languageone}
            </Text>
            <Img
              className="h-4 ml-[51px] w-4"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
          <div className="flex flex-row gap-3 items-center justify-start p-2 w-full">
            <Img
              className="h-5 md:h-auto ml-2 rounded-[50%] w-5"
              src="images/img_ellipse10_20x20.png"
              alt="ellipseTen_One"
            />
            <Text
              className="text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.languagetwo}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-start justify-start p-1 w-full">
            <Img
              className="h-5 md:h-auto ml-3 mt-1 rounded-[50%] w-5"
              src="images/img_ellipse10_1.png"
              alt="ellipseTen_Two"
            />
            <Text
              className="mt-[5px] text-blue_gray-600 text-sm"
              size="txtPublicSansRegular14Bluegray600"
            >
              {props?.languagethree}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

C02HomepagePopupsColumnellipseten.defaultProps = {
  languageone: "English",
  languagetwo: "Mandarin ",
  languagethree: "Russian",
};

export default C02HomepagePopupsColumnellipseten;
