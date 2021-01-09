// Enum.jsx: React Conditional Rendering
// Applied Chain-of-Responsibility Design Pattern
import React from 'react';

// ___ create 'event' ___
const handleOnSubmit = (name, value) => () => alert(name + ": " + value)

//___ Create 'context' ___
const SOS = (props) => {
  return <button  onClick={handleOnSubmit("SOS", "Type, Weight")}></button>;
}
const STK = () => {
  return <button  onClick={handleOnSubmit("STK", "Weight")}>STK</button>;
}
const HZM = () => {
  return <button  onClick={handleOnSubmit("HZM", "Type, Weight, Code ")}>HZM</button>;
}

//___ Create scope ___
const ENUM_STATES = {
  sos: <SOS />,
  stk: <STK />,
  hzm: <HZM />,
}
  
//___ Create function ___
function EnumState({ state }) {
  return <div>{ENUM_STATES[state]}</div>;
}

//   class Card extends React.Component {
//     render() {
//       return (
//         <div>
//             <h1>Conditional Rendering with enums</h1>
//             <EnumState state="sos"></EnumState>
//             <EnumState state="stk"></EnumState>
//             <EnumState state="hzm"></EnumState>
//         </div>
//       );
//     }
//   }

function Card() {
    return (
      <div>
        <h1>Conditional Rendering: Type | Weight | Code</h1>
        <EnumState state="hzm"></EnumState>
        <EnumState state="stk"></EnumState>
        <EnumState state="sos"></EnumState>
      </div>     
    )
}

export default Card;

// eof