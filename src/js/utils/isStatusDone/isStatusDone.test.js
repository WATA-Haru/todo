import { statusEnum }  from '../../statusEnum/statusEnum.js';
import { isStatusDone } from "../isStatusDone/isStatusDone.js"

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
