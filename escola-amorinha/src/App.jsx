import { Box, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import InputText from "./components/inputLabel/InputText";
import Interruptor from "./components/switch/interruptor";
import CheckBox from "./components/switch/CheckBox";
import Lista from "./components/lista/Lista";
import InputAdd from "./components/inputLabel/InputAdd";
import "./styles/app.css";

/* nome, nascimento, turma, telefone para emergencias, em caso de emergencia avisar */
var alunos = [
  {
    id: 1,
    nome: "David",
    nascimento: "03/05/1995",
    turma: "Turma 11",
    telefone: "(48)91234-5678",
    emergencia: "Mãe",
  },
  {
    id: 2,
    nome: "Gui",
    nascimento: "05/07/1993",
    turma: "Turma 12",
    telefone: "(48)91234-5678",
    emergencia: "Mãe",
  },
];
export default function App() {
  /* Control do Interruptor */
  const [interruptor, setInterruptor] = useState(false);

  const handleInterruptor = () => {
    if (interruptor === false) {
      setInterruptor(true);
    } else {
      setInterruptor(false);
    }
  };

  return (
    <Box>
      <Typography className="titulo" variant="h1" component="h1">
        Escola Amorinha
      </Typography>
      <Typography className="subtitulo" variant="h4" component="h2">
        Cadastro de aluno
      </Typography>
      <Box className="inputs" marginBottom={5}>
        <InputText label="Nome do aluno" />
        <InputText label="Data de Nascimento" tipo="date" />
        <InputText label="Nome do Responsável" />
        <InputText
          label="Telefone do Responsável"
          tipo="tel"
          mascara="Ex.:(48)91234-5678"
        />
        <InputAdd label="Quem avisar em caso de Emergência?" />
        <InputText
          label="Telefone de Emergência:"
          tipo="tel"
          mascara="Ex.:(48)91234-5678"
        />
        <Typography>Possui Restrição Alimentar?</Typography>
        <Grid className="grid-interruptor-restricao">
          <Grid>Não</Grid>
          <Grid>
            <Interruptor check={interruptor} evento={handleInterruptor} />
          </Grid>
          <Grid>Sim</Grid>
        </Grid>
        {interruptor !== false && (
          <InputText
            label="Descrição das restrições alimentares"
            linhas={true}
          />
        )}
        <Typography>
          Autoriza o uso de fotos e vídeos da criança para uso escolar?
        </Typography>
        <Grid className="grid-interruptor-autoriza">
          <Grid>Não</Grid>
          <Grid>
            <Interruptor />
          </Grid>
          <Grid>Sim</Grid>
        </Grid>
        <InputAdd label="Autorizados a buscar o aluno" />
        <CheckBox />
        <InputText label="Observações adicionais" linhas={true} />
      </Box>

      <Box>
        <Typography className="subtitulo" variant="h4" component="h2">
          Lista de cadastros:
        </Typography>
        <Lista lista={alunos} />
      </Box>
    </Box>
  );
}
