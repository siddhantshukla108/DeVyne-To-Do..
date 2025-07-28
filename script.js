      const input = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");

      function addTask() {
        const taskText = input.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onclick = function () {
          li.classList.toggle("completed");
        };

        const span = document.createElement("span");
        span.textContent = taskText;

        const delBtn = document.createElement("button");
        delBtn.textContent = "×";
        delBtn.onclick = function () {
          taskList.removeChild(li);
        };

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);

        input.value = "";
      }
