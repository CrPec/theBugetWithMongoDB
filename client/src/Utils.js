export function formatValue(cents) {
  return (cents / 100).toLocaleString("ro-RO", {
    style: "currency",
    currency: "Lei",
  });
}
export function showPicker(e) {
  if ("showPicker" in HTMLInputElement.prototype) {
    const input = e.currentTarget;
    try {
      input.showPicker();
    } catch (error) {
      window.alert(error);
    }
  }
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
