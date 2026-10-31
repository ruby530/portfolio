import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Skills = () => {

    let [bool, setBool] = useState("")
    let handlenote = (value) => {
        setBool(bool===value?"":value)
       
    }
    let navigate = useNavigate()

    return (
        <>
            <div className="skills">
                <h2 onClick={() => navigate(`/`)}>close</h2>
                <div className="container">
                    <div className="html">
                        <h3>HTML</h3>
                        <div>
                            <p>● I have a good knowledge in local attributes and global
                                attributes</p>
                            <p>● I have knowledge of semantic and non-semantic tag</p>
                            <p>● I have idea about hyperlinks</p>
                        </div>
                    </div>
                    <div className="css">
                        <h3>CSS</h3>
                        <div>
                            <p>● I have idea of selectors </p>
                            <p>● Also have a basic idea about the pseudo selectors </p>
                            <p> ● I have knowledge of combinators </p>
                            <p> ● I have efficient knowledge in box model with display
                                property and position property </p>
                        </div>
                        <button onClick={()=>handlenote("css")}>
                            Note
                        </button>
                        {bool==="css" && <p style={{ textAlign: "center", fontSize: '14px', color: "blue" }}>Created Static web-page using HTML and CSS like Knight
                            Bite Website | PortFolio</p>}
                    </div>
                    <div className="javascript">
                        <h3>JavaScript</h3>
                        <div>
                            <p>● I have knowlwdge of JavaScript functions,arrays and
                                object.</p>
                            <p>● I have good knowledge in JavaScript events</p>
                            <p>● Basic idea about DOM (Document Object Model) and
                                Promises</p>
                            <p> ● I also have idea about BOM (Browser Object Model)
                                features</p>
                        </div>
                        <button onClick={()=>handlenote("js")}>
                            Note
                        </button>
                        {bool==="js" &&  <p style={{textAlign: "center", fontSize: '14px', color: "blue" }}>Created dynamic projects like Otp validation with timer |
                            Password validation | Fetching api | Counter App | Day Night
                            theme change</p>}
                    </div>
                    <div className="reactjs">
                        <h3>Recat Js</h3>
                        <div>
                            <p> ● I have idea about Functional Components</p>
                            <p> ● I Also have idea about How Props works </p>
                            <p> ● I have knowledge of State </p>
                            <p>● Im good in Hooks like useState, useEffect,
                                useContext, useRef</p>
                        </div>
                        <button onClick={()=>handlenote("reactjs")}>
                            Note
                        </button>
                        {bool==="reactjs" && <p style={{textAlign: "center", fontSize: '14px', color: "blue" }}> Created SPA using React Router DOM like E-commerce
                            ShoppingCart | Admin_Zone</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
