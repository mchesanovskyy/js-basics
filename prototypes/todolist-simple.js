let task = null;

function getTask() {
    return task;
}

function addTask(newTask) {
    if (task !== null) {
        return { isSuccess: false, errorMessage: "Task already exists. Use update function" };
    }

    if (!newTask == null) {
        return { isSuccess: false, errorMessage: "New task can't be empty" };
    }

    task = newTask;
    return { isSuccess: true };
}

function updateTask(newTask) {
    if (task === null) {
        return { isSuccess: false, errorMessage: "There is no task. Please use add option" };
    }

    if (!newTask) {
        return { isSuccess: false, errorMessage: "New task can't be empty" };
    }

    task = newTask;
    return { isSuccess: true };
}

function deleteTask() {
    if (task === null) {
        return { isSuccess: false, errorMessage: "There is no task. Please use add option" };
    }

    task = null;
    return { isSuccess: true };
}

function promptToEnterTask() {
    //TODO
}

function promptToUpdateTask() {
    //TODO
}

function displayTaskToConsole() {
    //TODO
}

function displayTaskToAlert() {
    //TODO
}