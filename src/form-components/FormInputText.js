import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import React, { useState } from "react";

export const FormInputText = ({ name, control, label,type }) => {
  const [value, setValue] = useState();
  return (
    // <FormInputText name={'textInput'} control={control} label={'Text Input'} />
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => (
        <TextField
        type={type}
          id="outlined-basic"
          fullWidth
          style={{ width: "60%",marginTop:'20px' }}
          label={label}
          variant="outlined"
          value={value}
        //   style={{textEmphasisColor: 'red'}}
        />
      )}
    />
  );
};
// <TextField

//   value={value}
//   // onChange={handleChange}
// />
