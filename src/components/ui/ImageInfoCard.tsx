import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';

type MetaItem = {
  icon: LucideIcon;
  label: string;
};

type ImageInfoCardProps = {
  imageUrl: string;
  imageAlt: string;
  badgeLabel: string;
  badgeClassName: string;
  badgeIcon: LucideIcon;
  topRightLabel: string;
  topRightIcon: LucideIcon;
  title: string;
  value: string;
  metaItems: MetaItem[];
  ctaLabel: string;
};

export default function ImageInfoCard({
  imageUrl,
  imageAlt,
  badgeLabel,
  badgeClassName,
  badgeIcon: BadgeIcon,
  topRightLabel,
  topRightIcon: TopRightIcon,
  title,
  value,
  metaItems,
  ctaLabel,
}: ImageInfoCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
      <div className="relative h-44 overflow-hidden p-4">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
        <span
          className={`relative z-10 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${badgeClassName}`}
        >
          <BadgeIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {badgeLabel}
        </span>
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded bg-zinc-900/80 px-2 py-1 text-xs font-semibold text-white">
          <TopRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {topRightLabel}
        </span>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold leading-tight text-zinc-900">
            {title}
          </h3>
          <span className="text-lg font-bold text-bright-orange">{value}</span>
        </div>

        <div className="mb-5 space-y-2 text-sm text-zinc-500">
          {metaItems.map((item) => {
            const Icon = item.icon;

            return (
              <p
                key={`${item.label}-${Icon.displayName ?? Icon.name}`}
                className="inline-flex items-center gap-2"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </p>
            );
          })}
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-zinc-100 py-3 text-base font-semibold text-zinc-800 transition-colors group-hover:bg-bright-orange group-hover:text-white"
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}
