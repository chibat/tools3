import { signal } from "@preact/signals";

const ERROR_MESSAGE = "Contains characters that cannot be converted.";

const encoder = new TextEncoder();
const decoder = new TextDecoder();
function encode(value: string) {
  return btoa(String.fromCharCode(...encoder.encode(value)));
}
function decode(value: string) {
  return decoder.decode(Uint8Array.from(atob(value), (x) => x.charCodeAt(0)));
}

export default function() {
  const encodeMessage = signal("");
  const encodeResult = signal("");
  const decodeMessage = signal("");
  const decodeResult = signal("");
  return (
    <>
      <h2>encode</h2>
      <input type="text" autofocus style="width: 100%"
        onChange={e => {
          encodeMessage.value = "";
          encodeResult.value = "";
          try {
            encodeResult.value = encode(e.currentTarget.value);
          } catch {
            encodeMessage.value = ERROR_MESSAGE;
          }
        }} />
      <input readonly style="width: 100%; border: none;" value={encodeResult} />
      <span style="color: red">{encodeMessage}</span>
      <h2>decode</h2>
      <input type="text" style="width: 100%"
        onChange={e => {
          decodeMessage.value = "";
          decodeResult.value = "";
          try {
            decodeResult.value = decode(e.currentTarget.value);
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
