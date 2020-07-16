import React from "react";
import { connect } from 'react-redux';
import { increment, decrement,reset } from '../actions/action'; 



const Counter = props => {
    
    const {count,increment,decrement,reset} = props;

    return (
        <div className = "App">
        <h1>Counter</h1>

        <div>
        
        <div>
           <button onClick = {(count>0)?decrement: reset}>-</button>
        </div>
      
        <div className="Count">{count}</div>

        <div>
           <button onClick = {increment}>+</button>
        </div>

        
        </div>
       
     </div>
    );
   };


   const mapStateToProps = state => {
    return {
      count: state.count 
    };
   };
   

   const mapDispatchToProps = (dispatch) => {
    return {
       increment: () => dispatch(increment()),
       decrement: () => dispatch(decrement()),
       reset: () => dispatch(reset())
      
    };
 };

   export default connect(mapStateToProps , mapDispatchToProps)(Counter);