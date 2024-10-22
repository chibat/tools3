import { Converter } from "./Converter.tsx";
import { fromBinary, toBinary } from "./utils.ts";

function encode(value: string) {
  return btoa(toBinary(value));
}
function decode(value: string) {
  return fromBinary(atob(value));
}

export default function () {
  return <>
    <h2>encode</h2>
    <Converter convert={encode} />
    <h2>decode</h2>
    <Converter convert={decode} />
  </>
}
