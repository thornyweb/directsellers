import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const App = React.createClass({
    render: function () {
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )

    }
});

ReactDOM.render(
    <App />,
    document.getElementById('react-container')
);
