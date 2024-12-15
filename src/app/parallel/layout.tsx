export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen px-4">
      {children}
      {team}
      {analytics}
    </main>
  );
}
