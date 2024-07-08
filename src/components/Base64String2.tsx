import { Converter } from "./Converter.tsx";
import { fromBinary2, toBinary2 } from "./utils.ts";

function encode(value: string) {
  return btoa(toBinary2(value));
}
function decode(value: string) {
  return fromBinary2(atob(value));
}

export default function () {
  return <>
    <h2>encode</h2>
    <Converter convert={encode} />
    <h2>decode</h2>
    <Converter convert={decode} />
  </>
}
