/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import FormCheckout from "./FormCheckout";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Collection } from "@aws-amplify/ui-react";
export default function FormCheckoutCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "FormCheckoutCollection")}
    >
      {(item, index) => (
        <FormCheckout
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></FormCheckout>
      )}
    </Collection>
  );
}
