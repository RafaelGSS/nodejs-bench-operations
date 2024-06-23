## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,986,676|9993339|
|Using dot notation|20,109,250|10054626|
|Using define property (writable)|3,493,664|1746833|
|Using define property initialized (writable)|4,317,805|2158903|
|Using define property (getter)|2,254,137|1127069|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:39:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19986676.88068154,"samples":9993339},{"name":"Using dot notation","opsSec":20109250.6324695,"samples":10054626},{"name":"Using define property (writable)","opsSec":3493664.9309353987,"samples":1746833},{"name":"Using define property initialized (writable)","opsSec":4317805.0414478835,"samples":2158903},{"name":"Using define property (getter)","opsSec":2254137.053265971,"samples":1127069}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.088ms
new Array(length)|100|0.008ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.341ms
array.push|1,000,000|28.416ms
new Array(length)|1,000,000|12.99ms
array.push|100,000,000|2,082.54ms
new Array(length)|100,000,000|4,838.899ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.01ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.22ms
new Array(length)|10,000|0.264ms
array.push|1,000,000|23.892ms
new Array(length)|1,000,000|4.945ms
array.push|100,000,000|2,262.333ms
new Array(length)|100,000,000|5,407.469ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|226|114|
|Array.from|19|10|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:50:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":226.1940311169064,"samples":114},{"name":"Array.from","opsSec":19.843636667409957,"samples":10}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,433|2717|
|new Blob (1024)|724|363|
|text (128)|6,038|3020|
|text (1024)|772|387|
|arrayBuffer (128)|6,163|3082|
|arrayBuffer (1024)|757|379|
|slice (0, 64)|82,819|41410|
|slice (0, 512)|29,263|14632|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5433.579647411369,"samples":2717},{"name":"new Blob (1024)","opsSec":724.8833896266176,"samples":363},{"name":"text (128)","opsSec":6038.962530393164,"samples":3020},{"name":"text (1024)","opsSec":772.653135778614,"samples":387},{"name":"arrayBuffer (128)","opsSec":6163.944068371453,"samples":3082},{"name":"arrayBuffer (1024)","opsSec":757.0693104704236,"samples":379},{"name":"slice (0, 64)","opsSec":82819.22017422029,"samples":41410},{"name":"slice (0, 512)","opsSec":29263.76062243713,"samples":14632}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|321,096|160549|
|[True conditional] Using constructor name|313,484|156743|
|[True conditional] Check if property is valid then instanceof |318,399|159200|
|[False conditional] Using instanceof only|19,757,445|9878723|
|[False conditional] Using constructor name|19,624,379|9812190|
|[False conditional] Check if property is valid then instanceof |19,717,698|9858850|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:59:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":321096.8427669724,"samples":160549},{"name":"[True conditional] Using constructor name","opsSec":313484.06266856473,"samples":156743},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":318399.2199218999,"samples":159200},{"name":"[False conditional] Using instanceof only","opsSec":19757445.762893375,"samples":9878723},{"name":"[False conditional] Using constructor name","opsSec":19624379.018794175,"samples":9812190},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19717698.462057948,"samples":9858850}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,118|3560|
|crypto.verify('RSA-SHA256')|7,168|3585|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:04:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7118.50420294884,"samples":3560},{"name":"crypto.verify('RSA-SHA256')","opsSec":7168.496952569883,"samples":3585}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,356,650|678326|
|fromUnixToISOString(new Date())|1,930,408|965205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:09:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1356650.4588450908,"samples":678326},{"name":"fromUnixToISOString(new Date())","opsSec":1930408.3745955448,"samples":965205}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,237|7619|
|Intl.DateTimeFormat().format(new Date())|13,147|7285|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,893|10947|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,592|8797|
|Reusing Intl.DateTimeFormat()|1,025,970|512986|
|Date.toLocaleDateString()|1,065,141|532571|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,252|10627|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:12:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15237.335682638897,"samples":7619},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":13147.084663662861,"samples":7285},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21893.022520330363,"samples":10947},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17592.510336593754,"samples":8797},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1025970.4097459741,"samples":512986},{"name":"Date.toLocaleDateString()","opsSec":1065141.6527628792,"samples":532571},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21252.90335018959,"samples":10627}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,042,227|521114|
|Using brackets {}|1,017,255|508628|
|Using '' + |1,015,380|507691|
|Using date.toString()|1,176,298|588150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:17:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1042227.3371435436,"samples":521114},{"name":"Using brackets {}","opsSec":1017255.0417457377,"samples":508628},{"name":"Using '' + ","opsSec":1015380.4403754831,"samples":507691},{"name":"Using date.toString()","opsSec":1176298.1508589557,"samples":588150}]}-->