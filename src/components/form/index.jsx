import React, { Fragment, useState } from "react"
import './Form.css'
function FormFit(props) {

    const [altura, setAltura] = useState(0)
    const [idade, setIdade] = useState(0)
    const [sexo, setSexo] = useState('')

    const options = [
        { value: '1.2', text: 'Sedentário' },
        { value: '1.375', text: 'Leve' },
        { value: '1.55', text: 'Moderado' },
        { value: '1.725', text: 'Alto' },
    ]

    const [taxa, setTaxa] = useState(Number(options[0].value))

    function calcular() {

        let resultado = 0
        console.log(sexo, taxa)

        if (sexo == 'm') {
            resultado = (66 + ((13.8 * props.peso) + (5 * altura) - (6.8 * idade)))
            props.setTmb(Math.round(resultado))
            props.setNdc(Math.round(taxa * resultado))
            props.setPr('')
        } else if (sexo == 'f') {
            resultado = (655 + ((9.6 * props.peso) + (1.9 * altura) - (4.7 * idade)))
            props.setTmb(Math.round(resultado))
            props.setNdc(Math.round(taxa * resultado))
            props.setPr('')
        } else {
            alert('Dados inválidos, verifique e tente novamente!')
        }
    }

    return (
        <Fragment>
            Peso: <input class="form-control" type="text" placeholder="em quilos" value={props.peso} onChange={e => props.setPeso(Number(e.target.value))} name="formPeso" id="formPes" />

            Altura: <input class="form-control" type="text" placeholder="em centímetros" value={altura} onChange={e => setAltura(Number(e.target.value))} name="formAltura" id="formAltura" />

            Idade: <input class="form-control" type="text" name="formIdade" value={idade} onChange={e => setIdade(Number(e.target.value))} id="formIdade" /><br />

            Sexo:{' '}
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="sexo" onChange={e => setSexo(e.target.value)} value="m" />
                <label htmlFor="m" class="form-check-label">M</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="sexo" onChange={e => setSexo(e.target.value)} value="f" />
                <label htmlFor="f" class="form-check-label">F</label>
            </div>


            <br /><br />Taxa de atividade: <button type="button" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"> Saiba + </button><br/><br/>

            <div class="modal fade text-black" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Tipos de taxa</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p><strong>Sedentário</strong><br/>Pouco ou nenhum exercício<br/><br/>
                                <strong>Levemente ativo</strong><br/>Exercício leve 1 a 3 dias por semana<br/><br/>
                                <strong>Moderadamente ativo</strong><br/>Exercício moderado 3 a 5 dias por semana <br/><br/>
                                <strong>Altamente ativo</strong><br/>Exercício pesado de 5 a 6 dias por semana </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" data-bs-dismiss="modal" class="btn btn-success">Entendi</button>
                        </div>
                    </div>
                </div>
            </div>

            <select class="form-select" name="select" value={taxa} onChange={e => setTaxa(Number(e.target.value))}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}</option>
                ))}
            </select><br />
            <button class="btn btn-light" onClick={calcular}>Calcular</button><br /><br />
        </Fragment>
    )
}

export default FormFit