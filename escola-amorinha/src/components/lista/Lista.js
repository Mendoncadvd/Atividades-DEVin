import { Box, Grid, Typography, Paper, makeStyles } from "@material-ui/core";
import React from "react";
/* nome, nascimento, turma, telefone para emergencias, em caso de emergencia avisar */
const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom:"20px"
  },
}));
const Lista = (props) => {
  const { lista } = props;
  const classes = useStyle();
  return (
    <>
      {lista?.map((aluno) => (
        <Box classes={{ root: classes.root }} component={Paper} elevation={4}>
          <Grid>
            <Typography>Nome</Typography>
            <Typography>{aluno.nome}</Typography>
          </Grid>
          <Grid>
            <Typography>Turma</Typography>
            <Typography>{aluno.turma}</Typography>
          </Grid>
          <Grid>
            <Typography>Data de Nascimento</Typography>
            <Typography>{aluno.nascimento}</Typography>
          </Grid>
          <Grid>
            <Typography>Telefone para Emergência</Typography>
            <Typography>{aluno.telefone}</Typography>
          </Grid>
          <Grid>
            <Typography>Em caso de Emergencia Avisar</Typography>
            <Typography>{aluno.emergencia}</Typography>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default Lista;
