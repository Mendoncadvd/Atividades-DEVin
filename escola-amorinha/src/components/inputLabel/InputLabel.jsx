import React from "react";
import { TextField, Box } from "@material-ui/core";

const InputLabel = (props) => {
  const { label, linhas, tipo } = props;
  return (
    <Box>
      <TextField
        style={{marginTop: "20px"}}
        required
        variant="outlined"
        size="small"
        fullWidth
        label={label}
        multiline={linhas}
        type={tipo}
        InputLabelProps={{
          shrink: true
        }}
      ></TextField>
    </Box>
  );
};
InputLabel.defaultProps = {
    tipo: "text"
}
export default InputLabel;
