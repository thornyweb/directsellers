import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render() {
        return(
            <header className="page-header" id="mainHeader">
                <h1>
                    Direct Sellers
                    <small className="pull-right">The home of direct selling</small>
                </h1>
            </header>
        )
    }
}
