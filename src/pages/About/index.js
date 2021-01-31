import React from 'react'
import './style.css'

class About extends React.Component {
    render() {
        return(
            <>
                <div id='summary'>
                    <h2>About Me</h2>
                    <p>Hi my name is Kai and I am a junior Full Stack Developer based in London. <br></br> I have a strong interest in anything technology related from mobile phones to laptops.</p>
                    <h2>University </h2>
                    <h4>University of York | September 2017 - June 2020</h4>
                    <p>At university I studied Chemistry. During my time here I developed my research and independent learning skills.</p>
                    <h2>Futureproof </h2>
                    <h4>Ric Weiland Cohort | October 2020 - February 2021</h4>
                    <p>At Futureproof, I have learned so much about Web development and learned about all the following skills to qualify as a Full Stack Developer:</p>
                </div>
                <div id='skills'>
                    <i className="devicon-html5-plain-wordmark"></i>
                    <i className="devicon-css3-plain-wordmark"></i>
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-python-plain-wordmark"></i>
                    <i className="devicon-nodejs-plain-wordmark"></i>
                    <i className="devicon-express-original-wordmark"></i>
                    <i className="devicon-react-original-wordmark"></i>
                    <i className="devicon-redux-original"></i>
                    <i className="devicon-webpack-plain-wordmark"></i> <br></br>
                    <i className="devicon-babel-plain"></i>
                    <i className="devicon-postgresql-plain-wordmark"></i>
                    <i className="devicon-mongodb-plain-wordmark"></i>
                    <i className="devicon-flask-original-wordmark"></i>
                    <i className="devicon-django-line-wordmark"></i>
                    <i className="devicon-heroku-original-wordmark"></i>
                    <i className="devicon-github-original-wordmark"></i>
                    <i className="devicon-git-plain-wordmark"></i>

                </div>
            </>
        )
    }
}

export default About