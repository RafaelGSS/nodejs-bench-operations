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
|Length = 100 - Array.at|92,972,583|46487174|
|Length = 10_000 - Array.at|99,184,634|49643927|
|Length = 1_000_000 - Array.at|100,386,487|50196786|
|Length = 100 - Array[length - 1]|99,077,098|49543792|
|Length = 10_000 - Array[length - 1]|98,697,587|49348801|
|Length = 1_000_000 - Array[length - 1]|99,099,881|49558382|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:19:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46487174,"opsSec":92972583.56630908},{"name":"Length = 10_000 - Array.at","samples":49643927,"opsSec":99184634.13820653},{"name":"Length = 1_000_000 - Array.at","samples":50196786,"opsSec":100386487.7255612},{"name":"Length = 100 - Array[length - 1]","samples":49543792,"opsSec":99077098.47251445},{"name":"Length = 10_000 - Array[length - 1]","samples":49348801,"opsSec":98697587.5901522},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49558382,"opsSec":99099881.74054621}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,104,624|48632267|
|~ (small)|98,634,765|49317451|
|Math.floor (long)|96,483,737|48291845|
|~ (long)|98,842,655|49426212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:21:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48632267,"opsSec":97104624.62888141},{"name":"~ (small)","samples":49317451,"opsSec":98634765.68675382},{"name":"Math.floor (long)","samples":48291845,"opsSec":96483737.67195874},{"name":"~ (long)","samples":49426212,"opsSec":98842655.18270299}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,471,105|14756164|
|Object.create({})|2,092,202|1052776|
|new Function with empty prototype|96,636,869|48339379|
|Empty class|77,853,562|38928503|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14756164,"opsSec":29471105.468053192},{"name":"Object.create({})","samples":1052776,"opsSec":2092202.8503519348},{"name":"new Function with empty prototype","samples":48339379,"opsSec":96636869.58923411},{"name":"Empty class","samples":38928503,"opsSec":77853562.53692898}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,196,743|48122857|
|Using parseInt(x, 10) - big number (10 len)|95,981,619|47996557|
|Using + - small number (2 len)|94,621,624|47310835|
|Using + - big number (10 len)|97,472,375|48736207|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48122857,"opsSec":96196743.31627348},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47996557,"opsSec":95981619.04933941},{"name":"Using + - small number (2 len)","samples":47310835,"opsSec":94621624.5816202},{"name":"Using + - big number (10 len)","samples":48736207,"opsSec":97472375.40093935}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|867,609|433851|
|Using ? operator to avoid rejection|1,121,679|561799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:35:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":433851,"opsSec":867609.7609358759},{"name":"Using ? operator to avoid rejection","samples":561799,"opsSec":1121679.2241122152}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|98,873,327|49437149|
|Raw usage underscore usage|99,493,516|49746771|
|Manipulating private properties using #|99,321,324|49660670|
|Manipulating private properties using underscore(_)|99,622,324|49820869|
|Manipulating private properties using Symbol|99,624,689|49812352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:44:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":49437149,"opsSec":98873327.65716237},{"name":"Raw usage underscore usage","samples":49746771,"opsSec":99493516.72864676},{"name":"Manipulating private properties using #","samples":49660670,"opsSec":99321324.90315862},{"name":"Manipulating private properties using underscore(_)","samples":49820869,"opsSec":99622324.39839983},{"name":"Manipulating private properties using Symbol","samples":49812352,"opsSec":99624689.45479533}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,065,347|4032795|
|Adding property in the object creation - small object|7,825,452|3912728|
|Adding property after the function creation - small class|269,655|134846|
|Adding property in the function creation - small class|280,660|140331|
|Adding property after the class creation - small class|274,438|137840|
|Adding property in the class creation - small class|274,893|137448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:49:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":4032795,"opsSec":8065347.007225367},{"name":"Adding property in the object creation - small object","samples":3912728,"opsSec":7825452.11857575},{"name":"Adding property after the function creation - small class","samples":134846,"opsSec":269655.13490719657},{"name":"Adding property in the function creation - small class","samples":140331,"opsSec":280660.0814076835},{"name":"Adding property after the class creation - small class","samples":137840,"opsSec":274438.34924560424},{"name":"Adding property in the class creation - small class","samples":137448,"opsSec":274893.3203399133}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,985,154|48994021|
|Getter|47,274,427|23793327|
|Method|98,603,605|49301810|
|DefineProperty (getter)|97,851,295|49222911|
|DefineProperty (getter & enumerable=false)|51,711,784|25855901|
|DefineProperty (getter & configurable=false)|98,504,973|49264340|
|DefineProperty (getter & enumerable=false & configurable=false)|49,244,569|24623368|
|DefineProperty (writable)|93,124,821|46562416|
|DefineProperty (writable & enumerable=false)|93,359,713|46697924|
|DefineProperty (writable & enumerable=false & configurable=false)|99,001,499|49500757|
|DefineProperties (getter)|51,129,112|25648996|
|DefineProperties (getter & enumerable=false)|51,222,342|25611375|
|DefineProperties (getter & enumerable=false & configurable=false)|49,377,744|24694184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:54:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":48994021,"opsSec":97985154.57346503},{"name":"Getter","samples":23793327,"opsSec":47274427.58474631},{"name":"Method","samples":49301810,"opsSec":98603605.99828795},{"name":"DefineProperty (getter)","samples":49222911,"opsSec":97851295.92202143},{"name":"DefineProperty (getter & enumerable=false)","samples":25855901,"opsSec":51711784.4179933},{"name":"DefineProperty (getter & configurable=false)","samples":49264340,"opsSec":98504973.98996952},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":24623368,"opsSec":49244569.63289271},{"name":"DefineProperty (writable)","samples":46562416,"opsSec":93124821.01127112},{"name":"DefineProperty (writable & enumerable=false)","samples":46697924,"opsSec":93359713.68297729},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49500757,"opsSec":99001499.3477781},{"name":"DefineProperties (getter)","samples":25648996,"opsSec":51129112.8470409},{"name":"DefineProperties (getter & enumerable=false)","samples":25611375,"opsSec":51222342.67993101},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24694184,"opsSec":49377744.575765505}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|99,558,021|49779541|
|Setter|11,615,055|5807530|
|Method|99,229,395|49614706|
|DefineProperty (setter)|99,303,405|49651717|
|DefineProperty (setter & enumerable=false)|11,260,108|5630057|
|DefineProperty (setter & configurable=false)|11,383,470|5691738|
|DefineProperty (setter & enumerable=false & configurable=false)|11,441,566|5720851|
|DefineProperty (writable)|99,459,598|49729810|
|DefineProperty (writable & enumerable=false)|96,557,864|48284028|
|DefineProperty (writable & enumerable=false & configurable=false)|95,218,607|47613078|
|DefineProperties (setter)|101,313,087|50656550|
|DefineProperties (setter & enumerable=false)|11,721,831|5860919|
|DefineProperties (setter & enumerable=false & configurable=false)|11,812,795|5912218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:00:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":49779541,"opsSec":99558021.30884098},{"name":"Setter","samples":5807530,"opsSec":11615055.098446747},{"name":"Method","samples":49614706,"opsSec":99229395.7263791},{"name":"DefineProperty (setter)","samples":49651717,"opsSec":99303405.59922601},{"name":"DefineProperty (setter & enumerable=false)","samples":5630057,"opsSec":11260108.887910565},{"name":"DefineProperty (setter & configurable=false)","samples":5691738,"opsSec":11383470.649768794},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5720851,"opsSec":11441566.188609341},{"name":"DefineProperty (writable)","samples":49729810,"opsSec":99459598.11888841},{"name":"DefineProperty (writable & enumerable=false)","samples":48284028,"opsSec":96557864.51051664},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47613078,"opsSec":95218607.64009795},{"name":"DefineProperties (setter)","samples":50656550,"opsSec":101313087.23455101},{"name":"DefineProperties (setter & enumerable=false)","samples":5860919,"opsSec":11721831.763985502},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5912218,"opsSec":11812795.293508327}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,291,103|1645814|
|Using replaceAll()|3,147,122|1573980|
|Using replaceAll(//g)|3,041,591|1520832|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1645814,"opsSec":3291103.8851240864},{"name":"Using replaceAll()","samples":1573980,"opsSec":3147122.2234756215},{"name":"Using replaceAll(//g)","samples":1520832,"opsSec":3041591.95076987}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,977,425|12490477|
|{ ...object, __proto__: null }|2,536,841|1268424|
|{ ...object, newProp: true }|23,137,222|11569365|
|structuredClone|285,057|142529|
|JSON.parse + JSON.stringify|297,490|148782|
|loop + object.keys starting with {}|1,672,222|836297|
|loop + object.keys starting with { __proto__: null }|902,157|451080|
|loop + object.keys starting with { randomProp: true }|653,933|326968|
|object.keys + reduce(FN, {})|1,646,230|823148|
|object.keys + reduce(FN, { __proto__: null })|879,689|440052|
|object.keys + reduce(FN, { newProp: true })|620,753|310377|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:11:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12490477,"opsSec":24977425.788742784},{"name":"{ ...object, __proto__: null }","samples":1268424,"opsSec":2536841.0592028624},{"name":"{ ...object, newProp: true }","samples":11569365,"opsSec":23137222.47113267},{"name":"structuredClone","samples":142529,"opsSec":285057.8187032273},{"name":"JSON.parse + JSON.stringify","samples":148782,"opsSec":297490.5257899404},{"name":"loop + object.keys starting with {}","samples":836297,"opsSec":1672222.983886565},{"name":"loop + object.keys starting with { __proto__: null }","samples":451080,"opsSec":902157.7446056386},{"name":"loop + object.keys starting with { randomProp: true }","samples":326968,"opsSec":653933.7073084221},{"name":"object.keys + reduce(FN, {})","samples":823148,"opsSec":1646230.2495638325},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":440052,"opsSec":879689.6380304191},{"name":"object.keys + reduce(FN, { newProp: true })","samples":310377,"opsSec":620753.1532926989}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|299,524|149816|
|Sort using first char|1,304,237|652139|
|Sort using localeCompare|1,222,565|611434|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:14:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":149816,"opsSec":299524.1377637016},{"name":"Sort using first char","samples":652139,"opsSec":1304237.041739941},{"name":"Sort using localeCompare","samples":611434,"opsSec":1222565.102160549}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,661|831|
|{...smallObject} - Total keys: 2|38,579,238|19289701|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,016|509|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,715|3358|
|{ ...bigObject, ...anotherBigObject }|1,069|535|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,151,493|6079108|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,410,461|14207164|
|{ ...smallObject, ...anotherSmallObject }|20,423,529|10213361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:20:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":831,"opsSec":1661.3571710697981},{"name":"{...smallObject} - Total keys: 2","samples":19289701,"opsSec":38579238.50118723},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":509,"opsSec":1016.8622348791181},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3358,"opsSec":6715.676049218738},{"name":"{ ...bigObject, ...anotherBigObject }","samples":535,"opsSec":1069.5832219234123},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6079108,"opsSec":12151493.963660218},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14207164,"opsSec":28410461.336212143},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10213361,"opsSec":20423529.843132578}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,737|869|
|streams.web.Readable reading 1e3 * "some data"|1,570|786|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:22:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":869,"opsSec":1737.9972087764825},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":786,"opsSec":1570.0180374897977}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,876|4939|
|streams.web.WritableStream writing 1e3 * "some data"|1,660|837|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:27:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4939,"opsSec":9876.995924348323},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":837,"opsSec":1660.6243978289738}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|98,303,340|49151675|
|Using backtick (`)|98,412,926|49246304|
|Using array.join|10,098,521|5049909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:31:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":49151675,"opsSec":98303340.95609263},{"name":"Using backtick (`)","samples":49246304,"opsSec":98412926.20286718},{"name":"Using array.join","samples":5049909,"opsSec":10098521.834525496}]}-->

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
