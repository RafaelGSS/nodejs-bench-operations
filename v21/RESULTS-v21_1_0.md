## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,469,783|98|
|Using dot notation|912,069,795|96|
|Using define property (writable)|4,753,912|97|
|Using define property initialized (writable)|6,856,884|95|
|Using define property (getter)|2,661,421|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:18:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912469783.2943633,"samples":6},{"name":"Using dot notation","opsSec":912069795.1796272,"samples":6},{"name":"Using define property (writable)","opsSec":4753912.026638876,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6856884.326699565,"samples":6},{"name":"Using define property (getter)","opsSec":2661420.8297384307,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.002ms
array.push|100|0.095ms
new Array(length)|100|0.014ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.153ms
array.push|1,000,000|30.554ms
new Array(length)|1,000,000|8.267ms
array.push|100,000,000|1,933.705ms
new Array(length)|100,000,000|4,202.263ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.01ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.345ms
new Array(length)|10,000|0.197ms
array.push|1,000,000|21.658ms
new Array(length)|1,000,000|7.827ms
array.push|100,000,000|2,068.478ms
new Array(length)|100,000,000|4,800.218ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|224|87|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:22:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":223.9469234739886,"samples":3},{"name":"Array.from","opsSec":23.25438292227884,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|910,882,655|98|
|[async] async function|18,262,586|88|
|[async] function|215,588|25|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:23:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":910882654.6548169,"samples":6},{"name":"[async] async function","opsSec":18262586.081368785,"samples":6},{"name":"[async] function","opsSec":215587.86602412837,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,008|91|
|new Blob (1024)|761|77|
|text (128)|6,548|89|
|text (1024)|828|90|
|arrayBuffer (128)|6,533|89|
|arrayBuffer (1024)|823|89|
|slice (0, 64)|196,494|58|
|slice (0, 512)|29,747|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:30:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6008.360594286962,"samples":4},{"name":"new Blob (1024)","opsSec":760.6641523729096,"samples":2},{"name":"text (128)","opsSec":6548.485805680427,"samples":6},{"name":"text (1024)","opsSec":827.7579112801415,"samples":2},{"name":"arrayBuffer (128)","opsSec":6533.005150848201,"samples":5},{"name":"arrayBuffer (1024)","opsSec":823.1575392027016,"samples":2},{"name":"slice (0, 64)","opsSec":196494.40736468078,"samples":4},{"name":"slice (0, 512)","opsSec":29747.38618908927,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|279,484|51|
|[True conditional] Using constructor name|230,785|93|
|[True conditional] Check if property is valid then instanceof |231,499|92|
|[False conditional] Using instanceof only|912,007,475|96|
|[False conditional] Using constructor name|913,369,355|98|
|[False conditional] Check if property is valid then instanceof |913,663,294|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:31:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":279483.6244066246,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":230785.0230823704,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":231499.32351916222,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":912007474.9715859,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":913369354.8466684,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":913663294.3579303,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,072|93|
|crypto.verify('RSA-SHA256')|7,018|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:32:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7072.344572796575,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":7018.194633306479,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,623,902|91|
|fromUnixToISOString(new Date())|2,372,435|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1623901.7832623746,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2372435.3703514826,"samples":5}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,246|82|
|Intl.DateTimeFormat().format(new Date())|18,133|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,936|90|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,552|88|
|Reusing Intl.DateTimeFormat()|894,994|98|
|Date.toLocaleDateString()|910,448|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,425|90|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:35:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18246.214243981613,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18132.84236478236,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":20935.828022864174,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15552.24095045049,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":894993.9756774461,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":910447.8030634733,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21424.57987479227,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,189,582|93|
|Using brackets {}|1,214,416|99|
|Using '' + |1,208,706|99|
|Using date.toString()|1,328,592|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:36:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1189582.2178840952,"samples":6},{"name":"Using brackets {}","opsSec":1214416.4180768467,"samples":5},{"name":"Using '' + ","opsSec":1208706.4984898528,"samples":5},{"name":"Using date.toString()","opsSec":1328592.216855907,"samples":4}]}-->
