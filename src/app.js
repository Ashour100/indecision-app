


let number=0;


const render= function(){
    let template=
    <div>
    <h1>Count:{number}</h1>
    <button onClick={()=>{number++;render()}}>+1</button>
    <button onClick={()=>{number--;render()}}>-1</button>
    <button onClick={()=>{number=0;render()}}>Reset</button>
    </div>;
    ReactDOM.render(template,appRoot);
}

const appRoot=document.getElementById('app');
render();





//Testing
// const multipier={
//     numbers:[5,10,15],
//     multiplyBy:2,
//     multipingProcess(){
//         return this.numbers.map((number)=> number*this.multiplyBy);
//     } 
// }
//     console.log(multipier.multipingProcess());
