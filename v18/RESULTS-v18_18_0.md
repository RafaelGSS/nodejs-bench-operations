## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|819,107,138|96|
|Using dot notation|817,145,734|98|
|Using define property (writable)|4,276,698|94|
|Using define property initialized (writable)|5,950,513|94|
|Using define property (getter)|2,170,983|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Directly in the object","opsSec":819107137.8911016,"samples":6},{"name":"Using dot notation","opsSec":817145733.8994607,"samples":7},{"name":"Using define property (writable)","opsSec":4276697.868511327,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5950513.2145749135,"samples":5},{"name":"Using define property (getter)","opsSec":2170983.321024546,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.008ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.304ms
new Array(length)|10,000|0.174ms
array.push|1,000,000|22.648ms
new Array(length)|1,000,000|14.286ms
array.push|100,000,000|971.649ms
new Array(length)|100,000,000|3,625.721ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.018ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.265ms
new Array(length)|10,000|3.257ms
array.push|1,000,000|51.324ms
new Array(length)|1,000,000|2.565ms
array.push|100,000,000|1,733.058ms
new Array(length)|100,000,000|3,578.859ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|563|85|
|Array.from|22|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Array","opsSec":563.2764870659331,"samples":3},{"name":"Array.from","opsSec":21.694758681325347,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|820,598,862|97|
|[async] async function|16,938,448|90|
|[async] function|341,737|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"function","opsSec":820598861.5694212,"samples":6},{"name":"[async] async function","opsSec":16938447.826037392,"samples":6},{"name":"[async] function","opsSec":341736.6092829276,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,382|89|
|new Blob (1024)|696|79|
|text (128)|36,100|79|
|text (1024)|23,562|84|
|arrayBuffer (128)|36,097|80|
|arrayBuffer (1024)|24,066|82|
|slice (0, 64)|98,019|81|
|slice (0, 512)|56,071|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Blob (128)","opsSec":5381.607168524502,"samples":3},{"name":"new Blob (1024)","opsSec":696.4166440556652,"samples":3},{"name":"text (128)","opsSec":36099.57530593126,"samples":4},{"name":"text (1024)","opsSec":23561.7753359357,"samples":3},{"name":"arrayBuffer (128)","opsSec":36097.18583060802,"samples":3},{"name":"arrayBuffer (1024)","opsSec":24065.72051654426,"samples":4},{"name":"slice (0, 64)","opsSec":98018.63380576635,"samples":3},{"name":"slice (0, 512)","opsSec":56071.30934621706,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|262,830|54|
|[True conditional] Using constructor name|206,317|96|
|[True conditional] Check if property is valid then instanceof |207,633|96|
|[False conditional] Using instanceof only|822,580,049|95|
|[False conditional] Using constructor name|823,275,925|98|
|[False conditional] Check if property is valid then instanceof |823,821,314|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":262829.6883294658,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":206317.01602750804,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":207632.72572218283,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":822580048.687091,"samples":8},{"name":"[False conditional] Using constructor name","opsSec":823275924.9240704,"samples":8},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":823821314.1833465,"samples":7}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,409|89|
|crypto.verify('RSA-SHA256')|6,382|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6408.715459257804,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6381.759353247128,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,486,720|90|
|fromUnixToISOString(new Date())|2,070,459|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2486720.190525566,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2070458.8261572386,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,769|84|
|Intl.DateTimeFormat().format(new Date())|17,370|80|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,767|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,248|77|
|Reusing Intl.DateTimeFormat()|691,639|98|
|Date.toLocaleDateString()|721,377|98|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|18,622|80|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:11:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18768.73360648624,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17370.261345471903,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17766.754776808455,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21248.149297243348,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":691638.8036586964,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":721377.2015299452,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":18621.65685825323,"samples":4},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,004,621|98|
|Using brackets {}|1,020,170|98|
|Using '' + |1,013,010|91|
|Using date.toString()|1,102,332|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:26:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1004621.2172862835,"samples":6},{"name":"Using brackets {}","opsSec":1020169.9430967006,"samples":6},{"name":"Using '' + ","opsSec":1013009.9543819001,"samples":6},{"name":"Using date.toString()","opsSec":1102332.4309854454,"samples":7}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,429,992|98|
|Using delete property (proto: null)|24,582,512|98|
|Using delete property (cached proto: null)|3,456,436|96|
|Using undefined assignment|846,531,141|99|
|Using undefined assignment (proto: null)|27,482,903|94|
|Using undefined property (cached proto: null)|843,711,770|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3429991.608308004,"samples":6},{"name":"Using delete property (proto: null)","opsSec":24582511.731827863,"samples":8},{"name":"Using delete property (cached proto: null)","opsSec":3456435.781517944,"samples":5},{"name":"Using undefined assignment","opsSec":846531141.348624,"samples":8},{"name":"Using undefined assignment (proto: null)","opsSec":27482903.287215903,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":843711770.2390463,"samples":9}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|232,030|53|
|NodeError|179,378|97|
|NodeError Range|179,893|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:46:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":232030.29503231583,"samples":3},{"name":"NodeError","opsSec":179377.90655654992,"samples":3},{"name":"NodeError Range","opsSec":179893.3250700689,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,852,298|96|
|Function returning explicitly undefined|1,850,604|94|
|Function returning implicitly undefined|1,721,350|93|
|Function returning string|1,868,095|96|
|Function returning integer|1,801,003|98|
|Function returning float|1,888,090|96|
|Function returning functions|1,835,911|97|
|Function returning arrow functions|1,865,416|96|
|Function returning empty object|1,876,646|98|
|Function returning empty array|1,882,333|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:01:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1852297.9910739986,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1850604.2662128904,"samples":6},{"name":"Function returning implicitly undefined","opsSec":1721350.4932417416,"samples":5},{"name":"Function returning string","opsSec":1868095.077025868,"samples":8},{"name":"Function returning integer","opsSec":1801003.1507761544,"samples":6},{"name":"Function returning float","opsSec":1888090.2426518768,"samples":5},{"name":"Function returning functions","opsSec":1835911.34403424,"samples":5},{"name":"Function returning arrow functions","opsSec":1865415.5208857283,"samples":8},{"name":"Function returning empty object","opsSec":1876646.3095002563,"samples":7},{"name":"Function returning empty array","opsSec":1882332.870699789,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|846,656,094|98|
|using Array.includes (first item)|847,175,300|98|
|Using raw comparison|848,441,150|99|
|Using raw comparison (first item)|847,761,678|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:15:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":846656094.0170757,"samples":11},{"name":"using Array.includes (first item)","opsSec":847175300.2876897,"samples":7},{"name":"Using raw comparison","opsSec":848441150.1127291,"samples":7},{"name":"Using raw comparison (first item)","opsSec":847761678.2131319,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|93,859,165|96|
|Using Object.getOwnPropertyNames()|95,503,343|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:26:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":93859165.04603274,"samples":6},{"name":"Using Object.getOwnPropertyNames()","opsSec":95503342.6056496,"samples":7}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|27,153,792|95|
|Length = 10_000 - Array.at|27,300,553|96|
|Length = 1_000_000 - Array.at|27,098,055|94|
|Length = 100 - Array[length - 1]|847,379,918|100|
|Length = 10_000 - Array[length - 1]|844,886,423|101|
|Length = 1_000_000 - Array[length - 1]|847,184,735|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:37:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":27153791.524160076,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":27300553.293940555,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":27098055.32676241,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":847379918.4664456,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":844886423.2793416,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":847184735.0171555,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|77,574,565|93|
|Object.create({})|1,491,172|88|
|Cached Empty.prototype|848,067,563|98|
|Empty.prototype|1,636,992|86|
|Empty class|982,839|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:49:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":77574564.96777095,"samples":7},{"name":"Object.create({})","opsSec":1491172.448529488,"samples":3},{"name":"Cached Empty.prototype","opsSec":848067562.8687308,"samples":6},{"name":"Empty.prototype","opsSec":1636991.8172919229,"samples":3},{"name":"Empty class","opsSec":982838.5206066543,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,743,234|99|
|Using optional chain (obj.field?.field2) (undefined)|847,249,089|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,293,073|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|844,218,600|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:59:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846743234.1608764,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":847249089.1655163,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848293072.5546321,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":844218599.8591769,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|281,969,883|94|
|Using parseInt(x, 10) - big number (10 len)|21,311,802|95|
|Using + - small number (2 len)|845,778,825|95|
|Using + - big number (10 len)|846,381,336|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:10:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":281969882.6601386,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21311802.018235248,"samples":9},{"name":"Using + - small number (2 len)","opsSec":845778825.2149307,"samples":6},{"name":"Using + - big number (10 len)","opsSec":846381336.3615258,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|768,851|83|
|Using ? operator to avoid rejection|800,921|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:18:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":768850.5057534121,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":800921.3570580847,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|347,715,210|93|
|Raw usage underscore usage|361,160,817|96|
|Manipulating private properties using #|256,509,511|86|
|Manipulating private properties using underscore(_)|240,298,742|88|
|Manipulating private properties using Symbol|219,845,289|79|
|Manipulating private properties using PrivateSymbol|50,624,872|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:25:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":347715209.93475586,"samples":6},{"name":"Raw usage underscore usage","opsSec":361160816.5965186,"samples":7},{"name":"Manipulating private properties using #","opsSec":256509511.4001475,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":240298742.13999432,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":219845289.24719256,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50624872.269480854,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,779,124|100|
|Adding property in the object creation - small object|3,819,781|95|
|Adding property after the function creation - small class|194,418|89|
|Adding property in the function creation - small class|192,424|87|
|Adding property after the class creation - small class|164,385|88|
|Adding property in the class creation - small class|162,198|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:39:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3779124.087467065,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3819781.2779096975,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":194417.76813670772,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":192423.9851295844,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":164384.95890522204,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":162197.79885523597,"samples":5}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,508,203|100|
|Getter|99,031,020|95|
|Method|848,873,078|96|
|DefineProperty (getter)|847,990,067|96|
|DefineProperty (getter & enumerable=false)|99,038,867|95|
|DefineProperty (getter & configurable=false)|849,268,232|101|
|DefineProperty (getter & enumerable=false & configurable=false)|99,675,270|98|
|DefineProperty (writable)|848,387,352|98|
|DefineProperty (writable & enumerable=false)|574,536,582|71|
|DefineProperty (writable & enumerable=false & configurable=false)|148,752,887|72|
|DefineProperties (getter)|65,773,005|89|
|DefineProperties (getter & enumerable=false)|98,893,535|96|
|DefineProperties (getter & enumerable=false & configurable=false)|99,048,038|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:59:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":848508203.497266,"samples":6},{"name":"Getter","opsSec":99031020.1654046,"samples":5},{"name":"Method","opsSec":848873078.2167206,"samples":7},{"name":"DefineProperty (getter)","opsSec":847990067.2375263,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":99038867.00300044,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":849268231.547391,"samples":8},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":99675269.64902677,"samples":5},{"name":"DefineProperty (writable)","opsSec":848387351.8751976,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":574536582.3911774,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":148752886.90924558,"samples":6},{"name":"DefineProperties (getter)","opsSec":65773005.03872324,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98893534.72087704,"samples":7},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":99048038.13803363,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|835,781,911|99|
|Setter|12,247,008|100|
|Method|839,507,864|99|
|DefineProperty (setter)|838,755,649|100|
|DefineProperty (setter & enumerable=false)|12,270,772|97|
|DefineProperty (setter & configurable=false)|12,065,381|99|
|DefineProperty (setter & enumerable=false & configurable=false)|12,372,063|98|
|DefineProperty (writable)|847,758,115|96|
|DefineProperty (writable & enumerable=false)|184,694,498|23|
|DefineProperty (writable & enumerable=false & configurable=false)|166,864,563|80|
|DefineProperties (setter)|846,938,698|99|
|DefineProperties (setter & enumerable=false)|12,103,703|97|
|DefineProperties (setter & enumerable=false & configurable=false)|12,101,707|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:20:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":835781910.521469,"samples":6},{"name":"Setter","opsSec":12247007.514147347,"samples":5},{"name":"Method","opsSec":839507864.1902106,"samples":6},{"name":"DefineProperty (setter)","opsSec":838755648.5413158,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":12270772.294497725,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":12065381.068936782,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":12372062.59343553,"samples":6},{"name":"DefineProperty (writable)","opsSec":847758114.9411453,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":184694498.2919235,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":166864563.48916936,"samples":5},{"name":"DefineProperties (setter)","opsSec":846938698.2852505,"samples":9},{"name":"DefineProperties (setter & enumerable=false)","opsSec":12103703.265255606,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12101707.44768146,"samples":6}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,451,789|95|
|Using replaceAll()|3,106,426|100|
|Using replaceAll(//g)|3,097,089|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:35:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3451789.0785086383,"samples":7},{"name":"Using replaceAll()","opsSec":3106425.55521102,"samples":7},{"name":"Using replaceAll(//g)","opsSec":3097089.3851774554,"samples":6}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,221,913|94|
|{ ...object, __proto__: null }|27,905,792|98|
|{ ...object, newProp: true }|644,011|86|
|structuredClone|253,713|99|
|JSON.parse + JSON.stringify|206,398|96|
|loop + object.keys starting with {}|1,272,512|96|
|loop + object.keys starting with { __proto__: null }|731,620|87|
|loop + object.keys starting with { randomProp: true }|529,728|98|
|object.keys + reduce(FN, {})|529,542|99|
|object.keys + reduce(FN, { __proto__: null })|746,289|98|
|object.keys + reduce(FN, { newProp: true })|542,836|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:48:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27221913.129808553,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":27905791.825553816,"samples":6},{"name":"{ ...object, newProp: true }","opsSec":644011.3814550978,"samples":3},{"name":"structuredClone","opsSec":253713.24913879,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":206398.40983570303,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1272511.5250583899,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":731619.5420042077,"samples":8},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":529727.9614635074,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":529542.2226195193,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":746289.0436936346,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":542835.9183175035,"samples":7}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|270,285|98|
|Sort using first char|1,338,953|99|
|Sort using localeCompare|1,176,866|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:02:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":270284.6435848945,"samples":5},{"name":"Sort using first char","opsSec":1338953.257458893,"samples":6},{"name":"Sort using localeCompare","opsSec":1176865.504792376,"samples":6}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,033|95|
|{...smallObject} - Total keys: 2|108,710,192|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,121|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,231|98|
|{ ...bigObject, ...anotherBigObject }|1,133|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,062,150|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,090,006|99|
|{ ...smallObject, ...anotherSmallObject }|23,295,744|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:14:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2032.896502819037,"samples":7},{"name":"{...smallObject} - Total keys: 2","opsSec":108710192.01392207,"samples":10},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2121.3280735914,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6231.37277758998,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1132.643660395869,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14062150.484071841,"samples":8},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36090006.15978888,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23295744.459362045,"samples":8}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,554|86|
|streams.web.Readable reading 1e3 * "some data"|538|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:25:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2553.975478631432,"samples":9},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":538.3308889312021,"samples":6}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,786|92|
|streams.web.WritableStream writing 1e3 * "some data"|917|55|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:34:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4785.910129142247,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":916.8398666173005,"samples":6}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|848,305,859|100|
|Using backtick (`)|849,213,462|101|
|Using array.join|12,219,847|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:44:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":848305858.9714684,"samples":6},{"name":"Using backtick (`)","opsSec":849213461.7883042,"samples":9},{"name":"Using array.join","opsSec":12219846.579437312,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|847,389,015|99|
|Using indexof|848,741,333|98|
|Using RegExp.test|15,890,140|99|
|Using RegExp.text with cached regex pattern|17,024,048|99|
|Using new RegExp.test|4,358,575|98|
|Using new RegExp.test with cached regex pattern|5,039,056|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:53:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":847389015.1098441,"samples":8},{"name":"Using indexof","opsSec":848741333.4406807,"samples":11},{"name":"Using RegExp.test","opsSec":15890139.548258418,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17024048.22407149,"samples":5},{"name":"Using new RegExp.test","opsSec":4358575.436177182,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5039055.764162341,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|160,184,554|92|
|Using this|158,947,542|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:08:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":160184554.13716108,"samples":6},{"name":"Using this","opsSec":158947542.19003314,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,260,468|92|
|Date.now()|22,567,112|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:15:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":11260467.605246665,"samples":5},{"name":"Date.now()","opsSec":22567111.56427414,"samples":7}]}-->
