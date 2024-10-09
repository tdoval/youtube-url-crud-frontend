import { useState } from "react";
import { Pencil, Trash, Check } from "lucide-react";
import { VideoUrl } from "@/features/dashboard/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUrls } from "@/features/dashboard/hooks/useUrls";
import { useToast } from "@/hooks/use-toast";

interface UrlManagementItemProps {
  videoUrl: VideoUrl;
  isEditing: boolean;
  onEdit: (id: string) => void;
  onStopEditing: () => void;
}

const UrlManagementItem: React.FC<UrlManagementItemProps> = ({
  videoUrl,
  isEditing,
  onEdit,
  onStopEditing,
}) => {
  const { updateUrlName, updateUrl, deleteUrl } = useUrls();
  const [newUrlName, setNewUrlName] = useState(videoUrl.name);
  const [newUrl, setNewUrl] = useState(videoUrl.url);
  const { toast } = useToast();

  const handleDelete = async () => {
    try {
      await deleteUrl(videoUrl.id);
      toast({
        title: "URL deletada",
        description: `A URL "${videoUrl.name}" foi deletada com sucesso.`,
        variant: "success",
      });
    } catch (error) {
      toast({
        title: "Erro ao deletar a URL",
        description: `Ocorreu um erro ao deletar a URL "${videoUrl.name}".`,
        variant: "destructive",
      });
      console.error("Erro ao deletar a URL:", error);
    }
  };

  const handleSaveName = async () => {
    try {
      await updateUrlName(videoUrl.id, newUrlName);
      toast({
        title: "Nome atualizado",
        description: `O nome da URL foi atualizado para "${newUrlName}".`,
        variant: "success",
      });
      onStopEditing();
    } catch (error) {
      toast({
        title: "Erro ao atualizar o nome",
        description: `Ocorreu um erro ao atualizar o nome da URL para "${newUrlName}".`,
        variant: "destructive",
      });
      console.error("Erro ao atualizar o nome:", error);
    }
  };

  const handleSaveUrl = async () => {
    try {
      await updateUrl(videoUrl.id, newUrl);
      onStopEditing();
    } catch (error) {
      console.error("Erro ao atualizar a URL:", error);
    }
  };

  if (!isEditing) {
    return (
      <div className="flex items-start justify-between p-4 border-b border-gray-300 bg-white rounded">
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="font-bold text-sm">{videoUrl.name}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(videoUrl.id)}
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-xs text-muted-foreground">{videoUrl.url}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(videoUrl.id)}
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={handleDelete}>
          <Trash className="w-4 h-4" />
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 border-b border-gray-300 bg-white rounded">
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <Input
            value={newUrlName}
            onChange={(e) => setNewUrlName(e.target.value)}
            className="text-sm"
          />
          <Button variant="ghost" size="sm" onClick={handleSaveName}>
            <Check className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex justify-between items-center mt-2">
          <Input
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            className="text-sm"
          />
          <Button variant="ghost" size="sm" onClick={handleSaveUrl}>
            <Check className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UrlManagementItem;
