import React from "react";
import CustomCard from "./CustomCard";
import App from "../form-components/App";
import { Paper, Typography } from "@material-ui/core";
import BasicSelect from "../form-components/BasicSelect";
import MultipleSelect from "../form-components/MultipleSelect";
import { FormInputText } from "../form-components/FormInputText";
import { useForm } from "react-hook-form";
const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};

function Bio(props) {
  let methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit = (
    data
    //:
    // IFormInput
  ) => console.log(data);

  return (
    <div display="flex">
      <CustomCard>{BioBody(props)}</CustomCard>
      <div>
        <Paper
          style={{
            width: "80%",
            margin: "20px auto",
            height: "100px",
            display: "none",
          }}
        >
          <Typography style={{ textAlign: "left", color: "gray" }}>
            *Heading{" "}
          </Typography>
          <div className="flex">
            <BasicSelect />
            <MultipleSelect />
          </div>
          <div>
            <Paper>
              <div>Communication Address</div>
              <FormInputText
                name="name"
                control={control}
                label="House/ Falt /Apartment Name"
                type="text"
              />
              <FormInputText
                name="landmark"
                control={control}
                label="Street / Landmark"
                type="text"
              />
              <FormInputText
                name="colony"
                control={control}
                label="Colony Name"
                type="text"
              />
              <FormInputText
                name="nearby"
                control={control}
                label="Near by landmark"
                type="text"
              />
              <FormInputText
                name="city"
                control={control}
                label="City"
                type="text"
              />
              <FormInputText
                name="state"
                control={control}
                label="State (chage to dropdown)"
                type="text"
              />
              <FormInputText
                name="pincode"
                control={control}
                label="PIN"
                type="text"
              />
            </Paper>
          </div>
        </Paper>
      </div>
    </div>
  );
}

function BioBody(props) {
  return <App props={props} />;
}

export default Bio;
