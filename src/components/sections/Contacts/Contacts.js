import React from 'react'
import PropTypes from 'prop-types'
import Auxilary from '../../../Layout/Auxilary'

const Contacts = props => {
    return (
        <Auxilary>
            <div className="row">
                <div className="col-md-12">
                    <h4 className="widget-title">PLACE TO TALK WITH ME</h4>
                    <div className="main-section">
                        <h1 className="main-title">Contact me</h1>

                        <p></p>

                        <div className="vcard">
                            <dl className="dl dl-vertical">
                                <dt>E-mail:</dt>
                                <dd>
                                    <a href="mailto:subhransumaharana@gmail.com"><i className="icon fa fa-envelope"></i>
                                        subhransumaharana@gmail.com</a>
                                </dd>

                                {/* <dt>&nbsp;</dt>
                                <dd></dd> */}

                                <dt>LinkedIn:</dt>
                                <dd>
                                    <a href="https://www.linkedin.com/in/smaharana/"><i className="icon fa fa-linkedin"></i>
                                        Subhransu</a>
                                </dd>

                                <dt>Github:</dt>
                                <dd>
                                    <a href="https://github.com/subhnet"><i className="icon fa fa-github"></i>
                                        subhnet</a>
                                </dd>

                                <dt>Facebook:</dt>
                                <dd>
                                    <a href="https://facebook.com/"><i className="icon fa fa-facebook"></i>
                                        Subhransu</a>
                                </dd>

                                <dt>Twitter:</dt>
                                <dd>
                                    <a href="https://twitter.com/subhmaharana"><i className="icon fa fa-twitter"></i>
                                        @subhmaharana</a>
                                </dd>
                                <dt>Dev profile: </dt>
                                <dd>
                                    <a href="https://dev.to/subhransu">
                                        <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Subhransu Maharana's DEV Profile" height="20" width="20" />
                                        &nbsp; subhransu
                                    </a>
                                </dd>
                            </dl>
                        </div>
                    </div>


                </div>
            </div>
            <div className="row">
                <form action="#" method="post" className="contact-form">
                    <fieldset className="col-md-4 col-sm-6">
                        <input type="text" id="your-name" placeholder="Your Name..." />
                    </fieldset>
                    <fieldset className="col-md-4 col-sm-6">
                        <input type="email" id="email" placeholder="Your Email..." />
                    </fieldset>
                    <fieldset className="col-md-4 col-sm-12">
                        <input type="text" id="your-subject" placeholder="Subject..." />
                    </fieldset>
                    <fieldset className="col-md-12 col-sm-12">
                        <textarea name="message" id="message" cols="30" rows="6" placeholder="Leave your message..."></textarea>
                    </fieldset>
                    <fieldset className="col-md-12 col-sm-12">
                        <input type="submit" className="button big default" value="Send Message" />
                    </fieldset>
                </form>
            </div>

        </Auxilary>
    )
}

Contacts.propTypes = {

}

export default Contacts
