import Navbar from '../components/Navbar';
import UserProfileButton from '../components/UserProfileButton';
import BalanceCard from '../components/BalanceCard';
import TransactionHistory from '../components/TransactionHistory';
import AddTransactionButton from '../components/AddTransactionButton';
import IncomeOutcomeChart from '../components/IncomeOutcomeChart';

const transactions = [
  { title: 'Salary', amount: 'Rp 3,000,000', type: 'income' },
  { title: 'Coffee', amount: 'Rp 25,000', type: 'outcome' },
  { title: 'Books', amount: 'Rp 150,000', type: 'outcome' },
];

const chartData = [
  { name: 'Jan', income: 400, outcome: 240 },
  { name: 'Feb', income: 300, outcome: 139 },
  { name: 'Mar', income: 200, outcome: 980 },
  { name: 'Apr', income: 278, outcome: 390 },
  { name: 'May', income: 189, outcome: 480 },
  { name: 'Jun', income: 239, outcome: 380 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-lg mx-auto px-6 py-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <Navbar />
          <UserProfileButton />
        </div>

        {/* Main Grid: Left = balance & history, Right = chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Kiri */}
          <div className="col-span-1 flex flex-col justify-between relative min-h-[500px]">
            <div className="space-y-4">
              <BalanceCard balance="Rp 2,500,000" />
              <TransactionHistory transactions={transactions} />
            </div>
            <div className="absolute bottom-0 left-0">
              <AddTransactionButton />
            </div>
          </div>

          {/* Kanan */}
          <div className="col-span-2">
            <IncomeOutcomeChart data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
}
