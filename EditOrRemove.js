const Data = GetData();
const Obj = Data.find(Item => Item.Id == location.hash.substring(1));
const Note = document.querySelector("#Note");
const Description = document.querySelector("#Description");
Note.value = Obj.Note;
Description.value = Obj.Description;
Note.addEventListener("input", e => {
  Obj.Note = e.target.value;
});
Description.addEventListener("input", e => {
  Obj.Description = e.target.value;
});
document.querySelector("#Editbtn").addEventListener("click", e => {
  if (Note.value && Description.value) {
    localStorage.setItem("Array", JSON.stringify(Data));
    location.assign("./Index.html");
  } else {
    alert("Insert Data Carefully");
  }
});
document.querySelector("#Removebtn").addEventListener("click", e => {
  const Index = Data.findIndex(Item => Item.Id == location.hash.substring(1));
  Data.splice(Index, 1);
  location.assign("./Index.html");
  localStorage.setItem("Array", JSON.stringify(Data));
});
