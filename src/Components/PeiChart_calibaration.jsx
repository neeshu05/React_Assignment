import React from 'react'
import ProgressBar from './ProgressBar'
import Cards from './HelpfulCards'
function Right() {

    const WARRANTY_DATA = [
        { name: "Not Required", value: 20, color: "#9CA3AF" },
        { name: "Not Calibrated", value: 35, color: "#FB7185" },
        { name: "Calibrated", value: 45, color: "#60A5FA" },
      ];

  return (
    <div className="flex flex-row gap-4 w-full mt-4">
    <div style={{ width: '55%' }}>
      <ProgressBar label='Service' />
    </div>
    <div style={{ width: '45%' }}>
      <Cards label='Calibration Status' data={WARRANTY_DATA}/>
    </div>
  </div>
  )
}

export default Right