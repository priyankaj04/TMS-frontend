import React, { useEffect, useState, useTransition } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems, Button, Dialog, DialogPanel, DialogTitle, Description, Field, Label, Select } from '@headlessui/react';
import { useNavigate } from "react-router-dom"
import Avatar from './Avatar';
import { UpdateUserByUserid } from '../Api';
import toast from 'react-hot-toast';

function Navbar({ userDetails }) {
  const navigate = useNavigate();
  console.log("userDetails", userDetails)
  let [isOpen, setIsOpen] = useState(false);
  const [firstname, setFirstname] = useState(userDetails?.firstname ?? '');
  const [lastname, setLastname] = useState(userDetails?.lastname ?? '');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (userDetails) {
      setFirstname(userDetails?.firstname);
      setLastname(userDetails?.lastname);
    }
  }, [])

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  const handleLogout = () => {
    sessionStorage.clear()
    startTransition(() => navigate('/login'))
  }

  const handleConfirm = () => {
    UpdateUserByUserid(sessionStorage.getItem('userid'), { firstname, lastname }).then((res) => {
      if (res.status) {
        toast.success('Successfully updated');
        setIsOpen(false);
      } else {
        toast.error(res.message);
      }
    })
  }

  return (
    <div className='w-full h-16 bg-violet-500 flex flex-1 justify-between items-center'>
      <div className='text-white font-semibold text-lg ml-5'>Voosh's Workspace</div>
      <div className='flex justify-center items-center mx-5'>
        <Menu>
          <MenuButton><Avatar firstname={userDetails?.firstname} color={userDetails?.profilecolor} /></MenuButton>
          <MenuItems
            transition
            anchor="bottom end"
            className="w-52 origin-top-right rounded-xl border border-gray-200 shadow bg-white p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
          >
            <MenuItem>
              <button onClick={() => open()} className="text-black group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                Edit
              </button>
            </MenuItem>
            <MenuItem>
              <button onClick={() => handleLogout()} className="text-black group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-gray-100">
                Logout
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 font-medium text-lg text-violet-500">
                Update your details
              </DialogTitle>
              <div className="my-2 mt-5">
                <div className='flex text-sm text-gray-400'>Firstname</div>
                <input className="text-gray-200 mb-2 w-full px-4 py-2 bg-white/5 rounded-xl text-md focus:outline-none focus:ring-0" value={firstname} onChange={(e) => setFirstname(e.target.value)} ></input>
              </div>
              <div className="my-2 mt-5">
                <div className='flex text-sm text-gray-400'>Lastname</div>
                <input className="text-gray-200 mb-2 w-full px-4 py-2 bg-white/5 rounded-xl text-md focus:outline-none focus:ring-0" value={lastname} onChange={(e) => setLastname(e.target.value)} ></input>
              </div>
              <div className="mt-4 flex justify-end flex-1 gap-5">
                <Button
                  className="inline-flex mx-2 items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  Cancel
                </Button>
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-violet-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-violet-400 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-violet-500"
                  onClick={() => handleConfirm()} >
                  Confirm
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  )
}

export default Navbar;