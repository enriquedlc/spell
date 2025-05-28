import { ENCHANTMENTS } from "./echantments";

export interface Enchantment {
  attribute: string;
  prefix: string;
}

type EnchantmentName = keyof (typeof ENCHANTMENTS)[0];

export class MagicEnchantment implements Enchantment {
  readonly attribute: string;
  readonly prefix: string;

  constructor(name: EnchantmentName) {
    const enchantment = this.getEnchantmentBy(name);

    this.attribute = enchantment.attribute;
    this.prefix = enchantment.prefix;
  }

  private getEnchantmentBy(name: EnchantmentName): Enchantment {
    return ENCHANTMENTS[0][name];
  }
}
