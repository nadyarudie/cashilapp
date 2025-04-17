import { PlusCircle } from "lucide-react";

export default function AddTransactionButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow flex items-center"
    >
      <PlusCircle className="mr-2" /> Add
    </button>
  );
}
