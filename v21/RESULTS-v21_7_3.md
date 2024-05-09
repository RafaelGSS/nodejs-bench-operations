## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,206,474|7603238|
|Using dot notation|15,112,090|7556046|
|Using define property (writable)|3,394,423|1697212|
|Using define property initialized (writable)|4,206,441|2103221|
|Using define property (getter)|2,098,849|1049425|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15206474.570586722,"samples":7603238},{"name":"Using dot notation","opsSec":15112090.186548922,"samples":7556046},{"name":"Using define property (writable)","opsSec":3394423.619818937,"samples":1697212},{"name":"Using define property initialized (writable)","opsSec":4206441.79808644,"samples":2103221},{"name":"Using define property (getter)","opsSec":2098849.7817223584,"samples":1049425}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.3ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|29.957ms
new Array(length)|1,000,000|7.765ms
array.push|100,000,000|1,903.614ms
new Array(length)|100,000,000|4,170.727ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.318ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|19.236ms
new Array(length)|1,000,000|7.981ms
array.push|100,000,000|2,116.482ms
new Array(length)|100,000,000|4,798.587ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|236|119|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:40:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":236.7840377218385,"samples":119},{"name":"Array.from","opsSec":23.404131331198588,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|330,557|165279|
|[True conditional] Using constructor name|326,182|163092|
|[True conditional] Check if property is valid then instanceof |334,792|167397|
|[False conditional] Using instanceof only|15,366,493|7683247|
|[False conditional] Using constructor name|15,315,702|7657852|
|[False conditional] Check if property is valid then instanceof |15,338,555|7669278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:55:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":330557.3269852781,"samples":165279},{"name":"[True conditional] Using constructor name","opsSec":326182.05008368543,"samples":163092},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":334792.7753280481,"samples":167397},{"name":"[False conditional] Using instanceof only","opsSec":15366493.723380392,"samples":7683247},{"name":"[False conditional] Using constructor name","opsSec":15315702.713506222,"samples":7657852},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15338555.907929517,"samples":7669278}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,880|3441|
|crypto.verify('RSA-SHA256')|6,984|3493|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:01:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6880.64971377759,"samples":3441},{"name":"crypto.verify('RSA-SHA256')","opsSec":6984.5801605758315,"samples":3493}]}-->
