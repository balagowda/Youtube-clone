import "./_subscriptionScreen.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../redux/actions/videos.action";
import { Container } from "react-bootstrap";
import HorizontalVideo from "../../components/HoriznotalVideo/HorizontalVideo";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SubscriptionScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  const { loading, videos } = useSelector((state) => state.subscriptionChannel);

  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => <HorizontalVideo video={video} key={video.id} subScreen />)
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
}

export default SubscriptionScreen;
