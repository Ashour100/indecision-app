class IndecisionApp extends React.Component{
    render(){
        let options= ['First Option', 'Sec Option','third'];
        return(
            <div>
                <Header />
                <Action />
                <Options options={options} />
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
            <button>What should I do?</button>
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
    // submit(e){
    //     e.preventDel
    // };
    render(){
        return(
            <form >
                <input type="text" name='option' />
                <button>Add</button>
            </form>
        )
    }
}

console.log(Options.options)
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));
