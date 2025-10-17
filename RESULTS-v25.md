## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|98,530,557|49332609|
|Using dot notation|70,388,128|35203573|
|Using define property (writable)|4,979,941|2490009|
|Using define property initialized (writable)|6,846,423|3423579|
|Using define property (getter)|2,375,763|1212123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:40:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":49332609,"opsSec":98530557.66626534},{"name":"Using dot notation","samples":35203573,"opsSec":70388128.5354323},{"name":"Using define property (writable)","samples":2490009,"opsSec":4979941.298944114},{"name":"Using define property initialized (writable)","samples":3423579,"opsSec":6846423.118635291},{"name":"Using define property (getter)","samples":1212123,"opsSec":2375763.304094575}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.014ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.143ms
array.push|1,000,000|25.825ms
new Array(length)|1,000,000|8.755ms
array.push|10,000,000|237.449ms
new Array(length)|10,000,000|63.829ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.443ms
new Array(length)|10,000|0.239ms
array.push|1,000,000|17.519ms
new Array(length)|1,000,000|11.758ms
array.push|10,000,000|348.302ms
new Array(length)|10,000,000|48.323ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|300|151|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:58:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":151,"opsSec":300.82931609815904},{"name":"Array.from","samples":12,"opsSec":23.09203023836702}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,650|2347|
|new Blob (1024)|636|322|
|text (128)|4,559|2280|
|text (1024)|568|285|
|arrayBuffer (128)|4,561|2281|
|arrayBuffer (1024)|571|287|
|slice (0, 64)|188,843|104424|
|slice (0, 512)|22,645|11939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:03:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2347,"opsSec":4650.3571791338345},{"name":"new Blob (1024)","samples":322,"opsSec":636.3515255628633},{"name":"text (128)","samples":2280,"opsSec":4559.063030484101},{"name":"text (1024)","samples":285,"opsSec":568.3826501176108},{"name":"arrayBuffer (128)","samples":2281,"opsSec":4561.765625605688},{"name":"arrayBuffer (1024)","samples":287,"opsSec":571.0947223596543},{"name":"slice (0, 64)","samples":104424,"opsSec":188843.6200782333},{"name":"slice (0, 512)","samples":11939,"opsSec":22645.417747327505}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.55 ms|1|
|Gzip|131.77 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:10:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132553987},{"name":"Gzip","samples":1,"totalTime":0.131768475}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|20,780|10391|
|crypto.verify('RSA-SHA256')|21,256|10629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:15:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":10391,"opsSec":20780.029637589763},{"name":"crypto.verify('RSA-SHA256')","samples":10629,"opsSec":21256.33788191566}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,465,668|732835|
|fromUnixToISOString(new Date())|2,602,386|1301320|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:18:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":732835,"opsSec":1465668.1034254741},{"name":"fromUnixToISOString(new Date())","samples":1301320,"opsSec":2602386.0331470254}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,554|10786|
|Intl.DateTimeFormat().format(new Date())|20,538|10270|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|20,739|10370|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,463|10232|
|Reusing Intl.DateTimeFormat()|430,428|253875|
|Date.toLocaleDateString()|945,729|472865|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,277|13139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:23:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10786,"opsSec":21554.166642927976},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10270,"opsSec":20538.35545280218},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10370,"opsSec":20739.604537220683},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":10232,"opsSec":20463.854133647736},{"name":"Reusing Intl.DateTimeFormat()","samples":253875,"opsSec":430428.1636070751},{"name":"Date.toLocaleDateString()","samples":472865,"opsSec":945729.5630729418},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13139,"opsSec":26277.005730657165}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,057,288|528645|
|Using brackets {}|1,050,465|525514|
|Using '' + |978,293|489379|
|Using date.toString()|1,219,797|609899|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":528645,"opsSec":1057288.6508996813},{"name":"Using brackets {}","samples":525514,"opsSec":1050465.7340140059},{"name":"Using '' + ","samples":489379,"opsSec":978293.9501779089},{"name":"Using date.toString()","samples":609899,"opsSec":1219797.2510444878}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,202,861|2101432|
|Using delete property (proto: null)|18,339,638|9169823|
|Using delete property (cached proto: null)|4,217,433|2108718|
|Using undefined assignment|75,957,281|37985310|
|Using undefined assignment (proto: null)|19,726,543|9865388|
|Using undefined property (cached proto: null)|78,102,435|39052011|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:32:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2101432,"opsSec":4202861.116837274},{"name":"Using delete property (proto: null)","samples":9169823,"opsSec":18339638.370710436},{"name":"Using delete property (cached proto: null)","samples":2108718,"opsSec":4217433.064666587},{"name":"Using undefined assignment","samples":37985310,"opsSec":75957281.90129814},{"name":"Using undefined assignment (proto: null)","samples":9865388,"opsSec":19726543.67005559},{"name":"Using undefined property (cached proto: null)","samples":39052011,"opsSec":78102435.89573182}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|319,768|159885|
|NodeError|311,813|155907|
|NodeError Range|300,109|150055|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:34:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":159885,"opsSec":319768.24191420595},{"name":"NodeError","samples":155907,"opsSec":311813.9301536796},{"name":"NodeError Range","samples":150055,"opsSec":300109.1777008531}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,960,181|34480097|
|using Array.includes (first item)|78,306,012|39374881|
|Using raw comparison|97,704,766|48852390|
|Using raw comparison (first item)|90,634,373|45317193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:40:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34480097,"opsSec":68960181.31132665},{"name":"using Array.includes (first item)","samples":39374881,"opsSec":78306012.16545199},{"name":"Using raw comparison","samples":48852390,"opsSec":97704766.90756124},{"name":"Using raw comparison (first item)","samples":45317193,"opsSec":90634373.67372519}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|45,624,367|22812226|
|Using Object.getOwnPropertyNames()|47,774,866|23887441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:44:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":22812226,"opsSec":45624367.68616852},{"name":"Using Object.getOwnPropertyNames()","samples":23887441,"opsSec":47774866.32984384}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|94,492,080|47246046|
|Length = 10_000 - Array.at|96,721,116|48399088|
|Length = 1_000_000 - Array.at|93,814,739|47034719|
|Length = 100 - Array[length - 1]|94,967,534|47486430|
|Length = 10_000 - Array[length - 1]|93,381,885|46701433|
|Length = 1_000_000 - Array[length - 1]|94,278,490|47157770|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:47:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":47246046,"opsSec":94492080.47196618},{"name":"Length = 10_000 - Array.at","samples":48399088,"opsSec":96721116.73875637},{"name":"Length = 1_000_000 - Array.at","samples":47034719,"opsSec":93814739.612907},{"name":"Length = 100 - Array[length - 1]","samples":47486430,"opsSec":94967534.03075649},{"name":"Length = 10_000 - Array[length - 1]","samples":46701433,"opsSec":93381885.89169672},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47157770,"opsSec":94278490.06186152}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,257,894|46649494|
|~ (small)|94,225,990|47115450|
|Math.floor (long)|93,098,156|46549082|
|~ (long)|93,121,463|46570325|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:51:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46649494,"opsSec":93257894.84121716},{"name":"~ (small)","samples":47115450,"opsSec":94225990.82587796},{"name":"Math.floor (long)","samples":46549082,"opsSec":93098156.55214748},{"name":"~ (long)","samples":46570325,"opsSec":93121463.99852946}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,953,295|17994572|
|Object.create({})|2,018,703|1069274|
|new Function with empty prototype|76,090,131|38046640|
|Empty class|78,494,844|39258103|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:55:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":17994572,"opsSec":35953295.616100505},{"name":"Object.create({})","samples":1069274,"opsSec":2018703.0618296585},{"name":"new Function with empty prototype","samples":38046640,"opsSec":76090131.08601514},{"name":"Empty class","samples":39258103,"opsSec":78494844.41304143}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|83,005,153|41502582|
|Using parseInt(x, 10) - big number (10 len)|82,915,312|41457673|
|Using + - small number (2 len)|80,435,698|40217853|
|Using + - big number (10 len)|83,581,051|41790545|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:00:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":41502582,"opsSec":83005153.04331979},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":41457673,"opsSec":82915312.83387487},{"name":"Using + - small number (2 len)","samples":40217853,"opsSec":80435698.27817297},{"name":"Using + - big number (10 len)","samples":41790545,"opsSec":83581051.21839224}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,180,350|600461|
|Using ? operator to avoid rejection|1,313,800|697478|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:03:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":600461,"opsSec":1180350.7317723008},{"name":"Using ? operator to avoid rejection","samples":697478,"opsSec":1313800.8948662083}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|98,328,983|49172903|
|Raw usage underscore usage|96,366,973|48184911|
|Manipulating private properties using #|97,681,097|48843018|
|Manipulating private properties using underscore(_)|96,466,844|48233704|
|Manipulating private properties using Symbol|97,062,032|48532344|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:09:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":49172903,"opsSec":98328983.09094092},{"name":"Raw usage underscore usage","samples":48184911,"opsSec":96366973.39226653},{"name":"Manipulating private properties using #","samples":48843018,"opsSec":97681097.82978031},{"name":"Manipulating private properties using underscore(_)","samples":48233704,"opsSec":96466844.63362734},{"name":"Manipulating private properties using Symbol","samples":48532344,"opsSec":97062032.57691275}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,334,696|3667424|
|Adding property in the object creation - small object|7,660,255|3831316|
|Adding property after the function creation - small class|299,502|149764|
|Adding property in the function creation - small class|290,541|150644|
|Adding property after the class creation - small class|308,172|154088|
|Adding property in the class creation - small class|301,924|154520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:11:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3667424,"opsSec":7334696.861236476},{"name":"Adding property in the object creation - small object","samples":3831316,"opsSec":7660255.221971258},{"name":"Adding property after the function creation - small class","samples":149764,"opsSec":299502.75251696835},{"name":"Adding property in the function creation - small class","samples":150644,"opsSec":290541.74469183636},{"name":"Adding property after the class creation - small class","samples":154088,"opsSec":308172.99099891586},{"name":"Adding property in the class creation - small class","samples":154520,"opsSec":301924.9997041713}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,640,340|47820202|
|Getter|46,683,211|23345091|
|Method|98,550,652|49275355|
|DefineProperty (getter)|95,981,656|47991267|
|DefineProperty (getter & enumerable=false)|46,068,098|23086605|
|DefineProperty (getter & configurable=false)|90,600,916|45310252|
|DefineProperty (getter & enumerable=false & configurable=false)|46,551,238|23278049|
|DefineProperty (writable)|94,137,958|47075972|
|DefineProperty (writable & enumerable=false)|95,112,657|47562758|
|DefineProperty (writable & enumerable=false & configurable=false)|92,553,932|46277028|
|DefineProperties (getter)|47,068,602|23534311|
|DefineProperties (getter & enumerable=false)|47,328,591|23664296|
|DefineProperties (getter & enumerable=false & configurable=false)|43,164,006|21582480|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:16:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47820202,"opsSec":95640340.1122528},{"name":"Getter","samples":23345091,"opsSec":46683211.63630416},{"name":"Method","samples":49275355,"opsSec":98550652.64352016},{"name":"DefineProperty (getter)","samples":47991267,"opsSec":95981656.15177284},{"name":"DefineProperty (getter & enumerable=false)","samples":23086605,"opsSec":46068098.99832906},{"name":"DefineProperty (getter & configurable=false)","samples":45310252,"opsSec":90600916.62543108},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":23278049,"opsSec":46551238.60930405},{"name":"DefineProperty (writable)","samples":47075972,"opsSec":94137958.30008718},{"name":"DefineProperty (writable & enumerable=false)","samples":47562758,"opsSec":95112657.33940364},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46277028,"opsSec":92553932.90326925},{"name":"DefineProperties (getter)","samples":23534311,"opsSec":47068602.1370499},{"name":"DefineProperties (getter & enumerable=false)","samples":23664296,"opsSec":47328591.81068563},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":21582480,"opsSec":43164006.248117946}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|97,037,850|48544240|
|Setter|11,327,901|5665099|
|Method|94,492,540|47264004|
|DefineProperty (setter)|96,854,304|48628092|
|DefineProperty (setter & enumerable=false)|11,163,469|5583686|
|DefineProperty (setter & configurable=false)|11,018,009|5509006|
|DefineProperty (setter & enumerable=false & configurable=false)|11,001,892|5502176|
|DefineProperty (writable)|94,895,020|47452415|
|DefineProperty (writable & enumerable=false)|97,194,488|48621212|
|DefineProperty (writable & enumerable=false & configurable=false)|97,614,956|48807502|
|DefineProperties (setter)|94,717,495|47358767|
|DefineProperties (setter & enumerable=false)|11,345,947|5673800|
|DefineProperties (setter & enumerable=false & configurable=false)|11,054,505|5527255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:23:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":48544240,"opsSec":97037850.50150083},{"name":"Setter","samples":5665099,"opsSec":11327901.653088493},{"name":"Method","samples":47264004,"opsSec":94492540.41394071},{"name":"DefineProperty (setter)","samples":48628092,"opsSec":96854304.49726342},{"name":"DefineProperty (setter & enumerable=false)","samples":5583686,"opsSec":11163469.005639309},{"name":"DefineProperty (setter & configurable=false)","samples":5509006,"opsSec":11018009.928614134},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5502176,"opsSec":11001892.614921074},{"name":"DefineProperty (writable)","samples":47452415,"opsSec":94895020.70171008},{"name":"DefineProperty (writable & enumerable=false)","samples":48621212,"opsSec":97194488.65014264},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48807502,"opsSec":97614956.55913112},{"name":"DefineProperties (setter)","samples":47358767,"opsSec":94717495.73413174},{"name":"DefineProperties (setter & enumerable=false)","samples":5673800,"opsSec":11345947.916523876},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5527255,"opsSec":11054505.268671744}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,230,246|2115619|
|Using replaceAll()|2,966,019|1483496|
|Using replaceAll(//g)|3,713,037|1857235|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:28:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2115619,"opsSec":4230246.793952721},{"name":"Using replaceAll()","samples":1483496,"opsSec":2966019.78617041},{"name":"Using replaceAll(//g)","samples":1857235,"opsSec":3713037.792210637}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,456,929|11728467|
|{ ...object, __proto__: null }|2,430,067|1215039|
|{ ...object, newProp: true }|22,038,463|11023638|
|structuredClone|312,032|156031|
|JSON.parse + JSON.stringify|341,842|170955|
|loop + object.keys starting with {}|1,751,075|875652|
|loop + object.keys starting with { __proto__: null }|957,197|478678|
|loop + object.keys starting with { randomProp: true }|692,987|346494|
|object.keys + reduce(FN, {})|1,822,955|911707|
|object.keys + reduce(FN, { __proto__: null })|1,007,897|504023|
|object.keys + reduce(FN, { newProp: true })|731,584|365800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:32:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":11728467,"opsSec":23456929.074044894},{"name":"{ ...object, __proto__: null }","samples":1215039,"opsSec":2430067.1327397823},{"name":"{ ...object, newProp: true }","samples":11023638,"opsSec":22038463.52366772},{"name":"structuredClone","samples":156031,"opsSec":312032.23524507997},{"name":"JSON.parse + JSON.stringify","samples":170955,"opsSec":341842.63512295217},{"name":"loop + object.keys starting with {}","samples":875652,"opsSec":1751075.9993984224},{"name":"loop + object.keys starting with { __proto__: null }","samples":478678,"opsSec":957197.1378198246},{"name":"loop + object.keys starting with { randomProp: true }","samples":346494,"opsSec":692987.2446439033},{"name":"object.keys + reduce(FN, {})","samples":911707,"opsSec":1822955.2642454843},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":504023,"opsSec":1007897.9377771446},{"name":"object.keys + reduce(FN, { newProp: true })","samples":365800,"opsSec":731584.2211915173}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|494,405|247203|
|Sort using first char|1,449,580|724855|
|Sort using localeCompare|1,340,761|670546|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:36:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":247203,"opsSec":494405.8862866462},{"name":"Sort using first char","samples":724855,"opsSec":1449580.050946753},{"name":"Sort using localeCompare","samples":670546,"opsSec":1340761.585396418}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,163|1582|
|{...smallObject} - Total keys: 2|40,667,620|20333904|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,077|539|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,534|3268|
|{ ...bigObject, ...anotherBigObject }|1,509|755|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,987,650|5995058|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,642,540|13322816|
|{ ...smallObject, ...anotherSmallObject }|20,982,005|10491122|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:42:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1582,"opsSec":3163.286647228184},{"name":"{...smallObject} - Total keys: 2","samples":20333904,"opsSec":40667620.19692993},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":539,"opsSec":1077.2386400463743},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3268,"opsSec":6534.376050726369},{"name":"{ ...bigObject, ...anotherBigObject }","samples":755,"opsSec":1509.1073509290666},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5995058,"opsSec":11987650.284188345},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13322816,"opsSec":26642540.825843222},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10491122,"opsSec":20982005.644415878}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,074|1038|
|streams.web.Readable reading 1e3 * "some data"|1,907|955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:45:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1038,"opsSec":2074.5496367088845},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":955,"opsSec":1907.2371495638217}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|10,445|5224|
|streams.web.WritableStream writing 1e3 * "some data"|1,781|892|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:50:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":5224,"opsSec":10445.926337379062},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":892,"opsSec":1781.373699378522}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,812,754|47406394|
|Using backtick (`)|94,808,575|47404382|
|Using array.join|9,822,160|4912682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:54:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47406394,"opsSec":94812754.05703405},{"name":"Using backtick (`)","samples":47404382,"opsSec":94808575.1413183},{"name":"Using array.join","samples":4912682,"opsSec":9822160.345248831}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,214,749|42111048|
|(short string) (true) String#slice and strict comparison|50,479,007|25239522|
|(long string) (true) String#endsWith|66,187,118|33291190|
|(long string) (true) String#slice and strict comparison|51,673,503|25836762|
|(short string) (false) String#endsWith|92,010,404|46005465|
|(short string) (false) String#slice and strict comparison|54,074,476|27045363|
|(long string) (false) String#endsWith|84,315,139|42157575|
|(long string) (false) String#slice and strict comparison|50,408,812|25204411|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:59:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42111048,"opsSec":84214749.27370284},{"name":"(short string) (true) String#slice and strict comparison","samples":25239522,"opsSec":50479007.957988314},{"name":"(long string) (true) String#endsWith","samples":33291190,"opsSec":66187118.07618051},{"name":"(long string) (true) String#slice and strict comparison","samples":25836762,"opsSec":51673503.43394563},{"name":"(short string) (false) String#endsWith","samples":46005465,"opsSec":92010404.2525501},{"name":"(short string) (false) String#slice and strict comparison","samples":27045363,"opsSec":54074476.94412515},{"name":"(long string) (false) String#endsWith","samples":42157575,"opsSec":84315139.88218322},{"name":"(long string) (false) String#slice and strict comparison","samples":25204411,"opsSec":50408812.623960845}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,229,067|8114537|
|Using indexof|16,299,638|8149850|
|Using RegExp.test|12,752,789|6377793|
|Using RegExp.text with cached regex pattern|13,984,258|6992134|
|Using new RegExp.test|4,950,517|2475741|
|Using new RegExp.test with cached regex pattern|5,506,047|2753025|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:03:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8114537,"opsSec":16229067.34608239},{"name":"Using indexof","samples":8149850,"opsSec":16299638.941552525},{"name":"Using RegExp.test","samples":6377793,"opsSec":12752789.950803285},{"name":"Using RegExp.text with cached regex pattern","samples":6992134,"opsSec":13984258.770389212},{"name":"Using new RegExp.test","samples":2475741,"opsSec":4950517.243199646},{"name":"Using new RegExp.test with cached regex pattern","samples":2753025,"opsSec":5506047.830617155}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|83,558,457|41780749|
|(short string) (true) String#slice and strict comparison|53,728,196|26864804|
|(long string) (true) String#startsWith|66,573,515|33289299|
|(long string) (true) String#slice and strict comparison|51,521,975|25765101|
|(short string) (false) String#startsWith|83,478,212|41739126|
|(short string) (false) String#slice and strict comparison|55,399,580|27700752|
|(long string) (false) String#startsWith|88,083,460|44041736|
|(long string) (false) String#slice and strict comparison|50,568,521|25284261|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:06:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41780749,"opsSec":83558457.97618191},{"name":"(short string) (true) String#slice and strict comparison","samples":26864804,"opsSec":53728196.34536922},{"name":"(long string) (true) String#startsWith","samples":33289299,"opsSec":66573515.378394924},{"name":"(long string) (true) String#slice and strict comparison","samples":25765101,"opsSec":51521975.07406413},{"name":"(short string) (false) String#startsWith","samples":41739126,"opsSec":83478212.26437095},{"name":"(short string) (false) String#slice and strict comparison","samples":27700752,"opsSec":55399580.63735943},{"name":"(long string) (false) String#startsWith","samples":44041736,"opsSec":88083460.19681634},{"name":"(long string) (false) String#slice and strict comparison","samples":25284261,"opsSec":50568521.19090366}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|90,315,758|45157923|
|Using this|99,235,017|49670467|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:10:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":45157923,"opsSec":90315758.21308301},{"name":"Using this","samples":49670467,"opsSec":99235017.88530055}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,181,463|4591248|
|Date.now()|19,690,079|9845128|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:14:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4591248,"opsSec":9181463.103763754},{"name":"Date.now()","samples":9845128,"opsSec":19690079.14370913}]}-->
