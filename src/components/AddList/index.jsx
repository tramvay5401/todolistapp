import React, {useState} from 'react';
import List from "../List";
import closeSvg from '../../assets/icons/Close.svg'

import './AddList.scss'
import Badge from "../Badge";

const AddList = ({colors}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedColor, setSelectedColor] = useState(colors[0].id);



    return(
        <div className="add-list" >
            <List onClick={()=>{
                setShowPopup(true)
            }}
                  items={[
                {
                    className: "list__add-button",
                    icon: <svg
                        width="12" height="12" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M6 1V11" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1 6H11" stroke="#868686" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                    </svg> ,
                    name: "Добавить список",
                }
            ]}

            />
            { showPopup &&  <div className="add-list__popup">
                <img
                    onClick={()=>{setShowPopup(false)}}
                    src={closeSvg} alt="closeSvg"
                    className="add-list__popup-close-btn"
                />
                <input className="field" type="text" placeholder="Название списка"/>
                <div className="add-list__popup-colors">

                        {
                            colors.map( (color) => (
                                <Badge
                                    onClick={()=> setSelectedColor(color.id)}
                                    key={color.id}
                                    color={color.name}
                                    className={selectedColor === color.id && 'active'}
                                />
                            ))
                        }
                </div>
                <button className="button">Добавить</button>
            </div>}
        </div>
    )
}

export default AddList;