## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|106,473,286|53263195|
|Using dot notation|75,310,054|37655048|
|Using define property (writable)|5,000,960|2500675|
|Using define property initialized (writable)|7,177,476|3588880|
|Using define property (getter)|2,385,261|1192633|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:47:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53263195,"opsSec":106473286.02270302},{"name":"Using dot notation","samples":37655048,"opsSec":75310054.27822992},{"name":"Using define property (writable)","samples":2500675,"opsSec":5000960.715216006},{"name":"Using define property initialized (writable)","samples":3588880,"opsSec":7177476.216945334},{"name":"Using define property (getter)","samples":1192633,"opsSec":2385261.534790407}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.008ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.334ms
new Array(length)|10,000|0.135ms
array.push|1,000,000|28.491ms
new Array(length)|1,000,000|7.781ms
array.push|10,000,000|249.473ms
new Array(length)|10,000,000|65.942ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.359ms
new Array(length)|10,000|0.125ms
array.push|1,000,000|17.751ms
new Array(length)|1,000,000|11.735ms
array.push|10,000,000|330.179ms
new Array(length)|10,000,000|50.133ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|302|152|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:58:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":152,"opsSec":302.48798055551543},{"name":"Array.from","samples":12,"opsSec":23.29799343546418}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,803|2405|
|new Blob (1024)|601|301|
|text (128)|4,428|2220|
|text (1024)|552|279|
|arrayBuffer (128)|4,469|2235|
|arrayBuffer (1024)|553|278|
|slice (0, 64)|167,244|83624|
|slice (0, 512)|20,254|10129|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:00:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2405,"opsSec":4803.21600495962},{"name":"new Blob (1024)","samples":301,"opsSec":601.6562785812966},{"name":"text (128)","samples":2220,"opsSec":4428.153670456186},{"name":"text (1024)","samples":279,"opsSec":552.6890374943589},{"name":"arrayBuffer (128)","samples":2235,"opsSec":4469.005056466269},{"name":"arrayBuffer (1024)","samples":278,"opsSec":553.8255821833944},{"name":"slice (0, 64)","samples":83624,"opsSec":167244.80328283005},{"name":"slice (0, 512)","samples":10129,"opsSec":20254.98767823249}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|133.43 ms|1|
|Gzip|135.05 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:08:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.133426092},{"name":"Gzip","samples":1,"totalTime":0.135053019}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,872|3437|
|crypto.verify('RSA-SHA256')|6,868|3435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:14:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3437,"opsSec":6872.007942337676},{"name":"crypto.verify('RSA-SHA256')","samples":3435,"opsSec":6868.372758862716}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,568,551|784619|
|fromUnixToISOString(new Date())|3,069,213|1534710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:17:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":784619,"opsSec":1568551.2882460058},{"name":"fromUnixToISOString(new Date())","samples":1534710,"opsSec":3069213.0736545743}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,633|10817|
|Intl.DateTimeFormat().format(new Date())|21,112|10571|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,001|10501|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,939|9973|
|Reusing Intl.DateTimeFormat()|462,350|231177|
|Date.toLocaleDateString()|1,043,689|521848|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|26,469|13235|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:23:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":10817,"opsSec":21633.667274197323},{"name":"Intl.DateTimeFormat().format(new Date())","samples":10571,"opsSec":21112.316167917175},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":10501,"opsSec":21001.719543037223},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9973,"opsSec":19939.23222579792},{"name":"Reusing Intl.DateTimeFormat()","samples":231177,"opsSec":462350.9614294815},{"name":"Date.toLocaleDateString()","samples":521848,"opsSec":1043689.9006762205},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":13235,"opsSec":26469.036738815004}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,134,695|567349|
|Using brackets {}|1,143,478|571753|
|Using '' + |1,142,003|571003|
|Using date.toString()|1,275,213|637607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:27:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":567349,"opsSec":1134695.8667717706},{"name":"Using brackets {}","samples":571753,"opsSec":1143478.9750179045},{"name":"Using '' + ","samples":571003,"opsSec":1142003.3711082397},{"name":"Using date.toString()","samples":637607,"opsSec":1275213.4771624745}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,147,411|2074119|
|Using delete property (proto: null)|17,956,874|8980513|
|Using delete property (cached proto: null)|4,235,012|2117689|
|Using undefined assignment|77,931,319|38966017|
|Using undefined assignment (proto: null)|19,442,158|9721148|
|Using undefined property (cached proto: null)|77,388,739|38694385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:32:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2074119,"opsSec":4147411.7609238126},{"name":"Using delete property (proto: null)","samples":8980513,"opsSec":17956874.442456402},{"name":"Using delete property (cached proto: null)","samples":2117689,"opsSec":4235012.221994386},{"name":"Using undefined assignment","samples":38966017,"opsSec":77931319.83738501},{"name":"Using undefined assignment (proto: null)","samples":9721148,"opsSec":19442158.271750804},{"name":"Using undefined property (cached proto: null)","samples":38694385,"opsSec":77388739.35405922}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|345,612|172809|
|NodeError|318,877|159439|
|NodeError Range|307,712|153857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:35:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":172809,"opsSec":345612.01399991754},{"name":"NodeError","samples":159439,"opsSec":318877.67283150763},{"name":"NodeError Range","samples":153857,"opsSec":307712.1857289529}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|68,405,641|34206639|
|using Array.includes (first item)|73,725,014|36862788|
|Using raw comparison|98,568,065|49318384|
|Using raw comparison (first item)|99,010,378|49505214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:40:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":34206639,"opsSec":68405641.60460511},{"name":"using Array.includes (first item)","samples":36862788,"opsSec":73725014.8051873},{"name":"Using raw comparison","samples":49318384,"opsSec":98568065.86095878},{"name":"Using raw comparison (first item)","samples":49505214,"opsSec":99010378.69283143}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|47,573,377|23786699|
|Using Object.getOwnPropertyNames()|47,239,964|23621904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:43:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":23786699,"opsSec":47573377.73374109},{"name":"Using Object.getOwnPropertyNames()","samples":23621904,"opsSec":47239964.83990042}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|93,738,664|46873018|
|Length = 10_000 - Array.at|95,164,630|47582869|
|Length = 1_000_000 - Array.at|95,225,289|47635977|
|Length = 100 - Array[length - 1]|91,994,894|45997616|
|Length = 10_000 - Array[length - 1]|91,670,531|45837466|
|Length = 1_000_000 - Array[length - 1]|90,256,348|45138039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:47:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":46873018,"opsSec":93738664.57889485},{"name":"Length = 10_000 - Array.at","samples":47582869,"opsSec":95164630.85468464},{"name":"Length = 1_000_000 - Array.at","samples":47635977,"opsSec":95225289.03755772},{"name":"Length = 100 - Array[length - 1]","samples":45997616,"opsSec":91994894.93070497},{"name":"Length = 10_000 - Array[length - 1]","samples":45837466,"opsSec":91670531.99780516},{"name":"Length = 1_000_000 - Array[length - 1]","samples":45138039,"opsSec":90256348.32328191}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,208,544|46606157|
|~ (small)|91,475,866|45738734|
|Math.floor (long)|96,753,600|48381078|
|~ (long)|97,656,426|48828358|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:51:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46606157,"opsSec":93208544.83286405},{"name":"~ (small)","samples":45738734,"opsSec":91475866.07463329},{"name":"Math.floor (long)","samples":48381078,"opsSec":96753600.46612518},{"name":"~ (long)","samples":48828358,"opsSec":97656426.93697627}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|37,319,081|18704719|
|Object.create({})|2,047,712|1026484|
|new Function with empty prototype|72,697,983|36377773|
|Empty class|79,034,974|39523854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:56:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":18704719,"opsSec":37319081.78556243},{"name":"Object.create({})","samples":1026484,"opsSec":2047712.4722223922},{"name":"new Function with empty prototype","samples":36377773,"opsSec":72697983.30063465},{"name":"Empty class","samples":39523854,"opsSec":79034974.35914111}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,219,377|47610651|
|Using parseInt(x, 10) - big number (10 len)|94,191,061|47096507|
|Using + - small number (2 len)|94,667,082|47339484|
|Using + - big number (10 len)|95,563,166|47781585|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:59:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47610651,"opsSec":95219377.80681328},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47096507,"opsSec":94191061.98443143},{"name":"Using + - small number (2 len)","samples":47339484,"opsSec":94667082.35847571},{"name":"Using + - big number (10 len)","samples":47781585,"opsSec":95563166.17747335}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,077,175|538588|
|Using ? operator to avoid rejection|1,147,356|573696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:03:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":538588,"opsSec":1077175.9159802785},{"name":"Using ? operator to avoid rejection","samples":573696,"opsSec":1147356.4893166558}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|97,289,770|48644920|
|Raw usage underscore usage|94,772,379|48093909|
|Manipulating private properties using #|98,465,997|49241946|
|Manipulating private properties using underscore(_)|96,515,129|48261257|
|Manipulating private properties using Symbol|95,286,990|47647718|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:07:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":48644920,"opsSec":97289770.34052444},{"name":"Raw usage underscore usage","samples":48093909,"opsSec":94772379.06104547},{"name":"Manipulating private properties using #","samples":49241946,"opsSec":98465997.38043205},{"name":"Manipulating private properties using underscore(_)","samples":48261257,"opsSec":96515129.43441673},{"name":"Manipulating private properties using Symbol","samples":47647718,"opsSec":95286990.71401301}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,631,323|3815747|
|Adding property in the object creation - small object|7,625,880|3812945|
|Adding property after the function creation - small class|283,730|144016|
|Adding property in the function creation - small class|294,829|147682|
|Adding property after the class creation - small class|287,663|143833|
|Adding property in the class creation - small class|273,180|142173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:12:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3815747,"opsSec":7631323.684118018},{"name":"Adding property in the object creation - small object","samples":3812945,"opsSec":7625880.1626145905},{"name":"Adding property after the function creation - small class","samples":144016,"opsSec":283730.4796622591},{"name":"Adding property in the function creation - small class","samples":147682,"opsSec":294829.059795275},{"name":"Adding property after the class creation - small class","samples":143833,"opsSec":287663.9610378441},{"name":"Adding property in the class creation - small class","samples":142173,"opsSec":273180.1508873738}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|95,360,238|47737898|
|Getter|53,571,230|26785624|
|Method|93,892,819|47077719|
|DefineProperty (getter)|94,670,273|47335146|
|DefineProperty (getter & enumerable=false)|53,519,729|26759881|
|DefineProperty (getter & configurable=false)|95,395,990|47698879|
|DefineProperty (getter & enumerable=false & configurable=false)|53,765,928|26895507|
|DefineProperty (writable)|95,063,917|47531984|
|DefineProperty (writable & enumerable=false)|95,903,472|47951744|
|DefineProperty (writable & enumerable=false & configurable=false)|95,902,276|47951150|
|DefineProperties (getter)|52,737,612|26463464|
|DefineProperties (getter & enumerable=false)|53,683,614|26844360|
|DefineProperties (getter & enumerable=false & configurable=false)|53,412,869|26706443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:15:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":47737898,"opsSec":95360238.84400979},{"name":"Getter","samples":26785624,"opsSec":53571230.96434855},{"name":"Method","samples":47077719,"opsSec":93892819.59580489},{"name":"DefineProperty (getter)","samples":47335146,"opsSec":94670273.2552859},{"name":"DefineProperty (getter & enumerable=false)","samples":26759881,"opsSec":53519729.2459257},{"name":"DefineProperty (getter & configurable=false)","samples":47698879,"opsSec":95395990.50308795},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":26895507,"opsSec":53765928.43077206},{"name":"DefineProperty (writable)","samples":47531984,"opsSec":95063917.2358682},{"name":"DefineProperty (writable & enumerable=false)","samples":47951744,"opsSec":95903472.08002363},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47951150,"opsSec":95902276.21623549},{"name":"DefineProperties (getter)","samples":26463464,"opsSec":52737612.52259566},{"name":"DefineProperties (getter & enumerable=false)","samples":26844360,"opsSec":53683614.25881507},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":26706443,"opsSec":53412869.01470765}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|95,839,190|47926720|
|Setter|10,772,700|5386355|
|Method|95,426,184|47716702|
|DefineProperty (setter)|96,357,135|48178585|
|DefineProperty (setter & enumerable=false)|10,946,336|5473408|
|DefineProperty (setter & configurable=false)|10,864,090|5432258|
|DefineProperty (setter & enumerable=false & configurable=false)|10,832,144|5416075|
|DefineProperty (writable)|97,170,852|48596971|
|DefineProperty (writable & enumerable=false)|85,808,153|42904083|
|DefineProperty (writable & enumerable=false & configurable=false)|94,716,082|47358062|
|DefineProperties (setter)|96,916,378|48462053|
|DefineProperties (setter & enumerable=false)|10,854,495|5427251|
|DefineProperties (setter & enumerable=false & configurable=false)|10,434,246|5217126|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:22:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":47926720,"opsSec":95839190.43748736},{"name":"Setter","samples":5386355,"opsSec":10772700.606205072},{"name":"Method","samples":47716702,"opsSec":95426184.6274282},{"name":"DefineProperty (setter)","samples":48178585,"opsSec":96357135.8895739},{"name":"DefineProperty (setter & enumerable=false)","samples":5473408,"opsSec":10946336.265866812},{"name":"DefineProperty (setter & configurable=false)","samples":5432258,"opsSec":10864090.127666995},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5416075,"opsSec":10832144.345620653},{"name":"DefineProperty (writable)","samples":48596971,"opsSec":97170852.84497209},{"name":"DefineProperty (writable & enumerable=false)","samples":42904083,"opsSec":85808153.98685844},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47358062,"opsSec":94716082.1354917},{"name":"DefineProperties (setter)","samples":48462053,"opsSec":96916378.08184451},{"name":"DefineProperties (setter & enumerable=false)","samples":5427251,"opsSec":10854495.74781045},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5217126,"opsSec":10434246.344638482}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,087,211|2044101|
|Using replaceAll()|3,160,975|1580597|
|Using replaceAll(//g)|3,288,271|1644136|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:25:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2044101,"opsSec":4087211.9791655587},{"name":"Using replaceAll()","samples":1580597,"opsSec":3160975.563944629},{"name":"Using replaceAll(//g)","samples":1644136,"opsSec":3288271.1582025834}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,822,881|12413503|
|{ ...object, __proto__: null }|2,281,178|1140798|
|{ ...object, newProp: true }|23,145,832|11574879|
|structuredClone|300,459|150230|
|JSON.parse + JSON.stringify|318,237|159144|
|loop + object.keys starting with {}|1,691,263|845643|
|loop + object.keys starting with { __proto__: null }|915,955|458042|
|loop + object.keys starting with { randomProp: true }|695,194|347653|
|object.keys + reduce(FN, {})|1,767,324|883663|
|object.keys + reduce(FN, { __proto__: null })|953,857|477002|
|object.keys + reduce(FN, { newProp: true })|711,019|355519|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:29:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12413503,"opsSec":24822881.032921474},{"name":"{ ...object, __proto__: null }","samples":1140798,"opsSec":2281178.028874481},{"name":"{ ...object, newProp: true }","samples":11574879,"opsSec":23145832.513097443},{"name":"structuredClone","samples":150230,"opsSec":300459.7806643601},{"name":"JSON.parse + JSON.stringify","samples":159144,"opsSec":318237.8438063891},{"name":"loop + object.keys starting with {}","samples":845643,"opsSec":1691263.123974985},{"name":"loop + object.keys starting with { __proto__: null }","samples":458042,"opsSec":915955.515256053},{"name":"loop + object.keys starting with { randomProp: true }","samples":347653,"opsSec":695194.9050733896},{"name":"object.keys + reduce(FN, {})","samples":883663,"opsSec":1767324.8724467314},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":477002,"opsSec":953857.1594134512},{"name":"object.keys + reduce(FN, { newProp: true })","samples":355519,"opsSec":711019.6855549394}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|320,924|160466|
|Sort using first char|1,335,058|667531|
|Sort using localeCompare|1,249,764|626823|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:38:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":160466,"opsSec":320924.7772669628},{"name":"Sort using first char","samples":667531,"opsSec":1335058.862611673},{"name":"Sort using localeCompare","samples":626823,"opsSec":1249764.9549137119}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,061|1531|
|{...smallObject} - Total keys: 2|40,198,509|20100706|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,137|569|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,558|3280|
|{ ...bigObject, ...anotherBigObject }|1,541|771|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,065,788|6034304|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,666,511|13833260|
|{ ...smallObject, ...anotherSmallObject }|20,298,085|10149360|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:40:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1531,"opsSec":3061.929924671744},{"name":"{...smallObject} - Total keys: 2","samples":20100706,"opsSec":40198509.667602},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":569,"opsSec":1137.501062458978},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3280,"opsSec":6558.342195376537},{"name":"{ ...bigObject, ...anotherBigObject }","samples":771,"opsSec":1541.7559153705022},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6034304,"opsSec":12065788.514803017},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13833260,"opsSec":27666511.036050428},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10149360,"opsSec":20298085.92839177}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,916|959|
|streams.web.Readable reading 1e3 * "some data"|1,726|864|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:45:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":959,"opsSec":1916.0482251396545},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":864,"opsSec":1726.6213136005456}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,871|4936|
|streams.web.WritableStream writing 1e3 * "some data"|1,692|879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:49:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":4936,"opsSec":9871.913995885267},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":879,"opsSec":1692.077447759236}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|81,886,710|40943359|
|Using backtick (`)|82,499,942|41249972|
|Using array.join|10,401,416|5201695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:52:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":40943359,"opsSec":81886710.63019605},{"name":"Using backtick (`)","samples":41249972,"opsSec":82499942.18500127},{"name":"Using array.join","samples":5201695,"opsSec":10401416.560038896}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|88,134,253|44074492|
|(short string) (true) String#slice and strict comparison|55,678,599|27839324|
|(long string) (true) String#endsWith|67,418,581|33709304|
|(long string) (true) String#slice and strict comparison|51,404,226|25705819|
|(short string) (false) String#endsWith|91,537,941|45768980|
|(short string) (false) String#slice and strict comparison|55,897,985|27948999|
|(long string) (false) String#endsWith|86,568,431|43287932|
|(long string) (false) String#slice and strict comparison|50,389,565|25194793|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:58:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":44074492,"opsSec":88134253.2409133},{"name":"(short string) (true) String#slice and strict comparison","samples":27839324,"opsSec":55678599.55961838},{"name":"(long string) (true) String#endsWith","samples":33709304,"opsSec":67418581.57191603},{"name":"(long string) (true) String#slice and strict comparison","samples":25705819,"opsSec":51404226.0246495},{"name":"(short string) (false) String#endsWith","samples":45768980,"opsSec":91537941.50933582},{"name":"(short string) (false) String#slice and strict comparison","samples":27948999,"opsSec":55897985.702443145},{"name":"(long string) (false) String#endsWith","samples":43287932,"opsSec":86568431.06137222},{"name":"(long string) (false) String#slice and strict comparison","samples":25194793,"opsSec":50389565.03794094}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,046,674|8023340|
|Using indexof|16,034,753|8017580|
|Using RegExp.test|12,746,467|6373236|
|Using RegExp.text with cached regex pattern|13,463,988|6732384|
|Using new RegExp.test|4,682,130|2341258|
|Using new RegExp.test with cached regex pattern|5,377,863|2688933|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:03:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":8023340,"opsSec":16046674.768784024},{"name":"Using indexof","samples":8017580,"opsSec":16034753.4869296},{"name":"Using RegExp.test","samples":6373236,"opsSec":12746467.181835406},{"name":"Using RegExp.text with cached regex pattern","samples":6732384,"opsSec":13463988.354290355},{"name":"Using new RegExp.test","samples":2341258,"opsSec":4682130.979005334},{"name":"Using new RegExp.test with cached regex pattern","samples":2688933,"opsSec":5377863.601472833}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|86,592,657|43296354|
|(short string) (true) String#slice and strict comparison|56,182,618|28091336|
|(long string) (true) String#startsWith|65,504,897|32754131|
|(long string) (true) String#slice and strict comparison|51,848,358|25928608|
|(short string) (false) String#startsWith|92,153,336|46083176|
|(short string) (false) String#slice and strict comparison|56,384,825|28192422|
|(long string) (false) String#startsWith|81,361,083|40682103|
|(long string) (false) String#slice and strict comparison|50,595,455|25297751|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:07:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43296354,"opsSec":86592657.25670284},{"name":"(short string) (true) String#slice and strict comparison","samples":28091336,"opsSec":56182618.06468666},{"name":"(long string) (true) String#startsWith","samples":32754131,"opsSec":65504897.01344042},{"name":"(long string) (true) String#slice and strict comparison","samples":25928608,"opsSec":51848358.4338386},{"name":"(short string) (false) String#startsWith","samples":46083176,"opsSec":92153336.99990882},{"name":"(short string) (false) String#slice and strict comparison","samples":28192422,"opsSec":56384825.73131647},{"name":"(long string) (false) String#startsWith","samples":40682103,"opsSec":81361083.03618874},{"name":"(long string) (false) String#slice and strict comparison","samples":25297751,"opsSec":50595455.75575344}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|93,592,759|46796382|
|Using this|95,125,755|47564388|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:53:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":46796382,"opsSec":93592759.69473305},{"name":"Using this","samples":47564388,"opsSec":95125755.94750017}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,751,838|5876315|
|Date.now()|19,416,714|9708422|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:58:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5876315,"opsSec":11751838.396165634},{"name":"Date.now()","samples":9708422,"opsSec":19416714.568180688}]}-->
