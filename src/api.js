import axois from 'axios';

const request = axois.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3/",
    params:{
        key:"AIzaSyDrh1gzUh-oXWRG3jQVRnbAwscpLi-L9bU",
    }
    
});

export default request;
//process.env.REACT_APP_YT_API_KEY