import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../component/section/Main'

import VideoSearch from '../component/video/VideoSearch'

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null);
    
    const fetchVideos = (query, pageToken = '') => {
        const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
        const maxResults = 48;
        const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&type=video&key=${apiKey}&pageToken=${pageToken}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((result) => {
                setVideos((prevVideos) => [...prevVideos, ...result.items]);
                setNextPageToken(result.nextPageToken);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    useEffect(() => {
        fetchVideos(searchId);
    }, [searchId]);

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    };


    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage'>
                <h2>🤠 <em>{searchId}</em> 검색 결과입니다.</h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더 보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search