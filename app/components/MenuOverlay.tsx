import { NavLinksType } from "./NavBar";
import NavLinks from "./NavLinks";

interface Props {
  links: NavLinksType[];
}

export default function MenuOverlay({ links }: Props) {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((item) => (
        <li key={item.title}>
          <NavLinks href={item.path} title={item.title} />
        </li>
      ))}
    </ul>
  );
}
