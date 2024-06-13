import { statusEnum }  from '../../statusEnum/statusEnum.js';
import { isStatusTodo } from "../isStatusTodo/isStatusTodo.js"

const newTask = {
    id: crypto.randomUUID(),
    content: "hogehoge",
    status: statusEnum.DONE
}

test('[Name]:isStatusTodo [Return]:true [When]:Task.status is \'todo\'.', () => {
		newTask.status = statusEnum.TODO;
    expect(isStatusTodo(newTask)).toBe(true);

		newTask.status = statusEnum.DONE;
    expect(isStatusTodo(newTask)).toBe(false);

		newTask.status = statusEnum.DELETED;
    expect(isStatusTodo(newTask)).toBe(false);
});
