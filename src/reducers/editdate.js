const  date='' 



const editdt=(state=date, action)=>{
    switch (action.type) {
        case 'IMPDT':
            
            return state = action.dt
        
        default: 
            return state
        
    }
}
export default editdt ;