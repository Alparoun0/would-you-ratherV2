
import React ,{Component} from 'react'
import { connect } from 'react-redux'
import {handleSetAuhtedUser} from '../actions/shared'

class LoginForm extends Component {

    state ={
        value:null
    }


    handleChange = (e) => {
        this.setState(() => ({
            value:e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const authedUser=this.state.value
      //  console.log('this is select resuil',authedUser)

         this.props.dispatch(handleSetAuhtedUser(authedUser))
 this.setState(() => ({
            value:''
        }))

        //console.log('Form login')
    }


    render()
    {

        return (

            <div>     

            <div className="gallery"  >
            <br/><div className="thumbnail align-content-lg-center center">    
            <h4 className='center'>Login Here </h4>
            <form onSubmit={this.handleSubmit}>
                    <select    onChange= {this.handleChange}>
                        <option   value='Select user' >Select user</option>
                        {this.props.usersId.map((user) => (
                            <option value={user} key={user} >{user}</option>
                        ))}
                    </select>
                    <br/><br/>   <button type='submit'>Sign In</button>  
                </form>


          
             
            </div>
            </div>
            </div>
             
 

        )
    }
}

const mapStateToProps =({users})=>{
    const usersId = Object.keys(users && users)


    return {
        usersId, 
    }
}

export default connect(mapStateToProps) (LoginForm)