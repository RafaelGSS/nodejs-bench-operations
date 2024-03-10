## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|821,903,863|98|
|Using dot notation|820,292,038|96|
|Using define property (writable)|4,484,252|96|
|Using define property initialized (writable)|5,761,706|93|
|Using define property (getter)|2,366,994|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":821903862.8002962,"samples":6},{"name":"Using dot notation","opsSec":820292038.15731,"samples":7},{"name":"Using define property (writable)","opsSec":4484252.163715559,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5761705.756406169,"samples":4},{"name":"Using define property (getter)","opsSec":2366993.843300415,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.009ms
new Array(length)|10|0.002ms
array.push|100|0.019ms
new Array(length)|100|0.01ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.308ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|21.914ms
new Array(length)|1,000,000|15.264ms
array.push|100,000,000|996.186ms
new Array(length)|100,000,000|3,560.546ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.016ms
array.push|100|0.011ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.259ms
new Array(length)|10,000|3.303ms
array.push|1,000,000|77.083ms
new Array(length)|1,000,000|3.178ms
array.push|100,000,000|1,421.376ms
new Array(length)|100,000,000|3,983.216ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|585|87|
|Array.from|21|40|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:35:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Array","opsSec":585.1569233829887,"samples":3},{"name":"Array.from","opsSec":21.45298300970701,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|822,454,787|97|
|[async] async function|16,638,530|85|
|[async] function|282,008|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:37:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"function","opsSec":822454787.4152462,"samples":6},{"name":"[async] async function","opsSec":16638529.62999609,"samples":6},{"name":"[async] function","opsSec":282007.6160876214,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,361|88|
|new Blob (1024)|695|80|
|text (128)|28,689|74|
|text (1024)|14,376|81|
|arrayBuffer (128)|31,789|79|
|arrayBuffer (1024)|15,895|85|
|slice (0, 64)|86,706|81|
|slice (0, 512)|25,446|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:38:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Blob (128)","opsSec":5360.802506208578,"samples":3},{"name":"new Blob (1024)","opsSec":695.0597449049833,"samples":2},{"name":"text (128)","opsSec":28689.302605589786,"samples":4},{"name":"text (1024)","opsSec":14375.685499536075,"samples":3},{"name":"arrayBuffer (128)","opsSec":31789.18773578854,"samples":4},{"name":"arrayBuffer (1024)","opsSec":15894.810247575926,"samples":3},{"name":"slice (0, 64)","opsSec":86705.52154139224,"samples":3},{"name":"slice (0, 512)","opsSec":25446.4529853938,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|250,877|50|
|[True conditional] Using constructor name|192,405|94|
|[True conditional] Check if property is valid then instanceof |195,710|92|
|[False conditional] Using instanceof only|819,261,113|99|
|[False conditional] Using constructor name|818,295,597|92|
|[False conditional] Check if property is valid then instanceof |817,903,851|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:40:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":250876.67026197742,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":192404.86310178667,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":195709.78927668274,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":819261113.3317771,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":818295597.4619901,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":817903851.4387497,"samples":5}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,073|95|
|crypto.verify('RSA-SHA256')|2,966|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:42:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3072.6257890965376,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":2965.980092717068,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,570,130|98|
|fromUnixToISOString(new Date())|2,118,306|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:01:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2570129.5224817046,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2118306.321508058,"samples":8}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|13,203|86|
|Intl.DateTimeFormat().format(new Date())|10,290|76|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,724|84|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,556|96|
|Reusing Intl.DateTimeFormat()|532,034|100|
|Date.toLocaleDateString()|644,606|92|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|14,052|84|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:12:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":13203.188589158699,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":10289.707978855853,"samples":8},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13723.920220780174,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15556.429773724463,"samples":7},{"name":"Reusing Intl.DateTimeFormat()","opsSec":532033.6480908742,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":644605.7265612734,"samples":5},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":14052.361807136815,"samples":3},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|995,155|96|
|Using brackets {}|1,017,932|96|
|Using '' + |1,011,409|97|
|Using date.toString()|1,120,095|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:23:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":995154.9231939685,"samples":6},{"name":"Using brackets {}","opsSec":1017932.0398728173,"samples":5},{"name":"Using '' + ","opsSec":1011408.6893305867,"samples":7},{"name":"Using date.toString()","opsSec":1120095.005792838,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,476,514|97|
|Using delete property (proto: null)|21,903,859|96|
|Using delete property (cached proto: null)|3,515,428|98|
|Using undefined assignment|847,083,193|97|
|Using undefined assignment (proto: null)|25,040,174|95|
|Using undefined property (cached proto: null)|844,823,110|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:33:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using delete property","opsSec":3476513.6280086054,"samples":5},{"name":"Using delete property (proto: null)","opsSec":21903859.26242696,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3515428.05424562,"samples":7},{"name":"Using undefined assignment","opsSec":847083192.5919515,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":25040174.433300395,"samples":7},{"name":"Using undefined property (cached proto: null)","opsSec":844823110.4042964,"samples":8}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|235,248|50|
|NodeError|178,548|94|
|NodeError Range|178,877|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:44:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Error","opsSec":235248.39240552415,"samples":3},{"name":"NodeError","opsSec":178548.157072026,"samples":3},{"name":"NodeError Range","opsSec":178876.54809548543,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,915,636|94|
|Function returning explicitly undefined|1,923,690|94|
|Function returning implicitly undefined|1,978,612|95|
|Function returning string|1,937,015|99|
|Function returning integer|1,888,414|98|
|Function returning float|1,952,582|97|
|Function returning functions|1,896,174|96|
|Function returning arrow functions|1,635,333|97|
|Function returning empty object|1,957,180|100|
|Function returning empty array|1,678,160|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:00:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Function returning null","opsSec":1915636.4431936732,"samples":5},{"name":"Function returning explicitly undefined","opsSec":1923690.0382367373,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1978611.811232684,"samples":8},{"name":"Function returning string","opsSec":1937015.0995271993,"samples":9},{"name":"Function returning integer","opsSec":1888414.4185109471,"samples":7},{"name":"Function returning float","opsSec":1952581.8240767533,"samples":7},{"name":"Function returning functions","opsSec":1896174.4784068987,"samples":10},{"name":"Function returning arrow functions","opsSec":1635332.7296354542,"samples":8},{"name":"Function returning empty object","opsSec":1957180.1904315152,"samples":6},{"name":"Function returning empty array","opsSec":1678160.0845767388,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|118,904,522|98|
|using Array.includes (first item)|130,865,723|92|
|Using raw comparison|849,023,502|98|
|Using raw comparison (first item)|848,043,812|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:15:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":118904521.81247999,"samples":5},{"name":"using Array.includes (first item)","opsSec":130865722.95387892,"samples":6},{"name":"Using raw comparison","opsSec":849023501.8829561,"samples":8},{"name":"Using raw comparison (first item)","opsSec":848043812.3697596,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|92,049,892|94|
|Using Object.getOwnPropertyNames()|94,124,384|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:25:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using Object.keys()","opsSec":92049891.74516839,"samples":7},{"name":"Using Object.getOwnPropertyNames()","opsSec":94124384.03647603,"samples":6}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|26,088,186|99|
|Length = 10_000 - Array.at|26,292,926|97|
|Length = 1_000_000 - Array.at|26,301,927|100|
|Length = 100 - Array[length - 1]|845,718,958|92|
|Length = 10_000 - Array[length - 1]|845,356,867|100|
|Length = 1_000_000 - Array[length - 1]|845,917,738|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:35:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":26088186.36408932,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26292925.574929684,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26301926.731045373,"samples":7},{"name":"Length = 100 - Array[length - 1]","opsSec":845718958.1017936,"samples":9},{"name":"Length = 10_000 - Array[length - 1]","opsSec":845356866.7499095,"samples":7},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":845917737.5339876,"samples":7}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|78,778,009|96|
|Object.create({})|1,989,370|87|
|Cached Empty.prototype|845,982,728|96|
|Empty.prototype|2,152,255|88|
|Empty class|1,322,309|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:48:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Object.create(null)","opsSec":78778008.72230054,"samples":5},{"name":"Object.create({})","opsSec":1989370.2646492273,"samples":3},{"name":"Cached Empty.prototype","opsSec":845982727.5361638,"samples":6},{"name":"Empty.prototype","opsSec":2152255.0629298207,"samples":3},{"name":"Empty class","opsSec":1322309.0071050287,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,992,312|97|
|Using optional chain (obj.field?.field2) (undefined)|847,371,927|93|
|Using and operator (obj.field && obj.field.field2) (Valid)|849,106,836|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,583,535|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:58:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846992311.7054302,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":847371926.6308289,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":849106835.7390113,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845583535.4366314,"samples":6}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|309,240,077|94|
|Using parseInt(x, 10) - big number (10 len)|20,609,748|93|
|Using + - small number (2 len)|846,549,160|95|
|Using + - big number (10 len)|847,969,361|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:08:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":309240077.4090514,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20609748.029467814,"samples":6},{"name":"Using + - small number (2 len)","opsSec":846549159.920924,"samples":6},{"name":"Using + - big number (10 len)","opsSec":847969361.2829858,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,095,608|81|
|Using ? operator to avoid rejection|1,177,413|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:17:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using if to check function existence","opsSec":1095608.0664418498,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1177413.3984373407,"samples":5}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|347,376,517|94|
|Raw usage underscore usage|357,741,407|93|
|Manipulating private properties using #|256,628,572|93|
|Manipulating private properties using underscore(_)|235,292,512|85|
|Manipulating private properties using Symbol|261,531,580|92|
|Manipulating private properties using PrivateSymbol|53,675,596|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:26:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Raw usage private field","opsSec":347376516.5882738,"samples":5},{"name":"Raw usage underscore usage","opsSec":357741407.07346046,"samples":6},{"name":"Manipulating private properties using #","opsSec":256628571.61949337,"samples":7},{"name":"Manipulating private properties using underscore(_)","opsSec":235292512.03816423,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":261531579.58465165,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":53675596.14160946,"samples":7}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,875,118|99|
|Adding property in the object creation - small object|3,894,727|97|
|Adding property after the function creation - small class|240,049|86|
|Adding property in the function creation - small class|243,898|92|
|Adding property after the class creation - small class|202,187|84|
|Adding property in the class creation - small class|200,143|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:38:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3875117.8238039287,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3894727.235984899,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":240048.78316272912,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":243897.58577182755,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":202187.2805493683,"samples":5},{"name":"Adding property in the class creation - small class","opsSec":200142.7960015803,"samples":4}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|848,742,320|100|
|Getter|98,854,373|99|
|Method|848,742,608|98|
|DefineProperty (getter)|848,431,825|100|
|DefineProperty (getter & enumerable=false)|98,960,854|98|
|DefineProperty (getter & configurable=false)|849,153,324|98|
|DefineProperty (getter & enumerable=false & configurable=false)|98,602,962|95|
|DefineProperty (writable)|848,760,568|99|
|DefineProperty (writable & enumerable=false)|664,037,972|79|
|DefineProperty (writable & enumerable=false & configurable=false)|139,714,845|75|
|DefineProperties (getter)|61,608,449|87|
|DefineProperties (getter & enumerable=false)|98,605,539|96|
|DefineProperties (getter & enumerable=false & configurable=false)|98,644,359|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:54:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Getter (class)","opsSec":848742320.4762058,"samples":8},{"name":"Getter","opsSec":98854373.10991251,"samples":7},{"name":"Method","opsSec":848742608.0906402,"samples":7},{"name":"DefineProperty (getter)","opsSec":848431825.3293294,"samples":7},{"name":"DefineProperty (getter & enumerable=false)","opsSec":98960854.41382223,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":849153323.6077112,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":98602962.29035902,"samples":8},{"name":"DefineProperty (writable)","opsSec":848760567.9145799,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":664037972.0348951,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":139714845.12261045,"samples":6},{"name":"DefineProperties (getter)","opsSec":61608448.872481905,"samples":5},{"name":"DefineProperties (getter & enumerable=false)","opsSec":98605539.19831523,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":98644358.6229868,"samples":5}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|838,028,717|99|
|Setter|11,425,951|98|
|Method|841,289,750|98|
|DefineProperty (setter)|841,642,285|96|
|DefineProperty (setter & enumerable=false)|11,232,954|95|
|DefineProperty (setter & configurable=false)|11,122,589|98|
|DefineProperty (setter & enumerable=false & configurable=false)|11,109,111|98|
|DefineProperty (writable)|847,160,462|98|
|DefineProperty (writable & enumerable=false)|213,601,049|26|
|DefineProperty (writable & enumerable=false & configurable=false)|152,105,410|81|
|DefineProperties (setter)|123,989,912|87|
|DefineProperties (setter & enumerable=false)|11,156,471|97|
|DefineProperties (setter & enumerable=false & configurable=false)|10,853,050|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:17:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Setter (class)","opsSec":838028716.6509466,"samples":6},{"name":"Setter","opsSec":11425951.35223477,"samples":6},{"name":"Method","opsSec":841289750.3783615,"samples":6},{"name":"DefineProperty (setter)","opsSec":841642285.1537042,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11232954.424105458,"samples":6},{"name":"DefineProperty (setter & configurable=false)","opsSec":11122589.320964811,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11109110.795660002,"samples":6},{"name":"DefineProperty (writable)","opsSec":847160462.3242965,"samples":7},{"name":"DefineProperty (writable & enumerable=false)","opsSec":213601049.4860266,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":152105409.5980664,"samples":7},{"name":"DefineProperties (setter)","opsSec":123989912.00001241,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11156470.840748258,"samples":7},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10853049.504755002,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,547,914|98|
|Using replaceAll()|3,304,514|98|
|Using replaceAll(//g)|3,262,712|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:36:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using replace(//g)","opsSec":3547914.467913774,"samples":4},{"name":"Using replaceAll()","opsSec":3304514.0830329736,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3262711.8420515987,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,078,746|94|
|{ ...object, __proto__: null }|27,906,988|96|
|{ ...object, newProp: true }|785,490|87|
|structuredClone|257,824|99|
|JSON.parse + JSON.stringify|205,041|98|
|loop + object.keys starting with {}|522,519|86|
|loop + object.keys starting with { __proto__: null }|770,644|99|
|loop + object.keys starting with { randomProp: true }|553,947|99|
|object.keys + reduce(FN, {})|552,375|100|
|object.keys + reduce(FN, { __proto__: null })|772,278|98|
|object.keys + reduce(FN, { newProp: true })|556,592|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 22:46:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{ ...object }","opsSec":27078745.814329524,"samples":6},{"name":"{ ...object, __proto__: null }","opsSec":27906987.721196555,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":785490.142747378,"samples":3},{"name":"structuredClone","opsSec":257824.44688748237,"samples":5},{"name":"JSON.parse + JSON.stringify","opsSec":205040.85524927778,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":522518.7513525922,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":770644.2162993173,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":553946.9542502546,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":552375.192070828,"samples":6},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":772278.311225852,"samples":6},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":556591.7304697784,"samples":5}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|257,437|92|
|Sort using first char|1,341,205|95|
|Sort using localeCompare|1,101,705|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:02:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Sort using default","opsSec":257437.26007376617,"samples":4},{"name":"Sort using first char","opsSec":1341205.163088258,"samples":8},{"name":"Sort using localeCompare","opsSec":1101704.6491874377,"samples":7}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,947|92|
|{...smallObject} - Total keys: 2|102,843,954|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,238|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,505|100|
|{ ...bigObject, ...anotherBigObject }|1,146|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,247,372|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,189,847|97|
|{ ...smallObject, ...anotherSmallObject }|23,709,580|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:12:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1947.0039974562274,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":102843953.88273686,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2238.250676221611,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6504.94567658573,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1145.6793780360272,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14247372.150956646,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":35189846.63721258,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23709580.2064692,"samples":6}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,644|88|
|streams.web.Readable reading 1e3 * "some data"|517|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:24:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2643.9184284065586,"samples":8},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":517.1221207665229,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,399|96|
|streams.web.WritableStream writing 1e3 * "some data"|1,014|56|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:34:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4399.097896323375,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1014.0653992916618,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|848,126,819|99|
|Using backtick (`)|848,812,599|99|
|Using array.join|12,124,749|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:42:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using + sign","opsSec":848126819.3001086,"samples":6},{"name":"Using backtick (`)","opsSec":848812598.8244013,"samples":6},{"name":"Using array.join","opsSec":12124748.889825933,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,777,029|99|
|Using indexof|847,651,139|94|
|Using RegExp.test|16,155,902|100|
|Using RegExp.text with cached regex pattern|16,761,242|100|
|Using new RegExp.test|4,412,602|97|
|Using new RegExp.test with cached regex pattern|5,092,002|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:52:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using includes","opsSec":16777028.704962563,"samples":4},{"name":"Using indexof","opsSec":847651138.9475245,"samples":6},{"name":"Using RegExp.test","opsSec":16155901.7751239,"samples":10},{"name":"Using RegExp.text with cached regex pattern","opsSec":16761241.557073602,"samples":7},{"name":"Using new RegExp.test","opsSec":4412601.553944595,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5092001.686833273,"samples":5}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|28,580,533|99|
|Using this|159,644,353|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:07:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using super","opsSec":28580532.745673392,"samples":6},{"name":"Using this","opsSec":159644352.77209178,"samples":7}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,905,601|97|
|Date.now()|22,499,760|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:14:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":10905600.935648855,"samples":4},{"name":"Date.now()","opsSec":22499760.431089103,"samples":5}]}-->
