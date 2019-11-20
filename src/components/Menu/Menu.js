import React from 'react';
import './Menu.css'

const Menu = (props) => {
    console.log(props)
    return (
        <div className="menu">
            <button onClick={() => { props.filterAllNews('local') }}>Local News </button>
            <button onClick={() => { props.filterAllNews('entertainment') }}>Entertainment</button>
            <button onClick={() => { props.filterAllNews('science') }}>Science </button>
            <button onClick={() => { props.filterAllNews('health') }}>Health </button>
            <button onClick={() => { props.filterAllNews('technology') }}>Technology </button>            
        </div>
    )
}
export default Menu;