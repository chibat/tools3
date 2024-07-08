import { EncodeDecode } from "./EncodeDecode";

const encoder = new TextEncoder();
const decoder = new TextDecoder();
function encode(value: string) {
  return btoa(String.fromCharCode(...encoder.encode(value)));
}
function decode(value: string) {
  return decoder.decode(Uint8Array.from(atob(value), (x) => x.charCodeAt(0)));
}

export default function() {
  return <EncodeDecode encode={encode} decode={decode} />
}
