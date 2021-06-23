import { Pipe, PipeTransform } from "@angular/core";
import { TodoItem } from "./todo-item";

@Pipe({
    name: 'FilterList'
})
export class FilterPipe implements PipeTransform {
    transform(tasklist: TodoItem[], filterText: string): TodoItem[] {
        if (!tasklist || !filterText) {
            return tasklist;
        }

        return tasklist.filter( tasklist => tasklist.task.toLowerCase().indexOf(filterText.toLowerCase()) !== -1 );
    }
}
