## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,934,418|9967210|
|Using dot notation|19,968,250|9984126|
|Using define property (writable)|3,590,025|1795013|
|Using define property initialized (writable)|3,946,251|1973126|
|Using define property (getter)|2,185,765|1092883|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:24:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19934418.325500306,"samples":9967210},{"name":"Using dot notation","opsSec":19968250.16281365,"samples":9984126},{"name":"Using define property (writable)","opsSec":3590025.9856333607,"samples":1795013},{"name":"Using define property initialized (writable)","opsSec":3946251.384385279,"samples":1973126},{"name":"Using define property (getter)","opsSec":2185765.4710485926,"samples":1092883}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.079ms
new Array(length)|100|0.006ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.328ms
array.push|1,000,000|31.444ms
new Array(length)|1,000,000|8.358ms
array.push|100,000,000|2,030.506ms
new Array(length)|100,000,000|4,703.547ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.263ms
array.push|1,000,000|23.978ms
new Array(length)|1,000,000|4.69ms
array.push|100,000,000|2,813.259ms
new Array(length)|100,000,000|4,215.718ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|235|118|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":235.57581323880123,"samples":118},{"name":"Array.from","opsSec":23.44092081781577,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|316,315|158158|
|[True conditional] Using constructor name|321,276|160639|
|[True conditional] Check if property is valid then instanceof |323,701|161851|
|[False conditional] Using instanceof only|19,901,088|9950545|
|[False conditional] Using constructor name|19,977,676|9988839|
|[False conditional] Check if property is valid then instanceof |19,847,148|9923575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:53:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":316315.98038837593,"samples":158158},{"name":"[True conditional] Using constructor name","opsSec":321276.2901675791,"samples":160639},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":323701.28008834104,"samples":161851},{"name":"[False conditional] Using instanceof only","opsSec":19901088.487519223,"samples":9950545},{"name":"[False conditional] Using constructor name","opsSec":19977676.80146534,"samples":9988839},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19847148.72975223,"samples":9923575}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,197|3599|
|crypto.verify('RSA-SHA256')|7,258|3630|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:59:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7197.043901505861,"samples":3599},{"name":"crypto.verify('RSA-SHA256')","opsSec":7258.464776631941,"samples":3630}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,066,566|533284|
|Using brackets {}|1,072,586|536294|
|Using '' + |1,072,022|536012|
|Using date.toString()|1,176,594|588298|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:15:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1066566.8801047292,"samples":533284},{"name":"Using brackets {}","opsSec":1072586.5305563917,"samples":536294},{"name":"Using '' + ","opsSec":1072022.2161553502,"samples":536012},{"name":"Using date.toString()","opsSec":1176594.9222383578,"samples":588298}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,157,216|1578609|
|Using delete property (proto: null)|8,974,525|4487264|
|Using delete property (cached proto: null)|3,084,729|1542365|
|Using undefined assignment|19,973,050|9986526|
|Using undefined assignment (proto: null)|9,401,509|4700755|
|Using undefined property (cached proto: null)|19,932,384|9966193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:20:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3157216.6108240886,"samples":1578609},{"name":"Using delete property (proto: null)","opsSec":8974525.971756566,"samples":4487264},{"name":"Using delete property (cached proto: null)","opsSec":3084729.117769536,"samples":1542365},{"name":"Using undefined assignment","opsSec":19973050.80158316,"samples":9986526},{"name":"Using undefined assignment (proto: null)","opsSec":9401509.379525173,"samples":4700755},{"name":"Using undefined property (cached proto: null)","opsSec":19932384.126341987,"samples":9966193}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|316,673|158337|
|NodeError|315,831|157916|
|NodeError Range|322,609|161305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:27:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":316673.6985266283,"samples":158337},{"name":"NodeError","opsSec":315831.463718172,"samples":157916},{"name":"NodeError Range","opsSec":322609.8251454621,"samples":161305}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,558,763|779382|
|Function returning explicitly undefined|1,539,769|769885|
|Function returning implicitly undefined|1,594,161|797081|
|Function returning string|1,546,637|773319|
|Function returning integer|1,594,011|797006|
|Function returning float|1,567,646|783824|
|Function returning functions|1,555,775|777888|
|Function returning arrow functions|1,568,179|784090|
|Function returning empty object|1,596,511|798256|
|Function returning empty array|1,621,901|810951|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1558763.791125692,"samples":779382},{"name":"Function returning explicitly undefined","opsSec":1539769.5996598161,"samples":769885},{"name":"Function returning implicitly undefined","opsSec":1594161.3591473848,"samples":797081},{"name":"Function returning string","opsSec":1546637.4463055,"samples":773319},{"name":"Function returning integer","opsSec":1594011.3368922046,"samples":797006},{"name":"Function returning float","opsSec":1567646.4480293626,"samples":783824},{"name":"Function returning functions","opsSec":1555775.5519368828,"samples":777888},{"name":"Function returning arrow functions","opsSec":1568179.1061379265,"samples":784090},{"name":"Function returning empty object","opsSec":1596511.744556106,"samples":798256},{"name":"Function returning empty array","opsSec":1621901.704814952,"samples":810951}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|19,894,873|9947437|
|using Array.includes (first item)|19,925,966|9962984|
|Using raw comparison|19,918,442|9959222|
|Using raw comparison (first item)|19,932,608|9966305|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:42:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":19894873.960213903,"samples":9947437},{"name":"using Array.includes (first item)","opsSec":19925966.52546819,"samples":9962984},{"name":"Using raw comparison","opsSec":19918442.167477556,"samples":9959222},{"name":"Using raw comparison (first item)","opsSec":19932608.28581374,"samples":9966305}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,777,646|8388824|
|Using Object.getOwnPropertyNames()|16,329,566|8164784|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:48:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":16777646.657752782,"samples":8388824},{"name":"Using Object.getOwnPropertyNames()","opsSec":16329566.75896914,"samples":8164784}]}-->
