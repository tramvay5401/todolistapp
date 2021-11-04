import React from 'react';
import classNames from 'classnames';

import removeIcon from  '../../assets/icons/Remove.svg'

import Badge from "../Badge";


import './List.scss';

const List = ({items, isRemovable, onClick, onRemove }) => {

    const removeList = (item)=>{
        if (window.confirm('Вы действительно хотите удалить этот список? ')){
            onRemove(item)
        }
    }
    return(
        <ul onClick={onClick} className="list">
         {items.map(( item, index ) =>(
                <li key={ index + 1 } className={ classNames(item.className, { active : item.active}) }>
                    <i>
                        { item.icon ? item.icon : <Badge color={item.color}/> }
                    </i>
                    <span> { item.name } </span>
                    {isRemovable &&
                    <img
                        className="list__remove-icon"
                        src={removeIcon}
                        alt="Remove Icon"
                        onClick={()=>removeList(item)}
                    />
                    }
                </li>
            ))}
        </ul>
    )
}

export default List;