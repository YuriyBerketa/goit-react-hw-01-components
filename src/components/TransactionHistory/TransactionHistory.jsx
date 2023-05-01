import PropTypes from "prop-types";
import { TransactionItem } from "./TransactionItem";


export const TransactionHistory = ({data}) => {
    <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        
  <tbody>
    {data.map(({ id, type, amount, currency }) => (
            <TransactionItem
                key={id}
                type={type}
                amount={amount}
                currency={currency}
            />
))}
  </tbody>
</table>
}

TransactionHistory.propTypes = {
    data: PropTypes.array,
}