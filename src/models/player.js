function Player(){

}

var p = Player.prototype

	p.credits = 1000
	p.ship = {
		name: "Obetreus",
		type: "Shuttle",
		cargo: 3,
		speed: 1,
		energy: 3
	}

module.exports = Player