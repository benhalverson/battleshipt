import Ship from './Ship';


class Game{
  constructor() {
    this.settings = {};
    this.gameWorld = {};
    this.settings.availableShips = [
      {
        'type': 'carrier',
        'size': 5,
        'max': 1
      },
      {
        'type': 'battleship',
        'size': 4,
        'max': 1
      },
      {
        'type': 'destroyer',
        'size': 3,
        'max': 1
      },
      {
        'type': 'submarine',
        'size': 3,
        'max': 1
      },
      {
        'type': 'patrolboat',
        'size': 2,
        'max': 1
      }
    ];

this.settings.player1 = 0;
this.settings.player2 = 1;
this.settings.cpu = 2;

this.settings.empty = 0;
this.settings.ship = 1;
this.settings.miss = 2;
this.settings.hit = 3;
this.settings.sunk = 4;

this.gameWorld.grid = {};
this.gameWorld.ships = [];
this.gameWorld.shipTiles = [];
this.gameWorld.previewTiles = [];
this.gameWorld.selectedShipType = settings.availableShips[4];
this.gameWorld.selectedShipRotation = 1;
}
  placeShip(tile, position) {
    if(maxAmountOfShipType()) {
      return;
    }
  
    let ship = new Ship(gameWorld.selectedShipType, position);
  }
}

class _Tile extends Game {
  super()
  constructor(posX, posY, id) {
    this.pos = {x: posX, y: posY};
    this.id = id;
    this.clicked = false;
  }

  grid() {
   // create grid 
  }

  tileTaken() {
    let taken = false;
    for(let i = 0; i < gameWorld.selectedShipType.size; i++) {
      if(gameWorld.shipTiles.indexOf(tile[i]) !== -1) {
        taken = true;
      }
    }
    return taken;
  }

  shipOutofWorld(position) {
    switch (gameWorld.selectedShipRotation) {
      case 0:
        return this.pos.y + this.gameWorld.selectedShipRotation.size > 15;
        break;
      case 1:
        return this.pos.x + this.gameWorld.selectedShipRotation.size > 15;
        break;
    }
  }
}