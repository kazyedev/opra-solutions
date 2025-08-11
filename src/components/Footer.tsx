export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-secondary/30 text-sm text-muted-foreground">
      <div className="mx-auto w-full max-w-[1280px] px-6 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Opra Solutions. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:text-primary" href="#">Privacy</a>
          <a className="hover:text-primary" href="#">Terms</a>
          <a className="hover:text-primary" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}


