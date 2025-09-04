## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|89,590,899|44796788|
|Using dot notation|63,898,101|31961402|
|Using define property (writable)|4,781,232|2391596|
|Using define property initialized (writable)|7,182,925|3593667|
|Using define property (getter)|2,402,610|1205684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:11:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":44796788,"opsSec":89590899.91981938},{"name":"Using dot notation","samples":31961402,"opsSec":63898101.50514293},{"name":"Using define property (writable)","samples":2391596,"opsSec":4781232.5074814595},{"name":"Using define property initialized (writable)","samples":3593667,"opsSec":7182925.307202497},{"name":"Using define property (getter)","samples":1205684,"opsSec":2402610.9635600164}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.127ms
new Array(length)|100|0.009ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.311ms
new Array(length)|10,000|0.137ms
array.push|1,000,000|32.678ms
new Array(length)|1,000,000|7.893ms
array.push|10,000,000|265.452ms
new Array(length)|10,000,000|67.94ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.013ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.49ms
new Array(length)|10,000|0.225ms
array.push|1,000,000|20.828ms
new Array(length)|1,000,000|11.384ms
array.push|10,000,000|225.249ms
new Array(length)|10,000,000|65.942ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|262|133|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:23:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":133,"opsSec":262.43467379413454},{"name":"Array.from","samples":12,"opsSec":22.995741740527457}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,241|2121|
|new Blob (1024)|573|287|
|text (128)|4,091|2046|
|text (1024)|508|255|
|arrayBuffer (128)|4,055|2028|
|arrayBuffer (1024)|512|257|
|slice (0, 64)|149,281|87488|
|slice (0, 512)|31,606|15813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:26:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2121,"opsSec":4241.582382281805},{"name":"new Blob (1024)","samples":287,"opsSec":573.234583935923},{"name":"text (128)","samples":2046,"opsSec":4091.1738365377973},{"name":"text (1024)","samples":255,"opsSec":508.9818307099206},{"name":"arrayBuffer (128)","samples":2028,"opsSec":4055.5478956316906},{"name":"arrayBuffer (1024)","samples":257,"opsSec":512.3898681279542},{"name":"slice (0, 64)","samples":87488,"opsSec":149281.90537112023},{"name":"slice (0, 512)","samples":15813,"opsSec":31606.74536036694}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|453,616|226809|
|[True conditional] Using constructor name|351,155|175578|
|[True conditional] Check if property is valid then instanceof |351,689|175863|
|[False conditional] Using instanceof only|92,178,120|46093674|
|[False conditional] Using constructor name|92,983,061|46494041|
|[False conditional] Check if property is valid then instanceof |87,744,020|43872332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:12:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":453616.20549429103,"samples":226809},{"name":"[True conditional] Using constructor name","opsSec":351155.17970150016,"samples":175578},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":351689.80619528523,"samples":175863},{"name":"[False conditional] Using instanceof only","opsSec":92178120.23273973,"samples":46093674},{"name":"[False conditional] Using constructor name","opsSec":92983061.47257885,"samples":46494041},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":87744020.13438025,"samples":43872332}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.90 ms|1|
|Gzip|133.95 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:34:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132903381},{"name":"Gzip","samples":1,"totalTime":0.133945675}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,772|3387|
|crypto.verify('RSA-SHA256')|6,601|3301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:42:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3387,"opsSec":6772.726551317462},{"name":"crypto.verify('RSA-SHA256')","samples":3301,"opsSec":6601.452792375135}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,458,885|729730|
|fromUnixToISOString(new Date())|2,217,327|1109431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:44:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":729730,"opsSec":1458885.4442277288},{"name":"fromUnixToISOString(new Date())","samples":1109431,"opsSec":2217327.94166356}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,550|10276|
|Intl.DateTimeFormat().format(new Date())|19,739|9870|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,691|9847|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,684|9343|
|Reusing Intl.DateTimeFormat()|535,177|268266|
|Date.toLocaleDateString()|1,111,948|556292|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,697|12349|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:50:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10276,"opsSec":20550.473593023402},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9870,"opsSec":19739.7662022091},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9847,"opsSec":19691.259488651925},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9343,"opsSec":18684.73982640715},{"name":"Reusing Intl.DateTimeFormat()","samples":268266,"opsSec":535177.1732972935},{"name":"Date.toLocaleDateString()","samples":556292,"opsSec":1111948.7570185005},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12349,"opsSec":24697.548726389672}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,039,401|519756|
|Using brackets {}|1,053,706|527186|
|Using '' + |1,044,170|522330|
|Using date.toString()|1,142,013|571059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":519756,"opsSec":1039401.0501743002},{"name":"Using brackets {}","samples":527186,"opsSec":1053706.0746201372},{"name":"Using '' + ","samples":522330,"opsSec":1044170.5053971158},{"name":"Using date.toString()","samples":571059,"opsSec":1142013.4692231352}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,948,451|1974573|
|Using delete property (proto: null)|16,417,320|8208664|
|Using delete property (cached proto: null)|3,884,938|1943063|
|Using undefined assignment|74,582,070|37291039|
|Using undefined assignment (proto: null)|17,792,482|8896245|
|Using undefined property (cached proto: null)|75,380,877|37690447|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:01:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1974573,"opsSec":3948451.2305214778},{"name":"Using delete property (proto: null)","samples":8208664,"opsSec":16417320.283859465},{"name":"Using delete property (cached proto: null)","samples":1943063,"opsSec":3884938.405408974},{"name":"Using undefined assignment","samples":37291039,"opsSec":74582070.39262882},{"name":"Using undefined assignment (proto: null)","samples":8896245,"opsSec":17792482.384817537},{"name":"Using undefined property (cached proto: null)","samples":37690447,"opsSec":75380877.56696868}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|328,864|164436|
|NodeError|304,793|152510|
|NodeError Range|301,664|150847|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:04:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":164436,"opsSec":328864.34009179054},{"name":"NodeError","samples":152510,"opsSec":304793.3526150619},{"name":"NodeError Range","samples":150847,"opsSec":301664.7349007378}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,808,205|904104|
|Function returning explicitly undefined|1,705,170|853094|
|Function returning implicitly undefined|1,790,056|895029|
|Function returning string|1,735,811|867941|
|Function returning integer|1,697,248|848625|
|Function returning float|1,777,149|888741|
|Function returning functions|1,773,976|888840|
|Function returning arrow functions|1,813,573|906793|
|Function returning empty object|1,835,470|917736|
|Function returning empty array|1,798,577|899810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:53:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1808205.4902107795,"samples":904104},{"name":"Function returning explicitly undefined","opsSec":1705170.9644196397,"samples":853094},{"name":"Function returning implicitly undefined","opsSec":1790056.9152255096,"samples":895029},{"name":"Function returning string","opsSec":1735811.88014329,"samples":867941},{"name":"Function returning integer","opsSec":1697248.6897240116,"samples":848625},{"name":"Function returning float","opsSec":1777149.4953294238,"samples":888741},{"name":"Function returning functions","opsSec":1773976.9756254018,"samples":888840},{"name":"Function returning arrow functions","opsSec":1813573.4210547518,"samples":906793},{"name":"Function returning empty object","opsSec":1835470.1682007723,"samples":917736},{"name":"Function returning empty array","opsSec":1798577.7529693984,"samples":899810}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|66,631,676|33320210|
|using Array.includes (first item)|77,515,874|38776204|
|Using raw comparison|94,452,587|47226301|
|Using raw comparison (first item)|91,002,030|45503504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:09:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":33320210,"opsSec":66631676.0584142},{"name":"using Array.includes (first item)","samples":38776204,"opsSec":77515874.61326303},{"name":"Using raw comparison","samples":47226301,"opsSec":94452587.64320669},{"name":"Using raw comparison (first item)","samples":45503504,"opsSec":91002030.55293687}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,363,853|20687587|
|Using Object.getOwnPropertyNames()|43,134,947|21764406|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:14:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20687587,"opsSec":41363853.20974273},{"name":"Using Object.getOwnPropertyNames()","samples":21764406,"opsSec":43134947.74114446}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|95,335,305|47668778|
|Length = 10_000 - Array.at|93,109,929|46555516|
|Length = 1_000_000 - Array.at|96,216,776|48115119|
|Length = 100 - Array[length - 1]|93,056,395|46528249|
|Length = 10_000 - Array[length - 1]|92,265,769|46135586|
|Length = 1_000_000 - Array[length - 1]|92,344,434|46172995|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:17:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47668778,"opsSec":95335305.89611025},{"name":"Length = 10_000 - Array.at","samples":46555516,"opsSec":93109929.39221615},{"name":"Length = 1_000_000 - Array.at","samples":48115119,"opsSec":96216776.50323299},{"name":"Length = 100 - Array[length - 1]","samples":46528249,"opsSec":93056395.26573962},{"name":"Length = 10_000 - Array[length - 1]","samples":46135586,"opsSec":92265769.47013445},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46172995,"opsSec":92344434.73503019}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|87,594,059|43797050|
|~ (small)|84,916,838|42462709|
|Math.floor (long)|89,587,889|44793959|
|~ (long)|89,842,318|44921238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:25:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":43797050,"opsSec":87594059.00598037},{"name":"~ (small)","samples":42462709,"opsSec":84916838.17250474},{"name":"Math.floor (long)","samples":44793959,"opsSec":89587889.86940259},{"name":"~ (long)","samples":44921238,"opsSec":89842318.05720486}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,936,969|14987005|
|Object.create({})|2,071,387|1035695|
|new Function with empty prototype|75,954,541|37977415|
|Empty class|72,977,829|36490200|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:26:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14987005,"opsSec":29936969.287270553},{"name":"Object.create({})","samples":1035695,"opsSec":2071387.0379165357},{"name":"new Function with empty prototype","samples":37977415,"opsSec":75954541.98037681},{"name":"Empty class","samples":36490200,"opsSec":72977829.86678775}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|125,518,857|62760043|
|Using optional chain (obj.field?.field2) (undefined)|86,541,559|43270799|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,468,231|47734129|
|Using and operator (obj.field && obj.field.field2) (undefined)|95,303,051|47651560|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:26:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":125518857.42142355,"samples":62760043},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":86541559.92171364,"samples":43270799},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95468231.45983167,"samples":47734129},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":95303051.57240897,"samples":47651560}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,510,578|48255344|
|Using parseInt(x, 10) - big number (10 len)|97,100,142|48550082|
|Using + - small number (2 len)|88,334,628|44167331|
|Using + - big number (10 len)|89,629,006|44815275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:32:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48255344,"opsSec":96510578.9430458},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48550082,"opsSec":97100142.24956812},{"name":"Using + - small number (2 len)","samples":44167331,"opsSec":88334628.60951039},{"name":"Using + - big number (10 len)","samples":44815275,"opsSec":89629006.76776147}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,143,984|573031|
|Using ? operator to avoid rejection|1,182,707|591354|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:35:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":573031,"opsSec":1143984.1564090627},{"name":"Using ? operator to avoid rejection","samples":591354,"opsSec":1182707.6026102456}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|91,746,091|45873058|
|Raw usage underscore usage|89,227,562|44616982|
|Manipulating private properties using #|84,700,838|42352641|
|Manipulating private properties using underscore(_)|93,987,366|46993690|
|Manipulating private properties using Symbol|94,017,697|47008869|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:42:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":45873058,"opsSec":91746091.77903177},{"name":"Raw usage underscore usage","samples":44616982,"opsSec":89227562.27931671},{"name":"Manipulating private properties using #","samples":42352641,"opsSec":84700838.25522178},{"name":"Manipulating private properties using underscore(_)","samples":46993690,"opsSec":93987366.46581924},{"name":"Manipulating private properties using Symbol","samples":47008869,"opsSec":94017697.76042534}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,926,360|3963191|
|Adding property in the object creation - small object|7,509,642|3755179|
|Adding property after the function creation - small class|276,689|138345|
|Adding property in the function creation - small class|289,132|144567|
|Adding property after the class creation - small class|271,858|136774|
|Adding property in the class creation - small class|271,537|135769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:47:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3963191,"opsSec":7926360.915879963},{"name":"Adding property in the object creation - small object","samples":3755179,"opsSec":7509642.871728611},{"name":"Adding property after the function creation - small class","samples":138345,"opsSec":276689.064790961},{"name":"Adding property in the function creation - small class","samples":144567,"opsSec":289132.2721455417},{"name":"Adding property after the class creation - small class","samples":136774,"opsSec":271858.740469992},{"name":"Adding property in the class creation - small class","samples":135769,"opsSec":271537.19353453524}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,878,716|47939387|
|Getter|48,212,957|24106484|
|Method|90,028,203|45014132|
|DefineProperty (getter)|97,220,920|48610484|
|DefineProperty (getter & enumerable=false)|50,098,998|25064824|
|DefineProperty (getter & configurable=false)|96,636,230|48318124|
|DefineProperty (getter & enumerable=false & configurable=false)|48,549,069|24274550|
|DefineProperty (writable)|97,540,891|48776696|
|DefineProperty (writable & enumerable=false)|97,224,135|48612089|
|DefineProperty (writable & enumerable=false & configurable=false)|94,087,856|47045355|
|DefineProperties (getter)|48,303,194|24151613|
|DefineProperties (getter & enumerable=false)|49,933,842|24967432|
|DefineProperties (getter & enumerable=false & configurable=false)|50,257,748|25128972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:52:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47939387,"opsSec":95878716.85628475},{"name":"Getter","samples":24106484,"opsSec":48212957.58600116},{"name":"Method","samples":45014132,"opsSec":90028203.14093468},{"name":"DefineProperty (getter)","samples":48610484,"opsSec":97220920.75063251},{"name":"DefineProperty (getter & enumerable=false)","samples":25064824,"opsSec":50098998.93542128},{"name":"DefineProperty (getter & configurable=false)","samples":48318124,"opsSec":96636230.7987509},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24274550,"opsSec":48549069.122792035},{"name":"DefineProperty (writable)","samples":48776696,"opsSec":97540891.74455936},{"name":"DefineProperty (writable & enumerable=false)","samples":48612089,"opsSec":97224135.99917325},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47045355,"opsSec":94087856.69165796},{"name":"DefineProperties (getter)","samples":24151613,"opsSec":48303194.2164982},{"name":"DefineProperties (getter & enumerable=false)","samples":24967432,"opsSec":49933842.95277931},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25128972,"opsSec":50257748.09529793}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|92,693,211|46347266|
|Setter|11,296,529|5648267|
|Method|92,461,752|46230888|
|DefineProperty (setter)|94,536,839|47285227|
|DefineProperty (setter & enumerable=false)|11,131,961|5565985|
|DefineProperty (setter & configurable=false)|11,310,458|5655233|
|DefineProperty (setter & enumerable=false & configurable=false)|11,332,599|5666547|
|DefineProperty (writable)|94,523,351|47280423|
|DefineProperty (writable & enumerable=false)|94,129,099|47066546|
|DefineProperty (writable & enumerable=false & configurable=false)|92,628,345|46587976|
|DefineProperties (setter)|93,158,883|46579574|
|DefineProperties (setter & enumerable=false)|11,375,568|5687786|
|DefineProperties (setter & enumerable=false & configurable=false)|11,230,180|5615381|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:57:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":46347266,"opsSec":92693211.12174152},{"name":"Setter","samples":5648267,"opsSec":11296529.66213261},{"name":"Method","samples":46230888,"opsSec":92461752.14486794},{"name":"DefineProperty (setter)","samples":47285227,"opsSec":94536839.5359662},{"name":"DefineProperty (setter & enumerable=false)","samples":5565985,"opsSec":11131961.4283897},{"name":"DefineProperty (setter & configurable=false)","samples":5655233,"opsSec":11310458.783927297},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5666547,"opsSec":11332599.468024414},{"name":"DefineProperty (writable)","samples":47280423,"opsSec":94523351.9891066},{"name":"DefineProperty (writable & enumerable=false)","samples":47066546,"opsSec":94129099.79661943},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46587976,"opsSec":92628345.44864918},{"name":"DefineProperties (setter)","samples":46579574,"opsSec":93158883.98772278},{"name":"DefineProperties (setter & enumerable=false)","samples":5687786,"opsSec":11375568.268813606},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5615381,"opsSec":11230180.546172041}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,225,746|1613390|
|Using replaceAll()|3,056,918|1528460|
|Using replaceAll(//g)|2,916,126|1458126|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:03:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1613390,"opsSec":3225746.1741571524},{"name":"Using replaceAll()","samples":1528460,"opsSec":3056918.991216733},{"name":"Using replaceAll(//g)","samples":1458126,"opsSec":2916126.793180008}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,070,582|12537512|
|{ ...object, __proto__: null }|2,584,045|1292120|
|{ ...object, newProp: true }|22,985,428|11497643|
|structuredClone|317,833|158957|
|JSON.parse + JSON.stringify|301,816|150909|
|loop + object.keys starting with {}|1,712,358|856336|
|loop + object.keys starting with { __proto__: null }|883,095|441611|
|loop + object.keys starting with { randomProp: true }|647,921|323990|
|object.keys + reduce(FN, {})|1,781,189|890695|
|object.keys + reduce(FN, { __proto__: null })|916,400|458261|
|object.keys + reduce(FN, { newProp: true })|642,928|321465|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:07:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12537512,"opsSec":25070582.54573736},{"name":"{ ...object, __proto__: null }","samples":1292120,"opsSec":2584045.405876665},{"name":"{ ...object, newProp: true }","samples":11497643,"opsSec":22985428.928658232},{"name":"structuredClone","samples":158957,"opsSec":317833.3555070405},{"name":"JSON.parse + JSON.stringify","samples":150909,"opsSec":301816.1498670013},{"name":"loop + object.keys starting with {}","samples":856336,"opsSec":1712358.2548711097},{"name":"loop + object.keys starting with { __proto__: null }","samples":441611,"opsSec":883095.6978870968},{"name":"loop + object.keys starting with { randomProp: true }","samples":323990,"opsSec":647921.7440601481},{"name":"object.keys + reduce(FN, {})","samples":890695,"opsSec":1781189.2492844702},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":458261,"opsSec":916400.9141144162},{"name":"object.keys + reduce(FN, { newProp: true })","samples":321465,"opsSec":642928.6009873643}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|314,836|157458|
|Sort using first char|1,341,735|671346|
|Sort using localeCompare|1,243,124|621807|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:12:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":157458,"opsSec":314836.0146511338},{"name":"Sort using first char","samples":671346,"opsSec":1341735.64571686},{"name":"Sort using localeCompare","samples":621807,"opsSec":1243124.6191311865}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,980|1491|
|{...smallObject} - Total keys: 2|36,911,516|18469756|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,045|523|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,732|3367|
|{ ...bigObject, ...anotherBigObject }|1,416|709|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,861,920|5930997|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,620,316|13310173|
|{ ...smallObject, ...anotherSmallObject }|19,538,337|9770840|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:53:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1491,"opsSec":2980.830423490057},{"name":"{...smallObject} - Total keys: 2","samples":18469756,"opsSec":36911516.386573575},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":523,"opsSec":1045.2963357750536},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3367,"opsSec":6732.944005062246},{"name":"{ ...bigObject, ...anotherBigObject }","samples":709,"opsSec":1416.315938031779},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5930997,"opsSec":11861920.432369478},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13310173,"opsSec":26620316.770892184},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9770840,"opsSec":19538337.381240815}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,800|901|
|streams.web.Readable reading 1e3 * "some data"|1,570|786|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:57:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":901,"opsSec":1800.0880508774646},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":786,"opsSec":1570.8198273555095}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|12,731|6366|
|streams.web.WritableStream writing 1e3 * "some data"|1,624|815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:00:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":6366,"opsSec":12731.961142054593},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":815,"opsSec":1624.9465429971094}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|90,793,478|45396744|
|Using backtick (`)|92,357,019|46178528|
|Using array.join|9,437,108|4720820|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:05:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":45396744,"opsSec":90793478.9206521},{"name":"Using backtick (`)","samples":46178528,"opsSec":92357019.24190633},{"name":"Using array.join","samples":4720820,"opsSec":9437108.734492699}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|83,658,392|41829226|
|(short string) (true) String#slice and strict comparison|53,941,448|26970732|
|(long string) (true) String#endsWith|65,659,430|32848373|
|(long string) (true) String#slice and strict comparison|49,630,695|24833304|
|(short string) (false) String#endsWith|90,897,351|45448684|
|(short string) (false) String#slice and strict comparison|55,165,336|27597167|
|(long string) (false) String#endsWith|82,121,544|41069960|
|(long string) (false) String#slice and strict comparison|49,893,582|24955198|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:09:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":41829226,"opsSec":83658392.60254125},{"name":"(short string) (true) String#slice and strict comparison","samples":26970732,"opsSec":53941448.680628575},{"name":"(long string) (true) String#endsWith","samples":32848373,"opsSec":65659430.43249661},{"name":"(long string) (true) String#slice and strict comparison","samples":24833304,"opsSec":49630695.724880435},{"name":"(short string) (false) String#endsWith","samples":45448684,"opsSec":90897351.82027137},{"name":"(short string) (false) String#slice and strict comparison","samples":27597167,"opsSec":55165336.892315924},{"name":"(long string) (false) String#endsWith","samples":41069960,"opsSec":82121544.48320645},{"name":"(long string) (false) String#slice and strict comparison","samples":24955198,"opsSec":49893582.66094058}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,412,979|8206492|
|Using indexof|15,961,476|7980946|
|Using RegExp.test|13,992,131|6997368|
|Using RegExp.text with cached regex pattern|14,829,143|7414572|
|Using new RegExp.test|4,828,037|2414021|
|Using new RegExp.test with cached regex pattern|5,500,319|2750612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:15:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8206492,"opsSec":16412979.010454379},{"name":"Using indexof","samples":7980946,"opsSec":15961476.203544898},{"name":"Using RegExp.test","samples":6997368,"opsSec":13992131.224851182},{"name":"Using RegExp.text with cached regex pattern","samples":7414572,"opsSec":14829143.822050273},{"name":"Using new RegExp.test","samples":2414021,"opsSec":4828037.896167789},{"name":"Using new RegExp.test with cached regex pattern","samples":2750612,"opsSec":5500319.076504895}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,730,096|43865052|
|(short string) (true) String#slice and strict comparison|55,764,540|27882292|
|(long string) (true) String#startsWith|66,683,414|33343097|
|(long string) (true) String#slice and strict comparison|51,773,795|25886903|
|(short string) (false) String#startsWith|93,944,397|46972209|
|(short string) (false) String#slice and strict comparison|56,659,081|28329543|
|(long string) (false) String#startsWith|84,132,230|42068543|
|(long string) (false) String#slice and strict comparison|50,614,650|25315153|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:19:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43865052,"opsSec":87730096.80613206},{"name":"(short string) (true) String#slice and strict comparison","samples":27882292,"opsSec":55764540.6151874},{"name":"(long string) (true) String#startsWith","samples":33343097,"opsSec":66683414.10183292},{"name":"(long string) (true) String#slice and strict comparison","samples":25886903,"opsSec":51773795.955883585},{"name":"(short string) (false) String#startsWith","samples":46972209,"opsSec":93944397.3322326},{"name":"(short string) (false) String#slice and strict comparison","samples":28329543,"opsSec":56659081.580591634},{"name":"(long string) (false) String#startsWith","samples":42068543,"opsSec":84132230.72896463},{"name":"(long string) (false) String#slice and strict comparison","samples":25315153,"opsSec":50614650.48368819}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|83,047,218|41523651|
|Using this|88,386,389|44267490|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:26:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":41523651,"opsSec":83047218.95278105},{"name":"Using this","samples":44267490,"opsSec":88386389.75118813}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,871,635|5944668|
|Date.now()|19,930,972|9967195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:31:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5944668,"opsSec":11871635.249383546},{"name":"Date.now()","samples":9967195,"opsSec":19930972.914417714}]}-->
