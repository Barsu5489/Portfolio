import React from 'react'
import Works from './Works'

function Home() {
  return (
    <>
    <div>
    <div className='speciality'>
        <h2>Junior FullStack <br /> Software Engineer</h2>
    </div>
    <div className='image'>
    <img className='my-image' src={process.env.PUBLIC_URL + "/porfolio.jpg"} alt="MyImage"  />
    </div>
    <div className='name-skill-container'>

    <div className="skills">
      <p>I am a Junior Full Stack Software Engineer with a passion for problem-solving and a <br /> strong background in <b>Ruby, rails, React, NodeJs and JavaScript.</b>  <br /> I am committed to producing high-quality code, applications and constantly improving my skills.</p>

    </div>
    <div className='my-name'>
<h1>Emmanuel <br /> Barsulai</h1>
    </div>
    
    </div>
    
    </div>
    <Works/>
    </>
  )
}

export default Home