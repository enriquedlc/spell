import { describe, expect, it } from "vitest";

import { HDurance } from "../src/main";
import { EnchantedWeapon } from "../src/EnchantedWeapon";
import { MAGIC_BOOK } from "../src/echantments";

describe("Main Test Suite", () => {
  it("should show the stats of the weapon", () => {
    const durance = new HDurance(new EnchantedWeapon(), MAGIC_BOOK);
    durance.describeWeapon();
    expect(durance.weapon.stats()).toContain("Dagger of the Nooblet");
  });

  // it("should have a weapon with an enchantment", () => {
  // const durance = new HDurance(new EnchantedWeapon(), MAGIC_BOOK);
  // durance.enchant();
  // expect(durance.weapon.stats()).toContain("Icy");
  // });
});
