import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>

                            <a href='https://www.facebook.com/profile.php?id=100004500570717'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='a'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.instagram.com/jacob_aguilarhn/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCMO1Uu74qYTTMaIAP4TMxew/featured'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='https://twitter.com/jacob_aguilarHN'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-tex'>Jacob</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Frontend Dev ",
                                        1000,
                                        "Backend Dev",
                                        1000,
                                        "Web Dev",
                                        1000,
                                        "Mobile Dev",
                                        1000,
                                        "React / React Native",
                                        1000,
                                    ]}
                                />

                            </h1>
                            <span className='profile-role-tagline'>
                            Website under development
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{""}
                        </button>
                        <a href='CV Jacob.pdf' download='CV Jacob Aguilar.pdf'>
                            <button className="btn highlighted-btn">Get Summary</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
