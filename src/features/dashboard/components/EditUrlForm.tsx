import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUrls } from "@/features/dashboard/hooks/useUrls";
import { useToast } from "@/hooks/use-toast";

interface EditUrlFormProps {
  onClose: () => void;
}

const EditUrlForm: React.FC<EditUrlFormProps> = ({ onClose }) => {
  const { currentUrl, updateUrl, updateUrlName } = useUrls();
  const [name, setName] = useState(currentUrl?.name || "");
  const [url, setUrl] = useState(currentUrl?.url || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      if (name !== currentUrl?.name) {
        if (currentUrl?.id) {
          await updateUrlName(currentUrl.id, name);
        }
      }
      if (url !== currentUrl?.url) {
        if (currentUrl?.id) {
          await updateUrl(currentUrl.id, url);
        }
      }
    } catch (error) {
      console.error("Erro ao atualizar a URL ou nome:", error);
      onClose();
      toast({
        title: "Erro ao atualizar a URL",
        description: "Ocorreu um erro ao atualizar a URL, tente novamente.",
        variant: "destructive",
      });
    } finally {
      onClose();
      setIsSubmitting(false);
      toast({
        title: `URL atualizada com sucesso`,
        description: `URL atualizada para ${name} - ${url}`,
        variant: "success",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">URL</label>
        <Input value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <div className="flex justify-end space-x-4">
        <Button variant="ghost" onClick={onClose} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} disabled={isSubmitting}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default EditUrlForm;
