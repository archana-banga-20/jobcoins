import { v4 as uuidv4 } from 'uuid';

export function JobCoins () {
	this.address = uuidv4();
	this.coins = 100;
	this.transactions = [];
}

export function Transaction (address, coins, action) {
	this.address = address;
	this.coins = coins;
	this.action = action;
	this.timeStamp = Date.now();
}