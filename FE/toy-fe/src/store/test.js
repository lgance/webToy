
export const TEST_COMMAND = 'TEST_COMMAND';

export const testCommand = () =>({
    type:TEST_COMMAND
});

const initialState = {
    test:'test Command',
    isflag:false
};

export default (state = initialState,action)=>{
    switch(action.type){
        case TEST_COMMAND:  
        
            break;
        default:
            return state;
       }
}



