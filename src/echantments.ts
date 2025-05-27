import { Enchantment } from "./Enchantment";

export const ENCHANTMENTS = [
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

export const getEnchantment = (type: keyof (typeof ENCHANTMENTS)[0]) => {
  return new Enchantment(type, type, type);
};
