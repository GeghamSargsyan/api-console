export default function onKeyUpCallback(event, callback, params = []) {
  return () => {
    if (!event?.which !== 13) return;
    callback(...params);
  };
}
