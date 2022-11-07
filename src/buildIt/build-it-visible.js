class BuildItVisible extends React.Component{
    constructor(props){
        super(props);
        this.handleVisibility=this.handleVisibility.bind(this);
        this.state={visibility:false}
    }
    handleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            }
        });
    }

    render(){
        return(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibility}>{this.state.visibility ? 'Hide Detalis' : 'Show Detalis'}</button>
            {this.state.visibility && <h3>Some secret Details</h3>}
        </div>)
    }
}
ReactDOM.render(<BuildItVisible />,document.getElementById('app'));
