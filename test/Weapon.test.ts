import { describe, expect, it } from "vitest";

import { EnchantedWeapon } from "../src/MagicWeapon";

describe("Weapon", () => {
  it("should have an enchantment", () => {
    const weapon = new EnchantedWeapon();
    expect(weapon.hasEnchantment()).toBeTruthy();
  });
  it("should have the prefix of the enchantment on them", () => {
    const weapon = new EnchantedWeapon();
    expect(weapon.stats()).toContain("Icy");
  });
});
