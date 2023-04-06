import React from 'react'

function Home() {
  return (
    <div>
    <div className='speciality'>
        <h1>speciality</h1>
    </div>
    <div className='image'>
    <img src={"porfolio.jpg"} alt="My" srcset="" />
    </div>
    <div className='name-skill-container'>
    <div className='my-name'>
<h1>Emmanuel <br /> Barsulai</h1>
    </div>
    <div className="skills">
        <p>Ruby</p>
        <p>React</p>
        <p>Javascript</p>

    </div>
    </div>
    </div>
  )
}

export default Home