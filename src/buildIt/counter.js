class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count:0
        }
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);
    
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    componentDidUpdate(prevProps, prevState){
        if (prevState.count!=this.state.count){
            localStorage.setItem('count', this.state.count)
        }
    }
    handleAddOne(){
        this.setState((lastState)=>({count:lastState.count + 1}))
        console.log(this.state.count)
    }
    handleMinusOne(){
        this.setState((lastState)=>{
            return{
                count:lastState.count - 1
            }
        })
    }
    handleReset(){
        this.setState(()=>{
            return{
                count:0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }

}
// Counter.defaultProps={
//     count:0
// }

ReactDOM.render(<Counter />, document.getElementById('app'))