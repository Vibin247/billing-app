/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Title(props) {
  const { text, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="10px"
      direction="row"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        fontFamily="Crimson Text"
        fontSize="60px"
        fontWeight="600"
        color="rgba(53.1249987334013,51.35416455566883,51.35416455566883,1)"
        lineHeight="70.3125px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children={text}
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
    </Flex>
  );
}
