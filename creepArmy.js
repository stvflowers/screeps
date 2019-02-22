
// require('creepArmy').creepAttack('Alyssa');

module.exports = {

    creepAttack: function (attackerName) {
        /* moving logic to exports loop due to tick / action limitations
        do {
            var attacker = Game.creeps[attackerName];
            console.log("INF: creep selected for attack: " + attackerName);
            var enemies = attacker.room.find(FIND_HOSTILE_CREEPS);
            console.log("INF: hostile creeps: " + enemies);
            console.log("INF: moving creep to attack: " + attackerName);
            attacker.moveTo(enemies[0]);
            console.log("INF: done moving: " + attackerName);
            attacker.attack(enemies[0]);
            console.log("INF: attack: " + attackerName);

        } while ((attacker.room.find(FIND_HOSTILE_CREEPS)).length > 0);
        */

        Game.creeps[attackerName].memory.state = 'attack';
        return 'done';
    }
}


/*
for (var propName in attacker){
    console.log(attacker[propName]);
}
*/