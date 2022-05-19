/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { Invite } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, SwitchField, TextField } from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSevenZeroZeroNineValue,
    setTextFieldTwoNineSevenSixSevenZeroZeroNineValue,
  ] = useStateMutationAction("");
  const [
    switchFieldTwoNineSevenSixSevenZeroOneZeroIsChecked,
    setSwitchFieldTwoNineSevenSixSevenZeroOneZeroIsChecked,
  ] = useStateMutationAction(true);
  const [
    switchFieldTwoNineSevenSixSevenZeroOneFourIsChecked,
    setSwitchFieldTwoNineSevenSixSevenZeroOneFourIsChecked,
  ] = useStateMutationAction(true);
  const [
    textFieldTwoNineSevenSixSevenZeroOneFiveValue,
    setTextFieldTwoNineSevenSixSevenZeroOneFiveValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      nom: textFieldTwoNineSevenSixSevenZeroZeroNineValue,
      samedi: switchFieldTwoNineSevenSixSevenZeroOneZeroIsChecked,
      dimanche: switchFieldTwoNineSevenSixSevenZeroOneFourIsChecked,
      regime: textFieldTwoNineSevenSixSevenZeroOneFiveValue,
    },
    model: Invite,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      direction="row"
      width="459px"
      height="620px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FormCheckout")}
    >
      <Flex
        gap="0"
        direction="row"
        width="459px"
        height="620px"
        alignItems="flex-start"
        grow="1"
        basis="459px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="459px"
          height="588px"
          shrink="0"
          position="relative"
          padding="0px 32px 0px 32px"
          {...getOverrideProps(overrides, "Frame 406")}
        >
          <TextField
            display="flex"
            direction="column"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Mon nom :"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            placeholder=""
            value={textFieldTwoNineSevenSixSevenZeroZeroNineValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSevenZeroZeroNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29767009")}
          ></TextField>
          <SwitchField
            display="flex"
            gap="8px"
            direction="row"
            height="88px"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="8px 8px 8px 8px"
            label="Je participe à la réception du samedi"
            size="large"
            isDisabled={false}
            labelPosition="start"
            isChecked={switchFieldTwoNineSevenSixSevenZeroOneZeroIsChecked}
            onChange={() =>
              setSwitchFieldTwoNineSevenSixSevenZeroOneZeroIsChecked(
                !switchFieldTwoNineSevenSixSevenZeroOneZeroIsChecked
              )
            }
            {...getOverrideProps(overrides, "SwitchField29767010")}
          ></SwitchField>
          <SwitchField
            display="flex"
            gap="8px"
            direction="row"
            height="88px"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="8px 8px 8px 8px"
            label="Je participe au brunch du dimanche"
            size="large"
            isDisabled={false}
            labelPosition="start"
            isChecked={switchFieldTwoNineSevenSixSevenZeroOneFourIsChecked}
            onChange={() =>
              setSwitchFieldTwoNineSevenSixSevenZeroOneFourIsChecked(
                !switchFieldTwoNineSevenSixSevenZeroOneFourIsChecked
              )
            }
            {...getOverrideProps(overrides, "SwitchField29767014")}
          ></SwitchField>
          <TextField
            display="flex"
            direction="column"
            height="142px"
            justifyContent="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            label="Régime alimentaire particulier (végétarien, allergies, etc.)"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSevenZeroOneFiveValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSevenZeroOneFiveValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29767015")}
          ></TextField>
          <Button
            display="flex"
            gap="0"
            direction="row"
            height="45px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Envoyer ma réponse"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
