// Footer shell — /site-build-nav replaces this with the full footer.
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto flex flex-wrap gap-x-6 gap-y-2 px-4 py-10 font-mono text-xs text-muted-foreground">
        <span>peira · MIT</span>
        <span>verdicts: pass | fail | error — never conflated</span>
      </div>
    </footer>
  );
}
