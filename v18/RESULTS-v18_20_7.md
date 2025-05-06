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

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,564,374|1782213|
|Adding property in the object creation - small object|3,731,274|1865654|
|Adding property after the function creation - small class|184,051|92742|
|Adding property in the function creation - small class|189,354|94854|
|Adding property after the class creation - small class|157,393|80029|
|Adding property in the class creation - small class|160,475|80242|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:20:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1782213,"opsSec":3564374.0884557758},{"name":"Adding property in the object creation - small object","samples":1865654,"opsSec":3731274.090181068},{"name":"Adding property after the function creation - small class","samples":92742,"opsSec":184051.90026234233},{"name":"Adding property in the function creation - small class","samples":94854,"opsSec":189354.14671058435},{"name":"Adding property after the class creation - small class","samples":80029,"opsSec":157393.20151759073},{"name":"Adding property in the class creation - small class","samples":80242,"opsSec":160475.6687451814}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|98,536,535|49290632|
|Getter|56,695,177|28357143|
|Method|96,009,677|48051683|
|DefineProperty (getter)|98,909,049|49454865|
|DefineProperty (getter & enumerable=false)|56,269,588|28134883|
|DefineProperty (getter & configurable=false)|99,442,696|49721358|
|DefineProperty (getter & enumerable=false & configurable=false)|55,153,183|27739316|
|DefineProperty (writable)|98,832,500|49420409|
|DefineProperty (writable & enumerable=false)|98,806,670|49405879|
|DefineProperty (writable & enumerable=false & configurable=false)|87,365,237|43682631|
|DefineProperties (getter)|55,910,921|27955465|
|DefineProperties (getter & enumerable=false)|55,801,376|27903028|
|DefineProperties (getter & enumerable=false & configurable=false)|55,221,637|27612921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:25:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":49290632,"opsSec":98536535.50751014},{"name":"Getter","samples":28357143,"opsSec":56695177.57074191},{"name":"Method","samples":48051683,"opsSec":96009677.83617389},{"name":"DefineProperty (getter)","samples":49454865,"opsSec":98909049.70355614},{"name":"DefineProperty (getter & enumerable=false)","samples":28134883,"opsSec":56269588.0755625},{"name":"DefineProperty (getter & configurable=false)","samples":49721358,"opsSec":99442696.90700221},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27739316,"opsSec":55153183.98165469},{"name":"DefineProperty (writable)","samples":49420409,"opsSec":98832500.45442677},{"name":"DefineProperty (writable & enumerable=false)","samples":49405879,"opsSec":98806670.83974513},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":43682631,"opsSec":87365237.88719435},{"name":"DefineProperties (getter)","samples":27955465,"opsSec":55910921.3897181},{"name":"DefineProperties (getter & enumerable=false)","samples":27903028,"opsSec":55801376.71975379},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":27612921,"opsSec":55221637.97670083}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|100,217,048|50108548|
|Setter|10,818,526|5409267|
|Method|100,923,215|50466294|
|DefineProperty (setter)|100,236,617|50119147|
|DefineProperty (setter & enumerable=false)|10,889,969|5446002|
|DefineProperty (setter & configurable=false)|10,748,721|5374363|
|DefineProperty (setter & enumerable=false & configurable=false)|10,905,547|5452779|
|DefineProperty (writable)|97,776,511|48888263|
|DefineProperty (writable & enumerable=false)|99,378,055|49689047|
|DefineProperty (writable & enumerable=false & configurable=false)|88,216,576|44108291|
|DefineProperties (setter)|90,730,906|45365467|
|DefineProperties (setter & enumerable=false)|11,017,594|5508800|
|DefineProperties (setter & enumerable=false & configurable=false)|10,821,357|5410682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:29:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":50108548,"opsSec":100217048.89798701},{"name":"Setter","samples":5409267,"opsSec":10818526.794861155},{"name":"Method","samples":50466294,"opsSec":100923215.26099871},{"name":"DefineProperty (setter)","samples":50119147,"opsSec":100236617.64280654},{"name":"DefineProperty (setter & enumerable=false)","samples":5446002,"opsSec":10889969.557667175},{"name":"DefineProperty (setter & configurable=false)","samples":5374363,"opsSec":10748721.893988235},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5452779,"opsSec":10905547.617918668},{"name":"DefineProperty (writable)","samples":48888263,"opsSec":97776511.72462928},{"name":"DefineProperty (writable & enumerable=false)","samples":49689047,"opsSec":99378055.83882655},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":44108291,"opsSec":88216576.88343854},{"name":"DefineProperties (setter)","samples":45365467,"opsSec":90730906.41780445},{"name":"DefineProperties (setter & enumerable=false)","samples":5508800,"opsSec":11017594.469167577},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5410682,"opsSec":10821357.701969817}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,328,445|1666114|
|Using replaceAll()|2,825,284|1412812|
|Using replaceAll(//g)|2,909,544|1454868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:37:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1666114,"opsSec":3328445.680809264},{"name":"Using replaceAll()","samples":1412812,"opsSec":2825284.0448720166},{"name":"Using replaceAll(//g)","samples":1454868,"opsSec":2909544.0690159434}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,098,798|10055421|
|{ ...object, __proto__: null }|19,761,937|9887981|
|{ ...object, newProp: true }|567,216|283609|
|structuredClone|245,702|122852|
|JSON.parse + JSON.stringify|193,804|96904|
|loop + object.keys starting with {}|1,231,005|615511|
|loop + object.keys starting with { __proto__: null }|694,511|347302|
|loop + object.keys starting with { randomProp: true }|468,764|234535|
|object.keys + reduce(FN, {})|1,231,927|615988|
|object.keys + reduce(FN, { __proto__: null })|699,947|350003|
|object.keys + reduce(FN, { newProp: true })|491,230|245672|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:39:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":10055421,"opsSec":20098798.598891556},{"name":"{ ...object, __proto__: null }","samples":9887981,"opsSec":19761937.940740354},{"name":"{ ...object, newProp: true }","samples":283609,"opsSec":567216.6420833588},{"name":"structuredClone","samples":122852,"opsSec":245702.23192673904},{"name":"JSON.parse + JSON.stringify","samples":96904,"opsSec":193804.72508775548},{"name":"loop + object.keys starting with {}","samples":615511,"opsSec":1231005.4454387696},{"name":"loop + object.keys starting with { __proto__: null }","samples":347302,"opsSec":694511.6549523108},{"name":"loop + object.keys starting with { randomProp: true }","samples":234535,"opsSec":468764.8162915312},{"name":"object.keys + reduce(FN, {})","samples":615988,"opsSec":1231927.486695574},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":350003,"opsSec":699947.8553316576},{"name":"object.keys + reduce(FN, { newProp: true })","samples":245672,"opsSec":491230.2487586765}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|253,234|126618|
|Sort using first char|1,295,833|648022|
|Sort using localeCompare|1,156,537|578334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:43:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":126618,"opsSec":253234.60974199252},{"name":"Sort using first char","samples":648022,"opsSec":1295833.6810102372},{"name":"Sort using localeCompare","samples":578334,"opsSec":1156537.6558931055}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,658|831|
|{...smallObject} - Total keys: 2|37,867,759|18934686|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,018|510|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,030|3016|
|{ ...bigObject, ...anotherBigObject }|1,074|538|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,686,525|5843372|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,338,167|13671922|
|{ ...smallObject, ...anotherSmallObject }|18,669,416|9340012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:48:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":831,"opsSec":1658.639529966706},{"name":"{...smallObject} - Total keys: 2","samples":18934686,"opsSec":37867759.06067057},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":510,"opsSec":1018.3666620780263},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3016,"opsSec":6030.805779839476},{"name":"{ ...bigObject, ...anotherBigObject }","samples":538,"opsSec":1074.7843823209262},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5843372,"opsSec":11686525.204875113},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13671922,"opsSec":27338167.994884565},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9340012,"opsSec":18669416.485618867}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,956|979|
|streams.web.Readable reading 1e3 * "some data"|590|296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:55:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":979,"opsSec":1956.5022075610104},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":296,"opsSec":590.2257695322706}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,801|2498|
|streams.web.WritableStream writing 1e3 * "some data"|1,536|771|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:59:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2498,"opsSec":4801.789833521005},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":771,"opsSec":1536.5613931918845}]}-->
