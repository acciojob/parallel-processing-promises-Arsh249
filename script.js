//your JS code here. If required.
// const output = document.getElementById("output");
// const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImages() {
      const output = document.getElementById('output');
      const promises = [];

      images.forEach(image => {
        const promise = new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            output.appendChild(img);
            resolve();
          };
          img.onerror = () => {
            reject(new Error(`Failed to load image's URL: ${image.url}`));
          };
          img.src = image.url;
        });
        promises.push(promise);
      });

      Promise.all(promises)
        .then(() => console.log('All images downloaded successfully'))
        .catch(error => console.error(error));
    }

    const downloadButton = document.getElementById('download-images-button');
    downloadButton.addEventListener('click', downloadImages);
