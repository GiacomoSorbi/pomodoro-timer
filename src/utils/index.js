export const padWithLeadingZeros = (n, zeroes, maxdigits) =>
  ('0'.repeat(zeroes) + n).slice(-maxdigits);

export const padTime = n => padWithLeadingZeros(n, 2, 2);

export const formatTime = (time, mode) =>
  ((h, m, s) => `${padTime(h, 2, 2)}:${padTime(m, 2, 2)}:${padTime(s, 2, 2)}`)(
    Math.floor(time / 3600),
    Math.floor(time / 60) % 60,
    time % 60
  );
