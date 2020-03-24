export const initialState = {
    stores:[],
    token:''
}

export const appReducer= (state  = initialState,action)=>{
    switch(action.type){
        case 'login': return 'logged in'

        case 'logout':return 'logout'

        default : return 'no action'
    }
}
