import css from './FeedbackOptions.module.css'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
      <ul className={css.list}>
        {options.map(option => (
          <li className={css.item} key={option}>
            <button className={css.btn} onClick={() => onLeaveFeedback(option)}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
          </li>
        ))}
      </ul>
  );
};
export default FeedbackOptions;
