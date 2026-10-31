import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Education = () => {
  let navigate=useNavigate()
  let [apidata,setApiData]=useState([])
  let api=async()=>{
    let resp=await axios.get(`http://localhost:4000/education`)
    setApiData(resp.data)
  }
  useEffect(()=>{
    api()
  },[])
  
  return (
    <>
      <div className="education">
        <div className="head">
          <h1>EDUCATION</h1>
          <button onClick={()=>{navigate(`/`)}}>Close</button>
        </div>
        <div className="container">
          <table border={1} rules='all'>
            <thead>
              <th>Qualification</th>
              <th>CollegeName</th>
              <th>Place</th>
              <th>YOP</th>
              <th>CGPA/PERCENTAGE</th>
            </thead>
            <tbody>
              {apidata.map((elem)=>{
                let {Qualification,CollegeName,place,Yop,Cgpa}=elem
                return(
                  <tr>
                    <td>{Qualification}</td>
                    <td>{CollegeName}</td>
                    <td>{place}</td>
                    <td>{Yop}</td>
                    <td>{Cgpa}</td>
                  </tr>
                )

              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Education
