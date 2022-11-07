




let hide=true;


let render= function(){

    let template= 
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={()=>{hide=!hide;render()}}>{hide ? 'Hide Detalis' : 'Show Detalis'}</button>
        {hide && <h3>Some secret Details</h3>}
    </div>;
    
    const appRoot=document.getElementById('app');
    ReactDOM.render(template,appRoot);
}

render();