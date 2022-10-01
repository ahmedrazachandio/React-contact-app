import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Consumer } from '../context'
import axios from 'axios'

class Contact extends Component {
    state = {
        showContactInfo: false
    }
    onShowClick= e =>{
      this.setState({showContactInfo: !this.state.showContactInfo});  
    };

    onDelete = async (id,dispatch) =>{
        await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({type:'DELETE_CONTACT',payload: id});
    };

    render() {
        const { id,name,email,phone } = this.props.contact;
        const { showContactInfo } = this.state;
        return(
            <Consumer>
                {value =>{
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mb-3">
                            <h4>
                            {name}
                            
                            <i onClick={this.onShowClick} 
                            className="fa fa-chevron-down"
                            style={{cursor:'pointer'}}/>
                            
                            <i 
                                className="fa fa-times"
                                style={{cursor:'pointer',color:"red",float:'right'}}
                                onClick={this.onDelete.bind(this,id,dispatch)}
                            />

                            <Link to={`contact/edit/${id}`}>
                                <i
                                 className="fa fa-pencil"
                                 style={{
                                     cursor: 'pointer',
                                     float: 'right',
                                     color: 'black',
                                     marginRight: '1em'  
                                 }}
                                ></i>
                                </Link>

                            </h4>

                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>): null}
                            
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes ={
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
}

export default Contact;