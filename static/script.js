function flipCard(elem) {
  if (elem.classList.contains("flipped")) elem.classList.remove("flipped");
  else elem.classList.add("flipped");
}

function copyEmail() {
  navigator.clipboard.writeText("erica.ribeiro58@gmail.com");

  // Alert the copied text
  alert("Email copied to clipboard!");
}
