const inpname=''

const nameReduc=(state=inpname, action)=>{
    switch (action.type) {
        case 'IMPUTNAME':
            
            return state= action.iname

        default: 
            return state
        
    }
}
export default nameReduc ;