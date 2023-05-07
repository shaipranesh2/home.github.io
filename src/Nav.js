import React from "react";

export default function Nav(){
    return(
        <nav>
            <div className="Name"><p><strong>Shai Pranesh</strong></p></div>
        <div className="nav-elements">
        <ul>
            
            <li><div className="Home"><a href="">Home</a></div></li>
            <li><div className="Blog"><a href="https://shaipranesh2.github.io/blog.github.io/" target="_blank">Blog</a></div></li>
            <li><div className="Experience"><a href="">Experience</a></div></li>
            <li><div className="Projects"><a href="">Projects</a></div></li>
            <li><div className="Courses"><a href="">Courses</a></div></li>
            <li><div className="Skills"><a href="">Skills</a></div></li>
            
            <li><div className="Resume"><a href="https://drive.google.com/drive/u/1/folders/1aM5lNWdUU80g7ZlJutdmcZAdVx0ASt7V" target="_blank">Resume</a></div></li>
            <li><div className="Contact"><a href="">Contact</a></div></li>
        </ul>
        </div>
        </nav>
    )
}