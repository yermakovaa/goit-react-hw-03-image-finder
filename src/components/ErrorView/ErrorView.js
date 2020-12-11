// import PropTypes from 'prop-types';
import errorImage from './oops.jpg';
import s from './ErrorView.module.css';

function ErrorView({ text }) {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={errorImage} width="550" alt="sadcat" />
      <p text={text} className={s.text}>
        {text}
      </p>
    </div>
  );
}

export default ErrorView;
