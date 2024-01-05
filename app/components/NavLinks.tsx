import Link from "next/link";

interface Props {
  href: string;
  title: string;
}
export default function NavLinks({ href, title }: Props) {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
