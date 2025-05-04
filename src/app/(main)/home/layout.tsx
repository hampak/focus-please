import { AuthProvider } from "@/components/providers/AuthProvider";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Focus Please",
  description: "An application that helps users to track how much they focus.",
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check authenticated status on the server-side
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  return (
    <AuthProvider>
      <main>{children}</main>
    </AuthProvider>
  );
}
