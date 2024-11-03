import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
 const {type, amount, currency} = items;
 
    return (
      <table className={s.table}>
        <thead >
          <tr className={s.tableHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
            {items.map((item) => {
                return (
                <tr key={item.id}>
                    <td className={s.alignColumn}>{item.type}</td>
                    <td className={s.alignColumn}>{item.amount}</td>
                    <td>{item.currency}</td>
                  </tr>)
            })}
          
          
        </tbody>
      </table>
    
  );
};

export default TransactionHistory;