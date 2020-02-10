const initialState = {
    value: 0,
    color :""
}

const reducer = (state = initialState, action) => {
    let { type ,value,color} = action;


    switch (type ) {
        case "CHANGEVALUE":
        return {
            value: state.value + value,
            color: state.color
        }
   case "color" :
        return{
value: state.value ,
color: color
        }
case "RESETVALUE":
   
return{
    value: value,
    color: state.color

}
    }
    return state;

}

