## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|692,166,389|82|
|Using dot notation|581,809,482|85|
|Using define property (writable)|2,321,262|87|
|Using define property initialized (writable)|2,959,906|83|
|Using define property (getter)|1,267,400|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:19:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Directly in the object","opsSec":692166388.5857795,"samples":6},{"name":"Using dot notation","opsSec":581809481.8956726,"samples":8},{"name":"Using define property (writable)","opsSec":2321262.309302133,"samples":6},{"name":"Using define property initialized (writable)","opsSec":2959905.7641658145,"samples":7},{"name":"Using define property (getter)","opsSec":1267399.9961745276,"samples":5}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.008ms
array.push|100|0.04ms
new Array(length)|100|0.015ms
array.push|1,000|0.071ms
new Array(length)|1,000|0.053ms
array.push|10,000|0.471ms
new Array(length)|10,000|3.163ms
array.push|1,000,000|36.206ms
new Array(length)|1,000,000|10.241ms
array.push|100,000,000|2,038.004ms
new Array(length)|100,000,000|5,714.251ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.02ms
array.push|100|0.094ms
new Array(length)|100|0.011ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.45ms
new Array(length)|10,000|0.22ms
array.push|1,000,000|26.154ms
new Array(length)|1,000,000|9.437ms
array.push|100,000,000|2,565.62ms
new Array(length)|100,000,000|5,861.293ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|314|75|
|Array.from|13|36|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 15:57:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Array","opsSec":314.2509322802274,"samples":4},{"name":"Array.from","opsSec":12.801938252141676,"samples":1}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,579|78|
|new Blob (1024)|331|65|
|text (128)|2,589|76|
|text (1024)|349|77|
|arrayBuffer (128)|2,537|75|
|arrayBuffer (1024)|361|80|
|slice (0, 64)|45,068|68|
|slice (0, 512)|13,102|57|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:05:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Blob (128)","opsSec":2579.0438944899224,"samples":2},{"name":"new Blob (1024)","opsSec":330.5992831930977,"samples":2},{"name":"text (128)","opsSec":2588.7041181385885,"samples":4},{"name":"text (1024)","opsSec":348.69986139631214,"samples":3},{"name":"arrayBuffer (128)","opsSec":2536.6672304775293,"samples":4},{"name":"arrayBuffer (1024)","opsSec":360.5738630772147,"samples":4},{"name":"slice (0, 64)","opsSec":45067.91375222453,"samples":5},{"name":"slice (0, 512)","opsSec":13102.139421901235,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,070|59|
|[True conditional] Using constructor name|148,212|94|
|[True conditional] Check if property is valid then instanceof |149,171|94|
|[False conditional] Using instanceof only|715,863,366|97|
|[False conditional] Using constructor name|714,876,956|95|
|[False conditional] Check if property is valid then instanceof |713,021,005|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":183069.89267138712,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":148211.549450618,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":149170.53749466632,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":715863365.6870154,"samples":9},{"name":"[False conditional] Using constructor name","opsSec":714876955.8145792,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":713021004.8283935,"samples":10}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|4,889|90|
|crypto.verify('RSA-SHA256')|4,912|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:35:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":4889.25033326597,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":4911.701704143169,"samples":4}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|894,898|86|
|fromUnixToISOString(new Date())|1,422,288|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":894897.7842669843,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1422287.6199641135,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|8,465|83|
|Intl.DateTimeFormat().format(new Date())|8,916|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|10,979|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|10,197|83|
|Reusing Intl.DateTimeFormat()|442,330|99|
|Date.toLocaleDateString()|447,774|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|10,058|83|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":8464.780757689852,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8915.62960615865,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":10979.132374236102,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":10196.620179693678,"samples":6},{"name":"Reusing Intl.DateTimeFormat()","opsSec":442330.2153303844,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":447773.7974742581,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":10058.03346774484,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|566,096|87|
|Using brackets {}|581,384|96|
|Using '' + |585,812|93|
|Using date.toString()|643,722|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":566096.3350297144,"samples":4},{"name":"Using brackets {}","opsSec":581384.4666856033,"samples":4},{"name":"Using '' + ","opsSec":585811.5759187728,"samples":4},{"name":"Using date.toString()","opsSec":643722.2617900007,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,566,480|93|
|Using delete property (proto: null)|16,745,189|97|
|Using delete property (cached proto: null)|2,630,015|92|
|Using undefined assignment|594,715,777|95|
|Using undefined assignment (proto: null)|18,754,536|98|
|Using undefined property (cached proto: null)|599,622,786|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using delete property","opsSec":2566479.960609113,"samples":4},{"name":"Using delete property (proto: null)","opsSec":16745188.512884397,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":2630015.4701580624,"samples":4},{"name":"Using undefined assignment","opsSec":594715776.6832992,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":18754535.570286598,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":599622786.1274939,"samples":7}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|177,351|58|
|NodeError|143,409|93|
|NodeError Range|143,765|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:48:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Error","opsSec":177351.42495923737,"samples":3},{"name":"NodeError","opsSec":143409.11498333362,"samples":3},{"name":"NodeError Range","opsSec":143765.2619007927,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,192,633|95|
|Function returning explicitly undefined|1,188,604|94|
|Function returning implicitly undefined|1,218,532|93|
|Function returning string|1,209,242|93|
|Function returning integer|1,166,656|90|
|Function returning float|1,222,481|92|
|Function returning functions|1,201,665|97|
|Function returning arrow functions|1,189,531|89|
|Function returning empty object|1,104,999|91|
|Function returning empty array|1,183,348|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Function returning null","opsSec":1192632.6773569826,"samples":8},{"name":"Function returning explicitly undefined","opsSec":1188603.6314714584,"samples":8},{"name":"Function returning implicitly undefined","opsSec":1218531.615960447,"samples":8},{"name":"Function returning string","opsSec":1209241.8966656774,"samples":6},{"name":"Function returning integer","opsSec":1166656.3320186571,"samples":6},{"name":"Function returning float","opsSec":1222481.1450092224,"samples":6},{"name":"Function returning functions","opsSec":1201664.5961100226,"samples":7},{"name":"Function returning arrow functions","opsSec":1189530.5139626844,"samples":5},{"name":"Function returning empty object","opsSec":1104999.0533820763,"samples":6},{"name":"Function returning empty array","opsSec":1183348.4558748575,"samples":4}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|709,460,766|92|
|using Array.includes (first item)|711,284,446|95|
|Using raw comparison|712,971,800|97|
|Using raw comparison (first item)|713,287,555|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:55:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"using Array.includes","opsSec":709460766.1814797,"samples":6},{"name":"using Array.includes (first item)","opsSec":711284446.4146591,"samples":6},{"name":"Using raw comparison","opsSec":712971800.1902121,"samples":9},{"name":"Using raw comparison (first item)","opsSec":713287555.2106079,"samples":7}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|44,835,190|88|
|Using Object.getOwnPropertyNames()|40,804,793|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:58:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using Object.keys()","opsSec":44835190.45201237,"samples":9},{"name":"Using Object.getOwnPropertyNames()","opsSec":40804792.902900964,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|711,590,397|95|
|Length = 10_000 - Array.at|711,682,303|96|
|Length = 1_000_000 - Array.at|711,688,068|94|
|Length = 100 - Array[length - 1]|713,624,584|95|
|Length = 10_000 - Array[length - 1]|712,797,118|97|
|Length = 1_000_000 - Array[length - 1]|711,145,788|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:01:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":711590396.6367419,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":711682303.043476,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":711688067.5913002,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":713624584.4720929,"samples":7},{"name":"Length = 10_000 - Array[length - 1]","opsSec":712797118.3994956,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":711145788.3905965,"samples":11}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|40,265,911|91|
|Object.create({})|1,231,244|77|
|Cached Empty.prototype|596,346,669|94|
|Empty.prototype|1,114,276|77|
|Empty class|806,915|77|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:03:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Object.create(null)","opsSec":40265911.43722246,"samples":9},{"name":"Object.create({})","opsSec":1231243.9232646395,"samples":3},{"name":"Cached Empty.prototype","opsSec":596346668.5938523,"samples":7},{"name":"Empty.prototype","opsSec":1114276.3306307197,"samples":3},{"name":"Empty class","opsSec":806914.5603174043,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|576,462,844|92|
|Using optional chain (obj.field?.field2) (undefined)|590,893,865|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|585,967,533|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|590,225,593|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":576462843.5801349,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":590893864.8120055,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":585967532.6169944,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":590225592.5750984,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|204,240,360|93|
|Using parseInt(x, 10) - big number (10 len)|15,115,453|98|
|Using + - small number (2 len)|597,392,357|95|
|Using + - big number (10 len)|596,944,240|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":204240360.21036646,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15115453.101029817,"samples":7},{"name":"Using + - small number (2 len)","opsSec":597392357.1086113,"samples":7},{"name":"Using + - big number (10 len)","opsSec":596944240.0359367,"samples":8}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|777,162|75|
|Using ? operator to avoid rejection|857,031|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:10:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using if to check function existence","opsSec":777161.9385333655,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":857031.1130812762,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|681,227,328|94|
|Raw usage underscore usage|690,928,135|94|
|Manipulating private properties using #|670,176,817|91|
|Manipulating private properties using underscore(_)|677,034,097|91|
|Manipulating private properties using Symbol|685,491,359|93|
|Manipulating private properties using PrivateSymbol|26,431,467|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:15:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Raw usage private field","opsSec":681227328.1779971,"samples":8},{"name":"Raw usage underscore usage","opsSec":690928134.7634047,"samples":7},{"name":"Manipulating private properties using #","opsSec":670176816.7748132,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":677034097.1689599,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":685491359.0995005,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":26431466.951498624,"samples":6}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,661,616|95|
|Adding property in the object creation - small object|2,690,358|93|
|Adding property after the function creation - small class|179,864|82|
|Adding property in the function creation - small class|183,494|83|
|Adding property after the class creation - small class|150,664|76|
|Adding property in the class creation - small class|152,739|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2661616.4643213134,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":2690357.757232635,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":179864.39363711255,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":183494.36919092134,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":150664.32086128223,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":152738.90312325011,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|594,179,641|96|
|Getter|71,943,182|96|
|Method|596,364,997|95|
|DefineProperty (getter)|596,314,115|97|
|DefineProperty (getter & enumerable=false)|71,948,024|96|
|DefineProperty (getter & configurable=false)|597,355,878|94|
|DefineProperty (getter & enumerable=false & configurable=false)|71,816,016|96|
|DefineProperty (writable)|596,306,705|96|
|DefineProperty (writable & enumerable=false)|596,614,802|95|
|DefineProperty (writable & enumerable=false & configurable=false)|596,146,955|95|
|DefineProperties (getter)|61,960,989|83|
|DefineProperties (getter & enumerable=false)|45,180,361|87|
|DefineProperties (getter & enumerable=false & configurable=false)|44,795,038|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:21:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Getter (class)","opsSec":594179640.7342566,"samples":6},{"name":"Getter","opsSec":71943182.37963869,"samples":6},{"name":"Method","opsSec":596364997.0920249,"samples":7},{"name":"DefineProperty (getter)","opsSec":596314115.2194829,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":71948023.74747857,"samples":5},{"name":"DefineProperty (getter & configurable=false)","opsSec":597355877.861981,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":71816015.86192039,"samples":5},{"name":"DefineProperty (writable)","opsSec":596306704.7392157,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":596614801.7632239,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":596146954.8102089,"samples":6},{"name":"DefineProperties (getter)","opsSec":61960988.69754825,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":45180361.26450195,"samples":4},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":44795038.01935155,"samples":4}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|587,043,708|97|
|Setter|8,405,438|97|
|Method|588,100,520|92|
|DefineProperty (setter)|588,184,522|97|
|DefineProperty (setter & enumerable=false)|8,506,936|98|
|DefineProperty (setter & configurable=false)|8,553,774|98|
|DefineProperty (setter & enumerable=false & configurable=false)|8,533,096|98|
|DefineProperty (writable)|594,576,297|95|
|DefineProperty (writable & enumerable=false)|597,021,584|96|
|DefineProperty (writable & enumerable=false & configurable=false)|595,744,671|95|
|DefineProperties (setter)|596,016,643|96|
|DefineProperties (setter & enumerable=false)|7,890,866|90|
|DefineProperties (setter & enumerable=false & configurable=false)|7,699,539|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:27:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Setter (class)","opsSec":587043707.6220733,"samples":6},{"name":"Setter","opsSec":8405437.648224358,"samples":5},{"name":"Method","opsSec":588100519.7576557,"samples":7},{"name":"DefineProperty (setter)","opsSec":588184522.091525,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8506935.891140498,"samples":7},{"name":"DefineProperty (setter & configurable=false)","opsSec":8553773.750538506,"samples":6},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8533096.267595924,"samples":5},{"name":"DefineProperty (writable)","opsSec":594576297.3159574,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":597021584.2150002,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":595744670.8674691,"samples":7},{"name":"DefineProperties (setter)","opsSec":596016642.9194169,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":7890866.319058701,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":7699538.944805528,"samples":7}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,190,544|80|
|Using replaceAll()|2,162,654|98|
|Using replaceAll(//g)|1,989,311|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:30:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using replace(//g)","opsSec":2190543.7292088266,"samples":4},{"name":"Using replaceAll()","opsSec":2162654.069801437,"samples":5},{"name":"Using replaceAll(//g)","opsSec":1989311.2518038545,"samples":8}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|13,621,530|92|
|{ ...object, __proto__: null }|13,911,278|95|
|{ ...object, newProp: true }|493,632|86|
|structuredClone|176,091|93|
|JSON.parse + JSON.stringify|147,379|94|
|loop + object.keys starting with {}|702,576|97|
|loop + object.keys starting with { __proto__: null }|442,957|93|
|loop + object.keys starting with { randomProp: true }|329,185|93|
|object.keys + reduce(FN, {})|310,879|93|
|object.keys + reduce(FN, { __proto__: null })|438,977|95|
|object.keys + reduce(FN, { newProp: true })|326,971|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:32:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{ ...object }","opsSec":13621530.259664286,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":13911277.609064804,"samples":7},{"name":"{ ...object, newProp: true }","opsSec":493631.57874231896,"samples":3},{"name":"structuredClone","opsSec":176090.57248221122,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":147378.55982621192,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":702576.333990982,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":442956.58717615245,"samples":6},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":329185.01325332024,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":310879.43726452265,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":438976.85656115535,"samples":7},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":326970.7468017396,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|188,187|98|
|Sort using first char|942,763|92|
|Sort using localeCompare|829,509|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:38:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Sort using default","opsSec":188186.83100234196,"samples":5},{"name":"Sort using first char","opsSec":942762.7515628493,"samples":4},{"name":"Sort using localeCompare","opsSec":829508.5206474856,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,009|80|
|{...smallObject} - Total keys: 2|51,414,248|84|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,089|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,003|84|
|{ ...bigObject, ...anotherBigObject }|623|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,617,833|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,710,515|84|
|{ ...smallObject, ...anotherSmallObject }|13,527,821|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1008.7960262958649,"samples":7},{"name":"{...smallObject} - Total keys: 2","opsSec":51414247.56573174,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1088.7926094858772,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3002.747079066531,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":623.4771265910987,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8617832.80234533,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":22710515.450174388,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13527821.30641893,"samples":4}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,515|84|
|streams.web.Readable reading 1e3 * "some data"|402|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:47:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1515.210676293073,"samples":3},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":401.91447277411305,"samples":4}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,252|93|
|streams.web.WritableStream writing 1e3 * "some data"|725|53|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:49:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4251.622783349346,"samples":5},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":724.6781114816188,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|716,950,896|97|
|Using backtick (`)|718,487,872|94|
|Using array.join|6,786,689|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:57:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using + sign","opsSec":716950895.8070296,"samples":6},{"name":"Using backtick (`)","opsSec":718487871.8532869,"samples":6},{"name":"Using array.join","opsSec":6786689.415490112,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|715,177,729|95|
|Using indexof|715,561,007|93|
|Using RegExp.test|11,233,807|97|
|Using RegExp.text with cached regex pattern|11,769,016|96|
|Using new RegExp.test|3,025,329|98|
|Using new RegExp.test with cached regex pattern|3,436,323|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:00:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using includes","opsSec":715177728.5287883,"samples":6},{"name":"Using indexof","opsSec":715561007.2557237,"samples":9},{"name":"Using RegExp.test","opsSec":11233807.220113022,"samples":7},{"name":"Using RegExp.text with cached regex pattern","opsSec":11769015.727174401,"samples":5},{"name":"Using new RegExp.test","opsSec":3025328.651752171,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3436323.464339445,"samples":4}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|120,493,343|92|
|Using this|145,321,293|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:11:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using super","opsSec":120493342.61746195,"samples":7},{"name":"Using this","opsSec":145321293.2257175,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,939,053|94|
|Date.now()|15,447,903|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8939053.076184077,"samples":5},{"name":"Date.now()","opsSec":15447903.117778068,"samples":8}]}-->
