import { isStatusDone, isStatusDeleted, isStatusTodo } from '../src/js/utils.js';
import { statusEnum }  from '../src/js/statusEnum.js';

const newTask = {
    id: crypto.randomUUID(),
    content: "hogehoge",
    status: statusEnum.DONE
}

test('[Name]:isStatusDone [Return]:true [When]:Task.status is \'done\'.', () => {
		newTask.status = statusEnum.DONE;
    expect(isStatusDone(newTask)).toBe(true);

		newTask.status = statusEnum.TODO;
    expect(isStatusDone(newTask)).toBe(false);

		newTask.status = statusEnum.DELETED;
    expect(isStatusDone(newTask)).toBe(false);
});

test('[Name]:isStatusDeleted [Return]:true [When]:Task.status is \'deleted\'.', () => {
		newTask.status = statusEnum.DELETED;
    expect(isStatusDeleted(newTask)).toBe(true);

		newTask.status = statusEnum.DONE;
    expect(isStatusDeleted(newTask)).toBe(false);

		newTask.status = statusEnum.TODO;
    expect(isStatusDeleted(newTask)).toBe(false);
});

test('[Name]:isStatusTodo [Return]:true [When]:Task.status is \'todo\'.', () => {
		newTask.status = statusEnum.TODO;
    expect(isStatusTodo(newTask)).toBe(true);

		newTask.status = statusEnum.DONE;
    expect(isStatusTodo(newTask)).toBe(false);

		newTask.status = statusEnum.DELETED;
    expect(isStatusTodo(newTask)).toBe(false);
});
