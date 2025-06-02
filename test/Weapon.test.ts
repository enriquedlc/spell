import { describe, expect, it } from "vitest";

import { EnchantedWeapon } from "../src/EnchantedWeapon";

describe("Weapon", () => {
  it("should have the prefix of the enchantment on them", () => {
    const weapon = new EnchantedWeapon();
    expect(weapon.stats()).toContain("Icy");
  });
  it("should not have a repeated enchantment", () => {
    const weapon = new EnchantedWeapon();
    expect(weapon.hasEnchantment()).toBe(true);
    expect(weapon.stats()).not.toContain("Icy Icy");
  });
});
