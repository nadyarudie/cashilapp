export default function BalanceCard({ balance }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4">
        <h2 className="text-gray-500">Current Balance</h2>
        <p className="text-3xl font-bold">{balance}</p>
      </div>
    );
  }
  