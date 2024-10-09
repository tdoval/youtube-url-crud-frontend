import { ScrollArea } from "@/components/ui/scroll-area";
import UrlManagementItem from "./UrlManagementItem";
import { useUrls } from "@/features/dashboard/hooks/useUrls";
import { useState } from "react";

const UrlManagementList = () => {
  const { urls } = useUrls();
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handleEdit = (id: string) => {
    setEditingItemId(id);
  };

  const handleStopEditing = () => {
    setEditingItemId(null);
  };

  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-4">
        {urls.map((url) => (
          <UrlManagementItem
            key={url.id}
            videoUrl={url}
            isEditing={editingItemId === url.id}
            onEdit={handleEdit}
            onStopEditing={handleStopEditing}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default UrlManagementList;
