## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|102,312,562|51156286|
|Using dot notation|72,972,737|36490676|
|Using define property (writable)|4,741,894|2371138|
|Using define property initialized (writable)|6,964,798|3482597|
|Using define property (getter)|2,419,267|1214208|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":102312562.58724424,"samples":51156286},{"name":"Using dot notation","opsSec":72972737.42240182,"samples":36490676},{"name":"Using define property (writable)","opsSec":4741894.609416565,"samples":2371138},{"name":"Using define property initialized (writable)","opsSec":6964798.385522106,"samples":3482597},{"name":"Using define property (getter)","opsSec":2419267.819376096,"samples":1214208}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.02ms
new Array(length)|100|0.025ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.02ms
array.push|10,000|0.275ms
new Array(length)|10,000|0.166ms
array.push|1,000,000|20.785ms
new Array(length)|1,000,000|14.073ms
array.push|100,000,000|1,879.66ms
new Array(length)|100,000,000|3,914.205ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.013ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.019ms
array.push|10,000|149.153ms
new Array(length)|10,000|0.034ms
array.push|1,000,000|16.642ms
new Array(length)|1,000,000|8.327ms
array.push|100,000,000|2,030.499ms
new Array(length)|100,000,000|4,530.18ms

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
|Using optional chain (obj.field?.field2) (Valid)|136,401,340|68200722|
|Using optional chain (obj.field?.field2) (undefined)|98,483,660|49438415|
|Using and operator (obj.field && obj.field.field2) (Valid)|95,739,316|48235369|
|Using and operator (obj.field && obj.field.field2) (undefined)|97,799,042|48900753|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:25:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":136401340.06217888,"samples":68200722},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":98483660.3795556,"samples":49438415},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":95739316.23946044,"samples":48235369},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":97799042.8333072,"samples":48900753}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|117,427,306|58713699|
|Using parseInt(x, 10) - big number (10 len)|96,156,765|48078401|
|Using + - small number (2 len)|93,306,824|46672657|
|Using + - big number (10 len)|93,108,994|46554514|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:27:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":117427306.87640986,"samples":58713699},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":96156765.84505604,"samples":48078401},{"name":"Using + - small number (2 len)","opsSec":93306824.56164102,"samples":46672657},{"name":"Using + - big number (10 len)","opsSec":93108994.10832615,"samples":46554514}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|982,809|492304|
|Using ? operator to avoid rejection|1,110,203|555224|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:28:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using if to check function existence","opsSec":982809.9786283986,"samples":492304},{"name":"Using ? operator to avoid rejection","opsSec":1110203.2268333607,"samples":555224}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|127,382,949|63693176|
|Raw usage underscore usage|96,140,805|48070880|
|Manipulating private properties using #|97,261,361|48631382|
|Manipulating private properties using underscore(_)|90,412,528|45207096|
|Manipulating private properties using Symbol|95,570,109|47786161|
|Manipulating private properties using PrivateSymbol|35,011,561|17505786|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:30:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Raw usage private field","opsSec":127382949.85617523,"samples":63693176},{"name":"Raw usage underscore usage","opsSec":96140805.12952346,"samples":48070880},{"name":"Manipulating private properties using #","opsSec":97261361.49116729,"samples":48631382},{"name":"Manipulating private properties using underscore(_)","opsSec":90412528.22865553,"samples":45207096},{"name":"Manipulating private properties using Symbol","opsSec":95570109.74309967,"samples":47786161},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35011561.636577755,"samples":17505786}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,973,579|3986792|
|Adding property in the object creation - small object|7,668,356|3834181|
|Adding property after the function creation - small class|268,237|134125|
|Adding property in the function creation - small class|287,374|144514|
|Adding property after the class creation - small class|277,665|139996|
|Adding property in the class creation - small class|270,605|137939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7973579.056380985,"samples":3986792},{"name":"Adding property in the object creation - small object","opsSec":7668356.908211012,"samples":3834181},{"name":"Adding property after the function creation - small class","opsSec":268237.2817975209,"samples":134125},{"name":"Adding property in the function creation - small class","opsSec":287374.0914099095,"samples":144514},{"name":"Adding property after the class creation - small class","opsSec":277665.85650842753,"samples":139996},{"name":"Adding property in the class creation - small class","opsSec":270605.0888218893,"samples":137939}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,522,526|70768113|
|Getter|50,119,956|25059991|
|Method|92,934,135|46468018|
|DefineProperty (getter)|93,236,790|46623814|
|DefineProperty (getter & enumerable=false)|49,998,888|25000375|
|DefineProperty (getter & configurable=false)|93,466,216|46734031|
|DefineProperty (getter & enumerable=false & configurable=false)|48,734,821|24367800|
|DefineProperty (writable)|88,907,110|44456999|
|DefineProperty (writable & enumerable=false)|94,319,507|47159762|
|DefineProperty (writable & enumerable=false & configurable=false)|94,963,976|47482061|
|DefineProperties (getter)|45,052,365|22526214|
|DefineProperties (getter & enumerable=false)|48,210,060|24106619|
|DefineProperties (getter & enumerable=false & configurable=false)|50,299,946|25149979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:33:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":141522526.61942324,"samples":70768113},{"name":"Getter","opsSec":50119956.539062075,"samples":25059991},{"name":"Method","opsSec":92934135.86865804,"samples":46468018},{"name":"DefineProperty (getter)","opsSec":93236790.15551232,"samples":46623814},{"name":"DefineProperty (getter & enumerable=false)","opsSec":49998888.44138555,"samples":25000375},{"name":"DefineProperty (getter & configurable=false)","opsSec":93466216.22916192,"samples":46734031},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":48734821.60742929,"samples":24367800},{"name":"DefineProperty (writable)","opsSec":88907110.36615995,"samples":44456999},{"name":"DefineProperty (writable & enumerable=false)","opsSec":94319507.96568364,"samples":47159762},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":94963976.51518798,"samples":47482061},{"name":"DefineProperties (getter)","opsSec":45052365.91783976,"samples":22526214},{"name":"DefineProperties (getter & enumerable=false)","opsSec":48210060.089259036,"samples":24106619},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50299946.22981258,"samples":25149979}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|128,821,512|64410895|
|Setter|11,585,356|5794620|
|Method|90,974,821|45497860|
|DefineProperty (setter)|92,352,992|46176521|
|DefineProperty (setter & enumerable=false)|11,803,353|5901682|
|DefineProperty (setter & configurable=false)|11,679,714|5839861|
|DefineProperty (setter & enumerable=false & configurable=false)|11,802,911|5901460|
|DefineProperty (writable)|93,021,655|46511143|
|DefineProperty (writable & enumerable=false)|85,515,467|42758844|
|DefineProperty (writable & enumerable=false & configurable=false)|93,961,325|46998619|
|DefineProperties (setter)|89,249,134|44624582|
|DefineProperties (setter & enumerable=false)|11,698,727|5849929|
|DefineProperties (setter & enumerable=false & configurable=false)|11,659,614|5829812|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:35:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":128821512.51846205,"samples":64410895},{"name":"Setter","opsSec":11585356.264190268,"samples":5794620},{"name":"Method","opsSec":90974821.44596708,"samples":45497860},{"name":"DefineProperty (setter)","opsSec":92352992.68350191,"samples":46176521},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11803353.825509002,"samples":5901682},{"name":"DefineProperty (setter & configurable=false)","opsSec":11679714.104513265,"samples":5839861},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11802911.690750169,"samples":5901460},{"name":"DefineProperty (writable)","opsSec":93021655.68526107,"samples":46511143},{"name":"DefineProperty (writable & enumerable=false)","opsSec":85515467.33434425,"samples":42758844},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93961325.98120998,"samples":46998619},{"name":"DefineProperties (setter)","opsSec":89249134.19078918,"samples":44624582},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11698727.97307017,"samples":5849929},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11659614.066008814,"samples":5829812}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,407,354|1703875|
|Using replaceAll()|3,227,782|1614023|
|Using replaceAll(//g)|2,943,005|1471674|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:37:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3407354.9648947897,"samples":1703875},{"name":"Using replaceAll()","opsSec":3227782.593573669,"samples":1614023},{"name":"Using replaceAll(//g)","opsSec":2943005.4694794184,"samples":1471674}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,599,027|11805456|
|{ ...object, __proto__: null }|2,647,097|1323550|
|{ ...object, newProp: true }|20,829,055|10414772|
|structuredClone|310,533|155327|
|JSON.parse + JSON.stringify|305,548|152775|
|loop + object.keys starting with {}|1,680,064|840194|
|loop + object.keys starting with { __proto__: null }|902,717|451608|
|loop + object.keys starting with { randomProp: true }|668,210|334126|
|object.keys + reduce(FN, {})|1,758,206|879104|
|object.keys + reduce(FN, { __proto__: null })|947,292|473647|
|object.keys + reduce(FN, { newProp: true })|700,302|350152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:39:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":23599027.24669024,"samples":11805456},{"name":"{ ...object, __proto__: null }","opsSec":2647097.294666565,"samples":1323550},{"name":"{ ...object, newProp: true }","opsSec":20829055.9752185,"samples":10414772},{"name":"structuredClone","opsSec":310533.8650057807,"samples":155327},{"name":"JSON.parse + JSON.stringify","opsSec":305548.4582024799,"samples":152775},{"name":"loop + object.keys starting with {}","opsSec":1680064.2482592317,"samples":840194},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":902717.3281153411,"samples":451608},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":668210.9544739105,"samples":334126},{"name":"object.keys + reduce(FN, {})","opsSec":1758206.9872727755,"samples":879104},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":947292.4559132968,"samples":473647},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":700302.3556900688,"samples":350152}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|306,027|153014|
|Sort using first char|1,364,253|682164|
|Sort using localeCompare|1,258,926|630104|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:39:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Sort using default","opsSec":306027.29246489983,"samples":153014},{"name":"Sort using first char","opsSec":1364253.6181642306,"samples":682164},{"name":"Sort using localeCompare","opsSec":1258926.2896623472,"samples":630104}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,749|890|
|{...smallObject} - Total keys: 2|53,353,374|26676816|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,093|547|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,811|3406|
|{ ...bigObject, ...anotherBigObject }|1,168|585|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,426,570|6715527|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,741,919|13873044|
|{ ...smallObject, ...anotherSmallObject }|20,761,434|10381057|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:41:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1749.8778752366252,"samples":890},{"name":"{...smallObject} - Total keys: 2","opsSec":53353374.94343952,"samples":26676816},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1093.29053534606,"samples":547},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6811.265296057575,"samples":3406},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1168.3706510453262,"samples":585},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13426570.062661873,"samples":6715527},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27741919.33274955,"samples":13873044},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20761434.22912047,"samples":10381057}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,181|1091|
|streams.web.Readable reading 1e3 * "some data"|1,873|937|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:43:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2181.676239246096,"samples":1091},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1873.6845989240937,"samples":937}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,273|3137|
|streams.web.WritableStream writing 1e3 * "some data"|1,659|841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:44:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6273.805085423606,"samples":3137},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1659.088999596222,"samples":841}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|137,938,577|69554753|
|Using backtick (`)|99,417,611|49711776|
|Using array.join|10,454,232|5227119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:45:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":137938577.69160318,"samples":69554753},{"name":"Using backtick (`)","opsSec":99417611.20122506,"samples":49711776},{"name":"Using array.join","opsSec":10454232.563799066,"samples":5227119}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|118,476,167|59238098|
|(short string) (true) String#slice and strict comparison|59,323,132|29696584|
|(long string) (true) String#endsWith|62,399,327|31200312|
|(long string) (true) String#slice and strict comparison|53,365,563|26688752|
|(short string) (false) String#endsWith|95,166,578|47588434|
|(short string) (false) String#slice and strict comparison|59,351,537|29677552|
|(long string) (false) String#endsWith|88,698,131|44350031|
|(long string) (false) String#slice and strict comparison|52,543,801|26277054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:47:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":118476167.09181523,"samples":59238098},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59323132.414979786,"samples":29696584},{"name":"(long string) (true) String#endsWith","opsSec":62399327.34197783,"samples":31200312},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53365563.77529866,"samples":26688752},{"name":"(short string) (false) String#endsWith","opsSec":95166578.58952291,"samples":47588434},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59351537.92219548,"samples":29677552},{"name":"(long string) (false) String#endsWith","opsSec":88698131.04168722,"samples":44350031},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52543801.84853022,"samples":26277054}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|128,671,903|65157095|
|Using indexof|15,851,213|7925609|
|Using RegExp.test|12,646,030|6324686|
|Using RegExp.text with cached regex pattern|14,211,408|7105749|
|Using new RegExp.test|4,813,788|2407120|
|Using new RegExp.test with cached regex pattern|5,432,675|2718676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:49:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":128671903.65705211,"samples":65157095},{"name":"Using indexof","opsSec":15851213.339743279,"samples":7925609},{"name":"Using RegExp.test","opsSec":12646030.817489773,"samples":6324686},{"name":"Using RegExp.text with cached regex pattern","opsSec":14211408.098632367,"samples":7105749},{"name":"Using new RegExp.test","opsSec":4813788.447388481,"samples":2407120},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5432675.27062793,"samples":2718676}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|122,146,617|61077948|
|(short string) (true) String#slice and strict comparison|59,696,240|29869853|
|(long string) (true) String#startsWith|62,903,575|31451795|
|(long string) (true) String#slice and strict comparison|53,426,829|26717688|
|(short string) (false) String#startsWith|94,245,322|47129362|
|(short string) (false) String#slice and strict comparison|59,344,063|29672041|
|(long string) (false) String#startsWith|81,947,654|40973831|
|(long string) (false) String#slice and strict comparison|52,944,719|26473154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:50:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":122146617.98719092,"samples":61077948},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59696240.689583994,"samples":29869853},{"name":"(long string) (true) String#startsWith","opsSec":62903575.15475626,"samples":31451795},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53426829.737461545,"samples":26717688},{"name":"(short string) (false) String#startsWith","opsSec":94245322.88055833,"samples":47129362},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59344063.00989983,"samples":29672041},{"name":"(long string) (false) String#startsWith","opsSec":81947654.6247111,"samples":40973831},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52944719.44663772,"samples":26473154}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,383,838|57730364|
|Using this|100,538,180|50340334|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:52:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using super","opsSec":115383838.51768859,"samples":57730364},{"name":"Using this","opsSec":100538180.26402082,"samples":50340334}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,922,170|5473214|
|Date.now()|20,048,905|10024578|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:54:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":10922170.71078067,"samples":5473214},{"name":"Date.now()","opsSec":20048905.6292665,"samples":10024578}]}-->
