import React from 'react'
import fetch from 'isomorphic-unfetch'
const { API_URL } = process.env
import Router from 'next/router';
import { parseCookies } from 'nookies';
import Link from 'next/link';
import Courses from '../../components/Courses'

function Dashboard(courses) {
    return (
        
            <div className="flex flex-wrap justify-center w-full">
                {console.log(courses.courses)}
                {courses.courses.map(course => (
                    <Courses key={course.id} course={course}/>

                    ))}
            </div>
            
       
    )
}


export async function getServerSideProps(ctx) {
    
    const jwt = parseCookies(ctx).token;
 
 
     const res = await fetch(`${API_URL}/api/courses?populate=icon`,{
         headers:{
             Authorization: `Bearer ${jwt}`
         }
     })
    
     const data = await res.json()
     console.log(data.data)
     return {
         props: {
             courses: data.data,
          
         }
     }
 
    
 }
 


export default Dashboard
