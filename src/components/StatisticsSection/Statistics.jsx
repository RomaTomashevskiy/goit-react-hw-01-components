import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export function Statistics({ title, stats }) {
    return <section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

      <ul className={css.stat_list}>
        {stats.map(stat => <li className={css.item} key={stat.id}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
        </li>
        )}
  </ul>
</section>
};

Statistics.propTypes = {
  title:PropTypes.string.isRequired,
  stat: PropTypes.arrayOf(
    PropTypes.shape({
   label:PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired,
 }))
};


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }



