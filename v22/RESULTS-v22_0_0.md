## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|88,904,854|44462735|
|Using dot notation|64,741,297|32394772|
|Using define property (writable)|4,847,956|2423979|
|Using define property initialized (writable)|7,011,346|3506085|
|Using define property (getter)|2,364,915|1185291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 17:58:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Directly in the object","samples":44462735,"opsSec":88904854.03120841},{"name":"Using dot notation","samples":32394772,"opsSec":64741297.61967046},{"name":"Using define property (writable)","samples":2423979,"opsSec":4847956.080209393},{"name":"Using define property initialized (writable)","samples":3506085,"opsSec":7011346.012593907},{"name":"Using define property (getter)","samples":1185291,"opsSec":2364915.9074370353}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.004ms
array.push|100|0.029ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.305ms
new Array(length)|10,000|0.16ms
array.push|1,000,000|24.838ms
new Array(length)|1,000,000|17.138ms
array.push|100,000,000|2,006.632ms
new Array(length)|100,000,000|4,302.375ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.014ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|176.692ms
new Array(length)|10,000|0.036ms
array.push|1,000,000|18.271ms
new Array(length)|1,000,000|7.878ms
array.push|100,000,000|2,154.93ms
new Array(length)|100,000,000|4,944.698ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|333|168|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:59:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":333.97922729122706,"samples":168},{"name":"Array.from","opsSec":24.53118318997124,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,892|2488|
|new Blob (1024)|575|290|
|text (128)|4,204|2103|
|text (1024)|583|292|
|arrayBuffer (128)|4,699|2350|
|arrayBuffer (1024)|592|297|
|slice (0, 64)|146,439|91342|
|slice (0, 512)|33,393|16697|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:05:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4892.029334023587,"samples":2488},{"name":"new Blob (1024)","opsSec":575.7913624366283,"samples":290},{"name":"text (128)","opsSec":4204.706716308197,"samples":2103},{"name":"text (1024)","opsSec":583.5948439483476,"samples":292},{"name":"arrayBuffer (128)","opsSec":4699.026587244399,"samples":2350},{"name":"arrayBuffer (1024)","opsSec":592.9668667125244,"samples":297},{"name":"slice (0, 64)","opsSec":146439.2424926377,"samples":91342},{"name":"slice (0, 512)","opsSec":33393.72563715017,"samples":16697}]}-->

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

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,793|3397|
|crypto.verify('RSA-SHA256')|6,998|3500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:16:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6793.494985169793,"samples":3397},{"name":"crypto.verify('RSA-SHA256')","opsSec":6998.521982142592,"samples":3500}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,193,556|596779|
|fromUnixToISOString(new Date())|1,803,398|901700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:22:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1193556.3194727022,"samples":596779},{"name":"fromUnixToISOString(new Date())","opsSec":1803398.9864897695,"samples":901700}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,264|9633|
|Intl.DateTimeFormat().format(new Date())|19,213|9637|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,533|9767|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,511|9256|
|Reusing Intl.DateTimeFormat()|404,940|202472|
|Date.toLocaleDateString()|684,960|342649|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,734|11868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:27:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19264.605627844656,"samples":9633},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19213.197186083424,"samples":9637},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19533.648238062528,"samples":9767},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18511.081665238587,"samples":9256},{"name":"Reusing Intl.DateTimeFormat()","opsSec":404940.6025483446,"samples":202472},{"name":"Date.toLocaleDateString()","opsSec":684960.1803788778,"samples":342649},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23734.86514115814,"samples":11868}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|901,593|450797|
|Using brackets {}|907,142|453572|
|Using '' + |907,066|453539|
|Using date.toString()|1,006,926|503474|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:34:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":901593.5401872945,"samples":450797},{"name":"Using brackets {}","opsSec":907142.7644715549,"samples":453572},{"name":"Using '' + ","opsSec":907066.3460115865,"samples":453539},{"name":"Using date.toString()","opsSec":1006926.8263426957,"samples":503474}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,101,380|2050692|
|Using delete property (proto: null)|17,053,472|8527962|
|Using delete property (cached proto: null)|4,024,864|2012458|
|Using undefined assignment|73,531,332|36765675|
|Using undefined assignment (proto: null)|18,130,132|9065336|
|Using undefined property (cached proto: null)|72,336,482|36174736|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:39:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":4101380.891153284,"samples":2050692},{"name":"Using delete property (proto: null)","opsSec":17053472.870237418,"samples":8527962},{"name":"Using delete property (cached proto: null)","opsSec":4024864.699074546,"samples":2012458},{"name":"Using undefined assignment","opsSec":73531332.05835497,"samples":36765675},{"name":"Using undefined assignment (proto: null)","opsSec":18130132.55603593,"samples":9065336},{"name":"Using undefined property (cached proto: null)","opsSec":72336482.53783068,"samples":36174736}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|404,691|202346|
|NodeError|327,847|163928|
|NodeError Range|319,109|159555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:45:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":404691.10401389573,"samples":202346},{"name":"NodeError","opsSec":327847.5644821659,"samples":163928},{"name":"NodeError Range","opsSec":319109.92915759573,"samples":159555}]}-->

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
|using Array.includes|83,025,110|41512572|
|using Array.includes (first item)|75,713,098|37857282|
|Using raw comparison|85,849,981|42924998|
|Using raw comparison (first item)|86,780,880|43393000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:56:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":83025110.62390554,"samples":41512572},{"name":"using Array.includes (first item)","opsSec":75713098.19441895,"samples":37857282},{"name":"Using raw comparison","opsSec":85849981.0621033,"samples":42924998},{"name":"Using raw comparison (first item)","opsSec":86780880.2751873,"samples":43393000}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,772,517|24886276|
|Using Object.getOwnPropertyNames()|43,418,574|21710713|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:02:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":49772517.35832792,"samples":24886276},{"name":"Using Object.getOwnPropertyNames()","opsSec":43418574.00754774,"samples":21710713}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|118,999,641|59499840|
|Length = 10_000 - Array.at|96,186,065|48093762|
|Length = 1_000_000 - Array.at|96,073,954|48036996|
|Length = 100 - Array[length - 1]|95,613,752|47806887|
|Length = 10_000 - Array[length - 1]|93,740,967|46871010|
|Length = 1_000_000 - Array[length - 1]|95,602,402|47801214|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:08:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":118999641.92011458,"samples":59499840},{"name":"Length = 10_000 - Array.at","opsSec":96186065.62687297,"samples":48093762},{"name":"Length = 1_000_000 - Array.at","opsSec":96073954.53115773,"samples":48036996},{"name":"Length = 100 - Array[length - 1]","opsSec":95613752.58251941,"samples":47806887},{"name":"Length = 10_000 - Array[length - 1]","opsSec":93740967.47641718,"samples":46871010},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":95602402.56976092,"samples":47801214}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|120,343,673|60181462|
|~ (small)|94,831,117|47422078|
|Math.floor (long)|91,986,736|45993395|
|~ (long)|92,958,190|46479100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:14:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":120343673.82593481,"samples":60181462},{"name":"~ (small)","opsSec":94831117.10072312,"samples":47422078},{"name":"Math.floor (long)","opsSec":91986736.8316661,"samples":45993395},{"name":"~ (long)","opsSec":92958190.14643183,"samples":46479100}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|44,263,840|22132519|
|Object.create({})|2,063,186|1031649|
|Cached Empty.prototype|81,880,015|40940132|
|Empty.prototype|2,587,790|1299421|
|Empty class|1,599,785|801096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:19:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":44263840.48605949,"samples":22132519},{"name":"Object.create({})","opsSec":2063186.315598364,"samples":1031649},{"name":"Cached Empty.prototype","opsSec":81880015.57603276,"samples":40940132},{"name":"Empty.prototype","opsSec":2587790.540313887,"samples":1299421},{"name":"Empty class","opsSec":1599785.0498024598,"samples":801096}]}-->

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
|Using parseInt(x, 10) - small number (2 len)|129,739,690|64975525|
|Using parseInt(x, 10) - big number (10 len)|99,082,733|49541390|
|Using + - small number (2 len)|96,304,636|48153182|
|Using + - big number (10 len)|96,747,534|48373789|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:30:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":129739690.81022167,"samples":64975525},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99082733.03478456,"samples":49541390},{"name":"Using + - small number (2 len)","opsSec":96304636.48743068,"samples":48153182},{"name":"Using + - big number (10 len)","opsSec":96747534.4636095,"samples":48373789}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,035,779|528128|
|Using ? operator to avoid rejection|1,114,684|568143|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:36:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":1035779.572132122,"samples":528128},{"name":"Using ? operator to avoid rejection","opsSec":1114684.9353015865,"samples":568143}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|131,844,446|65925677|
|Raw usage underscore usage|99,788,819|49894439|
|Manipulating private properties using #|85,107,252|42553641|
|Manipulating private properties using underscore(_)|97,298,854|48657621|
|Manipulating private properties using Symbol|96,467,286|48234015|
|Manipulating private properties using PrivateSymbol|36,378,283|18195339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:42:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":131844446.40576391,"samples":65925677},{"name":"Raw usage underscore usage","opsSec":99788819.9229068,"samples":49894439},{"name":"Manipulating private properties using #","opsSec":85107252.72310506,"samples":42553641},{"name":"Manipulating private properties using underscore(_)","opsSec":97298854.92685321,"samples":48657621},{"name":"Manipulating private properties using Symbol","opsSec":96467286.04429004,"samples":48234015},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36378283.845937125,"samples":18195339}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,022,203|4011139|
|Adding property in the object creation - small object|7,855,464|3929330|
|Adding property after the function creation - small class|266,112|133148|
|Adding property in the function creation - small class|287,294|144415|
|Adding property after the class creation - small class|276,255|139232|
|Adding property in the class creation - small class|272,576|137678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:48:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8022203.457685471,"samples":4011139},{"name":"Adding property in the object creation - small object","opsSec":7855464.585537754,"samples":3929330},{"name":"Adding property after the function creation - small class","opsSec":266112.99515768205,"samples":133148},{"name":"Adding property in the function creation - small class","opsSec":287294.51367583853,"samples":144415},{"name":"Adding property after the class creation - small class","opsSec":276255.97385041334,"samples":139232},{"name":"Adding property in the class creation - small class","opsSec":272576.75776881917,"samples":137678}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|131,795,936|65898002|
|Getter|50,865,143|25432584|
|Method|96,174,904|48087486|
|DefineProperty (getter)|96,242,083|48124741|
|DefineProperty (getter & enumerable=false)|51,162,921|25582923|
|DefineProperty (getter & configurable=false)|95,943,574|47971804|
|DefineProperty (getter & enumerable=false & configurable=false)|51,032,163|25517055|
|DefineProperty (writable)|96,682,093|48341072|
|DefineProperty (writable & enumerable=false)|96,235,295|48117651|
|DefineProperty (writable & enumerable=false & configurable=false)|96,567,686|48283849|
|DefineProperties (getter)|50,377,780|25188896|
|DefineProperties (getter & enumerable=false)|50,292,975|25147173|
|DefineProperties (getter & enumerable=false & configurable=false)|49,510,200|24759826|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:54:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":131795936.25688878,"samples":65898002},{"name":"Getter","opsSec":50865143.78819155,"samples":25432584},{"name":"Method","opsSec":96174904.1005177,"samples":48087486},{"name":"DefineProperty (getter)","opsSec":96242083.67854346,"samples":48124741},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51162921.62972549,"samples":25582923},{"name":"DefineProperty (getter & configurable=false)","opsSec":95943574.9954102,"samples":47971804},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51032163.02091643,"samples":25517055},{"name":"DefineProperty (writable)","opsSec":96682093.72531126,"samples":48341072},{"name":"DefineProperty (writable & enumerable=false)","opsSec":96235295.64847049,"samples":48117651},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96567686.41187763,"samples":48283849},{"name":"DefineProperties (getter)","opsSec":50377780.816132665,"samples":25188896},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50292975.516417176,"samples":25147173},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":49510200.30472102,"samples":24759826}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|128,563,023|64281933|
|Setter|11,171,953|5660244|
|Method|84,697,436|42348736|
|DefineProperty (setter)|93,108,913|46554486|
|DefineProperty (setter & enumerable=false)|11,699,396|5850475|
|DefineProperty (setter & configurable=false)|11,670,982|5836098|
|DefineProperty (setter & enumerable=false & configurable=false)|11,755,597|5878835|
|DefineProperty (writable)|88,749,737|44374894|
|DefineProperty (writable & enumerable=false)|93,641,034|46823335|
|DefineProperty (writable & enumerable=false & configurable=false)|93,535,708|46775916|
|DefineProperties (setter)|91,656,410|45829892|
|DefineProperties (setter & enumerable=false)|11,592,707|5796359|
|DefineProperties (setter & enumerable=false & configurable=false)|11,691,600|5845884|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:01:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":128563023.655069,"samples":64281933},{"name":"Setter","opsSec":11171953.834992334,"samples":5660244},{"name":"Method","opsSec":84697436.0882871,"samples":42348736},{"name":"DefineProperty (setter)","opsSec":93108913.1551669,"samples":46554486},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11699396.203190254,"samples":5850475},{"name":"DefineProperty (setter & configurable=false)","opsSec":11670982.031133048,"samples":5836098},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11755597.323613485,"samples":5878835},{"name":"DefineProperty (writable)","opsSec":88749737.9451478,"samples":44374894},{"name":"DefineProperty (writable & enumerable=false)","opsSec":93641034.3079912,"samples":46823335},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93535708.31460074,"samples":46775916},{"name":"DefineProperties (setter)","opsSec":91656410.67746142,"samples":45829892},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11592707.960714906,"samples":5796359},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11691600.506131148,"samples":5845884}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,417,233|1708746|
|Using replaceAll()|3,128,439|1564222|
|Using replaceAll(//g)|3,121,176|1562610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:07:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3417233.691305274,"samples":1708746},{"name":"Using replaceAll()","opsSec":3128439.019525081,"samples":1564222},{"name":"Using replaceAll(//g)","opsSec":3121176.9584574467,"samples":1562610}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,337,546|11669219|
|{ ...object, __proto__: null }|2,598,666|1299335|
|{ ...object, newProp: true }|20,367,879|10184722|
|structuredClone|310,356|155275|
|JSON.parse + JSON.stringify|310,570|155288|
|loop + object.keys starting with {}|1,679,352|839873|
|loop + object.keys starting with { __proto__: null }|917,957|458979|
|loop + object.keys starting with { randomProp: true }|673,663|336832|
|object.keys + reduce(FN, {})|1,751,949|877695|
|object.keys + reduce(FN, { __proto__: null })|916,269|458148|
|object.keys + reduce(FN, { newProp: true })|700,235|350118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:13:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23337546.785763346,"samples":11669219},{"name":"{ ...object, __proto__: null }","opsSec":2598666.7568638874,"samples":1299335},{"name":"{ ...object, newProp: true }","opsSec":20367879.17657862,"samples":10184722},{"name":"structuredClone","opsSec":310356.19248918863,"samples":155275},{"name":"JSON.parse + JSON.stringify","opsSec":310570.73085698026,"samples":155288},{"name":"loop + object.keys starting with {}","opsSec":1679352.0005097524,"samples":839873},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":917957.1297766409,"samples":458979},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":673663.3357679509,"samples":336832},{"name":"object.keys + reduce(FN, {})","opsSec":1751949.9166942772,"samples":877695},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":916269.8258361552,"samples":458148},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":700235.9117702751,"samples":350118}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|302,837|151419|
|Sort using first char|1,366,288|683795|
|Sort using localeCompare|1,266,790|633482|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:19:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":302837.60449408856,"samples":151419},{"name":"Sort using first char","opsSec":1366288.4271904519,"samples":683795},{"name":"Sort using localeCompare","opsSec":1266790.3610452116,"samples":633482}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,880|941|
|{...smallObject} - Total keys: 2|51,375,290|25694154|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,091|546|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,877|3439|
|{ ...bigObject, ...anotherBigObject }|1,158|580|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,404,550|6702959|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,976,061|13988034|
|{ ...smallObject, ...anotherSmallObject }|21,039,277|10520472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:25:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1880.8314243893756,"samples":941},{"name":"{...smallObject} - Total keys: 2","opsSec":51375290.73433489,"samples":25694154},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1091.4623281937345,"samples":546},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6877.831905788223,"samples":3439},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1158.9552157804364,"samples":580},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13404550.709018579,"samples":6702959},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27976061.453601617,"samples":13988034},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21039277.899583135,"samples":10520472}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,087|1045|
|streams.web.Readable reading 1e3 * "some data"|1,832|919|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:31:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2087.2856436541365,"samples":1045},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1832.4598800655608,"samples":919}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,676|3346|
|streams.web.WritableStream writing 1e3 * "some data"|1,639|822|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:36:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6676.824512638205,"samples":3346},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1639.3919348526226,"samples":822}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|139,154,382|69579012|
|Using backtick (`)|99,679,293|49873015|
|Using array.join|10,396,457|5198243|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:42:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":139154382.05151293,"samples":69579012},{"name":"Using backtick (`)","opsSec":99679293.91528936,"samples":49873015},{"name":"Using array.join","opsSec":10396457.90877073,"samples":5198243}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|122,047,112|61171865|
|(short string) (true) String#slice and strict comparison|49,905,915|24952970|
|(long string) (true) String#endsWith|52,589,651|26294835|
|(long string) (true) String#slice and strict comparison|45,709,130|22854576|
|(short string) (false) String#endsWith|91,028,440|45514234|
|(short string) (false) String#slice and strict comparison|49,803,402|24902913|
|(long string) (false) String#endsWith|84,328,705|42164365|
|(long string) (false) String#slice and strict comparison|45,341,423|22671339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:48:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":122047112.06890066,"samples":61171865},{"name":"(short string) (true) String#slice and strict comparison","opsSec":49905915.945348516,"samples":24952970},{"name":"(long string) (true) String#endsWith","opsSec":52589651.38326341,"samples":26294835},{"name":"(long string) (true) String#slice and strict comparison","opsSec":45709130.151035786,"samples":22854576},{"name":"(short string) (false) String#endsWith","opsSec":91028440.50941098,"samples":45514234},{"name":"(short string) (false) String#slice and strict comparison","opsSec":49803402.26762524,"samples":24902913},{"name":"(long string) (false) String#endsWith","opsSec":84328705.88199012,"samples":42164365},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45341423.7655358,"samples":22671339}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|129,631,804|64815943|
|Using indexof|15,867,883|7935188|
|Using RegExp.test|13,302,063|6651035|
|Using RegExp.text with cached regex pattern|14,065,477|7032742|
|Using new RegExp.test|4,776,277|2388201|
|Using new RegExp.test with cached regex pattern|5,410,562|2705283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:54:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":129631804.85049015,"samples":64815943},{"name":"Using indexof","opsSec":15867883.504594866,"samples":7935188},{"name":"Using RegExp.test","opsSec":13302063.96086296,"samples":6651035},{"name":"Using RegExp.text with cached regex pattern","opsSec":14065477.95184448,"samples":7032742},{"name":"Using new RegExp.test","opsSec":4776277.167219957,"samples":2388201},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5410562.591345568,"samples":2705283}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|122,285,521|61143196|
|(short string) (true) String#slice and strict comparison|59,735,399|29881822|
|(long string) (true) String#startsWith|61,718,097|30897334|
|(long string) (true) String#slice and strict comparison|53,518,182|26761633|
|(short string) (false) String#startsWith|94,917,446|47462970|
|(short string) (false) String#slice and strict comparison|59,461,579|29730816|
|(long string) (false) String#startsWith|86,435,926|43217984|
|(long string) (false) String#slice and strict comparison|53,046,068|26523072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:00:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":122285521.32708815,"samples":61143196},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59735399.430558056,"samples":29881822},{"name":"(long string) (true) String#startsWith","opsSec":61718097.07255835,"samples":30897334},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53518182.30786257,"samples":26761633},{"name":"(short string) (false) String#startsWith","opsSec":94917446.40722568,"samples":47462970},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59461579.91165599,"samples":29730816},{"name":"(long string) (false) String#startsWith","opsSec":86435926.16501173,"samples":43217984},{"name":"(long string) (false) String#slice and strict comparison","opsSec":53046068.780674465,"samples":26523072}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|116,177,479|58088784|
|Using this|94,673,716|47336970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:09:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using super","opsSec":116177479.47276065,"samples":58088784},{"name":"Using this","opsSec":94673716.94872287,"samples":47336970}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,270,834|5635728|
|Date.now()|19,638,669|9823918|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:15:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().getTime()","opsSec":11270834.819209773,"samples":5635728},{"name":"Date.now()","opsSec":19638669.76871747,"samples":9823918}]}-->
