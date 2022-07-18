function toggleHeader(event) {
  const button = document.getElementById(event.target.id);
  const mapDescId = `card-${event.target.id.slice(-1)}`;
  const header = document.getElementById(mapDescId);

  if (!button) {
    alert("This is a button, a button without an id...")
  }

  header.classList.toggle('size-up');
}

const images = document.querySelectorAll(".image-in-gallery");
console.log(images);
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", toggleHeader);
}