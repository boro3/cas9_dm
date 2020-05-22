import React from 'react'
import {Link} from 'react-router-dom'

export class Navigation extends React.Component{

    render(){
        return(
            <ul id='navigation'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/comments'}>Comments</Link></li>
            </ul>
        )
    }
}