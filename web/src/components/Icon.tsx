import {
  Database,
  FlaskConical,
  GraduationCap,
  Landmark,
  LineChart,
  PenLine,
  ShieldCheck,
  SquareCode,
} from "lucide-react";
import type { Service } from "@/content/services";

const map = {
  flask: FlaskConical,
  database: Database,
  chart: LineChart,
  code: SquareCode,
  pen: PenLine,
  shield: ShieldCheck,
  landmark: Landmark,
  graduation: GraduationCap,
};

/** Consistent line-icon wrapper: 1.5px stroke inside a tinted tile. */
export function ServiceIcon({ name, className = "" }: { name: Service["icon"]; className?: string }) {
  const I = map[name];
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 ${className}`}
    >
      <I className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
    </span>
  );
}
