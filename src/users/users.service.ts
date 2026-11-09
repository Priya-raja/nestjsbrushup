import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
private users = [
  { "id": "1", "role": "admin",   "name": "Priya Raja",    "email": "priya.raja@example.com" },
  { "id": "2", "role": "manager", "name": "Omar Al-Farsi", "email": "omar.alfarsi@example.com" },
  { "id": "3", "role": "user",    "name": "Sara Khan",     "email": "sara.khan@example.com" },
  { "id": "4", "role": "user",    "name": "James Carter",  "email": "james.carter@example.com" },
  { "id": "5", "role": "INTERN",   "name": "Lina Haddad",   "email": "lina.haddad@example.com" },
  { "id": "6", "role": "manager", "name": "Ahmed Mansour", "email": "ahmed.mansour@example.com" },
  { "id": "7", "role": "user",    "name": "Mei Tanaka",    "email": "mei.tanaka@example.com" },
  { "id": "8", "role": "admin",   "name": "Daniel Okafor", "email": "daniel.okafor@example.com" }
]

findAll(role?: 'INTERN' | 'ADMIN' | 'INTERN_MANAGER') {
  if (role) {
    return this.users.filter(user => user.role.toUpperCase() === role);
  }
  return this.users;

}

findOne(id: string) {
  return this.users.find(user => user.id === id);
}

create(user: {name: string, email: string, role: 'INTERN' | 'ADMIN' | 'INTERN_MANAGER'}) {
  const newUser = { id: (this.users.length + 1).toString(), ...user };
  this.users.push(newUser);
  return newUser;   
}

update(id: string, userUpdate: {name?: string, email?: string, role?: 'INTERN' | 'ADMIN' | 'INTERN_MANAGER'}) {
  const userIndex = this.users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return null; // User not found
  }
  const updatedUser = { ...this.users[userIndex], ...userUpdate };
  this.users[userIndex] = updatedUser;
  return updatedUser;   
}

remove(id: string) {
  const userIndex = this.users.findIndex(user => user.id === id);
  if (userIndex === -1) {
    return null; // User not found
  }
  const removedUser = this.users.splice(userIndex, 1)[0];
  return removedUser;   
 }
 
}
