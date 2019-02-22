


module.exports = {

    //Create new worker with WORK,CARRY,MOVE
    newHarvester1: function(){

        var newCreep = Game.spawns.Spawn1.createCreep([WORK,CARRY,MOVE]);
        if (newCreep == -6){
            console.log('ERR: creep not created, not enough energy');
            return 'err' ;
        }
        else if (newCreep == -4){
            console.log('ERR: creep not created, spawn1 busy');
            return 'err' ;

        }
        console.log("New worker1 creep created: " + newCreep);
        Game.creeps[newCreep].memory.working = false;
        console.log("Creep working memory init: " + newCreep + '/false');
        Game.creeps[newCreep].memory.role = 'harvester';
        console.log("Creep type memory init: " + newCreep + '/worker1');
        return 'done';

    },

    newUpgrader: function(){

        var newCreep = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE]);
        if (newCreep == -6){
            console.log('ERR: creep not created, not enough energy');
            return 'err' ;
        }
        else if (newCreep == -4){
            console.log('ERR: creep not created, spawn1 busy');
            return 'err' ;

        }
        console.log("New worker1 creep created: " + newCreep);
        Game.creeps[newCreep].memory.working = false;
        console.log("Creep working memory init: " + newCreep + '/false');
        Game.creeps[newCreep].memory.role = 'upgrader';
        console.log("Creep type memory init: " + newCreep + '/worker1');
        return 'done';

    },

    newAttacker1: function() {

        var newCreep = Game.spawns.Spawn1.createCreep([ATTACK,MOVE]);
        console.log("New attacker1 creep created: " + newCreep);
        Game.creeps[newCreep].memory.state = 'idle';
        console.log("Creep state memory init: " + newCreep + '/idle');

    }


}

