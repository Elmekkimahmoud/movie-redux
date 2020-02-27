const classmod='modal'



const modalred=(state=classmod, action)=>{
    switch (action.type) {
        case 'DISPLAY':
            
            return state ='modal2'
        case 'CLOSE':
            
                return state ='modal'

                
        default: 
            return state
        
    }
}
export default modalred ;