## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|97,587,992|48843873|
|Using dot notation|67,115,368|33576843|
|Using define property (writable)|4,840,006|2420005|
|Using define property initialized (writable)|6,996,972|3498493|
|Using define property (getter)|2,394,863|1197440|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:42:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Directly in the object","samples":48843873,"opsSec":97587992.33493917},{"name":"Using dot notation","samples":33576843,"opsSec":67115368.49381952},{"name":"Using define property (writable)","samples":2420005,"opsSec":4840006.553915333},{"name":"Using define property initialized (writable)","samples":3498493,"opsSec":6996972.761727535},{"name":"Using define property (getter)","samples":1197440,"opsSec":2394863.097056261}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.028ms
new Array(length)|100|0.011ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.286ms
new Array(length)|10,000|0.133ms
array.push|1,000,000|22.048ms
new Array(length)|1,000,000|14.802ms
array.push|10,000,000|240.907ms
new Array(length)|10,000,000|72.881ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.015ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.019ms
array.push|10,000|0.371ms
new Array(length)|10,000|0.113ms
array.push|1,000,000|19.942ms
new Array(length)|1,000,000|10.129ms
array.push|10,000,000|218.04ms
new Array(length)|10,000,000|78.288ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|316|159|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:47:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Array","samples":159,"opsSec":316.57408384580094},{"name":"Array.from","samples":12,"opsSec":23.984854571701863}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,780|2391|
|new Blob (1024)|603|302|
|text (128)|4,565|2291|
|text (1024)|586|294|
|arrayBuffer (128)|4,640|2321|
|arrayBuffer (1024)|584|293|
|slice (0, 64)|190,876|96597|
|slice (0, 512)|29,822|14912|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:48:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Blob (128)","samples":2391,"opsSec":4780.960418404701},{"name":"new Blob (1024)","samples":302,"opsSec":603.0214168447443},{"name":"text (128)","samples":2291,"opsSec":4565.117856348501},{"name":"text (1024)","samples":294,"opsSec":586.2937538465058},{"name":"arrayBuffer (128)","samples":2321,"opsSec":4640.383448179691},{"name":"arrayBuffer (1024)","samples":293,"opsSec":584.5130537355238},{"name":"slice (0, 64)","samples":96597,"opsSec":190876.03540201226},{"name":"slice (0, 512)","samples":14912,"opsSec":29822.674918908004}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|433,690|216854|
|[True conditional] Using constructor name|337,323|168905|
|[True conditional] Check if property is valid then instanceof |345,229|172615|
|[False conditional] Using instanceof only|95,833,583|47918160|
|[False conditional] Using constructor name|96,670,055|48335050|
|[False conditional] Check if property is valid then instanceof |96,556,471|48279355|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:11:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":433690.9819658677,"samples":216854},{"name":"[True conditional] Using constructor name","opsSec":337323.52078873006,"samples":168905},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":345229.04302509275,"samples":172615},{"name":"[False conditional] Using instanceof only","opsSec":95833583.75951649,"samples":47918160},{"name":"[False conditional] Using constructor name","opsSec":96670055.33843443,"samples":48335050},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96556471.62787472,"samples":48279355}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|132.14 ms|1|
|Gzip|134.57 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:56:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132142802},{"name":"Gzip","samples":1,"totalTime":0.134566362}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,997|3500|
|crypto.verify('RSA-SHA256')|6,974|3488|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 15:59:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3500,"opsSec":6997.990596979984},{"name":"crypto.verify('RSA-SHA256')","samples":3488,"opsSec":6974.016101639567}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,341,076|670650|
|fromUnixToISOString(new Date())|1,978,670|989642|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:01:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":670650,"opsSec":1341076.2360657076},{"name":"fromUnixToISOString(new Date())","samples":989642,"opsSec":1978670.5409001817}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,673|9838|
|Intl.DateTimeFormat().format(new Date())|19,449|9726|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,476|9739|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,400|9201|
|Reusing Intl.DateTimeFormat()|380,722|190577|
|Date.toLocaleDateString()|690,527|345264|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,575|11788|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:05:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9838,"opsSec":19673.99974444598},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9726,"opsSec":19449.837372582544},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9739,"opsSec":19476.180262573347},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":9201,"opsSec":18400.87070176329},{"name":"Reusing Intl.DateTimeFormat()","samples":190577,"opsSec":380722.2366174527},{"name":"Date.toLocaleDateString()","samples":345264,"opsSec":690527.0180705803},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11788,"opsSec":23575.144882344826}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|940,599|470323|
|Using brackets {}|990,278|495180|
|Using '' + |937,289|468645|
|Using date.toString()|1,016,087|508044|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:08:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using String()","samples":470323,"opsSec":940599.8090245784},{"name":"Using brackets {}","samples":495180,"opsSec":990278.1931184665},{"name":"Using '' + ","samples":468645,"opsSec":937289.5313552342},{"name":"Using date.toString()","samples":508044,"opsSec":1016087.1546154873}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,166,794|2083401|
|Using delete property (proto: null)|17,878,938|8940691|
|Using delete property (cached proto: null)|4,165,612|2082808|
|Using undefined assignment|79,748,987|39888898|
|Using undefined assignment (proto: null)|19,982,673|9991341|
|Using undefined property (cached proto: null)|80,025,123|40012682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:13:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using delete property","samples":2083401,"opsSec":4166794.7331099855},{"name":"Using delete property (proto: null)","samples":8940691,"opsSec":17878938.699995138},{"name":"Using delete property (cached proto: null)","samples":2082808,"opsSec":4165612.4009108855},{"name":"Using undefined assignment","samples":39888898,"opsSec":79748987.47576426},{"name":"Using undefined assignment (proto: null)","samples":9991341,"opsSec":19982673.926999737},{"name":"Using undefined property (cached proto: null)","samples":40012682,"opsSec":80025123.60452868}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|333,381|166697|
|NodeError|310,390|155199|
|NodeError Range|284,685|142362|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:14:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Error","samples":166697,"opsSec":333381.83289662655},{"name":"NodeError","samples":155199,"opsSec":310390.7169922165},{"name":"NodeError Range","samples":142362,"opsSec":284685.3955216257}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,624,030|812018|
|Function returning explicitly undefined|1,599,612|799807|
|Function returning implicitly undefined|1,583,593|791798|
|Function returning string|1,606,973|803487|
|Function returning integer|1,655,139|827700|
|Function returning float|1,643,491|821747|
|Function returning functions|1,593,579|796879|
|Function returning arrow functions|1,682,182|841092|
|Function returning empty object|1,644,086|822758|
|Function returning empty array|1,659,209|829606|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:51:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1624030.1469953503,"samples":812018},{"name":"Function returning explicitly undefined","opsSec":1599612.8866694306,"samples":799807},{"name":"Function returning implicitly undefined","opsSec":1583593.5929377386,"samples":791798},{"name":"Function returning string","opsSec":1606973.932507095,"samples":803487},{"name":"Function returning integer","opsSec":1655139.3784431915,"samples":827700},{"name":"Function returning float","opsSec":1643491.2882393745,"samples":821747},{"name":"Function returning functions","opsSec":1593579.1366776994,"samples":796879},{"name":"Function returning arrow functions","opsSec":1682182.3548256569,"samples":841092},{"name":"Function returning empty object","opsSec":1644086.8511992055,"samples":822758},{"name":"Function returning empty array","opsSec":1659209.0034685398,"samples":829606}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|69,622,104|34811065|
|using Array.includes (first item)|77,820,028|38910030|
|Using raw comparison|95,199,021|47608576|
|Using raw comparison (first item)|97,115,701|48557859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:20:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"using Array.includes","samples":34811065,"opsSec":69622104.23982143},{"name":"using Array.includes (first item)","samples":38910030,"opsSec":77820028.71634845},{"name":"Using raw comparison","samples":47608576,"opsSec":95199021.15602279},{"name":"Using raw comparison (first item)","samples":48557859,"opsSec":97115701.68456213}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,701,227|21360027|
|Using Object.getOwnPropertyNames()|42,834,390|21424781|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:23:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using Object.keys()","samples":21360027,"opsSec":42701227.71192145},{"name":"Using Object.getOwnPropertyNames()","samples":21424781,"opsSec":42834390.65851022}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|96,241,503|48120752|
|Length = 10_000 - Array.at|95,826,878|47913450|
|Length = 1_000_000 - Array.at|95,292,901|47646477|
|Length = 100 - Array[length - 1]|95,746,453|47875444|
|Length = 10_000 - Array[length - 1]|81,165,801|40582903|
|Length = 1_000_000 - Array[length - 1]|94,973,305|47486698|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:24:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48120752,"opsSec":96241503.23006797},{"name":"Length = 10_000 - Array.at","samples":47913450,"opsSec":95826878.53477919},{"name":"Length = 1_000_000 - Array.at","samples":47646477,"opsSec":95292901.97007552},{"name":"Length = 100 - Array[length - 1]","samples":47875444,"opsSec":95746453.59874803},{"name":"Length = 10_000 - Array[length - 1]","samples":40582903,"opsSec":81165801.61704671},{"name":"Length = 1_000_000 - Array[length - 1]","samples":47486698,"opsSec":94973305.58541308}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,257,791|48628923|
|~ (small)|96,285,740|48346699|
|Math.floor (long)|97,563,558|48790269|
|~ (long)|98,201,613|49104518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:27:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":48628923,"opsSec":97257791.14660579},{"name":"~ (small)","samples":48346699,"opsSec":96285740.35135674},{"name":"Math.floor (long)","samples":48790269,"opsSec":97563558.81873165},{"name":"~ (long)","samples":49104518,"opsSec":98201613.92201976}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|35,240,070|17626545|
|Object.create({})|2,043,201|1023539|
|new Function with empty prototype|100,323,710|50212587|
|Empty class|78,389,899|39199502|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:30:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Object.create(null)","samples":17626545,"opsSec":35240070.13320844},{"name":"Object.create({})","samples":1023539,"opsSec":2043201.221828897},{"name":"new Function with empty prototype","samples":50212587,"opsSec":100323710.61203542},{"name":"Empty class","samples":39199502,"opsSec":78389899.01322961}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|140,947,797|71158270|
|Using optional chain (obj.field?.field2) (undefined)|96,002,529|48001982|
|Using and operator (obj.field && obj.field.field2) (Valid)|97,593,982|48797013|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,620,173|48810108|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:25:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":140947797.07023335,"samples":71158270},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":96002529.91420813,"samples":48001982},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":97593982.27789594,"samples":48797013},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97620173.8280849,"samples":48810108}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,654,211|48828390|
|Using parseInt(x, 10) - big number (10 len)|97,725,561|48867336|
|Using + - small number (2 len)|98,234,064|49124653|
|Using + - big number (10 len)|97,932,854|48966645|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:36:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48828390,"opsSec":97654211.69423243},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48867336,"opsSec":97725561.6322424},{"name":"Using + - small number (2 len)","samples":49124653,"opsSec":98234064.9848176},{"name":"Using + - big number (10 len)","samples":48966645,"opsSec":97932854.00293398}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|859,038|430624|
|Using ? operator to avoid rejection|1,048,665|524365|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:38:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using if to check function existence","samples":430624,"opsSec":859038.994969061},{"name":"Using ? operator to avoid rejection","samples":524365,"opsSec":1048665.6014454153}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|97,743,606|48871807|
|Raw usage underscore usage|94,461,352|47230873|
|Manipulating private properties using #|97,690,108|48845061|
|Manipulating private properties using underscore(_)|87,723,049|43864945|
|Manipulating private properties using Symbol|94,503,516|47251766|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:42:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Raw usage private field","samples":48871807,"opsSec":97743606.57148589},{"name":"Raw usage underscore usage","samples":47230873,"opsSec":94461352.28508367},{"name":"Manipulating private properties using #","samples":48845061,"opsSec":97690108.32338484},{"name":"Manipulating private properties using underscore(_)","samples":43864945,"opsSec":87723049.53204359},{"name":"Manipulating private properties using Symbol","samples":47251766,"opsSec":94503516.3124163}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,789,246|3895313|
|Adding property in the object creation - small object|7,538,101|3769127|
|Adding property after the function creation - small class|275,961|138004|
|Adding property in the function creation - small class|284,315|142158|
|Adding property after the class creation - small class|274,117|137080|
|Adding property in the class creation - small class|270,608|135455|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:44:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3895313,"opsSec":7789246.15062291},{"name":"Adding property in the object creation - small object","samples":3769127,"opsSec":7538101.715269148},{"name":"Adding property after the function creation - small class","samples":138004,"opsSec":275961.9717508078},{"name":"Adding property in the function creation - small class","samples":142158,"opsSec":284315.75491981924},{"name":"Adding property after the class creation - small class","samples":137080,"opsSec":274117.0727181782},{"name":"Adding property in the class creation - small class","samples":135455,"opsSec":270608.5399216589}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|93,113,018|46598296|
|Getter|50,651,277|25332638|
|Method|96,451,998|48226008|
|DefineProperty (getter)|94,832,201|47458619|
|DefineProperty (getter & enumerable=false)|50,662,206|25331119|
|DefineProperty (getter & configurable=false)|94,955,630|47477824|
|DefineProperty (getter & enumerable=false & configurable=false)|51,022,228|25511121|
|DefineProperty (writable)|94,990,091|47495325|
|DefineProperty (writable & enumerable=false)|95,166,036|47583028|
|DefineProperty (writable & enumerable=false & configurable=false)|94,817,222|47408622|
|DefineProperties (getter)|51,014,904|25518198|
|DefineProperties (getter & enumerable=false)|50,950,801|25475425|
|DefineProperties (getter & enumerable=false & configurable=false)|49,225,220|24613637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:14:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":46598296,"opsSec":93113018.22426677},{"name":"Getter","samples":25332638,"opsSec":50651277.30388641},{"name":"Method","samples":48226008,"opsSec":96451998.44573629},{"name":"DefineProperty (getter)","samples":47458619,"opsSec":94832201.39601499},{"name":"DefineProperty (getter & enumerable=false)","samples":25331119,"opsSec":50662206.89340497},{"name":"DefineProperty (getter & configurable=false)","samples":47477824,"opsSec":94955630.14834154},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25511121,"opsSec":51022228.93830939},{"name":"DefineProperty (writable)","samples":47495325,"opsSec":94990091.83822037},{"name":"DefineProperty (writable & enumerable=false)","samples":47583028,"opsSec":95166036.77646056},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":47408622,"opsSec":94817222.38167329},{"name":"DefineProperties (getter)","samples":25518198,"opsSec":51014904.33907022},{"name":"DefineProperties (getter & enumerable=false)","samples":25475425,"opsSec":50950801.90244301},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24613637,"opsSec":49225220.32380809}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|93,549,373|46774702|
|Setter|11,489,770|5744890|
|Method|90,735,819|45367929|
|DefineProperty (setter)|91,360,059|45680054|
|DefineProperty (setter & enumerable=false)|11,664,602|5832305|
|DefineProperty (setter & configurable=false)|11,823,151|5911702|
|DefineProperty (setter & enumerable=false & configurable=false)|11,691,729|5845867|
|DefineProperty (writable)|85,880,979|43144480|
|DefineProperty (writable & enumerable=false)|93,805,778|46902901|
|DefineProperty (writable & enumerable=false & configurable=false)|93,256,700|46628363|
|DefineProperties (setter)|91,389,653|45756791|
|DefineProperties (setter & enumerable=false)|11,689,719|5844865|
|DefineProperties (setter & enumerable=false & configurable=false)|11,607,144|5803576|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:23:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":46774702,"opsSec":93549373.12870687},{"name":"Setter","samples":5744890,"opsSec":11489770.049859138},{"name":"Method","samples":45367929,"opsSec":90735819.70948407},{"name":"DefineProperty (setter)","samples":45680054,"opsSec":91360059.21372838},{"name":"DefineProperty (setter & enumerable=false)","samples":5832305,"opsSec":11664602.231374914},{"name":"DefineProperty (setter & configurable=false)","samples":5911702,"opsSec":11823151.008214727},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5845867,"opsSec":11691729.32330827},{"name":"DefineProperty (writable)","samples":43144480,"opsSec":85880979.65794358},{"name":"DefineProperty (writable & enumerable=false)","samples":46902901,"opsSec":93805778.54855536},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":46628363,"opsSec":93256700.07463738},{"name":"DefineProperties (setter)","samples":45756791,"opsSec":91389653.06096667},{"name":"DefineProperties (setter & enumerable=false)","samples":5844865,"opsSec":11689719.689667234},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5803576,"opsSec":11607144.664284574}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,277,064|1638737|
|Using replaceAll()|3,265,548|1632825|
|Using replaceAll(//g)|3,054,010|1527139|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:26:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1638737,"opsSec":3277064.0130754523},{"name":"Using replaceAll()","samples":1632825,"opsSec":3265548.4349125777},{"name":"Using replaceAll(//g)","samples":1527139,"opsSec":3054010.8717770674}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,119,635|12559822|
|{ ...object, __proto__: null }|2,611,314|1305658|
|{ ...object, newProp: true }|23,235,854|11619340|
|structuredClone|310,903|155511|
|JSON.parse + JSON.stringify|308,235|154160|
|loop + object.keys starting with {}|1,698,789|849396|
|loop + object.keys starting with { __proto__: null }|923,110|461619|
|loop + object.keys starting with { randomProp: true }|666,095|333086|
|object.keys + reduce(FN, {})|1,764,028|882188|
|object.keys + reduce(FN, { __proto__: null })|953,340|476774|
|object.keys + reduce(FN, { newProp: true })|699,555|349803|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:29:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12559822,"opsSec":25119635.66028096},{"name":"{ ...object, __proto__: null }","samples":1305658,"opsSec":2611314.7361236676},{"name":"{ ...object, newProp: true }","samples":11619340,"opsSec":23235854.798886713},{"name":"structuredClone","samples":155511,"opsSec":310903.5905021357},{"name":"JSON.parse + JSON.stringify","samples":154160,"opsSec":308235.49970364023},{"name":"loop + object.keys starting with {}","samples":849396,"opsSec":1698789.9002956834},{"name":"loop + object.keys starting with { __proto__: null }","samples":461619,"opsSec":923110.7233396873},{"name":"loop + object.keys starting with { randomProp: true }","samples":333086,"opsSec":666095.9025397103},{"name":"object.keys + reduce(FN, {})","samples":882188,"opsSec":1764028.1971445382},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":476774,"opsSec":953340.7475348489},{"name":"object.keys + reduce(FN, { newProp: true })","samples":349803,"opsSec":699555.1493361947}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|312,777|156408|
|Sort using first char|1,363,685|681905|
|Sort using localeCompare|1,261,957|631075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:37:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":156408,"opsSec":312777.6922393653},{"name":"Sort using first char","samples":681905,"opsSec":1363685.3782480233},{"name":"Sort using localeCompare","samples":631075,"opsSec":1261957.6927911108}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,804|903|
|{...smallObject} - Total keys: 2|40,815,434|20414822|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,067|534|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,866|3434|
|{ ...bigObject, ...anotherBigObject }|1,123|566|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,184,451|6093101|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,045,027|14022948|
|{ ...smallObject, ...anotherSmallObject }|20,846,838|10431946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:42:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":903,"opsSec":1804.1831695064755},{"name":"{...smallObject} - Total keys: 2","samples":20414822,"opsSec":40815434.59623054},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":534,"opsSec":1067.3580737767015},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3434,"opsSec":6866.5935980324375},{"name":"{ ...bigObject, ...anotherBigObject }","samples":566,"opsSec":1123.0413976968464},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6093101,"opsSec":12184451.167473942},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14022948,"opsSec":28045027.89420656},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10431946,"opsSec":20846838.535591695}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,056|1037|
|streams.web.Readable reading 1e3 * "some data"|1,671|836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:47:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1037,"opsSec":2056.3339731466776},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":836,"opsSec":1671.1732004284734}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,941|2971|
|streams.web.WritableStream writing 1e3 * "some data"|1,835|924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:50:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2971,"opsSec":5941.485859462637},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":924,"opsSec":1835.4347385891806}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|93,135,355|46605096|
|Using backtick (`)|97,942,334|48971183|
|Using array.join|10,618,807|5318299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:54:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":46605096,"opsSec":93135355.1343596},{"name":"Using backtick (`)","samples":48971183,"opsSec":97942334.6584529},{"name":"Using array.join","samples":5318299,"opsSec":10618807.250332791}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|89,320,601|44660913|
|(short string) (true) String#slice and strict comparison|61,013,685|30511298|
|(long string) (true) String#endsWith|60,208,266|30104142|
|(long string) (true) String#slice and strict comparison|54,659,479|27329763|
|(short string) (false) String#endsWith|94,640,460|47320250|
|(short string) (false) String#slice and strict comparison|60,558,096|30279065|
|(long string) (false) String#endsWith|85,861,100|42930560|
|(long string) (false) String#slice and strict comparison|54,391,607|27201910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:57:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":44660913,"opsSec":89320601.95047088},{"name":"(short string) (true) String#slice and strict comparison","samples":30511298,"opsSec":61013685.439351074},{"name":"(long string) (true) String#endsWith","samples":30104142,"opsSec":60208266.539602704},{"name":"(long string) (true) String#slice and strict comparison","samples":27329763,"opsSec":54659479.320804656},{"name":"(short string) (false) String#endsWith","samples":47320250,"opsSec":94640460.06172585},{"name":"(short string) (false) String#slice and strict comparison","samples":30279065,"opsSec":60558096.69304682},{"name":"(long string) (false) String#endsWith","samples":42930560,"opsSec":85861100.76711342},{"name":"(long string) (false) String#slice and strict comparison","samples":27201910,"opsSec":54391607.996172704}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,996,519|7998261|
|Using indexof|15,968,273|7995558|
|Using RegExp.test|13,041,428|6520716|
|Using RegExp.text with cached regex pattern|13,982,922|6992525|
|Using new RegExp.test|4,731,535|2366975|
|Using new RegExp.test with cached regex pattern|5,243,016|2621510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:01:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7998261,"opsSec":15996519.15261959},{"name":"Using indexof","samples":7995558,"opsSec":15968273.19357731},{"name":"Using RegExp.test","samples":6520716,"opsSec":13041428.478814311},{"name":"Using RegExp.text with cached regex pattern","samples":6992525,"opsSec":13982922.973688934},{"name":"Using new RegExp.test","samples":2366975,"opsSec":4731535.402853216},{"name":"Using new RegExp.test with cached regex pattern","samples":2621510,"opsSec":5243016.109682046}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|90,161,909|45081488|
|(short string) (true) String#slice and strict comparison|60,562,591|30281306|
|(long string) (true) String#startsWith|60,666,432|30344862|
|(long string) (true) String#slice and strict comparison|54,575,378|27288251|
|(short string) (false) String#startsWith|93,262,187|46633878|
|(short string) (false) String#slice and strict comparison|60,333,110|30176915|
|(long string) (false) String#startsWith|87,415,815|43707931|
|(long string) (false) String#slice and strict comparison|54,090,639|27051690|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:06:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":45081488,"opsSec":90161909.56493366},{"name":"(short string) (true) String#slice and strict comparison","samples":30281306,"opsSec":60562591.77209434},{"name":"(long string) (true) String#startsWith","samples":30344862,"opsSec":60666432.0940604},{"name":"(long string) (true) String#slice and strict comparison","samples":27288251,"opsSec":54575378.72955498},{"name":"(short string) (false) String#startsWith","samples":46633878,"opsSec":93262187.12828219},{"name":"(short string) (false) String#slice and strict comparison","samples":30176915,"opsSec":60333110.644474916},{"name":"(long string) (false) String#startsWith","samples":43707931,"opsSec":87415815.1451231},{"name":"(long string) (false) String#slice and strict comparison","samples":27051690,"opsSec":54090639.16630693}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|82,577,380|41288703|
|Using this|98,201,979|49101004|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:11:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":41288703,"opsSec":82577380.23585737},{"name":"Using this","samples":49101004,"opsSec":98201979.52142593}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,625,263|5314255|
|Date.now()|20,640,026|10320820|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:14:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5314255,"opsSec":10625263.556972802},{"name":"Date.now()","samples":10320820,"opsSec":20640026.11507801}]}-->
