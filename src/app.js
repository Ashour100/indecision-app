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
        this.setState(()=>{
            return{
                options:[]
            }
        });
    }
    render(){
        return(
            <div>
                <Header />
                <Action handlePick={this.handlePick} />
                <Options options={this.state.options} removeAll={this.handleRemoveAll} />
                <AddOption />
            </div>
        )
    }
    
}
class Header extends React.Component {
    render() {
        return (
        <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer</h2>
        </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
        <div>
            <button onClick={this.props.handlePick}>What should I do?</button>
        </div>
        );
    }
}

class Options extends React.Component{
    render(){
        let options=this.props.options;
        return(
            <div>
                <span>There are {options.length} options</span>
                <button onClick={this.props.removeAll}>Remove All</button>
                <ol>
                {options.map((element) => <Option key={element} element={element} />)}
                </ol>
            </div>
        )
    }
} 
class Option extends React.Component{
    render(){
        return(
            <li>{this.props.element}</li>
        )
    }
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
