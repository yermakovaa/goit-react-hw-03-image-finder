// import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
  return (
    <li className={s.item}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className={s.image}
        onClick={onOpenModal}
      />
    </li>
  );
}

export default ImageGalleryItem;
