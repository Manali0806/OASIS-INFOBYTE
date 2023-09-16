window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
	const inputDescription = document.querySelector("#new-task-input-description");
    const incompleteList = document.querySelector("#incomplete-tasks");
    const completedList = document.querySelector("#completed-tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = input.value;
        const taskDescription = inputDescription.value; // Get the task description
        const taskDateTime = new Date().toLocaleString(); // Current date and time

        const taskElement = createTaskElement(taskText, taskDescription, taskDateTime);

        incompleteList.appendChild(taskElement);

        input.value = '';
		inputDescription.value = '';
    });

    function createTaskElement(text, description, dateTime) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContentElement = document.createElement('div');
        taskContentElement.classList.add('content');

        const taskDescriptionElement = document.createElement('p');
        taskDescriptionElement.classList.add('description');
        taskDescriptionElement.textContent = `Description: ${description}`; // Display the task description

        const taskTextElement = document.createElement('input');
        taskTextElement.classList.add('text');
        taskTextElement.type = 'text';
        taskTextElement.value = `Task: ${text}`; // Display the task name
        taskTextElement.setAttribute('readonly', 'readonly');

        const taskDateTimeElement = document.createElement('span');
        taskDateTimeElement.classList.add('task-datetime');
        taskDateTimeElement.textContent = `Date and Time: ${dateTime}`;

        taskContentElement.appendChild(taskDescriptionElement);
        taskContentElement.appendChild(taskTextElement);
        taskContentElement.appendChild(taskDateTimeElement);

        const taskActionsElement = document.createElement('div');
        taskActionsElement.classList.add('actions');

        const taskCompleteButton = document.createElement('button');
        taskCompleteButton.classList.add('complete');
        taskCompleteButton.innerText = 'Complete';

        const taskDeleteButton = document.createElement('button');
        taskDeleteButton.classList.add('delete');
        taskDeleteButton.innerText = 'Delete';

        taskActionsElement.appendChild(taskCompleteButton);
        taskActionsElement.appendChild(taskDeleteButton);

        taskElement.appendChild(taskContentElement);
        taskElement.appendChild(taskActionsElement);

        // Event listeners for completing and deleting tasks
        taskCompleteButton.addEventListener('click', () => {
            incompleteList.removeChild(taskElement);
            completedList.appendChild(taskElement);
        });

        taskDeleteButton.addEventListener('click', () => {
            taskElement.parentNode.removeChild(taskElement);
        });

        return taskElement;
    }
});
