function renderPhotos(photos) {
    photos.forEach((img) => {
    const imgEl = document.createElement("img")  
    imgEl.setAttribute("src", img.thumbnailUrl)  
    document.getElementById("output").appendChild(imgEl)
    });
}

async function getPhotos() {
const photoData = await fetch('https://jsonplaceholder.typicode.com/photos')
const result = await photoData.json()
renderPhotos(result)
}

async function start() {
await getPhotos()
}

start()