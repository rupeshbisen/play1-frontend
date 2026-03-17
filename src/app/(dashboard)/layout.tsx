// Route authentication is enforced by src/middleware.ts, which redirects
// unauthenticated requests to /login before they reach this layout.
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
