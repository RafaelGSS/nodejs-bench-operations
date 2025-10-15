## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|85,107,840|42559686|
|Using dot notation|75,180,168|37656450|
|Using define property (writable)|3,841,248|1920773|
|Using define property initialized (writable)|5,572,328|2787454|
|Using define property (getter)|2,067,297|1034840|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":42559686,"opsSec":85107840.05788785},{"name":"Using dot notation","samples":37656450,"opsSec":75180168.2101423},{"name":"Using define property (writable)","samples":1920773,"opsSec":3841248.7180792107},{"name":"Using define property initialized (writable)","samples":2787454,"opsSec":5572328.179222865},{"name":"Using define property (getter)","samples":1034840,"opsSec":2067297.25798801}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.01ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.39ms
new Array(length)|10,000|0.142ms
array.push|1,000,000|27.155ms
new Array(length)|1,000,000|8.473ms
array.push|10,000,000|308.031ms
new Array(length)|10,000,000|52.517ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.018ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.256ms
new Array(length)|10,000|3.174ms
array.push|1,000,000|17.941ms
new Array(length)|1,000,000|12.262ms
array.push|10,000,000|229.995ms
new Array(length)|10,000,000|60.956ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|232|117|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:56:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":117,"opsSec":232.4418973333304},{"name":"Array.from","samples":11,"opsSec":21.216431239533946}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,782|1925|
|new Blob (1024)|496|249|
|text (128)|45,968|22985|
|text (1024)|27,603|13802|
|arrayBuffer (128)|49,122|24562|
|arrayBuffer (1024)|28,158|14080|
|slice (0, 64)|80,013|40634|
|slice (0, 512)|43,103|21557|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:26:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":1925,"opsSec":3782.131822945179},{"name":"new Blob (1024)","samples":249,"opsSec":496.676993545461},{"name":"text (128)","samples":22985,"opsSec":45968.60917376084},{"name":"text (1024)","samples":13802,"opsSec":27603.859441147724},{"name":"arrayBuffer (128)","samples":24562,"opsSec":49122.21254093006},{"name":"arrayBuffer (1024)","samples":14080,"opsSec":28158.3445146093},{"name":"slice (0, 64)","samples":40634,"opsSec":80013.41651357508},{"name":"slice (0, 512)","samples":21557,"opsSec":43103.6780484251}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|134.32 ms|1|
|Gzip|134.50 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:30:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.134321378},{"name":"Gzip","samples":1,"totalTime":0.134499512}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,768|3385|
|crypto.verify('RSA-SHA256')|6,762|3382|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:38:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3385,"opsSec":6768.286080452419},{"name":"crypto.verify('RSA-SHA256')","samples":3382,"opsSec":6762.964224977089}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,554,516|1277302|
|fromUnixToISOString(new Date())|2,047,738|1023939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:43:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":1277302,"opsSec":2554516.5537893306},{"name":"fromUnixToISOString(new Date())","samples":1023939,"opsSec":2047738.7210031524}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,858|8952|
|Intl.DateTimeFormat().format(new Date())|17,541|8771|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,024|9013|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,617|8810|
|Reusing Intl.DateTimeFormat()|372,190|225155|
|Date.toLocaleDateString()|697,749|348875|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,561|10281|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:48:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":8952,"opsSec":17858.200501829},{"name":"Intl.DateTimeFormat().format(new Date())","samples":8771,"opsSec":17541.910852009052},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9013,"opsSec":18024.701320269876},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8810,"opsSec":17617.877221973526},{"name":"Reusing Intl.DateTimeFormat()","samples":225155,"opsSec":372190.70343811525},{"name":"Date.toLocaleDateString()","samples":348875,"opsSec":697749.1110676326},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":10281,"opsSec":20561.634085159818}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,025,652|512908|
|Using brackets {}|1,027,677|513953|
|Using '' + |1,021,424|510713|
|Using date.toString()|1,140,412|570207|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:54:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":512908,"opsSec":1025652.0843864817},{"name":"Using brackets {}","samples":513953,"opsSec":1027677.8020886906},{"name":"Using '' + ","samples":510713,"opsSec":1021424.8703040935},{"name":"Using date.toString()","samples":570207,"opsSec":1140412.152532313}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,098,547|1549275|
|Using delete property (proto: null)|17,522,296|8761302|
|Using delete property (cached proto: null)|3,334,940|1667497|
|Using undefined assignment|85,434,737|42721551|
|Using undefined assignment (proto: null)|19,727,601|9865322|
|Using undefined property (cached proto: null)|84,966,579|42483301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:58:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1549275,"opsSec":3098547.1865191543},{"name":"Using delete property (proto: null)","samples":8761302,"opsSec":17522296.69396058},{"name":"Using delete property (cached proto: null)","samples":1667497,"opsSec":3334940.2941215034},{"name":"Using undefined assignment","samples":42721551,"opsSec":85434737.42659752},{"name":"Using undefined assignment (proto: null)","samples":9865322,"opsSec":19727601.964321896},{"name":"Using undefined property (cached proto: null)","samples":42483301,"opsSec":84966579.22895677}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|298,614|149308|
|NodeError|289,628|144834|
|NodeError Range|264,488|132245|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:03:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":149308,"opsSec":298614.37195444416},{"name":"NodeError","samples":144834,"opsSec":289628.9846587346},{"name":"NodeError Range","samples":132245,"opsSec":264488.448510761}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|70,653,275|35383416|
|using Array.includes (first item)|86,480,311|43240877|
|Using raw comparison|106,537,617|53268821|
|Using raw comparison (first item)|103,223,009|51611517|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:07:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35383416,"opsSec":70653275.37099926},{"name":"using Array.includes (first item)","samples":43240877,"opsSec":86480311.50840403},{"name":"Using raw comparison","samples":53268821,"opsSec":106537617.49634798},{"name":"Using raw comparison (first item)","samples":51611517,"opsSec":103223009.22647777}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,201,363|21118900|
|Using Object.getOwnPropertyNames()|43,542,775|21780319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:11:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21118900,"opsSec":42201363.17422992},{"name":"Using Object.getOwnPropertyNames()","samples":21780319,"opsSec":43542775.2731286}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|21,066,908|10592784|
|Length = 10_000 - Array.at|20,687,785|10343899|
|Length = 1_000_000 - Array.at|21,198,384|10599351|
|Length = 100 - Array[length - 1]|101,568,783|50787747|
|Length = 10_000 - Array[length - 1]|102,575,249|51287638|
|Length = 1_000_000 - Array[length - 1]|89,237,507|44618763|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:17:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10592784,"opsSec":21066908.26002108},{"name":"Length = 10_000 - Array.at","samples":10343899,"opsSec":20687785.297699828},{"name":"Length = 1_000_000 - Array.at","samples":10599351,"opsSec":21198384.321012564},{"name":"Length = 100 - Array[length - 1]","samples":50787747,"opsSec":101568783.55360818},{"name":"Length = 10_000 - Array[length - 1]","samples":51287638,"opsSec":102575249.12528473},{"name":"Length = 1_000_000 - Array[length - 1]","samples":44618763,"opsSec":89237507.0816485}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|104,803,610|52445102|
|~ (small)|104,347,489|52174006|
|Math.floor (long)|105,041,451|52520736|
|~ (long)|106,958,319|53479181|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:22:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":52445102,"opsSec":104803610.6455258},{"name":"~ (small)","samples":52174006,"opsSec":104347489.21907902},{"name":"Math.floor (long)","samples":52520736,"opsSec":105041451.20179267},{"name":"~ (long)","samples":53479181,"opsSec":106958319.00275576}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|29,945,770|15048567|
|Object.create({})|1,280,928|644727|
|new Function with empty prototype|77,281,432|38687301|
|Empty class|77,449,505|38748819|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:27:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":15048567,"opsSec":29945770.229580645},{"name":"Object.create({})","samples":644727,"opsSec":1280928.6512686166},{"name":"new Function with empty prototype","samples":38687301,"opsSec":77281432.74119014},{"name":"Empty class","samples":38748819,"opsSec":77449505.92025279}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,040,358|46024822|
|Using parseInt(x, 10) - big number (10 len)|17,232,166|8616557|
|Using + - small number (2 len)|107,196,083|53607965|
|Using + - big number (10 len)|107,193,253|53607777|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:31:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46024822,"opsSec":92040358.04827651},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8616557,"opsSec":17232166.299782176},{"name":"Using + - small number (2 len)","samples":53607965,"opsSec":107196083.71706063},{"name":"Using + - big number (10 len)","samples":53607777,"opsSec":107193253.30119672}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|710,022|361229|
|Using ? operator to avoid rejection|737,279|368640|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:36:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":361229,"opsSec":710022.1941566265},{"name":"Using ? operator to avoid rejection","samples":368640,"opsSec":737279.0990449409}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|84,879,843|42446338|
|Raw usage underscore usage|80,601,455|40308349|
|Manipulating private properties using #|81,373,508|40693537|
|Manipulating private properties using underscore(_)|80,805,262|40413179|
|Manipulating private properties using Symbol|81,395,448|40726596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:40:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":42446338,"opsSec":84879843.5257364},{"name":"Raw usage underscore usage","samples":40308349,"opsSec":80601455.9422755},{"name":"Manipulating private properties using #","samples":40693537,"opsSec":81373508.05972435},{"name":"Manipulating private properties using underscore(_)","samples":40413179,"opsSec":80805262.00863688},{"name":"Manipulating private properties using Symbol","samples":40726596,"opsSec":81395448.6036425}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,800,336|1900212|
|Adding property in the object creation - small object|3,693,640|1846821|
|Adding property after the function creation - small class|191,426|96584|
|Adding property in the function creation - small class|194,305|97153|
|Adding property after the class creation - small class|162,198|82441|
|Adding property in the class creation - small class|164,125|82063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:45:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1900212,"opsSec":3800336.911479336},{"name":"Adding property in the object creation - small object","samples":1846821,"opsSec":3693640.5742547386},{"name":"Adding property after the function creation - small class","samples":96584,"opsSec":191426.38323979327},{"name":"Adding property in the function creation - small class","samples":97153,"opsSec":194305.17498022702},{"name":"Adding property after the class creation - small class","samples":82441,"opsSec":162198.71135867437},{"name":"Adding property in the class creation - small class","samples":82063,"opsSec":164125.6553361238}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|104,360,100|52180062|
|Getter|56,898,007|28449119|
|Method|100,502,422|50256675|
|DefineProperty (getter)|104,908,669|52457002|
|DefineProperty (getter & enumerable=false)|57,247,702|28628625|
|DefineProperty (getter & configurable=false)|102,658,512|51333695|
|DefineProperty (getter & enumerable=false & configurable=false)|56,969,247|28485278|
|DefineProperty (writable)|105,233,946|52616984|
|DefineProperty (writable & enumerable=false)|105,095,780|52547903|
|DefineProperty (writable & enumerable=false & configurable=false)|103,621,271|51810649|
|DefineProperties (getter)|56,906,138|28453080|
|DefineProperties (getter & enumerable=false)|56,916,518|28458267|
|DefineProperties (getter & enumerable=false & configurable=false)|56,797,802|28398914|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:51:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":52180062,"opsSec":104360100.62333745},{"name":"Getter","samples":28449119,"opsSec":56898007.10788716},{"name":"Method","samples":50256675,"opsSec":100502422.17063254},{"name":"DefineProperty (getter)","samples":52457002,"opsSec":104908669.60396796},{"name":"DefineProperty (getter & enumerable=false)","samples":28628625,"opsSec":57247702.57165132},{"name":"DefineProperty (getter & configurable=false)","samples":51333695,"opsSec":102658512.50247285},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":28485278,"opsSec":56969247.75819448},{"name":"DefineProperty (writable)","samples":52616984,"opsSec":105233946.32180706},{"name":"DefineProperty (writable & enumerable=false)","samples":52547903,"opsSec":105095780.14643809},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":51810649,"opsSec":103621271.4729545},{"name":"DefineProperties (getter)","samples":28453080,"opsSec":56906138.94472859},{"name":"DefineProperties (getter & enumerable=false)","samples":28458267,"opsSec":56916518.29104096},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":28398914,"opsSec":56797802.440988906}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|104,581,243|52300455|
|Setter|10,916,624|5458314|
|Method|102,492,390|51246225|
|DefineProperty (setter)|105,055,674|52527849|
|DefineProperty (setter & enumerable=false)|10,295,053|5147531|
|DefineProperty (setter & configurable=false)|10,376,207|5188106|
|DefineProperty (setter & enumerable=false & configurable=false)|10,508,902|5254459|
|DefineProperty (writable)|100,376,803|50202654|
|DefineProperty (writable & enumerable=false)|101,039,768|50519997|
|DefineProperty (writable & enumerable=false & configurable=false)|98,627,763|49313896|
|DefineProperties (setter)|99,001,493|49518442|
|DefineProperties (setter & enumerable=false)|10,998,137|5499474|
|DefineProperties (setter & enumerable=false & configurable=false)|10,925,345|5462673|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:55:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":52300455,"opsSec":104581243.70628351},{"name":"Setter","samples":5458314,"opsSec":10916624.091848575},{"name":"Method","samples":51246225,"opsSec":102492390.75939813},{"name":"DefineProperty (setter)","samples":52527849,"opsSec":105055674.88775152},{"name":"DefineProperty (setter & enumerable=false)","samples":5147531,"opsSec":10295053.78454708},{"name":"DefineProperty (setter & configurable=false)","samples":5188106,"opsSec":10376207.455221133},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5254459,"opsSec":10508902.804126546},{"name":"DefineProperty (writable)","samples":50202654,"opsSec":100376803.59757517},{"name":"DefineProperty (writable & enumerable=false)","samples":50519997,"opsSec":101039768.27715766},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49313896,"opsSec":98627763.39794861},{"name":"DefineProperties (setter)","samples":49518442,"opsSec":99001493.342166},{"name":"DefineProperties (setter & enumerable=false)","samples":5499474,"opsSec":10998137.789185347},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5462673,"opsSec":10925345.65038894}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,283,779|1644988|
|Using replaceAll()|2,860,515|1430435|
|Using replaceAll(//g)|2,953,107|1476900|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:01:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1644988,"opsSec":3283779.1475328994},{"name":"Using replaceAll()","samples":1430435,"opsSec":2860515.4391113217},{"name":"Using replaceAll(//g)","samples":1476900,"opsSec":2953107.4372438174}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,547,786|9782390|
|{ ...object, __proto__: null }|20,395,486|10203555|
|{ ...object, newProp: true }|592,311|300990|
|structuredClone|253,231|126679|
|JSON.parse + JSON.stringify|190,039|95020|
|loop + object.keys starting with {}|1,257,484|628747|
|loop + object.keys starting with { __proto__: null }|691,502|345787|
|loop + object.keys starting with { randomProp: true }|502,891|251447|
|object.keys + reduce(FN, {})|1,270,660|635337|
|object.keys + reduce(FN, { __proto__: null })|718,876|359552|
|object.keys + reduce(FN, { newProp: true })|509,906|254954|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:10:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":9782390,"opsSec":19547786.60086542},{"name":"{ ...object, __proto__: null }","samples":10203555,"opsSec":20395486.57141198},{"name":"{ ...object, newProp: true }","samples":300990,"opsSec":592311.7684502458},{"name":"structuredClone","samples":126679,"opsSec":253231.4779566685},{"name":"JSON.parse + JSON.stringify","samples":95020,"opsSec":190039.36792906225},{"name":"loop + object.keys starting with {}","samples":628747,"opsSec":1257484.085995466},{"name":"loop + object.keys starting with { __proto__: null }","samples":345787,"opsSec":691502.8899918105},{"name":"loop + object.keys starting with { randomProp: true }","samples":251447,"opsSec":502891.35076836415},{"name":"object.keys + reduce(FN, {})","samples":635337,"opsSec":1270660.896944831},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":359552,"opsSec":718876.7357465145},{"name":"object.keys + reduce(FN, { newProp: true })","samples":254954,"opsSec":509906.0592975383}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|256,965|128483|
|Sort using first char|1,298,928|649511|
|Sort using localeCompare|1,174,715|587367|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:13:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":128483,"opsSec":256965.78774625933},{"name":"Sort using first char","samples":649511,"opsSec":1298928.0797062686},{"name":"Sort using localeCompare","samples":587367,"opsSec":1174715.653290927}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,749|875|
|{...smallObject} - Total keys: 2|40,093,931|20059094|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,039|520|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,153|3078|
|{ ...bigObject, ...anotherBigObject }|1,101|551|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,835,828|5417916|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,726,465|13881456|
|{ ...smallObject, ...anotherSmallObject }|19,221,888|9615340|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:17:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":875,"opsSec":1749.9400540535084},{"name":"{...smallObject} - Total keys: 2","samples":20059094,"opsSec":40093931.011362396},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":520,"opsSec":1039.2965749777509},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3078,"opsSec":6153.079834453686},{"name":"{ ...bigObject, ...anotherBigObject }","samples":551,"opsSec":1101.738260041562},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5417916,"opsSec":10835828.792594677},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13881456,"opsSec":27726465.00721871},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9615340,"opsSec":19221888.52328988}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,949|975|
|streams.web.Readable reading 1e3 * "some data"|575|289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:23:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":975,"opsSec":1949.8683136935665},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":289,"opsSec":575.4902375817455}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,762|2382|
|streams.web.WritableStream writing 1e3 * "some data"|1,517|759|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:29:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2382,"opsSec":4762.546261329007},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":759,"opsSec":1517.5537451106052}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|102,666,297|51340681|
|Using backtick (`)|99,869,358|49934690|
|Using array.join|10,317,177|5159600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:31:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":51340681,"opsSec":102666297.7741276},{"name":"Using backtick (`)","samples":49934690,"opsSec":99869358.2284799},{"name":"Using array.join","samples":5159600,"opsSec":10317177.069823211}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,592,429|26296222|
|(short string) (true) String#slice and strict comparison|51,537,677|25770743|
|(long string) (true) String#endsWith|48,486,798|24243688|
|(long string) (true) String#slice and strict comparison|46,169,584|23091616|
|(short string) (false) String#endsWith|57,392,598|28696358|
|(short string) (false) String#slice and strict comparison|60,291,812|30161762|
|(long string) (false) String#endsWith|51,497,536|25748969|
|(long string) (false) String#slice and strict comparison|52,697,174|26351146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:37:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26296222,"opsSec":52592429.2741198},{"name":"(short string) (true) String#slice and strict comparison","samples":25770743,"opsSec":51537677.77791363},{"name":"(long string) (true) String#endsWith","samples":24243688,"opsSec":48486798.61920204},{"name":"(long string) (true) String#slice and strict comparison","samples":23091616,"opsSec":46169584.82476082},{"name":"(short string) (false) String#endsWith","samples":28696358,"opsSec":57392598.45995835},{"name":"(short string) (false) String#slice and strict comparison","samples":30161762,"opsSec":60291812.79755737},{"name":"(long string) (false) String#endsWith","samples":25748969,"opsSec":51497536.731193796},{"name":"(long string) (false) String#slice and strict comparison","samples":26351146,"opsSec":52697174.57737679}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,999,314|7999911|
|Using indexof|16,080,215|8040771|
|Using RegExp.test|13,711,898|6859127|
|Using RegExp.text with cached regex pattern|14,444,709|7223806|
|Using new RegExp.test|4,212,814|2107439|
|Using new RegExp.test with cached regex pattern|4,959,174|2480491|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:41:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7999911,"opsSec":15999314.213765485},{"name":"Using indexof","samples":8040771,"opsSec":16080215.703808747},{"name":"Using RegExp.test","samples":6859127,"opsSec":13711898.562440107},{"name":"Using RegExp.text with cached regex pattern","samples":7223806,"opsSec":14444709.913331313},{"name":"Using new RegExp.test","samples":2107439,"opsSec":4212814.512897808},{"name":"Using new RegExp.test with cached regex pattern","samples":2480491,"opsSec":4959174.985737047}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|71,583,587|35791802|
|(short string) (true) String#slice and strict comparison|51,393,754|25696918|
|(long string) (true) String#startsWith|51,991,126|25995916|
|(long string) (true) String#slice and strict comparison|45,767,346|22883687|
|(short string) (false) String#startsWith|99,185,338|49594862|
|(short string) (false) String#slice and strict comparison|60,118,482|30085314|
|(long string) (false) String#startsWith|84,393,630|42197011|
|(long string) (false) String#slice and strict comparison|52,720,648|26360451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:46:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":35791802,"opsSec":71583587.96527629},{"name":"(short string) (true) String#slice and strict comparison","samples":25696918,"opsSec":51393754.078356},{"name":"(long string) (true) String#startsWith","samples":25995916,"opsSec":51991126.0644903},{"name":"(long string) (true) String#slice and strict comparison","samples":22883687,"opsSec":45767346.99726527},{"name":"(short string) (false) String#startsWith","samples":49594862,"opsSec":99185338.61943828},{"name":"(short string) (false) String#slice and strict comparison","samples":30085314,"opsSec":60118482.79110754},{"name":"(long string) (false) String#startsWith","samples":42197011,"opsSec":84393630.91991432},{"name":"(long string) (false) String#slice and strict comparison","samples":26360451,"opsSec":52720648.09735877}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|79,723,766|40245661|
|Using this|85,386,808|42703004|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:53:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":40245661,"opsSec":79723766.76628451},{"name":"Using this","samples":42703004,"opsSec":85386808.60531147}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,924,716|4962884|
|Date.now()|19,266,903|9642673|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:54:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4962884,"opsSec":9924716.059495423},{"name":"Date.now()","samples":9642673,"opsSec":19266903.719759446}]}-->
