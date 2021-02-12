import { Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel } from "@material-ui/core";
import React from "react";

const CheckBox = () => {
  return (
    <>
    {/* Os componente abaixo não funcionam. Tentar outra forma */}
      {/* <FormControl>
        <FormLabel>Selecione a turma</FormLabel>
        <FormGroup column>
          <FormControlLabel 
          label="Turma11"
          labelPlacement="end"
          control={<CheckBox />}
          />
        </FormGroup>
      </FormControl>  */}
    </>
  );
};

export default CheckBox;
