let Arr = [];
let Obj = {
  Id: uuidv4(),
  Note: "",
  Description: ""
};
//===============================================================================
const Note = document.querySelector("#Note");
const Description = document.querySelector("#Description");
Note.addEventListener("input", e => {
  Obj.Note = e.target.value;
});
Description.addEventListener("input", e => {
  Obj.Description = e.target.value;
});
document.querySelector("#Addbtn").addEventListener("click", e => {
  if (Note.value && Description.value) {
    Arr = GetData();
    Arr.push(Obj);
    localStorage.setItem("Array", JSON.stringify(Arr));
    location.assign("./Index.html");
  } else {
    alert("Please Insert Data Carefully!!!");
  }
});
//=================================================================================
