export type WeeklySchedule = Readonly<
  Record<number, { open: number; close: number } | null>
>;
export const schedule: WeeklySchedule = {
  0: { open: 630, close: 1515 },
  1: null,
  2: null,
  3: { open: 630, close: 1590 },
  4: { open: 630, close: 1590 },
  5: { open: 630, close: 1650 },
  6: { open: 630, close: 1650 },
};
