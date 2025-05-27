import { describe, expect, it } from "vitest";

import { getEnchantment } from "./getEnchantment";

describe("should get the correct enchantment", () => {
  it("should get the correct enchantment for ice", () => {
    const enchantment = getEnchantment("ice");
    expect(enchantment.prefix).toBe("Icy");
    expect(enchantment.attribute).toBe("+5 ice damage");
  });
});
