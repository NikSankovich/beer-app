import React, { Component } from 'react'
import Beer from './Beer';
import "../App.css"
import axios from 'axios';
// const axios = require('axios');



export default class Beers extends Component {
    constructor(props) {
        console.log('constructor initialized')
        super(props)

        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        console.log('component mounted')
        axios.get('https://api.punkapi.com/v2/beers')
            // .then( (response) => response.json() )
            .then((data) => {
                this.setState({
                    beers: [...data.data]
                });
            })
    }


    componentDidUpdate() {
        console.log('component updated', this.state.beers);
    }



    render() {
        console.log('render');
        return (
            <div>
                <h2>Beer List</h2>
                <ul className='beer'>
                    {this.state.beers.map((beer) => {
                        return (
                            <Beer beer={beer} />

                        )
                    })
                    }

                </ul>


            </div>
        )
    }
}