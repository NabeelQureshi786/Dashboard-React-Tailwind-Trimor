import React from 'react'
import DonutChartComponenet from './MyDonutChart'
import MyBarList from './MyBarList'
import MyListCard from './MyListCard'
const RightColumn = () => {
  return (
    <div>
        <div>
            <DonutChartComponenet/>
            <MyBarList/>
            <MyListCard/>
        </div>
    </div>
  )
}

export default RightColumn