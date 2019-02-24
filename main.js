
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

module.exports.loop = function () {
    console.log('-----------tick' + Game.spawns.Spawn1.memory.ticks + '---------------------------------');
    var _ = require('lodash');

    // variables
    var harvesters = [];
    var upgraders = [];

    // track for progression
    if (Game.spawns.Spawn1.memory.ticks == null){
        Game.spawns.Spawn1.memory.ticks = 1;
    }
    else {
        Game.spawns.Spawn1.memory.ticks ++;
    }

    // First creep
    if (!(_.some(Game.creeps))){
        require('creepManager').newHarvester1();
    }

    // create creep arrays based on type
    if(_.some(Game.creeps)) {

        _.forEach(Game.creeps, (creep) => {
            var role = creep.memory.role;
            //console.log(creep.name + ' has the role ' + creep.memory.role);
            switch (role) {
                case 'harvester':
                    harvesters.push(creep.name);
                    //console.log(creep.name + ' added to harvesters');
                    break;
                case 'upgrader':
                    upgraders.push(creep.name);
                    //console.log(creep.name + ' added to upgraders');
                    break;
            }
        });

        _.forEach(harvesters, (creep) => {
            roleHarvester.run(creep);
        }); // end harvesting loop

        _.forEach(upgraders, (creep) => {
            roleUpgrader.run(creep);
        }); // end harvesting loop

    }
}




/*
for (let creep in creeps) {
            creep = Game.creeps[creep];
            console.log('name: ' + creep.name);
            console.log('creep type ' + creep.memory.role);
            console.log('working ' + creep.memory.working);
            var role = creep.memory.role;
            switch (role) {
                case 'harvester1':
                    harvesters.push(creep.name);
                    console.log('Added creep to harvesters: ' + creep.name);
            }
        }
 */

//console.log('Creep is: ' + attacker.pos);
//console.log("attacker is in room: " + Game.spawns.Spawn1.room)
//for (let e in enemies) {
//console.log(e.name)
//var enemies = attacker.room.find(Game.HOSTILE_CREEPS);
//console.log("INF: hostile creeps: " + enemies);
//console.log("INF: moving creep to attack: " + attackerName);
//console.log('enemy room position: ' + enemies.pos);
//attacker.attack(enemies)
//attacker.moveTo(e[0]);
/*if (attacker.attack(enemies) == ERR_NOT_IN_RANGE){
    attacker.moveTo(enemies);
}else{
    //console.log("INF: done moving: " + attackerName);
    attacker.attack(enemies);
    //console.log("INF: attack: " + attackerName);
}*/
//}

    /*
            if (Game.spawns.Spawn1.energy >= 200){
                require('creepManager').newWorker2();
            }*/

/*
    var attacker = Game.creeps['Anthony'];

    if (attacker.room.find(Game.HOSTILE_CREEPS)) {
        //console.log("INF: creep selected for attack: " + attackerName);
        // FIND_HOSTILE_CREEPS always returns an array
        var enemies = attacker.room.find(FIND_HOSTILE_CREEPS);
        //attacker.moveTo(enemies[0]);
        if (attacker.attack(enemies[0]) == ERR_NOT_IN_RANGE){
            attacker.moveTo(enemies[0]);
        }


    }
*/

/*
if (!(creep.memory.working)) {
    creep.memory.working = false;
    console.log('init working memory for: ' + name+'/false');
}
*/


/*   GET TYPE

var msgType = typeof creep;
console.log('creep is type of: ' + msgType);


 */