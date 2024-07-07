import { signal } from "@preact/signals";

const ERROR_MESSAGE = "Contains characters that cannot be converted.";

export default function Base64() {
  const btoaMessage = signal("");
  const btoaResult = signal("");
  const atobMessage = signal("");
  const atobResult = signal("");

  return (
    <>
      <h2>encode: btoa</h2>
      <input type="text" autofocus style="width: 100%"
        onChange={e => {
          btoaMessage.value = "";
          btoaResult.value = "";
          try {
            btoaResult.value = btoa(e.currentTarget.value);
          } catch {
            btoaMessage.value = ERROR_MESSAGE;
          }
        }} />
      <input readonly style="width: 100%; border: none;" value={btoaResult} />
      <span style="color: red">{btoaMessage}</span>
      <h2>decode: atob</h2>
      <input type="text" style="width: 100%"
        onChange={e => {
          atobMessage.value = "";
          atobResult.value = "";
          try {
            atobResult.value = atob(e.currentTarget.value);
          } catch {
            atobMessage.value = ERROR_MESSAGE;
          }
        }
        } />
      <input readonly style="width: 100%; border: none;" value={atobResult} />
      <span style="color: red">{atobMessage}</span>
    </>
  );
}
