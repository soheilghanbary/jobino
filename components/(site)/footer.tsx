import { ModeToggle } from '@/components/common/mode-toggle';

export function SiteFooter() {
  return (
    <footer className="border-separate border-border/40 border-t">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 px-4 py-2 md:flex-row">
        <p className="font-medium text-xs">
          این سایت توسط{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://soheilghanbary.ir"
            className="font-semibold hover:underline"
          >
            سهیل قنبری
          </a>{' '}
          توسعه داده شده است.
        </p>
        <ModeToggle />
      </div>
    </footer>
  );
}
