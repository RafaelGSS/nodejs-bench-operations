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
|Raw usage private field|101,389,286|50701902|
|Raw usage underscore usage|80,297,523|40186713|
|Manipulating private properties using #|76,144,083|38075972|
|Manipulating private properties using underscore(_)|76,382,364|38191194|
|Manipulating private properties using Symbol|76,427,467|38213743|
|Manipulating private properties using PrivateSymbol|35,513,088|17756581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:39:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":101389286.06812792,"samples":50701902},{"name":"Raw usage underscore usage","opsSec":80297523.64161243,"samples":40186713},{"name":"Manipulating private properties using #","opsSec":76144083.79851764,"samples":38075972},{"name":"Manipulating private properties using underscore(_)","opsSec":76382364.62699643,"samples":38191194},{"name":"Manipulating private properties using Symbol","opsSec":76427467.96311755,"samples":38213743},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35513088.914063014,"samples":17756581}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,755,576|1877790|
|Adding property in the object creation - small object|3,742,401|1871306|
|Adding property after the function creation - small class|227,703|113877|
|Adding property in the function creation - small class|229,939|114975|
|Adding property after the class creation - small class|202,705|101353|
|Adding property in the class creation - small class|198,003|99003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:45:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3755576.807759714,"samples":1877790},{"name":"Adding property in the object creation - small object","opsSec":3742401.3626817027,"samples":1871306},{"name":"Adding property after the function creation - small class","opsSec":227703.12793337592,"samples":113877},{"name":"Adding property in the function creation - small class","opsSec":229939.87896628745,"samples":114975},{"name":"Adding property after the class creation - small class","opsSec":202705.5978320939,"samples":101353},{"name":"Adding property in the class creation - small class","opsSec":198003.46674364645,"samples":99003}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|163,446,345|81724035|
|Getter|54,854,910|27427529|
|Method|106,274,620|53162906|
|DefineProperty (getter)|106,426,680|53213357|
|DefineProperty (getter & enumerable=false)|53,145,153|26572585|
|DefineProperty (getter & configurable=false)|107,328,171|53664099|
|DefineProperty (getter & enumerable=false & configurable=false)|55,857,602|27929575|
|DefineProperty (writable)|106,457,638|53228831|
|DefineProperty (writable & enumerable=false)|107,303,099|53651565|
|DefineProperty (writable & enumerable=false & configurable=false)|107,227,621|53613816|
|DefineProperties (getter)|55,555,815|27858283|
|DefineProperties (getter & enumerable=false)|55,936,534|27968832|
|DefineProperties (getter & enumerable=false & configurable=false)|55,858,113|27929070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:51:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":163446345.64105347,"samples":81724035},{"name":"Getter","opsSec":54854910.879129015,"samples":27427529},{"name":"Method","opsSec":106274620.79046068,"samples":53162906},{"name":"DefineProperty (getter)","opsSec":106426680.36916901,"samples":53213357},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53145153.631292686,"samples":26572585},{"name":"DefineProperty (getter & configurable=false)","opsSec":107328171.59726979,"samples":53664099},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":55857602.9678282,"samples":27929575},{"name":"DefineProperty (writable)","opsSec":106457638.3664043,"samples":53228831},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107303099.74052587,"samples":53651565},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":107227621.70614833,"samples":53613816},{"name":"DefineProperties (getter)","opsSec":55555815.58095141,"samples":27858283},{"name":"DefineProperties (getter & enumerable=false)","opsSec":55936534.08201154,"samples":27968832},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":55858113.970118895,"samples":27929070}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,101,811|76575599|
|Setter|10,113,163|5064107|
|Method|103,734,079|51872918|
|DefineProperty (setter)|102,119,516|51062166|
|DefineProperty (setter & enumerable=false)|9,859,014|4929787|
|DefineProperty (setter & configurable=false)|9,903,027|4952116|
|DefineProperty (setter & enumerable=false & configurable=false)|9,832,542|4916334|
|DefineProperty (writable)|87,813,084|43906557|
|DefineProperty (writable & enumerable=false)|91,324,140|45662086|
|DefineProperty (writable & enumerable=false & configurable=false)|91,709,123|45857263|
|DefineProperties (setter)|90,732,646|45366325|
|DefineProperties (setter & enumerable=false)|10,171,111|5086293|
|DefineProperties (setter & enumerable=false & configurable=false)|9,998,837|5002248|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:58:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":153101811.0302051,"samples":76575599},{"name":"Setter","opsSec":10113163.206216305,"samples":5064107},{"name":"Method","opsSec":103734079.19440041,"samples":51872918},{"name":"DefineProperty (setter)","opsSec":102119516.04362337,"samples":51062166},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9859014.264324158,"samples":4929787},{"name":"DefineProperty (setter & configurable=false)","opsSec":9903027.950249698,"samples":4952116},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9832542.104130898,"samples":4916334},{"name":"DefineProperty (writable)","opsSec":87813084.6704297,"samples":43906557},{"name":"DefineProperty (writable & enumerable=false)","opsSec":91324140.40184742,"samples":45662086},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":91709123.96576191,"samples":45857263},{"name":"DefineProperties (setter)","opsSec":90732646.55215943,"samples":45366325},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10171111.758377293,"samples":5086293},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9998837.537851281,"samples":5002248}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,470,531|1735267|
|Using replaceAll()|3,039,421|1519836|
|Using replaceAll(//g)|3,103,623|1552016|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:04:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3470531.653920602,"samples":1735267},{"name":"Using replaceAll()","opsSec":3039421.5395074585,"samples":1519836},{"name":"Using replaceAll(//g)","opsSec":3103623.4886619286,"samples":1552016}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,086,358|10547437|
|{ ...object, __proto__: null }|19,407,276|9707094|
|{ ...object, newProp: true }|687,688|347378|
|structuredClone|246,116|123059|
|JSON.parse + JSON.stringify|203,215|101682|
|loop + object.keys starting with {}|1,303,083|652358|
|loop + object.keys starting with { __proto__: null }|744,818|372413|
|loop + object.keys starting with { randomProp: true }|543,969|272073|
|object.keys + reduce(FN, {})|1,350,995|675549|
|object.keys + reduce(FN, { __proto__: null })|745,856|372940|
|object.keys + reduce(FN, { newProp: true })|540,431|270323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:10:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":21086358.27421096,"samples":10547437},{"name":"{ ...object, __proto__: null }","opsSec":19407276.370222617,"samples":9707094},{"name":"{ ...object, newProp: true }","opsSec":687688.8186893319,"samples":347378},{"name":"structuredClone","opsSec":246116.80879464545,"samples":123059},{"name":"JSON.parse + JSON.stringify","opsSec":203215.7240533759,"samples":101682},{"name":"loop + object.keys starting with {}","opsSec":1303083.7416681815,"samples":652358},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":744818.2524005385,"samples":372413},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":543969.6504790112,"samples":272073},{"name":"object.keys + reduce(FN, {})","opsSec":1350995.4675499857,"samples":675549},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":745856.7829700597,"samples":372940},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":540431.2391107522,"samples":270323}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|247,355|123678|
|Sort using first char|1,239,389|619738|
|Sort using localeCompare|1,148,017|574197|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:16:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":247355.3910110273,"samples":123678},{"name":"Sort using first char","opsSec":1239389.7905249505,"samples":619738},{"name":"Sort using localeCompare","opsSec":1148017.147299159,"samples":574197}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|58,399,407|29206457|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,078|540|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,426|3214|
|{ ...bigObject, ...anotherBigObject }|1,136|569|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,929,492|5969253|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,552,419|13776218|
|{ ...smallObject, ...anotherSmallObject }|19,758,675|9889581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:22:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.0266440116827,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":58399407.73537541,"samples":29206457},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1078.6325635675373,"samples":540},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6426.860928876409,"samples":3214},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1136.910464594465,"samples":569},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":11929492.624129869,"samples":5969253},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27552419.57875793,"samples":13776218},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19758675.53341199,"samples":9889581}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,361|1181|
|streams.web.Readable reading 1e3 * "some data"|476|239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:28:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2361.150590242064,"samples":1181},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":476.7934256035807,"samples":239}]}-->

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
