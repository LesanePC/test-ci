export default function (charClass, healthNumber) {
  return healthNumber > 50
    ? "healthy"
    : healthNumber <= 50 && healthNumber >= 15
    ? "wounded"
    : "critical";
}
