function updateDateTime() {
  const now = new Date();

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  const formattedDate = now.toLocaleString("ru-RU", options);

  document.getElementById("datetime").textContent = formattedDate;
}

setInterval(updateDateTime, 1000);

updateDateTime();
