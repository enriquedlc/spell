import { MagicBookEntry } from "./echantments";
import { Weapon } from "./EnchantedWeapon";

interface Durance {
  weapon: Weapon;
  magicBook: MagicBookEntry[];

  enchant(): void;
  describeWeapon(): void;
}

export class SpellDurance implements Durance {
  weapon: Weapon;
  magicBook: MagicBookEntry[];

  constructor(weapon: Weapon, magicBook: MagicBookEntry[]) {
    this.weapon = weapon;
    this.magicBook = magicBook;
  }

  public enchant() {}

  public describeWeapon() {
    console.log("Dagger of the Nooblet");
    console.log("5 - 10 attack damage");
    console.log("1.2 attack speed");
  }
}
