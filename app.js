import React from "react";
import ReactDOM from "react-dom/client"

// const myName = React.createElement("h1",{
//     id:'header-name',
//     className: 'class1 class2'
// },'Durga Prasad M');

// const introduction = React.createElement("p",{
//     id:'introduction-name',
//     className: 'class1 class2'
// },'Welcome to My Website');

// console.log(myName);
// const div = React.createElement('div',{},[myName,introduction])
// const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(root);
// root.render(div);


// new way on writing more redbility
const MyProfile =  () =>(
    <p>I am a Front End Developer</p>
)
const MySkills = function (){
    return(
    <div><b>HTML,CSS,JAVA Script , Angular and React</b></div>
    )
}

const myName = (
    <div>
    {/* Functional Composition */}
    <h1 key = "myname" className="class1">Durga Prasad M</h1>
    <p key = "description">welcome to my website</p>
    {MyProfile()}
    <MySkills />
    {4-4}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myName)