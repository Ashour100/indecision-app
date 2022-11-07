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
        return(
            <div>
                <ol>
                    <li>a</li>
                    <li>b</li>
                </ol>
            </div>
        )
    }
} 
class AddOption extends React.Component{
    // submit(e){
    //     e.preventDel
    // };
    render(){
        return(
            <form OnSubmit='submit'>
                <input type="text" name='option' />
                <button>Add</button>
            </form>
        )
    }
}


let template=
<div>
    <Header />
    <Action />
    <Options />
    <AddOption />
</div>
;


ReactDOM.render(template,document.getElementById('app'));
