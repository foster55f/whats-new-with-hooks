import React from 'react';
import './Menu.css'

const Menu = (props) => {
    const filterClick = (event) => {
    props.selectNews(event.target.className)
    }

    return (
        <div className="menu">
            <button onClick={filterClick} className='local'>Local News </button>
            <button onClick={filterClick} className='entertainment'>Entertainment </button>
            <button onClick={filterClick} className='science'>Science </button>
            <button onClick={filterClick} className='health'>Health </button>
            <button onClick={filterClick} className='technology'>Technology </button>          
        </div>
    )
}
export default Menu;