import { describe, it, expect } from "vitest";
import { getOpenStatus } from "../src/lib/open-now";
import { schedule } from "../src/data/hours";
const at = (date: string) => new Date(`${date}+09:00`);
describe("Seoul weekly opening hours", () => {
  it.each([
    ["2026-10-21T09:00:00", false],
    ["2026-10-21T11:00:00", true],
    ["2026-10-22T02:00:00", true],
    ["2026-10-22T03:00:00", false],
    ["2026-10-23T03:00:00", false],
    ["2026-10-24T03:00:00", true],
    ["2026-10-24T04:00:00", false],
    ["2026-10-25T23:00:00", true],
    ["2026-10-26T00:30:00", true],
    ["2026-10-26T02:00:00", false],
    ["2026-10-27T00:00:00", false],
    ["2026-10-27T12:00:00", false],
    ["2026-10-27T23:59:00", false],
    ["2026-10-21T10:30:00", true],
    ["2026-10-22T02:30:00", false],
    ["2026-10-26T01:15:00", false],
  ])("%s open=%s", (date, expected) =>
    expect(getOpenStatus(at(String(date)), schedule).isOpen).toBe(expected),
  );
  it("Friday 3AM belongs to Thursday service, which ended at 2:30AM", () =>
    expect(getOpenStatus(at("2026-10-23T03:00:00"), schedule).isOpen).toBe(
      false,
    ));
  it("closing soon at exactly 60 minutes", () =>
    expect(getOpenStatus(at("2026-10-22T01:30:00"), schedule).closingSoon).toBe(
      true,
    ));
  it("not closing soon at 61 minutes", () =>
    expect(getOpenStatus(at("2026-10-22T01:29:00"), schedule).closingSoon).toBe(
      false,
    ));
  it("Tuesday points to Wednesday opening", () =>
    expect(getOpenStatus(at("2026-10-27T12:00:00"), schedule)).toMatchObject({
      key: "closed",
      day: 3,
      time: 630,
    }));
  it("uses Seoul regardless of Date string offset", () =>
    expect(
      getOpenStatus(new Date("2026-10-21T02:00:00Z"), schedule).isOpen,
    ).toBe(true));
});
