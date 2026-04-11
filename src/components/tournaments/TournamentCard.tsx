import type { LucideIcon } from 'lucide-react';
import {
  CalendarDays,
  Dumbbell,
  Flag,
  Gamepad2,
  Globe,
  Goal,
  MapPin,
  Users,
  Volleyball,
} from 'lucide-react';
import ImageInfoCard from '@/src/components/ui/ImageInfoCard';

export type TournamentCategory =
  | 'Basketball'
  | 'Esports'
  | 'Tennis'
  | 'Soccer'
  | 'Golf';

export type Tournament = {
  id: number;
  name: string;
  category: TournamentCategory;
  date: string;
  location: string;
  players: string;
  prize: string;
  imageUrl: string;
};

const categoryStyles: Record<TournamentCategory, string> = {
  Basketball: 'bg-vibrant-purple text-white',
  Esports: 'bg-electric-blue text-white',
  Tennis: 'bg-bright-orange text-white',
  Soccer: 'bg-vibrant-purple text-white',
  Golf: 'bg-bright-orange text-white',
};

const categoryIcons: Record<TournamentCategory, LucideIcon> = {
  Basketball: Volleyball,
  Esports: Gamepad2,
  Tennis: Dumbbell,
  Soccer: Goal,
  Golf: Flag,
};

export default function TournamentCard({
  tournament,
}: {
  tournament: Tournament;
}) {
  const isOnline = tournament.location.toLowerCase().includes('online');

  return (
    <ImageInfoCard
      imageUrl={tournament.imageUrl}
      imageAlt={`${tournament.name} cover image`}
      badgeLabel={tournament.category}
      badgeClassName={categoryStyles[tournament.category]}
      badgeIcon={categoryIcons[tournament.category]}
      topRightLabel={tournament.players}
      topRightIcon={Users}
      title={tournament.name}
      value={tournament.prize}
      metaItems={[
        { icon: CalendarDays, label: tournament.date },
        { icon: isOnline ? Globe : MapPin, label: tournament.location },
      ]}
      ctaLabel="View Details"
    />
  );
}
