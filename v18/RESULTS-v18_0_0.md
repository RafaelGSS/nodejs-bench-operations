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
|Raw usage private field|81,088,968|40547100|
|Raw usage underscore usage|80,684,087|40350262|
|Manipulating private properties using #|73,973,255|36992224|
|Manipulating private properties using underscore(_)|75,822,001|37912639|
|Manipulating private properties using Symbol|75,508,704|37758221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:18:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Raw usage private field","samples":40547100,"opsSec":81088968.46411058},{"name":"Raw usage underscore usage","samples":40350262,"opsSec":80684087.19912396},{"name":"Manipulating private properties using #","samples":36992224,"opsSec":73973255.1067698},{"name":"Manipulating private properties using underscore(_)","samples":37912639,"opsSec":75822001.57966773},{"name":"Manipulating private properties using Symbol","samples":37758221,"opsSec":75508704.17003147}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,612,446|1806285|
|Adding property in the object creation - small object|3,723,043|1861679|
|Adding property after the function creation - small class|228,625|114322|
|Adding property in the function creation - small class|223,626|114274|
|Adding property after the class creation - small class|197,109|99870|
|Adding property in the class creation - small class|196,606|99427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:20:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Adding property after object creation - small object","samples":1806285,"opsSec":3612446.4760052},{"name":"Adding property in the object creation - small object","samples":1861679,"opsSec":3723043.0901232646},{"name":"Adding property after the function creation - small class","samples":114322,"opsSec":228625.87591231294},{"name":"Adding property in the function creation - small class","samples":114274,"opsSec":223626.18272035627},{"name":"Adding property after the class creation - small class","samples":99870,"opsSec":197109.74314585357},{"name":"Adding property in the class creation - small class","samples":99427,"opsSec":196606.33659175673}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|106,347,546|53193637|
|Getter|55,588,958|27809544|
|Method|106,020,861|53013346|
|DefineProperty (getter)|98,874,375|49451184|
|DefineProperty (getter & enumerable=false)|53,276,766|26641082|
|DefineProperty (getter & configurable=false)|106,193,835|53096931|
|DefineProperty (getter & enumerable=false & configurable=false)|55,397,492|27711210|
|DefineProperty (writable)|104,247,631|52123827|
|DefineProperty (writable & enumerable=false)|106,318,435|53168122|
|DefineProperty (writable & enumerable=false & configurable=false)|106,705,604|53356609|
|DefineProperties (getter)|50,305,324|25169981|
|DefineProperties (getter & enumerable=false)|49,631,099|24828953|
|DefineProperties (getter & enumerable=false & configurable=false)|50,154,582|25077301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:24:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Getter (class)","samples":53193637,"opsSec":106347546.38518217},{"name":"Getter","samples":27809544,"opsSec":55588958.56210351},{"name":"Method","samples":53013346,"opsSec":106020861.27671322},{"name":"DefineProperty (getter)","samples":49451184,"opsSec":98874375.47780973},{"name":"DefineProperty (getter & enumerable=false)","samples":26641082,"opsSec":53276766.104611814},{"name":"DefineProperty (getter & configurable=false)","samples":53096931,"opsSec":106193835.45154114},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":27711210,"opsSec":55397492.1256983},{"name":"DefineProperty (writable)","samples":52123827,"opsSec":104247631.27401638},{"name":"DefineProperty (writable & enumerable=false)","samples":53168122,"opsSec":106318435.02422284},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":53356609,"opsSec":106705604.55511498},{"name":"DefineProperties (getter)","samples":25169981,"opsSec":50305324.7716817},{"name":"DefineProperties (getter & enumerable=false)","samples":24828953,"opsSec":49631099.15146411},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":25077301,"opsSec":50154582.54002198}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|103,116,997|51648701|
|Setter|9,999,723|5005086|
|Method|101,981,652|51017271|
|DefineProperty (setter)|103,728,005|51904971|
|DefineProperty (setter & enumerable=false)|9,912,342|4956729|
|DefineProperty (setter & configurable=false)|9,959,310|4979885|
|DefineProperty (setter & enumerable=false & configurable=false)|9,929,479|4966649|
|DefineProperty (writable)|98,990,557|49528132|
|DefineProperty (writable & enumerable=false)|97,781,445|48900887|
|DefineProperty (writable & enumerable=false & configurable=false)|98,471,565|49272725|
|DefineProperties (setter)|98,488,533|49263933|
|DefineProperties (setter & enumerable=false)|10,083,399|5044252|
|DefineProperties (setter & enumerable=false & configurable=false)|9,971,799|4985903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:33:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Setter (class)","samples":51648701,"opsSec":103116997.36946417},{"name":"Setter","samples":5005086,"opsSec":9999723.369049469},{"name":"Method","samples":51017271,"opsSec":101981652.88706963},{"name":"DefineProperty (setter)","samples":51904971,"opsSec":103728005.17415282},{"name":"DefineProperty (setter & enumerable=false)","samples":4956729,"opsSec":9912342.048707472},{"name":"DefineProperty (setter & configurable=false)","samples":4979885,"opsSec":9959310.736344703},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":4966649,"opsSec":9929479.201734846},{"name":"DefineProperty (writable)","samples":49528132,"opsSec":98990557.23580472},{"name":"DefineProperty (writable & enumerable=false)","samples":48900887,"opsSec":97781445.23753512},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":49272725,"opsSec":98471565.2090786},{"name":"DefineProperties (setter)","samples":49263933,"opsSec":98488533.22541697},{"name":"DefineProperties (setter & enumerable=false)","samples":5044252,"opsSec":10083399.641933657},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":4985903,"opsSec":9971799.119458606}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,337,313|1668657|
|Using replaceAll()|2,990,885|1495499|
|Using replaceAll(//g)|3,020,554|1510831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:35:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1668657,"opsSec":3337313.0855762144},{"name":"Using replaceAll()","samples":1495499,"opsSec":2990885.775983914},{"name":"Using replaceAll(//g)","samples":1510831,"opsSec":3020554.278170675}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|19,237,474|9618765|
|{ ...object, __proto__: null }|19,883,888|9942140|
|{ ...object, newProp: true }|671,689|336972|
|structuredClone|245,020|122512|
|JSON.parse + JSON.stringify|194,939|97471|
|loop + object.keys starting with {}|1,264,101|632056|
|loop + object.keys starting with { __proto__: null }|680,169|340479|
|loop + object.keys starting with { randomProp: true }|518,593|259629|
|object.keys + reduce(FN, {})|1,269,420|634753|
|object.keys + reduce(FN, { __proto__: null })|671,645|335925|
|object.keys + reduce(FN, { newProp: true })|521,429|260716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:41:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{ ...object }","samples":9618765,"opsSec":19237474.44217381},{"name":"{ ...object, __proto__: null }","samples":9942140,"opsSec":19883888.526002698},{"name":"{ ...object, newProp: true }","samples":336972,"opsSec":671689.7313455953},{"name":"structuredClone","samples":122512,"opsSec":245020.88284432847},{"name":"JSON.parse + JSON.stringify","samples":97471,"opsSec":194939.71491666176},{"name":"loop + object.keys starting with {}","samples":632056,"opsSec":1264101.11356121},{"name":"loop + object.keys starting with { __proto__: null }","samples":340479,"opsSec":680169.3314171738},{"name":"loop + object.keys starting with { randomProp: true }","samples":259629,"opsSec":518593.71878498426},{"name":"object.keys + reduce(FN, {})","samples":634753,"opsSec":1269420.6619265813},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":335925,"opsSec":671645.3778624713},{"name":"object.keys + reduce(FN, { newProp: true })","samples":260716,"opsSec":521429.0455830277}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|245,457|122743|
|Sort using first char|1,174,112|589770|
|Sort using localeCompare|1,053,397|526913|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:45:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Sort using default","samples":122743,"opsSec":245457.30947692448},{"name":"Sort using first char","samples":589770,"opsSec":1174112.9189885918},{"name":"Sort using localeCompare","samples":526913,"opsSec":1053397.9075175682}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,673|839|
|{...smallObject} - Total keys: 2|37,841,949|18921239|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,033|517|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,439|3221|
|{ ...bigObject, ...anotherBigObject }|1,080|541|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,243,910|5146924|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,668,047|13336397|
|{ ...smallObject, ...anotherSmallObject }|19,378,588|9694808|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:51:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":839,"opsSec":1673.67361729888},{"name":"{...smallObject} - Total keys: 2","samples":18921239,"opsSec":37841949.120919086},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":517,"opsSec":1033.3980187857087},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3221,"opsSec":6439.955352815214},{"name":"{ ...bigObject, ...anotherBigObject }","samples":541,"opsSec":1080.2276208519975},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5146924,"opsSec":10243910.452642117},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13336397,"opsSec":26668047.88751746},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9694808,"opsSec":19378588.26553291}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,065|1034|
|streams.web.Readable reading 1e3 * "some data"|474|238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:54:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":1034,"opsSec":2065.865077185015},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":238,"opsSec":474.14436962924424}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,191|2100|
|streams.web.WritableStream writing 1e3 * "some data"|1,498|765|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:02:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":2100,"opsSec":4191.894778618382},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":765,"opsSec":1498.216476103976}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|106,811,992|53406010|
|Using backtick (`)|98,869,438|49446822|
|Using array.join|10,058,264|5029420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:06:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using + sign","samples":53406010,"opsSec":106811992.22888203},{"name":"Using backtick (`)","samples":49446822,"opsSec":98869438.19092546},{"name":"Using array.join","samples":5029420,"opsSec":10058264.22472272}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|53,337,319|26668671|
|(short string) (true) String#slice and strict comparison|46,716,507|23358262|
|(long string) (true) String#endsWith|49,721,735|24860877|
|(long string) (true) String#slice and strict comparison|43,968,287|21987405|
|(short string) (false) String#endsWith|57,103,666|28551842|
|(short string) (false) String#slice and strict comparison|54,755,344|27382715|
|(long string) (false) String#endsWith|54,142,110|27077952|
|(long string) (false) String#slice and strict comparison|48,802,175|24401566|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:08:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26668671,"opsSec":53337319.27830199},{"name":"(short string) (true) String#slice and strict comparison","samples":23358262,"opsSec":46716507.92952127},{"name":"(long string) (true) String#endsWith","samples":24860877,"opsSec":49721735.80184469},{"name":"(long string) (true) String#slice and strict comparison","samples":21987405,"opsSec":43968287.6562725},{"name":"(short string) (false) String#endsWith","samples":28551842,"opsSec":57103666.29786345},{"name":"(short string) (false) String#slice and strict comparison","samples":27382715,"opsSec":54755344.50358519},{"name":"(long string) (false) String#endsWith","samples":27077952,"opsSec":54142110.43109391},{"name":"(long string) (false) String#slice and strict comparison","samples":24401566,"opsSec":48802175.3797582}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|14,892,178|7449063|
|Using indexof|15,783,475|7891740|
|Using RegExp.test|13,532,878|6767172|
|Using RegExp.text with cached regex pattern|14,584,102|7292504|
|Using new RegExp.test|4,285,199|2143434|
|Using new RegExp.test with cached regex pattern|4,841,194|2420881|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:15:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":7449063,"opsSec":14892178.30226093},{"name":"Using indexof","samples":7891740,"opsSec":15783475.359658245},{"name":"Using RegExp.test","samples":6767172,"opsSec":13532878.849338498},{"name":"Using RegExp.text with cached regex pattern","samples":7292504,"opsSec":14584102.677242206},{"name":"Using new RegExp.test","samples":2143434,"opsSec":4285199.89166777},{"name":"Using new RegExp.test with cached regex pattern","samples":2420881,"opsSec":4841194.563585202}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|52,564,478|26284247|
|(short string) (true) String#slice and strict comparison|47,713,609|23862004|
|(long string) (true) String#startsWith|49,951,753|24975891|
|(long string) (true) String#slice and strict comparison|44,009,679|22010824|
|(short string) (false) String#startsWith|56,278,061|28139041|
|(short string) (false) String#slice and strict comparison|54,739,748|27374226|
|(long string) (false) String#startsWith|53,004,066|26502254|
|(long string) (false) String#slice and strict comparison|48,954,746|24486472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:20:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":26284247,"opsSec":52564478.17899608},{"name":"(short string) (true) String#slice and strict comparison","samples":23862004,"opsSec":47713609.67761574},{"name":"(long string) (true) String#startsWith","samples":24975891,"opsSec":49951753.42759704},{"name":"(long string) (true) String#slice and strict comparison","samples":22010824,"opsSec":44009679.039669015},{"name":"(short string) (false) String#startsWith","samples":28139041,"opsSec":56278061.96500994},{"name":"(short string) (false) String#slice and strict comparison","samples":27374226,"opsSec":54739748.81785595},{"name":"(long string) (false) String#startsWith","samples":26502254,"opsSec":53004066.05209726},{"name":"(long string) (false) String#slice and strict comparison","samples":24486472,"opsSec":48954746.345869325}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|22,788,255|11407684|
|Using this|84,758,528|42382096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:22:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using super","samples":11407684,"opsSec":22788255.354156815},{"name":"Using this","samples":42382096,"opsSec":84758528.60463569}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,484,442|4746628|
|Date.now()|18,890,563|9446634|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:30:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":4746628,"opsSec":9484442.354315637},{"name":"Date.now()","samples":9446634,"opsSec":18890563.21137827}]}-->
