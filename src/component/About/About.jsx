import React, { useEffect, useState } from "react";
import "./About.css";
import 'animate.css';
import ProfilePic from "../../images/ProfilePic.jpg";

export function About() {
  const [age, setAge] = useState(24);

  useEffect(() => {
    const calculate_age = (dob) => {
      var diff_ms = Date.now() - dob.getTime();
      var age_dt = new Date(diff_ms);
      setAge(age_dt.getUTCFullYear() - 1970);
      // return Math.abs(age_dt.getUTCFullYear() - 1970);
    };
    calculate_age(new Date("1998,03,30")); // eslint-disable-next-line
  }, []);

  const checkNavigation = (e) => {
    const name = e.target.getAttribute("name");
    if(name === null){
        return;
    }

    const l1 = document.querySelector('#skills');
    const l2 = document.querySelector('#Experince');
    const l3 = document.querySelector('#Education');

    const skillDiv = document.querySelector("#skill-div")
    const expDiv = document.querySelector("#exp-div")
    const educationDiv = document.querySelector("#education-div")

    l1.classList.remove("style-list-name","animate__pulse")
    l2.classList.remove("style-list-name","animate__pulse")
    l3.classList.remove("style-list-name","animate__pulse")

    skillDiv.classList.remove("animate__lightSpeedInRight")
    expDiv.classList.remove("animate__lightSpeedInRight")
    educationDiv.classList.remove("animate__lightSpeedInRight")

    skillDiv.style.display = "none";
    expDiv.style.display = "none";
    educationDiv.style.display = "none";

    if(name === "skills"){
        skillDiv.style.display = "block";
        l1.classList.add("style-list-name","animate__pulse");
        skillDiv.classList.add("animate__lightSpeedInRight")
        return;
    }
    if(name === "Experince"){
        expDiv.style.display = "block";
        l2.classList.add("style-list-name","animate__pulse");
        expDiv.classList.add("animate__lightSpeedInRight")
        return;
    }
    if(name === "Education"){
        educationDiv.style.display = "block";
        l3.classList.add("style-list-name","animate__pulse");
        educationDiv.classList.add("animate__lightSpeedInRight")
        return;
    }
  }
  return (
    <div id="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-me-details">
        <div className="abt-me-image">
          <img src={ProfilePic} alt="" />
        </div>
        <div className="abt-me">
          <p className="discription">
            <span className="bold-discription">Hi I'm Abhishek S. </span>
            I'm {age} Year's old{" "}
            <span className="bold-discription">Front-End Developer </span>
            from Bengaluru (Karnataka, INDIA).
          </p>
          <p>
            I'm very much intersted in coding and designing, also love to learn
            new technology. My moto is to work together and move together. My
            dream is to become a successful
            <span className="bold-discription"> Front-End Developer</span>
          </p>
          <div className="education-skills-navBar">
                <ul className="navBar-skills" onClick={checkNavigation}>
                    <li className="list-skills style-list-name animate__animated" id="skills" name="skills">Skills</li>
                    <li className="list-skills animate__animated" id="Experince" name="Experince">Experince</li>
                    <li className="list-skills animate__animated" id="Education" name="Education">Education</li>
                </ul>
                <div id="skill-div" className="skills-section animate__animated animate__lightSpeedInRight">
                    <p className="skill-title">HTML</p>
                    <div className="myProgress">
                        <div className="myBar" style={{width:"80%"}}></div>
                    </div>
                    <p className="skill-title">CSS</p>
                    <div className="myProgress">
                        <div className="myBar" style={{width:"80%",backgroundColor:"blue"}}></div>
                    </div>
                    <p className="skill-title">JavaScript</p>
                    <div className="myProgress">
                        <div className="myBar" style={{width:"70%",backgroundColor:"yellow"}}></div>
                    </div>
                    <p className="skill-title">React js</p>
                    <div className="myProgress">
                        <div className="myBar" style={{width:"70%",backgroundColor:"red"}}></div>
                    </div>
                </div>

                <div id="exp-div" className="skills-section animate__animated animate__lightSpeedInRight">
                    <p><span className="exp-title">Newton School</span> | Newton School Coding Bootcamp</p>
                    <ul>
                        <li>Full Stack Development and problem solving</li>
                        <li>Technical Stack Learnt: HTML, CSS, JavaScript, React JS</li>
                        <li>Participated in various coding contests organized  by Newton School</li>
                        <li>Worked on Various projects like Movie Booking apps, Task Manager and many more</li>
                    </ul>
                </div>

                <div id="education-div" className="skills-section animate__animated animate__lightSpeedInRight">
                    <p><span className="exp-title">Bachelor of Engineering</span> | Electronics & Communication</p>
                    <p className="school-collage">JSS Academy Of Technical Education, Bengaluru (Karnataka, INDIA)</p>
                    <p><span className="exp-title">Diploma</span> | Electronics & Communication</p>
                    <p className="school-collage">Nadgir Polytechnic, Bengaluru (Karnataka, INDIA)</p>
                    <p><span className="exp-title">Matriculation</span> | Class X</p>
                    <p className="school-collage">Gnanabodhini High School, Bengaluru (Karnataka, INDIA)</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
