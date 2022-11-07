




let Visibility=true;


let render= function(){

    let template= 
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={()=>{Visibility=!Visibility;render()}}>{Visibility ? 'Hide Detalis' : 'Show Detalis'}</button>
        {Visibility && <h3>Some secret Details</h3>}
    </div>;
    
    const appRoot=document.getElementById('app');
    ReactDOM.render(template,appRoot);
}

render();