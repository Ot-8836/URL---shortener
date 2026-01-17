function shortenUrl() {
  const longUrlInput = document.getElementById("longUrl");
  const longUrl = longUrlInput.value.trim();
  const shortUrlInput = document.getElementById("shortUrl");
  const resultDiv = document.getElementById("result");
  const message = document.getElementById("message");
  const shortenBtn = document.getElementById("shortenBtn");

  // Clear previous messages
  message.textContent = "";
  message.style.color = "";

  //URL VALIDATION
  if (!longUrl) {
    message.textContent = "Please enter a URL.";
    message.style.color = "red";
    return;
  }

  if (!longUrl.startsWith("http://") && !longUrl.startsWith("https://")) {
    message.textContent = "URL must start with http:// or https://";
    message.style.color = "red";
    return;
  }

  //LOADING INDICATOR
  shortenBtn.textContent = "Shortening...";
  shortenBtn.classList.add("loading");

  const tinyUrlApi =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(longUrl);

  fetch(tinyUrlApi)
    .then((response) => response.text())
    .then((shortUrl) => {
      shortUrlInput.value = shortUrl;
      resultDiv.style.display = "block";

      message.textContent = "URL shortened successfully!";
      message.style.color = "green";
    })
    .catch(() => {
      message.textContent = "Failed to shorten URL.";
      message.style.color = "red";
    })
    .finally(() => {
      shortenBtn.textContent = "Shorten URL";
      shortenBtn.classList.remove("loading");
    });
}

//COPY BUTTON FEEDBACK
function copyUrl() {
  const shortUrlInput = document.getElementById("shortUrl");
  const copyBtn = document.getElementById("copyBtn");

  if (!shortUrlInput.value) return;

  navigator.clipboard.writeText(shortUrlInput.value).then(() => {
    copyBtn.textContent = "Copied ✓";

    setTimeout(() => {
      copyBtn.textContent = "Copy";
    }, 2000);
  });
}
