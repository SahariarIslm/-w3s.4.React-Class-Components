import React from 'react';
import ReactDOM from 'react-dom/client';
import Car6 from './Cars';
// // 1. Create a Class Component
// class Car extends React.Component{
//     render(){
//         return (
//         <>
//             <h1 style={{textAlign: "center"}}>React Class Components</h1>
//             <h2 style={{textAlign: "center"}}>Hi, I am a Car!</h2>
//         </>);
//     }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Car/>);

// // 2. Component Constructor
// class Car2 extends React.Component{
//     constructor(){
//         super();
//         this.state = {color:"red"};
//     }
//     render(){
//         return (
//         <>
//             <h1 style={{textAlign: "center"}}>React Class Component Constructor</h1>
//             <h2 style={{textAlign: "center"}}>Hi, I am a {this.state.color} Car!</h2>
//         </>);
//     }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Car2/>);

// // 3. Props
// class Car3 extends React.Component{
//     constructor(){
//         super();
//         this.state = {color:"red"};
//     }
//     render(){
//         return (
//         <>
//             <h1 style={{textAlign: "center"}}>React Class Component "props"</h1>
//             <h2 style={{textAlign: "center"}}>I am a {this.props.color} Car!</h2>
//         </>);
//     }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Car3 color="red" />);

// // 4.Props in the Constructor
// class Car4 extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (
//         <>
//             <h1 style={{textAlign: "center"}}>"Props" in the Constructor</h1>
//             <h2 style={{textAlign: "center"}}>I am a {this.props.model} Car!</h2>
//         </>);
//     }
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<Car4 model="Mustang" />);

// // 5.Components in Components

// class Car5 extends React.Component{
//     render(){
//         return <h2>I am a car</h2>
//     }
// }

// class Garage extends React.Component{
//     render(){
//         return (
//             <>
//              <h1 style={{textAlign: "center"}}>"Props" in the Constructor</h1>
//              <hr />
//              <h2>Who livers in my garage?</h2>
//              <Car5/>
//             </>
//         );
//     }
// };
// ReactDOM.createRoot(document.getElementById('root')).render(<Garage/>);

// // 6. Components in Files

// class Garage2 extends React.Component{
//     render(){
//         return (
//             <>
//              <h1 style={{textAlign: "center"}}>"Props" in the Constructor</h1>
//              <hr />
//              <h2>Who livers in my garage?</h2>
//              <Car6/>
//             </>
//         );
//     }
// }
// ReactDOM.createRoot(document.getElementById('root')).render(<Garage2/>);

// // 7. React Class Component State

// class Car7 extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             brand:"Ford",
//             model:"Mustang",
//             color:"red",
//             year:1964
//         };

//     }
//     render(){
//         return (
//             <div>
//                 <h1>Using the state Object</h1>
//                 <div>
//                     <h1>My {this.state.brand}</h1>
//                     <p>It is a {this.state.brand}
//                     {this.state.model}
//                     from {this.state.year}</p>
//                 </div>
//             </div>
//         );
//     }
// }
// ReactDOM.render(<Car7/>,document.getElementById('root'));

// 8. Changing the state Object
class Car8 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand:"Foard",
            model:"Mustang",
            color:"red",
            year:1964
        };
    }
    changeColor = () => {
        this.setState({color:"blue"})
    };
    render() {
        return (
            <>
                <div>
                    <h1>Changing the state Object</h1>
                </div>
                <div>
                    <h1>My {this.state.brand}</h1>
                    <p>It is a {this.state.color}  
                    {this.state.model} from {this.state.year}</p>
                </div>
                <button
                    type='button'
                    onClick={this.changeColor}
                >Change Color</button>
            </>
        )
    }
}

const root2 = ReactDOM.createRoot(document.getElementById('root'));
root2.render(<Car8 />);