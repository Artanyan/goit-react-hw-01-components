import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from './statistical-data.json';
import styles from './Statistics.module.css';

const Statistics = ({ title }) => (
    <div className={styles.container}>
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
  
      <ul className={styles.list}>
        {statisticalData.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
  
  
  Statistics.defaultProps = {
    title: '',
  };
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };
  
  function randomColor() {
    return `rgb(${Math.round(Math.random() * 255)},
                ${Math.round(Math.random() * 255,)}, 
                ${Math.round(Math.random() * 255)})`;
  }

export default Statistics;