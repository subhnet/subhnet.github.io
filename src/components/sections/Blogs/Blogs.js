import React from 'react'
import PropTypes from 'prop-types'

const Blogs = props => {
    return (
        <div className="row">

            <div className="col-md-12">
                <h4 className="widget-title">My Blogs</h4>

                <p>Here you can find all my blogs.</p>

                <div className="timeline talks-timeline">
                    <ul>
                        <li className="timeline_element talk">
                            <div className="timeline_element-date">
                                <time className="timeline_element-date-text">26 Apr 2020</time>
                            </div>

                            <div className="timeline_element-contents">
                                <h3 className="talk-title">
                                    <b>Realtime Chat app using Kafka, SpringBoot, ReactJS, and WebSockets</b>
                                </h3>

                                <div className="talk-buttons">
                                    <a target="_blank" href="https://dev.to/subhransu/realtime-chat-app-using-kafka-springboot-reactjs-and-websockets-lc"
                                        className="button button-red">
                                        <i className="fa fa-file-text-o"></i>
                                        Read article
                            </a>

                                </div>

                            </div>
                        </li>
                        <li className="timeline_element talk">
                            <div className="timeline_element-date">
                                <time className="timeline_element-date-text">01 Mar 2020</time>
                            </div>

                            <div className="timeline_element-contents">
                                <h3 className="talk-title">
                                    <b>Dockerizing Reactjs, nodejs and nginx server</b>
                                </h3>

                                <div className="talk-buttons">
                                    <a target="_blank" href="https://dev.to/subhransu/nevertheless-subhransu-maharana-coded-5eam"
                                        className="button button-red">
                                        <i className="fa fa-file-text-o"></i>
                                        Read article
                            </a>

                                </div>

                            </div>
                        </li>
                        <li className="timeline_element talk">
                            <div className="timeline_element-date">
                                <time className="timeline_element-date-text">09 Feb 2019</time>
                            </div>

                            <div className="timeline_element-contents">
                                <h3 className="talk-title">
                                    <b>Developing Chat App with Angular UI and Back-end in Golang</b>
                                </h3>

                                <div className="talk-buttons">
                                    <a target="_blank" href="https://medium.com/@subhransumaharana_40338/developing-chat-app-with-angular-ui-and-back-end-in-golang-be01de4cdef7"
                                        className="button button-red">
                                        <i className="fa fa-file-text-o"></i>
                                        Read article
                            </a>

                                </div>

                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

Blogs.propTypes = {

}

export default Blogs
