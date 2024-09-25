## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,118,355|7559178|
|Using dot notation|14,837,241|7418621|
|Using define property (writable)|2,876,390|1438196|
|Using define property initialized (writable)|3,731,545|1865773|
|Using define property (getter)|1,814,600|909026|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:16:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":15118355.637695704,"samples":7559178},{"name":"Using dot notation","opsSec":14837241.080331914,"samples":7418621},{"name":"Using define property (writable)","opsSec":2876390.3489134163,"samples":1438196},{"name":"Using define property initialized (writable)","opsSec":3731545.2163310926,"samples":1865773},{"name":"Using define property (getter)","opsSec":1814600.347054544,"samples":909026}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.034ms
new Array(length)|100|0.012ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.406ms
new Array(length)|10,000|0.142ms
array.push|1,000,000|26.229ms
new Array(length)|1,000,000|15.515ms
array.push|100,000,000|1,877.957ms
new Array(length)|100,000,000|4,185.117ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.017ms
array.push|100|0.014ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.477ms
new Array(length)|10,000|3.287ms
array.push|1,000,000|259.73ms
new Array(length)|1,000,000|4.834ms
array.push|100,000,000|2,322.254ms
new Array(length)|100,000,000|4,491.991ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|238|120|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:03:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Array","opsSec":238.2257730567452,"samples":120},{"name":"Array.from","opsSec":21.554901374312806,"samples":11}]}-->

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
|Getter (class)|14,675,457|7337729|
|Getter|12,919,895|6459948|
|Method|14,988,097|7494049|
|DefineProperty (getter)|14,660,044|7330023|
|DefineProperty (getter & enumerable=false)|12,831,994|6415998|
|DefineProperty (getter & configurable=false)|15,210,508|7605255|
|DefineProperty (getter & enumerable=false & configurable=false)|13,055,412|6527707|
|DefineProperty (writable)|14,879,456|7439729|
|DefineProperty (writable & enumerable=false)|15,237,602|7618802|
|DefineProperty (writable & enumerable=false & configurable=false)|15,428,052|7714027|
|DefineProperties (getter)|13,032,813|6516407|
|DefineProperties (getter & enumerable=false)|12,808,948|6404475|
|DefineProperties (getter & enumerable=false & configurable=false)|12,991,595|6495798|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:19:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14675457.449196331,"samples":7337729},{"name":"Getter","opsSec":12919895.240358522,"samples":6459948},{"name":"Method","opsSec":14988097.664934076,"samples":7494049},{"name":"DefineProperty (getter)","opsSec":14660044.534571473,"samples":7330023},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12831994.682982156,"samples":6415998},{"name":"DefineProperty (getter & configurable=false)","opsSec":15210508.070775837,"samples":7605255},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13055412.703142332,"samples":6527707},{"name":"DefineProperty (writable)","opsSec":14879456.22157445,"samples":7439729},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15237602.311596949,"samples":7618802},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15428052.651028337,"samples":7714027},{"name":"DefineProperties (getter)","opsSec":13032813.684175652,"samples":6516407},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12808948.576791212,"samples":6404475},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12991595.339616604,"samples":6495798}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,706,638|7353320|
|Setter|5,802,918|2901460|
|Method|14,869,103|7434552|
|DefineProperty (setter)|14,972,602|7486302|
|DefineProperty (setter & enumerable=false)|5,783,242|2891622|
|DefineProperty (setter & configurable=false)|5,683,595|2841799|
|DefineProperty (setter & enumerable=false & configurable=false)|5,705,525|2852763|
|DefineProperty (writable)|14,581,770|7290886|
|DefineProperty (writable & enumerable=false)|14,542,654|7271328|
|DefineProperty (writable & enumerable=false & configurable=false)|14,699,133|7349567|
|DefineProperties (setter)|14,647,750|7323876|
|DefineProperties (setter & enumerable=false)|5,777,879|2888940|
|DefineProperties (setter & enumerable=false & configurable=false)|5,764,124|2882063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:43:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14706638.097758064,"samples":7353320},{"name":"Setter","opsSec":5802918.106518399,"samples":2901460},{"name":"Method","opsSec":14869103.780981109,"samples":7434552},{"name":"DefineProperty (setter)","opsSec":14972602.445654243,"samples":7486302},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5783242.134332079,"samples":2891622},{"name":"DefineProperty (setter & configurable=false)","opsSec":5683595.958812607,"samples":2841799},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5705525.366757582,"samples":2852763},{"name":"DefineProperty (writable)","opsSec":14581770.645932239,"samples":7290886},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14542654.161063148,"samples":7271328},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14699133.24022528,"samples":7349567},{"name":"DefineProperties (setter)","opsSec":14647750.620543122,"samples":7323876},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5777879.967928822,"samples":2888940},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5764124.740048024,"samples":2882063}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,564,244|1282123|
|Using replaceAll()|2,349,328|1174665|
|Using replaceAll(//g)|2,328,646|1164324|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:00:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2564244.2686090865,"samples":1282123},{"name":"Using replaceAll()","opsSec":2349328.8269435614,"samples":1174665},{"name":"Using replaceAll(//g)","opsSec":2328646.1616101293,"samples":1164324}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,847,222|4423647|
|{ ...object, __proto__: null }|9,009,270|4504636|
|{ ...object, newProp: true }|608,150|304076|
|structuredClone|241,122|120562|
|JSON.parse + JSON.stringify|191,667|95834|
|loop + object.keys starting with {}|1,110,055|555028|
|loop + object.keys starting with { __proto__: null }|634,883|317442|
|loop + object.keys starting with { randomProp: true }|465,847|232924|
|object.keys + reduce(FN, {})|1,082,464|541233|
|object.keys + reduce(FN, { __proto__: null })|612,478|306240|
|object.keys + reduce(FN, { newProp: true })|470,250|235126|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:06:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":8847222.792790107,"samples":4423647},{"name":"{ ...object, __proto__: null }","opsSec":9009270.368980318,"samples":4504636},{"name":"{ ...object, newProp: true }","opsSec":608150.9131349968,"samples":304076},{"name":"structuredClone","opsSec":241122.58026841938,"samples":120562},{"name":"JSON.parse + JSON.stringify","opsSec":191667.1326015777,"samples":95834},{"name":"loop + object.keys starting with {}","opsSec":1110055.0135957948,"samples":555028},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":634883.5106342722,"samples":317442},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":465847.8767713978,"samples":232924},{"name":"object.keys + reduce(FN, {})","opsSec":1082464.5195663972,"samples":541233},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":612478.3568125844,"samples":306240},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":470250.64789964043,"samples":235126}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|256,096|128049|
|Sort using first char|1,051,796|525899|
|Sort using localeCompare|949,381|474691|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:16:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":256096.7012365048,"samples":128049},{"name":"Sort using first char","opsSec":1051796.9510651575,"samples":525899},{"name":"Sort using localeCompare","opsSec":949381.2876725801,"samples":474691}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,815|908|
|{...smallObject} - Total keys: 2|11,562,249|5781125|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,173|1087|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,213|3107|
|{ ...bigObject, ...anotherBigObject }|1,113|557|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,157,642|3078822|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,601,733|4800867|
|{ ...smallObject, ...anotherSmallObject }|7,978,672|3989337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:22:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1815.0583877410998,"samples":908},{"name":"{...smallObject} - Total keys: 2","opsSec":11562249.658691635,"samples":5781125},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2173.75180549183,"samples":1087},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6213.57935246845,"samples":3107},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1113.7296153250284,"samples":557},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6157642.82939953,"samples":3078822},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9601733.79275299,"samples":4800867},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7978672.195584,"samples":3989337}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,269|1135|
|streams.web.Readable reading 1e3 * "some data"|643|322|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2269.9286244106606,"samples":1135},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":643.6279482638176,"samples":322}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,899|2450|
|streams.web.WritableStream writing 1e3 * "some data"|1,953|980|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:37:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4899.282372329273,"samples":2450},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1953.4317226261444,"samples":980}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,642,219|7321110|
|Using backtick (`)|14,728,946|7364475|
|Using array.join|5,602,352|2801177|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:43:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14642219.046145067,"samples":7321110},{"name":"Using backtick (`)","opsSec":14728946.906012826,"samples":7364475},{"name":"Using array.join","opsSec":5602352.562718877,"samples":2801177}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,408,875|6204438|
|(short string) (true) String#slice and strict comparison|12,587,205|6293603|
|(long string) (true) String#endsWith|12,313,079|6156540|
|(long string) (true) String#slice and strict comparison|12,003,973|6001987|
|(short string) (false) String#endsWith|12,752,433|6376217|
|(short string) (false) String#slice and strict comparison|12,919,679|6459840|
|(long string) (false) String#endsWith|12,582,074|6291038|
|(long string) (false) String#slice and strict comparison|12,468,376|6234189|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:52:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12408875.038993927,"samples":6204438},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12587205.65272529,"samples":6293603},{"name":"(long string) (true) String#endsWith","opsSec":12313079.66460005,"samples":6156540},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12003973.669666016,"samples":6001987},{"name":"(short string) (false) String#endsWith","opsSec":12752433.71857139,"samples":6376217},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12919679.188439434,"samples":6459840},{"name":"(long string) (false) String#endsWith","opsSec":12582074.993332593,"samples":6291038},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12468376.509194655,"samples":6234189}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,483,195|4241598|
|Using indexof|8,663,066|4331534|
|Using RegExp.test|7,868,213|3934107|
|Using RegExp.text with cached regex pattern|8,108,127|4054064|
|Using new RegExp.test|3,182,505|1591253|
|Using new RegExp.test with cached regex pattern|3,546,703|1773352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:07:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8483195.78586236,"samples":4241598},{"name":"Using indexof","opsSec":8663066.980061825,"samples":4331534},{"name":"Using RegExp.test","opsSec":7868213.497192597,"samples":3934107},{"name":"Using RegExp.text with cached regex pattern","opsSec":8108127.517503274,"samples":4054064},{"name":"Using new RegExp.test","opsSec":3182505.4497269094,"samples":1591253},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3546703.701423905,"samples":1773352}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,517,399|6758700|
|(short string) (true) String#slice and strict comparison|12,148,508|6074255|
|(long string) (true) String#startsWith|12,809,064|6404533|
|(long string) (true) String#slice and strict comparison|11,483,718|5741860|
|(short string) (false) String#startsWith|14,540,954|7270478|
|(short string) (false) String#slice and strict comparison|12,588,872|6294437|
|(long string) (false) String#startsWith|14,081,865|7040933|
|(long string) (false) String#slice and strict comparison|11,859,161|5929582|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:20:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13517399.345872488,"samples":6758700},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12148508.558573434,"samples":6074255},{"name":"(long string) (true) String#startsWith","opsSec":12809064.763735406,"samples":6404533},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11483718.849811908,"samples":5741860},{"name":"(short string) (false) String#startsWith","opsSec":14540954.500269404,"samples":7270478},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12588872.432976814,"samples":6294437},{"name":"(long string) (false) String#startsWith","opsSec":14081865.535108013,"samples":7040933},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11859161.422872772,"samples":5929582}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,493,057|7246529|
|Using this|13,995,075|6997538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:34:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14493057.1926209,"samples":7246529},{"name":"Using this","opsSec":13995075.075008104,"samples":6997538}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,942,044|2971023|
|Date.now()|8,961,998|4481000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:41:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5942044.54425856,"samples":2971023},{"name":"Date.now()","opsSec":8961998.738274515,"samples":4481000}]}-->
