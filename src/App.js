import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(async () => {
    try{
      const response = await fetch('http://localhost:4000/books');
      console.log(response);
      const data = await response.json();
      setBookList(data);
      console.log(data);
    } catch(err){
      console.log(err);
    }
    
  },[]);
  return (
    <>
    {bookList.map(book => <><h2>{book.title}</h2><p>{book.author}</p></>)}
    </>);
};

//   const InputComp = (props) => {
//     const [person, setPerson] = useState({});
//     const handleChange = (evt) => {
//       setPerson({...person, [evt.target.id]:evt.target.value});
//     };
//     return (<>
//     <input type="text" id="name" value={person.name} placeholder="Skriv person navn her" onChange={handleChange}/>
//     <input type="text" id="phone" value={person.phone} placeholder="Skriv mobil nummer her" onChange={handleChange}/>
//     <button onClick={()=>props.phone(fahrenheit)}>Enter</button>
//     </>);
//   };
//   const ViewComp = (props) => <h2>{props.celsius}</h2>
//   // const toFahrenheit = (celsius) => {
//   //   return (celsius * 9 / 5) + 32;
//   // }
//   return (<>
//     <InputComp phone={addPerson}/>
//     <ViewComp celsius={personList.map(person=><div>{person.name}</div>)}/>
//   </>);
// };
// const App = () => {
//   const [celsius, setCelsius] = useState(0);

//   const toCelsius = (fahrenheit) => {
//     setCelsius((fahrenheit - 32) * 5 / 9);
//   }

//   const InputComp = (props) => {
//     const [fahrenheit, setFahrenheit] = useState(0);
//     return (<>
//     <input type="text" value={fahrenheit} placeholder="Skriv en temperatur i fahrenheit her" onChange={(evt)=>setFahrenheit(evt.target.value)}/>
//     <button onClick={()=>props.phone(fahrenheit)}>Enter</button>
//     </>);
//   }
//   const ViewComp = (props) => <h2>{props.celsius}</h2>
//   // const toFahrenheit = (celsius) => {
//   //   return (celsius * 9 / 5) + 32;
//   // }
//   return (<>
//     <InputComp phone={toCelsius}/>
//     <ViewComp celsius={celsius}/>
//   </>);
// };






























// import NamesView, {ExtraComponent} from './components/NamesView';
// const names = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}];




// const App = (props) => {
//   const [times, setTimes] = useState([]);
//   const [time, setTime] = useState(new Date());
//   const handleClick = () => {
//     const newDateTime = new Date();
//     setTime(newDateTime);
//     setTimes([newDateTime,...times]);
//   };
//   return (<>
//     <button onClick={handleClick}>Update timer</button>
//     <h1>Clock: {time.toLocaleTimeString()}</h1>
//     {times.map((time,idx)=>{
//       return (<ul key={idx}>{time.toLocaleTimeString()}</ul>);
//     })}
//   </>);
// };
// const App = () => {
//   return (<>
//     { names.map((element, idx)=>{
//       return (<ul key={element.fname}>{element.fname}</ul>);
//     })}  
//   </>);
// };
// function App() {
//   return (
//     <div>{<NamesView/>}
//       <ExtraComponent/>
//     </div>
//   );
// }

// class ClockUsingClass extends React.Component {
//   constructor(props) {
//       super(props)
//       this.state = { date: new Date() }
//   }

//   componentDidMount() {
//       this.time = setInterval(() => {
//           this.changeTime();
//       }, 1000)
//   }

//   componentWillUnmount() {
//       clearInterval(this.time)
//   }

//   changeTime() {
//       this.setState({
//          date: new Date() 
//         })
//   }

//   render() {
//       return (
//           <div className="clock">
//               <h1>Hello! This is a class component clock.</h1>
//               <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//           </div>
//       )
//   }
// }


// // function welcome(props) {
// //   return <h1>Hello, {props.name.name}</h1>;
// // }
// // const myObj = {name: 'Helga'};

// const ClockUsingHooks = (props) => {
//   const [time, setTime] = useState(new Date());
//   const [name, setName] = useState("Hans");

//   const changeTime = () => {
//       setTime(new Date());
//   }

// useEffect(() => {
//     const tick = setInterval(() => {
//         changeTime();
//     }, 1000)
//     return () => clearInterval(tick)
// },[]);
//   return (
//       <div className="clock">
//           <h1>Hello! This is a function component clock.</h1>
//           <h2>It is {time.toLocaleTimeString()}.</h2>
//           <h2>It is {props.name}.</h2>
//       </div>
//   );
// }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback    
//     this.handleClick = this.handleClick.bind(this);  
//   }

//   handleClick() {    this.setState(prevState => ({      isToggleOn: !prevState.isToggleOn    }));  }
//   render() {
//     return (
//       <button onClick={this.handleClick}>        {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// const Toggle2 = () => {
//   const [isToggleOn, setToggleOn] = useState(true);
//   const handleClick = () => { setToggleOn(!isToggleOn);};
//   return (
//     <button onClick={handleClick}>        {isToggleOn ? 'ON' : 'OFF'}
//     </button>
//   );
// };

// function App() {
//   const [state,setState] = useState("");
//   const [list,setList] = useState([]);
//   useEffect(()=>{
//     //Go get some data from server
//   },[state]);
//   const handleChange = (evt) => {
//     setState(evt.target.value);
//   };

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     setList([...list,state]);
//     setState("");
//   };

//   return (<>
//     <form onSubmit={handleSubmit}>
//        Input to show in list form:
//         <input 
//           id="personName"
//           type="text"
//           value={state}
//           onChange={handleChange} />
//     </form>
//     {list.map(element=><li>{element}</li>)}
//     </>
//   );
// }

export default App;
