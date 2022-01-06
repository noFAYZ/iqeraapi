import React from 'react'
import fetch from 'isomorphic-unfetch'
const { API_URL } = process.env
import Router from 'next/router';
import { parseCookies } from 'nookies';
import Link from 'next/link';
const Courses = ({ coursess,token }) => {

    return (

        <div className="flex flex-wrap justify-center w-full">
      
                
               {coursess.data.map(course => ( 
            <Link key={course.id}href={`/courses/${course.id}`}>
                    <div className="flex flex-col shadow-lg rounded-2xl w-80 p-4 bg-cyan-900 relative overflow-hidden mt-5">     
                   
                   <img src={API_URL+course.attributes.icon.data.attributes.formats.thumbnail.url} className=" w-14 h-14 rounded-full overflow-auto" alt="course" /> 
                        <div className="items-center">
                            <p className="text-white text-lg font-medium mb-2">
                                {course.attributes.courseName} 
                            </p>
                            <p className="text-gray-400 text-xs">
                            {course.attributes.Grade}
                            </p>

                        </div>
                    </div>
               </Link>
               ))}
         </div>
    )
};


export async function getServerSideProps(ctx) {

   const jwt = parseCookies(ctx).token;



    const res = await fetch(`${API_URL}/api/courses?populate=icon`,{
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    })
   
    const data = await res.json()

    return {
        props: {
            coursess: data,
         
        }
    }

   
}


export default Courses
