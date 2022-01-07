import React from "react";
import {
  Button,
  Paper,
  TextField,
  InputLabel,
  Typography,
  Box,
} from "@material-ui/core";
import { Header, Footer } from "../Components/Card";
import { FormInputText } from "./FormInputText";
import { FormInputMultiCheckbox } from "./FormInputMultiCheckbox";
import { FormInputSlider } from "./FormInputSlider";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import MuiPhoneNumber from "material-ui-phone-number";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as yup from "yup";
import MultipleSelect from "./MultipleSelect";
import BasicSelect from "./BasicSelect";

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};

export default function App() {
  function handleOnChange(value) {
    // this.setState({
    //    phone: value
    // });
    console.log(value);
  }
  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle Submit
    },
  });
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue } = methods;
  const onSubmit = (
    data
    //:
    // IFormInput
  ) => console.log(data);

  return (
    <Paper>
      <Header />
      <Typography variant="h5"> Complete your Bio </Typography>

      <Typography variant="h6"> Note: * mark fiels are mandatory </Typography>

      <FormInputText name="name" control={control} label="* Name" type="text" />
      <FormInputText
        name="surname"
        control={control}
        label="* Surname"
        type="text"
      />
      <FormInputText
        name="surname"
        control={control}
        label="* Phone number"
        type="phone"
      />
      <TextField
        fullWidth
        style={{ width: "60%", marginTop: "20px" }}
        id="outlined-basic"
        // size="small"
        variant="outlined"
        label="Email Id Optional"
        // id="email"
        name="email"
        type="email"
        inputProps={{ style: { textTransform: "lowercase" } }}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        // error={formik.touched.email && Boolean(formik.errors.email)}
        // helperText={formik.touched.email && formik.errors.email}
        // InputLabelProps={{
        //   shrink: true,
        // }}
      />

      <MuiPhoneNumber
        style={{ width: "60%", marginTop: "20px" }}
        placeholder="* Mobile No"
        fullWidth
        countryCodeEditable={false}
        defaultCountry={"in"}
        onChange={handleOnChange}
        variant="outlined"
      />
      <Box sx={{ minWidth: 120 }}>
        <FormControl
          fullwidth
          style={{ width: "30%", marginTop: "20px" }}
          //   variant="outlined"
        >
          <InputLabel id="demo-simple-select-required-label">
            * Gender
          </InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select"
            //value={age}
            label="* Gender"

            //onChange={handleChange}
          >
            <MenuItem value={"M"}>Male</MenuItem>
            <MenuItem value={"F"}>Female</MenuItem>
            <MenuItem value={"O"}>Other</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          style={{ width: "30%", marginTop: "20px" }}
          variant="outlined"
        >
          <InputLabel id="demo-simple-select-required-label">* Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            //value={age}
            label="* Age"

            //onChange={handleChange}
          >
            <MenuItem value={1}>01</MenuItem>
            <MenuItem value={2}>02</MenuItem>
            <MenuItem value={3}>03</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Paper
        style={{
          width: "60%",
          margin: "10px auto",

          height: "200px",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography>*Heading </Typography>
        <div className="flex">
          <BasicSelect />
          <MultipleSelect />
        </div>
      </Paper>
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
      <Footer/>
    </Paper>

  );
}
