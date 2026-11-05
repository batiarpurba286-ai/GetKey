let currentKey = "";

document.getElementById("getKey").onclick = () => {
  currentKey = "LDZ-" +
    Math.random().toString(36).substring(2, 8).toUpperCase();

  document.getElementById("result").textContent =
    "Demo key: " + currentKey;
};

document.getElementById("loginBtn").onclick = () => {
  const entered = document.getElementById("keyInput").value.trim();

  if (entered && entered === currentKey) {
    document.getElementById("result").textContent =
      "Akses website berhasil!";
  } else {
    document.getElementById("result").textContent =
      "Key salah atau belum dibuat.";
  }
};