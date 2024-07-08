// 文字列をバイナリに変換
export function toBinary(value: string) {
  const codeUnits = new Uint16Array(value.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = value.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
}

// バイナリを文字列に変換
export function fromBinary(binaryString: string) {
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

// https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
const encoder = new TextEncoder();
const decoder = new TextDecoder();
export function toBinary2(value: string) {
  return String.fromCharCode(...encoder.encode(value));
}
export function fromBinary2(binaryString: string) {
  return decoder.decode(Uint8Array.from(binaryString, (x) => x.charCodeAt(0)));
}

export function btoa_url(data: string) {
  return btoa(data)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function atob_url(data: string) {
  return atob(data.replace(/-/g, '+').replace(/_/g, '/'))
}
