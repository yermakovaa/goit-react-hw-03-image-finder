// import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button({ onLoadMore }) {
  return (
    <button type="button" className={s.btn} onClick={onLoadMore}>
      Load more
    </button>
  );
}

export default Button;
