import base64 from 'crypto-js/enc-base64'
import utf8 from 'crypto-js/enc-utf8'
import MD5 from 'crypto-js/MD5'
import SHA1 from 'crypto-js/SHA1'
import SHA256 from 'crypto-js/SHA256'
import SHA512 from 'crypto-js/SHA512'
import SHA3 from 'crypto-js/SHA3'
import RIPEMD160 from 'crypto-js/RIPEMD160'

function hexEncode(str) {
  var hex, i
  var result = ''
  for (i = 0; i < str.length; i++) {
    hex = str.charCodeAt(i).toString(16)
    result += ('000' + hex).slice(-4)
  }
  return result
}

function base64Encode(str) {
  return base64.stringify(utf8.parse(str))
}

const Encoding = {
  hex: hexEncode,
  base64: base64Encode,
  md5: MD5,
  sha1: SHA1,
  sha256: SHA256,
  sha512: SHA512,
  sha3: SHA3,
  ripemd160: RIPEMD160
}

export { Encoding }
