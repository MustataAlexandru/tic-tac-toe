import {useState} from "react";

export default function Player({initialName, symbol , isActive, onChangeName}) {

    const [isEditing , setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);
    function handleEditingClick (e) {
        e.preventDefault();
        setIsEditing(isEditing => !isEditing);

        if (isEditing) onChangeName(symbol, playerName);
    }
    function handleChange(e) {
      setPlayerName(e.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
           <span className ='player'>
           {!isEditing ?
               <span className='player-name'>{playerName}</span> :
               <input type="text" required value={playerName} onChange={handleChange} />}
           <span className='player-symbol'>{symbol}</span>
             </span>
            <button onClick={handleEditingClick} >{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );

}