import React, { useEffect, useState } from "react";
import "./Home.css";
import "animate.css";
import { useInView } from "react-intersection-observer";

export function Home() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [animateClass,setAnimateClass] = useState({
    name_up: "animate__backInUp",
    name_down: "animate__backInDown"
  })


  useEffect(()=> {
    const changeThestateForStyle = () => {
      if (inView) {
        setAnimateClass({
          name_up: "animate__backInUp",
          name_down: "animate__backInDown"
        })
      } else {
        setAnimateClass({
          name_up: "",
          name_down: ""
        })
      }
    }

    changeThestateForStyle()
  },[inView])

  

  return (
    <div ref={ref} id="home" className="home">
      <h2 className={`title-name animate__animated ${animateClass.name_up}`}>
        I am Abhishek
      </h2>
      <h3 className={`profession animate__animated ${animateClass.name_down}`}>
        Front-End Developer
      </h3>
    </div>
  );
}
