import PropTypes from "prop-types";
import { TransactionItem } from "./TransactionItem";


export const TransactionHistory = ({items}) => {
  return (
      <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        
  <tbody>
    {items.map(({ id, type, amount, currency }) => (
            <TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
            />
))}
  </tbody>
</table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array,
}