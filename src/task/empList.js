import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Json from '../data.json';
const EmpList = () => {
    const loccation = useLocation()
    const [emp, setEMp] = useState("");
    useEffect(() => {
        // console.log(loccation?.state?.data)
        setEMp(loccation?.state?.data)
    }, [loccation])
    return (
        <>
            <div className='container mt-5' style={{ width: '500px',height:"400px",border:"1px solid black" }}>
                <div className='row'>
                    <div className='col'>
                        <img className='img-fluid' src="business.jpg" width="100%" />
                    </div>

                </div>
                <div className='row mt-5'>
                    <div className='col-6 p-2' style={{ border: "1px solid black",textAlign:"center" }}>
                        <h6>Details</h6>
                    </div>
                    
                    <div className='col-6 ml-1' style={{ border: "1px solid black",textAlign:"center" }}>
                        <h6>hierarchy</h6>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 p-4'>
                        <div><span style={{fontWeight:"bold"}}>Name</span>:<span style={{fontWeight:"bold"}}>{emp?.emp_name}</span></div>
                        <div><span style={{fontWeight:"bold"}}>Position</span>:{emp?.emp_designation}</div>
                        <div><span style={{fontWeight:"bold"}}>Place</span>:{emp?.emp_address}</div>
                        <div><span style={{fontWeight:"bold"}}>salary</span>:{emp?.emp_salary}</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EmpList