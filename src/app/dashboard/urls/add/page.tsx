import AddUrlForm from "@/features/urls/components/AddUrlForm";
import { useRequireAuth } from "@/features/auth/hooks/useRequireAuth";

const AddUrlPage = () => {
  useRequireAuth();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <AddUrlForm />
    </div>
  );
};

export default AddUrlPage;
