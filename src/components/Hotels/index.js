import React from 'react'
import Hotel from '../Hotel'

const Hotels = props => {
    const { hotels } = props
    const hotelsRender = hotels.map(hotel =>
        <div key={hotel.slug} className="column is-one-third">
            <Hotel data={hotel} />
        </div>
    )

    const HotelsEmpty = props => {
        return (
            <article className="message is-warning">
                <div className="message-body">
                    No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                </div>
            </article>
        )
    }

    return (
        <section className="section" style={{ marginTop: '3em' }}>
            <div className="container">
                {
                    hotelsRender.length > 0 ?
                        <div className="columns is-multiline">
                            {hotelsRender}
                        </div>
                        :
                        <HotelsEmpty />
                }
            </div>
        </section>
    )
}

export default Hotels