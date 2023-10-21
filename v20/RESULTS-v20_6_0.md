## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|697,041,518|96|
|Using dot notation|716,643,858|96|
|Using define property (writable)|3,209,257|99|
|Using define property initialized (writable)|4,211,520|93|
|Using define property (getter)|1,664,151|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:27:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":697041517.7193738,"samples":6},{"name":"Using dot notation","opsSec":716643857.9136379,"samples":8},{"name":"Using define property (writable)","opsSec":3209257.318857637,"samples":5},{"name":"Using define property initialized (writable)","opsSec":4211519.805450716,"samples":6},{"name":"Using define property (getter)","opsSec":1664150.6633438529,"samples":7}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.021ms
new Array(length)|10|0.008ms
array.push|100|0.042ms
new Array(length)|100|0.016ms
array.push|1,000|0.081ms
new Array(length)|1,000|0.042ms
array.push|10,000|0.653ms
new Array(length)|10,000|0.615ms
array.push|1,000,000|42.835ms
new Array(length)|1,000,000|11.009ms
array.push|100,000,000|2,137.97ms
new Array(length)|100,000,000|6,281.278ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.019ms
array.push|100|0.02ms
new Array(length)|100|0.014ms
array.push|1,000|0.051ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.417ms
new Array(length)|10,000|0.289ms
array.push|1,000,000|33.777ms
new Array(length)|1,000,000|5.038ms
array.push|100,000,000|3,646.907ms
new Array(length)|100,000,000|5,759.764ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|289|72|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:30:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":289.1888667878623,"samples":4},{"name":"Array.from","opsSec":13.173350582264876,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,180|82|
|new Blob (1024)|388|66|
|text (128)|4,034|83|
|text (1024)|490|88|
|arrayBuffer (128)|3,984|85|
|arrayBuffer (1024)|487|87|
|slice (0, 64)|50,008|66|
|slice (0, 512)|16,504|68|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:32:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Blob (128)","opsSec":3180.2739807739886,"samples":4},{"name":"new Blob (1024)","opsSec":388.4510061931157,"samples":2},{"name":"text (128)","opsSec":4033.614187348395,"samples":4},{"name":"text (1024)","opsSec":490.26089794441464,"samples":3},{"name":"arrayBuffer (128)","opsSec":3983.516173697305,"samples":6},{"name":"arrayBuffer (1024)","opsSec":487.481419183441,"samples":2},{"name":"slice (0, 64)","opsSec":50008.41172049519,"samples":3},{"name":"slice (0, 512)","opsSec":16503.821635413802,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|180,317|55|
|[True conditional] Using constructor name|143,296|92|
|[True conditional] Check if property is valid then instanceof |146,546|97|
|[False conditional] Using instanceof only|719,353,900|97|
|[False conditional] Using constructor name|719,050,466|98|
|[False conditional] Check if property is valid then instanceof |720,660,211|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":180316.52456796018,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":143295.88364721253,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":146545.87697056407,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":719353899.6824243,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":719050465.7015859,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":720660210.9817837,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,419|88|
|crypto.verify('RSA-SHA256')|3,390|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:36:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3418.992605406877,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":3390.1962120762446,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|854,932|90|
|fromUnixToISOString(new Date())|1,384,771|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":854932.2441422401,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1384771.2319938762,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,865|85|
|Intl.DateTimeFormat().format(new Date())|11,211|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,640|75|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,199|93|
|Reusing Intl.DateTimeFormat()|520,167|84|
|Date.toLocaleDateString()|590,474|95|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,576|90|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12865.134575299155,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":11210.594471121263,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13639.908042010687,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15198.884212152852,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":520167.39963347965,"samples":4},{"name":"Date.toLocaleDateString()","opsSec":590474.2530933486,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14575.81146967258,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|599,006|91|
|Using brackets {}|604,815|93|
|Using '' + |607,423|87|
|Using date.toString()|669,508|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":599005.7628800211,"samples":5},{"name":"Using brackets {}","opsSec":604815.0798930395,"samples":4},{"name":"Using '' + ","opsSec":607423.1946196813,"samples":5},{"name":"Using date.toString()","opsSec":669508.2092696779,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,099,664|84|
|Using delete property (proto: null)|11,276,819|85|
|Using delete property (cached proto: null)|2,173,249|89|
|Using undefined assignment|725,048,442|89|
|Using undefined assignment (proto: null)|11,962,224|87|
|Using undefined property (cached proto: null)|605,342,841|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using delete property","opsSec":2099664.3185698134,"samples":4},{"name":"Using delete property (proto: null)","opsSec":11276819.448321722,"samples":4},{"name":"Using delete property (cached proto: null)","opsSec":2173248.686660263,"samples":6},{"name":"Using undefined assignment","opsSec":725048442.2571164,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":11962223.710665952,"samples":8},{"name":"Using undefined property (cached proto: null)","opsSec":605342840.5752105,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|149,005|57|
|NodeError|125,857|83|
|NodeError Range|123,120|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":149005.43747937543,"samples":3},{"name":"NodeError","opsSec":125857.30311931716,"samples":3},{"name":"NodeError Range","opsSec":123119.6902798332,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,385,777|93|
|Function returning explicitly undefined|1,409,278|92|
|Function returning implicitly undefined|1,452,029|83|
|Function returning string|1,438,256|97|
|Function returning integer|1,455,670|96|
|Function returning float|1,449,251|96|
|Function returning functions|1,407,256|96|
|Function returning arrow functions|1,405,492|96|
|Function returning empty object|1,426,469|97|
|Function returning empty array|1,441,265|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1385777.1796427986,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1409278.3343048047,"samples":5},{"name":"Function returning implicitly undefined","opsSec":1452029.3310118348,"samples":5},{"name":"Function returning string","opsSec":1438255.6578008202,"samples":5},{"name":"Function returning integer","opsSec":1455669.5351149363,"samples":6},{"name":"Function returning float","opsSec":1449251.1561969614,"samples":5},{"name":"Function returning functions","opsSec":1407255.5039116272,"samples":5},{"name":"Function returning arrow functions","opsSec":1405492.4810236092,"samples":5},{"name":"Function returning empty object","opsSec":1426469.1695920497,"samples":5},{"name":"Function returning empty array","opsSec":1441265.3876839804,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|712,260,922|96|
|using Array.includes (first item)|713,371,568|98|
|Using raw comparison|716,852,867|96|
|Using raw comparison (first item)|717,460,752|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":712260921.5684067,"samples":7},{"name":"using Array.includes (first item)","opsSec":713371567.6199031,"samples":7},{"name":"Using raw comparison","opsSec":716852866.6311618,"samples":6},{"name":"Using raw comparison (first item)","opsSec":717460752.2979897,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,661,143|80|
|Using Object.getOwnPropertyNames()|48,941,360|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:02:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using Object.keys()","hz":46661142.622940235,"cycles":6,"stats":{"deviation":2.2159295999735717e-9,"mean":2.143110827955519e-8,"moe":4.855869834516925e-10,"rme":2.2658043490682744,"sem":2.477484609447411e-10,"variance":4.910343992039034e-18}},{"name":"Using Object.getOwnPropertyNames()","hz":48941360.04910087,"cycles":5,"stats":{"deviation":1.6293825336493783e-9,"mean":2.0432615664884277e-8,"moe":3.4844921050273635e-10,"rme":1.7053578270039362,"sem":1.7778020944017162e-10,"variance":2.6548874409616675e-18}}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|593,867,194|93|
|Length = 10_000 - Array.at|599,457,954|96|
|Length = 1_000_000 - Array.at|600,419,523|96|
|Length = 100 - Array[length - 1]|599,307,720|96|
|Length = 10_000 - Array[length - 1]|597,955,776|96|
|Length = 1_000_000 - Array[length - 1]|595,640,161|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:05:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Length = 100 - Array.at","hz":593867194.1736088,"cycles":7,"stats":{"deviation":1.2937390826564605e-10,"mean":1.6838781630151201e-9,"moe":2.629428071227221e-11,"rme":1.5615310709410337,"sem":1.3415449342996025e-11,"variance":1.67376081399278e-20}},{"name":"Length = 10_000 - Array.at","hz":599457953.7237695,"cycles":6,"stats":{"deviation":2.0676605898366853e-11,"mean":1.6681737122480495e-9,"moe":4.1361826151956145e-12,"rme":0.24794675667329924,"sem":2.110297252650824e-12,"variance":4.27522031476379e-22}},{"name":"Length = 1_000_000 - Array.at","hz":600419523.4301423,"cycles":8,"stats":{"deviation":2.2864308561969404e-11,"mean":1.6655021380502264e-9,"moe":4.5738142927005155e-12,"rme":0.2746207397881217,"sem":2.333578720765569e-12,"variance":5.227766060169473e-22}},{"name":"Length = 100 - Array[length - 1]","hz":599307719.7748835,"cycles":7,"stats":{"deviation":1.7165162045785173e-11,"mean":1.668591888613795e-9,"moe":3.4337475497562214e-12,"rme":0.20578714143269944,"sem":1.7519120151817457e-12,"variance":2.9464278805806384e-22}},{"name":"Length = 10_000 - Array[length - 1]","hz":597955775.703387,"cycles":8,"stats":{"deviation":2.1338566055960756e-11,"mean":1.6723644801719333e-9,"moe":4.268602225515135e-12,"rme":0.25524353549271067,"sem":2.1778582783240487e-12,"variance":4.553344013246006e-22}},{"name":"Length = 1_000_000 - Array[length - 1]","hz":595640161.4159248,"cycles":8,"stats":{"deviation":8.078702028096389e-11,"mean":1.6788659744212883e-9,"moe":1.599501396430692e-11,"rme":0.9527272699549746,"sem":8.160721410360673e-12,"variance":6.526542645876871e-21}}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,371,517|86|
|Object.create({})|1,620,076|71|
|Cached Empty.prototype|983,853,682|93|
|Empty.prototype|1,573,765|73|
|Empty class|1,044,649|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:07:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","hz":46371516.74596679,"cycles":6,"stats":{"deviation":3.0100474066662245e-9,"mean":2.1564962075280317e-8,"moe":6.361802482958885e-10,"rme":2.9500643037306102,"sem":3.2458175933463697e-10,"variance":9.060385390378063e-18}},{"name":"Object.create({})","hz":1620075.9608723358,"cycles":4,"stats":{"deviation":9.302120149550844e-8,"mean":6.172550078834244e-7,"moe":2.1637587728572712e-8,"rme":3.50545357303269,"sem":1.1039585575802405e-8,"variance":8.652943927667982e-15}},{"name":"Cached Empty.prototype","hz":983853682.4054035,"cycles":7,"stats":{"deviation":3.514499179188684e-11,"mean":1.0164112996509e-9,"moe":7.1429571247772526e-12,"rme":0.7027624670476013,"sem":3.644365879988394e-12,"variance":1.2351704480517931e-21}},{"name":"Empty.prototype","hz":1573765.146303212,"cycles":3,"stats":{"deviation":5.647651738157547e-8,"mean":6.354188249428504e-7,"moe":1.2955749712604332e-8,"rme":2.0389307341924554,"sem":6.610076383981802e-9,"variance":3.1895970155513966e-15}},{"name":"Empty class","hz":1044648.7852363931,"cycles":4,"stats":{"deviation":1.5067966341961133e-7,"mean":9.572595250505274e-7,"moe":3.365622095592453e-8,"rme":3.5158930337254195,"sem":1.7171541304043127e-8,"variance":2.270436096824736e-14}}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|724,691,555|82|
|Using optional chain (obj.field?.field2) (undefined)|735,161,329|88|
|Using and operator (obj.field && obj.field.field2) (Valid)|764,511,214|85|
|Using and operator (obj.field && obj.field.field2) (undefined)|751,846,461|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 14 2023 02:09:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759757995605469},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","hz":724691555.0451272,"cycles":6,"stats":{"deviation":1.971118726001143e-10,"mean":1.3798974101991973e-9,"moe":4.266403520145465e-11,"rme":3.0918266014642213,"sem":2.1767364898701353e-11,"variance":3.88530903199237e-20}},{"name":"Using optional chain (obj.field?.field2) (undefined)","hz":735161329.4871227,"cycles":6,"stats":{"deviation":5.88819299507956e-11,"mean":1.3602456493428989e-9,"moe":1.2302596252992285e-11,"rme":0.9044393017493102,"sem":6.2768348229552475e-12,"variance":3.4670816747304e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","hz":764511213.7017301,"cycles":6,"stats":{"deviation":7.348580447579368e-11,"mean":1.3080252873702708e-9,"moe":1.5622483023944053e-11,"rme":1.194356345767014,"sem":7.970654604053089e-12,"variance":5.40016345945458e-21}},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","hz":751846460.8680363,"cycles":5,"stats":{"deviation":5.186372477418371e-11,"mean":1.3300587979698151e-9,"moe":1.0836235609231663e-11,"rme":0.8147185391933015,"sem":5.528691637363094e-12,"variance":2.6898459474522775e-21}}]}-->
