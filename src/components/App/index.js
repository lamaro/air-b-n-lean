import React, { Component } from 'react'
import Moment from 'moment'
import Hero from '../Hero'
import Filters from '../Filters'
import Hotels from '../Hotels'
import './index.css'

class App extends Component {
    constructor(props) {
        super(props)
        const today = new Date()
        const todayFormated = Moment(today).format("YYYY-MM-DD")
        const nextMonthFormated = Moment(today).add(1, 'month').format("YYYY-MM-DD")
        this.state = {
            filters: {
                dateFrom: todayFormated,
                dateTo: nextMonthFormated,
                country: 'select',
                price: 'select',
                rooms: 'select'
            },
            hotels: [],
            hotelsFiltered: [],
            hotelsLoaded: false
        }
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    async componentDidMount() { //Acá prefiero usar Async Await que promeses. Todos los ejemplos los vimos con Async/Await
        try {
            const response = await fetch('https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            this.setState({
                hotels: json,
                hotelsLoaded: true
            });
            this.handleFilterChange(this.state.filters)
        } catch (error) {
            console.log(error);
        }
    }

    handleFilter(payload) {
        let { dateFrom, dateTo, country, price, rooms } = payload
        const hotelsFiltered = this.state.hotels.filter(hotel => {
            return Moment(hotel.availabilityFrom).format("YYYY-MM-DD") >= dateFrom
                && Moment(hotel.availabilityTo).format("YYYY-MM-DD") <= dateTo
                && hotel.rooms <= (rooms !== 'select' ? rooms : hotel.rooms)
                && hotel.price === (price !== 'select' ? parseInt(price) : hotel.price)
                && hotel.country.trim().toLowerCase() === (country !== 'select' ? country.trim().toLowerCase() : hotel.country.trim().toLowerCase())
        })
        return hotelsFiltered
    }

    handleFilterChange(payload) {
        const hotelsFiltered = this.handleFilter(payload)
        this.setState({
            filters: payload,
            hotelsFiltered: hotelsFiltered,
        })
    }

    render() {
        return (
            <div>
                <Hero
                    filters={this.state.filters}
                    hotelsQuantity={this.state.hotelsFiltered.length}>
                </Hero>
                <Filters
                    filters={this.state.filters}
                    onFilterChange={this.handleFilterChange}>
                </Filters>
                {this.state.hotelsLoaded &&
                    <Hotels
                        hotels={this.state.hotelsFiltered}
                    />
                }
            </div>
        )
    }
}

export default App