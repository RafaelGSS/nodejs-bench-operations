## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,194,930|97|
|Using dot notation|909,618,119|96|
|Using define property (writable)|4,597,368|96|
|Using define property initialized (writable)|6,333,403|92|
|Using define property (getter)|2,568,937|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912194930.0470653,"samples":6},{"name":"Using dot notation","opsSec":909618119.3453944,"samples":6},{"name":"Using define property (writable)","opsSec":4597367.817724662,"samples":6},{"name":"Using define property initialized (writable)","opsSec":6333403.29427827,"samples":5},{"name":"Using define property (getter)","opsSec":2568937.146117732,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.087ms
new Array(length)|100|0.007ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.17ms
array.push|1,000,000|27.374ms
new Array(length)|1,000,000|15.675ms
array.push|100,000,000|2,097.062ms
new Array(length)|100,000,000|4,242.198ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.072ms
new Array(length)|100|0.009ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.491ms
new Array(length)|10,000|3.087ms
array.push|1,000,000|255.431ms
new Array(length)|1,000,000|4.631ms
array.push|100,000,000|2,612.482ms
new Array(length)|100,000,000|4,647.079ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|213|90|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:30:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":213.32984953765558,"samples":2},{"name":"Array.from","opsSec":22.227805136064536,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,584,628|98|
|[async] async function|17,949,683|88|
|[async] function|375,729|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:35:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911584628.1527041,"samples":6},{"name":"[async] async function","opsSec":17949682.752275303,"samples":6},{"name":"[async] function","opsSec":375729.40531532036,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,730|92|
|new Blob (1024)|742|79|
|text (128)|38,086|68|
|text (1024)|25,276|78|
|arrayBuffer (128)|42,855|76|
|arrayBuffer (1024)|25,457|80|
|slice (0, 64)|95,881|81|
|slice (0, 512)|46,825|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:44:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5729.898676544437,"samples":5},{"name":"new Blob (1024)","opsSec":742.4077273862412,"samples":2},{"name":"text (128)","opsSec":38085.552240823345,"samples":5},{"name":"text (1024)","opsSec":25276.10925766244,"samples":5},{"name":"arrayBuffer (128)","opsSec":42855.069853772584,"samples":5},{"name":"arrayBuffer (1024)","opsSec":25457.269957829416,"samples":3},{"name":"slice (0, 64)","opsSec":95881.17814201184,"samples":4},{"name":"slice (0, 512)","opsSec":46825.3703275163,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|290,693|54|
|[True conditional] Using constructor name|228,188|94|
|[True conditional] Check if property is valid then instanceof |230,936|93|
|[False conditional] Using instanceof only|910,712,844|94|
|[False conditional] Using constructor name|910,964,236|97|
|[False conditional] Check if property is valid then instanceof |912,078,083|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:56:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":290692.7411382375,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":228188.32469293973,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":230936.40175932803,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":910712843.8050499,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":910964236.0701406,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912078082.58517,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,246|91|
|crypto.verify('RSA-SHA256')|7,288|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:07:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7245.855510486057,"samples":3},{"name":"crypto.verify('RSA-SHA256')","opsSec":7288.302139348693,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|15,962|83|
|Intl.DateTimeFormat().format(new Date())|15,022|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,990|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,338|77|
|Reusing Intl.DateTimeFormat()|797,134|98|
|Date.toLocaleDateString()|820,734|99|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|17,420|79|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:25:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":15962.314598180494,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15021.790156912846,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16989.986566069107,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":17337.743287350593,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":797133.5746031706,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":820734.2853009058,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":17420.206371605826,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,160,628|94|
|Using brackets {}|1,176,429|96|
|Using '' + |1,152,153|96|
|Using date.toString()|1,269,852|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:40:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1160627.671972728,"samples":4},{"name":"Using brackets {}","opsSec":1176428.6566399317,"samples":6},{"name":"Using '' + ","opsSec":1152152.7476630944,"samples":7},{"name":"Using date.toString()","opsSec":1269851.9360676233,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,772,673|96|
|Using delete property (proto: null)|24,059,273|98|
|Using delete property (cached proto: null)|3,789,264|93|
|Using undefined assignment|909,596,659|96|
|Using undefined assignment (proto: null)|27,099,678|99|
|Using undefined property (cached proto: null)|905,759,626|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:47:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3772673.1698026815,"samples":4},{"name":"Using delete property (proto: null)","opsSec":24059273.295125972,"samples":6},{"name":"Using delete property (cached proto: null)","opsSec":3789264.2034086096,"samples":6},{"name":"Using undefined assignment","opsSec":909596658.7111686,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":27099677.550169047,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":905759626.2608111,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|285,846|56|
|NodeError|226,202|93|
|NodeError Range|229,304|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:58:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":285846.1031805708,"samples":3},{"name":"NodeError","opsSec":226201.71816837558,"samples":3},{"name":"NodeError Range","opsSec":229303.7385900014,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,836,597|95|
|Function returning explicitly undefined|1,847,448|95|
|Function returning implicitly undefined|1,868,648|95|
|Function returning string|1,857,911|98|
|Function returning integer|1,912,268|99|
|Function returning float|1,868,708|95|
|Function returning functions|1,816,450|94|
|Function returning arrow functions|1,852,249|96|
|Function returning empty object|1,856,495|99|
|Function returning empty array|1,854,095|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:08:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1836597.099405213,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1847448.0062377423,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1868648.0414301606,"samples":5},{"name":"Function returning string","opsSec":1857910.8857439812,"samples":7},{"name":"Function returning integer","opsSec":1912268.121487502,"samples":5},{"name":"Function returning float","opsSec":1868707.827950955,"samples":5},{"name":"Function returning functions","opsSec":1816450.1396833758,"samples":6},{"name":"Function returning arrow functions","opsSec":1852248.9739298292,"samples":8},{"name":"Function returning empty object","opsSec":1856494.971012339,"samples":6},{"name":"Function returning empty array","opsSec":1854095.1672356017,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|908,375,301|97|
|using Array.includes (first item)|908,884,393|100|
|Using raw comparison|910,587,233|95|
|Using raw comparison (first item)|909,549,224|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:20:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":908375301.3370847,"samples":8},{"name":"using Array.includes (first item)","opsSec":908884393.0991156,"samples":9},{"name":"Using raw comparison","opsSec":910587232.9704052,"samples":6},{"name":"Using raw comparison (first item)","opsSec":909549223.680567,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|102,730,246|91|
|Using Object.getOwnPropertyNames()|103,426,788|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:28:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":102730245.93793716,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":103426788.3740777,"samples":5}]}-->
