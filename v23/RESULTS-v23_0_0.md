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
|Length = 100 - Array.at|93,786,501|46909199|
|Length = 10_000 - Array.at|93,512,201|46762882|
|Length = 1_000_000 - Array.at|95,130,738|47565416|
|Length = 100 - Array[length - 1]|91,831,196|45915985|
|Length = 10_000 - Array[length - 1]|93,066,778|46537429|
|Length = 1_000_000 - Array[length - 1]|93,471,142|46744743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46909199,"opsSec":93786501.77346586},{"name":"Length = 10_000 - Array.at","samples":46762882,"opsSec":93512201.92535475},{"name":"Length = 1_000_000 - Array.at","samples":47565416,"opsSec":95130738.77187599},{"name":"Length = 100 - Array[length - 1]","samples":45915985,"opsSec":91831196.04667974},{"name":"Length = 10_000 - Array[length - 1]","samples":46537429,"opsSec":93066778.12845644},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46744743,"opsSec":93471142.66213712}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|94,413,040|47210856|
|~ (small)|96,963,943|48481978|
|Math.floor (long)|97,375,128|48687579|
|~ (long)|89,281,159|44640603|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:03:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":47210856,"opsSec":94413040.53987858},{"name":"~ (small)","samples":48481978,"opsSec":96963943.58861522},{"name":"Math.floor (long)","samples":48687579,"opsSec":97375128.78746137},{"name":"~ (long)","samples":44640603,"opsSec":89281159.03811035}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,296,796|15672908|
|Object.create({})|2,046,030|1037103|
|new Function with empty prototype|75,332,605|37668250|
|Empty class|73,504,762|36753121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:06:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15672908,"opsSec":31296796.578641992},{"name":"Object.create({})","samples":1037103,"opsSec":2046030.914413788},{"name":"new Function with empty prototype","samples":37668250,"opsSec":75332605.00299092},{"name":"Empty class","samples":36753121,"opsSec":73504762.49614048}]}-->

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
|Using parseInt(x, 10) - small number (2 len)|97,079,526|48539785|
|Using parseInt(x, 10) - big number (10 len)|95,940,733|47975440|
|Using + - small number (2 len)|96,802,214|48403008|
|Using + - big number (10 len)|97,209,005|48605802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48539785,"opsSec":97079526.70253108},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47975440,"opsSec":95940733.11618416},{"name":"Using + - small number (2 len)","samples":48403008,"opsSec":96802214.18983991},{"name":"Using + - big number (10 len)","samples":48605802,"opsSec":97209005.4088674}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,125,290|563548|
|Using ? operator to avoid rejection|1,109,073|554537|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:14:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":563548,"opsSec":1125290.4736855524},{"name":"Using ? operator to avoid rejection","samples":554537,"opsSec":1109073.8757837259}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|89,564,272|44784421|
|Raw usage underscore usage|93,725,119|46862566|
|Manipulating private properties using #|93,879,467|46945423|
|Manipulating private properties using underscore(_)|93,910,832|46955419|
|Manipulating private properties using Symbol|93,950,413|46975210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:17:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":44784421,"opsSec":89564272.78905939},{"name":"Raw usage underscore usage","samples":46862566,"opsSec":93725119.81573442},{"name":"Manipulating private properties using #","samples":46945423,"opsSec":93879467.80850162},{"name":"Manipulating private properties using underscore(_)","samples":46955419,"opsSec":93910832.74099337},{"name":"Manipulating private properties using Symbol","samples":46975210,"opsSec":93950413.61137187}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,943,457|3971731|
|Adding property in the object creation - small object|7,917,423|3958715|
|Adding property after the function creation - small class|276,786|138394|
|Adding property in the function creation - small class|290,843|145423|
|Adding property after the class creation - small class|271,020|137167|
|Adding property in the class creation - small class|273,693|137513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:23:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3971731,"opsSec":7943457.805854279},{"name":"Adding property in the object creation - small object","samples":3958715,"opsSec":7917423.206850889},{"name":"Adding property after the function creation - small class","samples":138394,"opsSec":276786.9587274613},{"name":"Adding property in the function creation - small class","samples":145423,"opsSec":290843.9768892968},{"name":"Adding property after the class creation - small class","samples":137167,"opsSec":271020.8953085484},{"name":"Adding property in the class creation - small class","samples":137513,"opsSec":273693.81724008924}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|96,727,930|48364030|
|Getter|48,779,957|24390006|
|Method|94,723,427|47363668|
|DefineProperty (getter)|97,301,266|48650655|
|DefineProperty (getter & enumerable=false)|48,725,152|24365021|
|DefineProperty (getter & configurable=false)|96,100,181|48062288|
|DefineProperty (getter & enumerable=false & configurable=false)|48,557,607|24278881|
|DefineProperty (writable)|97,092,885|48552697|
|DefineProperty (writable & enumerable=false)|96,228,064|48114912|
|DefineProperty (writable & enumerable=false & configurable=false)|96,976,364|48488189|
|DefineProperties (getter)|49,851,750|24933802|
|DefineProperties (getter & enumerable=false)|49,015,821|24521373|
|DefineProperties (getter & enumerable=false & configurable=false)|47,657,604|23828808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:25:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":48364030,"opsSec":96727930.19111769},{"name":"Getter","samples":24390006,"opsSec":48779957.07376834},{"name":"Method","samples":47363668,"opsSec":94723427.14305551},{"name":"DefineProperty (getter)","samples":48650655,"opsSec":97301266.01982775},{"name":"DefineProperty (getter & enumerable=false)","samples":24365021,"opsSec":48725152.62583461},{"name":"DefineProperty (getter & configurable=false)","samples":48062288,"opsSec":96100181.54551576},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24278881,"opsSec":48557607.29546315},{"name":"DefineProperty (writable)","samples":48552697,"opsSec":97092885.71771875},{"name":"DefineProperty (writable & enumerable=false)","samples":48114912,"opsSec":96228064.18116227},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48488189,"opsSec":96976364.22935627},{"name":"DefineProperties (getter)","samples":24933802,"opsSec":49851750.14641844},{"name":"DefineProperties (getter & enumerable=false)","samples":24521373,"opsSec":49015821.7071679},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":23828808,"opsSec":47657604.6574901}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|94,337,593|47168828|
|Setter|11,105,232|5552692|
|Method|92,745,740|46376186|
|DefineProperty (setter)|94,800,258|47412449|
|DefineProperty (setter & enumerable=false)|11,257,744|5640453|
|DefineProperty (setter & configurable=false)|11,552,313|5776161|
|DefineProperty (setter & enumerable=false & configurable=false)|11,472,042|5736027|
|DefineProperty (writable)|94,859,022|47439307|
|DefineProperty (writable & enumerable=false)|94,736,560|47368953|
|DefineProperty (writable & enumerable=false & configurable=false)|94,786,072|47414588|
|DefineProperties (setter)|94,251,878|47131424|
|DefineProperties (setter & enumerable=false)|11,517,169|5766444|
|DefineProperties (setter & enumerable=false & configurable=false)|11,418,355|5709936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:32:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":47168828,"opsSec":94337593.359838},{"name":"Setter","samples":5552692,"opsSec":11105232.01379466},{"name":"Method","samples":46376186,"opsSec":92745740.67954141},{"name":"DefineProperty (setter)","samples":47412449,"opsSec":94800258.27527116},{"name":"DefineProperty (setter & enumerable=false)","samples":5640453,"opsSec":11257744.541535135},{"name":"DefineProperty (setter & configurable=false)","samples":5776161,"opsSec":11552313.728543371},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5736027,"opsSec":11472042.688565908},{"name":"DefineProperty (writable)","samples":47439307,"opsSec":94859022.19699152},{"name":"DefineProperty (writable & enumerable=false)","samples":47368953,"opsSec":94736560.93030792},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47414588,"opsSec":94786072.41271462},{"name":"DefineProperties (setter)","samples":47131424,"opsSec":94251878.96632591},{"name":"DefineProperties (setter & enumerable=false)","samples":5766444,"opsSec":11517169.091212256},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5709936,"opsSec":11418355.893541167}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,268,531|1634623|
|Using replaceAll()|3,062,151|1531076|
|Using replaceAll(//g)|2,916,583|1458541|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:37:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1634623,"opsSec":3268531.374837268},{"name":"Using replaceAll()","samples":1531076,"opsSec":3062151.461061343},{"name":"Using replaceAll(//g)","samples":1458541,"opsSec":2916583.2176044583}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,396,054|12199997|
|{ ...object, __proto__: null }|2,502,226|1251801|
|{ ...object, newProp: true }|22,750,886|11382075|
|structuredClone|305,569|152786|
|JSON.parse + JSON.stringify|281,137|140574|
|loop + object.keys starting with {}|1,671,797|836085|
|loop + object.keys starting with { __proto__: null }|853,313|426677|
|loop + object.keys starting with { randomProp: true }|609,830|304986|
|object.keys + reduce(FN, {})|1,715,853|858121|
|object.keys + reduce(FN, { __proto__: null })|869,264|434697|
|object.keys + reduce(FN, { newProp: true })|612,186|306096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:40:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":12199997,"opsSec":24396054.13484144},{"name":"{ ...object, __proto__: null }","samples":1251801,"opsSec":2502226.881199622},{"name":"{ ...object, newProp: true }","samples":11382075,"opsSec":22750886.324276496},{"name":"structuredClone","samples":152786,"opsSec":305569.77911884536},{"name":"JSON.parse + JSON.stringify","samples":140574,"opsSec":281137.9976723188},{"name":"loop + object.keys starting with {}","samples":836085,"opsSec":1671797.0922841893},{"name":"loop + object.keys starting with { __proto__: null }","samples":426677,"opsSec":853313.7201791528},{"name":"loop + object.keys starting with { randomProp: true }","samples":304986,"opsSec":609830.3839685741},{"name":"object.keys + reduce(FN, {})","samples":858121,"opsSec":1715853.520467845},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":434697,"opsSec":869264.4291827148},{"name":"object.keys + reduce(FN, { newProp: true })","samples":306096,"opsSec":612186.1891286928}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|311,838|156301|
|Sort using first char|1,332,923|666567|
|Sort using localeCompare|1,216,345|608277|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:43:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":156301,"opsSec":311838.5176494375},{"name":"Sort using first char","samples":666567,"opsSec":1332923.4460807634},{"name":"Sort using localeCompare","samples":608277,"opsSec":1216345.1219175935}]}-->

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
