import { Enchantment, MagicEnchantment } from "./MagicEnchantment";

export interface Weapon {
  stats(): string;
}

export class MagicWeapon {
  private enchantment: Enchantment;
  constructor() {
    this.enchantment = new MagicEnchantment("ice");
  }

  public hasEnchantment(): boolean {
    return true;
  }
}
