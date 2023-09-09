import React from 'react'
import '../styles/Card.css';
import Form from '../components/form';
import Card from '../components/Card';
class Infonew extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <Card />
                <Form />
            </div>
        )
    }
}

export default Infonew