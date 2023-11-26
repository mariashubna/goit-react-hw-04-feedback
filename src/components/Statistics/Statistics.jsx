import css from './Statistics.module.css'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (       
         <ul className={css.list}>
           <li className={css.item}>
             <p>Good: {good}</p>
           </li>
           <li className={css.item}>
             <p>Neutral: {neutral}</p>
           </li>
           <li className={css.item}>
             <p>Bad: {bad}</p>
           </li>
           <li className={css.item}>
             <p>Total: {total}</p>
           </li>
           <li className={css.item}>
             <p>Positive feedback: {positivePercentage}%</p>
           </li>
         </ul>        
    )
}
export default Statistics;
