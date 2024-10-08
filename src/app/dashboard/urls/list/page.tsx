import UrlList from "@/features/urls/components/UrlList";
import { useRequireAuth } from "@/features/auth/hooks/useRequireAuth";

const UrlListPage = () => {
  useRequireAuth();

  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <UrlList />
    </div>
  );
};

export default UrlListPage;
