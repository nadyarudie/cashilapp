export default function TransactionHistory({ transactions }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 relative">
        <h2 className="text-gray-500 mb-4">Transaction History</h2>
        <ul className="space-y-2">
          {transactions.map((item, idx) => (
            <li key={idx} className="flex justify-between">
              <span>{item.title}</span>
              <span className={item.type === 'income' ? 'text-green-500' : 'text-red-500'}>
                {item.type === 'income' ? '+' : '-'} {item.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  