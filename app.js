const myName = React.createElement("h1",{
    id:'header-name',
    className: 'class1 class2'
},'Durga Prasad M');
const introduction = React.createElement("p",{
    id:'introduction-name',
    className: 'class1 class2'
},'Welcome to My Website');
console.log(myName);
const div = React.createElement('div',{},[myName,introduction])
const root = ReactDOM.createRoot(document.getElementById('root'))
console.log(root);
root.render(div);