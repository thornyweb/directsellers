const React = require('react');
const ReactDOM = require('react-dom');

const Hello = React.createClass({
    render: function () {
        return <div className='container'>Hello {this.props.name}</div>;
    }
});

ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('react-container')
);
