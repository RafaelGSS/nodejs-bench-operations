## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|937,637,528|98|
|Using dot notation|939,078,847|99|
|Using define property (writable)|4,820,557|94|
|Using define property initialized (writable)|6,860,806|97|
|Using define property (getter)|2,769,585|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:17:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":937637527.6636596,"samples":7},{"name":"Using dot notation","opsSec":939078846.7847226,"samples":6},{"name":"Using define property (writable)","opsSec":4820556.945441691,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6860806.431706396,"samples":5},{"name":"Using define property (getter)","opsSec":2769584.9472456207,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.007ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.326ms
new Array(length)|10,000|0.332ms
array.push|1,000,000|32.692ms
new Array(length)|1,000,000|8.272ms
array.push|100,000,000|2,032.74ms
new Array(length)|100,000,000|4,673.425ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.01ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.231ms
new Array(length)|10,000|0.165ms
array.push|1,000,000|27.666ms
new Array(length)|1,000,000|4.635ms
array.push|100,000,000|2,803.056ms
new Array(length)|100,000,000|4,212.672ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|215|87|
|Array.from|23|42|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:31:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":214.65882609657913,"samples":2},{"name":"Array.from","opsSec":23.003693825803975,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|938,989,288|98|
|[async] async function|19,522,606|86|
|[async] function|363,268|34|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:37:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":938989287.9784071,"samples":6},{"name":"[async] async function","opsSec":19522605.93690524,"samples":6},{"name":"[async] function","opsSec":363267.9436138555,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,767|89|
|new Blob (1024)|754|76|
|text (128)|6,350|87|
|text (1024)|803|91|
|arrayBuffer (128)|6,335|89|
|arrayBuffer (1024)|802|89|
|slice (0, 64)|80,761|68|
|slice (0, 512)|24,185|61|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:47:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5766.68793217532,"samples":3},{"name":"new Blob (1024)","opsSec":754.1939267481355,"samples":3},{"name":"text (128)","opsSec":6349.846101924805,"samples":5},{"name":"text (1024)","opsSec":802.8388388226545,"samples":3},{"name":"arrayBuffer (128)","opsSec":6335.116542370262,"samples":4},{"name":"arrayBuffer (1024)","opsSec":801.5290520561615,"samples":2},{"name":"slice (0, 64)","opsSec":80761.14768290326,"samples":3},{"name":"slice (0, 512)","opsSec":24184.733647292254,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|262,504|57|
|[True conditional] Using constructor name|217,454|97|
|[True conditional] Check if property is valid then instanceof |219,093|98|
|[False conditional] Using instanceof only|939,454,080|98|
|[False conditional] Using constructor name|939,689,257|100|
|[False conditional] Check if property is valid then instanceof |940,654,743|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:00:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":262503.6277931306,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":217453.9198828867,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":219093.2666166107,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":939454080.2460455,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":939689257.3404241,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":940654743.1747468,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,422|94|
|crypto.verify('RSA-SHA256')|7,318|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:08:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7421.661735531244,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":7317.589086468617,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,209|76|
|Intl.DateTimeFormat().format(new Date())|18,732|87|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,580|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,444|84|
|Reusing Intl.DateTimeFormat()|744,347|84|
|Date.toLocaleDateString()|895,068|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|19,807|85|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:29:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17208.550744962617,"samples":6},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18731.9186775536,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17580.49115391782,"samples":6},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19443.712258192743,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":744346.6980253495,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":895067.9267469503,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":19807.365504248104,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,198,703|95|
|Using brackets {}|1,217,609|97|
|Using '' + |1,213,203|96|
|Using date.toString()|1,342,541|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1198703.0123339342,"samples":4},{"name":"Using brackets {}","opsSec":1217608.6703221225,"samples":8},{"name":"Using '' + ","opsSec":1213202.6427552137,"samples":4},{"name":"Using date.toString()","opsSec":1342541.3067003014,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,073,882|93|
|Using delete property (proto: null)|23,644,767|97|
|Using delete property (cached proto: null)|4,123,331|91|
|Using undefined assignment|934,911,914|98|
|Using undefined assignment (proto: null)|25,670,432|98|
|Using undefined property (cached proto: null)|933,212,503|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:51:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4073881.8027648176,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23644767.24867159,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4123330.737954204,"samples":6},{"name":"Using undefined assignment","opsSec":934911914.4467353,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":25670432.096110832,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":933212503.0331613,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|259,182|52|
|NodeError|214,085|95|
|NodeError Range|216,437|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:00:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":259181.73172564214,"samples":3},{"name":"NodeError","opsSec":214084.546293464,"samples":3},{"name":"NodeError Range","opsSec":216436.83063306718,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,935,687|97|
|Function returning explicitly undefined|1,938,374|94|
|Function returning implicitly undefined|1,953,394|95|
|Function returning string|1,876,618|98|
|Function returning integer|1,981,247|98|
|Function returning float|1,936,063|97|
|Function returning functions|1,899,211|98|
|Function returning arrow functions|1,926,871|98|
|Function returning empty object|1,958,881|96|
|Function returning empty array|1,919,178|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:11:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1935687.3036894458,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1938373.6211498058,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1953394.3128406084,"samples":5},{"name":"Function returning string","opsSec":1876617.7257771986,"samples":5},{"name":"Function returning integer","opsSec":1981247.138301932,"samples":6},{"name":"Function returning float","opsSec":1936062.644122578,"samples":5},{"name":"Function returning functions","opsSec":1899210.8615185672,"samples":5},{"name":"Function returning arrow functions","opsSec":1926870.7226528672,"samples":7},{"name":"Function returning empty object","opsSec":1958880.70250652,"samples":6},{"name":"Function returning empty array","opsSec":1919177.853011982,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|952,041,208|98|
|using Array.includes (first item)|950,485,625|98|
|Using raw comparison|937,063,799|97|
|Using raw comparison (first item)|940,560,939|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:22:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":952041207.5606678,"samples":6},{"name":"using Array.includes (first item)","opsSec":950485625.2375089,"samples":6},{"name":"Using raw comparison","opsSec":937063798.8229771,"samples":6},{"name":"Using raw comparison (first item)","opsSec":940560938.5796468,"samples":8}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|104,643,051|95|
|Using Object.getOwnPropertyNames()|104,314,965|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:30:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":104643050.79465267,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":104314964.50649327,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|987,607,715|96|
|Length = 10_000 - Array.at|994,788,475|96|
|Length = 1_000_000 - Array.at|994,039,742|95|
|Length = 100 - Array[length - 1]|872,501,462|98|
|Length = 10_000 - Array[length - 1]|872,933,312|98|
|Length = 1_000_000 - Array[length - 1]|872,600,946|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:38:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":987607715.3447243,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":994788475.4553167,"samples":6},{"name":"Length = 1_000_000 - Array.at","opsSec":994039741.59442,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":872501461.9347192,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":872933312.493838,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":872600945.6248375,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|94,765,862|92|
|Object.create({})|2,856,820|89|
|Cached Empty.prototype|938,342,058|100|
|Empty.prototype|2,705,193|80|
|Empty class|1,671,817|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:48:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":94765862.15978219,"samples":5},{"name":"Object.create({})","opsSec":2856819.513036464,"samples":3},{"name":"Cached Empty.prototype","opsSec":938342057.8038332,"samples":7},{"name":"Empty.prototype","opsSec":2705192.7115455037,"samples":3},{"name":"Empty class","opsSec":1671817.4123758094,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|937,922,342|99|
|Using optional chain (obj.field?.field2) (undefined)|937,576,783|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|938,843,230|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|936,166,244|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:57:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":937922342.4523503,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":937576782.6405731,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":938843229.7238026,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":936166243.6149378,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|937,849,424|96|
|Using parseInt(x, 10) - big number (10 len)|938,291,236|95|
|Using + - small number (2 len)|941,392,856|99|
|Using + - big number (10 len)|939,061,972|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":937849423.8940759,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":938291235.9965589,"samples":6},{"name":"Using + - small number (2 len)","opsSec":941392856.3119822,"samples":6},{"name":"Using + - big number (10 len)","opsSec":939061972.4843779,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,448,323|85|
|Using ? operator to avoid rejection|1,506,954|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:13:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1448322.7215832595,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1506953.8433824154,"samples":5}]}-->