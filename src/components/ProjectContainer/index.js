import React from 'react'
import { connect } from 'react-redux'

class ProjectContainer extends React.Component {
    render() {
        const { img, title, description} = this.props.projects

        return(
            <div className='card'>
                <img src={img} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        )
    }
}

export default connect(ProjectContainer)