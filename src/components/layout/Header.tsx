// Header shell — /site-build-nav replaces this with the full navigation.
export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <a href="/" className="font-mono text-sm font-semibold tracking-widest">
          PEIRA<span className="text-pass">(✓)</span>
        </a>
        <span className="eyebrow">v0.2</span>
      </div>
    </header>
  );
}
