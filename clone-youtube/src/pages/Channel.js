import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Main from '../component/section/Main';
import { CiBadgeDollar } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Channel = () => {
    const { channelId } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChannelData = async () => {
            try {
                const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
                const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${apiKey}`);
                
                if (response.ok) {
                    const data = await response.json();
                    if (data.items.length > 0) {
                        setChannelDetail(data.items[0]);
                    } else {
                        console.error('Channel not found.');
                    }
                } else {
                    console.error('Failed to fetch channel data.');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChannelData();
    }, [channelId]);

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title="유튜브 채널"
            description="유튜브 채널페이지입니다.">
            <section id='channel' className={channelPageClass}>
                {channelDetail && (
                    <div className='channel__inner'>
                        <div className='channel__header' style={{ backgroundImage: `url(${channelDetail.snippet.thumbnails.high.url})` }}>
                            <div className='circle'>
                                <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                            </div>
                        </div>
                        <div className='channel__info'>
                            <h3 className='title'>{channelDetail.snippet.title}</h3>
                            <p className='desc'>{channelDetail.snippet.description}</p>
                            <div className='info'>
                                <span><CiBadgeDollar />{channelDetail.statistics.subscriberCount}</span>
                                <span><CiMedal />{channelDetail.statistics.videoCount}</span>
                                <span><CiRead />{channelDetail.statistics.viewCount}</span>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    );
}

export default Channel;