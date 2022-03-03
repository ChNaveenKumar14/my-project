import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Json from "../data.json";
import "../App.css"
const Employee = () => {
    const navigate = useNavigate();
    const [empdata, Setempdata] = useState([]);
    const [alpha, setAlpha] = useState([]);

    const handleEmpInfo = (i) => {
        const data = i;
        navigate("about", { state: { data } });

    };
    function compare(a, b) {
        if (a.emp_name < b.emp_name) {
            return -1;
        }
        if (a.emp_name > b.emp_name) {
            return 1;
        }
        return 0;
    }
    useEffect(() => {
        if (Json.length > 0) {
            let tempEmp = Json.sort(compare);
            let tempAlpha = [];
            tempEmp?.forEach((item) => {
                if (!tempAlpha?.includes(item.emp_name.charAt(0)))
                    tempAlpha.push(item.emp_name.charAt(0));
            });
            setAlpha(tempAlpha);
            Setempdata(tempEmp);
        }
    }, []);
    const [searchKey, setSearchKey] = useState("");

    const handleSearch = (e) => {
        // console.log("login");
        if (e.target.value !== "") {
            let tempEMp = empdata.filter((i) => {
                console.log(i, e?.target?.value);
                return i?.emp_name
                    .toLowerCase()
                    ?.includes(e.target.value.toLowerCase());
            });
            let tempAlpha = [];
            tempEMp?.forEach((item) => {
                if (!tempAlpha?.includes(item.emp_name.charAt(0)))
                    tempAlpha.push(item.emp_name.charAt(0));
            });
            setAlpha(tempAlpha);
            Setempdata(tempEMp);
        } else {
            let tempEMp = Json.sort(compare);
            let tempAlpha = [];
            tempEMp?.forEach((item) => {
                if (!tempAlpha?.includes(item.emp_name.charAt(0)))
                    tempAlpha.push(item.emp_name.charAt(0));
            });
            setAlpha(tempAlpha);
            Setempdata(tempEMp);
        }
        setSearchKey(e?.target?.value);
    };
    return (
        <>
            <div className="container" style={{ width: "500px" }}>
                <div className="row">
                    <div className="col">
                        <input type="search" placeholder="search" onChange={handleSearch} />
                    </div>
                    <div className="col"></div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-11">
                        <div>
                            {alpha.map((i) => (
                                <div key={i}>
                                    <div>{i}</div>
                                    <div>
                                        {empdata?.map(
                                            (item) =>
                                                item.emp_name.charAt(0) === i && (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-3">
                                                               
                                                                <div key={item?.emp_id}>
                                                                            <img className="img-fluid" src={item.photo} />
                                                                        </div>
                                                            </div>
                                                            <div className="col-7">
                                                                <div
                                                                    key={item.emp_id}
                                                                    onClick={() => handleEmpInfo(item)}
                                                                >
                                                                    
                                                                    <div>
                                                                        <h6>{item?.emp_name}</h6>
                                                                    </div>
                                                                    <div>{item?.emp_designation}</div>
                                                                    <div>{item?.emp_address}</div>
                                                                </div>
                                                            </div>
                                                            <hr />
                                                        </div>
                                                    </>
                                                )
                                        )}

                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ position: "absolute", marginLeft: "350px", marginBottom: "100px" }} >
                            <i style={{ fontSize: "40px" }} className="fa">&#xf0b0;</i>
                        </div>
                    </div>
                    <div className="col-1">
                        <a href="">A</a>
                        <br />
                        <a href="">B</a>
                        <br />
                        <a href="">C</a>
                        <br />
                        <a href="">D</a>
                        <br />
                        <a href="">E</a>
                        <br />
                        <a href="">F</a>
                        <br />
                        <a href="">E</a>
                        <br />
                        <a href="">F</a>
                        <br />
                        <a href="">G</a>
                        <br />
                        <a href="">H</a>
                        <br />
                        <a href="">I</a>
                        <br />
                        <a href="">J</a>
                        <br />
                        <a href="">K</a>
                        <br />
                        <a href="">L</a>
                        <br />
                        <a href="">M</a>
                        <br />
                        <a href="">N</a>
                        <br />
                        <a href="">O</a>
                        <br />
                        <a href="">P</a>
                        <br />
                        <a href="">Q</a>
                        <br />
                        <a href="">R</a>
                        <br />
                        <a href="">R</a>
                        <br />
                        <a href="">S</a>
                        <br />
                        <a href="">T</a>
                        <br />
                        <a href="">U</a>
                        <br />
                        <a href="">V</a>
                        <br />
                        <a href="">W</a>
                        <br />
                        <a href="">X</a>
                        <br />
                        <a href="">Y</a>
                        <br />
                        <a href="">Z</a>
                        <br />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Employee;