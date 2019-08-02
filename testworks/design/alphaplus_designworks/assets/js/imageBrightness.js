function getImageBrightness(imageSrc, callback) {
  var img = document.createElement('img'),
    colorSum = 0,
    i = 0,
    len,
    canvas,
    ctx,
    imageData,
    data,
    brightness,
    r,
    g,
    b,
    avg;

  img.src = imageSrc;
  img.style.display = 'none';

  document.body.appendChild(img);

  img.onload = function () {
    canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;

    ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0, 0);

    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    data = imageData.data;

    for (i, len = data.length; i < len; i += 4) {
      r = data[i];
      g = data[i + 1];
      b = data[i + 2];

      avg = Math.floor((r + g + b) / 3);
      colorSum += avg;
    }

    brightness = Math.floor(colorSum / (this.width * this.height));
    callback(brightness);
  };
}

getImageBrightness('/images/my-image.jpg', function (brightness) {
  console.log(brightness);
});