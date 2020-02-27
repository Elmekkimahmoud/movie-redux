const  name='' 



const editnm=(state=name, action)=>{
    switch (action.type) {
        case 'IMPNM':
            
            return state = action.nm
        
        default: 
            return state
        
    }
}
export default editnm ;