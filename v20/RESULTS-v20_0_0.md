## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,075,220|8037611|
|Using dot notation|16,112,841|8056421|
|Using define property (writable)|3,390,546|1695274|
|Using define property initialized (writable)|3,947,937|1973969|
|Using define property (getter)|2,011,045|1005523|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:23:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16075220.076019175,"samples":8037611},{"name":"Using dot notation","opsSec":16112841.669622328,"samples":8056421},{"name":"Using define property (writable)","opsSec":3390546.1132663186,"samples":1695274},{"name":"Using define property initialized (writable)","opsSec":3947937.098271432,"samples":1973969},{"name":"Using define property (getter)","opsSec":2011045.5588870256,"samples":1005523}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.007ms
array.push|1,000|0.08ms
new Array(length)|1,000|0.044ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.328ms
array.push|1,000,000|31.709ms
new Array(length)|1,000,000|7.276ms
array.push|100,000,000|2,035.353ms
new Array(length)|100,000,000|4,723.197ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.03ms
new Array(length)|100|0.013ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.26ms
array.push|1,000,000|26.226ms
new Array(length)|1,000,000|4.373ms
array.push|100,000,000|2,805.041ms
new Array(length)|100,000,000|4,285.07ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|232|117|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:39:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":232.1924753926441,"samples":117},{"name":"Array.from","opsSec":23.583588246839337,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|312,412|156207|
|[True conditional] Using constructor name|306,265|153133|
|[True conditional] Check if property is valid then instanceof |312,174|156088|
|[False conditional] Using instanceof only|12,504,221|6252111|
|[False conditional] Using constructor name|15,909,029|7954515|
|[False conditional] Check if property is valid then instanceof |15,961,782|7980908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:52:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":312412.51819643093,"samples":156207},{"name":"[True conditional] Using constructor name","opsSec":306265.6205911244,"samples":153133},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":312174.66401309514,"samples":156088},{"name":"[False conditional] Using instanceof only","opsSec":12504221.385864828,"samples":6252111},{"name":"[False conditional] Using constructor name","opsSec":15909029.99241398,"samples":7954515},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15961782.054178255,"samples":7980908}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,713|3357|
|crypto.verify('RSA-SHA256')|6,863|3432|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:58:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6713.002491962647,"samples":3357},{"name":"crypto.verify('RSA-SHA256')","opsSec":6863.205005890635,"samples":3432}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,007,662|503832|
|Using brackets {}|1,039,547|519774|
|Using '' + |1,030,821|515411|
|Using date.toString()|1,153,718|576860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:14:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1007662.3495139263,"samples":503832},{"name":"Using brackets {}","opsSec":1039547.4532485767,"samples":519774},{"name":"Using '' + ","opsSec":1030821.9577280576,"samples":515411},{"name":"Using date.toString()","opsSec":1153718.4051562995,"samples":576860}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,013,092|1506547|
|Using delete property (proto: null)|8,689,687|4344844|
|Using delete property (cached proto: null)|3,013,451|1506726|
|Using undefined assignment|14,780,665|7390334|
|Using undefined assignment (proto: null)|9,014,351|4507176|
|Using undefined property (cached proto: null)|14,677,826|7338914|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:21:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3013092.751460266,"samples":1506547},{"name":"Using delete property (proto: null)","opsSec":8689687.502772093,"samples":4344844},{"name":"Using delete property (cached proto: null)","opsSec":3013451.968387631,"samples":1506726},{"name":"Using undefined assignment","opsSec":14780665.970184421,"samples":7390334},{"name":"Using undefined assignment (proto: null)","opsSec":9014351.548670333,"samples":4507176},{"name":"Using undefined property (cached proto: null)","opsSec":14677826.285261422,"samples":7338914}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|300,146|150074|
|NodeError|297,344|148673|
|NodeError Range|301,994|150998|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:28:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":300146.2861271971,"samples":150074},{"name":"NodeError","opsSec":297344.6244022627,"samples":148673},{"name":"NodeError Range","opsSec":301994.2859430382,"samples":150998}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,508,932|754467|
|Function returning explicitly undefined|1,552,979|776490|
|Function returning implicitly undefined|1,540,580|770291|
|Function returning string|1,511,194|755598|
|Function returning integer|1,572,305|786153|
|Function returning float|1,530,382|765192|
|Function returning functions|1,478,878|739440|
|Function returning arrow functions|1,481,533|740767|
|Function returning empty object|1,544,968|772485|
|Function returning empty array|1,548,579|774290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1508932.6401163626,"samples":754467},{"name":"Function returning explicitly undefined","opsSec":1552979.0373264558,"samples":776490},{"name":"Function returning implicitly undefined","opsSec":1540580.423535543,"samples":770291},{"name":"Function returning string","opsSec":1511194.4420765,"samples":755598},{"name":"Function returning integer","opsSec":1572305.4766858947,"samples":786153},{"name":"Function returning float","opsSec":1530382.3770511595,"samples":765192},{"name":"Function returning functions","opsSec":1478878.4239133464,"samples":739440},{"name":"Function returning arrow functions","opsSec":1481533.3641948567,"samples":740767},{"name":"Function returning empty object","opsSec":1544968.3637930222,"samples":772485},{"name":"Function returning empty array","opsSec":1548579.0127324392,"samples":774290}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,102,958|8051480|
|using Array.includes (first item)|16,142,381|8071191|
|Using raw comparison|16,148,465|8074234|
|Using raw comparison (first item)|16,099,624|8049813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:40:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16102958.425909767,"samples":8051480},{"name":"using Array.includes (first item)","opsSec":16142381.538162759,"samples":8071191},{"name":"Using raw comparison","opsSec":16148465.774645515,"samples":8074234},{"name":"Using raw comparison (first item)","opsSec":16099624.54138915,"samples":8049813}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,171,017|7085509|
|Using Object.getOwnPropertyNames()|13,852,090|6926046|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:48:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14171017.729709286,"samples":7085509},{"name":"Using Object.getOwnPropertyNames()","opsSec":13852090.474200774,"samples":6926046}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,642,293|7821147|
|Length = 10_000 - Array.at|16,008,337|8004169|
|Length = 1_000_000 - Array.at|16,008,859|8004430|
|Length = 100 - Array[length - 1]|16,023,471|8011736|
|Length = 10_000 - Array[length - 1]|16,028,467|8014234|
|Length = 1_000_000 - Array[length - 1]|15,979,573|7989787|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:55:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15642293.485340953,"samples":7821147},{"name":"Length = 10_000 - Array.at","opsSec":16008337.213762889,"samples":8004169},{"name":"Length = 1_000_000 - Array.at","opsSec":16008859.442745809,"samples":8004430},{"name":"Length = 100 - Array[length - 1]","opsSec":16023471.877750613,"samples":8011736},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16028467.228060152,"samples":8014234},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15979573.169457685,"samples":7989787}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,108,388|6554195|
|Object.create({})|1,961,994|980998|
|Cached Empty.prototype|15,908,280|7954141|
|Empty.prototype|1,711,176|855590|
|Empty class|1,171,212|585607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:04:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13108388.856146257,"samples":6554195},{"name":"Object.create({})","opsSec":1961994.7660069007,"samples":980998},{"name":"Cached Empty.prototype","opsSec":15908280.854565427,"samples":7954141},{"name":"Empty.prototype","opsSec":1711176.436735392,"samples":855590},{"name":"Empty class","opsSec":1171212.9383336087,"samples":585607}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,038,180|8019091|
|Using optional chain (obj.field?.field2) (undefined)|16,120,657|8060329|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,148,810|8074406|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,665,594|7832798|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:12:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16038180.699907916,"samples":8019091},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16120657.154437881,"samples":8060329},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16148810.421427662,"samples":8074406},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15665594.47613274,"samples":7832798}]}-->
