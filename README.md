Historia:

Durance ha encontrado un libro de magia en una de sus aventuras y ha decidido aprender a encantar sus armas. Debido a la naturaleza inestable de la magia, no está seguro de qué tipo de cosas mágicas sucederán, ¡incluso podría deshacer hechizos anteriores! (Esto ocurre cada 1/10 veces). Intentemos ayudarle.
Descripción

Crea una aplicación que le permita a Durance encantar su arma.

Para esta versión de la kata, sólo se permite un encanto a la vez. Podemos volver a lanzar un hechizo existente, pero hay una probabilidad de 1/10 de que perdamos todos los hechizos actuales del arma.

Ejemplo:

Daga del Nooblet
5 - 10 daño de ataque
1.2 velocidad de ataque

Después de hechizarlo, Durance lanzó el encantamiento 'Fuego'.

Daga Infernal del Nooblet
5 - 10 daño de ataque
1.2 velocidad de ataque
+5 daño del fuego

Al no estar satisfecho, la hechizo de nuevo y esta vez consiguió el encantamiento 'Agilidad'.


Daga Rápida del Nooblet
5 - 10 daño de ataque
1.2 velocidad de ataque
+5 agilidad

Durance se empezó a sentir muy seguro de sí mismo, pensando que podría conseguir algo mejor, y lo intentó de nuevo. Lamentablemente, ¡deshizo sus hechizos!

Daga del Nooblet
5 - 10 daño de ataque
1.2 velocidad de ataque
Reglas

    Sólo un hechizo debe estar "activo" a la vez.
    Para la versión simple, los atributos del hechizo no deben afectar las estadísticas base del arma. Estas se consideran como estadísticas adicionales.
    Las armas hechizadas llevan el prefijo del encantamiento.
    La selección de hechizos debe ser aleatoria.
    No podemos lanzar un hechizo que ya tenemos. Los hechizos siempre deben ser diferentes.
    1/10 probabilidad de perder el hechizo.


Ejemplos

Un hechizo le confiere diferentes atributos a un arma. Para esta kata, podemos elegir entre los siguientes:

{
  "ice": {
    "prefix": "Icy",
    "attribute": "+5 ice damage"
  },
  "fire": {
    "prefix": "Inferno",
    "attribute": "+5 fire damage"
  },
  "lifesteal": {
    "prefix": "Vampire",
    "attribute": "+5 lifesteal"
  },
  "agility": {
    "prefix": "Quick",
    "attribute": "+5 agility"
  },
  "strength": {
    "prefix": "Angry",
    "attribute": "+5 strength"
  }
}
Punto de partida (opcional)
HDurance{
    Weapon weapon;
    MagicBook magicBook;

    public void enchant(){
      // Implement here...
    }

    public String describeWeapon(){
      // Implement here...
       }
  }

  public interface Weapon{
    String stats();
  }
Versión difícil

Ahora Durance puede llevar consigo más armas y cada una de ellas puede tener hasta 3 hechizos únicos. En esta versión, Durance también se preocupa por infligir el mayor daño posible, por lo que el DPS (daño por segundo) también deberá mostrarse.
DPS

Teniendo en cuenta el atributo de agilidad, lo convertimos en un aumento de la velocidad de ataque igual a: attack speed + agility points / 10

El DPS se calcula así: ((Min Weapon Damage + Max Weapon Damage) / 2) / Weapon Speed
Reglas

    Se aplicarán las normas anteriores
    En caso de perder una secuencia de hechizos, sólo se eliminará el último encantamiento.


