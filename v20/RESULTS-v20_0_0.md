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
|new Blob (128)|4,285|2143|
|new Blob (1024)|557|279|
|text (128)|4,370|2186|
|text (1024)|565|283|
|arrayBuffer (128)|4,559|2280|
|arrayBuffer (1024)|569|285|
|slice (0, 64)|87,487|44074|
|slice (0, 512)|20,797|10399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:38:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":4285.826835495075,"samples":2143},{"name":"new Blob (1024)","opsSec":557.3585494207468,"samples":279},{"name":"text (128)","opsSec":4370.967402703536,"samples":2186},{"name":"text (1024)","opsSec":565.9200185293079,"samples":283},{"name":"arrayBuffer (128)","opsSec":4559.4910421949435,"samples":2280},{"name":"arrayBuffer (1024)","opsSec":569.2643897246238,"samples":285},{"name":"slice (0, 64)","opsSec":87487.5118081341,"samples":44074},{"name":"slice (0, 512)","opsSec":20797.331074091842,"samples":10399}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|252,412|126207|
|[True conditional] Using constructor name|264,241|132121|
|[True conditional] Check if property is valid then instanceof |275,685|137843|
|[False conditional] Using instanceof only|12,161,919|6080960|
|[False conditional] Using constructor name|15,462,879|7731440|
|[False conditional] Check if property is valid then instanceof |15,448,882|7724442|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:45:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":252412.6869381465,"samples":126207},{"name":"[True conditional] Using constructor name","opsSec":264241.4181518397,"samples":132121},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":275685.97023454646,"samples":137843},{"name":"[False conditional] Using instanceof only","opsSec":12161919.948310738,"samples":6080960},{"name":"[False conditional] Using constructor name","opsSec":15462879.943533957,"samples":7731440},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15448882.177622313,"samples":7724442}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,694|3348|
|crypto.verify('RSA-SHA256')|6,733|3367|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:53:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6694.204775036218,"samples":3348},{"name":"crypto.verify('RSA-SHA256')","opsSec":6733.605141341579,"samples":3367}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,246,070|623036|
|fromUnixToISOString(new Date())|1,747,751|873876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:58:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1246070.5229074892,"samples":623036},{"name":"fromUnixToISOString(new Date())","opsSec":1747751.3216947853,"samples":873876}]}-->

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
|{...bigObject} - Total keys: 1000|2,253|1127|
|{...smallObject} - Total keys: 2|11,515,023|5757512|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,446|1224|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,452|3227|
|{ ...bigObject, ...anotherBigObject }|1,341|671|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,922,414|3461208|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,538,857|5269429|
|{ ...smallObject, ...anotherSmallObject }|7,993,568|3996785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:10:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2253.834275633551,"samples":1127},{"name":"{...smallObject} - Total keys: 2","opsSec":11515023.809752664,"samples":5757512},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2446.0167012241013,"samples":1224},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6452.221160849094,"samples":3227},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1341.659789967015,"samples":671},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6922414.21890003,"samples":3461208},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10538857.83652009,"samples":5269429},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7993568.806721385,"samples":3996785}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,404|1203|
|streams.web.Readable reading 1e3 * "some data"|629|315|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:16:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2404.4980880412104,"samples":1203},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":629.2573316364425,"samples":315}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,599|3300|
|streams.web.WritableStream writing 1e3 * "some data"|2,702|1352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:21:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6599.700637807327,"samples":3300},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2702.7840119015996,"samples":1352}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,799,171|7899586|
|Using backtick (`)|15,847,250|7923626|
|Using array.join|6,020,422|3010212|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:25:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15799171.943556616,"samples":7899586},{"name":"Using backtick (`)","opsSec":15847250.508288242,"samples":7923626},{"name":"Using array.join","opsSec":6020422.278485338,"samples":3010212}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,682,011|6341006|
|(short string) (true) String#slice and strict comparison|15,719,579|7859790|
|(long string) (true) String#endsWith|12,423,779|6211890|
|(long string) (true) String#slice and strict comparison|15,950,526|7975264|
|(short string) (false) String#endsWith|13,845,019|6922510|
|(short string) (false) String#slice and strict comparison|15,909,568|7954785|
|(long string) (false) String#endsWith|13,573,258|6786630|
|(long string) (false) String#slice and strict comparison|15,890,939|7945470|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:33:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12682011.55590476,"samples":6341006},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15719579.437004192,"samples":7859790},{"name":"(long string) (true) String#endsWith","opsSec":12423779.251663363,"samples":6211890},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15950526.777069926,"samples":7975264},{"name":"(short string) (false) String#endsWith","opsSec":13845019.83201463,"samples":6922510},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15909568.513801618,"samples":7954785},{"name":"(long string) (false) String#endsWith","opsSec":13573258.820334194,"samples":6786630},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15890939.89835641,"samples":7945470}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,064,513|8032257|
|Using indexof|15,974,843|7987422|
|Using RegExp.test|7,933,169|3966585|
|Using RegExp.text with cached regex pattern|7,777,411|3888706|
|Using new RegExp.test|3,479,124|1739563|
|Using new RegExp.test with cached regex pattern|3,792,056|1896029|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:41:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16064513.451281415,"samples":8032257},{"name":"Using indexof","opsSec":15974843.394297764,"samples":7987422},{"name":"Using RegExp.test","opsSec":7933169.413099842,"samples":3966585},{"name":"Using RegExp.text with cached regex pattern","opsSec":7777411.785917642,"samples":3888706},{"name":"Using new RegExp.test","opsSec":3479124.127664515,"samples":1739563},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3792056.382316736,"samples":1896029}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,115,273|7557637|
|(short string) (true) String#slice and strict comparison|16,097,984|8048993|
|(long string) (true) String#startsWith|14,816,831|7408416|
|(long string) (true) String#slice and strict comparison|16,095,090|8047546|
|(short string) (false) String#startsWith|15,854,990|7927496|
|(short string) (false) String#slice and strict comparison|16,107,605|8053803|
|(long string) (false) String#startsWith|15,393,799|7696900|
|(long string) (false) String#slice and strict comparison|16,083,431|8041716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:49:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15115273.722848173,"samples":7557637},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16097984.158991277,"samples":8048993},{"name":"(long string) (true) String#startsWith","opsSec":14816831.52828645,"samples":7408416},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16095090.135638488,"samples":8047546},{"name":"(short string) (false) String#startsWith","opsSec":15854990.873168543,"samples":7927496},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16107605.086956237,"samples":8053803},{"name":"(long string) (false) String#startsWith","opsSec":15393799.576325001,"samples":7696900},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16083431.424871584,"samples":8041716}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,882,124|7441063|
|Using this|15,774,381|7887191|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:58:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":14882124.734243998,"samples":7441063},{"name":"Using this","opsSec":15774381.252696311,"samples":7887191}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,442,201|3221101|
|Date.now()|9,207,012|4603507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 02:02:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6442201.306306881,"samples":3221101},{"name":"Date.now()","opsSec":9207012.737735737,"samples":4603507}]}-->
