import React, { Component } from 'react';
import {connect} from 'react-redux' ;

class Find extends Component {
    
    render() { 
        
        return ( 
            <div className="search">
            <input placeholder='  type movie name'   type='text' onChange={(e)=> this.props.inptFunction(e.target.value)}/>
            <button  onClick={(i)=> this.props.searchFunction(this.props.inputval)}> Search</button>
            <span onClick={()=>{this.props.rateFunction(1)}}>☆</span>
            <span onClick={()=>{this.props.rateFunction(2)}}>☆</span>
            <span onClick={()=>{this.props.rateFunction(3)}}>☆</span>
            <span onClick={()=>{this.props.rateFunction(4)}}>☆</span>
            <span onClick={()=>{this.props.rateFunction(5)}}>☆</span>
    
          </div>
         );
    }
}

const mapStateToProps=({inputName})=>{
    return{ 
        inputval:inputName
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        inptFunction:(e)=>{ dispatch({type:'IMPUT',inp:e})},
        searchFunction:(i)=>{ dispatch({type:'SEARCH',fnd:i})},
        rateFunction:(n)=>{ dispatch({type:'SEARCHRATE',leng:n})},
    }
}


 
export default connect(mapStateToProps, mapDispatchToProps)(Find)    ;