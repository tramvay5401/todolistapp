import React   from 'react';
import './Badge.scss'
import classNames from "classnames";



const Badge = ({color, onClick, className }) =>  {
        return (
            <i
                onClick={onClick}
                className={ classNames('badge', {[`badge--${color}`] : color}, className) }
            />
        );
}

export default Badge;