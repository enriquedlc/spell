import { ENCHANTMENTS } from "./echantments";

interface Enchantment {
  attribute: string;
  prefix: string;
}

export class MagicEnchantment implements Enchantment {
  readonly attribute: string;
  readonly prefix: string;

  constructor(name: string) {
    const enchantment = this.getEnchantmentBy(name);

    this.attribute = enchantment.attribute;
    this.prefix = enchantment.prefix;
  }

  private getEnchantmentBy(name: string): Enchantment {
    return ENCHANTMENTS[0].ice;
  }
}
