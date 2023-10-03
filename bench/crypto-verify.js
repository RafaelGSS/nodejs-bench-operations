const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Crypto Verify')

const crypto = require('crypto')

const rsaPrivateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEAz7QweYwr7puNtc8/6jf4pADXfY2/HVq7LgI7JXkAwW5HTEjU
Rvu02SYC7n/ylr86Da4hcAEAFBC2baVh7J0EnLo6D4FA3yV4s5zj7tqL+p2CdniY
MDEny+uxS/9eRuLf1RIYHjSVB6wOoU4lg9FtDOQA8W09ZDLvc3/4ZSwEf9O2J5Vm
qcSGaPt35eIEBS0iIMiOUCGqbUcVMZkp4JO7I65HOK/g0Scvb1LLY6f4qDsThqyi
ID/NXM5LtjnztRP+9dCLT9DdwC+LeU2te6vcEwC2bPYs3nUwkZL4qqIWO6GHaavn
gFKSmbmc9muVAPmYW/ffMtznKZaWCp9Li0JGuQIDAQABAoIBAQC7OI7hYSpQgEKy
eUgBlcY3/tI/SD/W8+v5QuWRl4rI0ODPsG44NbcEbbECzq4al/B6WFWnoh8x9waZ
uxOTts1rgKnJRBb3jc1JCcijirfWhZgNthJojkZzF9bOzDds6iAc7Zxzza3wJnVh
jRFfyqzji7oV5QQLh6YzlEyQ1aaQmOKTkCDV1UDetI8iItUvq3i8EwsFmtfvXjTl
aymL/xSd3R6w3WDEd8PS5ZPDoFmkt2h/4IhOo6bVXLwWBWqcopRAvzGQrc806c2l
jjePwk9fddIG+vIHc8DHqaC/WzMR6iBt3K7Q9Eyu4k97qeOxB5TIEVlhxg2DJON9
DlGtInXpAoGBAPje3L0xL441i7kh7GqiWtXiDgxVwdPmN5p7n755MddSxvu8894h
T9/LxwAVcpolXANgyRtrl5bu/gXgznKefmVr976BzG2DY33PESf5FnHZAmixWSfz
VOdfVlz+Bk/BI+nVwmeT0+8NSHJ6TJ/9NOSzI9ctUceszIHG5/Gfc2wHAoGBANWn
bHNT7aphFqyUMfWyc6+h8Radq/RVMrOGeD2wRRqUTeb2Ydbx2OwB+gcwnlbsQjfS
BYAa3kn1z5K5kOigB9qu6x7zuM9SMReKIlMg3NpYVyKKj+JaNF3YArFa5TWy0B26
wNJ0FiiZyPq4eP5hPwM+Bed4ytIRWa54P5GeRYc/AoGAWT8ijb4rvaW6G4Ps0jiy
tmzAeO/v+FtgqUeX+6helUccEH6sPYZYrHrZPFB0ro6jNprow6qLzBacheMeZcAs
t5ZGW80UUFmDvkQZdOpAgEdAM+cVf9wlIGvx/psiDEvI4zxC4P4ETH/I8TSmceFN
rI4JVkrsPtza4ddAqkdyDtUCgYAaoMs7dHJikccpqy6u2JbihORvVSdhRF0VUuUZ
iyaRsXokFwEKsQnAIF7xFnYljzyRiHN3C+I4hZJhTw9obsmLz9EuAmI+NJg5vtWY
Vrgv3mK9w1c7dtKf/5QWVqXKk4asreHqWN2KIeCSnvs1eRlJZimGN9/PXqo2vHXv
yDISMQKBgE22EhVB99rEsLXDCXOUHIFGpW46ZavQc4DLXg+uIQm3y0WWyc0oyNF8
9kr1luu5QI5PV9mWpSKa3SKmc74biyxhlUp/DYuMyuSXpdDegMAKheAHVXP9ToU/
5qhq4HBcISN3CwSAYcFcbqC3cB07T+IwX6NTEz4zel4gty8t/tsM
-----END RSA PRIVATE KEY-----
`

const rsaPublicKey = `
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz7QweYwr7puNtc8/6jf4
pADXfY2/HVq7LgI7JXkAwW5HTEjURvu02SYC7n/ylr86Da4hcAEAFBC2baVh7J0E
nLo6D4FA3yV4s5zj7tqL+p2CdniYMDEny+uxS/9eRuLf1RIYHjSVB6wOoU4lg9Ft
DOQA8W09ZDLvc3/4ZSwEf9O2J5VmqcSGaPt35eIEBS0iIMiOUCGqbUcVMZkp4JO7
I65HOK/g0Scvb1LLY6f4qDsThqyiID/NXM5LtjnztRP+9dCLT9DdwC+LeU2te6vc
EwC2bPYs3nUwkZL4qqIWO6GHaavngFKSmbmc9muVAPmYW/ffMtznKZaWCp9Li0JG
uQIDAQAB
-----END PUBLIC KEY-----
`

const thing = 'hello world'
const algorithm = 'RSA-SHA256'
const signature = crypto.createSign(algorithm).update(thing).sign(rsaPrivateKey, 'base64')

suite
  .add(`crypto.createVerify('${algorithm}')`, function () {
    var verifier = crypto.createVerify(algorithm)
    verifier.update(thing)
    verifier.verify(rsaPublicKey, signature, 'base64')
  })
  .add(`crypto.verify('${algorithm}')`, function () {
    crypto.verify(algorithm, thing, rsaPublicKey, Buffer.from(signature, 'base64'))
  })
  .run({ async: false })
