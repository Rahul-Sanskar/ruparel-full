const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has("utm_source")) {
  const utm_source = urlParams.get("utm_source");
  Set_Cookie("utm_source", utm_source, 30); //the number 30 = 30 days
}

if (urlParams.has("utm_medium")) {
  const utm_medium = urlParams.get("utm_medium");
  Set_Cookie("utm_medium", utm_medium, 30);
}