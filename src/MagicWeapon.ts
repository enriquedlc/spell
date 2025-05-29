import { Enchantment, MagicEnchantment } from "./MagicEnchantment";

export interface Weapon {
  stats(): string;
}

export class EnchantedWeapon implements Weapon {
  private enchantments: Enchantment[];
  constructor() {
    this.enchantments = [new MagicEnchantment("ice")];
  }
  stats(): string {
    throw new Error("Method not implemented.");
  }

  public hasEnchantment(): boolean {
    return true;
  }
}
