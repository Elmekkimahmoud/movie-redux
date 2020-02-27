const list = [{more:"description film 1",src:"https://myegy.io/files/img/content/9/541/1575724695.500_1000.jpg", name: 'Jumanji: The Next Level',date: 2019, rate: '☆☆☆☆' },
{more:"description film 2", src:'https://images-na.ssl-images-amazon.com/images/I/51leiIQ5zpL._SX359_BO1,204,203,200_.jpg',name: 'Frozen II',date: 2019, rate: '☆☆☆' } ,
{more:"description film 3", src:'https://i.ytimg.com/vi/r0n2fBeRUGs/maxresdefault.jpg', name: 'Extrême tension',date: 2019, rate: '☆☆☆☆' }] 




// searchFunct=()=>{

//     const fltrList= this.state.listmov.filter(el=> el.name.toUpperCase().includes(this.state.findName.toUpperCase()) )
//     this.setState({listmov:fltrList })
    
//  }

// startFunct=(n)=>{
//     var starlength=n
//     const fltrList2= this.state.listmov.filter(el=> el.rate.length===starlength )
//     this.setState({listmov:fltrList2 }) }
// addFunct=()=>{
//     const newmov={src:this.state.Ptimage, name:this.state.Ptname, date:this.state.Ptdate, rate:this.state.Ptrate}
//     this.setState( {listmov:[...this.state.listmov, newmov]},
//     )
  
//   }


const firstReducer=(state=list, action)=>{

    switch (action.type) {
        case 'SEARCH':
            
            return state.filter(el=> el.name.toUpperCase().includes(action.fnd.toUpperCase()) )
        case 'SEARCHRATE':
            
            return state.filter(el=> el.rate.length===action.leng )
        case 'REMOVE':
            
            return state.filter(el=> el!=action.elm )
        case 'ADD':
            
            return [...state,{src:action.img, name:action.name ,date:action.date , rate: action.rate }]

            
        case 'FINISH':
            
            return state.filter((el,i)=> {
                if(el==action.elmn) {return (el.src=action.src) && (el.name=action.name) && (el.date=action.date) && (el.rate=action.rate)}
        else return el} )




        // case "Edit-MOVIE2":
        //     let newli = [...state];
        //     return newli.filter((item, id) => (id ==action.id) ? item = action.item22: item);
    

        default: 
            return state
        
    }

}

export default firstReducer ;