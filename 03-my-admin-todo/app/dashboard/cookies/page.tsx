import { cookies } from "next/headers";
import { TabBar } from "../../../components/TabBar";
export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const cookieTab = cookieStore.get("selectedTab")?.value || "1"; // En algún momento son nulas.

  const allCookies = cookieStore.getAll();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <div className="flex flex-col gap-10">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={+cookieTab} />
        {JSON.stringify(allCookies)}
      </div>
    </div>
  );
}
