// 文字列をバイナリに変換
// https://developer.mozilla.org/ja/docs/Web/API/btoa#unicode_%E6%96%87%E5%AD%97%E5%88%97
export function toBinary(string: string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
}

// バイナリを文字列に変換
// https://developer.mozilla.org/ja/docs/Web/API/btoa#unicode_%E6%96%87%E5%AD%97%E5%88%97
export function fromBinary(binary: string) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer));
}
