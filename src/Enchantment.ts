export class Enchantment {
  name: string;
  attribute: string;
  prefix: string;

  constructor(name: string, attribute: string, prefix: string) {
    this.name = name;
    this.attribute = attribute;
    this.prefix = prefix;
  }
}
