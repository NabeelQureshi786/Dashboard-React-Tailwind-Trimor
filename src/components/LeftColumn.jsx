import React from 'react'
import Card from './MyCard'
import MyCard from './MyCard'
import MyAreaChart from './MyAreaChart'
import MyTable from './MyTable'

const LeftColumn = () => {
  return (
    <div className=''>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4'>
            <MyCard/>
            <MyCard/>
            <MyCard/>
            {/* AreaChart */}
        </div>
        <div className='my-4'>
        <MyAreaChart/>
        </div>
        <div>
            <MyTable/>
        </div>
    </div>
  )
}

export default LeftColumn