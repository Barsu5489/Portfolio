import React from 'react'

function Works() {
  return (
    <div className="project-page">
         <h1 className="project-page__title">My Projects </h1>
         <hr />
         <a style={{textDecoration:'none'}} href={'https://job-app-user-interface.vercel.app/'}>
    <div className="project">
        <div className="project__header">
        
          <span className='project__title-span'> <h2 className="project__title" style={{color:'black'}}>Job App</h2></span> 
            <hr />  
            
        
        </div>
        <div className='project-image-description'>
        <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="missing" srcSet="" className='projectImg'/>
        
          <p className="project__description">Fullstack application build using React for frontend and a backend resful API built using Ruby on rails.  The application allows companies to post job openings and find potential job seekers. Job seekers can also search for and apply to job openings.</p>
          </div>
        
        <div className="project__footer">
          <ul className="project__skills">
            <li className="project__skill">Ruby</li>
            <li className="project__skill">React</li>
            <li className="project__skill">postman</li>
            <li className="project__skill">Javascript</li>
          </ul>
        </div>
      </div>
      </a>

      <a style={{textDecoration:'none'}} href={'https://charity-app-seven.vercel.app/'}>
    <div className="project">
        <div className="project__header">
        
          <span className='project__title-span'> <h2 className="project__title" style={{color:'black'}}>charity App</h2></span> 
            <hr />  
            
        
        </div>
        <div className='project-image-description'>
        <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRmb2xpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="missing" srcSet="" className='projectImg'/>
        
          <p className="project__description">This is a frontend Application built using React</p>
          </div>
        
        <div className="project__footer">
          <ul className="project__skills">
            <li className="project__skill">React</li>
            <li className="project__skill">Javascript</li>
          
            <li className="project__skill">HTML/CSS</li>
          </ul>
        </div>
      </div>
      </a>
      </div>
  )
}

export default Works