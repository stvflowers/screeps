
module.exports = {

    run: function(creep) {
        var creep = Game.creeps[creep];
        //console.log('harvester working ' + creep.name);
        if (creep.memory.working == true && creep.carry.energy == 0) {
            creep.memory.working = false;
            console.log('working memory state change: ' + creep.name + '/false');
        } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true;
            console.log('working memory state change: ' + creep.name + '/true');
        } else if (creep.memory.working == false && creep.carry.energy == creep.carryCapacity) {
            creep.memory.working = true
            console.log('working memory state change: ' + creep.name + '/true');
        }

        if (creep.memory.working == true) {
            if (creep.transfer(Game.spawns.Spawn1, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns.Spawn1);
            }
        } else {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
    } //end func
} // end module



