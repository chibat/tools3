import { signal } from "@preact/signals";

const ERROR_MESSAGE = "Contains characters that cannot be converted.";

export function EncodeDecode(props: { encode: (value: string) => string, decode: (value: string) => string }) {
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
            encodeResult.value = props.encode(e.currentTarget.value);
          } catch (e) {
            console.error(e);
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
            decodeResult.value = props.decode(e.currentTarget.value);
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
