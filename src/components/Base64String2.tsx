import { Converter } from "./Converter.tsx";

const encoder = new TextEncoder();
const decoder = new TextDecoder();
function encode(value: string) {
  return btoa(String.fromCharCode(...encoder.encode(value)));
}
function decode(value: string) {
  return decoder.decode(Uint8Array.from(atob(value), (x) => x.charCodeAt(0)));
}

export default function () {
  return <>
    <h2>encode</h2>
    <Converter convert={encode} />
    <h2>decode</h2>
    <Converter convert={decode} />
  </>
}
