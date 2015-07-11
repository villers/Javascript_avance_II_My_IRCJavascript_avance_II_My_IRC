/// <reference path="../all.d.ts" />
import {User} from './user';
export class Room {
	name: string;
	owner: User;
	users: User[];

	constructor(name: string, owner: User) {
		this.name = name;
		this.owner = owner;
		this.users = [];

		this.addUser(owner);
	}

	addUser(user: User): void {
		this.users[user.id] = user;
	}

	getListUser(): any[] {
		var result: any[] = [];
		this.users.forEach((user: any)=> {
			var tmp = {
				id: user.id,
				username: user.username
			};
			result.push(tmp);
		});
		return result;
	}

	getNbUser(): number {
		return Object.keys(this.users).length
	}

	removeUser(id: string): void {
		if (this.users[id]) {
			delete this.users[id];
		}
	}

	toJson(): Object {
		return {
			name: this.name,
			users: this.getListUser()
		};
	}
}
