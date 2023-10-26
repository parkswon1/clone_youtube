import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

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
        <section id="Subscription">
            <Link to="/subscription">
                <h2>내가 구독한 채널</h2>
            </Link>
            <div className="Subscription__inner overflow">
            <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 6,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1240: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                        1640: {
                            slidesPerView: 9,
                            spaceBetween: 20,
                        },
                        2000: {
                            slidesPerView: 10,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'
                >
                {subscribedChannels.map((channel, key) => (
                    <SwiperSlide key={key}>
                    <div className="Subscription" key={key}>
                        <div className="Subscription__img play__icon">
                            <Link to={`/channel/${channel.channelId}`}>
                                <img src={channel.img} alt={channel.name} />
                            </Link>
                        </div>
                        <div className="Subscription__info">
                            <Link to={`/channel/${channel.channelId}`}>{channel.name}</Link>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Subscription;