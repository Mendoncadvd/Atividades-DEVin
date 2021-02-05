import { Box, Typography } from '@material-ui/core'
import React from 'react'
import InputLabel from './components/inputLabel/InputLabel';
import './styles/app.css';
export default function App() {
    return (
        <Box>
            <Typography variant="h1" component="h1">
                Escola Amorinha
            </Typography>
            <Typography variant="h4" component="h2">
                Cadastro de aluno
            </Typography>
            <Box className="inputs">
                <InputLabel label="Nome do aluno"/>
                <InputLabel label="Nome do Responsável"/>
                <InputLabel label="Telefone do Responsável" />
                <InputLabel label="Quem avisar em caso de Emergência?"/>
                <InputLabel label="Descrição das restrições alimentares" linhas={true}/>
                <InputLabel label="Autorizados a buscar o aluno"/>
                <InputLabel label="Observações adicionais" linhas={true}/>
                <InputLabel label="Telefone do responsável" tipo="telephone"/>
            </Box>   


        </Box>
    )
}
