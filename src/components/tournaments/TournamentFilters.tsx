import { CalendarDays, Gamepad2, MapPin, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Option = {
  value: string;
  label: string;
};

type TournamentFiltersProps = {
  sports: Option[];
  cities: Option[];
  dateRanges: Option[];
};

function SelectWithIcon({
  icon: Icon,
  ariaLabel,
  options,
}: {
  icon: LucideIcon;
  ariaLabel: string;
  options: Option[];
}) {
  return (
    <div className="relative min-w-36">
      <Icon
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
        aria-hidden="true"
      />
      <select
        aria-label={ariaLabel}
        className="w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-100 py-3 pl-11 pr-9 text-sm font-semibold text-zinc-700"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400"
        aria-hidden="true"
      >
        ▾
      </span>
    </div>
  );
}

export default function TournamentFilters({
  sports,
  cities,
  dateRanges,
}: TournamentFiltersProps) {
  return (
    <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative min-w-64 grow">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search by tournament name or sport..."
            className="w-full rounded-xl border border-zinc-200 bg-zinc-100 py-3 pl-11 pr-4 text-sm text-zinc-700 placeholder:text-zinc-500"
            aria-label="Search tournaments"
          />
        </div>

        <SelectWithIcon icon={Gamepad2} ariaLabel="Sport" options={sports} />
        <SelectWithIcon icon={MapPin} ariaLabel="City" options={cities} />
        <SelectWithIcon
          icon={CalendarDays}
          ariaLabel="Date range"
          options={dateRanges}
        />
      </div>
    </section>
  );
}
