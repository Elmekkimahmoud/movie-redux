import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Descrip  extends Component {
    
    render() { 
        return (  
            <section> 
                <p>
                   {this.props.match.params.mohamed}
                </p>
          

                 </section>
        );
    }
}
 
export default Descrip;