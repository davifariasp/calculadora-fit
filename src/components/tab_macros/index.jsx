import React, {Fragment} from "react"


function TabMacros(props){
    let caldia = props.ndc - 500

    


    //p = 2.5 * kg (g de caloria )* 4 = cal
    //g = 0.5 ou 1 (g de gordura)* kg * 9 = cal
    //c = o resto/4 = g


    //proteinas
    const p = 2.5 * props.peso
    caldia -= p*4
    //gorduras
    const g = 0.5 * props.peso
    caldia -= g*9
    //carboidratos
    const c = (caldia / 4)

    return (
        <Fragment >
            <div className={props.pr}>
                <br/>
                <p><strong>Número mágico:</strong> {props.ndc - 500} calorias por dia</p>
                <div className="row align-items-center">
                    <div className="col">
                        🍗<br/>Proteinas:<br/>{p}g
                    </div>
                    <div className="col">
                        🍞<br/>Carboidratos:<br/>{c}g
                    </div>
                    <div className="col">
                        🧈<br/>Gorduras:<br/>{g}g
                    </div>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default TabMacros