import { UserCircle2 } from "lucide-react";

export default function UserProfileButton({ onClick }) {
  return (
    <button onClick={onClick} className="text-gray-500 hover:text-gray-700">
      <UserCircle2 className="w-8 h-8" />
    </button>
  );
}
