## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|113,174,385|56641129|
|Using dot notation|73,084,169|36546972|
|Using define property (writable)|4,569,499|2285038|
|Using define property initialized (writable)|5,589,768|2795445|
|Using define property (getter)|2,159,559|1079780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:42:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":113174385.38187571,"samples":56641129},{"name":"Using dot notation","opsSec":73084169.72314122,"samples":36546972},{"name":"Using define property (writable)","opsSec":4569499.877455451,"samples":2285038},{"name":"Using define property initialized (writable)","opsSec":5589768.658868419,"samples":2795445},{"name":"Using define property (getter)","opsSec":2159559.110261647,"samples":1079780}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.025ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.366ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|26.052ms
new Array(length)|1,000,000|16.841ms
array.push|100,000,000|1,868.212ms
new Array(length)|100,000,000|3,988.954ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.011ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.482ms
new Array(length)|10,000|3.236ms
array.push|1,000,000|250.794ms
new Array(length)|1,000,000|4.363ms
array.push|100,000,000|2,306.138ms
new Array(length)|100,000,000|4,335.358ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|256|129|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:55:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":256.6222939599346,"samples":129},{"name":"Array.from","opsSec":21.43186943144017,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,429|2216|
|new Blob (1024)|535|269|
|text (128)|35,495|17786|
|text (1024)|14,336|7169|
|arrayBuffer (128)|42,990|21515|
|arrayBuffer (1024)|16,628|8315|
|slice (0, 64)|81,797|40900|
|slice (0, 512)|25,868|14073|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:01:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4429.815578201708,"samples":2216},{"name":"new Blob (1024)","opsSec":535.864610606879,"samples":269},{"name":"text (128)","opsSec":35495.73584971451,"samples":17786},{"name":"text (1024)","opsSec":14336.63962493927,"samples":7169},{"name":"arrayBuffer (128)","opsSec":42990.552986334114,"samples":21515},{"name":"arrayBuffer (1024)","opsSec":16628.691455012024,"samples":8315},{"name":"slice (0, 64)","opsSec":81797.54820029024,"samples":40900},{"name":"slice (0, 512)","opsSec":25868.838097635093,"samples":14073}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|392,757|196767|
|[True conditional] Using constructor name|320,605|160304|
|[True conditional] Check if property is valid then instanceof |322,167|161118|
|[False conditional] Using instanceof only|39,452,793|19727708|
|[False conditional] Using constructor name|105,521,557|52768615|
|[False conditional] Check if property is valid then instanceof |105,741,810|52870920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":392757.58580716397,"samples":196767},{"name":"[True conditional] Using constructor name","opsSec":320605.8647649407,"samples":160304},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":322167.0498080001,"samples":161118},{"name":"[False conditional] Using instanceof only","opsSec":39452793.80951224,"samples":19727708},{"name":"[False conditional] Using constructor name","opsSec":105521557.72720325,"samples":52768615},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":105741810.81526022,"samples":52870920}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,046|1024|
|crypto.verify('RSA-SHA256')|2,085|1043|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:13:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":2046.3340589792442,"samples":1024},{"name":"crypto.verify('RSA-SHA256')","opsSec":2085.278143435643,"samples":1043}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,622,344|1311176|
|fromUnixToISOString(new Date())|2,103,159|1054023|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:19:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2622344.3584885392,"samples":1311176},{"name":"fromUnixToISOString(new Date())","opsSec":2103159.846505565,"samples":1054023}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,184|6093|
|Intl.DateTimeFormat().format(new Date())|12,028|6016|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,678|6340|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,324|6163|
|Reusing Intl.DateTimeFormat()|633,819|316991|
|Date.toLocaleDateString()|656,819|328413|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,338|6170|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:25:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12184.406864433662,"samples":6093},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":12028.082213061562,"samples":6016},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":12678.582458409654,"samples":6340},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":12324.26587719695,"samples":6163},{"name":"Reusing Intl.DateTimeFormat()","opsSec":633819.05146006,"samples":316991},{"name":"Date.toLocaleDateString()","opsSec":656819.8784387329,"samples":328413},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":12338.446515553012,"samples":6170}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|994,406|497204|
|Using brackets {}|1,000,840|500421|
|Using '' + |1,002,668|501335|
|Using date.toString()|1,118,117|559060|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:31:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":994406.0847738808,"samples":497204},{"name":"Using brackets {}","opsSec":1000840.2585379501,"samples":500421},{"name":"Using '' + ","opsSec":1002668.9672509638,"samples":501335},{"name":"Using date.toString()","opsSec":1118117.8509774904,"samples":559060}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,379,272|1689716|
|Using delete property (proto: null)|16,962,106|8481058|
|Using delete property (cached proto: null)|3,353,882|1676942|
|Using undefined assignment|76,695,937|38347979|
|Using undefined assignment (proto: null)|18,221,641|9111571|
|Using undefined property (cached proto: null)|77,045,289|38523638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:37:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3379272.707843098,"samples":1689716},{"name":"Using delete property (proto: null)","opsSec":16962106.73868972,"samples":8481058},{"name":"Using delete property (cached proto: null)","opsSec":3353882.0346251274,"samples":1676942},{"name":"Using undefined assignment","opsSec":76695937.13870509,"samples":38347979},{"name":"Using undefined assignment (proto: null)","opsSec":18221641.666468468,"samples":9111571},{"name":"Using undefined property (cached proto: null)","opsSec":77045289.77242966,"samples":38523638}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|395,784|198125|
|NodeError|321,702|160852|
|NodeError Range|320,331|160174|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:43:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":395784.26719612523,"samples":198125},{"name":"NodeError","opsSec":321702.8540944337,"samples":160852},{"name":"NodeError Range","opsSec":320331.31970752025,"samples":160174}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,891,460|945731|
|Function returning explicitly undefined|1,826,097|913701|
|Function returning implicitly undefined|1,911,986|956042|
|Function returning string|1,874,292|937310|
|Function returning integer|1,915,848|957925|
|Function returning float|1,891,441|945749|
|Function returning functions|1,828,238|914241|
|Function returning arrow functions|1,830,240|915162|
|Function returning empty object|1,931,854|965987|
|Function returning empty array|1,924,723|962539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:48:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1891460.1236715575,"samples":945731},{"name":"Function returning explicitly undefined","opsSec":1826097.5272314223,"samples":913701},{"name":"Function returning implicitly undefined","opsSec":1911986.0030693987,"samples":956042},{"name":"Function returning string","opsSec":1874292.3287179244,"samples":937310},{"name":"Function returning integer","opsSec":1915848.6435791603,"samples":957925},{"name":"Function returning float","opsSec":1891441.6312565051,"samples":945749},{"name":"Function returning functions","opsSec":1828238.8003618207,"samples":914241},{"name":"Function returning arrow functions","opsSec":1830240.7533295758,"samples":915162},{"name":"Function returning empty object","opsSec":1931854.4027576342,"samples":965987},{"name":"Function returning empty array","opsSec":1924723.0541226969,"samples":962539}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|80,574,233|40287695|
|using Array.includes (first item)|90,273,421|45136719|
|Using raw comparison|105,020,926|52511355|
|Using raw comparison (first item)|105,357,732|52678881|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:54:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":80574233.75974554,"samples":40287695},{"name":"using Array.includes (first item)","opsSec":90273421.02859685,"samples":45136719},{"name":"Using raw comparison","opsSec":105020926.32458732,"samples":52511355},{"name":"Using raw comparison (first item)","opsSec":105357732.2891195,"samples":52678881}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|50,698,385|25354607|
|Using Object.getOwnPropertyNames()|43,940,852|22012806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:00:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":50698385.12912673,"samples":25354607},{"name":"Using Object.getOwnPropertyNames()","opsSec":43940852.38068199,"samples":22012806}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,219,991|10722057|
|Length = 10_000 - Array.at|20,509,216|10254615|
|Length = 1_000_000 - Array.at|20,730,392|10365201|
|Length = 100 - Array[length - 1]|96,954,619|48487483|
|Length = 10_000 - Array[length - 1]|96,900,761|48451355|
|Length = 1_000_000 - Array[length - 1]|97,044,161|48538714|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:05:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":21219991.169427376,"samples":10722057},{"name":"Length = 10_000 - Array.at","opsSec":20509216.299843512,"samples":10254615},{"name":"Length = 1_000_000 - Array.at","opsSec":20730392.75424483,"samples":10365201},{"name":"Length = 100 - Array[length - 1]","opsSec":96954619.10363491,"samples":48487483},{"name":"Length = 10_000 - Array[length - 1]","opsSec":96900761.13189211,"samples":48451355},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":97044161.06749773,"samples":48538714}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|148,695,508|74385671|
|~ (small)|105,135,500|52568902|
|Math.floor (long)|106,189,322|53094665|
|~ (long)|107,521,355|53760693|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:10:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":148695508.18299973,"samples":74385671},{"name":"~ (small)","opsSec":105135500.48118445,"samples":52568902},{"name":"Math.floor (long)","opsSec":106189322.14199017,"samples":53094665},{"name":"~ (long)","opsSec":107521355.24889241,"samples":53760693}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|43,585,879|21797564|
|Object.create({})|1,626,119|817837|
|Cached Empty.prototype|113,211,208|56607782|
|Empty.prototype|1,775,179|894768|
|Empty class|1,115,021|563055|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:17:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":43585879.2507665,"samples":21797564},{"name":"Object.create({})","opsSec":1626119.3907821488,"samples":817837},{"name":"Cached Empty.prototype","opsSec":113211208.99121252,"samples":56607782},{"name":"Empty.prototype","opsSec":1775179.3717446474,"samples":894768},{"name":"Empty class","opsSec":1115021.5985815665,"samples":563055}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|158,384,726|79219969|
|Using optional chain (obj.field?.field2) (undefined)|103,294,308|51649092|
|Using and operator (obj.field && obj.field.field2) (Valid)|104,959,953|52479987|
|Using and operator (obj.field && obj.field.field2) (undefined)|105,414,143|52707081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:22:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":158384726.66813076,"samples":79219969},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":103294308.19096807,"samples":51649092},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":104959953.0080094,"samples":52479987},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":105414143.657939,"samples":52707081}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|126,235,615|63118170|
|Using parseInt(x, 10) - big number (10 len)|15,708,485|7854245|
|Using + - small number (2 len)|103,677,845|51838928|
|Using + - big number (10 len)|104,487,617|52248871|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:27:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":126235615.15509778,"samples":63118170},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15708485.633040996,"samples":7854245},{"name":"Using + - small number (2 len)","opsSec":103677845.01014842,"samples":51838928},{"name":"Using + - big number (10 len)","opsSec":104487617.77676314,"samples":52248871}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|950,724|483908|
|Using ? operator to avoid rejection|1,024,178|516516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:34:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":950724.0372751612,"samples":483908},{"name":"Using ? operator to avoid rejection","opsSec":1024178.4687433784,"samples":516516}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|17,483,265|8741633|
|Raw usage underscore usage|15,356,004|7678003|
|Manipulating private properties using #|12,280,286|6140144|
|Manipulating private properties using underscore(_)|14,177,172|7088587|
|Manipulating private properties using Symbol|13,438,789|6719395|
|Manipulating private properties using PrivateSymbol|10,932,508|5466255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:36:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":17483265.440140463,"samples":8741633},{"name":"Raw usage underscore usage","opsSec":15356004.702291522,"samples":7678003},{"name":"Manipulating private properties using #","opsSec":12280286.692258166,"samples":6140144},{"name":"Manipulating private properties using underscore(_)","opsSec":14177172.50710431,"samples":7088587},{"name":"Manipulating private properties using Symbol","opsSec":13438789.509478884,"samples":6719395},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10932508.701549163,"samples":5466255}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,943,271|1471636|
|Adding property in the object creation - small object|2,956,069|1478035|
|Adding property after the function creation - small class|236,359|119138|
|Adding property in the function creation - small class|234,041|117021|
|Adding property after the class creation - small class|189,675|94838|
|Adding property in the class creation - small class|193,077|96539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:49:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2943271.8352138977,"samples":1471636},{"name":"Adding property in the object creation - small object","opsSec":2956069.6717257914,"samples":1478035},{"name":"Adding property after the function creation - small class","opsSec":236359.6300527769,"samples":119138},{"name":"Adding property in the function creation - small class","opsSec":234041.19316585973,"samples":117021},{"name":"Adding property after the class creation - small class","opsSec":189675.86377221165,"samples":94838},{"name":"Adding property in the class creation - small class","opsSec":193077.3995704786,"samples":96539}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|17,647,535|8823768|
|Getter|14,227,404|7113703|
|Method|15,741,581|7870791|
|DefineProperty (getter)|17,731,080|8865541|
|DefineProperty (getter & enumerable=false)|14,854,105|7427055|
|DefineProperty (getter & configurable=false)|16,938,658|8469330|
|DefineProperty (getter & enumerable=false & configurable=false)|14,997,356|7498679|
|DefineProperty (writable)|17,467,598|8733800|
|DefineProperty (writable & enumerable=false)|17,413,779|8706890|
|DefineProperty (writable & enumerable=false & configurable=false)|17,778,558|8889280|
|DefineProperties (getter)|14,736,995|7368498|
|DefineProperties (getter & enumerable=false)|14,595,879|7297940|
|DefineProperties (getter & enumerable=false & configurable=false)|14,378,650|7189326|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:01:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":17647535.846754946,"samples":8823768},{"name":"Getter","opsSec":14227404.422259932,"samples":7113703},{"name":"Method","opsSec":15741581.489521729,"samples":7870791},{"name":"DefineProperty (getter)","opsSec":17731080.56525361,"samples":8865541},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14854105.271827932,"samples":7427055},{"name":"DefineProperty (getter & configurable=false)","opsSec":16938658.882978637,"samples":8469330},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14997356.897526996,"samples":7498679},{"name":"DefineProperty (writable)","opsSec":17467598.60225611,"samples":8733800},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17413779.472660523,"samples":8706890},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17778558.35947569,"samples":8889280},{"name":"DefineProperties (getter)","opsSec":14736995.532804517,"samples":7368498},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14595879.767877866,"samples":7297940},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14378650.317373758,"samples":7189326}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,464,495|8232248|
|Setter|5,820,600|2910301|
|Method|16,655,072|8327537|
|DefineProperty (setter)|16,124,930|8062466|
|DefineProperty (setter & enumerable=false)|5,873,868|2936935|
|DefineProperty (setter & configurable=false)|5,859,900|2929951|
|DefineProperty (setter & enumerable=false & configurable=false)|5,808,409|2904205|
|DefineProperty (writable)|16,038,942|8019472|
|DefineProperty (writable & enumerable=false)|16,711,409|8355705|
|DefineProperty (writable & enumerable=false & configurable=false)|16,800,251|8400126|
|DefineProperties (setter)|16,227,359|8113682|
|DefineProperties (setter & enumerable=false)|5,714,814|2857408|
|DefineProperties (setter & enumerable=false & configurable=false)|5,758,021|2879011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:24:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":16464495.16155022,"samples":8232248},{"name":"Setter","opsSec":5820600.342562284,"samples":2910301},{"name":"Method","opsSec":16655072.489949277,"samples":8327537},{"name":"DefineProperty (setter)","opsSec":16124930.329331867,"samples":8062466},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5873868.14039167,"samples":2936935},{"name":"DefineProperty (setter & configurable=false)","opsSec":5859900.181378751,"samples":2929951},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5808409.004608277,"samples":2904205},{"name":"DefineProperty (writable)","opsSec":16038942.803452145,"samples":8019472},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16711409.10216055,"samples":8355705},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16800251.795281798,"samples":8400126},{"name":"DefineProperties (setter)","opsSec":16227359.39848279,"samples":8113682},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5714814.512981965,"samples":2857408},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5758021.756088609,"samples":2879011}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,600,523|1314705|
|Using replaceAll()|2,383,035|1191518|
|Using replaceAll(//g)|2,312,221|1156111|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:40:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2600523.445708741,"samples":1314705},{"name":"Using replaceAll()","opsSec":2383035.105254776,"samples":1191518},{"name":"Using replaceAll(//g)","opsSec":2312221.4432106833,"samples":1156111}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,531,937|4765969|
|{ ...object, __proto__: null }|10,024,485|5012243|
|{ ...object, newProp: true }|616,682|309765|
|structuredClone|235,862|117932|
|JSON.parse + JSON.stringify|185,835|92918|
|loop + object.keys starting with {}|1,123,144|561573|
|loop + object.keys starting with { __proto__: null }|599,716|299859|
|loop + object.keys starting with { randomProp: true }|461,303|230652|
|object.keys + reduce(FN, {})|1,068,303|534152|
|object.keys + reduce(FN, { __proto__: null })|561,682|280842|
|object.keys + reduce(FN, { newProp: true })|462,029|231015|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:48:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9531937.661596991,"samples":4765969},{"name":"{ ...object, __proto__: null }","opsSec":10024485.620882504,"samples":5012243},{"name":"{ ...object, newProp: true }","opsSec":616682.3440815952,"samples":309765},{"name":"structuredClone","opsSec":235862.30728850554,"samples":117932},{"name":"JSON.parse + JSON.stringify","opsSec":185835.14291400646,"samples":92918},{"name":"loop + object.keys starting with {}","opsSec":1123144.8199248489,"samples":561573},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":599716.0457424538,"samples":299859},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":461303.2053383331,"samples":230652},{"name":"object.keys + reduce(FN, {})","opsSec":1068303.878303467,"samples":534152},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":561682.1078123545,"samples":280842},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":462029.551036819,"samples":231015}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|248,676|124339|
|Sort using first char|1,034,471|517236|
|Sort using localeCompare|935,629|467815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:57:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":248676.09331668494,"samples":124339},{"name":"Sort using first char","opsSec":1034471.852090835,"samples":517236},{"name":"Sort using localeCompare","opsSec":935629.4943667223,"samples":467815}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,739|870|
|{...smallObject} - Total keys: 2|12,639,961|6319981|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,200|1101|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,419|3210|
|{ ...bigObject, ...anotherBigObject }|1,082|542|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,603,794|3301898|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,574,030|5287016|
|{ ...smallObject, ...anotherSmallObject }|8,761,964|4380983|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:03:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1739.6762810094544,"samples":870},{"name":"{...smallObject} - Total keys: 2","opsSec":12639961.190659624,"samples":6319981},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2200.483048593051,"samples":1101},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6419.039455524987,"samples":3210},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1082.5083382486916,"samples":542},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6603794.422826601,"samples":3301898},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10574030.195483075,"samples":5287016},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8761964.296897817,"samples":4380983}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,198|1100|
|streams.web.Readable reading 1e3 * "some data"|472|237|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:12:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2198.782951462193,"samples":1100},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":472.67129545951303,"samples":237}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,171|2086|
|streams.web.WritableStream writing 1e3 * "some data"|1,981|991|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:17:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4171.670313098547,"samples":2086},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1981.7945912579576,"samples":991}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,493,585|8246793|
|Using backtick (`)|15,773,362|7886682|
|Using array.join|6,318,571|3159286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:24:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":16493585.036198948,"samples":8246793},{"name":"Using backtick (`)","opsSec":15773362.971811289,"samples":7886682},{"name":"Using array.join","opsSec":6318571.04603121,"samples":3159286}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,554,515|5777258|
|(short string) (true) String#slice and strict comparison|12,546,640|6273321|
|(long string) (true) String#endsWith|11,959,170|5979586|
|(long string) (true) String#slice and strict comparison|12,670,074|6335038|
|(short string) (false) String#endsWith|12,361,782|6180892|
|(short string) (false) String#slice and strict comparison|13,232,019|6616010|
|(long string) (false) String#endsWith|12,282,181|6141091|
|(long string) (false) String#slice and strict comparison|12,775,132|6387567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:38:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11554515.306218037,"samples":5777258},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12546640.319420965,"samples":6273321},{"name":"(long string) (true) String#endsWith","opsSec":11959170.186758805,"samples":5979586},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12670074.607136676,"samples":6335038},{"name":"(short string) (false) String#endsWith","opsSec":12361782.433613526,"samples":6180892},{"name":"(short string) (false) String#slice and strict comparison","opsSec":13232019.929708017,"samples":6616010},{"name":"(long string) (false) String#endsWith","opsSec":12282181.807464251,"samples":6141091},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12775132.33783406,"samples":6387567}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,287,679|4143840|
|Using indexof|8,716,758|4358380|
|Using RegExp.test|8,062,229|4031117|
|Using RegExp.text with cached regex pattern|8,269,277|4134639|
|Using new RegExp.test|3,283,284|1641643|
|Using new RegExp.test with cached regex pattern|3,503,513|1751757|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:52:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8287679.630932054,"samples":4143840},{"name":"Using indexof","opsSec":8716758.483471368,"samples":4358380},{"name":"Using RegExp.test","opsSec":8062229.946471384,"samples":4031117},{"name":"Using RegExp.text with cached regex pattern","opsSec":8269277.050699019,"samples":4134639},{"name":"Using new RegExp.test","opsSec":3283284.411070886,"samples":1641643},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3503513.838629942,"samples":1751757}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,829,823|6914912|
|(short string) (true) String#slice and strict comparison|13,749,487|6874744|
|(long string) (true) String#startsWith|13,654,870|6827436|
|(long string) (true) String#slice and strict comparison|13,432,575|6716288|
|(short string) (false) String#startsWith|14,270,679|7135340|
|(short string) (false) String#slice and strict comparison|14,377,077|7188540|
|(long string) (false) String#startsWith|13,994,789|6997395|
|(long string) (false) String#slice and strict comparison|14,093,322|7046662|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:02:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13829823.57403175,"samples":6914912},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13749487.931261642,"samples":6874744},{"name":"(long string) (true) String#startsWith","opsSec":13654870.877131864,"samples":6827436},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13432575.667532621,"samples":6716288},{"name":"(short string) (false) String#startsWith","opsSec":14270679.30910115,"samples":7135340},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14377077.829369416,"samples":7188540},{"name":"(long string) (false) String#startsWith","opsSec":13994789.007877579,"samples":6997395},{"name":"(long string) (false) String#slice and strict comparison","opsSec":14093322.733763555,"samples":7046662}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|9,847,536|4923769|
|Using this|17,240,395|8620198|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:20:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":9847536.557254978,"samples":4923769},{"name":"Using this","opsSec":17240395.94643595,"samples":8620198}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,110,983|3055492|
|Date.now()|9,434,248|4717125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:28:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6110983.773122131,"samples":3055492},{"name":"Date.now()","opsSec":9434248.374740101,"samples":4717125}]}-->
