
import { Button, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState(0)
const [discount,setDiscount]=useState(0)
const[netamount,setNetamount]=useState(0)



const [output,setOutput]=useState(0)



console.log(amount,discount);

const calculate=(e)=>{
const result=amount/discount
console.log(result);
setOutput(result)

const net =amount-result
console.log(net);
setNetamount(net)

}




const reset=(e)=>{
  setAmount(0)
  setDiscount(0)
  setOutput(0)

}

  return (
    <div className="App">
      <div className="container">
  <h1>DISCOUNT CALCULATOR <i class="fa-solid fa-calculator fa-shake"></i></h1>
  <h3>Get discounts on each transation</h3>

<div className="total">
  <p>Actual Price  &#8377; {amount} </p>
  <p>You saved  &#8377; {output}</p> 
 
</div>

<div className="form">
  <form>
<div className="input">
<TextField id="outlined-basic" label="Amount" variant="outlined" value={amount||""}  onChange={(e)=>setAmount(e.target.value)} /><br /><br />
<TextField id="outlined-basic" label="Rate of interest" variant="outlined" value={discount||""} onChange={(e)=>setDiscount(e.target.value)}/>
</div>

  </form>
  </div>
<div className="button">
<Button variant="contained" style={{backgroundColor:"green"}}   onClick={e=>calculate(e)} >Calculate</Button>
<Button variant="outlined" style={{marginLeft:'20px',backgroundColor:'red',color:'white'}}     onClick={e=>reset(e)}>Reset</Button>

<h1>Net amount : {netamount}</h1>
</div>
</div>
    </div>
  );
}

export default App;
