import React from 'react'

function HomeNav() {
  return (
   <>
   
   <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
            <div class="container">
                <a class="navbar-brand mx-auto d-lg-none" href="/">
                    Halee Care
                    <strong class="d-block">Diabetes Specialist</strong>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#timeline">Patient Care</a>
                        </li>

                        <a class="navbar-brand d-none d-lg-block" href="/">
                        Halee Care
                            <strong class="d-block">Diabetes Specialist</strong>
                        </a>

                    

                        <li class="nav-item">
                            <a class="nav-link" href="#booking">Document</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li> 
                        
                        
                         <li class="nav-item">
                            <a class="nav-link" href="/patient">Patient</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
   </>
  )
}

export default HomeNav
