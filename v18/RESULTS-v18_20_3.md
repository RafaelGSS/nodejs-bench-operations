## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|114,811,061|57421649|
|Using dot notation|74,526,862|37289026|
|Using define property (writable)|3,852,599|1926579|
|Using define property initialized (writable)|5,437,804|2719472|
|Using define property (getter)|2,109,718|1054860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:41:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":114811061.57975176,"samples":57421649},{"name":"Using dot notation","opsSec":74526862.62818894,"samples":37289026},{"name":"Using define property (writable)","opsSec":3852599.7891113563,"samples":1926579},{"name":"Using define property initialized (writable)","opsSec":5437804.138372123,"samples":2719472},{"name":"Using define property (getter)","opsSec":2109718.3164447835,"samples":1054860}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.371ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|25.806ms
new Array(length)|1,000,000|7.785ms
array.push|100,000,000|1,840.83ms
new Array(length)|100,000,000|4,054.91ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.017ms
array.push|100|0.032ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.473ms
new Array(length)|10,000|3.267ms
array.push|1,000,000|250.209ms
new Array(length)|1,000,000|4.581ms
array.push|100,000,000|2,294.551ms
new Array(length)|100,000,000|4,352.978ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|255|129|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:56:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":255.9467643428301,"samples":129},{"name":"Array.from","opsSec":20.382277583699892,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,347|2174|
|new Blob (1024)|495|248|
|text (128)|45,551|22776|
|text (1024)|30,449|15225|
|arrayBuffer (128)|46,339|23170|
|arrayBuffer (1024)|31,371|15686|
|slice (0, 64)|88,873|44437|
|slice (0, 512)|49,001|24501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:11:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4347.425539880528,"samples":2174},{"name":"new Blob (1024)","opsSec":495.8536150869061,"samples":248},{"name":"text (128)","opsSec":45551.87190703357,"samples":22776},{"name":"text (1024)","opsSec":30449.93867337072,"samples":15225},{"name":"arrayBuffer (128)","opsSec":46339.3827586058,"samples":23170},{"name":"arrayBuffer (1024)","opsSec":31371.20373661737,"samples":15686},{"name":"slice (0, 64)","opsSec":88873.39690128129,"samples":44437},{"name":"slice (0, 512)","opsSec":49001.8233998031,"samples":24501}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|253,769|126885|
|[True conditional] Using constructor name|259,006|129504|
|[True conditional] Check if property is valid then instanceof |266,374|133188|
|[False conditional] Using instanceof only|10,712,546|5356274|
|[False conditional] Using constructor name|14,182,466|7091234|
|[False conditional] Check if property is valid then instanceof |12,976,662|6488332|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:17:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":253769.16762062954,"samples":126885},{"name":"[True conditional] Using constructor name","opsSec":259006.13824053586,"samples":129504},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":266374.74111368303,"samples":133188},{"name":"[False conditional] Using instanceof only","opsSec":10712546.90789554,"samples":5356274},{"name":"[False conditional] Using constructor name","opsSec":14182466.594118861,"samples":7091234},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":12976662.350576611,"samples":6488332}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,284|3643|
|crypto.verify('RSA-SHA256')|7,241|3621|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:27:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7284.437415578734,"samples":3643},{"name":"crypto.verify('RSA-SHA256')","opsSec":7241.15827315259,"samples":3621}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,951,750|975876|
|fromUnixToISOString(new Date())|1,730,982|865501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:32:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1951750.8054103493,"samples":975876},{"name":"fromUnixToISOString(new Date())","opsSec":1730982.855453063,"samples":865501}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|21,259|10630|
|Intl.DateTimeFormat().format(new Date())|20,564|10283|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,460|10731|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|20,470|10236|
|Reusing Intl.DateTimeFormat()|643,023|321512|
|Date.toLocaleDateString()|661,410|330706|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,986|10494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":21259.050997844824,"samples":10630},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20564.988120874335,"samples":10283},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21460.34527851865,"samples":10731},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":20470.805283497524,"samples":10236},{"name":"Reusing Intl.DateTimeFormat()","opsSec":643023.6348891486,"samples":321512},{"name":"Date.toLocaleDateString()","opsSec":661410.3833103747,"samples":330706},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20986.861377843954,"samples":10494}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|887,687|443844|
|Using brackets {}|882,307|441154|
|Using '' + |893,645|446823|
|Using date.toString()|976,056|488029|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:45:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":887687.7121712164,"samples":443844},{"name":"Using brackets {}","opsSec":882307.5004536158,"samples":441154},{"name":"Using '' + ","opsSec":893645.2726808141,"samples":446823},{"name":"Using date.toString()","opsSec":976056.739334151,"samples":488029}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,394,705|1197353|
|Using delete property (proto: null)|7,783,176|3891589|
|Using delete property (cached proto: null)|2,493,005|1246503|
|Using undefined assignment|12,743,240|6371621|
|Using undefined assignment (proto: null)|8,171,916|4086813|
|Using undefined property (cached proto: null)|11,345,938|5672970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:50:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2394705.3379969285,"samples":1197353},{"name":"Using delete property (proto: null)","opsSec":7783176.093612931,"samples":3891589},{"name":"Using delete property (cached proto: null)","opsSec":2493005.870490406,"samples":1246503},{"name":"Using undefined assignment","opsSec":12743240.750873998,"samples":6371621},{"name":"Using undefined assignment (proto: null)","opsSec":8171916.750475733,"samples":4086813},{"name":"Using undefined property (cached proto: null)","opsSec":11345938.58044453,"samples":5672970}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|263,395|131698|
|NodeError|259,931|129966|
|NodeError Range|261,308|130655|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:01:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":263395.20363843825,"samples":131698},{"name":"NodeError","opsSec":259931.40324330644,"samples":129966},{"name":"NodeError Range","opsSec":261308.44736310613,"samples":130655}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,561,266|780634|
|Function returning explicitly undefined|1,464,321|732161|
|Function returning implicitly undefined|1,460,889|730445|
|Function returning string|1,552,607|776304|
|Function returning integer|1,573,792|786897|
|Function returning float|1,552,831|776416|
|Function returning functions|1,519,846|759924|
|Function returning arrow functions|1,541,020|770511|
|Function returning empty object|1,549,562|774782|
|Function returning empty array|1,544,860|772431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:08:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1561266.341722589,"samples":780634},{"name":"Function returning explicitly undefined","opsSec":1464321.2935310225,"samples":732161},{"name":"Function returning implicitly undefined","opsSec":1460889.775997463,"samples":730445},{"name":"Function returning string","opsSec":1552607.9016965781,"samples":776304},{"name":"Function returning integer","opsSec":1573792.68348583,"samples":786897},{"name":"Function returning float","opsSec":1552831.3295130576,"samples":776416},{"name":"Function returning functions","opsSec":1519846.3207718246,"samples":759924},{"name":"Function returning arrow functions","opsSec":1541020.4425722456,"samples":770511},{"name":"Function returning empty object","opsSec":1549562.3637304998,"samples":774782},{"name":"Function returning empty array","opsSec":1544860.1121385123,"samples":772431}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|12,703,618|6351810|
|using Array.includes (first item)|14,007,451|7003726|
|Using raw comparison|15,112,467|7556234|
|Using raw comparison (first item)|14,501,867|7250934|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:18:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":12703618.865840666,"samples":6351810},{"name":"using Array.includes (first item)","opsSec":14007451.482721588,"samples":7003726},{"name":"Using raw comparison","opsSec":15112467.3854756,"samples":7556234},{"name":"Using raw comparison (first item)","opsSec":14501867.144211123,"samples":7250934}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|11,860,115|5930058|
|Using Object.getOwnPropertyNames()|12,068,961|6034481|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:28:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":11860115.84370485,"samples":5930058},{"name":"Using Object.getOwnPropertyNames()","opsSec":12068961.382671436,"samples":6034481}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,122,310|4061156|
|Length = 10_000 - Array.at|7,923,284|3961643|
|Length = 1_000_000 - Array.at|7,941,159|3970580|
|Length = 100 - Array[length - 1]|14,172,880|7086441|
|Length = 10_000 - Array[length - 1]|13,943,031|6971516|
|Length = 1_000_000 - Array[length - 1]|14,074,175|7037088|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:38:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8122310.486057878,"samples":4061156},{"name":"Length = 10_000 - Array.at","opsSec":7923284.5320984395,"samples":3961643},{"name":"Length = 1_000_000 - Array.at","opsSec":7941159.902449642,"samples":3970580},{"name":"Length = 100 - Array[length - 1]","opsSec":14172880.914339157,"samples":7086441},{"name":"Length = 10_000 - Array[length - 1]","opsSec":13943031.660092596,"samples":6971516},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14074175.56404131,"samples":7037088}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,299,216|7149609|
|~ (small)|14,408,219|7204110|
|Math.floor (long)|14,590,727|7295364|
|~ (long)|14,562,571|7281286|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:49:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":14299216.267434502,"samples":7149609},{"name":"~ (small)","opsSec":14408219.052129893,"samples":7204110},{"name":"Math.floor (long)","opsSec":14590727.70034256,"samples":7295364},{"name":"~ (long)","opsSec":14562571.034326352,"samples":7281286}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,034,295|6017148|
|Object.create({})|1,277,202|638602|
|Cached Empty.prototype|14,285,453|7142727|
|Empty.prototype|1,298,834|654034|
|Empty class|906,349|453949|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:01:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":12034295.94821991,"samples":6017148},{"name":"Object.create({})","opsSec":1277202.988504626,"samples":638602},{"name":"Cached Empty.prototype","opsSec":14285453.915676929,"samples":7142727},{"name":"Empty.prototype","opsSec":1298834.1707246485,"samples":654034},{"name":"Empty class","opsSec":906349.0168037358,"samples":453949}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,085,257|7542629|
|Using optional chain (obj.field?.field2) (undefined)|14,585,282|7292642|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,152,025|7576013|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,515,174|7757588|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:09:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15085257.78319211,"samples":7542629},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14585282.882178126,"samples":7292642},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15152025.346979776,"samples":7576013},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15515174.504000673,"samples":7757588}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|13,694,677|6847339|
|Using parseInt(x, 10) - big number (10 len)|7,788,965|3894483|
|Using + - small number (2 len)|14,574,636|7287319|
|Using + - big number (10 len)|14,308,155|7154078|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:20:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":13694677.647679016,"samples":6847339},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":7788965.489315626,"samples":3894483},{"name":"Using + - small number (2 len)","opsSec":14574636.903137391,"samples":7287319},{"name":"Using + - big number (10 len)","opsSec":14308155.905975211,"samples":7154078}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|688,764|344383|
|Using ? operator to avoid rejection|718,342|359172|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:31:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":688764.8407776555,"samples":344383},{"name":"Using ? operator to avoid rejection","opsSec":718342.4114847995,"samples":359172}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|13,638,117|6819059|
|Raw usage underscore usage|15,027,631|7513816|
|Manipulating private properties using #|12,961,882|6480942|
|Manipulating private properties using underscore(_)|12,135,819|6067910|
|Manipulating private properties using Symbol|12,115,124|6057563|
|Manipulating private properties using PrivateSymbol|9,496,460|4748231|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:37:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":13638117.75577581,"samples":6819059},{"name":"Raw usage underscore usage","opsSec":15027631.066551328,"samples":7513816},{"name":"Manipulating private properties using #","opsSec":12961882.523824994,"samples":6480942},{"name":"Manipulating private properties using underscore(_)","opsSec":12135819.42000796,"samples":6067910},{"name":"Manipulating private properties using Symbol","opsSec":12115124.497904936,"samples":6057563},{"name":"Manipulating private properties using PrivateSymbol","opsSec":9496460.792509735,"samples":4748231}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,632,711|1316356|
|Adding property in the object creation - small object|2,595,338|1297670|
|Adding property after the function creation - small class|194,441|97221|
|Adding property in the function creation - small class|193,961|96981|
|Adding property after the class creation - small class|160,759|80380|
|Adding property in the class creation - small class|155,671|77836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:48:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2632711.352844586,"samples":1316356},{"name":"Adding property in the object creation - small object","opsSec":2595338.599930155,"samples":1297670},{"name":"Adding property after the function creation - small class","opsSec":194441.8542277107,"samples":97221},{"name":"Adding property in the function creation - small class","opsSec":193961.7811830713,"samples":96981},{"name":"Adding property after the class creation - small class","opsSec":160759.2829501974,"samples":80380},{"name":"Adding property in the class creation - small class","opsSec":155671.5628683133,"samples":77836}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,763,252|7381627|
|Getter|12,216,328|6108165|
|Method|14,491,246|7245624|
|DefineProperty (getter)|14,770,033|7385017|
|DefineProperty (getter & enumerable=false)|12,369,502|6184752|
|DefineProperty (getter & configurable=false)|14,594,452|7297227|
|DefineProperty (getter & enumerable=false & configurable=false)|12,643,479|6321740|
|DefineProperty (writable)|14,413,643|7206822|
|DefineProperty (writable & enumerable=false)|14,281,745|7140873|
|DefineProperty (writable & enumerable=false & configurable=false)|14,620,979|7310490|
|DefineProperties (getter)|12,722,007|6361004|
|DefineProperties (getter & enumerable=false)|12,718,964|6359483|
|DefineProperties (getter & enumerable=false & configurable=false)|12,629,197|6314599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:57:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14763252.436423887,"samples":7381627},{"name":"Getter","opsSec":12216328.822536038,"samples":6108165},{"name":"Method","opsSec":14491246.499026084,"samples":7245624},{"name":"DefineProperty (getter)","opsSec":14770033.918016229,"samples":7385017},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12369502.437750187,"samples":6184752},{"name":"DefineProperty (getter & configurable=false)","opsSec":14594452.35094685,"samples":7297227},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12643479.43903148,"samples":6321740},{"name":"DefineProperty (writable)","opsSec":14413643.839129757,"samples":7206822},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14281745.16491556,"samples":7140873},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14620979.834963795,"samples":7310490},{"name":"DefineProperties (getter)","opsSec":12722007.757062599,"samples":6361004},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12718964.996689603,"samples":6359483},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12629197.58927596,"samples":6314599}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,136,431|7068216|
|Setter|5,644,295|2822148|
|Method|14,742,309|7371155|
|DefineProperty (setter)|14,220,813|7110407|
|DefineProperty (setter & enumerable=false)|5,694,008|2847005|
|DefineProperty (setter & configurable=false)|5,631,401|2815701|
|DefineProperty (setter & enumerable=false & configurable=false)|5,521,256|2760629|
|DefineProperty (writable)|14,013,013|7006507|
|DefineProperty (writable & enumerable=false)|14,020,819|7010410|
|DefineProperty (writable & enumerable=false & configurable=false)|14,014,889|7007450|
|DefineProperties (setter)|14,074,943|7037472|
|DefineProperties (setter & enumerable=false)|5,577,030|2788516|
|DefineProperties (setter & enumerable=false & configurable=false)|5,574,208|2787105|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:22:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14136431.279421607,"samples":7068216},{"name":"Setter","opsSec":5644295.407174943,"samples":2822148},{"name":"Method","opsSec":14742309.13463531,"samples":7371155},{"name":"DefineProperty (setter)","opsSec":14220813.509330189,"samples":7110407},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5694008.206094027,"samples":2847005},{"name":"DefineProperty (setter & configurable=false)","opsSec":5631401.279615698,"samples":2815701},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5521256.162985028,"samples":2760629},{"name":"DefineProperty (writable)","opsSec":14013013.83363049,"samples":7006507},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14020819.49915097,"samples":7010410},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14014889.74886707,"samples":7007450},{"name":"DefineProperties (setter)","opsSec":14074943.11288186,"samples":7037472},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5577030.1965759685,"samples":2788516},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5574208.577497862,"samples":2787105}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,583,068|1307764|
|Using replaceAll()|2,326,868|1163435|
|Using replaceAll(//g)|2,277,736|1138869|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:41:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2583068.0856178035,"samples":1307764},{"name":"Using replaceAll()","opsSec":2326868.5799828283,"samples":1163435},{"name":"Using replaceAll(//g)","opsSec":2277736.643907476,"samples":1138869}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,548,459|4274230|
|{ ...object, __proto__: null }|8,702,778|4351390|
|{ ...object, newProp: true }|561,812|281404|
|structuredClone|238,992|119497|
|JSON.parse + JSON.stringify|185,117|92613|
|loop + object.keys starting with {}|1,081,418|540710|
|loop + object.keys starting with { __proto__: null }|586,586|293294|
|loop + object.keys starting with { randomProp: true }|449,904|224953|
|object.keys + reduce(FN, {})|1,048,557|524279|
|object.keys + reduce(FN, { __proto__: null })|568,304|284153|
|object.keys + reduce(FN, { newProp: true })|449,366|224684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:46:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":8548459.9713709,"samples":4274230},{"name":"{ ...object, __proto__: null }","opsSec":8702778.763454389,"samples":4351390},{"name":"{ ...object, newProp: true }","opsSec":561812.1433043487,"samples":281404},{"name":"structuredClone","opsSec":238992.47200170855,"samples":119497},{"name":"JSON.parse + JSON.stringify","opsSec":185117.07427387737,"samples":92613},{"name":"loop + object.keys starting with {}","opsSec":1081418.568643123,"samples":540710},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":586586.4834065888,"samples":293294},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":449904.35271279264,"samples":224953},{"name":"object.keys + reduce(FN, {})","opsSec":1048557.3784290074,"samples":524279},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":568304.9400903813,"samples":284153},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":449366.3464833071,"samples":224684}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|250,507|125254|
|Sort using first char|1,006,033|503017|
|Sort using localeCompare|922,406|461204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:56:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":250507.1684073887,"samples":125254},{"name":"Sort using first char","opsSec":1006033.2737728966,"samples":503017},{"name":"Sort using localeCompare","opsSec":922406.7722648752,"samples":461204}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,750|876|
|{...smallObject} - Total keys: 2|11,803,988|5901996|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,195|1098|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,222|3112|
|{ ...bigObject, ...anotherBigObject }|1,099|550|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|5,937,981|2968991|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,261,753|4630877|
|{ ...smallObject, ...anotherSmallObject }|7,755,181|3877591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:02:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1750.7760501598125,"samples":876},{"name":"{...smallObject} - Total keys: 2","opsSec":11803988.936073389,"samples":5901996},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2195.764319908022,"samples":1098},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6222.838209218825,"samples":3112},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1099.7376751859297,"samples":550},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":5937981.1753180465,"samples":2968991},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9261753.561056389,"samples":4630877},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7755181.564045332,"samples":3877591}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,164|1083|
|streams.web.Readable reading 1e3 * "some data"|630|316|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:11:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2164.5455940056204,"samples":1083},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":630.5542966193816,"samples":316}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,757|2379|
|streams.web.WritableStream writing 1e3 * "some data"|1,912|964|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:17:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4757.125507380431,"samples":2379},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1912.5137755579776,"samples":964}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,988,582|7494292|
|Using backtick (`)|14,378,235|7189118|
|Using array.join|5,679,598|2839800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:24:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":14988582.847751334,"samples":7494292},{"name":"Using backtick (`)","opsSec":14378235.61713095,"samples":7189118},{"name":"Using array.join","opsSec":5679598.321819974,"samples":2839800}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,625,226|5812614|
|(short string) (true) String#slice and strict comparison|11,663,983|5831992|
|(long string) (true) String#endsWith|11,346,505|5673253|
|(long string) (true) String#slice and strict comparison|11,193,376|5596689|
|(short string) (false) String#endsWith|11,814,962|5907482|
|(short string) (false) String#slice and strict comparison|12,125,120|6062561|
|(long string) (false) String#endsWith|11,492,343|5746172|
|(long string) (false) String#slice and strict comparison|11,566,593|5783299|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:37:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11625226.05731926,"samples":5812614},{"name":"(short string) (true) String#slice and strict comparison","opsSec":11663983.314244892,"samples":5831992},{"name":"(long string) (true) String#endsWith","opsSec":11346505.525403365,"samples":5673253},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11193376.79366014,"samples":5596689},{"name":"(short string) (false) String#endsWith","opsSec":11814962.3985006,"samples":5907482},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12125120.369287344,"samples":6062561},{"name":"(long string) (false) String#endsWith","opsSec":11492343.159423016,"samples":5746172},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11566593.970065638,"samples":5783299}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,283,220|4141612|
|Using indexof|8,431,745|4215873|
|Using RegExp.test|7,749,479|3874740|
|Using RegExp.text with cached regex pattern|7,597,411|3798706|
|Using new RegExp.test|3,077,329|1538665|
|Using new RegExp.test with cached regex pattern|3,413,078|1706540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8283220.61265962,"samples":4141612},{"name":"Using indexof","opsSec":8431745.944277415,"samples":4215873},{"name":"Using RegExp.test","opsSec":7749479.921302937,"samples":3874740},{"name":"Using RegExp.text with cached regex pattern","opsSec":7597411.697332379,"samples":3798706},{"name":"Using new RegExp.test","opsSec":3077329.3705606223,"samples":1538665},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3413078.892752222,"samples":1706540}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,892,074|6946038|
|(short string) (true) String#slice and strict comparison|12,263,112|6131560|
|(long string) (true) String#startsWith|12,771,889|6385945|
|(long string) (true) String#slice and strict comparison|11,605,111|5802556|
|(short string) (false) String#startsWith|14,539,218|7269610|
|(short string) (false) String#slice and strict comparison|12,413,866|6206934|
|(long string) (false) String#startsWith|13,947,271|6973636|
|(long string) (false) String#slice and strict comparison|11,964,876|5982439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:04:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13892074.796869239,"samples":6946038},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12263112.689792937,"samples":6131560},{"name":"(long string) (true) String#startsWith","opsSec":12771889.430193946,"samples":6385945},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11605111.795251304,"samples":5802556},{"name":"(short string) (false) String#startsWith","opsSec":14539218.37749889,"samples":7269610},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12413866.81547397,"samples":6206934},{"name":"(long string) (false) String#startsWith","opsSec":13947271.17688716,"samples":6973636},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11964876.903780496,"samples":5982439}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|13,179,517|6589759|
|Using this|13,705,658|6852830|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:20:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":13179517.330211522,"samples":6589759},{"name":"Using this","opsSec":13705658.174386049,"samples":6852830}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,692,812|2846407|
|Date.now()|8,583,583|4291792|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:28:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5692812.713348257,"samples":2846407},{"name":"Date.now()","opsSec":8583583.802194351,"samples":4291792}]}-->
