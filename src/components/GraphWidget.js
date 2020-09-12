import React, { Component } from 'react';
import Widget from './Widget';
// import '../assets/css/GraphWidget.css';


class GraphWidget extends Component {

    render() {
        return (
            <Widget headline={this.props.headline} colspan={this.props.colspan} rowspan={this.props.rowspan} graphData={this.props.data} />
        );
    }

}


export default GraphWidget;