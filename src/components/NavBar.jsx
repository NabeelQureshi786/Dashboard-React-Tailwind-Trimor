import React from 'react'
import { TextInput } from '@tremor/react'
import { SearchIcon } from '@heroicons/react/solid'
const NavBar = () => {
  return (
    <div className='py-3 px-2 sm:flex  items-center justify-between sm:flex-row'>
        <div className='text-white pb-3 font-bold'>Dashboard</div>
        <div>
            <TextInput  icon={SearchIcon} placeholder='Search...'
            />
        </div>
    </div>
  )
}

export default NavBar