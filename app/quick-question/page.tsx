const data = await res.json();
console.log("API RESPONSE:", data);

if (!res.ok) {
  alert("Server error");
  setLoading(false);
  return;
}

if (!data.url) {
  alert("No checkout URL returned");
  setLoading(false);
  return;
}

window.location.href = data.url;
