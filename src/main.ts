const enchantments = [
  {
    ice: {
      prefix: "Icy",
      attribute: "+5 ice damage",
    },
    fire: {
      prefix: "Inferno",
      attribute: "+5 fire damage",
    },
    lifesteal: {
      prefix: "Vampire",
      attribute: "+5 lifesteal",
    },
    agility: {
      prefix: "Quick",
      attribute: "+5 agility",
    },
    strength: {
      prefix: "Angry",
      attribute: "+5 strength",
    },
  },
];

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

interface Weapon {
  stats(): string;
}
