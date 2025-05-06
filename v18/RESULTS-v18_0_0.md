## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|75,270,395|37636389|
|Using dot notation|65,193,224|32597514|
|Using define property (writable)|4,510,374|2255552|
|Using define property initialized (writable)|5,488,271|2744151|
|Using define property (getter)|2,088,531|1053106|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":37636389,"opsSec":75270395.69197635},{"name":"Using dot notation","samples":32597514,"opsSec":65193224.49463757},{"name":"Using define property (writable)","samples":2255552,"opsSec":4510374.699473344},{"name":"Using define property initialized (writable)","samples":2744151,"opsSec":5488271.309586837},{"name":"Using define property (getter)","samples":1053106,"opsSec":2088531.7599475938}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.032ms
new Array(length)|100|0.012ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.405ms
new Array(length)|10,000|0.145ms
array.push|1,000,000|30.213ms
new Array(length)|1,000,000|17.979ms
array.push|100,000,000|2,003.864ms
new Array(length)|100,000,000|4,393.633ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.492ms
new Array(length)|10,000|3.318ms
array.push|1,000,000|272.811ms
new Array(length)|1,000,000|4.924ms
array.push|100,000,000|2,435.003ms
new Array(length)|100,000,000|4,746.467ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|221|111|
|Array.from|19|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:09:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Array","samples":111,"opsSec":221.79343667503457},{"name":"Array.from","samples":11,"opsSec":19.129637825262428}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,102|2094|
|new Blob (1024)|515|258|
|text (128)|34,088|17045|
|text (1024)|13,895|6949|
|arrayBuffer (128)|40,565|20288|
|arrayBuffer (1024)|15,335|7669|
|slice (0, 64)|74,078|37040|
|slice (0, 512)|24,677|12339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:13:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Blob (128)","samples":2094,"opsSec":4102.006913542825},{"name":"new Blob (1024)","samples":258,"opsSec":515.5984550168237},{"name":"text (128)","samples":17045,"opsSec":34088.83225296235},{"name":"text (1024)","samples":6949,"opsSec":13895.987999897494},{"name":"arrayBuffer (128)","samples":20288,"opsSec":40565.190755880045},{"name":"arrayBuffer (1024)","samples":7669,"opsSec":15335.996658756469},{"name":"slice (0, 64)","samples":37040,"opsSec":74078.12241590925},{"name":"slice (0, 512)","samples":12339,"opsSec":24677.6080208742}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|392,757|196767|
|[True conditional] Using constructor name|320,605|160304|
|[True conditional] Check if property is valid then instanceof |322,167|161118|
|[False conditional] Using instanceof only|39,452,793|19727708|
|[False conditional] Using constructor name|105,521,557|52768615|
|[False conditional] Check if property is valid then instanceof |105,741,810|52870920|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:08:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":392757.58580716397,"samples":196767},{"name":"[True conditional] Using constructor name","opsSec":320605.8647649407,"samples":160304},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":322167.0498080001,"samples":161118},{"name":"[False conditional] Using instanceof only","opsSec":39452793.80951224,"samples":19727708},{"name":"[False conditional] Using constructor name","opsSec":105521557.72720325,"samples":52768615},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":105741810.81526022,"samples":52870920}]}-->

## Compression algorithms

