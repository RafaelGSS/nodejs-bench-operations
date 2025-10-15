## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|108,979,273|54489890|
|Using dot notation|77,250,151|38680501|
|Using define property (writable)|4,935,747|2468633|
|Using define property initialized (writable)|6,827,453|3413732|
|Using define property (getter)|2,345,263|1203386|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:51:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":54489890,"opsSec":108979273.900252},{"name":"Using dot notation","samples":38680501,"opsSec":77250151.58598109},{"name":"Using define property (writable)","samples":2468633,"opsSec":4935747.576487064},{"name":"Using define property initialized (writable)","samples":3413732,"opsSec":6827453.704199814},{"name":"Using define property (getter)","samples":1203386,"opsSec":2345263.002984911}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.03ms
new Array(length)|100|0.009ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.505ms
new Array(length)|10,000|0.267ms
array.push|1,000,000|29.279ms
new Array(length)|1,000,000|9.2ms
array.push|10,000,000|242.123ms
new Array(length)|10,000,000|63.939ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.396ms
new Array(length)|10,000|0.118ms
array.push|1,000,000|17.764ms
new Array(length)|1,000,000|12.375ms
array.push|10,000,000|345.138ms
new Array(length)|10,000,000|51.874ms

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
