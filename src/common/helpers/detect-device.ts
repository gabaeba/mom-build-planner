export function detectDevice() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

export function hasTouchSupport() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
