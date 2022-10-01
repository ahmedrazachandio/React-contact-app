import React, { Component } from 'react'
import { Consumer } from '../context'
import axios from 'axios'
import TextInputGroup from '../layout/TextInputGroup'

class AddContact extends Component {
    state={
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    onChange = e =>{
        this.setState({ [e.target.name]:e.target.value });
    }

    onSubmit = async (dispatch,e) =>{
        e.preventDefault();
        const { name,email,phone } = this.state;

        // Check for Errors

        if(name === ''){
            this.setState({errors: { name : 'name is required'}})
            return;
        }

        if(email === ''){
            this.setState({errors: { email : 'email is required'}})
            return;
        }

        if(phone === ''){
            this.setState({errors: { phone : 'phone is required'}})
            return;
        }

        const newContact={
            name,
            email,
            phone,
        };

        const res = await axios.post('http://jsonplaceholder.typicode.com/users',newContact)
            dispatch({type:'ADD_CONTACT',payload:res.data});

        //Clear State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');

    }

    render() {
        const {name,email,phone,errors} = this.state;
        return (
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return(
                        <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                            <TextInputGroup
                                label="Name"
                                name="name"
                                placeholder="Enter Name"
                                type="text"
                                value={name}
                                onChange={this.onChange}
                                error={errors.name}
                            />

                            <TextInputGroup
                                label="Email"
                                name="email"
                                placeholder="Enter Email"
                                type="email"
                                value={email}
                                onChange={this.onChange}
                                error={errors.email}
                            />

                            <TextInputGroup
                                label="Phone"
                                name="phone"
                                placeholder="Enter Phone Number"
                                type="text"
                                value={phone}
                                onChange={this.onChange}
                                error={errors.phone}
                            />
                            <input className="btn btn-light btn-block" type="submit" value="Add contact"/>
                        </form>
                    </div>
                </div>
                    )
                        }}
            </Consumer>
            
        )
    }
}

export default AddContact;