## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|111,841,628|55956974|
|Using dot notation|80,529,981|40265623|
|Using define property (writable)|4,915,925|2458022|
|Using define property initialized (writable)|7,097,121|3549632|
|Using define property (getter)|2,454,927|1239139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":55956974,"opsSec":111841628.29526195},{"name":"Using dot notation","samples":40265623,"opsSec":80529981.5182302},{"name":"Using define property (writable)","samples":2458022,"opsSec":4915925.132930285},{"name":"Using define property initialized (writable)","samples":3549632,"opsSec":7097121.861514296},{"name":"Using define property (getter)","samples":1239139,"opsSec":2454927.8555052476}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.025ms
new Array(length)|100|0.01ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.258ms
new Array(length)|10,000|0.152ms
array.push|1,000,000|32.283ms
new Array(length)|1,000,000|7.74ms
array.push|10,000,000|251.781ms
new Array(length)|10,000,000|65.304ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.019ms
new Array(length)|100|0.012ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.31ms
new Array(length)|10,000|0.183ms
array.push|1,000,000|20.417ms
new Array(length)|1,000,000|12.248ms
array.push|10,000,000|225.588ms
new Array(length)|10,000,000|68.347ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|301|151|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:56:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":151,"opsSec":301.21801994713604},{"name":"Array.from","samples":12,"opsSec":23.995758749641}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,479|2247|
|new Blob (1024)|633|317|
|text (128)|4,394|2201|
|text (1024)|554|279|
|arrayBuffer (128)|4,385|2194|
|arrayBuffer (1024)|552|277|
|slice (0, 64)|223,546|113791|
|slice (0, 512)|37,795|18899|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:02:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2247,"opsSec":4479.308825624042},{"name":"new Blob (1024)","samples":317,"opsSec":633.2018528636764},{"name":"text (128)","samples":2201,"opsSec":4394.740337226416},{"name":"text (1024)","samples":279,"opsSec":554.5922866203543},{"name":"arrayBuffer (128)","samples":2194,"opsSec":4385.61728535763},{"name":"arrayBuffer (1024)","samples":277,"opsSec":552.4174102966161},{"name":"slice (0, 64)","samples":113791,"opsSec":223546.08599772412},{"name":"slice (0, 512)","samples":18899,"opsSec":37795.83233342401}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.68 ms|1|
|Gzip|134.67 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:08:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.13368097},{"name":"Gzip","samples":1,"totalTime":0.134669894}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,683|3342|
|crypto.verify('RSA-SHA256')|6,796|3399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:15:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3342,"opsSec":6683.658304652832},{"name":"crypto.verify('RSA-SHA256')","samples":3399,"opsSec":6796.099579490189}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,512,224|756146|
|fromUnixToISOString(new Date())|2,088,331|1044166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:17:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":756146,"opsSec":1512224.5033715165},{"name":"fromUnixToISOString(new Date())","samples":1044166,"opsSec":2088331.6575136082}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|20,749|10377|
|Intl.DateTimeFormat().format(new Date())|19,958|9980|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,907|9955|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,876|9440|
|Reusing Intl.DateTimeFormat()|437,527|219356|
|Date.toLocaleDateString()|995,958|498002|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,578|12291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:21:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10377,"opsSec":20749.83621336641},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9980,"opsSec":19958.415661047995},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9955,"opsSec":19907.238189217056},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9440,"opsSec":18876.385964895933},{"name":"Reusing Intl.DateTimeFormat()","samples":219356,"opsSec":437527.9513573659},{"name":"Date.toLocaleDateString()","samples":498002,"opsSec":995958.8352587387},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":12291,"opsSec":24578.64589966595}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,036,605|518314|
|Using brackets {}|937,006|468504|
|Using '' + |1,033,497|516801|
|Using date.toString()|1,234,734|617421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:28:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":518314,"opsSec":1036605.9368792394},{"name":"Using brackets {}","samples":468504,"opsSec":937006.1409798162},{"name":"Using '' + ","samples":516801,"opsSec":1033497.5464699734},{"name":"Using date.toString()","samples":617421,"opsSec":1234734.3509203494}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,127,968|2063986|
|Using delete property (proto: null)|18,154,114|9084891|
|Using delete property (cached proto: null)|4,234,195|2117099|
|Using undefined assignment|79,101,512|39558159|
|Using undefined assignment (proto: null)|19,539,063|9771589|
|Using undefined property (cached proto: null)|78,004,478|39002248|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:30:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2063986,"opsSec":4127968.870999595},{"name":"Using delete property (proto: null)","samples":9084891,"opsSec":18154114.889925305},{"name":"Using delete property (cached proto: null)","samples":2117099,"opsSec":4234195.823623347},{"name":"Using undefined assignment","samples":39558159,"opsSec":79101512.88623914},{"name":"Using undefined assignment (proto: null)","samples":9771589,"opsSec":19539063.151456553},{"name":"Using undefined property (cached proto: null)","samples":39002248,"opsSec":78004478.05897005}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|347,668|173835|
|NodeError|320,332|160167|
|NodeError Range|295,068|147536|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:36:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":173835,"opsSec":347668.535620128},{"name":"NodeError","samples":160167,"opsSec":320332.0651943262},{"name":"NodeError Range","samples":147536,"opsSec":295068.888203505}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,376,009|34048141|
|using Array.includes (first item)|83,263,274|41633024|
|Using raw comparison|99,065,122|49553626|
|Using raw comparison (first item)|97,495,693|48753926|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:39:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34048141,"opsSec":67376009.41673984},{"name":"using Array.includes (first item)","samples":41633024,"opsSec":83263274.0007634},{"name":"Using raw comparison","samples":49553626,"opsSec":99065122.57532239},{"name":"Using raw comparison (first item)","samples":48753926,"opsSec":97495693.7020212}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,673,519|20837276|
|Using Object.getOwnPropertyNames()|40,695,502|20395912|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:45:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":20837276,"opsSec":41673519.663570896},{"name":"Using Object.getOwnPropertyNames()","samples":20395912,"opsSec":40695502.38514165}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|87,941,944|43970981|
|Length = 10_000 - Array.at|89,675,773|45089542|
|Length = 1_000_000 - Array.at|92,090,666|46046099|
|Length = 100 - Array[length - 1]|89,327,928|44663972|
|Length = 10_000 - Array[length - 1]|87,787,168|43893592|
|Length = 1_000_000 - Array[length - 1]|91,032,027|45516428|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:47:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":43970981,"opsSec":87941944.93926267},{"name":"Length = 10_000 - Array.at","samples":45089542,"opsSec":89675773.51992457},{"name":"Length = 1_000_000 - Array.at","samples":46046099,"opsSec":92090666.53221557},{"name":"Length = 100 - Array[length - 1]","samples":44663972,"opsSec":89327928.45694046},{"name":"Length = 10_000 - Array[length - 1]","samples":43893592,"opsSec":87787168.54945834},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45516428,"opsSec":91032027.60854876}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,792,367|46901044|
|~ (small)|98,423,274|49256723|
|Math.floor (long)|97,918,185|48959096|
|~ (long)|98,838,175|49419097|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:52:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46901044,"opsSec":93792367.17148161},{"name":"~ (small)","samples":49256723,"opsSec":98423274.92613678},{"name":"Math.floor (long)","samples":48959096,"opsSec":97918185.73323612},{"name":"~ (long)","samples":49419097,"opsSec":98838175.22074671}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|36,186,681|18093446|
|Object.create({})|2,115,528|1063608|
|new Function with empty prototype|103,720,563|51868719|
|Empty class|73,300,610|36651021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:57:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18093446,"opsSec":36186681.39351429},{"name":"Object.create({})","samples":1063608,"opsSec":2115528.559382947},{"name":"new Function with empty prototype","samples":51868719,"opsSec":103720563.90889879},{"name":"Empty class","samples":36651021,"opsSec":73300610.43907812}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,400,883|47700448|
|Using parseInt(x, 10) - big number (10 len)|95,385,003|47704110|
|Using + - small number (2 len)|95,704,687|47852350|
|Using + - big number (10 len)|93,759,512|46886414|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:59:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47700448,"opsSec":95400883.21628165},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47704110,"opsSec":95385003.29019916},{"name":"Using + - small number (2 len)","samples":47852350,"opsSec":95704687.17557192},{"name":"Using + - big number (10 len)","samples":46886414,"opsSec":93759512.64905162}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,009,124|515362|
|Using ? operator to avoid rejection|1,102,680|552730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:04:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":515362,"opsSec":1009124.2820529881},{"name":"Using ? operator to avoid rejection","samples":552730,"opsSec":1102680.8868964138}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|99,199,952|49599988|
|Raw usage underscore usage|99,612,293|49806261|
|Manipulating private properties using #|99,407,356|49703685|
|Manipulating private properties using underscore(_)|99,615,356|49817294|
|Manipulating private properties using Symbol|98,518,834|49260586|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:08:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":49599988,"opsSec":99199952.39041133},{"name":"Raw usage underscore usage","samples":49806261,"opsSec":99612293.48939873},{"name":"Manipulating private properties using #","samples":49703685,"opsSec":99407356.08297014},{"name":"Manipulating private properties using underscore(_)","samples":49817294,"opsSec":99615356.85689735},{"name":"Manipulating private properties using Symbol","samples":49260586,"opsSec":98518834.93619765}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,130,852|4065427|
|Adding property in the object creation - small object|8,033,445|4016958|
|Adding property after the function creation - small class|270,022|135013|
|Adding property in the function creation - small class|278,966|139884|
|Adding property after the class creation - small class|274,089|138054|
|Adding property in the class creation - small class|276,387|138196|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:11:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4065427,"opsSec":8130852.991774228},{"name":"Adding property in the object creation - small object","samples":4016958,"opsSec":8033445.754219331},{"name":"Adding property after the function creation - small class","samples":135013,"opsSec":270022.6916819815},{"name":"Adding property in the function creation - small class","samples":139884,"opsSec":278966.8930050924},{"name":"Adding property after the class creation - small class","samples":138054,"opsSec":274089.3037724285},{"name":"Adding property in the class creation - small class","samples":138196,"opsSec":276387.81935784436}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|99,046,489|49523250|
|Getter|50,223,632|25111840|
|Method|101,832,562|50916960|
|DefineProperty (getter)|98,624,343|49320395|
|DefineProperty (getter & enumerable=false)|50,477,570|25246515|
|DefineProperty (getter & configurable=false)|97,711,142|48868707|
|DefineProperty (getter & enumerable=false & configurable=false)|50,549,473|25274764|
|DefineProperty (writable)|95,805,365|47913449|
|DefineProperty (writable & enumerable=false)|97,577,791|48803966|
|DefineProperty (writable & enumerable=false & configurable=false)|96,638,690|48322977|
|DefineProperties (getter)|49,570,397|24833914|
|DefineProperties (getter & enumerable=false)|50,605,139|25327859|
|DefineProperties (getter & enumerable=false & configurable=false)|49,595,566|24798513|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:16:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":49523250,"opsSec":99046489.69916508},{"name":"Getter","samples":25111840,"opsSec":50223632.890232354},{"name":"Method","samples":50916960,"opsSec":101832562.16461611},{"name":"DefineProperty (getter)","samples":49320395,"opsSec":98624343.60170966},{"name":"DefineProperty (getter & enumerable=false)","samples":25246515,"opsSec":50477570.032715805},{"name":"DefineProperty (getter & configurable=false)","samples":48868707,"opsSec":97711142.40514153},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25274764,"opsSec":50549473.709865235},{"name":"DefineProperty (writable)","samples":47913449,"opsSec":95805365.74404901},{"name":"DefineProperty (writable & enumerable=false)","samples":48803966,"opsSec":97577791.39117277},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48322977,"opsSec":96638690.6360118},{"name":"DefineProperties (getter)","samples":24833914,"opsSec":49570397.97761977},{"name":"DefineProperties (getter & enumerable=false)","samples":25327859,"opsSec":50605139.88326144},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24798513,"opsSec":49595566.700045414}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|100,728,166|50366350|
|Setter|11,700,267|5850136|
|Method|95,334,387|47674357|
|DefineProperty (setter)|101,075,444|50542502|
|DefineProperty (setter & enumerable=false)|11,725,110|5862612|
|DefineProperty (setter & configurable=false)|11,498,195|5749101|
|DefineProperty (setter & enumerable=false & configurable=false)|11,774,858|5892108|
|DefineProperty (writable)|99,855,413|50569325|
|DefineProperty (writable & enumerable=false)|99,108,389|49555204|
|DefineProperty (writable & enumerable=false & configurable=false)|100,831,697|50415852|
|DefineProperties (setter)|101,170,639|50607183|
|DefineProperties (setter & enumerable=false)|11,622,708|5811357|
|DefineProperties (setter & enumerable=false & configurable=false)|11,560,449|5780239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:22:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":50366350,"opsSec":100728166.82958001},{"name":"Setter","samples":5850136,"opsSec":11700267.670900961},{"name":"Method","samples":47674357,"opsSec":95334387.14829935},{"name":"DefineProperty (setter)","samples":50542502,"opsSec":101075444.68874311},{"name":"DefineProperty (setter & enumerable=false)","samples":5862612,"opsSec":11725110.102280468},{"name":"DefineProperty (setter & configurable=false)","samples":5749101,"opsSec":11498195.813970651},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5892108,"opsSec":11774858.731713364},{"name":"DefineProperty (writable)","samples":50569325,"opsSec":99855413.0792887},{"name":"DefineProperty (writable & enumerable=false)","samples":49555204,"opsSec":99108389.16211276},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":50415852,"opsSec":100831697.95009811},{"name":"DefineProperties (setter)","samples":50607183,"opsSec":101170639.64486293},{"name":"DefineProperties (setter & enumerable=false)","samples":5811357,"opsSec":11622708.746535646},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5780239,"opsSec":11560449.491931554}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,351,179|1675959|
|Using replaceAll()|3,278,949|1647654|
|Using replaceAll(//g)|3,063,400|1531704|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1675959,"opsSec":3351179.2057346622},{"name":"Using replaceAll()","samples":1647654,"opsSec":3278949.602423177},{"name":"Using replaceAll(//g)","samples":1531704,"opsSec":3063400.9786849567}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,903,365|12479755|
|{ ...object, __proto__: null }|2,637,727|1318865|
|{ ...object, newProp: true }|23,178,066|11589034|
|structuredClone|297,670|148837|
|JSON.parse + JSON.stringify|301,327|150689|
|loop + object.keys starting with {}|1,710,593|855302|
|loop + object.keys starting with { __proto__: null }|878,965|439520|
|loop + object.keys starting with { randomProp: true }|673,219|336610|
|object.keys + reduce(FN, {})|1,780,399|890239|
|object.keys + reduce(FN, { __proto__: null })|935,138|467609|
|object.keys + reduce(FN, { newProp: true })|699,399|349840|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:30:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12479755,"opsSec":24903365.41248428},{"name":"{ ...object, __proto__: null }","samples":1318865,"opsSec":2637727.5996678844},{"name":"{ ...object, newProp: true }","samples":11589034,"opsSec":23178066.05304245},{"name":"structuredClone","samples":148837,"opsSec":297670.0713503983},{"name":"JSON.parse + JSON.stringify","samples":150689,"opsSec":301327.0684935749},{"name":"loop + object.keys starting with {}","samples":855302,"opsSec":1710593.804860923},{"name":"loop + object.keys starting with { __proto__: null }","samples":439520,"opsSec":878965.031314549},{"name":"loop + object.keys starting with { randomProp: true }","samples":336610,"opsSec":673219.2325300749},{"name":"object.keys + reduce(FN, {})","samples":890239,"opsSec":1780399.2956687354},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":467609,"opsSec":935138.9340031301},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349840,"opsSec":699399.0625869437}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|325,399|162700|
|Sort using first char|1,372,036|686074|
|Sort using localeCompare|1,252,880|626567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:37:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":162700,"opsSec":325399.9082372259},{"name":"Sort using first char","samples":686074,"opsSec":1372036.253135327},{"name":"Sort using localeCompare","samples":626567,"opsSec":1252880.9856964624}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,766|884|
|{...smallObject} - Total keys: 2|42,021,345|21017457|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,058|530|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,843|3422|
|{ ...bigObject, ...anotherBigObject }|1,112|557|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,252,114|6129453|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,494,182|14247093|
|{ ...smallObject, ...anotherSmallObject }|21,028,469|10521186|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:41:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":884,"opsSec":1766.7291281358832},{"name":"{...smallObject} - Total keys: 2","samples":21017457,"opsSec":42021345.475631304},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":530,"opsSec":1058.8353531123803},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3422,"opsSec":6843.748341685979},{"name":"{ ...bigObject, ...anotherBigObject }","samples":557,"opsSec":1112.2297439970216},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6129453,"opsSec":12252114.114053559},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14247093,"opsSec":28494182.067802873},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10521186,"opsSec":21028469.952343687}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,928|965|
|streams.web.Readable reading 1e3 * "some data"|1,707|854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:44:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":965,"opsSec":1928.236523574419},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":854,"opsSec":1707.711929490038}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,925|5472|
|streams.web.WritableStream writing 1e3 * "some data"|1,669|835|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:49:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5472,"opsSec":10925.932026578152},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":835,"opsSec":1669.8485280400214}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,969,710|48507997|
|Using backtick (`)|96,895,734|48447876|
|Using array.join|10,099,767|5049885|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:54:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48507997,"opsSec":96969710.7449403},{"name":"Using backtick (`)","samples":48447876,"opsSec":96895734.55876778},{"name":"Using array.join","samples":5049885,"opsSec":10099767.717452496}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,920,370|45960544|
|(short string) (true) String#slice and strict comparison|60,411,860|30205939|
|(long string) (true) String#endsWith|65,636,826|32840904|
|(long string) (true) String#slice and strict comparison|53,845,775|26922904|
|(short string) (false) String#endsWith|96,158,942|48079486|
|(short string) (false) String#slice and strict comparison|59,686,071|29852662|
|(long string) (false) String#endsWith|89,449,887|44748864|
|(long string) (false) String#slice and strict comparison|54,038,595|27020891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:35:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45960544,"opsSec":91920370.1019095},{"name":"(short string) (true) String#slice and strict comparison","samples":30205939,"opsSec":60411860.72220784},{"name":"(long string) (true) String#endsWith","samples":32840904,"opsSec":65636826.55766542},{"name":"(long string) (true) String#slice and strict comparison","samples":26922904,"opsSec":53845775.15407715},{"name":"(short string) (false) String#endsWith","samples":48079486,"opsSec":96158942.19072793},{"name":"(short string) (false) String#slice and strict comparison","samples":29852662,"opsSec":59686071.422057815},{"name":"(long string) (false) String#endsWith","samples":44748864,"opsSec":89449887.69546361},{"name":"(long string) (false) String#slice and strict comparison","samples":27020891,"opsSec":54038595.66824502}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,141,293|8073223|
|Using indexof|16,124,059|8062657|
|Using RegExp.test|13,478,522|6739263|
|Using RegExp.text with cached regex pattern|14,353,490|7176747|
|Using new RegExp.test|4,712,109|2356639|
|Using new RegExp.test with cached regex pattern|5,520,998|2760500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:41:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8073223,"opsSec":16141293.73132355},{"name":"Using indexof","samples":8062657,"opsSec":16124059.483675933},{"name":"Using RegExp.test","samples":6739263,"opsSec":13478522.010357484},{"name":"Using RegExp.text with cached regex pattern","samples":7176747,"opsSec":14353490.124557668},{"name":"Using new RegExp.test","samples":2356639,"opsSec":4712109.038838081},{"name":"Using new RegExp.test with cached regex pattern","samples":2760500,"opsSec":5520998.619750345}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|89,999,493|44999857|
|(short string) (true) String#slice and strict comparison|53,175,626|26587828|
|(long string) (true) String#startsWith|57,395,486|28697795|
|(long string) (true) String#slice and strict comparison|47,277,676|23638844|
|(short string) (false) String#startsWith|96,212,850|48107199|
|(short string) (false) String#slice and strict comparison|52,221,357|26115636|
|(long string) (false) String#startsWith|85,851,396|42925958|
|(long string) (false) String#slice and strict comparison|46,940,594|23475319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:50:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44999857,"opsSec":89999493.32124238},{"name":"(short string) (true) String#slice and strict comparison","samples":26587828,"opsSec":53175626.22164932},{"name":"(long string) (true) String#startsWith","samples":28697795,"opsSec":57395486.34375166},{"name":"(long string) (true) String#slice and strict comparison","samples":23638844,"opsSec":47277676.55880227},{"name":"(short string) (false) String#startsWith","samples":48107199,"opsSec":96212850.51251236},{"name":"(short string) (false) String#slice and strict comparison","samples":26115636,"opsSec":52221357.4619577},{"name":"(long string) (false) String#startsWith","samples":42925958,"opsSec":85851396.42734882},{"name":"(long string) (false) String#slice and strict comparison","samples":23475319,"opsSec":46940594.12107592}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|95,161,623|47594664|
|Using this|96,354,040|48181063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:51:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":47594664,"opsSec":95161623.21598664},{"name":"Using this","samples":48181063,"opsSec":96354040.54704154}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,469,641|5238380|
|Date.now()|20,720,521|10363171|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:57:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5238380,"opsSec":10469641.920790179},{"name":"Date.now()","samples":10363171,"opsSec":20720521.35690459}]}-->
