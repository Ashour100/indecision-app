'use strict';

var hide = true;

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    hide = !hide;render();
                } },
            hide ? 'Hide Detalis' : 'Show Detalis'
        ),
        hide && React.createElement(
            'h3',
            null,
            'Some secret Details'
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

render();
