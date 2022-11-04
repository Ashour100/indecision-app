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

// Testing Arrow Functions


// let fullName='Ahmed wael sdsdf sdfsdf';

// let firstName= (x)=> x.split(' ')[0];

// console.log(firstName(fullName))
