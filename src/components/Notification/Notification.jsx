import css from './Notification.module.css'
const Notification = ({ message }) => {
  return <p className={css.msg}>{message}</p>;
};
export default Notification;
