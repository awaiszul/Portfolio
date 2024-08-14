import React from 'react'
import './Projects.css'
const Projects = () => {
  return (
    <div className='container'>
            <h1 id='heading'>My Projects</h1>
            <p id='para'>Things I have built so far</p>
        <div className="projects">
            <div className="card">
            <div class="bg uwu"></div>
            <div class="bg"></div>
                <img src="../Images/project (1).png" alt="" />
                <h1>Youtube Clone</h1>
                <p>A video-sharing platform mimicking YouTube's functionality, allowing users to upload, share, and view videos with features like categorization, authentication, and commenting.</p>
                <div className="stack">
                <span>Tech Stack:</span>
                <p>React.js and Javascript</p>
                </div>
                <div className="links">
                    <a href="https://youtube-clone-neon-eight.vercel.app"> <img src="../Images/live.png" alt="" /> Live Demo</a>
                    <a href="https://github.com/awaiszul"> <img src="../Images/github.png" alt="" /> Source Code</a>
                </div>
            </div>
            <div className="card bg-orange-500">
            <div class="bg uwu"></div>
            <div class="bg"></div>
                <img src="../Images/project.jfif" alt="" />
                <h1 className='text-white'>Spotify Clone</h1>
                <p>A music streaming platform replicating Spotify's features, enabling users to search, play, and manage music with recommendations, playlists, and social sharing.</p>
                <div className="stack">
                <span>Tech Stack:</span>
                <p>React.js and Tailwind CSS</p>
                </div>
                <div className="links">
                    <a href="https://spotify-one-green-58.vercel.app"> <img src="../Images/live.png" alt="" /> Live Demo</a>
                    <a href="https://github.com/awaiszul"> <img src="../Images/github.png" alt="" /> Source Code</a>
                </div>
            </div>
            <div className="card">
            <div class="bg uwu"></div>
            <div class="bg"></div>
                <img src="../Images/project (2).png" alt="" />
                <h1>Geminie Clone</h1>
                <p>An AI language model replicating Geminie's conversational capabilities, allowing users to engage in natural-sounding dialogues with a highly advanced language understanding and response system.</p>
                <div className="stack">
                <span>Tech Stack:</span>
                <p>React.js and Restful API </p>
                </div>
                <div className="links">
                    <a href="https://geminie-flax.vercel.app"> <img src="../Images/live.png" alt="" /> Live Demo</a>
                    <a href="https://github.com/awaiszul"> <img src="../Images/github.png" alt="" /> Source Code</a>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Projects
