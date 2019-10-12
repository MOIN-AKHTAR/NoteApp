let Arr = GetData() || [];
//==================================================================================
const Render = Arr => {
  const ShowData = document.querySelector("#ShowData");
  ShowData.innerHTML = "";

  if (Arr.length > 0) {
    Arr.forEach(Item => {
      const Div = document.createElement("div");
      const a = document.createElement("a");
      a.textContent = Item.Note;
      Div.style.border = "1px solid gray";
      Div.style.width = "55%";
      Div.style.textAlign = "center";
      Div.style.marginBottom = "0.5rem";
      Div.style.background = "#F6F6F6";
      a.setAttribute("href", `EditOrRemove.html#${Item.Id}`);

      Div.appendChild(a);
      ShowData.appendChild(Div);
    });
  } else {
    ShowData.innerHTML = `<h3 class="text-cente">No Item Found :( </h3>`;
  }
};
Render(Arr);
//===================================================================================
document.querySelector("#Filter").addEventListener("input", e => {
  let Filter = Arr.filter(Item =>
    Item.Note.toLowerCase().includes(e.target.value.toLowerCase())
  );
  Render(Filter);
});
//===================================================================================
document.querySelector("#Sort").addEventListener("change", e => {
  if (e.target.value == "Asc") {
    Arr.sort((a, b) => (a.Note > b.Note ? 1 : -1));
  } else if (e.target.value == "Desc") {
    Arr.sort((a, b) => (a.Note > b.Note ? -1 : 1));
  } else {
    Arr.sort((a, b) => (a.Id > b.Id ? -1 : 1));
  }

  Render(Arr);
});
