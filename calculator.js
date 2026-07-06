function calculateSimpleInterest(principal, rate, time) {
  const p = Number(principal);
  const r = Number(rate);
  const n = Number(time);

  if (!Number.isFinite(p) || !Number.isFinite(r) || !Number.isFinite(n)) {
    return 0;
  }

  return (p * r * n) / 100;
}

module.exports = { calculateSimpleInterest };
