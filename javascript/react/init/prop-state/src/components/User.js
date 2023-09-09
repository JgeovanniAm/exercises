import React from 'react'
import '../styles/Card.css';
class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "data": [
                {
                    "User": "jimmy",
                    "Password": "1234",
                    "Level": 170, "id": 1
                },
                {
                    "User": "nicole",
                    "Password": "nicole",
                    "Level": 245,
                    "id": 2
                },
                {
                    "User": "jimmy",
                    "Password": "1234",
                    "Level": 170, "id": 3
                },
                {
                    "User": "nicole",
                    "Password": "nicole",
                    "Level": 245,
                    "id": 4
                }
            ]
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.map(x => {
                       return ( 
                        <div className="wrapper-user">
                            <h1 className="text">{x.User}</h1>
                            <h1 className="text">{x.Level}</h1>
                            <h1 className="text">{x.id}</h1>
                        </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default User