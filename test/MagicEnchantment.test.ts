import { describe, expect, it } from "vitest";

import { MagicEnchantment } from "../src/MagicEnchantment";

describe("Magic Enchantment", () => {
  it("should get the correct enchantment for ice", () => {
    const enchantment = new MagicEnchantment("ice");
    expect(enchantment.prefix).toBe("Icy");
    expect(enchantment.attribute).toBe("+5 ice damage");
  });
  it("should get the correct enchantment for fire", () => {
    const enchantment = new MagicEnchantment("fire");
    expect(enchantment.prefix).toBe("Inferno");
    expect(enchantment.attribute).toBe("+5 fire damage");
  });
});
