import { Controller, Get, Param, Post,Body, Patch, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service.js'; 
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get() //GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'INTERN_MANAGER')
    {
        return this.usersService.findAll(role);
    }

     @Get('interns') //GET /users/interns
    findAllInterns()
    {
        return this.usersService.findAll('INTERN');
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string)
    {
        return this.usersService.findOne(id);
    }

    @Post() //POST /users
    create(@Body() user: {name: string, email: string, role: 'INTERN' | 'ADMIN' | 'INTERN_MANAGER'})
    {
        return this.usersService.create(user);
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id') id: string, @Body() userUpdate: {
        name?: string, email?: string, role?: 'INTERN' | 'ADMIN' | 'INTERN_MANAGER'
    }){
        return this.usersService.update(id, userUpdate);
    }
  
    @Delete(':id') //DELETE /users/:id
    remove(@Param('id') id: string)
    {
        return this.usersService.remove(id);
    }
   
}
