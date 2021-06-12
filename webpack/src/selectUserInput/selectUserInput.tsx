import React from 'react';
import { User } from '../utils/getUser';
import { UserHeader } from '../header';
import './selectUserInput.scss';

interface Props {
  onSelect: (value: string) => void;
  options: Array<User>
  userSelected: UserHeader;
}

export const SelectUserInput: React.FC<Props> = (props) => {
  const { onSelect, options, userSelected } = props;

  return (
    <div className="select">
      {userSelected && (
        <div className="value-container">
          {userSelected.name.charAt(0)} {userSelected.lastname.charAt(0)}
        </div>
      )}
      {options && (
        <select
          className="select-input"
          name="user"
          id="user"
          onChange={(e) => onSelect(e.target.value)}
        >
          {options.map((user) => (
            <option
              key={user.id}
              value={user.id}
              label={`${user.name} ${user.lastname}`}
            ></option>
          ))}
        </select>
      )}
    </div>
  );
};
