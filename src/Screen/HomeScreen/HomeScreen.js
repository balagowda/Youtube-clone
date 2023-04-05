import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import Video from "../../components/Video/Video";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../components/Categories/Categories";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonVideo from "../../components/Skeleton/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else dispatch(getVideosByCategory(activeCategory));
  };

  return (
    <Container>
      <Categories />

      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        Loader={
          <div className="spinner-border text-danger d-block max-auto"></div>
        }
        className="row"
      >
        {!loading
          ? videos.map((video) => (
              <Col lg={3} md={4}>
                <Video video={video} key={video.id} />
              </Col>
            ))
          : [...Array(20)].map(() => (
              <Col lg={3} md={4}>
                <SkeletonVideo />
              </Col>
            ))}
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
