import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { TodoDTO } from './dto/todo.dto';


@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) 
        private TodoRepository: Repository<Todo>){}
    

        async showAll(){
            return await this.TodoRepository.find();
        }

        async createData(data: TodoDTO){
            const todoNew = await this.TodoRepository.create(data);
            await this.TodoRepository.save(todoNew)
            return todoNew
        }

    async readPerRecord(id:number){
        return await this.TodoRepository.findOne({where : {id}});
    }

    async updateData(id: number, data: Partial<TodoDTO>){
        await this.TodoRepository.update({ id }, data);
        return await this.TodoRepository.findOne({where : {id}});
    
    }

    async deleteData(id:number){
        await this.TodoRepository.delete({id});
        return { deleted : true}
    }
}
