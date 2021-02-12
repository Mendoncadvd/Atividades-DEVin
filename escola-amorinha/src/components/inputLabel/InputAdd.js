import React, { useState } from "react";
import { TextField, InputAdornment, Typography, IconButton, Grid } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";

const InputAdd = (props) => {
  const { label, mascara, titulo } = props;

  const [responsavel, setResponsavel] = useState("");
  const [responsaveis, setResponsaveis] = useState([""]);

  const handleAdd = () => {
    setResponsaveis([...responsaveis, responsavel]);
    setResponsavel("");
  };
  return (
    <>
      <Typography>{titulo}</Typography>
      <Grid style={{ maxHeight: "100px", overflow: "auto" }}>
        {responsaveis?.map((pessoa) => (
          <Typography key={pessoa}>{pessoa}</Typography>
        ))}
      </Grid>
      <TextField
        style={{ marginTop: "20px" }}
        required
        variant="outlined"
        size="small"
        fullWidth
        label={label}
        placeholder={mascara}
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={handleAdd}>
                <AddBoxIcon fontSize="small"/>
              </IconButton>
            </InputAdornment>
          ),
        }}
        value={responsavel}
        onChange={(e) => setResponsavel(e.target.value)}
      />
    </>
  );
};

export default InputAdd;
