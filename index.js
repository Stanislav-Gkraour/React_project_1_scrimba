
// first parameter is what i want to render 
// second param is where i want to render it
function MainContent() {
    return(
        <h1>I am learning React!</h1>
    )
} 
ReactDOM.render(
<div>
    <MainContent/>
</div>,  document.getElementById('root'))

// exemple how it would taht work in vanilla js
// let h1 = document.createElement("h1");
// h1.textContent = "Hello React";
// h1.className = "header";
// let root = document.getElementById("root");
// root.appendChild(h1);