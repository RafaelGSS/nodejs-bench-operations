## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|13,933,392|6966697|
|Using dot notation|13,548,374|6774188|
|Using define property (writable)|2,994,448|1497225|
|Using define property initialized (writable)|3,711,080|1855541|
|Using define property (getter)|1,830,673|915337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:17:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":13933392.8568513,"samples":6966697},{"name":"Using dot notation","opsSec":13548374.31993359,"samples":6774188},{"name":"Using define property (writable)","opsSec":2994448.335185077,"samples":1497225},{"name":"Using define property initialized (writable)","opsSec":3711080.9905208247,"samples":1855541},{"name":"Using define property (getter)","opsSec":1830673.165215418,"samples":915337}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.009ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.027ms
array.push|10,000|0.271ms
new Array(length)|10,000|0.306ms
array.push|1,000,000|30.897ms
new Array(length)|1,000,000|8.015ms
array.push|100,000,000|1,830.074ms
new Array(length)|100,000,000|4,528.34ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.016ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.012ms
array.push|10,000|0.233ms
new Array(length)|10,000|0.151ms
array.push|1,000,000|24.048ms
new Array(length)|1,000,000|4.482ms
array.push|100,000,000|2,554.75ms
new Array(length)|100,000,000|4,156.825ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|309|155|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:33:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":309.27584483637094,"samples":155},{"name":"Array.from","opsSec":22.84247355113426,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,307|2154|
|new Blob (1024)|530|272|
|text (128)|4,587|2294|
|text (1024)|571|286|
|arrayBuffer (128)|4,513|2257|
|arrayBuffer (1024)|565|283|
|slice (0, 64)|68,169|34085|
|slice (0, 512)|32,117|16059|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:12:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4307.447647359544,"samples":2154},{"name":"new Blob (1024)","opsSec":530.7547301627542,"samples":272},{"name":"text (128)","opsSec":4587.691303435493,"samples":2294},{"name":"text (1024)","opsSec":571.884924173284,"samples":286},{"name":"arrayBuffer (128)","opsSec":4513.444331723833,"samples":2257},{"name":"arrayBuffer (1024)","opsSec":565.1385434906433,"samples":283},{"name":"slice (0, 64)","opsSec":68169.77449219271,"samples":34085},{"name":"slice (0, 512)","opsSec":32117.070402717243,"samples":16059}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|273,707|136854|
|[True conditional] Using constructor name|264,051|132026|
|[True conditional] Check if property is valid then instanceof |274,967|137484|
|[False conditional] Using instanceof only|11,587,599|5793800|
|[False conditional] Using constructor name|10,420,215|5210108|
|[False conditional] Check if property is valid then instanceof |10,409,110|5204556|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:20:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":273707.98909059836,"samples":136854},{"name":"[True conditional] Using constructor name","opsSec":264051.2384094424,"samples":132026},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":274967.6887567416,"samples":137484},{"name":"[False conditional] Using instanceof only","opsSec":11587599.60055257,"samples":5793800},{"name":"[False conditional] Using constructor name","opsSec":10420215.826336501,"samples":5210108},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":10409110.811457109,"samples":5204556}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,605|3303|
|crypto.verify('RSA-SHA256')|6,812|3407|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:28:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6605.71749992751,"samples":3303},{"name":"crypto.verify('RSA-SHA256')","opsSec":6812.333103700677,"samples":3407}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,263,213|631607|
|fromUnixToISOString(new Date())|1,704,267|852134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:33:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1263213.3203960585,"samples":631607},{"name":"fromUnixToISOString(new Date())","opsSec":1704267.9828675124,"samples":852134}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|12,771|6386|
|Intl.DateTimeFormat().format(new Date())|14,427|7510|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|16,606|8304|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,445|8223|
|Reusing Intl.DateTimeFormat()|586,184|293093|
|Date.toLocaleDateString()|581,987|290994|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|16,499|8250|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:04:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":12771.33282615462,"samples":6386},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":14427.027750114059,"samples":7510},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":16606.833271042236,"samples":8304},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16445.29794994666,"samples":8223},{"name":"Reusing Intl.DateTimeFormat()","opsSec":586184.7758872841,"samples":293093},{"name":"Date.toLocaleDateString()","opsSec":581987.8359884813,"samples":290994},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":16499.491683631226,"samples":8250}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|925,902|462952|
|Using brackets {}|964,707|482354|
|Using '' + |941,790|470896|
|Using date.toString()|1,057,339|528670|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:10:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":925902.4905333302,"samples":462952},{"name":"Using brackets {}","opsSec":964707.1355718005,"samples":482354},{"name":"Using '' + ","opsSec":941790.2783240934,"samples":470896},{"name":"Using date.toString()","opsSec":1057339.3063791487,"samples":528670}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,714,127|1357064|
|Using delete property (proto: null)|8,024,286|4012144|
|Using delete property (cached proto: null)|2,690,617|1345309|
|Using undefined assignment|14,326,583|7163292|
|Using undefined assignment (proto: null)|8,415,404|4207703|
|Using undefined property (cached proto: null)|14,272,645|7136323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:17:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2714127.7708386653,"samples":1357064},{"name":"Using delete property (proto: null)","opsSec":8024286.491460019,"samples":4012144},{"name":"Using delete property (cached proto: null)","opsSec":2690617.7793488684,"samples":1345309},{"name":"Using undefined assignment","opsSec":14326583.30814251,"samples":7163292},{"name":"Using undefined assignment (proto: null)","opsSec":8415404.75556867,"samples":4207703},{"name":"Using undefined property (cached proto: null)","opsSec":14272645.014738021,"samples":7136323}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|284,706|142354|
|NodeError|283,445|141723|
|NodeError Range|283,920|141961|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:26:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":284706.6646141542,"samples":142354},{"name":"NodeError","opsSec":283445.9984224576,"samples":141723},{"name":"NodeError Range","opsSec":283920.78928431525,"samples":141961}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,381,418|690710|
|Function returning explicitly undefined|1,355,031|677516|
|Function returning implicitly undefined|1,379,223|689612|
|Function returning string|1,344,995|672498|
|Function returning integer|1,378,580|689291|
|Function returning float|1,319,056|659529|
|Function returning functions|1,338,271|669136|
|Function returning arrow functions|1,364,492|682247|
|Function returning empty object|1,375,229|687615|
|Function returning empty array|1,377,424|688713|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:32:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1381418.7619949207,"samples":690710},{"name":"Function returning explicitly undefined","opsSec":1355031.9073636977,"samples":677516},{"name":"Function returning implicitly undefined","opsSec":1379223.6372052245,"samples":689612},{"name":"Function returning string","opsSec":1344995.9704305315,"samples":672498},{"name":"Function returning integer","opsSec":1378580.269522255,"samples":689291},{"name":"Function returning float","opsSec":1319056.901892584,"samples":659529},{"name":"Function returning functions","opsSec":1338271.5872969576,"samples":669136},{"name":"Function returning arrow functions","opsSec":1364492.243364408,"samples":682247},{"name":"Function returning empty object","opsSec":1375229.5950652852,"samples":687615},{"name":"Function returning empty array","opsSec":1377424.1343935672,"samples":688713}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|12,585,235|6292618|
|using Array.includes (first item)|14,117,116|7058559|
|Using raw comparison|14,567,993|7283997|
|Using raw comparison (first item)|14,548,769|7274385|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:42:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":12585235.484467322,"samples":6292618},{"name":"using Array.includes (first item)","opsSec":14117116.27222273,"samples":7058559},{"name":"Using raw comparison","opsSec":14567993.110840263,"samples":7283997},{"name":"Using raw comparison (first item)","opsSec":14548769.477663018,"samples":7274385}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,707,843|6353922|
|Using Object.getOwnPropertyNames()|12,735,371|6367686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:51:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12707843.099561833,"samples":6353922},{"name":"Using Object.getOwnPropertyNames()","opsSec":12735371.955237571,"samples":6367686}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,536,475|7268238|
|Length = 10_000 - Array.at|14,490,205|7245103|
|Length = 1_000_000 - Array.at|14,645,687|7322844|
|Length = 100 - Array[length - 1]|14,349,508|7174755|
|Length = 10_000 - Array[length - 1]|14,610,695|7305348|
|Length = 1_000_000 - Array[length - 1]|14,632,419|7316210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:00:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14536475.45825748,"samples":7268238},{"name":"Length = 10_000 - Array.at","opsSec":14490205.587780032,"samples":7245103},{"name":"Length = 1_000_000 - Array.at","opsSec":14645687.047910566,"samples":7322844},{"name":"Length = 100 - Array[length - 1]","opsSec":14349508.353392236,"samples":7174755},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14610695.309812032,"samples":7305348},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14632419.085213032,"samples":7316210}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|13,864,984|6932627|
|~ (small)|15,113,717|7556859|
|Math.floor (long)|14,918,567|7459284|
|~ (long)|15,035,581|7517791|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:14:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":13864984.2740752,"samples":6932627},{"name":"~ (small)","opsSec":15113717.035473589,"samples":7556859},{"name":"Math.floor (long)","opsSec":14918567.69188668,"samples":7459284},{"name":"~ (long)","opsSec":15035581.640011476,"samples":7517791}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,830,592|5915297|
|Object.create({})|1,816,119|908060|
|Cached Empty.prototype|15,032,491|7516246|
|Empty.prototype|1,663,107|831555|
|Empty class|1,187,213|593607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:23:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":11830592.703081714,"samples":5915297},{"name":"Object.create({})","opsSec":1816119.7680423176,"samples":908060},{"name":"Cached Empty.prototype","opsSec":15032491.462816216,"samples":7516246},{"name":"Empty.prototype","opsSec":1663107.0715803192,"samples":831555},{"name":"Empty class","opsSec":1187213.8253955892,"samples":593607}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,362,164|7181083|
|Using optional chain (obj.field?.field2) (undefined)|14,603,599|7301800|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,534,414|7267208|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,700,264|7350133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:32:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14362164.168851925,"samples":7181083},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14603599.479965093,"samples":7301800},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14534414.782714035,"samples":7267208},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14700264.55820624,"samples":7350133}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,572,018|7286010|
|Using parseInt(x, 10) - big number (10 len)|14,587,247|7293624|
|Using + - small number (2 len)|14,587,597|7293799|
|Using + - big number (10 len)|14,999,437|7499719|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:43:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14572018.794275858,"samples":7286010},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14587247.259430895,"samples":7293624},{"name":"Using + - small number (2 len)","opsSec":14587597.456895707,"samples":7293799},{"name":"Using + - big number (10 len)","opsSec":14999437.817281358,"samples":7499719}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|948,713|474357|
|Using ? operator to avoid rejection|952,134|476068|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:51:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":948713.0052375719,"samples":474357},{"name":"Using ? operator to avoid rejection","opsSec":952134.5118088552,"samples":476068}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,791,612|7395807|
|Raw usage underscore usage|14,637,943|7318972|
|Manipulating private properties using #|14,719,178|7359590|
|Manipulating private properties using underscore(_)|14,308,849|7154425|
|Manipulating private properties using Symbol|14,506,474|7253238|
|Manipulating private properties using PrivateSymbol|11,243,042|5621522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:59:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":14791612.135698536,"samples":7395807},{"name":"Raw usage underscore usage","opsSec":14637943.005907398,"samples":7318972},{"name":"Manipulating private properties using #","opsSec":14719178.774203504,"samples":7359590},{"name":"Manipulating private properties using underscore(_)","opsSec":14308849.323724316,"samples":7154425},{"name":"Manipulating private properties using Symbol","opsSec":14506474.140887458,"samples":7253238},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11243042.388654267,"samples":5621522}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,761,457|2380729|
|Adding property in the object creation - small object|4,719,292|2359647|
|Adding property after the function creation - small class|246,865|123564|
|Adding property in the function creation - small class|240,567|120284|
|Adding property after the class creation - small class|209,797|104899|
|Adding property in the class creation - small class|198,627|99314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:10:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4761457.663300851,"samples":2380729},{"name":"Adding property in the object creation - small object","opsSec":4719292.533942534,"samples":2359647},{"name":"Adding property after the function creation - small class","opsSec":246865.51977130686,"samples":123564},{"name":"Adding property in the function creation - small class","opsSec":240567.8506919809,"samples":120284},{"name":"Adding property after the class creation - small class","opsSec":209797.10100608022,"samples":104899},{"name":"Adding property in the class creation - small class","opsSec":198627.0896666642,"samples":99314}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,942,838|7471420|
|Getter|12,802,334|6401168|
|Method|14,936,176|7468089|
|DefineProperty (getter)|14,605,468|7302735|
|DefineProperty (getter & enumerable=false)|12,571,945|6285973|
|DefineProperty (getter & configurable=false)|14,705,492|7352747|
|DefineProperty (getter & enumerable=false & configurable=false)|12,227,064|6113533|
|DefineProperty (writable)|14,787,257|7393629|
|DefineProperty (writable & enumerable=false)|14,635,561|7317781|
|DefineProperty (writable & enumerable=false & configurable=false)|14,675,402|7337702|
|DefineProperties (getter)|12,692,237|6346119|
|DefineProperties (getter & enumerable=false)|12,699,475|6349738|
|DefineProperties (getter & enumerable=false & configurable=false)|12,724,286|6362144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":14942838.590136794,"samples":7471420},{"name":"Getter","opsSec":12802334.399728803,"samples":6401168},{"name":"Method","opsSec":14936176.84159764,"samples":7468089},{"name":"DefineProperty (getter)","opsSec":14605468.625504417,"samples":7302735},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12571945.447638078,"samples":6285973},{"name":"DefineProperty (getter & configurable=false)","opsSec":14705492.434652608,"samples":7352747},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12227064.286341827,"samples":6113533},{"name":"DefineProperty (writable)","opsSec":14787257.9732278,"samples":7393629},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14635561.64086546,"samples":7317781},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14675402.568243839,"samples":7337702},{"name":"DefineProperties (getter)","opsSec":12692237.190291159,"samples":6346119},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12699475.69012452,"samples":6349738},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12724286.794291323,"samples":6362144}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,628,414|7314208|
|Setter|5,682,595|2841298|
|Method|14,954,465|7477233|
|DefineProperty (setter)|14,976,007|7488005|
|DefineProperty (setter & enumerable=false)|5,834,622|2917312|
|DefineProperty (setter & configurable=false)|5,729,844|2864923|
|DefineProperty (setter & enumerable=false & configurable=false)|5,782,017|2891009|
|DefineProperty (writable)|14,879,988|7439995|
|DefineProperty (writable & enumerable=false)|14,550,834|7275418|
|DefineProperty (writable & enumerable=false & configurable=false)|14,683,738|7341870|
|DefineProperties (setter)|14,567,964|7283983|
|DefineProperties (setter & enumerable=false)|5,682,882|2841442|
|DefineProperties (setter & enumerable=false & configurable=false)|5,627,953|2813977|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:46:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":14628414.118230077,"samples":7314208},{"name":"Setter","opsSec":5682595.267329938,"samples":2841298},{"name":"Method","opsSec":14954465.43281929,"samples":7477233},{"name":"DefineProperty (setter)","opsSec":14976007.176302034,"samples":7488005},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5834622.652627977,"samples":2917312},{"name":"DefineProperty (setter & configurable=false)","opsSec":5729844.510159711,"samples":2864923},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5782017.0379511975,"samples":2891009},{"name":"DefineProperty (writable)","opsSec":14879988.995123653,"samples":7439995},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14550834.509928994,"samples":7275418},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14683738.963029534,"samples":7341870},{"name":"DefineProperties (setter)","opsSec":14567964.84486522,"samples":7283983},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5682882.051837627,"samples":2841442},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5627953.286640024,"samples":2813977}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,607,721|1303861|
|Using replaceAll()|2,263,069|1131535|
|Using replaceAll(//g)|2,367,999|1184000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:01:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2607721.2869057464,"samples":1303861},{"name":"Using replaceAll()","opsSec":2263069.041315555,"samples":1131535},{"name":"Using replaceAll(//g)","opsSec":2367999.9240117096,"samples":1184000}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,400,921|4700461|
|{ ...object, __proto__: null }|9,079,238|4539620|
|{ ...object, newProp: true }|685,896|343199|
|structuredClone|257,430|128716|
|JSON.parse + JSON.stringify|196,023|98012|
|loop + object.keys starting with {}|1,303,358|651680|
|loop + object.keys starting with { __proto__: null }|725,362|362682|
|loop + object.keys starting with { randomProp: true }|508,136|254069|
|object.keys + reduce(FN, {})|1,289,708|644855|
|object.keys + reduce(FN, { __proto__: null })|741,919|370960|
|object.keys + reduce(FN, { newProp: true })|509,966|254984|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:09:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9400921.25989781,"samples":4700461},{"name":"{ ...object, __proto__: null }","opsSec":9079238.595880304,"samples":4539620},{"name":"{ ...object, newProp: true }","opsSec":685896.981354897,"samples":343199},{"name":"structuredClone","opsSec":257430.34176627977,"samples":128716},{"name":"JSON.parse + JSON.stringify","opsSec":196023.01429001396,"samples":98012},{"name":"loop + object.keys starting with {}","opsSec":1303358.984028943,"samples":651680},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":725362.4080857515,"samples":362682},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":508136.39196452947,"samples":254069},{"name":"object.keys + reduce(FN, {})","opsSec":1289708.9150916024,"samples":644855},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":741919.9460935346,"samples":370960},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":509966.44451142265,"samples":254984}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|258,085|129043|
|Sort using first char|1,058,333|529167|
|Sort using localeCompare|988,395|494198|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:18:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":258085.42510315735,"samples":129043},{"name":"Sort using first char","opsSec":1058333.1515213219,"samples":529167},{"name":"Sort using localeCompare","opsSec":988395.4763116412,"samples":494198}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,824|913|
|{...smallObject} - Total keys: 2|11,254,941|5627471|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,180|1091|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,622|3312|
|{ ...bigObject, ...anotherBigObject }|1,127|564|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,469,161|3234581|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,038,942|5019472|
|{ ...smallObject, ...anotherSmallObject }|8,232,910|4116457|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:24:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1824.684234828625,"samples":913},{"name":"{...smallObject} - Total keys: 2","opsSec":11254941.931405913,"samples":5627471},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2180.5792871011035,"samples":1091},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6622.328537675281,"samples":3312},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1127.0660927721867,"samples":564},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6469161.1853885865,"samples":3234581},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10038942.48945839,"samples":5019472},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8232910.215907129,"samples":4116457}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,473|1237|
|streams.web.Readable reading 1e3 * "some data"|534|268|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:33:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2473.716264761049,"samples":1237},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":534.5014194574221,"samples":268}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,206|3104|
|streams.web.WritableStream writing 1e3 * "some data"|1,998|1000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:38:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6206.7012103414845,"samples":3104},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1998.2690034417044,"samples":1000}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,260,166|7630084|
|Using backtick (`)|14,929,640|7464821|
|Using array.join|6,024,092|3012047|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:46:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":15260166.73705259,"samples":7630084},{"name":"Using backtick (`)","opsSec":14929640.903895307,"samples":7464821},{"name":"Using array.join","opsSec":6024092.584211048,"samples":3012047}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,104,461|6052231|
|(short string) (true) String#slice and strict comparison|12,006,278|6003140|
|(long string) (true) String#endsWith|11,718,559|5859280|
|(long string) (true) String#slice and strict comparison|12,193,674|6096838|
|(short string) (false) String#endsWith|12,920,039|6460020|
|(short string) (false) String#slice and strict comparison|12,310,269|6155135|
|(long string) (false) String#endsWith|12,298,465|6149233|
|(long string) (false) String#slice and strict comparison|11,701,674|5850838|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:59:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12104461.522739572,"samples":6052231},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12006278.170492044,"samples":6003140},{"name":"(long string) (true) String#endsWith","opsSec":11718559.41301439,"samples":5859280},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12193674.185635604,"samples":6096838},{"name":"(short string) (false) String#endsWith","opsSec":12920039.247425297,"samples":6460020},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12310269.90507119,"samples":6155135},{"name":"(long string) (false) String#endsWith","opsSec":12298465.351071332,"samples":6149233},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11701674.470177636,"samples":5850838}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,037,994|4018998|
|Using indexof|8,158,334|4079168|
|Using RegExp.test|7,468,807|3734404|
|Using RegExp.text with cached regex pattern|7,334,131|3667066|
|Using new RegExp.test|3,300,483|1650242|
|Using new RegExp.test with cached regex pattern|3,675,042|1837522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:10:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8037994.742297831,"samples":4018998},{"name":"Using indexof","opsSec":8158334.715201611,"samples":4079168},{"name":"Using RegExp.test","opsSec":7468807.1661861045,"samples":3734404},{"name":"Using RegExp.text with cached regex pattern","opsSec":7334131.188324924,"samples":3667066},{"name":"Using new RegExp.test","opsSec":3300483.084347575,"samples":1650242},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3675042.2115148962,"samples":1837522}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,232,250|6616126|
|(short string) (true) String#slice and strict comparison|12,040,086|6020044|
|(long string) (true) String#startsWith|12,861,681|6430841|
|(long string) (true) String#slice and strict comparison|11,530,679|5765340|
|(short string) (false) String#startsWith|14,170,347|7085174|
|(short string) (false) String#slice and strict comparison|12,459,155|6229578|
|(long string) (false) String#startsWith|14,091,804|7045903|
|(long string) (false) String#slice and strict comparison|11,700,868|5850435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:23:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13232250.842478864,"samples":6616126},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12040086.859303113,"samples":6020044},{"name":"(long string) (true) String#startsWith","opsSec":12861681.60893003,"samples":6430841},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11530679.631101353,"samples":5765340},{"name":"(short string) (false) String#startsWith","opsSec":14170347.61115874,"samples":7085174},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12459155.557303542,"samples":6229578},{"name":"(long string) (false) String#startsWith","opsSec":14091804.333879985,"samples":7045903},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11700868.718915388,"samples":5850435}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,600,658|7300330|
|Using this|14,606,345|7303173|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:35:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14600658.421335556,"samples":7300330},{"name":"Using this","opsSec":14606345.173686065,"samples":7303173}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,889,055|2944528|
|Date.now()|8,609,062|4304532|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:42:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5889055.042518741,"samples":2944528},{"name":"Date.now()","opsSec":8609062.884305062,"samples":4304532}]}-->
