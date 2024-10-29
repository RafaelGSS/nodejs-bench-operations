## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|97,992,566|49062546|
|Using dot notation|68,204,549|34143479|
|Using define property (writable)|4,733,358|2366681|
|Using define property initialized (writable)|6,717,229|3359660|
|Using define property (getter)|2,400,392|1200259|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:45:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":97992566.26542723,"samples":49062546},{"name":"Using dot notation","opsSec":68204549.30766262,"samples":34143479},{"name":"Using define property (writable)","opsSec":4733358.478381292,"samples":2366681},{"name":"Using define property initialized (writable)","opsSec":6717229.786172977,"samples":3359660},{"name":"Using define property (getter)","opsSec":2400392.14743971,"samples":1200259}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.072ms
new Array(length)|100|0.006ms
array.push|1,000|0.049ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.278ms
new Array(length)|10,000|0.165ms
array.push|1,000,000|27.671ms
new Array(length)|1,000,000|6.21ms
array.push|100,000,000|1,858.852ms
new Array(length)|100,000,000|3,945.527ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.019ms
array.push|10,000|160.289ms
new Array(length)|10,000|0.07ms
array.push|1,000,000|18.341ms
new Array(length)|1,000,000|6.902ms
array.push|100,000,000|2,043.329ms
new Array(length)|100,000,000|4,580.019ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|328|167|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:59:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":328.6253158704228,"samples":167},{"name":"Array.from","opsSec":24.117939917184,"samples":13}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,496|2255|
|new Blob (1024)|588|295|
|text (128)|4,036|2019|
|text (1024)|530|267|
|arrayBuffer (128)|4,214|2108|
|arrayBuffer (1024)|534|268|
|slice (0, 64)|147,945|81565|
|slice (0, 512)|35,482|17775|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:46:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Blob (128)","opsSec":4496.093385331062,"samples":2255},{"name":"new Blob (1024)","opsSec":588.8255544574037,"samples":295},{"name":"text (128)","opsSec":4036.434307496465,"samples":2019},{"name":"text (1024)","opsSec":530.6638437735184,"samples":267},{"name":"arrayBuffer (128)","opsSec":4214.912232310734,"samples":2108},{"name":"arrayBuffer (1024)","opsSec":534.4912786399922,"samples":268},{"name":"slice (0, 64)","opsSec":147945.41116331518,"samples":81565},{"name":"slice (0, 512)","opsSec":35482.892695326824,"samples":17775}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|418,745|209373|
|[True conditional] Using constructor name|334,008|167005|
|[True conditional] Check if property is valid then instanceof |342,145|171114|
|[False conditional] Using instanceof only|96,256,877|48128457|
|[False conditional] Using constructor name|94,332,339|47176204|
|[False conditional] Check if property is valid then instanceof |84,349,697|42176799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:49:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":418745.14743487985,"samples":209373},{"name":"[True conditional] Using constructor name","opsSec":334008.8710500158,"samples":167005},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":342145.5483971651,"samples":171114},{"name":"[False conditional] Using instanceof only","opsSec":96256877.42238659,"samples":48128457},{"name":"[False conditional] Using constructor name","opsSec":94332339.54941958,"samples":47176204},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":84349697.33259656,"samples":42176799}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,735|3368|
|crypto.verify('RSA-SHA256')|6,926|3464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:50:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6735.624542816734,"samples":3368},{"name":"crypto.verify('RSA-SHA256')","opsSec":6926.231082139007,"samples":3464}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,453,929|727098|
|fromUnixToISOString(new Date())|2,037,640|1018903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:52:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1453929.3348207006,"samples":727098},{"name":"fromUnixToISOString(new Date())","opsSec":2037640.3113157258,"samples":1018903}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,794|9404|
|Intl.DateTimeFormat().format(new Date())|18,475|9238|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|17,852|8927|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,427|9215|
|Reusing Intl.DateTimeFormat()|498,425|249225|
|Date.toLocaleDateString()|948,975|474489|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,807|11404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:53:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18794.332723654694,"samples":9404},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18475.27192648392,"samples":9238},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":17852.354976898296,"samples":8927},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18427.91278088679,"samples":9215},{"name":"Reusing Intl.DateTimeFormat()","opsSec":498425.3787831389,"samples":249225},{"name":"Date.toLocaleDateString()","opsSec":948975.5136841541,"samples":474489},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22807.59594063032,"samples":11404}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,594|521798|
|Using brackets {}|1,087,102|543552|
|Using '' + |1,092,578|546290|
|Using date.toString()|1,186,040|593021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:56:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using String()","opsSec":1043594.8562200374,"samples":521798},{"name":"Using brackets {}","opsSec":1087102.1736683482,"samples":543552},{"name":"Using '' + ","opsSec":1092578.5556111496,"samples":546290},{"name":"Using date.toString()","opsSec":1186040.088103378,"samples":593021}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,018,879|2009753|
|Using delete property (proto: null)|15,586,927|7793829|
|Using delete property (cached proto: null)|3,756,484|1878339|
|Using undefined assignment|69,075,363|34538823|
|Using undefined assignment (proto: null)|17,260,307|8631988|
|Using undefined property (cached proto: null)|69,193,725|34599363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:57:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using delete property","opsSec":4018879.874591058,"samples":2009753},{"name":"Using delete property (proto: null)","opsSec":15586927.845951982,"samples":7793829},{"name":"Using delete property (cached proto: null)","opsSec":3756484.9918011217,"samples":1878339},{"name":"Using undefined assignment","opsSec":69075363.47368938,"samples":34538823},{"name":"Using undefined assignment (proto: null)","opsSec":17260307.804864693,"samples":8631988},{"name":"Using undefined property (cached proto: null)","opsSec":69193725.36946756,"samples":34599363}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|398,676|199364|
|NodeError|315,723|157943|
|NodeError Range|305,816|152926|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:00:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Error","opsSec":398676.22471604863,"samples":199364},{"name":"NodeError","opsSec":315723.0982473359,"samples":157943},{"name":"NodeError Range","opsSec":305816.2561959758,"samples":152926}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,154,933|578465|
|Function returning explicitly undefined|1,077,314|539630|
|Function returning implicitly undefined|1,025,849|513982|
|Function returning string|959,422|479775|
|Function returning integer|1,206,948|603475|
|Function returning float|1,280,289|640145|
|Function returning functions|1,322,974|661559|
|Function returning arrow functions|1,296,923|648462|
|Function returning empty object|1,440,636|720319|
|Function returning empty array|1,429,292|714676|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:02:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1154933.113716785,"samples":578465},{"name":"Function returning explicitly undefined","opsSec":1077314.5337039398,"samples":539630},{"name":"Function returning implicitly undefined","opsSec":1025849.8957077289,"samples":513982},{"name":"Function returning string","opsSec":959422.1090328661,"samples":479775},{"name":"Function returning integer","opsSec":1206948.5275227965,"samples":603475},{"name":"Function returning float","opsSec":1280289.2932803102,"samples":640145},{"name":"Function returning functions","opsSec":1322974.6239481042,"samples":661559},{"name":"Function returning arrow functions","opsSec":1296923.1129045908,"samples":648462},{"name":"Function returning empty object","opsSec":1440636.9656226588,"samples":720319},{"name":"Function returning empty array","opsSec":1429292.275592972,"samples":714676}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|81,634,113|40820536|
|using Array.includes (first item)|77,499,150|38806635|
|Using raw comparison|94,257,400|47128710|
|Using raw comparison (first item)|93,265,514|46632858|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:04:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":81634113.9979275,"samples":40820536},{"name":"using Array.includes (first item)","opsSec":77499150.48593156,"samples":38806635},{"name":"Using raw comparison","opsSec":94257400.20594595,"samples":47128710},{"name":"Using raw comparison (first item)","opsSec":93265514.35995796,"samples":46632858}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|46,631,269|23324504|
|Using Object.getOwnPropertyNames()|40,413,369|20207935|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:06:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using Object.keys()","opsSec":46631269.83800378,"samples":23324504},{"name":"Using Object.getOwnPropertyNames()","opsSec":40413369.62482131,"samples":20207935}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|100,137,494|50636084|
|Length = 10_000 - Array.at|79,823,837|39911929|
|Length = 1_000_000 - Array.at|85,030,880|42656082|
|Length = 100 - Array[length - 1]|74,690,353|37346271|
|Length = 10_000 - Array[length - 1]|65,043,748|32521884|
|Length = 1_000_000 - Array[length - 1]|57,107,861|28553980|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:09:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":100137494.23114283,"samples":50636084},{"name":"Length = 10_000 - Array.at","opsSec":79823837.24580231,"samples":39911929},{"name":"Length = 1_000_000 - Array.at","opsSec":85030880.31735435,"samples":42656082},{"name":"Length = 100 - Array[length - 1]","opsSec":74690353.27388766,"samples":37346271},{"name":"Length = 10_000 - Array[length - 1]","opsSec":65043748.87713784,"samples":32521884},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":57107861.66026223,"samples":28553980}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|113,379,773|56902041|
|~ (small)|81,109,055|40559379|
|Math.floor (long)|82,880,513|41580741|
|~ (long)|78,824,162|39412123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:11:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":113379773.616888,"samples":56902041},{"name":"~ (small)","opsSec":81109055.41035558,"samples":40559379},{"name":"Math.floor (long)","opsSec":82880513.57798906,"samples":41580741},{"name":"~ (long)","opsSec":78824162.28873965,"samples":39412123}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,674,655|20839274|
|Object.create({})|2,002,583|1001292|
|Cached Empty.prototype|81,219,550|40610019|
|Empty.prototype|2,563,733|1282335|
|Empty class|1,556,049|778071|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:13:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":41674655.920534275,"samples":20839274},{"name":"Object.create({})","opsSec":2002583.0387601415,"samples":1001292},{"name":"Cached Empty.prototype","opsSec":81219550.19538152,"samples":40610019},{"name":"Empty.prototype","opsSec":2563733.2477635327,"samples":1282335},{"name":"Empty class","opsSec":1556049.35904536,"samples":778071}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|137,367,847|68692119|
|Using optional chain (obj.field?.field2) (undefined)|97,282,840|48649425|
|Using and operator (obj.field && obj.field.field2) (Valid)|96,347,772|48177985|
|Using and operator (obj.field && obj.field.field2) (undefined)|93,012,186|46514568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:15:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":137367847.81786978,"samples":68692119},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":97282840.94112906,"samples":48649425},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":96347772.15345857,"samples":48177985},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":93012186.2032838,"samples":46514568}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|129,816,063|64923183|
|Using parseInt(x, 10) - big number (10 len)|99,484,061|49921351|
|Using + - small number (2 len)|96,293,163|48146590|
|Using + - big number (10 len)|97,553,627|48777667|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:17:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":129816063.03640541,"samples":64923183},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99484061.56013945,"samples":49921351},{"name":"Using + - small number (2 len)","opsSec":96293163.82274848,"samples":48146590},{"name":"Using + - big number (10 len)","opsSec":97553627.59194615,"samples":48777667}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|922,671|461355|
|Using ? operator to avoid rejection|1,004,010|503794|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:19:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using if to check function existence","opsSec":922671.8751981168,"samples":461355},{"name":"Using ? operator to avoid rejection","opsSec":1004010.5997917759,"samples":503794}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|104,450,799|52225452|
|Raw usage underscore usage|83,891,645|42082072|
|Manipulating private properties using #|84,151,239|42076190|
|Manipulating private properties using underscore(_)|85,041,501|42614805|
|Manipulating private properties using Symbol|82,687,760|41344467|
|Manipulating private properties using PrivateSymbol|25,957,693|13134189|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:21:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Raw usage private field","opsSec":104450799.13139766,"samples":52225452},{"name":"Raw usage underscore usage","opsSec":83891645.3120811,"samples":42082072},{"name":"Manipulating private properties using #","opsSec":84151239.24580078,"samples":42076190},{"name":"Manipulating private properties using underscore(_)","opsSec":85041501.43041298,"samples":42614805},{"name":"Manipulating private properties using Symbol","opsSec":82687760.99142258,"samples":41344467},{"name":"Manipulating private properties using PrivateSymbol","opsSec":25957693.635545556,"samples":13134189}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,126,805|4063407|
|Adding property in the object creation - small object|7,839,474|3919739|
|Adding property after the function creation - small class|258,999|129845|
|Adding property in the function creation - small class|268,329|134168|
|Adding property after the class creation - small class|262,428|131215|
|Adding property in the class creation - small class|263,218|131996|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:24:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8126805.986969296,"samples":4063407},{"name":"Adding property in the object creation - small object","opsSec":7839474.237052366,"samples":3919739},{"name":"Adding property after the function creation - small class","opsSec":258999.35594343225,"samples":129845},{"name":"Adding property in the function creation - small class","opsSec":268329.96311248984,"samples":134168},{"name":"Adding property after the class creation - small class","opsSec":262428.53827304184,"samples":131215},{"name":"Adding property in the class creation - small class","opsSec":263218.3549284349,"samples":131996}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,923,805|71032242|
|Getter|50,555,447|25278753|
|Method|99,155,049|49577539|
|DefineProperty (getter)|96,344,426|48778353|
|DefineProperty (getter & enumerable=false)|50,736,342|25369248|
|DefineProperty (getter & configurable=false)|98,133,221|49076133|
|DefineProperty (getter & enumerable=false & configurable=false)|50,549,975|25313257|
|DefineProperty (writable)|97,896,097|48948175|
|DefineProperty (writable & enumerable=false)|97,934,514|48969728|
|DefineProperty (writable & enumerable=false & configurable=false)|96,570,100|48290925|
|DefineProperties (getter)|50,439,531|25222695|
|DefineProperties (getter & enumerable=false)|50,756,885|25378443|
|DefineProperties (getter & enumerable=false & configurable=false)|50,027,289|25013651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:52:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":141923805.43403485,"samples":71032242},{"name":"Getter","opsSec":50555447.887716495,"samples":25278753},{"name":"Method","opsSec":99155049.24503572,"samples":49577539},{"name":"DefineProperty (getter)","opsSec":96344426.24379238,"samples":48778353},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50736342.24227181,"samples":25369248},{"name":"DefineProperty (getter & configurable=false)","opsSec":98133221.08951671,"samples":49076133},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50549975.574283324,"samples":25313257},{"name":"DefineProperty (writable)","opsSec":97896097.23227695,"samples":48948175},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97934514.61613052,"samples":48969728},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96570100.12277786,"samples":48290925},{"name":"DefineProperties (getter)","opsSec":50439531.75102431,"samples":25222695},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50756885.79697245,"samples":25378443},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50027289.793341294,"samples":25013651}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|125,984,544|62997735|
|Setter|10,971,908|5485956|
|Method|91,948,068|45974042|
|DefineProperty (setter)|86,543,577|43273640|
|DefineProperty (setter & enumerable=false)|10,950,352|5475182|
|DefineProperty (setter & configurable=false)|10,913,928|5456967|
|DefineProperty (setter & enumerable=false & configurable=false)|10,954,093|5477050|
|DefineProperty (writable)|92,724,119|46365272|
|DefineProperty (writable & enumerable=false)|92,549,786|46274910|
|DefineProperty (writable & enumerable=false & configurable=false)|88,904,753|44455294|
|DefineProperties (setter)|91,755,912|45885190|
|DefineProperties (setter & enumerable=false)|11,080,656|5540344|
|DefineProperties (setter & enumerable=false & configurable=false)|10,818,410|5409484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:59:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":125984544.11639605,"samples":62997735},{"name":"Setter","opsSec":10971908.598708335,"samples":5485956},{"name":"Method","opsSec":91948068.36882837,"samples":45974042},{"name":"DefineProperty (setter)","opsSec":86543577.1465082,"samples":43273640},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10950352.326924419,"samples":5475182},{"name":"DefineProperty (setter & configurable=false)","opsSec":10913928.499380037,"samples":5456967},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10954093.778074736,"samples":5477050},{"name":"DefineProperty (writable)","opsSec":92724119.33121978,"samples":46365272},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92549786.12677827,"samples":46274910},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":88904753.5366444,"samples":44455294},{"name":"DefineProperties (setter)","opsSec":91755912.4782559,"samples":45885190},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11080656.375806702,"samples":5540344},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10818410.246041354,"samples":5409484}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,263,660|1634298|
|Using replaceAll()|3,184,722|1593230|
|Using replaceAll(//g)|2,993,919|1496962|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:04:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3263660.672748706,"samples":1634298},{"name":"Using replaceAll()","opsSec":3184722.7846765234,"samples":1593230},{"name":"Using replaceAll(//g)","opsSec":2993919.7546217875,"samples":1496962}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,576,877|11789622|
|{ ...object, __proto__: null }|2,529,053|1264743|
|{ ...object, newProp: true }|19,983,020|9992253|
|structuredClone|305,559|152812|
|JSON.parse + JSON.stringify|295,198|147600|
|loop + object.keys starting with {}|1,619,133|809607|
|loop + object.keys starting with { __proto__: null }|882,584|441303|
|loop + object.keys starting with { randomProp: true }|656,203|328102|
|object.keys + reduce(FN, {})|1,699,281|849728|
|object.keys + reduce(FN, { __proto__: null })|876,223|438112|
|object.keys + reduce(FN, { newProp: true })|686,053|343075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:23:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":23576877.211604238,"samples":11789622},{"name":"{ ...object, __proto__: null }","opsSec":2529053.1070377743,"samples":1264743},{"name":"{ ...object, newProp: true }","opsSec":19983020.022665072,"samples":9992253},{"name":"structuredClone","opsSec":305559.88009252184,"samples":152812},{"name":"JSON.parse + JSON.stringify","opsSec":295198.24947438063,"samples":147600},{"name":"loop + object.keys starting with {}","opsSec":1619133.3509677884,"samples":809607},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":882584.6979357307,"samples":441303},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":656203.6180894943,"samples":328102},{"name":"object.keys + reduce(FN, {})","opsSec":1699281.6333130423,"samples":849728},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":876223.7529049016,"samples":438112},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":686053.200637603,"samples":343075}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|311,003|155509|
|Sort using first char|1,312,692|656348|
|Sort using localeCompare|1,193,274|596638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:27:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Sort using default","opsSec":311003.8182258889,"samples":155509},{"name":"Sort using first char","opsSec":1312692.7576488885,"samples":656348},{"name":"Sort using localeCompare","opsSec":1193274.4487432165,"samples":596638}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,936|970|
|{...smallObject} - Total keys: 2|52,735,657|26367891|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,097|549|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,431|3216|
|{ ...bigObject, ...anotherBigObject }|1,174|588|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,081,967|6040993|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,988,313|13994163|
|{ ...smallObject, ...anotherSmallObject }|20,153,802|10078825|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:29:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1936.8894910596227,"samples":970},{"name":"{...smallObject} - Total keys: 2","opsSec":52735657.96573246,"samples":26367891},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1097.3993713760585,"samples":549},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6431.473146582778,"samples":3216},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1174.2935143164084,"samples":588},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12081967.997867683,"samples":6040993},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27988313.01342276,"samples":13994163},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20153802.034577537,"samples":10078825}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,821|911|
|streams.web.Readable reading 1e3 * "some data"|1,933|969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:31:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1821.824168462205,"samples":911},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1933.680332169164,"samples":969}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,035|2076|
|streams.web.WritableStream writing 1e3 * "some data"|925|517|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:33:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4035.193174406213,"samples":2076},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":925.3291800836937,"samples":517}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|140,059,721|70049215|
|Using backtick (`)|99,069,104|49541771|
|Using array.join|9,815,478|4907741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:35:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":140059721.13463113,"samples":70049215},{"name":"Using backtick (`)","opsSec":99069104.85748734,"samples":49541771},{"name":"Using array.join","opsSec":9815478.407534903,"samples":4907741}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|118,751,371|59375738|
|(short string) (true) String#slice and strict comparison|56,626,678|28313358|
|(long string) (true) String#endsWith|64,644,393|32329418|
|(long string) (true) String#slice and strict comparison|52,076,491|26038253|
|(short string) (false) String#endsWith|88,223,553|44120767|
|(short string) (false) String#slice and strict comparison|57,051,942|28532135|
|(long string) (false) String#endsWith|87,667,908|43836463|
|(long string) (false) String#slice and strict comparison|51,137,068|25568544|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:37:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":118751371.26129055,"samples":59375738},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56626678.852898665,"samples":28313358},{"name":"(long string) (true) String#endsWith","opsSec":64644393.408202305,"samples":32329418},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52076491.93934718,"samples":26038253},{"name":"(short string) (false) String#endsWith","opsSec":88223553.3340421,"samples":44120767},{"name":"(short string) (false) String#slice and strict comparison","opsSec":57051942.558563605,"samples":28532135},{"name":"(long string) (false) String#endsWith","opsSec":87667908.06427823,"samples":43836463},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51137068.26109165,"samples":25568544}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|130,199,905|65261501|
|Using indexof|15,045,859|7526678|
|Using RegExp.test|11,712,602|5856354|
|Using RegExp.text with cached regex pattern|12,939,963|6469984|
|Using new RegExp.test|4,559,582|2279857|
|Using new RegExp.test with cached regex pattern|5,159,594|2579800|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:39:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":130199905.72594483,"samples":65261501},{"name":"Using indexof","opsSec":15045859.190016545,"samples":7526678},{"name":"Using RegExp.test","opsSec":11712602.235201817,"samples":5856354},{"name":"Using RegExp.text with cached regex pattern","opsSec":12939963.05693411,"samples":6469984},{"name":"Using new RegExp.test","opsSec":4559582.419570535,"samples":2279857},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5159594.479233908,"samples":2579800}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|99,100,345|49669141|
|(short string) (true) String#slice and strict comparison|49,838,583|24919302|
|(long string) (true) String#startsWith|54,631,297|27590662|
|(long string) (true) String#slice and strict comparison|42,115,492|21057761|
|(short string) (false) String#startsWith|70,757,538|35460893|
|(short string) (false) String#slice and strict comparison|48,872,555|24528790|
|(long string) (false) String#startsWith|77,629,261|38814634|
|(long string) (false) String#slice and strict comparison|44,899,626|22453221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:42:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":99100345.8354622,"samples":49669141},{"name":"(short string) (true) String#slice and strict comparison","opsSec":49838583.96488925,"samples":24919302},{"name":"(long string) (true) String#startsWith","opsSec":54631297.300665446,"samples":27590662},{"name":"(long string) (true) String#slice and strict comparison","opsSec":42115492.51915524,"samples":21057761},{"name":"(short string) (false) String#startsWith","opsSec":70757538.22469993,"samples":35460893},{"name":"(short string) (false) String#slice and strict comparison","opsSec":48872555.54236461,"samples":24528790},{"name":"(long string) (false) String#startsWith","opsSec":77629261.63440055,"samples":38814634},{"name":"(long string) (false) String#slice and strict comparison","opsSec":44899626.68566538,"samples":22453221}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|115,116,141|57560400|
|Using this|94,791,544|47398216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:43:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using super","opsSec":115116141.4799866,"samples":57560400},{"name":"Using this","opsSec":94791544.73753642,"samples":47398216}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,300,524|4161303|
|Date.now()|16,356,681|8193555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:45:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8300524.827646147,"samples":4161303},{"name":"Date.now()","opsSec":16356681.828361517,"samples":8193555}]}-->
