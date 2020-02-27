const inpdate=''

const dateReduc=(state=inpdate, action)=>{
    switch (action.type) {
        case 'IMPUTDATE':
            
            return state= action.idate

        default: 
            return state
        
    }
}
export default dateReduc ;