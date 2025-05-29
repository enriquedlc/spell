import { describe, expect, it } from "vitest";

import { MagicEnchantment } from "../src/MagicEnchantment";

describe("Magic Enchantment", () => {
  it("enchantment selection should be randomized", () => {
    const enchantment = new MagicEnchantment();
    expect(enchantment.prefix).toBeDefined();
    expect(enchantment.attribute).toBeDefined();
  });
});
