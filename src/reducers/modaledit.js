const classmodal='modal'



const modaledit=(state=classmodal, action)=>{
    switch (action.type) {
        
                case 'DISPEDIT':
            
                return state ='modal2' 

                case 'CLOSEDIT':
            
                return state ='modal'
    
        default: 
            return state
        
    }
}
export default modaledit ;