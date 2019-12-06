import React from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid';
import {
  ZoomOutMap,
  ThumbUp,
  Comment,
  Visibility,
  CloudDownload,
} from '@material-ui/icons';
import {
  ImgGalleryItem,
  Image,
  StatsSection,
  StatsItem,
  FullScreenBtn,
} from './ImageGalleryItem.styled';

const GalleryItem = ({ items, onImgClick }) => (
  <>
    {items &&
      items.map(el => (
        <li key={uuidv1()}>
          <ImgGalleryItem>
            <Image src={el.smallImgURL} alt={el.tags} />
            <StatsSection>
              <StatsItem>
                <ThumbUp />
                {el.likes}
              </StatsItem>
              <StatsItem>
                <Visibility />
                {el.views}
              </StatsItem>
              <StatsItem>
                <Comment />
                {el.comments}
              </StatsItem>
              <StatsItem>
                <CloudDownload />
                {el.downloads}
              </StatsItem>
            </StatsSection>
            <FullScreenBtn
              className="fullscreen-button"
              type="button"
              onClick={() => onImgClick(el.id)}
            >
              <ZoomOutMap />
            </FullScreenBtn>
          </ImgGalleryItem>
        </li>
      ))}
  </>
);

GalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      smallImgURL: PropTypes.string,
      likes: PropTypes.number,
      views: PropTypes.number,
      comments: PropTypes.number,
      downloads: PropTypes.number,
      tags: PropTypes.string,
    }),
  ).isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default GalleryItem;
