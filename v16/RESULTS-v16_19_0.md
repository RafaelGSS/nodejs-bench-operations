## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|849,455,710|99|
|Using dot notation|849,090,469|99|
|Using define property (writable)|4,505,435|100|
|Using define property initialized (writable)|5,721,307|94|
|Using define property (getter)|2,248,053|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:49:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Directly in the object","opsSec":849455710.3406456,"samples":9},{"name":"Using dot notation","opsSec":849090469.4449084,"samples":9},{"name":"Using define property (writable)","opsSec":4505435.374477738,"samples":6},{"name":"Using define property initialized (writable)","opsSec":5721306.551332858,"samples":6},{"name":"Using define property (getter)","opsSec":2248052.509515246,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.064ms
new Array(length)|100|0.006ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.273ms
new Array(length)|10,000|0.151ms
array.push|1,000,000|30.943ms
new Array(length)|1,000,000|6.045ms
array.push|100,000,000|1,788.519ms
new Array(length)|100,000,000|3,904.735ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.048ms
new Array(length)|100|0.009ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.432ms
new Array(length)|10,000|3.241ms
array.push|1,000,000|258.269ms
new Array(length)|1,000,000|4.671ms
array.push|100,000,000|2,187.776ms
new Array(length)|100,000,000|4,207.022ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|295|88|
|Array.from|21|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:07:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Array","opsSec":294.6421809033492,"samples":3},{"name":"Array.from","opsSec":21.315797378198916,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|849,956,988|98|
|[async] async function|16,365,153|90|
|[async] function|292,249|30|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:13:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"function","opsSec":849956988.412415,"samples":6},{"name":"[async] async function","opsSec":16365153.116623286,"samples":6},{"name":"[async] function","opsSec":292249.4806138971,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,376|82|
|new Blob (1024)|564|73|
|text (128)|41,817|88|
|text (1024)|26,212|75|
|arrayBuffer (128)|51,871|79|
|arrayBuffer (1024)|30,100|72|
|slice (0, 64)|92,984|81|
|slice (0, 512)|46,490|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:21:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Blob (128)","opsSec":4376.1027339449565,"samples":3},{"name":"new Blob (1024)","opsSec":564.2125917421217,"samples":2},{"name":"text (128)","opsSec":41817.18349144265,"samples":5},{"name":"text (1024)","opsSec":26211.855852439207,"samples":3},{"name":"arrayBuffer (128)","opsSec":51870.66517924242,"samples":4},{"name":"arrayBuffer (1024)","opsSec":30100.05187949594,"samples":4},{"name":"slice (0, 64)","opsSec":92983.67423104268,"samples":4},{"name":"slice (0, 512)","opsSec":46489.510135585835,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|243,024|53|
|[True conditional] Using constructor name|185,997|96|
|[True conditional] Check if property is valid then instanceof |188,506|97|
|[False conditional] Using instanceof only|848,727,847|94|
|[False conditional] Using constructor name|848,006,938|100|
|[False conditional] Check if property is valid then instanceof |847,825,648|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:37:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":243024.45842123806,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":185997.1938203462,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":188505.60589971283,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":848727846.7789552,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":848006938.415337,"samples":7},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":847825647.7346226,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|29,856|90|
|crypto.verify('RSA-SHA256')|29,315|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 18:49:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":29856.418071199725,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":29315.316267234964,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,414,389|97|
|fromUnixToISOString(new Date())|1,984,679|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:00:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2414389.2117306255,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1984679.357839347,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,230|79|
|Intl.DateTimeFormat().format(new Date())|14,249|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|15,039|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|11,706|75|
|Reusing Intl.DateTimeFormat()|617,348|99|
|Date.toLocaleDateString()|599,097|100|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,589|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:09:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11229.52213063676,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":14249.240388381157,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":15039.485082712883,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":11705.56616998861,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":617348.4056867491,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":599096.7645265983,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13589.063432172135,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|987,289|94|
|Using brackets {}|998,073|91|
|Using '' + |997,087|99|
|Using date.toString()|1,090,179|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:22:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":987288.8556955417,"samples":5},{"name":"Using brackets {}","opsSec":998073.1025152935,"samples":6},{"name":"Using '' + ","opsSec":997086.5908507367,"samples":5},{"name":"Using date.toString()","opsSec":1090178.6488422302,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,429,695|98|
|Using delete property (proto: null)|23,295,059|99|
|Using delete property (cached proto: null)|3,433,116|96|
|Using undefined assignment|847,172,484|101|
|Using undefined assignment (proto: null)|25,126,245|96|
|Using undefined property (cached proto: null)|845,531,595|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:32:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3429694.680007303,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23295059.190903496,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3433115.977368559,"samples":6},{"name":"Using undefined assignment","opsSec":847172483.5395938,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":25126244.763459645,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":845531594.689372,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|235,942|50|
|NodeError|183,037|91|
|NodeError Range|182,878|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:44:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":235941.96581534037,"samples":3},{"name":"NodeError","opsSec":183037.0710724933,"samples":3},{"name":"NodeError Range","opsSec":182877.8144022007,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,737,785|92|
|Function returning explicitly undefined|1,739,845|95|
|Function returning implicitly undefined|1,773,427|100|
|Function returning string|1,731,301|100|
|Function returning integer|1,746,922|100|
|Function returning float|1,756,124|95|
|Function returning functions|1,692,525|97|
|Function returning arrow functions|1,719,252|96|
|Function returning empty object|1,702,420|100|
|Function returning empty array|1,767,204|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:54:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1737784.70984865,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1739844.9088641966,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1773426.9747028146,"samples":5},{"name":"Function returning string","opsSec":1731301.3404497504,"samples":6},{"name":"Function returning integer","opsSec":1746922.2851000645,"samples":7},{"name":"Function returning float","opsSec":1756124.1626262935,"samples":6},{"name":"Function returning functions","opsSec":1692525.0048577222,"samples":6},{"name":"Function returning arrow functions","opsSec":1719251.5739950123,"samples":6},{"name":"Function returning empty object","opsSec":1702420.2704935437,"samples":6},{"name":"Function returning empty array","opsSec":1767204.3521600734,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|848,579,096|101|
|using Array.includes (first item)|849,626,075|98|
|Using raw comparison|850,556,973|99|
|Using raw comparison (first item)|849,989,019|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:13:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":848579096.1825773,"samples":7},{"name":"using Array.includes (first item)","opsSec":849626075.449059,"samples":8},{"name":"Using raw comparison","opsSec":850556972.7062522,"samples":8},{"name":"Using raw comparison (first item)","opsSec":849989019.4355488,"samples":8}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|89,695,617|90|
|Using Object.getOwnPropertyNames()|91,018,187|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:24:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":89695617.21747845,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":91018187.09717615,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,353,644|98|
|Length = 10_000 - Array.at|26,765,730|98|
|Length = 1_000_000 - Array.at|26,772,566|98|
|Length = 100 - Array[length - 1]|845,386,755|100|
|Length = 10_000 - Array[length - 1]|845,927,088|91|
|Length = 1_000_000 - Array[length - 1]|844,149,122|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:32:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26353643.548432976,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26765729.79838245,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26772565.66606675,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":845386754.5433847,"samples":12},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845927088.1321552,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":844149121.5329099,"samples":6}]}-->
