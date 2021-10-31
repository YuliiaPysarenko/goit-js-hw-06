const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery")
list.classList.add("flexbox");

// варіант 1

const imageList = (images) => {

  for (const image of images) {
    list.insertAdjacentHTML("beforeend", `<li class="flexbox-item"><image src=${image.url} alt=${image.alt} class="flexbox-image"></li>`);
  }

}

imageList(images);

// варіант 2

// let imageItem;
// let listItem;

// for (const image of images) {
//   imageItem = document.createElement("img");
//   imageItem.setAttribute("src", image.url);
//   imageItem.setAttribute("alt", image.alt);
//   imageItem.classList.add("flexbox-image");

//   listItem = document.createElement("li");
//   listItem.append(imageItem);
//   listItem.classList.add("flexbox-item");

//   list.append(listItem);
//   console.log(listItem);
// }