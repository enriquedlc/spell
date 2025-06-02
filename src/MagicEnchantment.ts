import { MAGIC_BOOK } from "./echantments";

export interface Enchantment {
  attribute: string;
  prefix: string;
}

type EnchantmentName = keyof (typeof MAGIC_BOOK)[0];

export class MagicEnchantment implements Enchantment {
  readonly attribute: string;
  readonly prefix: string;

  constructor() {
    const enchantment = this.getEnchantment();

    this.attribute = enchantment.attribute;
    this.prefix = enchantment.prefix;
  }

  private getEnchantment(): Enchantment {
    const enchantmentNames = Object.keys(MAGIC_BOOK[0]) as EnchantmentName[];
    const randomName =
      enchantmentNames[Math.floor(Math.random() * enchantmentNames.length)];
    return this.getEnchantmentBy(randomName);
  }

  private getEnchantmentBy(name: EnchantmentName): Enchantment {
    return MAGIC_BOOK[0][name];
  }
}
