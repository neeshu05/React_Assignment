import React from 'react'
import Cards from './HelpfulCards'
import ProgressBar from './ProgressBar'

const WARRANTY_DATA = [
    { name: "Total", value: 50, color: "#44D7B6" },
    { name: "Expires Soon", value: 30, color: "#FEC85C" },
    { name: "Requested", value: 20, color: "#B980F2" },
  ];

function Left() {
    return (
        <div className="flex flex-row gap-4 w-full mt-4">
            <div style={{ width: '55%' }}>
                <ProgressBar label='Incident' />
            </div>
            <div style={{ width: '45%' }}>
                <Cards label='Warranty Status' data={WARRANTY_DATA} />
            </div>
        </div>
    )
}

export default Left