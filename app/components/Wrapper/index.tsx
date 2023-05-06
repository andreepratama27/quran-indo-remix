export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 bg-violet-100">
      <div className="mt-20"></div>

      {children}
    </div>
  );
}
