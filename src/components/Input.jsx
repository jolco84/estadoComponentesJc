import React, { useState } from 'react'
import Boton from './Boton'

const Input = () => {
    const [nombre, setNombre] = useState("")
    const [clave, setClave] = useState("")
    const [error, setError] = useState(false)
    const [enviar, setEnviar] = useState(false)

    const validarInput = (e) => {
        //Prevenimos el comportamiento por defecto
        e.preventDefault()

        //Validación input
        if (nombre === '' || clave === '') {
            setError(true)

            return
        }


        //Eliminar mensaje de error
        setError(false)
        setNombre('')
        setClave('')
    }

    function validarClave(e) {
        if (e.target.value === '252525') {
            setEnviar(true)
            setClave(e.target.value)
            return
        } else {
            setClave(e.target.value)
        }
    }
    return (
        <form onSubmit={validarInput}>
            {error ? <p className="error">Debes ingresar Nombre/Contraseña</p> : null}

            <div className="form-group">
                <p>Nombre</p>
                <input className="form-control" name="Nombre" onChange={(e) => setNombre(e.target.value)} />
                <p>Contraseña</p>
                <input className="form-control" name="Contraseña" onChange={validarClave} />
                {enviar ? <Boton></Boton> : null}
            </div>
        </form>
    )
}

export default Input