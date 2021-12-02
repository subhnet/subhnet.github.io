import React from 'react'
import PropTypes from 'prop-types'

const ProjectSection = props => {
    return (
        <div className={props.section}>
            {props.children}
        </div>
    )
}

ProjectSection.propTypes = {

}

export default ProjectSection
