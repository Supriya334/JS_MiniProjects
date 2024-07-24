document.querySelector('#push').onclick = function() {
    // Check if the input field is empty
    if (document.querySelector("#newtask input").value.length == 0) {
        alert("Please enter a task");
    } else {
        // Append the new task to the tasks list
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    delete
                </button>
            </div>
        `;

        // Add event listeners for delete buttons
        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        // Add event listeners for toggling task completion
        var tasks = document.querySelectorAll('.task');
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed');
            }
        }

        // Clear the input field
        document.querySelector("#newtask input").value = "";
    }
}
