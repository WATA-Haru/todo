const { isStatusDone, isStatusDeleted, isStatusTodo } = require('./utils');
const { statusEnum } = require('./statusEnum');
const crypto = require('crypto');

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
});

test('isStatusDeleted:', () => {
		newTask.status = statusEnum.DELETED;
    expect(isStatusDeleted(newTask)).toBe(true);

		newTask.status = statusEnum.DONE;
    expect(isStatusDeleted(newTask)).toBe(false);

		newTask.status = statusEnum.TODO;
    expect(isStatusDeleted(newTask)).toBe(false);
});

test('isStatusTodo:', () => {
		newTask.status = statusEnum.TODO;
    expect(isStatusTodo(newTask)).toBe(true);

		newTask.status = statusEnum.DONE;
    expect(isStatusTodo(newTask)).toBe(false);

		newTask.status = statusEnum.DELETED;
    expect(isStatusTodo(newTask)).toBe(false);
});
