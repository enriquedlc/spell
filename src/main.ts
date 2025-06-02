import { MagicBookEntry } from "./echantments";
import { Weapon } from "./EnchantedWeapon";

interface MagicBook {}

interface Durance {
  weapon: Weapon;
  magicBook: MagicBookEntry[];

  enchant(): void;
  describeWeapon(): void;
}

export class HDurance implements Durance {
  weapon: Weapon;
  magicBook: MagicBookEntry[];

  constructor(weapon: Weapon, magicBook: MagicBookEntry[]) {
    this.weapon = weapon;
    this.magicBook = magicBook;
  }

  public enchant() {
    
  }

  public describeWeapon() {
    // Implement here...
  }
}
