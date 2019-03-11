import React from 'react';
import { AnnouncementButton } from './../components';

const Announcement = () => (
    <div className="announcement-bar">
        <div className="container">
            <div className="text-large announcement-text">
                This summer grab the best deals now
            </div>
            <AnnouncementButton>
                Learn more
            </AnnouncementButton>
        </div>
    </div>
)

export default Announcement;