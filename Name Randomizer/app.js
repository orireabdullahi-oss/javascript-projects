const names = [
  "ABDULLAHI",
  "ABDULKABIR",
  "RIDWAN",
  "ABDULSOBUR",
  "ABDULSALAM",
  "ABDULQAYUM",
  "JOSHUA",
  "JOHN",
  "MUHAMMAD",
  "ISSA",
  "SULEIMAN",
  "KHALEED",
  "ABUBAKAR",
  "AZEEZAH",
  "ZAINAB",
  "MARYAM",
  "HAUWA",
  "AISHA",
  "KHADEEJAH",
  "HABEEB",
];
const name = document.querySelector(".name");

const btn = document.querySelector("button");
btn.addEventListener("click", function() {
  name.innerText = names[Math.floor(Math.random() * names.length)];
});
