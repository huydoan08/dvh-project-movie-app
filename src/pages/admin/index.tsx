import { AdminMain, AdminSideBar } from "src/modules/admin";

export default function AdminPage() {
  return (
    <div className="flex h-screen -mt-10 -mb-20">
      <AdminSideBar/>
      <AdminMain/>
    </div>
  );
}
