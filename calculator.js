function calculateSimpleInterest(principal, rate, time) {
  const p = Number(principal);
  const r = Number(rate);
  const n = Number(time);

  if (!Number.isFinite(p) || !Number.isFinite(r) || !Number.isFinite(n)) {
    return 0;
  }

  return (p * r * n) / 100;
}

(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }
  root.calculateSimpleInterest = api.calculateSimpleInterest;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  return { calculateSimpleInterest };
});
