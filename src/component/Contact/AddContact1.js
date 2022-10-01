import React, { Component } from 'react'
import { Consumer } from '../context'
import uuid from 'uuid'


class AddContact extends Component {
    constructor(props){
        super(props);

        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
        
    }
    
    onSubmit = (dispatch,e) =>{
        e.preventDefault();
        //const { name,email,phone } = this.props;
        const newContact={
            id: uuid(),
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        };

        dispatch({type:'ADD_CONTACT',payload:newContact});
    }

    static defaultProps = {
        name:'Akash Agarwal',
        email: 'akash@yahoo.com',
        phone: '9527021964'
    }

    render() {
        const {name,email,phone} = this.props;
        
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
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" name="name"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Name"
                                        defaultValue={name}
                                        ref={this.nameInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name="email"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Email"
                                        defaultValue={email}
                                        ref={this.emailInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" name="phone"
                                        className="form-control form-control-lg"
                                        placeholder="Enter Phone number"
                                        defaultValue={phone}
                                        ref={this.phoneInput}
                                        />
                                    </div>
                                    <input className="btn btn-light btn-block" type="submit"
                                     value="Add contact"/>
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