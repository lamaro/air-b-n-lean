import React from 'react'

const Price = props => {
    const { price } = props
    let precioCadena = []
    for (let index = 0; index < price; index++) {
        precioCadena.push(<i key={index} className="fas fa-dollar-sign" style={{ margin: "0 .125em" }}></i>)
    }
    for (let index = price; index < 4; index++) {
        precioCadena.push(<i key={index} className="fas fa-dollar-sign" style={{ margin: "0 .125em", opacity: ".25" }}></i>)
    }
    return precioCadena
}

export default Price