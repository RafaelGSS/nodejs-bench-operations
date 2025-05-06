## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|66,839,065|33419610|
|Using dot notation|66,203,488|33103648|
|Using define property (writable)|3,897,551|1948777|
|Using define property initialized (writable)|5,502,239|2756164|
|Using define property (getter)|2,049,858|1038834|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:59:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":33419610,"opsSec":66839065.200725},{"name":"Using dot notation","samples":33103648,"opsSec":66203488.504969105},{"name":"Using define property (writable)","samples":1948777,"opsSec":3897551.0222710194},{"name":"Using define property initialized (writable)","samples":2756164,"opsSec":5502239.193255552},{"name":"Using define property (getter)","samples":1038834,"opsSec":2049858.3304779876}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.014ms
new Array(length)|10|0.003ms
array.push|100|0.034ms
new Array(length)|100|0.012ms
array.push|1,000|0.059ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.402ms
new Array(length)|10,000|0.14ms
array.push|1,000,000|29.293ms
new Array(length)|1,000,000|8.904ms
array.push|100,000,000|2,085.466ms
new Array(length)|100,000,000|4,447.154ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.013ms
new Array(length)|100|0.011ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.489ms
new Array(length)|10,000|3.379ms
array.push|1,000,000|273.756ms
new Array(length)|1,000,000|5.074ms
array.push|100,000,000|2,420.587ms
new Array(length)|100,000,000|4,726.945ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|230|116|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:11:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":116,"opsSec":230.5825174931278},{"name":"Array.from","samples":11,"opsSec":20.76092947383351}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,929|1965|
|new Blob (1024)|559|282|
|text (128)|45,917|22959|
|text (1024)|30,015|15021|
|arrayBuffer (128)|48,398|24200|
|arrayBuffer (1024)|29,094|14549|
|slice (0, 64)|76,741|38371|
|slice (0, 512)|39,400|19702|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:12:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":1965,"opsSec":3929.319174725234},{"name":"new Blob (1024)","samples":282,"opsSec":559.0874561851635},{"name":"text (128)","samples":22959,"opsSec":45917.604373920716},{"name":"text (1024)","samples":15021,"opsSec":30015.436398817918},{"name":"arrayBuffer (128)","samples":24200,"opsSec":48398.954388989376},{"name":"arrayBuffer (1024)","samples":14549,"opsSec":29094.78008068847},{"name":"slice (0, 64)","samples":38371,"opsSec":76741.80599671444},{"name":"slice (0, 512)","samples":19702,"opsSec":39400.779380293454}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.45 ms|1|
|Gzip|133.76 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:21:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.13344731},{"name":"Gzip","samples":1,"totalTime":0.133758347}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,777|3389|
|crypto.verify('RSA-SHA256')|6,831|3416|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:25:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3389,"opsSec":6777.247088511949},{"name":"crypto.verify('RSA-SHA256')","samples":3416,"opsSec":6831.159029674175}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,448,991|1227420|
|fromUnixToISOString(new Date())|2,038,687|1019345|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:28:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":1227420,"opsSec":2448991.729382499},{"name":"fromUnixToISOString(new Date())","samples":1019345,"opsSec":2038687.667741308}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,077|9039|
|Intl.DateTimeFormat().format(new Date())|17,752|8877|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,672|9337|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,397|9109|
|Reusing Intl.DateTimeFormat()|375,755|209027|
|Date.toLocaleDateString()|743,829|371923|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,238|10620|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:32:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9039,"opsSec":18077.012055137162},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8877,"opsSec":17752.209192641065},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9337,"opsSec":18672.34768395345},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9109,"opsSec":17397.858446053957},{"name":"Reusing Intl.DateTimeFormat()","samples":209027,"opsSec":375755.0287105104},{"name":"Date.toLocaleDateString()","samples":371923,"opsSec":743829.6059954839},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10620,"opsSec":21238.48357227294}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,027,288|513735|
|Using brackets {}|1,035,263|518834|
|Using '' + |1,042,380|521227|
|Using date.toString()|1,145,607|572804|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:36:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":513735,"opsSec":1027288.9218363258},{"name":"Using brackets {}","samples":518834,"opsSec":1035263.8316500911},{"name":"Using '' + ","samples":521227,"opsSec":1042380.7894276353},{"name":"Using date.toString()","samples":572804,"opsSec":1145607.791499382}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,303,514|1652195|
|Using delete property (proto: null)|18,260,352|9130682|
|Using delete property (cached proto: null)|3,318,446|1659657|
|Using undefined assignment|82,013,361|41006682|
|Using undefined assignment (proto: null)|20,576,402|10291045|
|Using undefined property (cached proto: null)|81,768,768|40884403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:42:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1652195,"opsSec":3303514.046822373},{"name":"Using delete property (proto: null)","samples":9130682,"opsSec":18260352.157366257},{"name":"Using delete property (cached proto: null)","samples":1659657,"opsSec":3318446.7305838554},{"name":"Using undefined assignment","samples":41006682,"opsSec":82013361.37557244},{"name":"Using undefined assignment (proto: null)","samples":10291045,"opsSec":20576402.47659145},{"name":"Using undefined property (cached proto: null)","samples":40884403,"opsSec":81768768.549904}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|297,834|148918|
|NodeError|280,677|140339|
|NodeError Range|263,409|131859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:46:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":148918,"opsSec":297834.757433392},{"name":"NodeError","samples":140339,"opsSec":280677.93768949783},{"name":"NodeError Range","samples":131859,"opsSec":263409.41376449954}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,939,436|35474183|
|using Array.includes (first item)|84,917,823|42471408|
|Using raw comparison|103,226,426|51613220|
|Using raw comparison (first item)|100,173,612|50192184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:49:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":35474183,"opsSec":70939436.28563924},{"name":"using Array.includes (first item)","samples":42471408,"opsSec":84917823.66548136},{"name":"Using raw comparison","samples":51613220,"opsSec":103226426.9934702},{"name":"Using raw comparison (first item)","samples":50192184,"opsSec":100173612.33631119}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,592,864|21299605|
|Using Object.getOwnPropertyNames()|45,100,244|22553861|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:55:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":21299605,"opsSec":42592864.344698474},{"name":"Using Object.getOwnPropertyNames()","samples":22553861,"opsSec":45100244.28929635}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,543,562|10782261|
|Length = 10_000 - Array.at|21,462,620|10778946|
|Length = 1_000_000 - Array.at|21,295,465|10653680|
|Length = 100 - Array[length - 1]|102,272,843|51137584|
|Length = 10_000 - Array[length - 1]|102,123,031|51068463|
|Length = 1_000_000 - Array[length - 1]|101,565,000|50787003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10782261,"opsSec":21543562.09608822},{"name":"Length = 10_000 - Array.at","samples":10778946,"opsSec":21462620.244315054},{"name":"Length = 1_000_000 - Array.at","samples":10653680,"opsSec":21295465.800895296},{"name":"Length = 100 - Array[length - 1]","samples":51137584,"opsSec":102272843.33827092},{"name":"Length = 10_000 - Array[length - 1]","samples":51068463,"opsSec":102123031.54881959},{"name":"Length = 1_000_000 - Array[length - 1]","samples":50787003,"opsSec":101565000.0283175}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|98,920,172|49460097|
|~ (small)|106,508,076|53254049|
|Math.floor (long)|102,982,117|51491089|
|~ (long)|94,409,873|47248576|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:01:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":49460097,"opsSec":98920172.83108301},{"name":"~ (small)","samples":53254049,"opsSec":106508076.05933633},{"name":"Math.floor (long)","samples":51491089,"opsSec":102982117.24055083},{"name":"~ (long)","samples":47248576,"opsSec":94409873.2820864}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,828,175|15914840|
|Object.create({})|1,308,836|665968|
|new Function with empty prototype|71,541,321|35780905|
|Empty class|71,032,056|35677079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15914840,"opsSec":31828175.291184932},{"name":"Object.create({})","samples":665968,"opsSec":1308836.079789884},{"name":"new Function with empty prototype","samples":35780905,"opsSec":71541321.28099833},{"name":"Empty class","samples":35677079,"opsSec":71032056.74580106}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,088,173|46044102|
|Using parseInt(x, 10) - big number (10 len)|16,734,237|8370457|
|Using + - small number (2 len)|103,515,027|51786620|
|Using + - big number (10 len)|102,599,512|51305646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:08:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46044102,"opsSec":92088173.42672643},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8370457,"opsSec":16734237.240152027},{"name":"Using + - small number (2 len)","samples":51786620,"opsSec":103515027.4961673},{"name":"Using + - big number (10 len)","samples":51305646,"opsSec":102599512.1396132}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|691,219|352821|
|Using ? operator to avoid rejection|733,967|368303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:12:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":352821,"opsSec":691219.5641672974},{"name":"Using ? operator to avoid rejection","samples":368303,"opsSec":733967.5744654957}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|84,717,634|42397978|
|Raw usage underscore usage|80,776,359|40406271|
|Manipulating private properties using #|81,320,019|40660018|
|Manipulating private properties using underscore(_)|81,029,132|40529941|
|Manipulating private properties using Symbol|81,054,492|40530580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:16:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":42397978,"opsSec":84717634.37758265},{"name":"Raw usage underscore usage","samples":40406271,"opsSec":80776359.68365419},{"name":"Manipulating private properties using #","samples":40660018,"opsSec":81320019.57335605},{"name":"Manipulating private properties using underscore(_)","samples":40529941,"opsSec":81029132.74059106},{"name":"Manipulating private properties using Symbol","samples":40530580,"opsSec":81054492.2953548}]}-->
