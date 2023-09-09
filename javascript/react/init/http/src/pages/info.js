import React from 'react'
import '../styles/Card.css';
import Card from '../components/Card';
import What from '../components/what';
import User from '../components/User';
import Button from '../components/button';

class Info extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Button />
                <What
                    username="Jimmy"
                />
                <Card
                    title="Skull Jimmy Alvarez"
                    link="Es importante saber que los humanos son locos por naturaleza y nadie sabe el porque"
                />
                <User />
            </React.Fragment>
        )
    }
}
export default Info