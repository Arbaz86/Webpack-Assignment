let noteflex = document.querySelector(".notesgrid-data");

let notesData = document.querySelector("#AddNopteBtn");
notesData.addEventListener("click", getNotes);

let i = 0;
function getNotes() {
  let textarea = document.getElementById("textarea").value;

  if (textarea.length !== 0) {
    console.log("hiii");

    document.querySelector(".ifnotNotes").style.display = "none";

    i++;
    let div = document.createElement("div");
    div.classList = "data-div-notes";

    let h3 = document.createElement("h3");
    h3.classList = "countNotes";
    h3.innerHTML = "Note" + i;

    let datadiv = document.createElement("div");
    datadiv.classList = "maindata-notes";
    datadiv.innerHTML = textarea;

    let btn = document.createElement("button");
    btn.classList = "removenotes";
    btn.innerHTML = "Delete Note";
    btn.onclick = () => {
      let removediv = document.querySelector(".data-div-notes");
      removediv.parentNode.removeChild(removediv);
    };

    div.append(h3, datadiv, btn);

    noteflex.append(div);
  } else {
    alert("Nothing to show! 'Use Add a Note'");
  }
}

export { getNotes };
