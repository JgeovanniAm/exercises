import React from 'react'
import '../styles/Card.css';
class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    // api component did mount para realizar mis peticiones asincronismo
    async componentDidMount() {
        let res = await fetch('https://triviaserver.herokuapp.com/dataUser');
        let data = await res.json()
        this.setState({
            data
        })
    }
    
    render() {
        let mapeo;
        if (this.state.data.User){
            mapeo = this.state.data.User.map((x, i) => {
                    return (
                        <div key={i}>
                            <h1 className="text">{x.User}</h1>
                            <h1 className="text">{x.Level}</h1>
                            <h1 className="text">{x.id}</h1>
                        </div>
                    )
                })
        }
        
        return (
            <div className="wrapper-user">
                {mapeo}
            </div>
        )
    }
}

export default User