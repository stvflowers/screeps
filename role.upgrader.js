/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.upgrader');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(creep) {
        var creep = Game.creeps[creep];
        //console.log('upgarder working ' + creep.name);
        //console.log('creep working state = ' + creep.memory.working);
        //console.log('creep controller ' + creep.room.controller);
        if (creep.memory.working == true) {
            //console.log(creep.upgradeController(creep.room.controller));
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_ENOUGH_RESOURCES){
                creep.memory.working = false;
            }
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){
                creep.moveTo(creep.room.controller);
            }
        } else {
            if (creep.carry.energy == creep.carryCapacity) {
                creep.memory.working = true
                console.log('working memory state change: ' + creep.name + '/true');
            }
            else {
                var source = creep.pos.findClosestByPath(FIND_SOURCES);
                if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(source);
                }
            }
        }
    } //end func
};