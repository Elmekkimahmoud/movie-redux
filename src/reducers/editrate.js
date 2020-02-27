const  rate= ''



const editrt=(state=rate, action)=>{
    switch (action.type) {
        case 'IMPRT':
            
            return state.padEnd(action.rt,'☆')
        
        default: 
            return state
        
    }
}
export default editrt ;