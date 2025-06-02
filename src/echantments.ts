interface MagicEffect {
  prefix: string;
  attribute: string;
}

export interface MagicBookEntry {
  ice: MagicEffect;
  fire: MagicEffect;
  lifesteal: MagicEffect;
  agility: MagicEffect;
  strength: MagicEffect;
}

export const MAGIC_BOOK: MagicBookEntry[] = [
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
] as const;