|name|total time|samples|
|-|-|-|
|Deflate|163.79 ms|1|
|Gzip|164.42 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:21:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.163789453},{"name":"Gzip","samples":1,"totalTime":0.164419278}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|2,041|1021|
|crypto.verify('RSA-SHA256')|2,074|1038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:25:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":1021,"opsSec":2041.208835620149},{"name":"crypto.verify('RSA-SHA256')","samples":1038,"opsSec":2074.3969848372035}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,423,467|1211867|
|fromUnixToISOString(new Date())|1,941,801|971064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:31:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":1211867,"opsSec":2423467.093875083},{"name":"fromUnixToISOString(new Date())","samples":971064,"opsSec":1941801.994746706}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,369|6186|
|Intl.DateTimeFormat().format(new Date())|11,524|5763|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|12,724|6363|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|12,667|6334|
|Reusing Intl.DateTimeFormat()|640,655|320833|
|Date.toLocaleDateString()|667,233|333623|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|12,419|6213|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:34:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":6186,"opsSec":12369.922422049529},{"name":"Intl.DateTimeFormat().format(new Date())","samples":5763,"opsSec":11524.652099739718},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":6363,"opsSec":12724.040701316648},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":6334,"opsSec":12667.450232659903},{"name":"Reusing Intl.DateTimeFormat()","samples":320833,"opsSec":640655.6437665077},{"name":"Date.toLocaleDateString()","samples":333623,"opsSec":667233.0369965571},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":6213,"opsSec":12419.578829353648}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|995,715|497858|
|Using brackets {}|1,005,974|503049|
|Using '' + |1,001,419|500711|
|Using date.toString()|1,112,641|556321|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:37:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using String()","samples":497858,"opsSec":995715.838694034},{"name":"Using brackets {}","samples":503049,"opsSec":1005974.3597153447},{"name":"Using '' + ","samples":500711,"opsSec":1001419.6887233584},{"name":"Using date.toString()","samples":556321,"opsSec":1112641.3991736444}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,320,602|1660793|
|Using delete property (proto: null)|17,046,939|8523995|
|Using delete property (cached proto: null)|3,291,433|1645721|
|Using undefined assignment|76,332,652|38170698|
|Using undefined assignment (proto: null)|18,673,480|9336966|
|Using undefined property (cached proto: null)|81,430,300|40717657|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:41:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using delete property","samples":1660793,"opsSec":3320602.357887137},{"name":"Using delete property (proto: null)","samples":8523995,"opsSec":17046939.09029896},{"name":"Using delete property (cached proto: null)","samples":1645721,"opsSec":3291433.2513704174},{"name":"Using undefined assignment","samples":38170698,"opsSec":76332652.39999819},{"name":"Using undefined assignment (proto: null)","samples":9336966,"opsSec":18673480.549934227},{"name":"Using undefined property (cached proto: null)","samples":40717657,"opsSec":81430300.9878106}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|305,816|152962|
|NodeError|296,057|148114|
|NodeError Range|269,947|134975|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:45:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Error","samples":152962,"opsSec":305816.9396057828},{"name":"NodeError","samples":148114,"opsSec":296057.5643970976},{"name":"NodeError Range","samples":134975,"opsSec":269947.7135428663}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,891,460|945731|
|Function returning explicitly undefined|1,826,097|913701|
|Function returning implicitly undefined|1,911,986|956042|
|Function returning string|1,874,292|937310|
|Function returning integer|1,915,848|957925|
|Function returning float|1,891,441|945749|
|Function returning functions|1,828,238|914241|
|Function returning arrow functions|1,830,240|915162|
|Function returning empty object|1,931,854|965987|
|Function returning empty array|1,924,723|962539|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:48:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1891460.1236715575,"samples":945731},{"name":"Function returning explicitly undefined","opsSec":1826097.5272314223,"samples":913701},{"name":"Function returning implicitly undefined","opsSec":1911986.0030693987,"samples":956042},{"name":"Function returning string","opsSec":1874292.3287179244,"samples":937310},{"name":"Function returning integer","opsSec":1915848.6435791603,"samples":957925},{"name":"Function returning float","opsSec":1891441.6312565051,"samples":945749},{"name":"Function returning functions","opsSec":1828238.8003618207,"samples":914241},{"name":"Function returning arrow functions","opsSec":1830240.7533295758,"samples":915162},{"name":"Function returning empty object","opsSec":1931854.4027576342,"samples":965987},{"name":"Function returning empty array","opsSec":1924723.0541226969,"samples":962539}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|67,911,710|33988398|
|using Array.includes (first item)|82,883,214|41441736|
|Using raw comparison|101,870,551|50961795|
|Using raw comparison (first item)|90,232,181|45116102|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:48:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"using Array.includes","samples":33988398,"opsSec":67911710.91032119},{"name":"using Array.includes (first item)","samples":41441736,"opsSec":82883214.06743783},{"name":"Using raw comparison","samples":50961795,"opsSec":101870551.91211139},{"name":"Using raw comparison (first item)","samples":45116102,"opsSec":90232181.26149033}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|41,949,860|21032331|
|Using Object.getOwnPropertyNames()|42,936,166|21468683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:55:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using Object.keys()","samples":21032331,"opsSec":41949860.66889796},{"name":"Using Object.getOwnPropertyNames()","samples":21468683,"opsSec":42936166.964601345}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|20,930,426|10465218|
|Length = 10_000 - Array.at|20,838,384|10419462|
|Length = 1_000_000 - Array.at|20,106,211|10053123|
|Length = 100 - Array[length - 1]|101,846,357|50923196|
|Length = 10_000 - Array[length - 1]|92,233,844|46117547|
|Length = 1_000_000 - Array[length - 1]|98,739,710|49375829|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:57:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10465218,"opsSec":20930426.24642137},{"name":"Length = 10_000 - Array.at","samples":10419462,"opsSec":20838384.785955276},{"name":"Length = 1_000_000 - Array.at","samples":10053123,"opsSec":20106211.05540519},{"name":"Length = 100 - Array[length - 1]","samples":50923196,"opsSec":101846357.98331642},{"name":"Length = 10_000 - Array[length - 1]","samples":46117547,"opsSec":92233844.96927142},{"name":"Length = 1_000_000 - Array[length - 1]","samples":49375829,"opsSec":98739710.10011905}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|105,682,967|52841499|
|~ (small)|103,630,178|51825372|
|Math.floor (long)|105,816,654|52908337|
|~ (long)|107,014,259|53507148|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:00:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":52841499,"opsSec":105682967.77467123},{"name":"~ (small)","samples":51825372,"opsSec":103630178.17662014},{"name":"Math.floor (long)","samples":52908337,"opsSec":105816654.95300211},{"name":"~ (long)","samples":53507148,"opsSec":107014259.40112327}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,895,098|15947725|
|Object.create({})|1,681,846|845707|
|new Function with empty prototype|75,901,360|37969473|
|Empty class|76,822,675|38440997|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:04:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15947725,"opsSec":31895098.260856375},{"name":"Object.create({})","samples":845707,"opsSec":1681846.3561769857},{"name":"new Function with empty prototype","samples":37969473,"opsSec":75901360.55706847},{"name":"Empty class","samples":38440997,"opsSec":76822675.52473892}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|158,384,726|79219969|
|Using optional chain (obj.field?.field2) (undefined)|103,294,308|51649092|
|Using and operator (obj.field && obj.field.field2) (Valid)|104,959,953|52479987|
|Using and operator (obj.field && obj.field.field2) (undefined)|105,414,143|52707081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:22:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":158384726.66813076,"samples":79219969},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":103294308.19096807,"samples":51649092},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":104959953.0080094,"samples":52479987},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":105414143.657939,"samples":52707081}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,244,985|48123359|
|Using parseInt(x, 10) - big number (10 len)|14,891,047|7447371|
|Using + - small number (2 len)|105,350,215|52675117|
|Using + - big number (10 len)|106,403,677|53202733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:10:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48123359,"opsSec":96244985.7827459},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":7447371,"opsSec":14891047.59065695},{"name":"Using + - small number (2 len)","samples":52675117,"opsSec":105350215.45836209},{"name":"Using + - big number (10 len)","samples":53202733,"opsSec":106403677.14137991}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|955,002|480840|
|Using ? operator to avoid rejection|974,240|491670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:14:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using if to check function existence","samples":480840,"opsSec":955002.5552832806},{"name":"Using ? operator to avoid rejection","samples":491670,"opsSec":974240.2183553562}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|101,389,286|50701902|
|Raw usage underscore usage|80,297,523|40186713|
|Manipulating private properties using #|76,144,083|38075972|
|Manipulating private properties using underscore(_)|76,382,364|38191194|
|Manipulating private properties using Symbol|76,427,467|38213743|
|Manipulating private properties using PrivateSymbol|35,513,088|17756581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:39:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":101389286.06812792,"samples":50701902},{"name":"Raw usage underscore usage","opsSec":80297523.64161243,"samples":40186713},{"name":"Manipulating private properties using #","opsSec":76144083.79851764,"samples":38075972},{"name":"Manipulating private properties using underscore(_)","opsSec":76382364.62699643,"samples":38191194},{"name":"Manipulating private properties using Symbol","opsSec":76427467.96311755,"samples":38213743},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35513088.914063014,"samples":17756581}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,755,576|1877790|
|Adding property in the object creation - small object|3,742,401|1871306|
|Adding property after the function creation - small class|227,703|113877|
|Adding property in the function creation - small class|229,939|114975|
|Adding property after the class creation - small class|202,705|101353|
|Adding property in the class creation - small class|198,003|99003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:45:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3755576.807759714,"samples":1877790},{"name":"Adding property in the object creation - small object","opsSec":3742401.3626817027,"samples":1871306},{"name":"Adding property after the function creation - small class","opsSec":227703.12793337592,"samples":113877},{"name":"Adding property in the function creation - small class","opsSec":229939.87896628745,"samples":114975},{"name":"Adding property after the class creation - small class","opsSec":202705.5978320939,"samples":101353},{"name":"Adding property in the class creation - small class","opsSec":198003.46674364645,"samples":99003}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|163,446,345|81724035|
|Getter|54,854,910|27427529|
|Method|106,274,620|53162906|
|DefineProperty (getter)|106,426,680|53213357|
|DefineProperty (getter & enumerable=false)|53,145,153|26572585|
|DefineProperty (getter & configurable=false)|107,328,171|53664099|
|DefineProperty (getter & enumerable=false & configurable=false)|55,857,602|27929575|
|DefineProperty (writable)|106,457,638|53228831|
|DefineProperty (writable & enumerable=false)|107,303,099|53651565|
|DefineProperty (writable & enumerable=false & configurable=false)|107,227,621|53613816|
|DefineProperties (getter)|55,555,815|27858283|
|DefineProperties (getter & enumerable=false)|55,936,534|27968832|
|DefineProperties (getter & enumerable=false & configurable=false)|55,858,113|27929070|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:51:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":163446345.64105347,"samples":81724035},{"name":"Getter","opsSec":54854910.879129015,"samples":27427529},{"name":"Method","opsSec":106274620.79046068,"samples":53162906},{"name":"DefineProperty (getter)","opsSec":106426680.36916901,"samples":53213357},{"name":"DefineProperty (getter & enumerable=false)","opsSec":53145153.631292686,"samples":26572585},{"name":"DefineProperty (getter & configurable=false)","opsSec":107328171.59726979,"samples":53664099},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":55857602.9678282,"samples":27929575},{"name":"DefineProperty (writable)","opsSec":106457638.3664043,"samples":53228831},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107303099.74052587,"samples":53651565},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":107227621.70614833,"samples":53613816},{"name":"DefineProperties (getter)","opsSec":55555815.58095141,"samples":27858283},{"name":"DefineProperties (getter & enumerable=false)","opsSec":55936534.08201154,"samples":27968832},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":55858113.970118895,"samples":27929070}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,101,811|76575599|
|Setter|10,113,163|5064107|
|Method|103,734,079|51872918|
|DefineProperty (setter)|102,119,516|51062166|
|DefineProperty (setter & enumerable=false)|9,859,014|4929787|
|DefineProperty (setter & configurable=false)|9,903,027|4952116|
|DefineProperty (setter & enumerable=false & configurable=false)|9,832,542|4916334|
|DefineProperty (writable)|87,813,084|43906557|
|DefineProperty (writable & enumerable=false)|91,324,140|45662086|
|DefineProperty (writable & enumerable=false & configurable=false)|91,709,123|45857263|
|DefineProperties (setter)|90,732,646|45366325|
|DefineProperties (setter & enumerable=false)|10,171,111|5086293|
|DefineProperties (setter & enumerable=false & configurable=false)|9,998,837|5002248|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:58:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":153101811.0302051,"samples":76575599},{"name":"Setter","opsSec":10113163.206216305,"samples":5064107},{"name":"Method","opsSec":103734079.19440041,"samples":51872918},{"name":"DefineProperty (setter)","opsSec":102119516.04362337,"samples":51062166},{"name":"DefineProperty (setter & enumerable=false)","opsSec":9859014.264324158,"samples":4929787},{"name":"DefineProperty (setter & configurable=false)","opsSec":9903027.950249698,"samples":4952116},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":9832542.104130898,"samples":4916334},{"name":"DefineProperty (writable)","opsSec":87813084.6704297,"samples":43906557},{"name":"DefineProperty (writable & enumerable=false)","opsSec":91324140.40184742,"samples":45662086},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":91709123.96576191,"samples":45857263},{"name":"DefineProperties (setter)","opsSec":90732646.55215943,"samples":45366325},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10171111.758377293,"samples":5086293},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":9998837.537851281,"samples":5002248}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,470,531|1735267|
|Using replaceAll()|3,039,421|1519836|
|Using replaceAll(//g)|3,103,623|1552016|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:04:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3470531.653920602,"samples":1735267},{"name":"Using replaceAll()","opsSec":3039421.5395074585,"samples":1519836},{"name":"Using replaceAll(//g)","opsSec":3103623.4886619286,"samples":1552016}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|21,086,358|10547437|
|{ ...object, __proto__: null }|19,407,276|9707094|
|{ ...object, newProp: true }|687,688|347378|
|structuredClone|246,116|123059|
|JSON.parse + JSON.stringify|203,215|101682|
|loop + object.keys starting with {}|1,303,083|652358|
|loop + object.keys starting with { __proto__: null }|744,818|372413|
|loop + object.keys starting with { randomProp: true }|543,969|272073|
|object.keys + reduce(FN, {})|1,350,995|675549|
|object.keys + reduce(FN, { __proto__: null })|745,856|372940|
|object.keys + reduce(FN, { newProp: true })|540,431|270323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:10:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":21086358.27421096,"samples":10547437},{"name":"{ ...object, __proto__: null }","opsSec":19407276.370222617,"samples":9707094},{"name":"{ ...object, newProp: true }","opsSec":687688.8186893319,"samples":347378},{"name":"structuredClone","opsSec":246116.80879464545,"samples":123059},{"name":"JSON.parse + JSON.stringify","opsSec":203215.7240533759,"samples":101682},{"name":"loop + object.keys starting with {}","opsSec":1303083.7416681815,"samples":652358},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":744818.2524005385,"samples":372413},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":543969.6504790112,"samples":272073},{"name":"object.keys + reduce(FN, {})","opsSec":1350995.4675499857,"samples":675549},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":745856.7829700597,"samples":372940},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":540431.2391107522,"samples":270323}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|247,355|123678|
|Sort using first char|1,239,389|619738|
|Sort using localeCompare|1,148,017|574197|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:16:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":247355.3910110273,"samples":123678},{"name":"Sort using first char","opsSec":1239389.7905249505,"samples":619738},{"name":"Sort using localeCompare","opsSec":1148017.147299159,"samples":574197}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,813|907|
|{...smallObject} - Total keys: 2|58,399,407|29206457|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,078|540|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,426|3214|
|{ ...bigObject, ...anotherBigObject }|1,136|569|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,929,492|5969253|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,552,419|13776218|
|{ ...smallObject, ...anotherSmallObject }|19,758,675|9889581|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:22:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.0266440116827,"samples":907},{"name":"{...smallObject} - Total keys: 2","opsSec":58399407.73537541,"samples":29206457},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1078.6325635675373,"samples":540},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6426.860928876409,"samples":3214},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1136.910464594465,"samples":569},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":11929492.624129869,"samples":5969253},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27552419.57875793,"samples":13776218},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19758675.53341199,"samples":9889581}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,361|1181|
|streams.web.Readable reading 1e3 * "some data"|476|239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:28:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2361.150590242064,"samples":1181},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":476.7934256035807,"samples":239}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,389|2196|
|streams.web.WritableStream writing 1e3 * "some data"|1,363|682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:33:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4389.864418757563,"samples":2196},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1363.4313182508827,"samples":682}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|162,275,052|81413957|
|Using backtick (`)|105,325,527|52770621|
|Using array.join|10,225,889|5112986|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:39:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":162275052.95563346,"samples":81413957},{"name":"Using backtick (`)","opsSec":105325527.10509764,"samples":52770621},{"name":"Using array.join","opsSec":10225889.90655583,"samples":5112986}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|60,308,133|30158027|
|(short string) (true) String#slice and strict comparison|46,838,187|23419101|
|(long string) (true) String#endsWith|46,900,188|23450383|
|(long string) (true) String#slice and strict comparison|44,036,572|22019177|
|(short string) (false) String#endsWith|57,003,329|28504097|
|(short string) (false) String#slice and strict comparison|54,791,881|27398430|
|(long string) (false) String#endsWith|50,158,508|25079267|
|(long string) (false) String#slice and strict comparison|48,825,966|24415328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:45:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":60308133.73279686,"samples":30158027},{"name":"(short string) (true) String#slice and strict comparison","opsSec":46838187.57383823,"samples":23419101},{"name":"(long string) (true) String#endsWith","opsSec":46900188.283480726,"samples":23450383},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44036572.016076796,"samples":22019177},{"name":"(short string) (false) String#endsWith","opsSec":57003329.90585913,"samples":28504097},{"name":"(short string) (false) String#slice and strict comparison","opsSec":54791881.28091552,"samples":27398430},{"name":"(long string) (false) String#endsWith","opsSec":50158508.41916071,"samples":25079267},{"name":"(long string) (false) String#slice and strict comparison","opsSec":48825966.168297604,"samples":24415328}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,547,575|7773803|
|Using indexof|15,941,226|7970616|
|Using RegExp.test|13,694,661|6847335|
|Using RegExp.text with cached regex pattern|14,585,435|7292941|
|Using new RegExp.test|4,323,029|2162017|
|Using new RegExp.test with cached regex pattern|4,895,483|2447744|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:51:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":15547575.309086341,"samples":7773803},{"name":"Using indexof","opsSec":15941226.516218077,"samples":7970616},{"name":"Using RegExp.test","opsSec":13694661.399752641,"samples":6847335},{"name":"Using RegExp.text with cached regex pattern","opsSec":14585435.539818125,"samples":7292941},{"name":"Using new RegExp.test","opsSec":4323029.863915329,"samples":2162017},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4895483.858420655,"samples":2447744}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|60,131,440|30253855|
|(short string) (true) String#slice and strict comparison|46,397,624|23204782|
|(long string) (true) String#startsWith|48,223,579|24111800|
|(long string) (true) String#slice and strict comparison|44,016,038|22009483|
|(short string) (false) String#startsWith|56,852,699|28431236|
|(short string) (false) String#slice and strict comparison|54,808,786|27405965|
|(long string) (false) String#startsWith|53,233,408|26616715|
|(long string) (false) String#slice and strict comparison|48,980,614|24528955|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:57:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":60131440.87607862,"samples":30253855},{"name":"(short string) (true) String#slice and strict comparison","opsSec":46397624.31374484,"samples":23204782},{"name":"(long string) (true) String#startsWith","opsSec":48223579.55320227,"samples":24111800},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44016038.229201145,"samples":22009483},{"name":"(short string) (false) String#startsWith","opsSec":56852699.816839285,"samples":28431236},{"name":"(short string) (false) String#slice and strict comparison","opsSec":54808786.71608183,"samples":27405965},{"name":"(long string) (false) String#startsWith","opsSec":53233408.49370297,"samples":26616715},{"name":"(long string) (false) String#slice and strict comparison","opsSec":48980614.47598528,"samples":24528955}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|24,556,915|12278463|
|Using this|84,644,123|42326495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:07:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":24556915.145843506,"samples":12278463},{"name":"Using this","opsSec":84644123.52806044,"samples":42326495}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,823,429|4913360|
|Date.now()|18,942,215|9472239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:12:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":9823429.56368021,"samples":4913360},{"name":"Date.now()","opsSec":18942215.882694855,"samples":9472239}]}-->
