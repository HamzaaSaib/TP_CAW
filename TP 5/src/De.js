import React, { Component } from 'react';
import './De.css';


import deone from './/1.png';
import detwo from './/2.png';
import dethree from './/3.png';
import defour from './/4.png';
import defive from './/5.png';
import desix from './/6.png';
import './De.css'
const tab_de = [deone, detwo, dethree, defour, defive, desix];

class De extends Component {

    render() {

        return (

            <div className="De">

                <img className={this.props.act ? "action" : ""} src={tab_de[this.props.face]} />

            </div>

        )

    }
}

export default De;