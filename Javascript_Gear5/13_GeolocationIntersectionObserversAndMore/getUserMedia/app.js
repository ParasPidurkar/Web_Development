document.querySelector("#startStream").addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    const videoElement = document.querySelector("#videoElement");
    videoElement.srcObject = stream;
  } catch (err) {
    console.log(err);
    document.querySelector("#errText").textContent = err.message;
  }
});

// navigator.mediaDevices
//   .enumerateDevices()
//   .then((devices) => {
//     console.log(devices);
//   })
//   .catch((e) => console.log(e));
