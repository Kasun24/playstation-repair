import {
  AlertOctagon,
  AlertTriangle,
  BatteryCharging,
  Cable,
  Disc,
  Gamepad2,
  HardDrive,
  MonitorOff,
  MousePointerClick,
  Wind,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

/** Maps `icon` names in data/repairs.json to lucide icons. */
export const REPAIR_ICONS: Record<string, LucideIcon> = {
  AlertOctagon,
  AlertTriangle,
  BatteryCharging,
  Cable,
  Disc,
  Gamepad2,
  HardDrive,
  MonitorOff,
  MousePointerClick,
  Wind,
  Wrench,
};

export const repairIcon = (name: string): LucideIcon =>
  REPAIR_ICONS[name] ?? Wrench;
