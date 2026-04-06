import Image from 'next/image';
import Link from 'next/link';

type BrandLogoProps = {
  href?: string;
  className?: string;
  imageClassName?: string;
  textClassName?: string;
  showText?: boolean;
  priority?: boolean;
};

export default function BrandLogo({
  href = '/',
  className,
  imageClassName,
  textClassName,
  showText = true,
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 ${className ?? ''}`.trim()}
      aria-label="Play1 home"
    >
      <Image
        src="/Logo_play1.png"
        alt="Play1 logo"
        width={40}
        height={40}
        priority={priority}
        className={imageClassName}
      />
      {showText ? (
        <span
          className={`bg-linear-to-r from-electric-blue via-deep-indigo to-bright-orange bg-clip-text text-xl font-bold text-transparent ${textClassName ?? ''}`.trim()}
        >
          Play1
        </span>
      ) : null}
    </Link>
  );
}
