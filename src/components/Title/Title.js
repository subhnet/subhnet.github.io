import React from 'react'

const Title = props => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="widget-title">{props.title}</h4>
                <p></p>
            </div>
        </div>
    )
}

export default Title
