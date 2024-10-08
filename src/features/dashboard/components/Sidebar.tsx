import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-xl font-bold mb-6">Dashboard Menu</h2>
      <ul>
        <li className="py-2 px-4 hover:bg-gray-700 rounded">Adicionar URL</li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded">Visualizar URLs</li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded">Atualizar URL</li>
        <li className="py-2 px-4 hover:bg-gray-700 rounded">Deletar URL</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
