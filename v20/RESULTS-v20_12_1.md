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

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|934,927,104|96|
|Raw usage underscore usage|936,243,289|98|
|Manipulating private properties using #|924,814,972|97|
|Manipulating private properties using underscore(_)|926,049,840|96|
|Manipulating private properties using Symbol|925,998,273|100|
|Manipulating private properties using PrivateSymbol|55,829,609|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:21:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":934927104.0199881,"samples":6},{"name":"Raw usage underscore usage","opsSec":936243289.482954,"samples":6},{"name":"Manipulating private properties using #","opsSec":924814972.4562052,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":926049839.5035324,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":925998273.4241982,"samples":7},{"name":"Manipulating private properties using PrivateSymbol","opsSec":55829608.75342183,"samples":5}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,643,138|94|
|Adding property in the object creation - small object|5,703,498|98|
|Adding property after the function creation - small class|285,501|90|
|Adding property in the function creation - small class|286,445|88|
|Adding property after the class creation - small class|292,221|93|
|Adding property in the class creation - small class|290,992|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:31:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5643137.864553242,"samples":4},{"name":"Adding property in the object creation - small object","opsSec":5703498.175731662,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":285500.6124923958,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":286444.64222665207,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":292221.39296101156,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":290992.2047241277,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|940,249,762|96|
|Getter|97,565,258|96|
|Method|885,545,935|94|
|DefineProperty (getter)|938,128,899|97|
|DefineProperty (getter & enumerable=false)|97,551,411|98|
|DefineProperty (getter & configurable=false)|939,692,063|97|
|DefineProperty (getter & enumerable=false & configurable=false)|97,575,742|96|
|DefineProperty (writable)|937,147,333|97|
|DefineProperty (writable & enumerable=false)|937,303,169|99|
|DefineProperty (writable & enumerable=false & configurable=false)|936,616,471|99|
|DefineProperties (getter)|97,463,644|96|
|DefineProperties (getter & enumerable=false)|97,559,391|97|
|DefineProperties (getter & enumerable=false & configurable=false)|70,864,423|73|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:43:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":940249761.809599,"samples":7},{"name":"Getter","opsSec":97565257.98615299,"samples":7},{"name":"Method","opsSec":885545935.34625,"samples":7},{"name":"DefineProperty (getter)","opsSec":938128899.2515271,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":97551410.98768552,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":939692062.9645565,"samples":9},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":97575742.30101319,"samples":6},{"name":"DefineProperty (writable)","opsSec":937147332.6512158,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":937303168.5070771,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":936616470.5619366,"samples":6},{"name":"DefineProperties (getter)","opsSec":97463643.90414529,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":97559390.96788846,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":70864422.712805,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|862,018,918|93|
|Setter|12,962,126|96|
|Method|696,804,213|98|
|DefineProperty (setter)|869,580,992|99|
|DefineProperty (setter & enumerable=false)|12,819,386|96|
|DefineProperty (setter & configurable=false)|12,477,834|96|
|DefineProperty (setter & enumerable=false & configurable=false)|12,582,702|96|
|DefineProperty (writable)|872,379,251|96|
|DefineProperty (writable & enumerable=false)|872,100,820|99|
|DefineProperty (writable & enumerable=false & configurable=false)|871,444,707|97|
|DefineProperties (setter)|722,300,461|76|
|DefineProperties (setter & enumerable=false)|12,847,889|97|
|DefineProperties (setter & enumerable=false & configurable=false)|11,907,736|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:02:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":862018917.6438955,"samples":6},{"name":"Setter","opsSec":12962126.15287049,"samples":4},{"name":"Method","opsSec":696804212.5336691,"samples":7},{"name":"DefineProperty (setter)","opsSec":869580991.6753279,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12819386.478882676,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":12477833.96616026,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12582701.946795821,"samples":6},{"name":"DefineProperty (writable)","opsSec":872379251.4601649,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":872100819.73361,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":871444707.2174487,"samples":6},{"name":"DefineProperties (setter)","opsSec":722300460.9458115,"samples":7},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12847888.549730945,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11907736.32691347,"samples":4}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,606,493|95|
|Using replaceAll()|2,871,313|98|
|Using replaceAll(//g)|3,395,408|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:16:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3606493.257617292,"samples":7},{"name":"Using replaceAll()","opsSec":2871313.070726994,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3395408.2417856446,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,059,233|91|
|{ ...object, __proto__: null }|29,956,118|99|
|{ ...object, newProp: true }|940,073|88|
|structuredClone|309,859|99|
|JSON.parse + JSON.stringify|190,327|93|
|loop + object.keys starting with {}|1,596,071|95|
|loop + object.keys starting with { __proto__: null }|873,117|96|
|loop + object.keys starting with { randomProp: true }|682,098|98|
|object.keys + reduce(FN, {})|1,598,806|92|
|object.keys + reduce(FN, { __proto__: null })|879,741|97|
|object.keys + reduce(FN, { newProp: true })|684,079|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:27:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":29059232.885949407,"samples":4},{"name":"{ ...object, __proto__: null }","opsSec":29956118.031638734,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":940073.3782443746,"samples":3},{"name":"structuredClone","opsSec":309858.7760920675,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":190326.80472327775,"samples":7},{"name":"loop + object.keys starting with {}","opsSec":1596070.651250563,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":873117.4929500415,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":682097.5451930573,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":1598806.400166534,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":879741.1651285506,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":684079.3935872677,"samples":6}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|263,749|95|
|Sort using first char|1,543,711|96|
|Sort using localeCompare|1,427,565|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:40:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":263749.3554941996,"samples":4},{"name":"Sort using first char","opsSec":1543710.992390494,"samples":4},{"name":"Sort using localeCompare","opsSec":1427564.8552603757,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,221|95|
|{...smallObject} - Total keys: 2|113,935,667|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,313|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,870|98|
|{ ...bigObject, ...anotherBigObject }|1,357|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,036,510|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|41,321,476|97|
|{ ...smallObject, ...anotherSmallObject }|27,396,530|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:48:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2221.088485206937,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":113935667.11819702,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1313.4604802448525,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6870.387330555989,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1357.4735037013336,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15036509.908074332,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":41321476.166449405,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27396529.820565604,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,301|85|
|streams.web.Readable reading 1e3 * "some data"|2,458|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:58:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2301.1249958638277,"samples":4},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2458.3782006054057,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,284|98|
|streams.web.WritableStream writing 1e3 * "some data"|1,027|47|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:06:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6284.077106270963,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1027.1798617998354,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|935,130,576|98|
|Using backtick (`)|935,636,534|98|
|Using array.join|12,340,199|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:14:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":935130575.9658889,"samples":6},{"name":"Using backtick (`)","opsSec":935636533.8593808,"samples":6},{"name":"Using array.join","opsSec":12340199.293524459,"samples":5}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,741,295|98|
|(short string) (true) String#slice and strict comparison|946,464,945|98|
|(long string) (true) String#endsWith|85,483,672|99|
|(long string) (true) String#slice and strict comparison|949,575,678|98|
|(short string) (false) String#endsWith|109,502,633|97|
|(short string) (false) String#slice and strict comparison|948,609,039|94|
|(long string) (false) String#endsWith|99,851,837|96|
|(long string) (false) String#slice and strict comparison|949,200,551|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:24:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":91741294.84526499,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":946464944.7699884,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":85483671.98302616,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":949575677.7114993,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":109502632.58243582,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":948609038.6587822,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":99851837.28841552,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":949200550.9682648,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|937,529,672|98|
|Using indexof|937,404,271|99|
|Using RegExp.test|19,183,317|97|
|Using RegExp.text with cached regex pattern|19,882,118|97|
|Using new RegExp.test|5,002,511|97|
|Using new RegExp.test with cached regex pattern|5,893,128|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":937529671.7173458,"samples":5},{"name":"Using indexof","opsSec":937404270.6357776,"samples":6},{"name":"Using RegExp.test","opsSec":19183316.679377496,"samples":5},{"name":"Using RegExp.text with cached regex pattern","opsSec":19882117.916569065,"samples":4},{"name":"Using new RegExp.test","opsSec":5002510.835635637,"samples":4},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5893127.602561776,"samples":6}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|340,716,466|95|
|(short string) (true) String#slice and strict comparison|951,467,818|99|
|(long string) (true) String#startsWith|222,638,830|95|
|(long string) (true) String#slice and strict comparison|950,526,095|97|
|(short string) (false) String#startsWith|978,042,399|94|
|(short string) (false) String#slice and strict comparison|950,510,299|98|
|(long string) (false) String#startsWith|972,707,198|93|
|(long string) (false) String#slice and strict comparison|951,435,484|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:48:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":340716465.82906073,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":951467818.3176146,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":222638829.9717951,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":950526095.1619779,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":978042399.3576406,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":950510298.8287363,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":972707197.567458,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":951435483.6485916,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|988,250,539|98|
|Using this|936,698,253|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:57:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":988250539.1593336,"samples":6},{"name":"Using this","opsSec":936698252.6506743,"samples":6}]}-->
