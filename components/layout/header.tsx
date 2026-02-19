import Link from "next/link";
import { Bolt } from "lucide-react";

function Header() {
  return (
    <header className="sticky top-0">
      <div className="flex container mx-auto py-4">
        <Link href="/" className="flex gap-1 items-center text-lg">
          <Bolt />
          <strong>Tools</strong>{" "}
          <sub>
            <i>Sonahang</i>
          </sub>
        </Link>
      </div>
    </header>
  );
}

export default Header;
