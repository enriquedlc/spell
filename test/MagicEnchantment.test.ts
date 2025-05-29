import { describe, expect, it } from "vitest";

import { MagicEnchantment } from "../src/MagicEnchantment";

describe("Magic Enchantment", () => {
  it("should randomly set the enchantment", () => {
    const enchantment = new MagicEnchantment();
    expect(enchantment.prefix).toBeDefined();
    expect(enchantment.attribute).toBeDefined();
  });
});
