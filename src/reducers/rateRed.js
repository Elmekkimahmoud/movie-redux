const inprate=''


// this.setState({
//     Ptrate: this.state.Ptrate.padEnd(e.target.value,'☆')
    
//   })

const rateReduc=(state=inprate, action)=>{
    switch (action.type) {
        case 'IMPUTRATE':
            
            return state.padEnd(action.irate,'☆') 

        default: 
            return state
        
    }
}
export default rateReduc ;