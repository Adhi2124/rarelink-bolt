import { Users, LampCeiling, ShowerHead, Pipette, LayoutGrid, Refrigerator, Plug, AlignLeft as AlignTop, Hammer, PaintBucket, Ruler, PencilRuler, Package, BadgeCheck, CalendarClock, HeartHandshake, Tag } from "lucide-react";

interface IconComponentProps {
  name: string;
  className?: string;
}

export function IconComponent({ name, className }: IconComponentProps) {
  const iconMap: Record<string, React.FC<{ className?: string }>> = {
    "users": Users,
    "lamp-ceiling": LampCeiling,
    "shower-head": ShowerHead,
    "pipette": Pipette,
    "layout-grid": LayoutGrid,
    "refrigerator": Refrigerator,
    "plug": Plug,
    "align-top": AlignTop,
    "hammer": Hammer,
    "paint-bucket": PaintBucket,
    "ruler": Ruler,
    "pencil-ruler": PencilRuler,
    "package": Package,
    "badge-check": BadgeCheck,
    "calendar-clock": CalendarClock,
    "heart-handshake": HeartHandshake,
    "tag": Tag,
  };

  const Icon = iconMap[name] || Users;

  return <Icon className={className} />;
}