const initialState = {
    value: 0,
    color :""
}

const reducer = (state = initialState, action) => {
    let { type ,value,color} = action;


    if (type === "CHANGEVALUE") {
        return {
            value: state.value + value,
            color: state.color
        }
   

    } else if ( type === "color"){
        return{
value: state.value ,
color: color
        }

    }else if (type ==="RESETVALUE"){
return{
    value: value,
    color: state.color

}
    }
    return state;

}

