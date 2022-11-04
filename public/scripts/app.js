'use strict';

var number = 0;

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count:',
            number
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    number++;render();
                } },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    number--;render();
                } },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    number = 0;render();
                } },
            'Reset'
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
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
