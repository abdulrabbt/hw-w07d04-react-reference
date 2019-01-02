import React, { Component } from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LyfeCycleInfo from './LyfeCycleInfo';

class ComponentInfo extends Component {
    render() {
        return (
            <div className="component-info">
                <h2 className="component-title">ComponentInfo</h2>
                <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. </p>

                <div className="com"><PropsInfo /></div>

                <div className="com"><StateInfo /></div>

                <div className="com"><LyfeCycleInfo /></div>


            </div>
        )
    }
}

export default ComponentInfo;