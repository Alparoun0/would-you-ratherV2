import React,{Component} from 'react'
 import {connect} from 'react-redux'
 import 'bootstrap/dist/css/bootstrap.min.css';
import {Tab,Tabs } from 'react-bootstrap';  
  import { Link } from 'react-router-dom';
 import {Button  } from 'react-bootstrap';
  

 
class QuestionsPage extends Component {

 
 
render(){
    
       const { authedUserd}=this.props
    return( 

      

        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
            <Tab eventKey="unanswered" title="Unswered">
           <ul>
            {authedUserd.UnAnswered &&  authedUserd.UnAnswered.map((item)=>(
                
                <div className="gallery" key={item.id}>
              
                    <br/><div className='questionTitle'>{Object.values(this.props.users[item.author])[1]} Asks :</div>
                    
                    <div className="thumbnail">  <img src= {`${Object.values(this.props.users[item.author])[2]}`}    alt="" width="80" className="cards rounded-circle"/> 
                    <h3>Would You rather </h3> 
                     
                    <p className="tag">Q1s :  {item.optionOne.text.slice(0,20)} </p>
                    <p className="text_column">Q2: {item.optionTwo.text.slice(0,20)} </p>
                    <Link to={'question/'+item.id}>
                     
                    
                        <Button variant="primary">View Poll</Button>
                    </Link>
                  </div>
                     
                     
                   
                    <br/></div>

              
          ))}
            </ul>
                  
            </Tab>
            <Tab eventKey="answered" title="answered">
            {  authedUserd.Answered.map((item)=>(

               
                
                <div className="gallery" key={item.id}>
               
                    <br/><div className='questionTitle'>{Object.values(this.props.users[item.author])[1]} Asks :</div>
                    
                    <div className="thumbnail">  <img src= {`${Object.values(this.props.users[item.author])[2]}`}    alt="" width="80" className="cards rounded-circle"/> 
                    <h3>Would You rather </h3> 
                     
                    <p className="tag">Q1s :  {item.optionOne.text.slice(0,20)} </p>
                    <p className="text_column">Q2: {item.optionTwo.text.slice(0,20)} </p>
                    <Link to={'question/'+item.id}>
                     
                    
                        <Button variant="primary">View Poll</Button>
                    </Link>
                  </div>
                     
                     
                   
                    <br/></div>

              
          ))}
            </Tab>
            
        </Tabs> 
    )
}

}

function mapStateToProps({ authedUser , users , questions}){

       const AllAnswers =  Object.keys(users[authedUser].answers )

     //  console.log('all answer',AllAnswers)
       const Answered =    Object.values(questions).filter(question => AllAnswers.includes(question.id)).sort((a,b) => b.timestamp -a.timestamp)
    //console.log('  answer',Answered)

        const UnAnswered =  Object.values(questions).filter(question => !AllAnswers.includes(question.id)).sort((a,b) => b.timestamp -a.timestamp)
       // console.log('   UnAnswered',UnAnswered)

     return {
        authedUserd:{ UnAnswered,
        Answered
        }
        ,users
 
        }
    }
     

    

 
 
export default connect(mapStateToProps) (QuestionsPage) 

 