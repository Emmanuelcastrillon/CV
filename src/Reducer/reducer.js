const reducer=(state,action)=>{
    switch(action.type){
        case 'change_theme':
            return{...state, theme:action.payload}
         case 'change_language':
            return{...state, language:action.payload}    
    }

}
export default reducer