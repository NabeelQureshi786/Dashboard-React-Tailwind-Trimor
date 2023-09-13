


import { HomeIcon } from '@heroicons/react/solid'
import { ChartBarIcon } from '@heroicons/react/solid';


import { DocumentSearchIcon } from '@heroicons/react/solid'
import { MailIcon } from '@heroicons/react/solid'
import { CreditCardIcon } from '@heroicons/react/solid'
import { BellIcon } from '@heroicons/react/solid'
import { ArrowUpIcon } from '@heroicons/react/solid'
import { ExternalLinkIcon } from '@heroicons/react/solid'
export function Sidebar() {
    return (
        <div className="h-screen w-14 sm:w-20 bg-slate-900 ">
            <div className='h-20 flex items-center'>
                <HomeIcon width={40} className='text-gray-300 fixed left-3 sm:left-6' />
            </div>
            {/* middleIcons */}
            <div className='fixed'>
                <div className=' h-16 flex items-center '>
                    <ChartBarIcon width={40} className='text-gray-300 fixed left-3 sm:left-6 bg-gray-600 text-center p-2 rounded-lg' />
                </div>
                <div className='h-16 flex items-center'>
                    <DocumentSearchIcon width={40} className='text-gray-300 fixed left-3 sm:left-6 bg-gray-600 text-center p-2 rounded-lg' />
                </div>
                <div className='h-16 flex items-center'>
                    <CreditCardIcon width={40} className='text-gray-300 fixed left-3 sm:left-6 bg-gray-600 text-center p-2 rounded-lg' />
                </div>
                <div className='h-16 flex items-center'>
                    <MailIcon width={40} className='text-gray-300 fixed left-3 sm:left-6 bg-gray-600 text-center p-2 rounded-lg' />
                </div>
                <div className='h-16 flex items-center'>
                    <BellIcon width={40} className='text-gray-300 fixed left-3 sm:left-6 bg-gray-600  text-center p-2 rounded-lg' />
                </div>
            </div>
            <div className='fixed bottom-9'>
            <div className='h-16 flex items-center'>
                    <ArrowUpIcon width={40} className='text-gray-300 fixed left-3 sm:left-6 bg-gray-600 text-center p-2 rounded-lg' />
                </div>
                <div className='h-16 flex items-center'>
                    <ExternalLinkIcon width={40} className='text-gray-300 fixed left-3 sm:left-6 bg-gray-600  text-center p-2 rounded-lg' />
                </div>
            </div>
        </div>
    )
}