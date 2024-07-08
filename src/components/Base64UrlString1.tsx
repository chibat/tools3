import { EncodeDecode } from "./EncodeDecode.tsx";
import { fromBinary, toBinary } from "./utils.ts";

function encode(value: string) {
  return btoa(toBinary(value))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
function decode(value: string) {
  return fromBinary(atob(value.replace(/-/g, '+').replace(/_/g, '/')));
}

export default function () {
  return <EncodeDecode encode={encode} decode={decode} />
}
