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
|Using optional chain (obj.field?.field2) (Valid)|16,141,683|8070842|
|Using optional chain (obj.field?.field2) (undefined)|16,152,213|8076108|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,211,836|8105919|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,080,815|8040408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:03:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16141683.760823147,"samples":8070842},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16152213.898383532,"samples":8076108},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16211836.59738425,"samples":8105919},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16080815.100575754,"samples":8040408}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,185,097|8092549|
|Using parseInt(x, 10) - big number (10 len)|16,114,578|8057290|
|Using + - small number (2 len)|16,173,138|8086570|
|Using + - big number (10 len)|16,111,096|8055549|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:09:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16185097.308636717,"samples":8092549},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16114578.897942008,"samples":8057290},{"name":"Using + - small number (2 len)","opsSec":16173138.75485088,"samples":8086570},{"name":"Using + - big number (10 len)","opsSec":16111096.351321513,"samples":8055549}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,035,458|517730|
|Using ? operator to avoid rejection|1,039,721|519861|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:14:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1035458.9397031876,"samples":517730},{"name":"Using ? operator to avoid rejection","opsSec":1039721.5012610434,"samples":519861}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,008,323|8004162|
|Raw usage underscore usage|16,025,939|8012970|
|Manipulating private properties using #|16,080,756|8040379|
|Manipulating private properties using underscore(_)|16,118,076|8059039|
|Manipulating private properties using Symbol|16,068,997|8034499|
|Manipulating private properties using PrivateSymbol|12,458,543|6229272|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:20:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16008323.87434768,"samples":8004162},{"name":"Raw usage underscore usage","opsSec":16025939.849493079,"samples":8012970},{"name":"Manipulating private properties using #","opsSec":16080756.911517289,"samples":8040379},{"name":"Manipulating private properties using underscore(_)","opsSec":16118076.850657908,"samples":8059039},{"name":"Manipulating private properties using Symbol","opsSec":16068997.921850573,"samples":8034499},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12458543.259362245,"samples":6229272}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,756,869|1878435|
|Adding property in the object creation - small object|3,765,065|1882533|
|Adding property after the function creation - small class|261,133|130567|
|Adding property in the function creation - small class|257,120|128561|
|Adding property after the class creation - small class|220,558|110280|
|Adding property in the class creation - small class|223,913|111957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:26:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3756869.090262193,"samples":1878435},{"name":"Adding property in the object creation - small object","opsSec":3765065.7191791856,"samples":1882533},{"name":"Adding property after the function creation - small class","opsSec":261133.2150612615,"samples":130567},{"name":"Adding property in the function creation - small class","opsSec":257120.9263300269,"samples":128561},{"name":"Adding property after the class creation - small class","opsSec":220558.74853920727,"samples":110280},{"name":"Adding property in the class creation - small class","opsSec":223913.37755423257,"samples":111957}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,938,292|7969147|
|Getter|13,571,051|6785526|
|Method|14,648,302|7324152|
|DefineProperty (getter)|15,963,228|7981615|
|DefineProperty (getter & enumerable=false)|13,362,968|6681485|
|DefineProperty (getter & configurable=false)|15,960,782|7980392|
|DefineProperty (getter & enumerable=false & configurable=false)|13,341,221|6670611|
|DefineProperty (writable)|15,944,174|7972088|
|DefineProperty (writable & enumerable=false)|16,000,675|8000339|
|DefineProperty (writable & enumerable=false & configurable=false)|16,014,214|8007108|
|DefineProperties (getter)|13,834,562|6917282|
|DefineProperties (getter & enumerable=false)|13,876,103|6938052|
|DefineProperties (getter & enumerable=false & configurable=false)|13,541,159|6770580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:37:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":15938292.092348179,"samples":7969147},{"name":"Getter","opsSec":13571051.55161789,"samples":6785526},{"name":"Method","opsSec":14648302.056191327,"samples":7324152},{"name":"DefineProperty (getter)","opsSec":15963228.35090233,"samples":7981615},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13362968.139238408,"samples":6681485},{"name":"DefineProperty (getter & configurable=false)","opsSec":15960782.787253698,"samples":7980392},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13341221.933228152,"samples":6670611},{"name":"DefineProperty (writable)","opsSec":15944174.611662023,"samples":7972088},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16000675.978959532,"samples":8000339},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16014214.63870309,"samples":8007108},{"name":"DefineProperties (getter)","opsSec":13834562.41413155,"samples":6917282},{"name":"DefineProperties (getter & enumerable=false)","opsSec":13876103.958956143,"samples":6938052},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13541159.503421878,"samples":6770580}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,714,785|7857394|
|Setter|6,388,693|3194347|
|Method|15,061,979|7530990|
|DefineProperty (setter)|15,268,147|7634074|
|DefineProperty (setter & enumerable=false)|6,452,803|3226402|
|DefineProperty (setter & configurable=false)|6,467,911|3233956|
|DefineProperty (setter & enumerable=false & configurable=false)|6,299,219|3149610|
|DefineProperty (writable)|15,347,678|7673840|
|DefineProperty (writable & enumerable=false)|15,327,340|7663671|
|DefineProperty (writable & enumerable=false & configurable=false)|15,922,220|7961111|
|DefineProperties (setter)|15,895,605|7947803|
|DefineProperties (setter & enumerable=false)|6,134,260|3067131|
|DefineProperties (setter & enumerable=false & configurable=false)|6,110,227|3055114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:46:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15714785.575799325,"samples":7857394},{"name":"Setter","opsSec":6388693.655177489,"samples":3194347},{"name":"Method","opsSec":15061979.558356252,"samples":7530990},{"name":"DefineProperty (setter)","opsSec":15268147.584873859,"samples":7634074},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6452803.902415435,"samples":3226402},{"name":"DefineProperty (setter & configurable=false)","opsSec":6467911.840058391,"samples":3233956},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6299219.576595356,"samples":3149610},{"name":"DefineProperty (writable)","opsSec":15347678.187109157,"samples":7673840},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15327340.46906717,"samples":7663671},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15922220.295912787,"samples":7961111},{"name":"DefineProperties (setter)","opsSec":15895605.45699162,"samples":7947803},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6134260.877263176,"samples":3067131},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6110227.617762874,"samples":3055114}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,835,307|1417655|
|Using replaceAll()|2,466,559|1233280|
|Using replaceAll(//g)|2,603,206|1301604|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:55:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2835307.093327978,"samples":1417655},{"name":"Using replaceAll()","opsSec":2466559.2444081856,"samples":1233280},{"name":"Using replaceAll(//g)","opsSec":2603206.7409862936,"samples":1301604}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,445,275|4722639|
|{ ...object, __proto__: null }|10,084,973|5042487|
|{ ...object, newProp: true }|685,598|342801|
|structuredClone|273,877|136939|
|JSON.parse + JSON.stringify|184,920|92461|
|loop + object.keys starting with {}|1,412,652|706327|
|loop + object.keys starting with { __proto__: null }|764,823|382412|
|loop + object.keys starting with { randomProp: true }|603,694|301848|
|object.keys + reduce(FN, {})|1,407,841|703921|
|object.keys + reduce(FN, { __proto__: null })|770,476|385239|
|object.keys + reduce(FN, { newProp: true })|621,010|310506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:00:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":9445275.92241932,"samples":4722639},{"name":"{ ...object, __proto__: null }","opsSec":10084973.778978897,"samples":5042487},{"name":"{ ...object, newProp: true }","opsSec":685598.7466174625,"samples":342801},{"name":"structuredClone","opsSec":273877.3211667752,"samples":136939},{"name":"JSON.parse + JSON.stringify","opsSec":184920.57277051572,"samples":92461},{"name":"loop + object.keys starting with {}","opsSec":1412652.2910322759,"samples":706327},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":764823.7055846156,"samples":382412},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":603694.9675548322,"samples":301848},{"name":"object.keys + reduce(FN, {})","opsSec":1407841.1885056375,"samples":703921},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":770476.4069892403,"samples":385239},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":621010.1406302964,"samples":310506}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|270,303|135152|
|Sort using first char|1,312,674|656373|
|Sort using localeCompare|1,245,377|622689|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:05:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":270303.0155130486,"samples":135152},{"name":"Sort using first char","opsSec":1312674.9286427968,"samples":656373},{"name":"Sort using localeCompare","opsSec":1245377.1705695891,"samples":622689}]}-->

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
