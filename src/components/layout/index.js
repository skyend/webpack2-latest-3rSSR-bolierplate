import React, {Component, PropTypes} from 'react';
import classes from './default.scss';


export default class Layout extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <div>
                header
            </div>

            <div>
                body
            </div>

            <div>
                footer
            </div>
        </div>
    }
}