import React from "react";
import { TextField, Box } from "@material-ui/core";

const InputLabel = (props) => {
  const { label, linhas, valorDefault, tipo } = props;
  return (
    <Box>
      <TextField
        required
        variant="outlined"
        size="small"
        label={label}
        multiline={linhas}
        type={tipo}
      ></TextField>
    </Box>
  );
};
InputLabel.defaultProps = {
    tipo: "text"
}
export default InputLabel;
