import React from 'react'
import './Projects.css'

function Projects() {
    return (
        <>
            <div className="project_container">
                <h2 className='title'>Projects</h2>
                <div className="projects">
                    <div className="skeleton-card">
                        <div className="skeleton-img"></div>
                        <div className="skeleton-text short"></div>
                        <div className="skeleton-text"></div>
                    </div>
                    <div className="skeleton-card">
                        <div className="skeleton-img"></div>
                        <div className="skeleton-text short"></div>
                        <div className="skeleton-text"></div>
                    </div>
                    <div className="skeleton-card">
                        <div className="skeleton-img"></div>
                        <div className="skeleton-text short"></div>
                        <div className="skeleton-text"></div>
                    </div>
                    <h4 className="under-construction">This Section is Under Construction</h4>
                </div>
            </div>
        </>
    )
}

export default Projects
