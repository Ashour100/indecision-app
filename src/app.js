console.log('First Try');

let app={
    title:'React',
    subtitle:'Subtitle',
    options:[1,2],
};



let template=
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <h3>{app.subtitle}</h3>}
    {(app.options && app.options.length>0) ? <p>There are {app.options.length} options</p> : <p>No options are available</p>}
</div>;

const appRoot=document.getElementById('app');
ReactDOM.render(template,appRoot);



//Testing
const multipier={
    numbers:[5,10,15],
    multiplyBy:2,
    multipingProcess(){
        return this.numbers.map((number)=> number*this.multiplyBy);
    } 
}
    console.log(multipier.multipingProcess());
