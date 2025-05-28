import { Weapon } from "./MagicWeapon";

interface MagicBook {}

interface Durance {
  weapon: Weapon;
  magicBook: MagicBook;

  enchant(): void;
  describeWeapon(): void;
}

class HDurance implements Durance {
  weapon: Weapon;
  magicBook: MagicBook;

  constructor(weapon: Weapon, magicBook: MagicBook) {
    this.weapon = weapon;
    this.magicBook = magicBook;
  }

  public enchant() {
    // Implement here...
  }

  public describeWeapon() {
    // Implement here...
  }
}
