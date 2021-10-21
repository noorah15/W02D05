let toDosOb = [
  { n: "wake up", c: true },
  { n: "eat breakfast", c: true },
  { n: "code", c: true },
];

const updateListItem = (index) => {
  let value = prompt("Add to list: ");
  if (value === "") alert("Not entered anything");
  else {
    toDosOb[index].n = value;
    renderList();
  }
};

const deleteListItem = (index) => {
  toDosOb.splice(index, 1);
  renderList();
};

const itemCompleted = (index) => {
  if (toDosOb[index].c) toDosOb[index].c = false;
  else toDosOb[index].c = true;
  renderList();
};

function renderList() {
  $("#toDo").html("");

  let count = 0;
  for (let i = 0; i < toDosOb.length; i++) {
    $("#toDo").append(`<li id ="li${i}""></li>`);

    if (toDosOb[i].c)
      $(`#li${i}`).append(
        `<a id = "a${i}" href = "#" class = "main" onclick="itemCompleted(${i})" >${toDosOb[i].n}</li>`
      );
    else {
      count++;
      $(`#li${i}`).append(
        `<a id = "a${i}" href = "#" class = "main" onclick="itemCompleted(${i})" style="text-decoration:line-through" >${toDosOb[i].n}</li>`
      );
    }

    $(`#li${i}`).append(
      `<a id = "${i}" href = "#" class = "aStyle" onclick="updateListItem(${i})">EDIT</li>`
    );

    $(`#li${i}`).append(
      `<a id = "${i}" href = "#" class = "aStyle" onclick="deleteListItem(${i})">REMOVE</li>`
    );
  }
  console.log(count);
  $("p").html(`You have ${count} todos left.`);
}

renderList();

const addToList = function addToList() {
  const inputValue = document.querySelector("#input1");
  let str = inputValue.value;
  if (str === "") alert("Not entered anything");
  else {
    toDosOb.push({ n: str, c: true });
    renderList();
  }
};

const clearCompleted = () => {
  let a = [];
  for (let i = 0; i < toDosOb.length; i++) {
    if (toDosOb[i].c) a.push(toDosOb[i]);
  }
  toDosOb = a;

  renderList();
};

const clear = () => {
  toDosOb.length = 0;
  renderList();
};

$("#btn1").click(addToList);
$("#btnClear").click(clear);
$("#btnclearCompleted").click(clearCompleted);
