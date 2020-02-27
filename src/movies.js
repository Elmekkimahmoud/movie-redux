import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




class Movies extends Component {
    
constructor (props){
    super(props)
    this.state={
      "elt":{}

}

}




editerelemt=(x)=>{
    this.props.dispeditFunc()
    this.setState({elt:x})

}

    render() { 
        console.log(this.state.elt)
        return (  


            <section>
            <div className="movies" > 
                {this.props.listmov.map((el,index) => 
                
                <div key={index} className='movie-info' >
                    <img src={el.src} />
                    <span> {el.name} </span>
                    <span> {el.date} </span>
                    <span> {el.rate}</span>   
             
                  
                    <Link to={/more/+el.more}><button>More</button></Link>

          
                    <button onClick={()=>this.editerelemt(el)}> Edit</button> 
                    <button onClick={()=>{this.props.removeFunction(el)}}> Remove </button>
                    
                  

                </div>   )}
                
            </div>
            <div className={this.props.displaymod}>
                        <div className="modal-content">
                        <span className="close" onClick={()=> this.props.closeditFunct()}>&times;</span>
                        <h2> EDIT MOVIE </h2>
                        <label> Name: </label>
                        <input  placeholder='Edit movie name'  onChange={(e)=> this.props.editnam(e.target.value)}/>
                        <label> image: </label>
                        <input  placeholder='Edit movie image' onChange={(e)=> this.props.editimg(e.target.value)}/>
                        <label> Date: </label>
                        <input  placeholder='Edit movie date'  onChange={(e)=> this.props.editdat(e.target.value)} />
                        <label> Rate: </label>
                        <input  placeholder='Edit movie Rate'  onChange={(e)=> this.props.editrat(e.target.value)}/>
                        <button onClick={()=>{this.props.finishFunct(this.props.newimg,this.props.newname,this.props.newdate,this.props.newrate,this.state.elt)}} > Finish </button>
                        
                         </div>
                    </div>       
            </section>
            
        );
        
    }
}


const mapStateToProps=({moviesRed, editimage, editname, editedate, editrate, modaledit})=>{
    return{ 
        listmov: moviesRed,
        newimg : editimage,
        newname :editname ,
        newdate :editedate ,
        newrate :editrate ,
        displaymod:modaledit ,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        removeFunction:(e)=>{ dispatch({type:'REMOVE',elm:e})},
        editimg:(e)=>{ dispatch({type:'IMPIMG',li:e})},
        editnam:(e)=>{ dispatch({type:'IMPNM',nm:e})},
        editdat:(e)=>{ dispatch({type:'IMPDT',dt:e})},
        editrat:(e)=>{ dispatch({type:'IMPRT',rt:e})},
      dispeditFunc:()=>{ dispatch({type:'DISPEDIT'})},
        closeditFunct:()=>{ dispatch({type:'CLOSEDIT'})},  
        finishFunct:(l, n, d, r,elmnt)=>{ dispatch({type:'FINISH', src:l, name:n, date:d, rate:r, elmn:elmnt})},




        // editList2: () => {
        //     dispatch({
        //         type: 'Edit-MOVIE2',  item22: {src:'https://images-na.ssl-images-amazon.com/images/I/51leiIQ5zpL._SX359_BO1,204,203,200_.jpg',name: 'Frozen 5555',date: 2000, rate: '☆☆' } ,
        //     });
        // },
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Movies) ;




