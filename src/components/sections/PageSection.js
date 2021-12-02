import React from 'react'
import Title from './../Title/Title';

const PageSection = props => {
    return (
        <div className="page-section" id={props.id}>
            <Title title={props.title} />
            {props.children}
        </div>
    )
}

PageSection.propTypes = {

}

export default PageSection
