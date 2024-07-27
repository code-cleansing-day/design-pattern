const closestEnemy = () => {
  return {
    position: "x,y",
  };
};

const map = {
  center: {
    x: 0,
    y: 0,
  },
};

abstract class GameAI {
  takeTurn() {
    this.collectResources();
    this.buildStructures();
    this.buildUnits();
    this.attack();
  }
  collectResources() {
    for (const structure of this.buildStructures()) {
      structure.collect();
    }
  }
  abstract buildStructures(): {
    collect(): void;
  };
  abstract buildUnits(): void;
  attack() {
    const enemy = closestEnemy();
    if (!enemy) {
      this.sendScouts(map.center);
    } else {
      this.sendWarriors(enemy.position);
    }
  }
  sendScouts(position: unknown) {}
  sendWarriors(position: unknown) {}
}

class OrcsAI extends GameAI {
  private scouts = [];
  private warriors = [];

  buildStructures() {
    console.log("Building Orc structures");
    return {
      collect() {
        console.log("Collecting Orc resources");
      },
    };
  }
  buildUnits(): void {
    console.log("Building Orc units");
  }
  sendScouts(position: unknown): void {
    if (this.scouts.length > 0) {
      console.log("Sending Orc scouts");
    }
  }
  sendWarriors(position: unknown): void {
    if (this.warriors.length > 5) {
      console.log("Sending Orc warriors" + position);
    }
  }
}

const a = 1;
const b = "2";

class MonstersAI extends GameAI {
  collectResources(): void {
    console.log("Collecting Monsters resources");
  }
  buildStructures(): void {
    console.log("Building Monsters structures");
  }
  buildUnits(): void {
    console.log("Building Monsters units");
  }
}
