import React from "react";

{/*
    Header
        Logo
        Nav bar with buttons - Login, SignUp, Home etc
    Hero Image
    Footer
        Different links
*/}

function Landing() {
    return <div>
        <h2>Landing page</h2>
        <ul>
            <li><a href=" http://localhost:5173/login">Login</a></li>
            <li><a href=" http://localhost:5173/signup">SignUp</a></li>
            <li><a href=" http://localhost:5173/createCourses">CreateCourse</a></li>
        </ul>
    </div>
}

export default Landing;