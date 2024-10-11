## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|95,777,320|48220588|
|Using dot notation|66,400,106|33201813|
|Using define property (writable)|4,772,191|2386333|
|Using define property initialized (writable)|6,705,913|3362927|
|Using define property (getter)|2,340,864|1170466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:40:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":95777320.02523898,"samples":48220588},{"name":"Using dot notation","opsSec":66400106.13037403,"samples":33201813},{"name":"Using define property (writable)","opsSec":4772191.195609184,"samples":2386333},{"name":"Using define property initialized (writable)","opsSec":6705913.229362037,"samples":3362927},{"name":"Using define property (getter)","opsSec":2340864.952946018,"samples":1170466}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.071ms
new Array(length)|100|0.006ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.273ms
new Array(length)|10,000|0.158ms
array.push|1,000,000|27.88ms
new Array(length)|1,000,000|5.913ms
array.push|100,000,000|1,895.773ms
new Array(length)|100,000,000|3,954.871ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.019ms
array.push|10,000|164.45ms
new Array(length)|10,000|0.042ms
array.push|1,000,000|16.752ms
new Array(length)|1,000,000|8.53ms
array.push|100,000,000|2,080.528ms
new Array(length)|100,000,000|4,556.543ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|328|165|
|Array.from|24|13|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:44:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Array","opsSec":328.44523354285445,"samples":165},{"name":"Array.from","opsSec":24.71759806717966,"samples":13}]}-->

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
|Raw usage private field|128,952,685|64476840|
|Raw usage underscore usage|97,378,911|48689481|
|Manipulating private properties using #|96,485,951|48245341|
|Manipulating private properties using underscore(_)|95,845,404|47925520|
|Manipulating private properties using Symbol|94,240,969|47120628|
|Manipulating private properties using PrivateSymbol|34,274,005|17138973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:38:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Raw usage private field","opsSec":128952685.00108252,"samples":64476840},{"name":"Raw usage underscore usage","opsSec":97378911.75248154,"samples":48689481},{"name":"Manipulating private properties using #","opsSec":96485951.4867705,"samples":48245341},{"name":"Manipulating private properties using underscore(_)","opsSec":95845404.86526634,"samples":47925520},{"name":"Manipulating private properties using Symbol","opsSec":94240969.5074527,"samples":47120628},{"name":"Manipulating private properties using PrivateSymbol","opsSec":34274005.44904551,"samples":17138973}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,693,128|3846565|
|Adding property in the object creation - small object|7,461,310|3730664|
|Adding property after the function creation - small class|257,625|128813|
|Adding property in the function creation - small class|272,486|136244|
|Adding property after the class creation - small class|264,485|132254|
|Adding property in the class creation - small class|261,686|130844|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:41:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7693128.553691831,"samples":3846565},{"name":"Adding property in the object creation - small object","opsSec":7461310.122700946,"samples":3730664},{"name":"Adding property after the function creation - small class","opsSec":257625.91807495803,"samples":128813},{"name":"Adding property in the function creation - small class","opsSec":272486.3754362297,"samples":136244},{"name":"Adding property after the class creation - small class","opsSec":264485.2135409126,"samples":132254},{"name":"Adding property in the class creation - small class","opsSec":261686.7622216147,"samples":130844}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|141,972,000|70997054|
|Getter|51,186,439|25593227|
|Method|90,270,427|45141991|
|DefineProperty (getter)|96,225,823|48401737|
|DefineProperty (getter & enumerable=false)|51,026,390|25516402|
|DefineProperty (getter & configurable=false)|98,050,149|49025083|
|DefineProperty (getter & enumerable=false & configurable=false)|50,649,881|25324954|
|DefineProperty (writable)|98,139,945|49073116|
|DefineProperty (writable & enumerable=false)|97,910,177|48956172|
|DefineProperty (writable & enumerable=false & configurable=false)|96,212,412|48106216|
|DefineProperties (getter)|51,042,134|25522769|
|DefineProperties (getter & enumerable=false)|51,249,036|25626720|
|DefineProperties (getter & enumerable=false & configurable=false)|50,997,044|25502731|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:43:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":141972000.40404108,"samples":70997054},{"name":"Getter","opsSec":51186439.66779689,"samples":25593227},{"name":"Method","opsSec":90270427.89525153,"samples":45141991},{"name":"DefineProperty (getter)","opsSec":96225823.07094258,"samples":48401737},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51026390.79909881,"samples":25516402},{"name":"DefineProperty (getter & configurable=false)","opsSec":98050149.3314746,"samples":49025083},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":50649881.763361245,"samples":25324954},{"name":"DefineProperty (writable)","opsSec":98139945.94018264,"samples":49073116},{"name":"DefineProperty (writable & enumerable=false)","opsSec":97910177.63940956,"samples":48956172},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":96212412.37266788,"samples":48106216},{"name":"DefineProperties (getter)","opsSec":51042134.71462576,"samples":25522769},{"name":"DefineProperties (getter & enumerable=false)","opsSec":51249036.99023602,"samples":25626720},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":50997044.52982399,"samples":25502731}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|129,175,708|64597690|
|Setter|11,286,417|5643213|
|Method|91,866,108|45933077|
|DefineProperty (setter)|93,478,233|46739143|
|DefineProperty (setter & enumerable=false)|11,260,598|5630405|
|DefineProperty (setter & configurable=false)|11,250,294|5625152|
|DefineProperty (setter & enumerable=false & configurable=false)|11,354,682|5677620|
|DefineProperty (writable)|92,395,605|46200783|
|DefineProperty (writable & enumerable=false)|92,335,515|46169613|
|DefineProperty (writable & enumerable=false & configurable=false)|93,621,903|46810962|
|DefineProperties (setter)|90,814,348|45407197|
|DefineProperties (setter & enumerable=false)|11,338,278|5669634|
|DefineProperties (setter & enumerable=false & configurable=false)|10,950,400|5475421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:45:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":129175708.3480785,"samples":64597690},{"name":"Setter","opsSec":11286417.738342216,"samples":5643213},{"name":"Method","opsSec":91866108.61814234,"samples":45933077},{"name":"DefineProperty (setter)","opsSec":93478233.46523279,"samples":46739143},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11260598.007981902,"samples":5630405},{"name":"DefineProperty (setter & configurable=false)","opsSec":11250294.504751436,"samples":5625152},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11354682.893838497,"samples":5677620},{"name":"DefineProperty (writable)","opsSec":92395605.18992677,"samples":46200783},{"name":"DefineProperty (writable & enumerable=false)","opsSec":92335515.77430515,"samples":46169613},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":93621903.0286937,"samples":46810962},{"name":"DefineProperties (setter)","opsSec":90814348.0479399,"samples":45407197},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11338278.553783726,"samples":5669634},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10950400.260853477,"samples":5475421}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,327,751|1663878|
|Using replaceAll()|3,156,797|1580344|
|Using replaceAll(//g)|3,013,964|1506985|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:47:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3327751.307870656,"samples":1663878},{"name":"Using replaceAll()","opsSec":3156797.001465528,"samples":1580344},{"name":"Using replaceAll(//g)","opsSec":3013964.375942474,"samples":1506985}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,292,701|11646383|
|{ ...object, __proto__: null }|2,556,715|1278359|
|{ ...object, newProp: true }|20,484,043|10242723|
|structuredClone|303,968|151985|
|JSON.parse + JSON.stringify|299,845|149943|
|loop + object.keys starting with {}|1,634,080|817081|
|loop + object.keys starting with { __proto__: null }|880,934|440468|
|loop + object.keys starting with { randomProp: true }|652,867|326681|
|object.keys + reduce(FN, {})|1,709,115|854792|
|object.keys + reduce(FN, { __proto__: null })|903,242|451622|
|object.keys + reduce(FN, { newProp: true })|677,099|338572|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:50:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":23292701.665558,"samples":11646383},{"name":"{ ...object, __proto__: null }","opsSec":2556715.003530016,"samples":1278359},{"name":"{ ...object, newProp: true }","opsSec":20484043.867197286,"samples":10242723},{"name":"structuredClone","opsSec":303968.0734503505,"samples":151985},{"name":"JSON.parse + JSON.stringify","opsSec":299845.489674963,"samples":149943},{"name":"loop + object.keys starting with {}","opsSec":1634080.063957433,"samples":817081},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":880934.5587910619,"samples":440468},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652867.3589626862,"samples":326681},{"name":"object.keys + reduce(FN, {})","opsSec":1709115.0256734153,"samples":854792},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":903242.8908177301,"samples":451622},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":677099.8869423658,"samples":338572}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|293,132|146582|
|Sort using first char|1,289,256|645022|
|Sort using localeCompare|1,195,979|598162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:51:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Sort using default","opsSec":293132.7860484104,"samples":146582},{"name":"Sort using first char","opsSec":1289256.323692015,"samples":645022},{"name":"Sort using localeCompare","opsSec":1195979.3546293764,"samples":598162}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,883|944|
|{...smallObject} - Total keys: 2|51,663,073|25884286|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,087|544|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,437|3219|
|{ ...bigObject, ...anotherBigObject }|1,153|577|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,965,856|6482929|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,817,557|13409008|
|{ ...smallObject, ...anotherSmallObject }|19,912,762|9959216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:53:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1883.7114257779654,"samples":944},{"name":"{...smallObject} - Total keys: 2","opsSec":51663073.31780523,"samples":25884286},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1087.3742465675793,"samples":544},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6437.09122433513,"samples":3219},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1153.2334042397993,"samples":577},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12965856.65155091,"samples":6482929},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26817557.41976812,"samples":13409008},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19912762.159579255,"samples":9959216}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,071|1036|
|streams.web.Readable reading 1e3 * "some data"|1,959|980|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:55:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2071.129019828775,"samples":1036},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1959.234687664774,"samples":980}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|7,280|3641|
|streams.web.WritableStream writing 1e3 * "some data"|1,665|836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:57:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":7280.46121627825,"samples":3641},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1665.1685428126616,"samples":836}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|138,728,190|69761724|
|Using backtick (`)|98,047,020|49072593|
|Using array.join|9,834,946|4917476|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:58:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":138728190.0378897,"samples":69761724},{"name":"Using backtick (`)","opsSec":98047020.73455843,"samples":49072593},{"name":"Using array.join","opsSec":9834946.000682939,"samples":4917476}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|114,240,851|57120453|
|(short string) (true) String#slice and strict comparison|56,258,835|28131294|
|(long string) (true) String#endsWith|65,294,445|32647421|
|(long string) (true) String#slice and strict comparison|51,784,008|25892011|
|(short string) (false) String#endsWith|93,726,820|46867823|
|(short string) (false) String#slice and strict comparison|56,345,830|28173253|
|(long string) (false) String#endsWith|85,028,950|42515781|
|(long string) (false) String#slice and strict comparison|50,998,013|25499017|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:01:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":114240851.39287303,"samples":57120453},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56258835.64817994,"samples":28131294},{"name":"(long string) (true) String#endsWith","opsSec":65294445.27095053,"samples":32647421},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51784008.53615778,"samples":25892011},{"name":"(short string) (false) String#endsWith","opsSec":93726820.12025656,"samples":46867823},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56345830.18811272,"samples":28173253},{"name":"(long string) (false) String#endsWith","opsSec":85028950.08071141,"samples":42515781},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50998013.90678252,"samples":25499017}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|130,509,504|65255424|
|Using indexof|15,195,328|7597667|
|Using RegExp.test|12,685,071|6343299|
|Using RegExp.text with cached regex pattern|13,537,473|6768800|
|Using new RegExp.test|4,659,080|2329839|
|Using new RegExp.test with cached regex pattern|5,299,526|2649765|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:02:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":130509504.27414401,"samples":65255424},{"name":"Using indexof","opsSec":15195328.013040764,"samples":7597667},{"name":"Using RegExp.test","opsSec":12685071.656067912,"samples":6343299},{"name":"Using RegExp.text with cached regex pattern","opsSec":13537473.343399398,"samples":6768800},{"name":"Using new RegExp.test","opsSec":4659080.39839362,"samples":2329839},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5299526.47051537,"samples":2649765}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|118,001,490|59000802|
|(short string) (true) String#slice and strict comparison|57,154,668|28580332|
|(long string) (true) String#startsWith|65,709,531|32855745|
|(long string) (true) String#slice and strict comparison|51,610,613|25805738|
|(short string) (false) String#startsWith|88,135,873|44078196|
|(short string) (false) String#slice and strict comparison|56,661,716|28330870|
|(long string) (false) String#startsWith|85,900,551|42950290|
|(long string) (false) String#slice and strict comparison|50,816,970|25408516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:05:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":118001490.71856892,"samples":59000802},{"name":"(short string) (true) String#slice and strict comparison","opsSec":57154668.3609796,"samples":28580332},{"name":"(long string) (true) String#startsWith","opsSec":65709531.19887496,"samples":32855745},{"name":"(long string) (true) String#slice and strict comparison","opsSec":51610613.07054946,"samples":25805738},{"name":"(short string) (false) String#startsWith","opsSec":88135873.26361725,"samples":44078196},{"name":"(short string) (false) String#slice and strict comparison","opsSec":56661716.76869613,"samples":28330870},{"name":"(long string) (false) String#startsWith","opsSec":85900551.13741481,"samples":42950290},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50816970.51146568,"samples":25408516}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|116,305,630|58153665|
|Using this|100,171,856|50092909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:07:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using super","opsSec":116305630.0769108,"samples":58153665},{"name":"Using this","opsSec":100171856.24701999,"samples":50092909}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,951,524|4975764|
|Date.now()|18,883,025|9442457|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:09:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":9951524.158711676,"samples":4975764},{"name":"Date.now()","opsSec":18883025.470856607,"samples":9442457}]}-->
