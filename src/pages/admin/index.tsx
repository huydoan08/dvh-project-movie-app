import AdminMain from "src/modules/admin/component/admin-main";
import AdminSideBar from "src/modules/admin/component/admin-side-bar";

export default function AdminPage() {
  return (
    <div className="flex h-screen -mt-10 -mb-20">
      <AdminSideBar />
      <AdminMain />
    </div>
  );
}
