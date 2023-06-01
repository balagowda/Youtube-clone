import { createStore,applyMiddleware,combineReducers} from "redux";
// import { configureStore } from "@reduxjs/toolkit";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { channelVideosReducer, homeVideosReducer, relatedVideosReducer, searchVideosReducer,subscriptionChannelReducer } from "./reducers/video.reducer";
import { selectedVideosReducer } from "./reducers/video.reducer";
// import { authReducer } from "./reducers/auth.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";

const rootReducer = combineReducers({
    // auth:authReducer,
   homeVideos: homeVideosReducer,
   selectedVideo:selectedVideosReducer,
   channelDetails:channelDetailsReducer,
   commentList:commentListReducer,
   relatedVideos:relatedVideosReducer,
   seachVideos:searchVideosReducer,
   subscriptionChannel:subscriptionChannelReducer,
   channelVideos:channelVideosReducer,

})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;