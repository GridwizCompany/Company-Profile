import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AdminRootPage() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin_logged_in")?.value === "true";

  if (isLoggedIn) {
    redirect("/admin/dashboard");
  } else {
    redirect("/admin/login");
  }
}
