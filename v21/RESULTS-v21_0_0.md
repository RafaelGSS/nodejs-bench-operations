## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,918,909|7959455|
|Using dot notation|16,274,031|8137016|
|Using define property (writable)|3,368,166|1684084|
|Using define property initialized (writable)|4,283,236|2141619|
|Using define property (getter)|2,046,571|1023286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:25:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15918909.521784162,"samples":7959455},{"name":"Using dot notation","opsSec":16274031.511116035,"samples":8137016},{"name":"Using define property (writable)","opsSec":3368166.5802367893,"samples":1684084},{"name":"Using define property initialized (writable)","opsSec":4283236.980839131,"samples":2141619},{"name":"Using define property (getter)","opsSec":2046571.9756029607,"samples":1023286}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.002ms
array.push|100|0.099ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.293ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|26.878ms
new Array(length)|1,000,000|15.268ms
array.push|100,000,000|1,966.528ms
new Array(length)|100,000,000|4,304.292ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.325ms
new Array(length)|10,000|0.202ms
array.push|1,000,000|21.994ms
new Array(length)|1,000,000|7.555ms
array.push|100,000,000|2,123.323ms
new Array(length)|100,000,000|4,858.063ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|235|118|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:39:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":235.79524303374603,"samples":118},{"name":"Array.from","opsSec":23.393467005067873,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|323,301|161651|
|[True conditional] Using constructor name|322,134|161068|
|[True conditional] Check if property is valid then instanceof |329,352|164677|
|[False conditional] Using instanceof only|16,510,791|8255396|
|[False conditional] Using constructor name|16,568,766|8284384|
|[False conditional] Check if property is valid then instanceof |16,523,702|8261852|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:54:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":323301.3421903481,"samples":161651},{"name":"[True conditional] Using constructor name","opsSec":322134.3398304248,"samples":161068},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":329352.18657412607,"samples":164677},{"name":"[False conditional] Using instanceof only","opsSec":16510791.275687791,"samples":8255396},{"name":"[False conditional] Using constructor name","opsSec":16568766.1117558,"samples":8284384},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16523702.936319401,"samples":8261852}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,557|3279|
|crypto.verify('RSA-SHA256')|6,855|3429|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:00:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6557.696888757748,"samples":3279},{"name":"crypto.verify('RSA-SHA256')","opsSec":6855.184648645488,"samples":3429}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,042,532|521267|
|Using brackets {}|1,060,920|530461|
|Using '' + |1,047,284|523643|
|Using date.toString()|1,153,516|576759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:15:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1042532.217334494,"samples":521267},{"name":"Using brackets {}","opsSec":1060920.1024211387,"samples":530461},{"name":"Using '' + ","opsSec":1047284.8978587296,"samples":523643},{"name":"Using date.toString()","opsSec":1153516.277826564,"samples":576759}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,283,967|1641984|
|Using delete property (proto: null)|9,050,929|4525465|
|Using delete property (cached proto: null)|3,269,238|1634620|
|Using undefined assignment|16,554,281|8277141|
|Using undefined assignment (proto: null)|9,450,096|4725049|
|Using undefined property (cached proto: null)|16,548,120|8274061|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:22:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3283967.6382729886,"samples":1641984},{"name":"Using delete property (proto: null)","opsSec":9050929.555470588,"samples":4525465},{"name":"Using delete property (cached proto: null)","opsSec":3269238.812122357,"samples":1634620},{"name":"Using undefined assignment","opsSec":16554281.660571044,"samples":8277141},{"name":"Using undefined assignment (proto: null)","opsSec":9450096.562535856,"samples":4725049},{"name":"Using undefined property (cached proto: null)","opsSec":16548120.918966023,"samples":8274061}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|306,392|153197|
|NodeError|304,201|152101|
|NodeError Range|310,812|155407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:28:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":306392.45616861136,"samples":153197},{"name":"NodeError","opsSec":304201.31969442876,"samples":152101},{"name":"NodeError Range","opsSec":310812.4716900787,"samples":155407}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,611,843|805922|
|Function returning explicitly undefined|1,599,497|799749|
|Function returning implicitly undefined|1,633,553|816777|
|Function returning string|1,575,682|787842|
|Function returning integer|1,643,710|821856|
|Function returning float|1,623,868|811935|
|Function returning functions|1,573,396|786699|
|Function returning arrow functions|1,603,141|801571|
|Function returning empty object|1,618,937|809469|
|Function returning empty array|1,590,523|795262|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:34:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1611843.561136878,"samples":805922},{"name":"Function returning explicitly undefined","opsSec":1599497.5393292839,"samples":799749},{"name":"Function returning implicitly undefined","opsSec":1633553.74217115,"samples":816777},{"name":"Function returning string","opsSec":1575682.507830877,"samples":787842},{"name":"Function returning integer","opsSec":1643710.3940302862,"samples":821856},{"name":"Function returning float","opsSec":1623868.5806698282,"samples":811935},{"name":"Function returning functions","opsSec":1573396.9714015732,"samples":786699},{"name":"Function returning arrow functions","opsSec":1603141.2783711592,"samples":801571},{"name":"Function returning empty object","opsSec":1618937.7105113785,"samples":809469},{"name":"Function returning empty array","opsSec":1590523.9575284282,"samples":795262}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,464,949|8232475|
|using Array.includes (first item)|16,516,749|8258375|
|Using raw comparison|16,499,465|8249733|
|Using raw comparison (first item)|16,525,302|8262652|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:42:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16464949.717360405,"samples":8232475},{"name":"using Array.includes (first item)","opsSec":16516749.070655636,"samples":8258375},{"name":"Using raw comparison","opsSec":16499465.205376633,"samples":8249733},{"name":"Using raw comparison (first item)","opsSec":16525302.636781046,"samples":8262652}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,712,878|6856440|
|Using Object.getOwnPropertyNames()|14,541,635|7270818|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:49:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13712878.587617029,"samples":6856440},{"name":"Using Object.getOwnPropertyNames()","opsSec":14541635.916792093,"samples":7270818}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,226,035|8113018|
|Length = 10_000 - Array.at|16,288,002|8144002|
|Length = 1_000_000 - Array.at|16,352,996|8176499|
|Length = 100 - Array[length - 1]|16,284,992|8142497|
|Length = 10_000 - Array[length - 1]|16,259,356|8129679|
|Length = 1_000_000 - Array[length - 1]|16,286,055|8143028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:57:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16226035.961314116,"samples":8113018},{"name":"Length = 10_000 - Array.at","opsSec":16288002.920425221,"samples":8144002},{"name":"Length = 1_000_000 - Array.at","opsSec":16352996.151941258,"samples":8176499},{"name":"Length = 100 - Array[length - 1]","opsSec":16284992.974981751,"samples":8142497},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16259356.294325646,"samples":8129679},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16286055.456394251,"samples":8143028}]}-->
