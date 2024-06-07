import { isStatusDone, isStatusDeleted, isStatusTodo } from '../src/js/utils.js';
import { statusEnum }  from '../src/js/statusEnum.js';

const newTask = {
    id: crypto.randomUUID(),
    content: "hogehoge",
    status: statusEnum.DONE
}

test('isStatusDone:', () => {
		newTask.status = statusEnum.DONE;
    expect(isStatusDone(newTask)).toBe(true);

		newTask.status = statusEnum.TODO;
    expect(isStatusDone(newTask)).toBe(false);

		newTask.status = statusEnum.DELETED;
    expect(isStatusDone(newTask)).toBe(false);
  
    expect(isStatusDone(true)).toBe(false);
    expect(isStatusDone(false)).toBe(false);
    expect(isStatusDone(null)).toBe(false);
    expect(isStatusDone(undefined)).toBe(false);
    expect(isStatusDone([])).toBe(false);
    expect(isStatusDone("aaa")).toBe(false);
    expect(isStatusDone(1234)).toBe(false);
});

test('isStatusDeleted:', () => {
		newTask.status = statusEnum.DELETED;
    expect(isStatusDeleted(newTask)).toBe(true);

		newTask.status = statusEnum.DONE;
    expect(isStatusDeleted(newTask)).toBe(false);

		newTask.status = statusEnum.TODO;
    expect(isStatusDeleted(newTask)).toBe(false);

    expect(isStatusDeleted(true)).toBe(false);
    expect(isStatusDeleted(false)).toBe(false);
    expect(isStatusDeleted(null)).toBe(false);
    expect(isStatusDeleted(undefined)).toBe(false);
    expect(isStatusDeleted([])).toBe(false);
    expect(isStatusDeleted("aaa")).toBe(false);
    expect(isStatusDeleted(1234)).toBe(false);
});

test('isStatusTodo:', () => {
		newTask.status = statusEnum.TODO;
    expect(isStatusTodo(newTask)).toBe(true);

		newTask.status = statusEnum.DONE;
    expect(isStatusTodo(newTask)).toBe(false);

		newTask.status = statusEnum.DELETED;
    expect(isStatusTodo(newTask)).toBe(false);

    expect(isStatusTodo(true)).toBe(false);
    expect(isStatusTodo(false)).toBe(false);
    expect(isStatusTodo(null)).toBe(false);
    expect(isStatusTodo(undefined)).toBe(false);
    expect(isStatusTodo([])).toBe(false);
    expect(isStatusTodo("aaa")).toBe(false);
    expect(isStatusTodo(1234)).toBe(false);
});
