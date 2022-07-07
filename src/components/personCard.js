import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: Number(this.props.age)
        };
    }

    birthday = () => {
        this.setState({ age: this.state.age + 1 })
        console.log(this.state.age);
    }
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>

                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <br></br>
                <button onClick={this.birthday}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard