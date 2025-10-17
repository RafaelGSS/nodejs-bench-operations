## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|99,447,983|49724198|
|Using dot notation|72,191,817|36142558|
|Using define property (writable)|5,051,734|2525869|
|Using define property initialized (writable)|6,985,415|3511132|
|Using define property (getter)|2,361,297|1180678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:40:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":49724198,"opsSec":99447983.4897645},{"name":"Using dot notation","samples":36142558,"opsSec":72191817.46086809},{"name":"Using define property (writable)","samples":2525869,"opsSec":5051734.746682823},{"name":"Using define property initialized (writable)","samples":3511132,"opsSec":6985415.444550913},{"name":"Using define property (getter)","samples":1180678,"opsSec":2361297.3264840315}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.041ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.136ms
array.push|1,000,000|31.224ms
new Array(length)|1,000,000|8.622ms
array.push|10,000,000|235.874ms
new Array(length)|10,000,000|64.97ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.004ms
array.push|100|0.015ms
new Array(length)|100|0.03ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.35ms
new Array(length)|10,000|0.123ms
array.push|1,000,000|18.008ms
new Array(length)|1,000,000|12.045ms
array.push|10,000,000|345.429ms
new Array(length)|10,000,000|50.111ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|321|161|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:47:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":161,"opsSec":321.43190510809484},{"name":"Array.from","samples":12,"opsSec":23.13821848702047}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,510|2262|
|new Blob (1024)|591|298|
|text (128)|4,309|2160|
|text (1024)|546|274|
|arrayBuffer (128)|4,368|2185|
|arrayBuffer (1024)|546|274|
|slice (0, 64)|155,170|77586|
|slice (0, 512)|20,341|14563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:49:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2262,"opsSec":4510.11984459132},{"name":"new Blob (1024)","samples":298,"opsSec":591.3201844400678},{"name":"text (128)","samples":2160,"opsSec":4309.509412950169},{"name":"text (1024)","samples":274,"opsSec":546.9749874706296},{"name":"arrayBuffer (128)","samples":2185,"opsSec":4368.383907636602},{"name":"arrayBuffer (1024)","samples":274,"opsSec":546.350603586911},{"name":"slice (0, 64)","samples":77586,"opsSec":155170.63387773934},{"name":"slice (0, 512)","samples":14563,"opsSec":20341.63032718147}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.16 ms|1|
|Gzip|134.55 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:57:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133164735},{"name":"Gzip","samples":1,"totalTime":0.13454611}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,888|3445|
|crypto.verify('RSA-SHA256')|6,783|3392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:00:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3445,"opsSec":6888.427413352096},{"name":"crypto.verify('RSA-SHA256')","samples":3392,"opsSec":6783.289952340948}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,534,885|767970|
|fromUnixToISOString(new Date())|2,916,085|1458050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:01:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":767970,"opsSec":1534885.8434724747},{"name":"fromUnixToISOString(new Date())","samples":1458050,"opsSec":2916085.168790831}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|22,140|11071|
|Intl.DateTimeFormat().format(new Date())|21,679|10840|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,696|10849|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,316|10159|
|Reusing Intl.DateTimeFormat()|447,818|223911|
|Date.toLocaleDateString()|1,032,494|516551|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,712|13357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:04:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":11071,"opsSec":22140.733550040935},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10840,"opsSec":21679.72592490486},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10849,"opsSec":21696.417550089565},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10159,"opsSec":20316.729676160267},{"name":"Reusing Intl.DateTimeFormat()","samples":223911,"opsSec":447818.20697978686},{"name":"Date.toLocaleDateString()","samples":516551,"opsSec":1032494.1294062533},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13357,"opsSec":26712.124755417917}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,133,771|566983|
|Using brackets {}|1,154,345|577270|
|Using '' + |1,144,587|572294|
|Using date.toString()|1,273,015|636698|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:07:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":566983,"opsSec":1133771.5944522424},{"name":"Using brackets {}","samples":577270,"opsSec":1154345.5135591845},{"name":"Using '' + ","samples":572294,"opsSec":1144587.0774628154},{"name":"Using date.toString()","samples":636698,"opsSec":1273015.6051149732}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,206,431|2103219|
|Using delete property (proto: null)|16,681,289|8340713|
|Using delete property (cached proto: null)|4,211,724|2105864|
|Using undefined assignment|75,022,854|37524001|
|Using undefined assignment (proto: null)|19,253,823|9627100|
|Using undefined property (cached proto: null)|79,291,638|39645827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:12:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2103219,"opsSec":4206431.109865841},{"name":"Using delete property (proto: null)","samples":8340713,"opsSec":16681289.246790756},{"name":"Using delete property (cached proto: null)","samples":2105864,"opsSec":4211724.487421778},{"name":"Using undefined assignment","samples":37524001,"opsSec":75022854.03923464},{"name":"Using undefined assignment (proto: null)","samples":9627100,"opsSec":19253823.97281781},{"name":"Using undefined property (cached proto: null)","samples":39645827,"opsSec":79291638.14167237}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|344,673|172337|
|NodeError|312,193|156101|
|NodeError Range|306,583|153334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:16:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":172337,"opsSec":344673.06386795855},{"name":"NodeError","samples":156101,"opsSec":312193.8685984985},{"name":"NodeError Range","samples":153334,"opsSec":306583.5123288394}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,397,734|35204406|
|using Array.includes (first item)|79,120,035|39611822|
|Using raw comparison|98,575,417|49287735|
|Using raw comparison (first item)|99,104,683|49565776|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:20:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":35204406,"opsSec":70397734.35331763},{"name":"using Array.includes (first item)","samples":39611822,"opsSec":79120035.83834948},{"name":"Using raw comparison","samples":49287735,"opsSec":98575417.36072713},{"name":"Using raw comparison (first item)","samples":49565776,"opsSec":99104683.33288288}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|47,982,231|23991135|
|Using Object.getOwnPropertyNames()|47,411,652|23730193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:23:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":23991135,"opsSec":47982231.90210787},{"name":"Using Object.getOwnPropertyNames()","samples":23730193,"opsSec":47411652.70006926}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|96,804,557|48402289|
|Length = 10_000 - Array.at|95,542,706|48328953|
|Length = 1_000_000 - Array.at|95,277,330|47638712|
|Length = 100 - Array[length - 1]|93,778,242|46889128|
|Length = 10_000 - Array[length - 1]|96,187,546|48093840|
|Length = 1_000_000 - Array[length - 1]|93,585,351|46792687|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:25:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48402289,"opsSec":96804557.47743382},{"name":"Length = 10_000 - Array.at","samples":48328953,"opsSec":95542706.87533274},{"name":"Length = 1_000_000 - Array.at","samples":47638712,"opsSec":95277330.05655256},{"name":"Length = 100 - Array[length - 1]","samples":46889128,"opsSec":93778242.30837661},{"name":"Length = 10_000 - Array[length - 1]","samples":48093840,"opsSec":96187546.10693583},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46792687,"opsSec":93585351.35234497}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|92,127,447|46063749|
|~ (small)|90,960,557|45504930|
|Math.floor (long)|95,231,347|47616698|
|~ (long)|95,348,584|47674853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:27:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":46063749,"opsSec":92127447.69841355},{"name":"~ (small)","samples":45504930,"opsSec":90960557.74041466},{"name":"Math.floor (long)","samples":47616698,"opsSec":95231347.1927965},{"name":"~ (long)","samples":47674853,"opsSec":95348584.509949}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|34,967,108|17490174|
|Object.create({})|2,072,196|1037959|
|new Function with empty prototype|71,420,515|35713170|
|Empty class|77,911,893|38967065|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:32:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17490174,"opsSec":34967108.963007085},{"name":"Object.create({})","samples":1037959,"opsSec":2072196.6166951554},{"name":"new Function with empty prototype","samples":35713170,"opsSec":71420515.3712894},{"name":"Empty class","samples":38967065,"opsSec":77911893.010792}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,177,174|47593591|
|Using parseInt(x, 10) - big number (10 len)|94,207,662|47164746|
|Using + - small number (2 len)|94,090,591|47053009|
|Using + - big number (10 len)|95,850,439|47925220|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:34:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47593591,"opsSec":95177174.3104756},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47164746,"opsSec":94207662.2743162},{"name":"Using + - small number (2 len)","samples":47053009,"opsSec":94090591.47116594},{"name":"Using + - big number (10 len)","samples":47925220,"opsSec":95850439.42489736}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,076,951|539005|
|Using ? operator to avoid rejection|1,129,023|564529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:37:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":539005,"opsSec":1076951.7118613054},{"name":"Using ? operator to avoid rejection","samples":564529,"opsSec":1129023.7273557326}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|97,795,406|48976810|
|Raw usage underscore usage|92,489,807|46276902|
|Manipulating private properties using #|97,948,061|48975217|
|Manipulating private properties using underscore(_)|98,376,992|49191652|
|Manipulating private properties using Symbol|96,432,681|48222162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:41:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":48976810,"opsSec":97795406.39594184},{"name":"Raw usage underscore usage","samples":46276902,"opsSec":92489807.71232922},{"name":"Manipulating private properties using #","samples":48975217,"opsSec":97948061.11027153},{"name":"Manipulating private properties using underscore(_)","samples":49191652,"opsSec":98376992.72240889},{"name":"Manipulating private properties using Symbol","samples":48222162,"opsSec":96432681.10381426}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,499,323|3750589|
|Adding property in the object creation - small object|7,534,447|3767528|
|Adding property after the function creation - small class|244,765|122414|
|Adding property in the function creation - small class|285,461|142731|
|Adding property after the class creation - small class|282,433|141217|
|Adding property in the class creation - small class|274,620|144602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:44:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3750589,"opsSec":7499323.057440388},{"name":"Adding property in the object creation - small object","samples":3767528,"opsSec":7534447.231732571},{"name":"Adding property after the function creation - small class","samples":122414,"opsSec":244765.5882017268},{"name":"Adding property in the function creation - small class","samples":142731,"opsSec":285461.564956575},{"name":"Adding property after the class creation - small class","samples":141217,"opsSec":282433.52438194497},{"name":"Adding property in the class creation - small class","samples":144602,"opsSec":274620.61966252606}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,510,741|47770006|
|Getter|54,403,530|27201772|
|Method|93,432,730|46716386|
|DefineProperty (getter)|95,682,587|47850418|
|DefineProperty (getter & enumerable=false)|54,022,814|27015995|
|DefineProperty (getter & configurable=false)|95,259,215|47629671|
|DefineProperty (getter & enumerable=false & configurable=false)|54,101,400|27050707|
|DefineProperty (writable)|94,828,761|47592816|
|DefineProperty (writable & enumerable=false)|96,090,114|48047340|
|DefineProperty (writable & enumerable=false & configurable=false)|94,863,264|47431665|
|DefineProperties (getter)|54,499,322|27250243|
|DefineProperties (getter & enumerable=false)|54,259,115|27129564|
|DefineProperties (getter & enumerable=false & configurable=false)|50,681,971|25369092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:47:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Getter (class)","samples":47770006,"opsSec":95510741.39614879},{"name":"Getter","samples":27201772,"opsSec":54403530.94315257},{"name":"Method","samples":46716386,"opsSec":93432730.51586764},{"name":"DefineProperty (getter)","samples":47850418,"opsSec":95682587.60825652},{"name":"DefineProperty (getter & enumerable=false)","samples":27015995,"opsSec":54022814.22500388},{"name":"DefineProperty (getter & configurable=false)","samples":47629671,"opsSec":95259215.30524366},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27050707,"opsSec":54101400.69105543},{"name":"DefineProperty (writable)","samples":47592816,"opsSec":94828761.21599813},{"name":"DefineProperty (writable & enumerable=false)","samples":48047340,"opsSec":96090114.95081893},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47431665,"opsSec":94863264.54434747},{"name":"DefineProperties (getter)","samples":27250243,"opsSec":54499322.98444752},{"name":"DefineProperties (getter & enumerable=false)","samples":27129564,"opsSec":54259115.52040344},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25369092,"opsSec":50681971.20663952}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|85,009,480|42508640|
|Setter|10,591,803|5296617|
|Method|80,015,777|40007907|
|DefineProperty (setter)|84,714,355|42367488|
|DefineProperty (setter & enumerable=false)|10,747,787|5376256|
|DefineProperty (setter & configurable=false)|10,821,818|5411244|
|DefineProperty (setter & enumerable=false & configurable=false)|10,670,975|5335491|
|DefineProperty (writable)|83,657,334|41828674|
|DefineProperty (writable & enumerable=false)|85,937,486|42976152|
|DefineProperty (writable & enumerable=false & configurable=false)|85,990,127|43003811|
|DefineProperties (setter)|80,165,047|40398523|
|DefineProperties (setter & enumerable=false)|10,543,371|5272858|
|DefineProperties (setter & enumerable=false & configurable=false)|10,700,220|5350114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:49:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Setter (class)","samples":42508640,"opsSec":85009480.38017513},{"name":"Setter","samples":5296617,"opsSec":10591803.704011418},{"name":"Method","samples":40007907,"opsSec":80015777.67283693},{"name":"DefineProperty (setter)","samples":42367488,"opsSec":84714355.67868425},{"name":"DefineProperty (setter & enumerable=false)","samples":5376256,"opsSec":10747787.40163169},{"name":"DefineProperty (setter & configurable=false)","samples":5411244,"opsSec":10821818.583946034},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5335491,"opsSec":10670975.746808212},{"name":"DefineProperty (writable)","samples":41828674,"opsSec":83657334.94945574},{"name":"DefineProperty (writable & enumerable=false)","samples":42976152,"opsSec":85937486.65855034},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":43003811,"opsSec":85990127.48054434},{"name":"DefineProperties (setter)","samples":40398523,"opsSec":80165047.69120616},{"name":"DefineProperties (setter & enumerable=false)","samples":5272858,"opsSec":10543371.512650218},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5350114,"opsSec":10700220.360042663}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,002,669|2001536|
|Using replaceAll()|3,164,789|1582486|
|Using replaceAll(//g)|3,454,144|1727245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:54:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2001536,"opsSec":4002669.699673825},{"name":"Using replaceAll()","samples":1582486,"opsSec":3164789.7081128126},{"name":"Using replaceAll(//g)","samples":1727245,"opsSec":3454144.081286835}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,533,804|12269073|
|{ ...object, __proto__: null }|2,348,140|1174689|
|{ ...object, newProp: true }|23,060,112|11536426|
|structuredClone|287,406|143739|
|JSON.parse + JSON.stringify|312,959|156549|
|loop + object.keys starting with {}|1,728,799|864788|
|loop + object.keys starting with { __proto__: null }|929,068|464713|
|loop + object.keys starting with { randomProp: true }|691,916|346038|
|object.keys + reduce(FN, {})|1,779,708|889963|
|object.keys + reduce(FN, { __proto__: null })|940,953|470576|
|object.keys + reduce(FN, { newProp: true })|665,733|332923|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:56:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{ ...object }","samples":12269073,"opsSec":24533804.694191758},{"name":"{ ...object, __proto__: null }","samples":1174689,"opsSec":2348140.224843278},{"name":"{ ...object, newProp: true }","samples":11536426,"opsSec":23060112.256502997},{"name":"structuredClone","samples":143739,"opsSec":287406.1277748151},{"name":"JSON.parse + JSON.stringify","samples":156549,"opsSec":312959.74877913785},{"name":"loop + object.keys starting with {}","samples":864788,"opsSec":1728799.7827279535},{"name":"loop + object.keys starting with { __proto__: null }","samples":464713,"opsSec":929068.2696953},{"name":"loop + object.keys starting with { randomProp: true }","samples":346038,"opsSec":691916.2282399047},{"name":"object.keys + reduce(FN, {})","samples":889963,"opsSec":1779708.6121524428},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":470576,"opsSec":940953.3779152695},{"name":"object.keys + reduce(FN, { newProp: true })","samples":332923,"opsSec":665733.4138279872}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|310,708|155355|
|Sort using first char|1,333,109|666698|
|Sort using localeCompare|1,261,665|630909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:00:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Sort using default","samples":155355,"opsSec":310708.0195470834},{"name":"Sort using first char","samples":666698,"opsSec":1333109.7253513585},{"name":"Sort using localeCompare","samples":630909,"opsSec":1261665.6235959758}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,036|1519|
|{...smallObject} - Total keys: 2|39,696,518|19889594|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,131|566|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,572|3287|
|{ ...bigObject, ...anotherBigObject }|1,542|772|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,112,271|6057569|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,796,793|13899362|
|{ ...smallObject, ...anotherSmallObject }|20,077,485|10042092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:04:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1519,"opsSec":3036.8993365734455},{"name":"{...smallObject} - Total keys: 2","samples":19889594,"opsSec":39696518.01640494},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":566,"opsSec":1131.9974462137614},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3287,"opsSec":6572.204092654049},{"name":"{ ...bigObject, ...anotherBigObject }","samples":772,"opsSec":1542.4812113001055},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6057569,"opsSec":12112271.316073995},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13899362,"opsSec":27796793.901818633},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10042092,"opsSec":20077485.026655946}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,879|940|
|streams.web.Readable reading 1e3 * "some data"|1,724|863|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:07:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":940,"opsSec":1879.7010523446352},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":863,"opsSec":1724.9362007961172}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,625|4813|
|streams.web.WritableStream writing 1e3 * "some data"|1,665|901|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:09:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4813,"opsSec":9625.018536859796},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":901,"opsSec":1665.133416375502}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,614,115|47364687|
|Using backtick (`)|95,395,474|47698266|
|Using array.join|10,346,564|5174111|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:12:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":47364687,"opsSec":94614115.46299945},{"name":"Using backtick (`)","samples":47698266,"opsSec":95395474.4457703},{"name":"Using array.join","samples":5174111,"opsSec":10346564.19071285}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|87,316,182|43732034|
|(short string) (true) String#slice and strict comparison|55,617,298|27821241|
|(long string) (true) String#endsWith|67,780,945|33890486|
|(long string) (true) String#slice and strict comparison|51,376,532|25688640|
|(short string) (false) String#endsWith|84,848,765|42428676|
|(short string) (false) String#slice and strict comparison|57,307,573|28653791|
|(long string) (false) String#endsWith|86,202,054|43101553|
|(long string) (false) String#slice and strict comparison|50,896,119|25448066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:17:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":43732034,"opsSec":87316182.32831419},{"name":"(short string) (true) String#slice and strict comparison","samples":27821241,"opsSec":55617298.15369222},{"name":"(long string) (true) String#endsWith","samples":33890486,"opsSec":67780945.83655491},{"name":"(long string) (true) String#slice and strict comparison","samples":25688640,"opsSec":51376532.57420411},{"name":"(short string) (false) String#endsWith","samples":42428676,"opsSec":84848765.81399222},{"name":"(short string) (false) String#slice and strict comparison","samples":28653791,"opsSec":57307573.86232451},{"name":"(long string) (false) String#endsWith","samples":43101553,"opsSec":86202054.33493711},{"name":"(long string) (false) String#slice and strict comparison","samples":25448066,"opsSec":50896119.68313903}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,958,597|7979302|
|Using indexof|15,787,823|7893914|
|Using RegExp.test|12,272,104|6136055|
|Using RegExp.text with cached regex pattern|13,333,760|6666882|
|Using new RegExp.test|4,630,379|2316007|
|Using new RegExp.test with cached regex pattern|5,255,867|2628087|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:20:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using includes","samples":7979302,"opsSec":15958597.68039532},{"name":"Using indexof","samples":7893914,"opsSec":15787823.137350475},{"name":"Using RegExp.test","samples":6136055,"opsSec":12272104.011213243},{"name":"Using RegExp.text with cached regex pattern","samples":6666882,"opsSec":13333760.026539512},{"name":"Using new RegExp.test","samples":2316007,"opsSec":4630379.4112425195},{"name":"Using new RegExp.test with cached regex pattern","samples":2628087,"opsSec":5255867.425253085}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|86,425,166|43226212|
|(short string) (true) String#slice and strict comparison|56,250,477|28125250|
|(long string) (true) String#startsWith|67,744,806|33872416|
|(long string) (true) String#slice and strict comparison|51,799,690|25912279|
|(short string) (false) String#startsWith|90,876,510|45451716|
|(short string) (false) String#slice and strict comparison|56,517,623|28258822|
|(long string) (false) String#startsWith|87,412,485|43706271|
|(long string) (false) String#slice and strict comparison|49,824,255|24912136|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:22:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43226212,"opsSec":86425166.3667796},{"name":"(short string) (true) String#slice and strict comparison","samples":28125250,"opsSec":56250477.724810824},{"name":"(long string) (true) String#startsWith","samples":33872416,"opsSec":67744806.39246319},{"name":"(long string) (true) String#slice and strict comparison","samples":25912279,"opsSec":51799690.31547149},{"name":"(short string) (false) String#startsWith","samples":45451716,"opsSec":90876510.01566088},{"name":"(short string) (false) String#slice and strict comparison","samples":28258822,"opsSec":56517623.20151466},{"name":"(long string) (false) String#startsWith","samples":43706271,"opsSec":87412485.00705978},{"name":"(long string) (false) String#slice and strict comparison","samples":24912136,"opsSec":49824255.458347194}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|81,218,768|40616947|
|Using this|88,945,013|44472531|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:28:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using super","samples":40616947,"opsSec":81218768.466311},{"name":"Using this","samples":44472531,"opsSec":88945013.96969245}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,831,172|6417701|
|Date.now()|20,012,876|10008209|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:30:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":6417701,"opsSec":12831172.127121262},{"name":"Date.now()","samples":10008209,"opsSec":20012876.36129609}]}-->
