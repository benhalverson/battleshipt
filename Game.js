export const settings = {};
export const gameWorld = {};

settings.availableShips = [
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

settings.player1 = 0;
settings.player2 = 1;
settings.cpu = 2;

settings.empty = 0;
settings.ship = 1;
settings.miss = 2;
settings.hit = 3;
settings.sunk = 4;

gameWorld.grid = {};
gameWorld.ships = [];
gameWorld.shipTiles = [];
gameWorld.previewTiles = [];
gameWorld.selectedShipType = settings.availableShips[4];
gameWorld.selectedShipRotation = 1;
