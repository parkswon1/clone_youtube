import React, { useEffect, useState } from 'react';
import Main from '../component/section/Main'

import { Link } from 'react-router-dom'
import { useAuth } from '../component/AuthContext';

function Subscription() {
    const { authToken } = useAuth();
    const [subscribedChannels, setSubscribedChannels] = useState([]);

    useEffect(() => {
        const fetchAllSubscribedChannels = async () => {
            let allChannels = [];
            let nextPageToken = null;

            do {
                try {
                    const response = await fetch(`https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true${nextPageToken ? `&pageToken=${nextPageToken}` : ''}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                        },
                    });

                    if (response.ok) {
                        const data = await response.json();
                        const channels = data.items.map((item) => ({
                            img: item.snippet.thumbnails.default.url,
                            name: item.snippet.title,
                            channelAddress: `https://www.youtube.com/channel/${item.snippet.resourceId.channelId}`,
                            channelId: item.snippet.resourceId.channelId,
                        }));

                        allChannels = [...allChannels, ...channels];
                        nextPageToken = data.nextPageToken;
                    } else {
                        console.error('Failed to fetch subscribed channels');
                    }
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            } while (nextPageToken);

            setSubscribedChannels(allChannels);
        };

        fetchAllSubscribedChannels();
    }, [authToken]);
    
    return (
        <Main 
            title = "내가 구독한 채널"
            description="내가 구독한 채널입니다.">
            
            <section id='Subscription'>
                <h2>내가 구독한 채널.</h2>
                <div className="Subscription__inner">
                    {subscribedChannels.map((channel, key) => (
                        <div className="Subscription" key={key}>
                            <div className="Subscription__img play__icon">
                                <Link to={`/channel/${channel.channelId}`}>
                                    <img src={channel.img} alt={channel.name} />
                                </Link>
                            </div>
                            <div className="Subscription__info">
                                <Link to={`/channel/${channel.channelId}`}>
                                    {channel.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    );
}

export default Subscription