import React, {Fragment} from "react"

function Resultado (props){
    return (
        <Fragment>
            <p><strong>Sua TMB é:</strong> {props.tmb} calorias por dia<br/>
            <strong>Sua NDC é:</strong> {props.ndc} calorias por dia</p>
            De acordo com alguns estudos o defícit ideal é de 500 calorias em cima do seu NDC e que não seja menos calorias que a TMB.
        </Fragment>
    )
}

export default Resultado