import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api'

import Main from '../component/section/Main';
import ReactPlayer from 'react-player';

import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const Video = () => {
    const { videoId } = useParams();
    const [ videoDetail, setVideoDetail ] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
        .then((data) => {
            console.log(data);
            setVideoDetail(data.items[0])
        })
    }, [videoId]);

    return (
        <Main 
            title = "유튜브 비디오 영상"
            description="유튜브 비디오 영상을 볼 수 있습니다.">
            
            <section id='videoViewPage'>
                {videoDetail && (
                    <div className='video__view'>
                        <div className='video__play'>
                            <ReactPlayer 
                                playing={true}
                                url={`https://www.youtube.com/watch?v=${videoId}`} 
                                width='100%' 
                                height='100%' 
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <div className='video__info'>
                            <h2 className='video__title'>
                                {videoDetail.snippet.title}
                            </h2>
                            <div className='video__channel'>
                                <div className='id'>
                                    <Link to='/channel/'>{videoDetail.snippet.channelTitle}</Link>
                                </div>
                                <div className='count'>
                                    <span className='view'><CiRead />{videoDetail.statistics.viewCount}</span>
                                    <span className='like'><CiStar />{videoDetail.statistics.likeCount}</span>
                                    <span className='comment'><CiChat1 />{videoDetail.statistics.commentCount}</span>
                                </div>
                            </div>
                            <div className='video__desc'>
                                {videoDetail.snippet.description}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </Main>
    )
}

export default Video