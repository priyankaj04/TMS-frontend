import React, { useTransition } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useNavigate } from "react-router-dom"
import Avatar from './Avatar';

function Navbar({ userDetails }) {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    sessionStorage.clear()
    startTransition(() => navigate('/login'))
}

  return (
    <div className='w-full h-16 bg-blue-700 flex flex-1 justify-between'>
      <div></div>
      <div className='flex justify-center items-center mx-5'>
        <Menu>
          <MenuButton><Avatar firstname={userDetails?.firstname} color={userDetails?.profilecolor} /></MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-gray-200 shadow bg-white p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button onClick={() => handleLogout()} className="text-black group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  )
}

export default Navbar;