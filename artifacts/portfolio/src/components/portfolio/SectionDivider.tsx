export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={"flex items-center justify-center py-4 " + className}>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-primary/20" />
      <div className="mx-4 relative w-3 h-3">
        <div className="absolute inset-0 bg-primary/40 rotate-45" />
        <div className="absolute inset-[2px] bg-background rotate-45" />
        <div className="absolute inset-[4px] bg-primary/60 rotate-45" />
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-secondary/20" />
    </div>
  );
}
