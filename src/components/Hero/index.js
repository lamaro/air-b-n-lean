import React from 'react'
import Moment from 'moment'
const Hero = props => {
    const { filters, hotelsQuantity } = props
    const { country, price, rooms } = filters

    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Airbnlean <span>{hotelsQuantity > 0 ? ` (Se encontraron: ${hotelsQuantity} hoteles)` : ''}</span></h1>
                    <h2 className="subtitle">
                        desde el <strong>{Moment(filters.dateFrom).format("DD/MM/YYYY")}</strong> hasta el <strong>{Moment(filters.dateTo).format("DD/MM/YYYY")}</strong>
                        {country !== 'select' ? ` en ${country}` : ''}
                        {price !== 'select' ? ` con valor ${price}` : ''}
                        {rooms !== 'select' ? ` y hotel de hasta ${rooms} habitaciones` : ''}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero;