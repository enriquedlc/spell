import { Enchantment, MagicEnchantment } from "./MagicEnchantment";

export interface Weapon {
  stats(): string;
}

export class EnchantedWeapon implements Weapon {
  private enchantments: Enchantment[];

  constructor() {
    this.enchantments = [new MagicEnchantment()];
  }
  stats(): string {
    return "";
  }

  public hasEnchantment(): boolean {
    return true;
  }
}
