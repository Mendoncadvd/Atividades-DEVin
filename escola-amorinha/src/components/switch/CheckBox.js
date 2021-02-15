import {
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import React, { useState } from "react";

const CheckBox = () => {
  const [click, setClick] = useState("");

  const handleChange = (e) => {
    console.log("valor de e", e);
    setClick(e.target.value);
  };
  console.log(click);
  return (
    <>
      {/* Os componente abaixo não funcionam. Tentar outra forma */}
      <FormControl>
        <FormLabel>Selecione a turma</FormLabel>
        <RadioGroup value={click} onChange={handleChange}>
          <FormControlLabel
            value="Turma 11"
            label="Turma 11"
            labelPlacement="end"
            control={<Radio color="primary" size="small" />}
          />
          <FormControlLabel
            value="Turma 12"
            label="Turma 12"
            labelPlacement="end"
            control={<Radio color="primary" size="small" />}
          />
          <FormControlLabel
            value="Turma 13"
            label="Turma 13"
            labelPlacement="end"
            control={<Radio color="primary" size="small" />}
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default CheckBox;
