import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
const TransactionHistory = ({ transactions }) => {
    return (
        <table className={css.transactionsTable}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map((item) => {
                    return <tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                })}</tbody>
        </table>
    )
}
TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired,
};
export default TransactionHistory