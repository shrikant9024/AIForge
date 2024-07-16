const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#e6e8eb] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
