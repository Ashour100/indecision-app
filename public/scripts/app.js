'use strict';

console.log('First Try');

var app = {
    title: 'React',
    subtitle: 'Subtitle',
    options: [1, 2]
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h3',
        null,
        app.subtitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
        'p',
        null,
        'There are ',
        app.options.length,
        ' options'
    ) : React.createElement(
        'p',
        null,
        'No options are available'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

//Testing
var multipier = {
    numbers: [5, 10, 15],
    multiplyBy: 2,
    multipingProcess: function multipingProcess() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};
console.log(multipier.multipingProcess());
