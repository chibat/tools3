import { signal } from "@preact/signals";

const ERROR_MESSAGE = "Contains characters that cannot be converted.";

export default function() {
  const encodeMessage = signal("");
  const encodeResult = signal("");
  const decodeMessage = signal("");
  const decodeResult = signal("");

  return (
    <>
      <h2>encode: btoa</h2>
      <input type="text" autofocus style="width: 100%"
        onChange={e => {
          encodeMessage.value = "";
          encodeResult.value = "";
          try {
            encodeResult.value = btoa(e.currentTarget.value);
          } catch {
            encodeMessage.value = ERROR_MESSAGE;
          }
        }} />
      <input readonly style="width: 100%; border: none;" value={encodeResult} />
      <span style="color: red">{encodeMessage}</span>
      <h2>decode: atob</h2>
      <input type="text" style="width: 100%"
        onChange={e => {
          decodeMessage.value = "";
          decodeResult.value = "";
          try {
            decodeResult.value = atob(e.currentTarget.value);
          } catch {
            decodeMessage.value = ERROR_MESSAGE;
          }
        }
        } />
      <input readonly style="width: 100%; border: none;" value={decodeResult} />
      <span style="color: red">{decodeMessage}</span>
    </>
  );
}
