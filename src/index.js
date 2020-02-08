const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE" , value: +1}));
// Dispatch the "DECREMENT" action every time the +1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE" , value: -1}));


const incrementFive = document.getElementById('incrementFive');
incrementFive.addEventListener('click',e => dispatch({type: "CHANGEVALUE" ,value: +5}))


const decrementFive = document.getElementById('decrementFive');
decrementFive.addEventListener('click',e => dispatch({type: "CHANGEVALUE", value: -5}))
 const color =document.getElementById('color')
 color.addEventListener('change',e => dispatch({type: "color",color: color.value}) )

 const number =document.getElementById('number')
 number.addEventListener('input',e => {
     console.log(number.value);
     dispatch({type: "RESETVALUE", value: Number(number.value)})
     //parsin
    
    }); 


