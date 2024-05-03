## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|911,276,527|95|
|Using dot notation|911,621,739|99|
|Using define property (writable)|4,637,360|97|
|Using define property initialized (writable)|6,771,919|94|
|Using define property (getter)|2,675,824|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:20:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":911276527.1248406,"samples":6},{"name":"Using dot notation","opsSec":911621738.5536375,"samples":10},{"name":"Using define property (writable)","opsSec":4637359.525829851,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6771918.923551921,"samples":5},{"name":"Using define property (getter)","opsSec":2675824.2833474968,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.079ms
new Array(length)|100|0.01ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.263ms
new Array(length)|10,000|0.148ms
array.push|1,000,000|29.219ms
new Array(length)|1,000,000|8.429ms
array.push|100,000,000|1,988.437ms
new Array(length)|100,000,000|4,194.6ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.017ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|19.981ms
new Array(length)|1,000,000|7.233ms
array.push|100,000,000|2,063.521ms
new Array(length)|100,000,000|4,869.362ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|218|84|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:33:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.51504743556623,"samples":2},{"name":"Array.from","opsSec":23.458366596410656,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,751,941|98|
|[async] async function|18,802,937|88|
|[async] function|340,866|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:41:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911751940.5422845,"samples":6},{"name":"[async] async function","opsSec":18802936.579410058,"samples":7},{"name":"[async] function","opsSec":340866.39330481016,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,045|90|
|new Blob (1024)|767|77|
|text (128)|6,447|88|
|text (1024)|813|88|
|arrayBuffer (128)|6,446|90|
|arrayBuffer (1024)|816|90|
|slice (0, 64)|202,761|58|
|slice (0, 512)|27,697|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:52:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6044.6659276934115,"samples":5},{"name":"new Blob (1024)","opsSec":766.588770581704,"samples":2},{"name":"text (128)","opsSec":6447.481139966268,"samples":6},{"name":"text (1024)","opsSec":812.6987539342531,"samples":2},{"name":"arrayBuffer (128)","opsSec":6445.982107741202,"samples":5},{"name":"arrayBuffer (1024)","opsSec":815.9479908326671,"samples":2},{"name":"slice (0, 64)","opsSec":202760.58162225556,"samples":3},{"name":"slice (0, 512)","opsSec":27697.440103380963,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|271,391|54|
|[True conditional] Using constructor name|226,751|96|
|[True conditional] Check if property is valid then instanceof |229,988|96|
|[False conditional] Using instanceof only|911,782,711|99|
|[False conditional] Using constructor name|913,514,734|95|
|[False conditional] Check if property is valid then instanceof |912,785,640|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:05:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":271391.46327653615,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":226751.42220827684,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":229987.70785463302,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":911782711.1473707,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":913514734.125303,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912785640.2397583,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,417|92|
|crypto.verify('RSA-SHA256')|7,405|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:11:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7417.287479254887,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":7405.2229410456575,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,762|80|
|Intl.DateTimeFormat().format(new Date())|18,022|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,764|77|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,702|80|
|Reusing Intl.DateTimeFormat()|760,059|86|
|Date.toLocaleDateString()|895,802|97|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,795|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:34:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17761.556230266116,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18022.190238890733,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17764.494935234354,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18701.961362642913,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":760059.0476413654,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":895801.8336038354,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21795.282111332435,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,186,706|94|
|Using brackets {}|1,218,290|97|
|Using '' + |1,211,039|98|
|Using date.toString()|1,354,385|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:44:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1186705.566558863,"samples":3},{"name":"Using brackets {}","opsSec":1218289.7190281125,"samples":5},{"name":"Using '' + ","opsSec":1211039.2103370784,"samples":4},{"name":"Using date.toString()","opsSec":1354385.0818145059,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,434,108|95|
|Using delete property (proto: null)|22,907,948|98|
|Using delete property (cached proto: null)|4,483,988|96|
|Using undefined assignment|909,598,299|97|
|Using undefined assignment (proto: null)|26,190,449|99|
|Using undefined property (cached proto: null)|908,165,205|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:54:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4434107.95574427,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22907948.113128122,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":4483988.276137414,"samples":4},{"name":"Using undefined assignment","opsSec":909598298.5294715,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":26190448.73689006,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":908165204.8772006,"samples":6}]}-->
