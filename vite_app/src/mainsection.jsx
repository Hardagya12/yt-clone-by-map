import { useState } from 'react'
import './App.css'

const videos = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Bulbuli | Coke Studio Bangla|Season One|Ritu Raj X Nandita",
        views: "1.5M views 2 days ago",
        channel: "Coke Studio Bangla",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Infinix Note 12 : AMOLED Helio G88 SoC!",
        views: "4.2M views 2 days ago",
        channel: "ATC Android ToTo Company",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "My first UX Design case study- This got me my first job.",
        views: "48k views 1 year ago",
        channel: "Saptarshi Prakash",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
        playButton: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png",
        title: "My Mix",
       
        channel: "Lopamudra Mitra, Anupam Royand more",
    
    },
];


const videos1 = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true" ,
        playButton: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png",
        title: "UX Design- What it is and how it works?",
        views: "12,000,000 views",
        channel: "Channel Name",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Mix-Mombati|Mohan Sharif|Dhakiya Dose |Mahib Ahsan ft Anika",
        views: "Amrob, and more",
        channel: "Mohan Sharif Odd Signature Shayan Chaudhary",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "     48 VIDEOSA -FREEE",
        views: "1.7 M Views 1 year ago",
        channel: "Nadir On The Go",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
        playButton: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(6).png",
        title: "14 Advanced Techniques for UX Design",
        views: "53k Views 1 year ago",
        channel: "Mizkoo",
    
    },

];


const videos2 = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
    
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
        playButton: "https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/Ellipse%204%20(4).png",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
    
    },

];


const Videosection = () => {


    return (
        <>
            <div className="all">




                <div className="main-content">

                    <div className="row">
                        {videos.map((video,  index) => (
                            <div className="video" key={index}>
                                <img style={{
                                    width:'370px',

                                }} src={video.thumbnail } alt="Video Thumbnail" />
                                <div className="cpy">
                                    <div className="play-btn">
                                        <img style={
                                            {
                                                width:'45px',
                                                height:'45px',
                                                marginTop:'.5vh'
                                            }
                                        } src={video.playButton} alt="" />
                                    </div>
                                    <div className="cpy2">
                                        <div className="title">{video.title}</div>
                                        <div className="channel">{video.channel}</div>
                                        {/* <div className="cpy1"> */}
                                            <div className="views">{video.views}</div>
                                            <div className="date">{video.date}</div>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    

                    <div className="row">
                        {videos1.map((video, index) => (
                            <div className="video" key={index}>
                                <img  style={{
                                    width:'370px',
                                    
                                }} src={video.thumbnail} alt="Video Thumbnail" />
                                <div className="play-btn">
                                    <img style={
                                            {
                                                width:'45px',
                                                height:'45px',
                                                marginTop:'.5vh'
                                            }
                                        } src={video.playButton} alt="Play Button" />
                                </div>
                                <div className="title1">{video.title}</div>
                                <div className="channel">{video.channel}</div>
                                {/* <div className='cpy2'> */}
                                <div className="views">{video.views}</div>
                            
                                <div className="date">{video.date}</div>
                                {/* </div> */}
                            </div>
                        ))}
                    </div>

                    <hr />

                    <div className="row">
                        {videos2.map((video, index) => (
                            <div className="video" key={index}>
                                <img  style={{
                                    width:'370px',
                                    
                                }} src={video.thumbnail} alt="Video Thumbnail" />
                                <div className="play-btn">
                                    <img style={
                                            {
                                                width:'45px',
                                                height:'45px',
                                                marginTop:'.5vh'
                                            }
                                        } src={video.playButton} alt="Play Button" />
                                </div>
                                <div className="title2">{video.title}</div>
                                <div className="channel">{video.channel}</div>
                                {/* <div className='cpy3'> */}
                                <div className="views">{video.views}</div>
                              
                                <div className="date">{video.date}</div>
                                {/* </div> */}
                            </div>
                        ))}
                    </div>

                </div>









            </div >
        </>

    )

}

export default Videosection;