import { describe, expect, it, vi } from "vitest";

import { SpellDurance } from "../src/main";
import { EnchantedWeapon } from "../src/EnchantedWeapon";
import { MAGIC_BOOK } from "../src/echantments";

describe("Main Test Suite", () => {
  it("should show the stats of the weapon", () => {
    const durance = new SpellDurance(new EnchantedWeapon(), MAGIC_BOOK);

    const consoleSpy = vi.spyOn(console, "log");
    durance.describeWeapon();
    expect(consoleSpy).toHaveBeenCalledWith("Dagger of the Nooblet");
  });

  it("should have the prefix of the enchantment on them", () => {
    const durance = new SpellDurance(new EnchantedWeapon(), MAGIC_BOOK);
    durance.enchant();
    const echantmentPrefixes = Object.values(MAGIC_BOOK[0]).map(
      (enchantment) => enchantment.prefix
    );
    expect(durance.weapon.stats()).toBeOneOf(echantmentPrefixes);
  });
});
