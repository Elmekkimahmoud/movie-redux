const inpimage=''

const imageReduc=(state=inpimage, action)=>{
    switch (action.type) {
        case 'IMPUTIMAGE':
            
            return state= action.iimage

        default: 
            return state
        
    }
}
export default imageReduc ;