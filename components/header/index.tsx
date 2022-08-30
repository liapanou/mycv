import Link from "next/link";

export function Header() {
  return (
    <div className="flex border-b px-4 py-6 sticky top-0 bg-white b">
      <h1 className="font-bold  text-2xl">Lia Panou</h1>
      <Link href="#about">
        <a className="ml-auto">About</a>
      </Link>
      <Link href="#services">
        <a className="mx-2">Services</a>
      </Link>
      <Link href="#skills">
        <a className="mx-2">Skills</a>
      </Link>
      <Link href="#portfolio">
        <a className="mx-2">Portfolio</a>
      </Link>
      <Link href="#contact">
        <a className="mx-2">Contact</a>
      </Link>
    </div>
  );
}
