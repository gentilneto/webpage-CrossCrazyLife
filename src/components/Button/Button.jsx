import styles from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ children, variant = 'primary', ...props }) {
  const buttonClass = `${styles.button} ${styles[variant]}`;
  
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};
