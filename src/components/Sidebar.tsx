import React, { Dispatch, SetStateAction } from 'react';
import { TUser } from '../types';

interface ISidebar {
  user: TUser;
  closeToggle?: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ user, closeToggle }: ISidebar) => {
  return <div>Sidebar</div>;
};

export default Sidebar;
