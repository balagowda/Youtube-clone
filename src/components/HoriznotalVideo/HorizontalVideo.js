import React, { useEffect, useState } from "react";
import "./_HorizontalVideo.scss";

import { AiFillEye } from "react-icons/ai";
import request from "../../api";

import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HorizontalVideo = ({ video, searchScreen, subScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails,
      resourceId,
    },
  } = video;

  const isVideo = !(id.kind === "youtube#channel" || subScreen);
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) get_video_details();
  }, [id, isVideo]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      })
      setChannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const navigate = useNavigate();

  const _channelId = resourceId?.channelId || channelId;

  const handleClick = () => {
    isVideo
      ? navigate(`/watch/${id.videoId}`)
      : navigate(`/channel/${_channelId}`);
  };

  const thumbnail = !isVideo && "horizontalVideo__thumbnail-channel";

  return (
    <Row
      className="horizontalVideo m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      {/* to refrector grid */}
      <Col
        xs={6}
        md={searchScreen || subScreen ? 4 : 6}
        className="horizontalVideo__left"
      >
        <LazyLoadImage
          src={thumbnails.medium.url}
          effect="blur"
          className={`horizontalVideo__thumbnail ${thumbnail}`}
          wrapperClassName="horizontalVideo__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="horizontalVideo__duration">{_duration}</span>
        )}
      </Col>

      <Col
        xs={6}
        md={searchScreen || subScreen ? 8 : 6}
        className="horizontalVideo__right"
      >
        <p className="horizontalVideo__title mb-1">{title}</p>
        {isVideo && (
          <div className="horizontalVideo__details">
            <AiFillEye /> {numeral(views).format("0.a")} Views •
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {searchScreen || (subScreen && <p className="mt-1 horizontalVideo__description">{description}</p>)}

        <div className="horizontalVideo__channel d-flex align-items-center my-1">
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}
          <p className="mb-0">{channelTitle}</p>
        </div>
        {subScreen && (
          <p className="mt-2">{video.contentDetails.totalItemCount} videos</p>
        )}
      </Col>
    </Row>
  );
};

export default HorizontalVideo;
