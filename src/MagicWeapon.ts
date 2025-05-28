import { Enchantment, MagicEnchantment } from "./MagicEnchantment";

export interface Weapon {
  stats(): string;
}

export class MagicWeapon {
  private enchantment: Enchantment;
  constructor() {
    throw new Error("Method not implemented.");
  }

  public hasEnchantment(): boolean {
    throw new Error("Method not implemented.");
  }
}
