import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Json } from '../data';

const EmpList = () => {
    const loccation = useLocation()
    const [emp, setEMp] = useState("");
    useEffect(() => {
        console.log(loccation?.state?.data)
        setEMp(loccation?.state?.data)
    }, [loccation])
    return (
        <>
            <div className='container' style={{ width: '500px' }}>
                <div className='row'>
                    <div className='col'>
                        <img className='img-fluid' src="business.jpg" width="100%" />
                    </div>

                </div>
                <div className='row'>
                    <div className='col' style={{ border: "1px solid black" }}>
                        Details
                    </div>
                    <div className='col'>
                        hierarchy
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div><h6>{emp?.emp_name}</h6></div>
                        <div>{emp?.emp_designation}</div>
                        <div>{emp?.emp_address}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EmpList