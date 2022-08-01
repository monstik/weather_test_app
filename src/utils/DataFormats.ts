export function formatTime(time: number) {
  const date = new Date(time * 1000);

  return date.toLocaleTimeString([], { month:'short', day:'2-digit', hour: '2-digit', minute: '2-digit' });

  //   return dtFormat.format(new Date(time * 1e3));
}

export function formatDay(time: number) {
  const date = new Date(time * 1000);

  return date.toLocaleDateString([], {
    month: 'long',
    day: 'numeric',
  });
}
