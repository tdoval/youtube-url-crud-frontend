import React, { useState } from "react";
import { Check, Pencil, Trash } from "lucide-react";
import { VideoUrl } from "@/features/dashboard/types";
import { Button } from "@/components/ui/button";
import { useUrls } from "@/features/dashboard/hooks/useUrls";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Loader from "@/features/global/components/Loader";

interface UrlSidebarItemProps {
  videoUrl: VideoUrl;
}

const UrlSidebarItem: React.FC<UrlSidebarItemProps> = ({ videoUrl }) => {
  const { deleteUrl, updateUrlName, selectUrl } = useUrls();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [newUrlName, setNewUrlName] = useState(videoUrl.name);
  const { toast } = useToast();

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteUrl(videoUrl.id);
      toast({
        title: `${videoUrl.name} deletado com sucesso!`,
        description: "A URL foi removida da lista.",
        variant: "success",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Erro ao deletar a URL",
        description: "Ocorreu um erro ao deletar a URL, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateUrlName(videoUrl.id, newUrlName);
    setIsEditing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="flex items-center justify-between p-2 border-b border-gray-300">
      <div>
        {isEditing ? (
          <div className="flex items-center space-x-2">
            <Input
              value={newUrlName}
              onChange={(e) => setNewUrlName(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full text-sm"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSave}
              disabled={isLoading}
            >
              {isLoading ? <Loader size="sm" /> : <Check className="w-4 h-4" />}
            </Button>
          </div>
        ) : (
          <div
            className="cursor-pointer group hover:bg-gray-100 p-2 rounded-md transition-colors"
            onClick={() => selectUrl(videoUrl)}
          >
            <p className="font-bold text-sm group-hover:text-red-500 transition-colors">
              {videoUrl.name}
            </p>
            <p className="text-xs text-muted-foreground group-hover:text-red-500 transition-colors">
              {videoUrl.url}
            </p>
          </div>
        )}
      </div>
      {!isEditing && (
        <div className="flex space-x-2">
          <Button variant="ghost" size="sm" onClick={handleEdit}>
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDelete}
            disabled={isLoading}
          >
            <Trash className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default UrlSidebarItem;
