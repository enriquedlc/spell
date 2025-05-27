import { describe, expect, it } from "vitest";

import { MagicEnchantment } from "./Enchantment";

describe("should get the correct enchantment", () => {
  it("should get the correct enchantment for ice", () => {
    const enchantment = new MagicEnchantment("ice");
    expect(enchantment.prefix).toBe("Icy");
    expect(enchantment.attribute).toBe("+5 ice damage");
  });
});
