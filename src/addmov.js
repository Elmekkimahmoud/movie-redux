import React, { Component } from 'react';
import {connect} from 'react-redux';

class Add extends Component {
    

    render() { 
        
        return (
    <section className='container'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPAUzWKoZXFD6Mb9v9pVLar5Hfn2IC__6167FN0LzHKm63p47g' onClick={()=> this.props.dispFunction()} />
      
      <div  className={this.props.disp}>
          <div className="modal-content">
             <span className="close" onClick={()=> this.props.closeFunction()}>&times;</span>
              <h2> ADD NEW MOVIE </h2>
            <label> Name: </label>
            <input  placeholder='Put movie name'  onChange={(e)=> this.props.putName(e.target.value)} />
            <label> image: </label>
            <input  placeholder='Put movie image' onChange={(e)=> this.props.putImage(e.target.value)}/>
            <label> Date: </label>
            <input  placeholder='Put movie date'  onChange={(e)=> this.props.putDate(e.target.value)}/>
            <label> Rate: </label>
            <input  placeholder='Put movie Rate'  onChange={(e)=> this.props.putRate(e.target.value)}/>
            <button onClick={()=> this.props.addmove(this.props.image, this.props.name, this.props.date, this.props.rate )} > Add </button>
          </div>
      </div>
    </section>
          );
    }
}


const mapStateToProps=({namereducer,imagereducer, datereducer, ratereducer,modalreducer})=>{
    return{ 
        name: namereducer,
        image:imagereducer,
        date:datereducer,
        rate: ratereducer,
        disp:modalreducer
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        putName:(e)=>{ dispatch({type:'IMPUTNAME',iname:e})},
        putImage:(e)=>{ dispatch({type:'IMPUTIMAGE',iimage:e})},
        putDate:(e)=>{ dispatch({type:'IMPUTDATE',idate:e})},
        putRate:(e)=>{ dispatch({type:'IMPUTRATE',irate:e})},
        addmove:(i,n,d,r)=> {dispatch({type:'ADD', img:i, name:n, date:d, rate:r}) },
        dispFunction:()=>{ dispatch({type:'DISPLAY',})},
        closeFunction:()=>{ dispatch({type:'CLOSE',})},
    }
}
 
 
export default connect(mapStateToProps, mapDispatchToProps)(Add) ; 