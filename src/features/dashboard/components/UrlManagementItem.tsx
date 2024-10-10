import { useState } from "react";
import { Pencil, Trash } from "lucide-react";
import { VideoUrl } from "@/features/dashboard/types";
import { Button } from "@/components/ui/button";
import { useUrls } from "@/features/dashboard/hooks/useUrls";
import { useToast } from "@/hooks/use-toast";
import Modal from "@/features/global/components/Modal";
import EditUrlForm from "@/features/dashboard/components/EditUrlForm";

interface UrlManagementItemProps {
  videoUrl: VideoUrl;
}

const UrlManagementItem: React.FC<UrlManagementItemProps> = ({ videoUrl }) => {
  const { deleteUrl } = useUrls();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
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

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="flex flex-col items-start justify-between p-4 border-b border-gray-300 bg-white rounded">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <p className="font-bold text-sm">{videoUrl.name}</p>
        </div>
        <Button variant="ghost" size="sm" onClick={handleDelete}>
          <Trash className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center justify-between w-full mt-2">
        <p className="text-xs text-muted-foreground">{videoUrl.url}</p>
        <Button variant="ghost" size="sm" onClick={handleEdit} className="ml-2">
          <Pencil className="w-4 h-4" />
        </Button>
      </div>

      <Modal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        title="Editar URL"
        description={`Edite o nome ou a URL de ${videoUrl.name}`}
      >
        <EditUrlForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default UrlManagementItem;
