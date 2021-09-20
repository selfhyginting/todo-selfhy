import { Body, Controller, Delete, Get, Param, Post, Put, Render } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './dto/todo.dto';
@Controller('todo')
export class TodoController {

    constructor(private TodoService: TodoService){

    }

    @Get('jsondata')
    async lihatOutput(){
            
        return {data : await this.TodoService.showAll()};
    }

    @Get()
    @Render('todo/index')
    root() {
        return { message: 'Hello selfhy!', title: 'Index Todo Selfhy' };
    }

    @Post()
    creatRecord(@Body() data: TodoDTO){
        return this.TodoService.createData(data)
    }


    @Get(':id')
    readRecord(@Param('id') id:number){
        //return "ini controller detail " +id;
        return this.TodoService.readPerRecord(id)
    }

    @Put(':id')
    updateRecord(@Param('id') id:number, @Body() data:Partial<TodoDTO>){
        //return "ini controller detail " +id;
        return this.TodoService.updateData(id,data)
    }

    @Delete(':id')
    deleteRecord(@Param('id') id:number){
        return this.TodoService.deleteData(id);
    }
}
