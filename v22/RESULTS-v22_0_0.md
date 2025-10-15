## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|106,734,349|53368519|
|Using dot notation|80,134,519|40080109|
|Using define property (writable)|4,831,436|2415720|
|Using define property initialized (writable)|6,971,426|3486339|
|Using define property (getter)|2,399,654|1209255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:49:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Directly in the object","samples":53368519,"opsSec":106734349.57520291},{"name":"Using dot notation","samples":40080109,"opsSec":80134519.18023698},{"name":"Using define property (writable)","samples":2415720,"opsSec":4831436.30878266},{"name":"Using define property initialized (writable)","samples":3486339,"opsSec":6971426.3779938},{"name":"Using define property (getter)","samples":1209255,"opsSec":2399654.7845202754}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.011ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.319ms
new Array(length)|10,000|0.146ms
array.push|1,000,000|24.948ms
new Array(length)|1,000,000|14.231ms
array.push|10,000,000|253.239ms
new Array(length)|10,000,000|74.577ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.038ms
array.push|10,000|0.462ms
new Array(length)|10,000|0.209ms
array.push|1,000,000|20.169ms
new Array(length)|1,000,000|12.017ms
array.push|10,000,000|224.613ms
new Array(length)|10,000,000|79.891ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|298|150|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 20:57:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Array","samples":150,"opsSec":298.8705663365906},{"name":"Array.from","samples":12,"opsSec":23.806982650306274}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,844|2423|
|new Blob (1024)|589|295|
|text (128)|4,697|2349|
|text (1024)|590|297|
|arrayBuffer (128)|4,711|2356|
|arrayBuffer (1024)|592|297|
|slice (0, 64)|198,108|99179|
|slice (0, 512)|13,474|6740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:01:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Blob (128)","samples":2423,"opsSec":4844.3178978077085},{"name":"new Blob (1024)","samples":295,"opsSec":589.4724975671571},{"name":"text (128)","samples":2349,"opsSec":4697.1094937995085},{"name":"text (1024)","samples":297,"opsSec":590.6757642189887},{"name":"arrayBuffer (128)","samples":2356,"opsSec":4711.96775129271},{"name":"arrayBuffer (1024)","samples":297,"opsSec":592.9769416264274},{"name":"slice (0, 64)","samples":99179,"opsSec":198108.66360572446},{"name":"slice (0, 512)","samples":6740,"opsSec":13474.261554540628}]}-->

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
|Deflate|132.45 ms|1|
|Gzip|134.17 ms|1|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:38:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Deflate","samples":1,"totalTime":0.132449537},{"name":"Gzip","samples":1,"totalTime":0.134165367}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,943|3472|
|crypto.verify('RSA-SHA256')|6,852|3427|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:38:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","samples":3472,"opsSec":6943.336369796447},{"name":"crypto.verify('RSA-SHA256')","samples":3427,"opsSec":6852.436424761471}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,315,280|657876|
|fromUnixToISOString(new Date())|1,843,183|921608|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:44:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":657876,"opsSec":1315280.2720998507},{"name":"fromUnixToISOString(new Date())","samples":921608,"opsSec":1843183.7516570813}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,661|9834|
|Intl.DateTimeFormat().format(new Date())|19,013|9524|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,803|9404|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|17,613|8860|
|Reusing Intl.DateTimeFormat()|373,182|186638|
|Date.toLocaleDateString()|697,193|348598|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,199|11602|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:51:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","samples":9834,"opsSec":19661.376318254894},{"name":"Intl.DateTimeFormat().format(new Date())","samples":9524,"opsSec":19013.048958543175},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","samples":9404,"opsSec":18803.683915216203},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","samples":8860,"opsSec":17613.76945413501},{"name":"Reusing Intl.DateTimeFormat()","samples":186638,"opsSec":373182.683430912},{"name":"Date.toLocaleDateString()","samples":348598,"opsSec":697193.7885013028},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","samples":11602,"opsSec":23199.61304597146}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|918,087|459044|
|Using brackets {}|974,309|487209|
|Using '' + |887,502|443801|
|Using date.toString()|992,369|496186|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:52:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":459044,"opsSec":918087.5483009262},{"name":"Using brackets {}","samples":487209,"opsSec":974309.7697735344},{"name":"Using '' + ","samples":443801,"opsSec":887502.5056441022},{"name":"Using date.toString()","samples":496186,"opsSec":992369.8703742583}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,082,012|2042666|
|Using delete property (proto: null)|18,025,966|9013853|
|Using delete property (cached proto: null)|4,147,324|2074274|
|Using undefined assignment|79,168,234|39585448|
|Using undefined assignment (proto: null)|19,494,600|9749498|
|Using undefined property (cached proto: null)|78,518,570|39272373|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:59:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2042666,"opsSec":4082012.7032063617},{"name":"Using delete property (proto: null)","samples":9013853,"opsSec":18025966.99891168},{"name":"Using delete property (cached proto: null)","samples":2074274,"opsSec":4147324.20757283},{"name":"Using undefined assignment","samples":39585448,"opsSec":79168234.04729839},{"name":"Using undefined assignment (proto: null)","samples":9749498,"opsSec":19494600.66935469},{"name":"Using undefined property (cached proto: null)","samples":39272373,"opsSec":78518570.57820062}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|329,366|164699|
|NodeError|306,249|153129|
|NodeError Range|284,291|142175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:02:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Error","samples":164699,"opsSec":329366.6969891182},{"name":"NodeError","samples":153129,"opsSec":306249.25168387644},{"name":"NodeError Range","samples":142175,"opsSec":284291.3228395486}]}-->

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
|using Array.includes|70,399,377|35286464|
|using Array.includes (first item)|80,475,749|40245398|
|Using raw comparison|96,206,580|48113660|
|Using raw comparison (first item)|95,175,572|47587793|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:06:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":35286464,"opsSec":70399377.34299272},{"name":"using Array.includes (first item)","samples":40245398,"opsSec":80475749.28820407},{"name":"Using raw comparison","samples":48113660,"opsSec":96206580.55501658},{"name":"Using raw comparison (first item)","samples":47587793,"opsSec":95175572.48506871}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|42,194,153|21111438|
|Using Object.getOwnPropertyNames()|41,724,088|20864664|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:11:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using Object.keys()","samples":21111438,"opsSec":42194153.42710249},{"name":"Using Object.getOwnPropertyNames()","samples":20864664,"opsSec":41724088.87305657}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|97,596,953|48798528|
|Length = 10_000 - Array.at|94,089,201|48312381|
|Length = 1_000_000 - Array.at|98,095,884|49053214|
|Length = 100 - Array[length - 1]|92,091,883|46046243|
|Length = 10_000 - Array[length - 1]|96,920,742|48460385|
|Length = 1_000_000 - Array[length - 1]|97,232,868|48616442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:18:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":48798528,"opsSec":97596953.5231988},{"name":"Length = 10_000 - Array.at","samples":48312381,"opsSec":94089201.59708034},{"name":"Length = 1_000_000 - Array.at","samples":49053214,"opsSec":98095884.45814668},{"name":"Length = 100 - Array[length - 1]","samples":46046243,"opsSec":92091883.35071534},{"name":"Length = 10_000 - Array[length - 1]","samples":48460385,"opsSec":96920742.66835056},{"name":"Length = 1_000_000 - Array[length - 1]","samples":48616442,"opsSec":97232868.83167246}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|93,583,413|46791739|
|~ (small)|94,347,108|47173580|
|Math.floor (long)|93,027,563|46513988|
|~ (long)|94,430,010|47215022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:23:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":46791739,"opsSec":93583413.80177814},{"name":"~ (small)","samples":47173580,"opsSec":94347108.48647876},{"name":"Math.floor (long)","samples":46513988,"opsSec":93027563.88789198},{"name":"~ (long)","samples":47215022,"opsSec":94430010.00519639}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|28,313,959|14176396|
|Object.create({})|1,989,633|1003301|
|new Function with empty prototype|71,337,324|35673007|
|Empty class|72,237,132|36120467|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:29:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Object.create(null)","samples":14176396,"opsSec":28313959.51777721},{"name":"Object.create({})","samples":1003301,"opsSec":1989633.8375771323},{"name":"new Function with empty prototype","samples":35673007,"opsSec":71337324.54317205},{"name":"Empty class","samples":36120467,"opsSec":72237132.73760109}]}-->

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
|Using parseInt(x, 10) - small number (2 len)|91,021,958|45510993|
|Using parseInt(x, 10) - big number (10 len)|90,877,800|45560025|
|Using + - small number (2 len)|91,838,153|45919869|
|Using + - big number (10 len)|90,669,952|45340409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":45510993,"opsSec":91021958.87545626},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":45560025,"opsSec":90877800.68183447},{"name":"Using + - small number (2 len)","samples":45919869,"opsSec":91838153.05715454},{"name":"Using + - big number (10 len)","samples":45340409,"opsSec":90669952.65689331}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,010,088|505378|
|Using ? operator to avoid rejection|1,016,675|520097|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:35:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using if to check function existence","samples":505378,"opsSec":1010088.1721242947},{"name":"Using ? operator to avoid rejection","samples":520097,"opsSec":1016675.1778762261}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|94,320,663|47305859|
|Raw usage underscore usage|96,221,156|48198904|
|Manipulating private properties using #|97,220,695|48610352|
|Manipulating private properties using underscore(_)|97,549,111|48779195|
|Manipulating private properties using Symbol|96,854,700|48636330|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:43:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Raw usage private field","samples":47305859,"opsSec":94320663.67331953},{"name":"Raw usage underscore usage","samples":48198904,"opsSec":96221156.34882845},{"name":"Manipulating private properties using #","samples":48610352,"opsSec":97220695.44457881},{"name":"Manipulating private properties using underscore(_)","samples":48779195,"opsSec":97549111.32362913},{"name":"Manipulating private properties using Symbol","samples":48636330,"opsSec":96854700.39317115}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,827,316|3913661|
|Adding property in the object creation - small object|7,843,191|3921598|
|Adding property after the function creation - small class|272,490|137380|
|Adding property in the function creation - small class|283,533|141767|
|Adding property after the class creation - small class|267,396|135411|
|Adding property in the class creation - small class|267,016|133509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:48:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3913661,"opsSec":7827316.865280136},{"name":"Adding property in the object creation - small object","samples":3921598,"opsSec":7843191.090162377},{"name":"Adding property after the function creation - small class","samples":137380,"opsSec":272490.39047900727},{"name":"Adding property in the function creation - small class","samples":141767,"opsSec":283533.6591925417},{"name":"Adding property after the class creation - small class","samples":135411,"opsSec":267396.5486017235},{"name":"Adding property in the class creation - small class","samples":133509,"opsSec":267016.76958672574}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|97,319,728|48659900|
|Getter|47,691,294|23846150|
|Method|89,110,855|44558730|
|DefineProperty (getter)|97,917,081|48958550|
|DefineProperty (getter & enumerable=false)|50,944,628|25473319|
|DefineProperty (getter & configurable=false)|97,868,291|48934150|
|DefineProperty (getter & enumerable=false & configurable=false)|50,992,534|25497581|
|DefineProperty (writable)|97,893,629|48946822|
|DefineProperty (writable & enumerable=false)|95,543,165|47771607|
|DefineProperty (writable & enumerable=false & configurable=false)|97,890,537|48945276|
|DefineProperties (getter)|50,538,762|25269388|
|DefineProperties (getter & enumerable=false)|50,916,143|25458501|
|DefineProperties (getter & enumerable=false & configurable=false)|48,991,620|24495842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:50:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Getter (class)","samples":48659900,"opsSec":97319728.17804061},{"name":"Getter","samples":23846150,"opsSec":47691294.572127834},{"name":"Method","samples":44558730,"opsSec":89110855.28162825},{"name":"DefineProperty (getter)","samples":48958550,"opsSec":97917081.39575455},{"name":"DefineProperty (getter & enumerable=false)","samples":25473319,"opsSec":50944628.845727585},{"name":"DefineProperty (getter & configurable=false)","samples":48934150,"opsSec":97868291.58332692},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","samples":25497581,"opsSec":50992534.660644144},{"name":"DefineProperty (writable)","samples":48946822,"opsSec":97893629.70753005},{"name":"DefineProperty (writable & enumerable=false)","samples":47771607,"opsSec":95543165.84624442},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":48945276,"opsSec":97890537.12063837},{"name":"DefineProperties (getter)","samples":25269388,"opsSec":50538762.25345666},{"name":"DefineProperties (getter & enumerable=false)","samples":25458501,"opsSec":50916143.859311394},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","samples":24495842,"opsSec":48991620.60484294}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|93,475,955|46737995|
|Setter|11,666,713|5833533|
|Method|92,080,179|46040113|
|DefineProperty (setter)|91,851,886|45925963|
|DefineProperty (setter & enumerable=false)|11,711,679|5856060|
|DefineProperty (setter & configurable=false)|11,802,598|5901637|
|DefineProperty (setter & enumerable=false & configurable=false)|11,560,582|5780407|
|DefineProperty (writable)|87,473,420|43736723|
|DefineProperty (writable & enumerable=false)|88,506,506|44253266|
|DefineProperty (writable & enumerable=false & configurable=false)|90,561,719|45280881|
|DefineProperties (setter)|90,720,494|45360521|
|DefineProperties (setter & enumerable=false)|11,653,719|5826865|
|DefineProperties (setter & enumerable=false & configurable=false)|11,555,153|5779415|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:57:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Setter (class)","samples":46737995,"opsSec":93475955.97475204},{"name":"Setter","samples":5833533,"opsSec":11666713.361921921},{"name":"Method","samples":46040113,"opsSec":92080179.0391087},{"name":"DefineProperty (setter)","samples":45925963,"opsSec":91851886.3199851},{"name":"DefineProperty (setter & enumerable=false)","samples":5856060,"opsSec":11711679.617423026},{"name":"DefineProperty (setter & configurable=false)","samples":5901637,"opsSec":11802598.348454945},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","samples":5780407,"opsSec":11560582.279688787},{"name":"DefineProperty (writable)","samples":43736723,"opsSec":87473420.10786764},{"name":"DefineProperty (writable & enumerable=false)","samples":44253266,"opsSec":88506506.51012611},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","samples":45280881,"opsSec":90561719.97936194},{"name":"DefineProperties (setter)","samples":45360521,"opsSec":90720494.41109572},{"name":"DefineProperties (setter & enumerable=false)","samples":5826865,"opsSec":11653719.581574693},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","samples":5779415,"opsSec":11555153.843356274}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,408,984|1704601|
|Using replaceAll()|3,194,826|1597462|
|Using replaceAll(//g)|3,080,988|1541005|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1704601,"opsSec":3408984.7317671054},{"name":"Using replaceAll()","samples":1597462,"opsSec":3194826.3213800504},{"name":"Using replaceAll(//g)","samples":1541005,"opsSec":3080988.091707766}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|24,373,779|12190081|
|{ ...object, __proto__: null }|2,497,333|1248667|
|{ ...object, newProp: true }|22,590,681|11295345|
|structuredClone|300,572|150356|
|JSON.parse + JSON.stringify|292,999|146569|
|loop + object.keys starting with {}|1,623,248|812011|
|loop + object.keys starting with { __proto__: null }|890,671|445353|
|loop + object.keys starting with { randomProp: true }|613,285|306680|
|object.keys + reduce(FN, {})|1,673,681|837447|
|object.keys + reduce(FN, { __proto__: null })|828,235|414132|
|object.keys + reduce(FN, { newProp: true })|604,790|302461|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:07:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{ ...object }","samples":12190081,"opsSec":24373779.335900426},{"name":"{ ...object, __proto__: null }","samples":1248667,"opsSec":2497333.1858693813},{"name":"{ ...object, newProp: true }","samples":11295345,"opsSec":22590681.099271648},{"name":"structuredClone","samples":150356,"opsSec":300572.62747836456},{"name":"JSON.parse + JSON.stringify","samples":146569,"opsSec":292999.1330608858},{"name":"loop + object.keys starting with {}","samples":812011,"opsSec":1623248.1197054265},{"name":"loop + object.keys starting with { __proto__: null }","samples":445353,"opsSec":890671.3136963595},{"name":"loop + object.keys starting with { randomProp: true }","samples":306680,"opsSec":613285.3852468894},{"name":"object.keys + reduce(FN, {})","samples":837447,"opsSec":1673681.2405310238},{"name":"object.keys + reduce(FN, { __proto__: null })","samples":414132,"opsSec":828235.1177849725},{"name":"object.keys + reduce(FN, { newProp: true })","samples":302461,"opsSec":604790.800312525}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|303,691|152054|
|Sort using first char|1,311,070|655647|
|Sort using localeCompare|1,257,270|628637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:13:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Sort using default","samples":152054,"opsSec":303691.2378331144},{"name":"Sort using first char","samples":655647,"opsSec":1311070.7482508463},{"name":"Sort using localeCompare","samples":628637,"opsSec":1257270.250820112}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,717|859|
|{...smallObject} - Total keys: 2|38,478,479|19264644|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,036|520|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,879|3442|
|{ ...bigObject, ...anotherBigObject }|1,112|558|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,041,158|6020759|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,660,071|13830041|
|{ ...smallObject, ...anotherSmallObject }|20,287,050|10145591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:18:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":859,"opsSec":1717.3093119332152},{"name":"{...smallObject} - Total keys: 2","samples":19264644,"opsSec":38478479.476559974},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":520,"opsSec":1036.7652199402212},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3442,"opsSec":6879.772792405433},{"name":"{ ...bigObject, ...anotherBigObject }","samples":558,"opsSec":1112.5405595801478},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6020759,"opsSec":12041158.065703101},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13830041,"opsSec":27660071.544492956},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10145591,"opsSec":20287050.9478155}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,905|953|
|streams.web.Readable reading 1e3 * "some data"|1,522|762|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:22:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","samples":953,"opsSec":1905.9891091782301},{"name":"streams.web.Readable reading 1e3 * \"some data\"","samples":762,"opsSec":1522.6292530149733}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,206|3104|
|streams.web.WritableStream writing 1e3 * "some data"|1,709|860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:28:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","samples":3104,"opsSec":6206.764481462321},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","samples":860,"opsSec":1709.459595216983}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,719,599|48359813|
|Using backtick (`)|97,426,758|48715512|
|Using array.join|10,343,149|5178783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:33:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48359813,"opsSec":96719599.11195146},{"name":"Using backtick (`)","samples":48715512,"opsSec":97426758.07197106},{"name":"Using array.join","samples":5178783,"opsSec":10343149.387403058}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,256,682|42354448|
|(short string) (true) String#slice and strict comparison|57,060,787|28531391|
|(long string) (true) String#endsWith|63,825,335|31918276|
|(long string) (true) String#slice and strict comparison|52,467,569|26233855|
|(short string) (false) String#endsWith|91,851,296|45952399|
|(short string) (false) String#slice and strict comparison|58,433,451|29216781|
|(long string) (false) String#endsWith|85,066,314|42539442|
|(long string) (false) String#slice and strict comparison|52,589,696|26294904|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:38:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42354448,"opsSec":84256682.12985422},{"name":"(short string) (true) String#slice and strict comparison","samples":28531391,"opsSec":57060787.95370417},{"name":"(long string) (true) String#endsWith","samples":31918276,"opsSec":63825335.46319637},{"name":"(long string) (true) String#slice and strict comparison","samples":26233855,"opsSec":52467569.177044325},{"name":"(short string) (false) String#endsWith","samples":45952399,"opsSec":91851296.82403113},{"name":"(short string) (false) String#slice and strict comparison","samples":29216781,"opsSec":58433451.44390987},{"name":"(long string) (false) String#endsWith","samples":42539442,"opsSec":85066314.09103203},{"name":"(long string) (false) String#slice and strict comparison","samples":26294904,"opsSec":52589696.29948506}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,649,289|7824647|
|Using indexof|15,907,823|7954858|
|Using RegExp.test|13,298,580|6650226|
|Using RegExp.text with cached regex pattern|14,272,884|7136479|
|Using new RegExp.test|4,744,731|2373143|
|Using new RegExp.test with cached regex pattern|5,268,936|2634473|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:44:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using includes","samples":7824647,"opsSec":15649289.180018933},{"name":"Using indexof","samples":7954858,"opsSec":15907823.827986958},{"name":"Using RegExp.test","samples":6650226,"opsSec":13298580.570547791},{"name":"Using RegExp.text with cached regex pattern","samples":7136479,"opsSec":14272884.865737947},{"name":"Using new RegExp.test","samples":2373143,"opsSec":4744731.995887242},{"name":"Using new RegExp.test with cached regex pattern","samples":2634473,"opsSec":5268936.389460026}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,410,633|42238445|
|(short string) (true) String#slice and strict comparison|57,242,602|28621438|
|(long string) (true) String#startsWith|64,094,541|32049043|
|(long string) (true) String#slice and strict comparison|52,588,540|26299808|
|(short string) (false) String#startsWith|90,661,961|45337328|
|(short string) (false) String#slice and strict comparison|58,394,219|29203769|
|(long string) (false) String#startsWith|84,190,907|42095476|
|(long string) (false) String#slice and strict comparison|52,724,148|26367012|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:49:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42238445,"opsSec":84410633.56139866},{"name":"(short string) (true) String#slice and strict comparison","samples":28621438,"opsSec":57242602.38036062},{"name":"(long string) (true) String#startsWith","samples":32049043,"opsSec":64094541.0591231},{"name":"(long string) (true) String#slice and strict comparison","samples":26299808,"opsSec":52588540.327521615},{"name":"(short string) (false) String#startsWith","samples":45337328,"opsSec":90661961.51214908},{"name":"(short string) (false) String#slice and strict comparison","samples":29203769,"opsSec":58394219.79671408},{"name":"(long string) (false) String#startsWith","samples":42095476,"opsSec":84190907.21043736},{"name":"(long string) (false) String#slice and strict comparison","samples":26367012,"opsSec":52724148.13436466}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|89,559,372|44822839|
|Using this|96,346,965|48173495|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:52:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using super","samples":44822839,"opsSec":89559372.14073041},{"name":"Using this","samples":48173495,"opsSec":96346965.142483}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,077,906|4554196|
|Date.now()|20,418,090|10209056|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:57:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4554196,"opsSec":9077906.610332808},{"name":"Date.now()","samples":10209056,"opsSec":20418090.07097126}]}-->
