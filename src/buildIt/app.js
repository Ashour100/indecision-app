class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handlePick=this.handlePick.bind(this);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.state={
            options: ['First Option', 'Sec Option','third']
        }
    }
    handlePick(){
        alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
    }
    handleRemoveAll(){
        this.setState(()=>({options:[]}));
    }
    render(){
        return(
            <div>
                <Header />
                <Action available={this.state.options.length} handlePick={this.handlePick} />
                <Options options={this.state.options} removeAll={this.handleRemoveAll} />
                <AddOption />
            </div>
        )
    }
    
}
const Header= ()=> {
    return (
    <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
    </div>
    );
}

const Action= (props)=> {
    return (
    <div>
        <button disabled={!props.available} onClick={props.handlePick}>What should I do?</button>
    </div>
    );
}

const Options= (props)=>{
    let options=props.options;
    return(
        <div>
            <span>There are {options.length} options</span>
            <button onClick={props.removeAll}>Remove All</button>
            <ol>
            {options.map((element) => <Option key={element} element={element} />)}
            </ol>
        </div>
    )
}
const Option =(props)=>{
    return(
        <li>{props.element}</li>
    )
} 
class AddOption extends React.Component{
    handleAddOption(e) {
        e.preventDefault();
    
        const option = e.target.elements.option.value.trim();
    
        if (option) {
            alert(option);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
console.log()
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
