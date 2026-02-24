async function updateStatus(id: string, status: string) {
  console.log("Updating:", id, status);

  const res = await fetch("/api/update-status", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, status }),
  });

  const data = await res.json();
  console.log("Response:", data);

  if (data.error) {
    alert("Update failed: " + data.error);
    return;
  }

  alert("Updated!");
}