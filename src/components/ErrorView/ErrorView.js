// import PropTypes from 'prop-types';
import errorImage from './errorCat.jpg';
import s from './ErrorView.module.css';

function ErrorView({ texterror }) {
  return (
    <div role="alert" className={s.wrapper}>
      <img src={errorImage} width="550" alt="sadcat" />
      <p texterror={texterror} className={s.text}>
        {texterror}
      </p>
    </div>
  );
}

export default ErrorView;
