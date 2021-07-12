import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <div className={styles.container}>
            <table className={styles.transactionsHistory}>
                <thead>
                <tr className={styles.title}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>
        
                <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                    <tr key={id}>
                        <td className={styles.info}>{type}</td>
                        <td className={styles.info}>{amount}</td>
                        <td className={styles.info}>{currency}</td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
      </div>
    );
  };
  
  TransactionHistory.defaultProps = {
    items: [],
  };
  
  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
  

export default TransactionHistory;