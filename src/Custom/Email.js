import { useFormik } from "formik";
import { TextField } from "material-ui";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function Email() {
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

  return (
    <TextField
      fullWidth
      style={{ width: "60%", padding: "14px" }}
      id="outlined-basic"
      // size="small"
      variant="outlined"
      label="&nbsp; Email Id Optional"
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
  );
}

export default Email;
