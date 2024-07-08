import { EncodeDecode } from "./EncodeDecode.tsx";
import { fromBinary, toBinary } from "./utils.ts";

function encode(value: string) {
  return btoa(toBinary(value));
}
function decode(value: string) {
  return fromBinary(atob(value));
}

export default function() {
  return <EncodeDecode encode={encode} decode={decode} />
}
