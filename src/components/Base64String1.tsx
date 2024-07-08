import { signal } from "@preact/signals";

const ERROR_MESSAGE = "Contains characters that cannot be converted.";

// 文字列をバイナリに変換
// https://developer.mozilla.org/ja/docs/Web/API/btoa#unicode_%E6%96%87%E5%AD%97%E5%88%97
function toBinary(string: string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
}

// バイナリを文字列に変換
// https://developer.mozilla.org/ja/docs/Web/API/btoa#unicode_%E6%96%87%E5%AD%97%E5%88%97
function fromBinary(binary: string) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer));
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
            encodeResult.value = btoa(toBinary(e.currentTarget.value));
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
            decodeResult.value = fromBinary(atob(e.currentTarget.value));
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
