function validateCertificate() {
  const certId = document.getElementById("cert-id").value.trim();
  const result = document.getElementById("result");

  if (certId === "VOC123456") {
    result.innerText = "✅ Certificate Verified!";
    result.style.color = "lightgreen";
  } else {
    result.innerText = "❌ Invalid Certificate ID.";
    result.style.color = "red";
  }

  return false; // prevent form reload
}
