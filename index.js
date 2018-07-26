import express from 'express';
import io from 'socket.io';

const app = express();

let players = [];
let turns = 0;

let ships = [
  {'type': 'Aircaft', 'size': 5, 'sunk': false, 'available': 1, 'location' : []},
		{'type': 'Battleship', 'size': 4, 'sunk': false, 'available': 1, 'location' : []},
		{'type': 'Destroyer', 'size': 3, 'sunk': false, 'available': 1, 'location' : []},
		{'type': 'Submarine', 'size': 3, 'sunk': false, 'available': 1, 'location' : []},
		{'type': 'Patrolboat', 'size': 2, 'sunk': false, 'available': 1, 'location' : []}
];

// socket.on('connection', (socket)=> {
//   let id = socket.id;
//   if(players.length >= 2) {
//     socket.emit('Room is full', true);
//     return;
//   }


// })

// socket.on('place', (ship) => {
//   updateShip(socket.id, ship, () => {
//     // noop
//   })
// })