"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg text-sm font-semibold ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Top Bar */}
      <div className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Collision SS Admin</h1>
      </div>

      <div className="flex">

        {/* Sidebar */}
        <div className="w-64 bg-white border-r min-h-screen p-6 space-y-3">

          <Link href="/admin/inquiries" className={linkClass("/admin/inquiries")}>
            Shop Inquiries
          </Link>

          <Link href="/admin/parts" className={linkClass("/admin/parts")}>
            Parts Requests
          </Link>

        </div>

        {/* Content */}
        <div className="flex-1 p-10">
          {children}
        </div>

      </div>
    </div>
  );
}