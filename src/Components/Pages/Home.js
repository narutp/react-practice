import React, { Component } from 'react'
import { Button } from 'element-react'

class Home extends Component {

    navigateToDashboard() {
        console.log('in')
    }

    render() {
        return (
            <div>
                <p>Home</p>
                <Button onClick={ () => this.navigateToDashboard() } type="primary">Primary Button</Button>
            </div>
        )
    }
}

export default Home
