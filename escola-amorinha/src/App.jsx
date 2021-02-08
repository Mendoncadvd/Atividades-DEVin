import { Box, Grid, Typography, Checkbox } from '@material-ui/core'
import React, {useState} from 'react'
import InputText from './components/inputLabel/InputText';
import Interruptor from "./components/switch/interruptor";
import CheckBox from "./components/switch/CheckBox";
import './styles/app.css';
export default function App() {

    /* Control do Interruptor */
    const [interruptor, setInterruptor] = useState(false);

    const handleInterruptor = () => {
        if (interruptor == false) {
            setInterruptor(true)
        } else {
            setInterruptor(false)
        }
    }

    return (
        <Box>
            <Typography variant="h1" component="h1">
                Escola Amorinha
            </Typography>
            <Typography variant="h4" component="h2">
                Cadastro de aluno
            </Typography>
            <Box className="inputs">
                <InputText label="Nome do aluno"/>
                <InputText label="Data de Nascimento" tipo="date"/>
                <InputText label="Nome do Responsável"/>
                <InputText label="Telefone do Responsável" tipo="tel" mascara="Ex.:(48)91234-5678"/>
                <InputText label="Quem avisar em caso de Emergência?"/>
                <InputText label="Telefone de Emergência:" tipo="tel" mascara="Ex.:(48)91234-5678" />
                <Typography>Possui Restrição Alimentar?</Typography>
                <Grid className="grid-interruptor-restricao">
                    <Grid>Não</Grid>
                    <Grid><Interruptor check={interruptor} evento={handleInterruptor}/></Grid>
                    <Grid>Sim</Grid>
                </Grid>
                {interruptor != false && (
                    <InputText label="Descrição das restrições alimentares" linhas={true}/>
                )}
                <Typography>Autoriza o uso de fotos e vídeos da criança para uso escolar?</Typography>
                <Grid className="grid-interruptor-autoriza">
                    <Grid>Não</Grid>
                    <Grid><Interruptor /></Grid>
                    <Grid>Sim</Grid>
                </Grid>
                <InputText label="Autorizados a buscar o aluno"/>
                <Typography>Turma</Typography>
                <CheckBox />
                <InputText label="Observações adicionais" linhas={true}/>
            </Box>   


        </Box>
    )
}
