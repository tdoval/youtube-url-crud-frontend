"use client";
import { useState } from "react";
import Logo from "@/features/global/components/Logo";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Modal from "@/features/global/components/Modal";
import AddUrlForm from "@/features/dashboard/components/AddUrlForm";
import UrlManagementList from "@/features/dashboard/components/UrlManagementList";
import ActionMenu from "@/features/dashboard/components/ActionMenu";
import UserMenu from "@/features/dashboard/components/UserMenu";
import { useAuth } from "@/features/auth/hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isManageModalOpen, setManageModalOpen] = useState(false);

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openManageModal = () => setManageModalOpen(true);
  const closeManageModal = () => setManageModalOpen(false);

  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
      <Logo src={"/dashboard"} />
      <div className="w-full flex items-center gap-x-1 h-full">
        <Link className="text-lg font-bold" href={"/"}>
          YT URL CRUD
        </Link>
        <Separator orientation="vertical" className="mx-2" />
        <ActionMenu
          openAddModal={openAddModal}
          openManageModal={openManageModal}
        />
        <div className="ml-auto flex items-center">
          <UserMenu user={user} logout={logout} />
        </div>
      </div>
      {/* Modals */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={closeAddModal}
        title="Add URL"
        description="Add a new video URL"
      >
        <AddUrlForm closeModal={closeAddModal} />
      </Modal>
      <Modal
        isOpen={isManageModalOpen}
        onClose={closeManageModal}
        title="Manage URLs"
        description="Edit, delete or view your saved URLs"
      >
        <UrlManagementList />
      </Modal>
    </nav>
  );
};

export default Navbar;
