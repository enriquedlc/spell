import { describe, expect, it } from "vitest";

import { MagicWeapon } from "../src/MagicWeapon";

describe("Weapon", () => {
  it("should have an enchantment", () => {
    const weapon = new MagicWeapon();
    expect(weapon.hasEnchantment()).toBeTruthy();
  });
});
