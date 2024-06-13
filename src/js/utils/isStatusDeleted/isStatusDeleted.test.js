import { statusEnum }  from '../../statusEnum/statusEnum.js';
import { isStatusDeleted } from "../isStatusDeleted/isStatusDeleted.js"

const newTask = {
    id: crypto.randomUUID(),
    content: "hogehoge",
    status: statusEnum.DONE
}

test('[Name]:isStatusDeleted [Return]:true [When]:Task.status is \'deleted\'.', () => {
		newTask.status = statusEnum.DELETED;
    expect(isStatusDeleted(newTask)).toBe(true);

		newTask.status = statusEnum.DONE;
    expect(isStatusDeleted(newTask)).toBe(false);

		newTask.status = statusEnum.TODO;
    expect(isStatusDeleted(newTask)).toBe(false);
});
