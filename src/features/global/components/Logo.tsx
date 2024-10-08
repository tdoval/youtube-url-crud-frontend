import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  src?: string;
}

const Logo = ({ src = "/" }: LogoProps) => {
  return (
    <Link href={src}>
      <div className="size-8 relative shrink-0">
        <Image
          src="/logo.svg"
          alt="YouTube URL CRUD"
          fill
          className="shrink-0 hover:opacity-75 transition"
        />
      </div>
    </Link>
  );
};

export default Logo;
