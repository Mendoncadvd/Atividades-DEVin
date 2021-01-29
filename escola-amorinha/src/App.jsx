import { Box } from '@material-ui/core'
import React from 'react'
import InputLabel from './components/inputLabel/InputLabel';
import Botao from './components/botao/botao';
export default function App() {
    return (
        <Box>   
            <InputLabel label="Nome do aluno"/>
            <InputLabel label="Nome do Responsável"/>
            <InputLabel label="Quem avisar em caso de Emergência?"/>
            <InputLabel label="Descrição das restrições alimentares" linhas={true}/>
            <InputLabel label="Autorizados a buscar o aluno"/>
            <InputLabel label="Observações adicionais" linhas={true}/>
            <InputLabel label="Telefone do responsável" tipo="telephone"/>
        </Box>
    )
}
