## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|10,194,541|5097271|
|Using dot notation|13,545,077|6775140|
|Using define property (writable)|3,034,735|1517368|
|Using define property initialized (writable)|3,879,726|1939864|
|Using define property (getter)|1,665,947|832974|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:20:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":10194541.999836221,"samples":5097271},{"name":"Using dot notation","opsSec":13545077.770303827,"samples":6775140},{"name":"Using define property (writable)","opsSec":3034735.404906466,"samples":1517368},{"name":"Using define property initialized (writable)","opsSec":3879726.137659913,"samples":1939864},{"name":"Using define property (getter)","opsSec":1665947.7601424237,"samples":832974}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.002ms
array.push|100|0.129ms
new Array(length)|100|0.016ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.133ms
array.push|1,000,000|26.694ms
new Array(length)|1,000,000|17.796ms
array.push|100,000,000|1,869.956ms
new Array(length)|100,000,000|4,720.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.333ms
new Array(length)|10,000|0.214ms
array.push|1,000,000|20.44ms
new Array(length)|1,000,000|8.171ms
array.push|100,000,000|2,007.135ms
new Array(length)|100,000,000|4,714.528ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|137|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":272.54273850710587,"samples":137},{"name":"Array.from","opsSec":22.981196890041673,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,335|1168|
|new Blob (1024)|554|278|
|text (128)|4,887|2444|
|text (1024)|613|307|
|arrayBuffer (128)|4,897|2449|
|arrayBuffer (1024)|620|311|
|slice (0, 64)|274,087|137044|
|slice (0, 512)|29,891|14946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:13:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":2335.8331093869533,"samples":1168},{"name":"new Blob (1024)","opsSec":554.8143229593883,"samples":278},{"name":"text (128)","opsSec":4887.720735194246,"samples":2444},{"name":"text (1024)","opsSec":613.7422000416715,"samples":307},{"name":"arrayBuffer (128)","opsSec":4897.388864721513,"samples":2449},{"name":"arrayBuffer (1024)","opsSec":620.9327457629786,"samples":311},{"name":"slice (0, 64)","opsSec":274087.6026036449,"samples":137044},{"name":"slice (0, 512)","opsSec":29891.533213868097,"samples":14946}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|302,073|151037|
|[True conditional] Using constructor name|296,215|148108|
|[True conditional] Check if property is valid then instanceof |298,490|149246|
|[False conditional] Using instanceof only|15,760,887|7880444|
|[False conditional] Using constructor name|15,341,057|7670529|
|[False conditional] Check if property is valid then instanceof |15,918,991|7959496|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:22:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":302073.9329507514,"samples":151037},{"name":"[True conditional] Using constructor name","opsSec":296215.87852670206,"samples":148108},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":298490.07173750806,"samples":149246},{"name":"[False conditional] Using instanceof only","opsSec":15760887.135584904,"samples":7880444},{"name":"[False conditional] Using constructor name","opsSec":15341057.896201504,"samples":7670529},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15918991.575702827,"samples":7959496}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,792|3397|
|crypto.verify('RSA-SHA256')|6,819|3410|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:29:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6792.949171164876,"samples":3397},{"name":"crypto.verify('RSA-SHA256')","opsSec":6819.980985779986,"samples":3410}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,248,114|624058|
|fromUnixToISOString(new Date())|1,798,326|899164|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1248114.8769600582,"samples":624058},{"name":"fromUnixToISOString(new Date())","opsSec":1798326.5980281448,"samples":899164}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,126|11564|
|Intl.DateTimeFormat().format(new Date())|20,236|10119|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,387|11194|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,835|10918|
|Reusing Intl.DateTimeFormat()|674,043|337022|
|Date.toLocaleDateString()|673,023|336512|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,963|11482|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:40:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23126.254383557443,"samples":11564},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20236.359277020514,"samples":10119},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22387.73063092151,"samples":11194},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21835.246595998582,"samples":10918},{"name":"Reusing Intl.DateTimeFormat()","opsSec":674043.1576715915,"samples":337022},{"name":"Date.toLocaleDateString()","opsSec":673023.7696877887,"samples":336512},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22963.353397387757,"samples":11482}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|956,002|478002|
|Using brackets {}|966,105|483053|
|Using '' + |955,008|477505|
|Using date.toString()|1,050,839|525420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":956002.7709570406,"samples":478002},{"name":"Using brackets {}","opsSec":966105.9865405454,"samples":483053},{"name":"Using '' + ","opsSec":955008.4546747109,"samples":477505},{"name":"Using date.toString()","opsSec":1050839.5612208634,"samples":525420}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,758,965|1379483|
|Using delete property (proto: null)|7,727,699|3863850|
|Using delete property (cached proto: null)|2,796,131|1398066|
|Using undefined assignment|12,390,992|6195497|
|Using undefined assignment (proto: null)|8,302,043|4151022|
|Using undefined property (cached proto: null)|11,967,305|5983653|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:53:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2758965.0541052357,"samples":1379483},{"name":"Using delete property (proto: null)","opsSec":7727699.305721655,"samples":3863850},{"name":"Using delete property (cached proto: null)","opsSec":2796131.6293062926,"samples":1398066},{"name":"Using undefined assignment","opsSec":12390992.764895674,"samples":6195497},{"name":"Using undefined assignment (proto: null)","opsSec":8302043.229966579,"samples":4151022},{"name":"Using undefined property (cached proto: null)","opsSec":11967305.029300675,"samples":5983653}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|288,709|144356|
|NodeError|290,427|145214|
|NodeError Range|287,704|143853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:02:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":288709.8641454016,"samples":144356},{"name":"NodeError","opsSec":290427.32205537765,"samples":145214},{"name":"NodeError Range","opsSec":287704.5264759183,"samples":143853}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,603,111|801556|
|Function returning explicitly undefined|1,585,431|792716|
|Function returning implicitly undefined|1,679,293|839647|
|Function returning string|1,574,210|787106|
|Function returning integer|1,675,927|837964|
|Function returning float|1,599,202|799602|
|Function returning functions|1,554,646|777324|
|Function returning arrow functions|1,632,737|816369|
|Function returning empty object|1,675,108|837555|
|Function returning empty array|1,567,855|783928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:14:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1603111.6753709596,"samples":801556},{"name":"Function returning explicitly undefined","opsSec":1585431.836867973,"samples":792716},{"name":"Function returning implicitly undefined","opsSec":1679293.6793122867,"samples":839647},{"name":"Function returning string","opsSec":1574210.7510574951,"samples":787106},{"name":"Function returning integer","opsSec":1675927.263563468,"samples":837964},{"name":"Function returning float","opsSec":1599202.3198053024,"samples":799602},{"name":"Function returning functions","opsSec":1554646.7354874103,"samples":777324},{"name":"Function returning arrow functions","opsSec":1632737.0469700212,"samples":816369},{"name":"Function returning empty object","opsSec":1675108.9035445356,"samples":837555},{"name":"Function returning empty array","opsSec":1567855.9504794676,"samples":783928}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,643,543|6821772|
|using Array.includes (first item)|14,908,814|7454408|
|Using raw comparison|15,996,423|7998212|
|Using raw comparison (first item)|15,939,967|7969984|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:44:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":13643543.9174329,"samples":6821772},{"name":"using Array.includes (first item)","opsSec":14908814.863491869,"samples":7454408},{"name":"Using raw comparison","opsSec":15996423.575590609,"samples":7998212},{"name":"Using raw comparison (first item)","opsSec":15939967.231461339,"samples":7969984}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,343,580|6171791|
|Using Object.getOwnPropertyNames()|12,585,325|6292663|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12343580.260493213,"samples":6171791},{"name":"Using Object.getOwnPropertyNames()","opsSec":12585325.530456828,"samples":6292663}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,635,769|7317885|
|Length = 10_000 - Array.at|14,324,121|7162061|
|Length = 1_000_000 - Array.at|15,628,871|7814437|
|Length = 100 - Array[length - 1]|15,723,223|7861612|
|Length = 10_000 - Array[length - 1]|15,149,252|7574627|
|Length = 1_000_000 - Array[length - 1]|15,650,333|7825167|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:04:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14635769.88989183,"samples":7317885},{"name":"Length = 10_000 - Array.at","opsSec":14324121.510968432,"samples":7162061},{"name":"Length = 1_000_000 - Array.at","opsSec":15628871.476800466,"samples":7814437},{"name":"Length = 100 - Array[length - 1]","opsSec":15723223.443843937,"samples":7861612},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15149252.674954087,"samples":7574627},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15650333.467090247,"samples":7825167}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|14,665,336|7332669|
|~ (small)|15,679,902|7839952|
|Math.floor (long)|15,231,733|7615867|
|~ (long)|15,260,491|7630246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:15:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":14665336.653742576,"samples":7332669},{"name":"~ (small)","opsSec":15679902.268107839,"samples":7839952},{"name":"Math.floor (long)","opsSec":15231733.543931117,"samples":7615867},{"name":"~ (long)","opsSec":15260491.73601813,"samples":7630246}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,942,942|5971472|
|Object.create({})|1,731,556|866614|
|Cached Empty.prototype|15,058,999|7529500|
|Empty.prototype|2,050,091|1025046|
|Empty class|1,184,285|592143|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":11942942.334014984,"samples":5971472},{"name":"Object.create({})","opsSec":1731556.206299975,"samples":866614},{"name":"Cached Empty.prototype","opsSec":15058999.190601557,"samples":7529500},{"name":"Empty.prototype","opsSec":2050091.720715716,"samples":1025046},{"name":"Empty class","opsSec":1184285.9022232878,"samples":592143}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,755,957|7377979|
|Using optional chain (obj.field?.field2) (undefined)|14,898,760|7449381|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,085,653|7042827|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,425,580|7712791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:35:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14755957.565680249,"samples":7377979},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14898760.856487982,"samples":7449381},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14085653.62959204,"samples":7042827},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15425580.187446408,"samples":7712791}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,115,978|7057990|
|Using parseInt(x, 10) - big number (10 len)|15,085,739|7542870|
|Using + - small number (2 len)|14,819,588|7409795|
|Using + - big number (10 len)|14,818,347|7409174|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:45:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14115978.352319188,"samples":7057990},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15085739.488928486,"samples":7542870},{"name":"Using + - small number (2 len)","opsSec":14819588.960115843,"samples":7409795},{"name":"Using + - big number (10 len)","opsSec":14818347.077066986,"samples":7409174}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|989,882|494942|
|Using ? operator to avoid rejection|981,894|490948|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":989882.6858240443,"samples":494942},{"name":"Using ? operator to avoid rejection","opsSec":981894.7640111794,"samples":490948}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,980,872|7490437|
|Raw usage underscore usage|15,142,576|7571289|
|Manipulating private properties using #|15,044,340|7522171|
|Manipulating private properties using underscore(_)|14,457,412|7228707|
|Manipulating private properties using Symbol|15,579,880|7789941|
|Manipulating private properties using PrivateSymbol|10,717,745|5358873|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:02:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":14980872.384411355,"samples":7490437},{"name":"Raw usage underscore usage","opsSec":15142576.77329739,"samples":7571289},{"name":"Manipulating private properties using #","opsSec":15044340.855570555,"samples":7522171},{"name":"Manipulating private properties using underscore(_)","opsSec":14457412.977827873,"samples":7228707},{"name":"Manipulating private properties using Symbol","opsSec":15579880.331768436,"samples":7789941},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10717745.9330429,"samples":5358873}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,011,135|2505568|
|Adding property in the object creation - small object|5,012,539|2506270|
|Adding property after the function creation - small class|247,568|123785|
|Adding property in the function creation - small class|237,604|119655|
|Adding property after the class creation - small class|235,216|117609|
|Adding property in the class creation - small class|234,249|117125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:12:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5011135.0933358325,"samples":2505568},{"name":"Adding property in the object creation - small object","opsSec":5012539.353740459,"samples":2506270},{"name":"Adding property after the function creation - small class","opsSec":247568.67749938194,"samples":123785},{"name":"Adding property in the function creation - small class","opsSec":237604.74065595228,"samples":119655},{"name":"Adding property after the class creation - small class","opsSec":235216.88720830885,"samples":117609},{"name":"Adding property in the class creation - small class","opsSec":234249.43292334583,"samples":117125}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,993,012|7496507|
|Getter|12,420,753|6210377|
|Method|15,163,632|7581817|
|DefineProperty (getter)|15,213,082|7606542|
|DefineProperty (getter & enumerable=false)|12,753,804|6376903|
|DefineProperty (getter & configurable=false)|15,277,705|7638853|
|DefineProperty (getter & enumerable=false & configurable=false)|12,965,853|6482927|
|DefineProperty (writable)|15,363,029|7681515|
|DefineProperty (writable & enumerable=false)|15,093,144|7546573|
|DefineProperty (writable & enumerable=false & configurable=false)|15,133,598|7566801|
|DefineProperties (getter)|12,864,111|6432056|
|DefineProperties (getter & enumerable=false)|12,851,457|6425729|
|DefineProperties (getter & enumerable=false & configurable=false)|13,005,026|6502514|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:29:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14993012.808648575,"samples":7496507},{"name":"Getter","opsSec":12420753.7548567,"samples":6210377},{"name":"Method","opsSec":15163632.753854116,"samples":7581817},{"name":"DefineProperty (getter)","opsSec":15213082.978863174,"samples":7606542},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12753804.531130623,"samples":6376903},{"name":"DefineProperty (getter & configurable=false)","opsSec":15277705.860048745,"samples":7638853},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12965853.135788364,"samples":6482927},{"name":"DefineProperty (writable)","opsSec":15363029.952955503,"samples":7681515},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15093144.71955743,"samples":7546573},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15133598.324329289,"samples":7566801},{"name":"DefineProperties (getter)","opsSec":12864111.881056227,"samples":6432056},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12851457.232461445,"samples":6425729},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13005026.27633491,"samples":6502514}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,824,803|7412402|
|Setter|5,955,567|2977784|
|Method|14,406,785|7203393|
|DefineProperty (setter)|14,611,070|7305536|
|DefineProperty (setter & enumerable=false)|5,930,333|2965167|
|DefineProperty (setter & configurable=false)|6,003,358|3001680|
|DefineProperty (setter & enumerable=false & configurable=false)|5,971,331|2985666|
|DefineProperty (writable)|14,596,649|7298325|
|DefineProperty (writable & enumerable=false)|14,931,086|7465544|
|DefineProperty (writable & enumerable=false & configurable=false)|14,984,195|7492098|
|DefineProperties (setter)|14,951,476|7475739|
|DefineProperties (setter & enumerable=false)|5,908,567|2954284|
|DefineProperties (setter & enumerable=false & configurable=false)|6,003,149|3001575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:51:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14824803.358321019,"samples":7412402},{"name":"Setter","opsSec":5955567.740399055,"samples":2977784},{"name":"Method","opsSec":14406785.921320572,"samples":7203393},{"name":"DefineProperty (setter)","opsSec":14611070.453140218,"samples":7305536},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5930333.347771587,"samples":2965167},{"name":"DefineProperty (setter & configurable=false)","opsSec":6003358.413189167,"samples":3001680},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5971331.161232215,"samples":2985666},{"name":"DefineProperty (writable)","opsSec":14596649.851497075,"samples":7298325},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14931086.036910519,"samples":7465544},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14984195.844874889,"samples":7492098},{"name":"DefineProperties (setter)","opsSec":14951476.920449892,"samples":7475739},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5908567.363196037,"samples":2954284},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6003149.440935505,"samples":3001575}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,620,852|1310427|
|Using replaceAll()|2,435,567|1217784|
|Using replaceAll(//g)|2,382,563|1191283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:02:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2620852.7227666695,"samples":1310427},{"name":"Using replaceAll()","opsSec":2435567.116851535,"samples":1217784},{"name":"Using replaceAll(//g)","opsSec":2382563.3176093567,"samples":1191283}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,225,025|4612513|
|{ ...object, __proto__: null }|2,188,184|1094093|
|{ ...object, newProp: true }|9,867,868|4933935|
|structuredClone|256,297|128149|
|JSON.parse + JSON.stringify|249,693|124850|
|loop + object.keys starting with {}|1,301,365|650683|
|loop + object.keys starting with { __proto__: null }|740,890|370446|
|loop + object.keys starting with { randomProp: true }|562,070|281036|
|object.keys + reduce(FN, {})|1,214,399|607200|
|object.keys + reduce(FN, { __proto__: null })|781,999|391000|
|object.keys + reduce(FN, { newProp: true })|568,674|284338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:10:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9225025.857072225,"samples":4612513},{"name":"{ ...object, __proto__: null }","opsSec":2188184.247050848,"samples":1094093},{"name":"{ ...object, newProp: true }","opsSec":9867868.761496073,"samples":4933935},{"name":"structuredClone","opsSec":256297.45449365693,"samples":128149},{"name":"JSON.parse + JSON.stringify","opsSec":249693.51467229778,"samples":124850},{"name":"loop + object.keys starting with {}","opsSec":1301365.7677873117,"samples":650683},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":740890.9433044828,"samples":370446},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":562070.773587044,"samples":281036},{"name":"object.keys + reduce(FN, {})","opsSec":1214399.282924986,"samples":607200},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":781999.5899559845,"samples":391000},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":568674.1165518138,"samples":284338}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|305,171|152586|
|Sort using first char|1,155,225|577613|
|Sort using localeCompare|1,058,405|529203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:19:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":305171.5203414652,"samples":152586},{"name":"Sort using first char","opsSec":1155225.377112796,"samples":577613},{"name":"Sort using localeCompare","opsSec":1058405.5914045237,"samples":529203}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,885|943|
|{...smallObject} - Total keys: 2|11,998,265|5999133|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,217|1109|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,767|3384|
|{ ...bigObject, ...anotherBigObject }|1,179|590|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,363,553|3181777|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,321,595|5160798|
|{ ...smallObject, ...anotherSmallObject }|9,020,046|4510024|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:26:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1885.0502965115113,"samples":943},{"name":"{...smallObject} - Total keys: 2","opsSec":11998265.268399157,"samples":5999133},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2217.0400970639366,"samples":1109},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6767.387456940408,"samples":3384},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1179.9751545133095,"samples":590},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6363553.892326959,"samples":3181777},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10321595.427696219,"samples":5160798},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9020046.973685151,"samples":4510024}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,200|1101|
|streams.web.Readable reading 1e3 * "some data"|2,074|1038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:34:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2200.289996110114,"samples":1101},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2074.253246378501,"samples":1038}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,097|3049|
|streams.web.WritableStream writing 1e3 * "some data"|2,441|1228|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:39:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6097.345132934519,"samples":3049},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2441.1952881264774,"samples":1228}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,663,406|7331704|
|Using backtick (`)|14,637,804|7319052|
|Using array.join|5,877,300|2938651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:46:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14663406.4251484,"samples":7331704},{"name":"Using backtick (`)","opsSec":14637804.8371716,"samples":7319052},{"name":"Using array.join","opsSec":5877300.544180885,"samples":2938651}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,486,200|7243101|
|(short string) (true) String#slice and strict comparison|12,683,808|6341905|
|(long string) (true) String#endsWith|13,773,246|6886624|
|(long string) (true) String#slice and strict comparison|12,225,952|6112977|
|(short string) (false) String#endsWith|15,088,046|7544106|
|(short string) (false) String#slice and strict comparison|12,793,372|6396687|
|(long string) (false) String#endsWith|14,872,064|7436033|
|(long string) (false) String#slice and strict comparison|12,467,888|6233945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:58:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14486200.870506195,"samples":7243101},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12683808.253702426,"samples":6341905},{"name":"(long string) (true) String#endsWith","opsSec":13773246.366926292,"samples":6886624},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12225952.690210478,"samples":6112977},{"name":"(short string) (false) String#endsWith","opsSec":15088046.559500622,"samples":7544106},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12793372.111368155,"samples":6396687},{"name":"(long string) (false) String#endsWith","opsSec":14872064.914438337,"samples":7436033},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12467888.648313822,"samples":6233945}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,365,866|4182934|
|Using indexof|8,317,458|4158730|
|Using RegExp.test|7,233,120|3616561|
|Using RegExp.text with cached regex pattern|7,879,090|3939546|
|Using new RegExp.test|3,383,130|1691566|
|Using new RegExp.test with cached regex pattern|3,636,872|1818437|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8365866.215787705,"samples":4182934},{"name":"Using indexof","opsSec":8317458.523319369,"samples":4158730},{"name":"Using RegExp.test","opsSec":7233120.2530711135,"samples":3616561},{"name":"Using RegExp.text with cached regex pattern","opsSec":7879090.914566703,"samples":3939546},{"name":"Using new RegExp.test","opsSec":3383130.101034221,"samples":1691566},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3636872.6755077806,"samples":1818437}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,516,171|6758087|
|(short string) (true) String#slice and strict comparison|12,487,184|6243593|
|(long string) (true) String#startsWith|13,119,128|6559565|
|(long string) (true) String#slice and strict comparison|12,004,277|6002139|
|(short string) (false) String#startsWith|14,726,947|7363474|
|(short string) (false) String#slice and strict comparison|12,235,081|6117541|
|(long string) (false) String#startsWith|14,270,933|7135467|
|(long string) (false) String#slice and strict comparison|12,223,853|6111927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:25:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13516171.560764048,"samples":6758087},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12487184.752097718,"samples":6243593},{"name":"(long string) (true) String#startsWith","opsSec":13119128.882968687,"samples":6559565},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12004277.372139372,"samples":6002139},{"name":"(short string) (false) String#startsWith","opsSec":14726947.239391102,"samples":7363474},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12235081.65669723,"samples":6117541},{"name":"(long string) (false) String#startsWith","opsSec":14270933.739074176,"samples":7135467},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12223853.659744522,"samples":6111927}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,738,865|7369433|
|Using this|14,526,884|7263443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:36:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14738865.341890065,"samples":7369433},{"name":"Using this","opsSec":14526884.325949015,"samples":7263443}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,069,228|3034615|
|Date.now()|8,257,644|4128823|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:43:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6069228.227133141,"samples":3034615},{"name":"Date.now()","opsSec":8257644.181774031,"samples":4128823}]}-->
