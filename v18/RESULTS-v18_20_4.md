## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|116,901,731|58453830|
|Using dot notation|74,760,492|37576596|
|Using define property (writable)|3,743,952|1872162|
|Using define property initialized (writable)|5,564,682|2782369|
|Using define property (getter)|2,091,801|1051458|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:42:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":116901731.67938308,"samples":58453830},{"name":"Using dot notation","opsSec":74760492.7749296,"samples":37576596},{"name":"Using define property (writable)","opsSec":3743952.045852149,"samples":1872162},{"name":"Using define property initialized (writable)","opsSec":5564682.698183346,"samples":2782369},{"name":"Using define property (getter)","opsSec":2091801.522198424,"samples":1051458}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.358ms
new Array(length)|10,000|0.154ms
array.push|1,000,000|27.225ms
new Array(length)|1,000,000|8.08ms
array.push|100,000,000|1,930.366ms
new Array(length)|100,000,000|4,026.761ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.018ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.45ms
new Array(length)|10,000|3.263ms
array.push|1,000,000|250.224ms
new Array(length)|1,000,000|4.544ms
array.push|100,000,000|2,303.42ms
new Array(length)|100,000,000|4,365.673ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|254|128|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:56:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":254.9255063257713,"samples":128},{"name":"Array.from","opsSec":21.218884728705774,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,296|2149|
|new Blob (1024)|571|289|
|text (128)|48,218|24110|
|text (1024)|33,423|16716|
|arrayBuffer (128)|50,444|25223|
|arrayBuffer (1024)|30,535|15268|
|slice (0, 64)|76,395|38596|
|slice (0, 512)|30,884|15443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:02:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4296.595348455492,"samples":2149},{"name":"new Blob (1024)","opsSec":571.9597470246184,"samples":289},{"name":"text (128)","opsSec":48218.76839621762,"samples":24110},{"name":"text (1024)","opsSec":33423.897779786996,"samples":16716},{"name":"arrayBuffer (128)","opsSec":50444.01825629878,"samples":25223},{"name":"arrayBuffer (1024)","opsSec":30535.564196427786,"samples":15268},{"name":"slice (0, 64)","opsSec":76395.06849445542,"samples":38596},{"name":"slice (0, 512)","opsSec":30884.76547415447,"samples":15443}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|397,918|199393|
|[True conditional] Using constructor name|313,132|156709|
|[True conditional] Check if property is valid then instanceof |313,455|156732|
|[False conditional] Using instanceof only|44,431,341|22215679|
|[False conditional] Using constructor name|106,580,424|53294995|
|[False conditional] Check if property is valid then instanceof |106,633,487|53318170|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:07:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":397918.6670273658,"samples":199393},{"name":"[True conditional] Using constructor name","opsSec":313132.65911691036,"samples":156709},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313455.86832786386,"samples":156732},{"name":"[False conditional] Using instanceof only","opsSec":44431341.47154098,"samples":22215679},{"name":"[False conditional] Using constructor name","opsSec":106580424.40690947,"samples":53294995},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":106633487.12768538,"samples":53318170}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,705|3353|
|crypto.verify('RSA-SHA256')|6,816|3409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:13:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6705.198541028788,"samples":3353},{"name":"crypto.verify('RSA-SHA256')","opsSec":6816.210390329598,"samples":3409}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,612,094|1306368|
|fromUnixToISOString(new Date())|2,166,493|1083400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:19:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2612094.3755859584,"samples":1306368},{"name":"fromUnixToISOString(new Date())","opsSec":2166493.8917450476,"samples":1083400}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,463|8733|
|Intl.DateTimeFormat().format(new Date())|16,999|8688|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,452|9227|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,111|9057|
|Reusing Intl.DateTimeFormat()|436,878|277606|
|Date.toLocaleDateString()|766,003|383004|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,894|10448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:24:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17463.803123422284,"samples":8733},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":16999.505458793024,"samples":8688},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18452.027441362465,"samples":9227},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18111.073286779003,"samples":9057},{"name":"Reusing Intl.DateTimeFormat()","opsSec":436878.3471352039,"samples":277606},{"name":"Date.toLocaleDateString()","opsSec":766003.842131145,"samples":383004},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20894.129097892317,"samples":10448}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|967,173|484497|
|Using brackets {}|995,158|497580|
|Using '' + |982,123|491148|
|Using date.toString()|1,115,203|557668|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:31:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":967173.0336930077,"samples":484497},{"name":"Using brackets {}","opsSec":995158.1947830346,"samples":497580},{"name":"Using '' + ","opsSec":982123.7688831461,"samples":491148},{"name":"Using date.toString()","opsSec":1115203.7145353816,"samples":557668}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,304,540|1652296|
|Using delete property (proto: null)|17,223,447|8612736|
|Using delete property (cached proto: null)|3,320,563|1660426|
|Using undefined assignment|81,586,723|40794271|
|Using undefined assignment (proto: null)|18,959,825|9480808|
|Using undefined property (cached proto: null)|81,248,447|40624226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:36:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3304540.217854786,"samples":1652296},{"name":"Using delete property (proto: null)","opsSec":17223447.969288442,"samples":8612736},{"name":"Using delete property (cached proto: null)","opsSec":3320563.8680320433,"samples":1660426},{"name":"Using undefined assignment","opsSec":81586723.4319347,"samples":40794271},{"name":"Using undefined assignment (proto: null)","opsSec":18959825.813246716,"samples":9480808},{"name":"Using undefined property (cached proto: null)","opsSec":81248447.12509316,"samples":40624226}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|380,995|190880|
|NodeError|298,123|149127|
|NodeError Range|305,191|152596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:42:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":380995.5431106238,"samples":190880},{"name":"NodeError","opsSec":298123.28784444457,"samples":149127},{"name":"NodeError Range","opsSec":305191.6978602191,"samples":152596}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,811,203|905924|
|Function returning explicitly undefined|1,784,775|893213|
|Function returning implicitly undefined|1,832,402|916294|
|Function returning string|1,827,705|913877|
|Function returning integer|1,867,870|933936|
|Function returning float|1,847,745|924136|
|Function returning functions|1,785,991|893079|
|Function returning arrow functions|1,828,574|914480|
|Function returning empty object|1,850,883|925443|
|Function returning empty array|1,859,734|929969|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:48:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1811203.6461908312,"samples":905924},{"name":"Function returning explicitly undefined","opsSec":1784775.9282501587,"samples":893213},{"name":"Function returning implicitly undefined","opsSec":1832402.7404181384,"samples":916294},{"name":"Function returning string","opsSec":1827705.766844813,"samples":913877},{"name":"Function returning integer","opsSec":1867870.539325238,"samples":933936},{"name":"Function returning float","opsSec":1847745.451674127,"samples":924136},{"name":"Function returning functions","opsSec":1785991.842034968,"samples":893079},{"name":"Function returning arrow functions","opsSec":1828574.8253416403,"samples":914480},{"name":"Function returning empty object","opsSec":1850883.734518309,"samples":925443},{"name":"Function returning empty array","opsSec":1859734.5227263994,"samples":929969}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|92,079,528|46046627|
|using Array.includes (first item)|85,065,128|42659254|
|Using raw comparison|103,394,962|51703142|
|Using raw comparison (first item)|106,518,331|53260569|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:54:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":92079528.07306825,"samples":46046627},{"name":"using Array.includes (first item)","opsSec":85065128.24536118,"samples":42659254},{"name":"Using raw comparison","opsSec":103394962.04486617,"samples":51703142},{"name":"Using raw comparison (first item)","opsSec":106518331.24197178,"samples":53260569}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|52,782,358|26392854|
|Using Object.getOwnPropertyNames()|44,914,504|22499229|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:59:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":52782358.2204179,"samples":26392854},{"name":"Using Object.getOwnPropertyNames()","opsSec":44914504.43710922,"samples":22499229}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,494,059|11757016|
|Length = 10_000 - Array.at|20,987,781|10495476|
|Length = 1_000_000 - Array.at|21,379,868|10689937|
|Length = 100 - Array[length - 1]|102,240,074|51128837|
|Length = 10_000 - Array[length - 1]|102,778,160|51394349|
|Length = 1_000_000 - Array[length - 1]|102,693,697|51355552|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:05:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23494059.65290095,"samples":11757016},{"name":"Length = 10_000 - Array.at","opsSec":20987781.291929103,"samples":10495476},{"name":"Length = 1_000_000 - Array.at","opsSec":21379868.270195305,"samples":10689937},{"name":"Length = 100 - Array[length - 1]","opsSec":102240074.18914893,"samples":51128837},{"name":"Length = 10_000 - Array[length - 1]","opsSec":102778160.15523928,"samples":51394349},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":102693697.4182876,"samples":51355552}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|146,740,141|73370095|
|~ (small)|98,744,780|49372399|
|Math.floor (long)|105,171,463|52609556|
|~ (long)|106,802,917|53405557|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:11:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":146740141.86923346,"samples":73370095},{"name":"~ (small)","opsSec":98744780.02845004,"samples":49372399},{"name":"Math.floor (long)","opsSec":105171463.64770855,"samples":52609556},{"name":"~ (long)","opsSec":106802917.30330865,"samples":53405557}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|47,181,346|23640051|
|Object.create({})|1,302,053|664397|
|Cached Empty.prototype|122,985,092|61493478|
|Empty.prototype|1,445,231|736953|
|Empty class|916,018|469215|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:16:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":47181346.72317373,"samples":23640051},{"name":"Object.create({})","opsSec":1302053.1740810329,"samples":664397},{"name":"Cached Empty.prototype","opsSec":122985092.28391154,"samples":61493478},{"name":"Empty.prototype","opsSec":1445231.1343772733,"samples":736953},{"name":"Empty class","opsSec":916018.4006830015,"samples":469215}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|151,966,213|76001582|
|Using optional chain (obj.field?.field2) (undefined)|102,557,318|51278772|
|Using and operator (obj.field && obj.field.field2) (Valid)|105,239,481|52619748|
|Using and operator (obj.field && obj.field.field2) (undefined)|104,440,721|52220371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:22:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":151966213.11134955,"samples":76001582},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":102557318.57901376,"samples":51278772},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":105239481.89790943,"samples":52619748},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":104440721.73849997,"samples":52220371}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|132,214,453|66107241|
|Using parseInt(x, 10) - big number (10 len)|17,222,411|8618478|
|Using + - small number (2 len)|104,781,265|52390642|
|Using + - big number (10 len)|106,028,083|53015910|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:28:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":132214453.1772492,"samples":66107241},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":17222411.53567883,"samples":8618478},{"name":"Using + - small number (2 len)","opsSec":104781265.13937227,"samples":52390642},{"name":"Using + - big number (10 len)","opsSec":106028083.1462376,"samples":53015910}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|691,107|345554|
|Using ? operator to avoid rejection|722,041|364030|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:34:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":691107.6724149634,"samples":345554},{"name":"Using ? operator to avoid rejection","opsSec":722041.0098229174,"samples":364030}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|108,052,829|54035443|
|Raw usage underscore usage|82,847,571|41423793|
|Manipulating private properties using #|77,911,557|38959033|
|Manipulating private properties using underscore(_)|78,430,017|39215755|
|Manipulating private properties using Symbol|77,976,174|38988097|
|Manipulating private properties using PrivateSymbol|35,423,395|17712972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:39:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":108052829.07562752,"samples":54035443},{"name":"Raw usage underscore usage","opsSec":82847571.0874372,"samples":41423793},{"name":"Manipulating private properties using #","opsSec":77911557.89174618,"samples":38959033},{"name":"Manipulating private properties using underscore(_)","opsSec":78430017.63362446,"samples":39215755},{"name":"Manipulating private properties using Symbol","opsSec":77976174.35000406,"samples":38988097},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35423395.42839251,"samples":17712972}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,699,971|1849987|
|Adding property in the object creation - small object|3,684,897|1842637|
|Adding property after the function creation - small class|183,760|92549|
|Adding property in the function creation - small class|186,232|93249|
|Adding property after the class creation - small class|161,824|80913|
|Adding property in the class creation - small class|158,094|79990|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:45:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3699971.032623232,"samples":1849987},{"name":"Adding property in the object creation - small object","opsSec":3684897.8603660055,"samples":1842637},{"name":"Adding property after the function creation - small class","opsSec":183760.9326675552,"samples":92549},{"name":"Adding property in the function creation - small class","opsSec":186232.07586669258,"samples":93249},{"name":"Adding property after the class creation - small class","opsSec":161824.54519733868,"samples":80913},{"name":"Adding property in the class creation - small class","opsSec":158094.7763894853,"samples":79990}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|155,158,595|77610478|
|Getter|54,242,943|27144097|
|Method|105,224,637|52612330|
|DefineProperty (getter)|105,701,299|52856282|
|DefineProperty (getter & enumerable=false)|55,091,185|27545870|
|DefineProperty (getter & configurable=false)|106,993,344|53510113|
|DefineProperty (getter & enumerable=false & configurable=false)|56,892,827|28450705|
|DefineProperty (writable)|106,690,400|53345208|
|DefineProperty (writable & enumerable=false)|105,608,026|52804027|
|DefineProperty (writable & enumerable=false & configurable=false)|92,978,699|46500369|
|DefineProperties (getter)|56,817,697|28410861|
|DefineProperties (getter & enumerable=false)|56,443,663|28221833|
|DefineProperties (getter & enumerable=false & configurable=false)|56,463,976|28232003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:51:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":155158595.27802023,"samples":77610478},{"name":"Getter","opsSec":54242943.7769001,"samples":27144097},{"name":"Method","opsSec":105224637.27147834,"samples":52612330},{"name":"DefineProperty (getter)","opsSec":105701299.83528176,"samples":52856282},{"name":"DefineProperty (getter & enumerable=false)","opsSec":55091185.5623085,"samples":27545870},{"name":"DefineProperty (getter & configurable=false)","opsSec":106993344.13627245,"samples":53510113},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56892827.7169389,"samples":28450705},{"name":"DefineProperty (writable)","opsSec":106690400.42320153,"samples":53345208},{"name":"DefineProperty (writable & enumerable=false)","opsSec":105608026.96434508,"samples":52804027},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":92978699.07300133,"samples":46500369},{"name":"DefineProperties (getter)","opsSec":56817697.488851465,"samples":28410861},{"name":"DefineProperties (getter & enumerable=false)","opsSec":56443663.403591484,"samples":28221833},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":56463976.97751584,"samples":28232003}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|146,141,577|73170739|
|Setter|10,486,251|5243130|
|Method|99,845,311|49952485|
|DefineProperty (setter)|104,861,274|52430647|
|DefineProperty (setter & enumerable=false)|10,578,873|5290320|
|DefineProperty (setter & configurable=false)|10,673,234|5339226|
|DefineProperty (setter & enumerable=false & configurable=false)|10,730,318|5367627|
|DefineProperty (writable)|100,270,298|50135293|
|DefineProperty (writable & enumerable=false)|101,071,806|50535914|
|DefineProperty (writable & enumerable=false & configurable=false)|99,941,747|49970920|
|DefineProperties (setter)|98,530,602|49266486|
|DefineProperties (setter & enumerable=false)|10,388,385|5194196|
|DefineProperties (setter & enumerable=false & configurable=false)|10,520,318|5260162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:57:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":146141577.9503175,"samples":73170739},{"name":"Setter","opsSec":10486251.275438938,"samples":5243130},{"name":"Method","opsSec":99845311.02882591,"samples":49952485},{"name":"DefineProperty (setter)","opsSec":104861274.91524798,"samples":52430647},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10578873.412771054,"samples":5290320},{"name":"DefineProperty (setter & configurable=false)","opsSec":10673234.794753507,"samples":5339226},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10730318.332555301,"samples":5367627},{"name":"DefineProperty (writable)","opsSec":100270298.82586415,"samples":50135293},{"name":"DefineProperty (writable & enumerable=false)","opsSec":101071806.16848986,"samples":50535914},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99941747.65382516,"samples":49970920},{"name":"DefineProperties (setter)","opsSec":98530602.93018316,"samples":49266486},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10388385.76696854,"samples":5194196},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10520318.929206276,"samples":5260162}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,334,259|1667504|
|Using replaceAll()|2,941,438|1470926|
|Using replaceAll(//g)|3,030,626|1515314|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:04:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3334259.0720642693,"samples":1667504},{"name":"Using replaceAll()","opsSec":2941438.5513972156,"samples":1470926},{"name":"Using replaceAll(//g)","opsSec":3030626.7513817786,"samples":1515314}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|20,580,595|10290308|
|{ ...object, __proto__: null }|19,821,049|9913160|
|{ ...object, newProp: true }|606,356|304381|
|structuredClone|250,854|125456|
|JSON.parse + JSON.stringify|199,343|99672|
|loop + object.keys starting with {}|1,283,426|641730|
|loop + object.keys starting with { __proto__: null }|754,789|377626|
|loop + object.keys starting with { randomProp: true }|525,945|263000|
|object.keys + reduce(FN, {})|1,309,568|654911|
|object.keys + reduce(FN, { __proto__: null })|756,896|378449|
|object.keys + reduce(FN, { newProp: true })|530,831|265598|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:10:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":20580595.172437686,"samples":10290308},{"name":"{ ...object, __proto__: null }","opsSec":19821049.34512654,"samples":9913160},{"name":"{ ...object, newProp: true }","opsSec":606356.7416712565,"samples":304381},{"name":"structuredClone","opsSec":250854.7574528968,"samples":125456},{"name":"JSON.parse + JSON.stringify","opsSec":199343.20143113506,"samples":99672},{"name":"loop + object.keys starting with {}","opsSec":1283426.487167567,"samples":641730},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":754789.5479918409,"samples":377626},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":525945.7655245507,"samples":263000},{"name":"object.keys + reduce(FN, {})","opsSec":1309568.268528836,"samples":654911},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":756896.4589588096,"samples":378449},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":530831.0462240863,"samples":265598}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|263,973|131999|
|Sort using first char|1,260,604|634780|
|Sort using localeCompare|1,138,841|569561|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:16:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":263973.6410403521,"samples":131999},{"name":"Sort using first char","opsSec":1260604.106200123,"samples":634780},{"name":"Sort using localeCompare","opsSec":1138841.4555181647,"samples":569561}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,849|925|
|{...smallObject} - Total keys: 2|56,989,976|28500776|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,087|544|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,221|3111|
|{ ...bigObject, ...anotherBigObject }|1,136|569|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,242,934|6124943|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,046,211|14025608|
|{ ...smallObject, ...anotherSmallObject }|19,914,144|9957092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:22:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1849.3685589966904,"samples":925},{"name":"{...smallObject} - Total keys: 2","opsSec":56989976.993732706,"samples":28500776},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1087.5097614746248,"samples":544},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6221.666095623979,"samples":3111},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1136.907082126695,"samples":569},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12242934.192620877,"samples":6124943},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28046211.88269104,"samples":14025608},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19914144.808963016,"samples":9957092}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,235|1122|
|streams.web.Readable reading 1e3 * "some data"|604|303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:28:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2235.046168135555,"samples":1122},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":604.9912086191704,"samples":303}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,906|2454|
|streams.web.WritableStream writing 1e3 * "some data"|1,724|895|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:34:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4906.852110644643,"samples":2454},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1724.2577588107283,"samples":895}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|161,162,184|80582393|
|Using backtick (`)|106,201,430|53100783|
|Using array.join|10,583,705|5293472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:40:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":161162184.19769832,"samples":80582393},{"name":"Using backtick (`)","opsSec":106201430.6993773,"samples":53100783},{"name":"Using array.join","opsSec":10583705.132220618,"samples":5293472}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|61,916,283|31140279|
|(short string) (true) String#slice and strict comparison|48,746,891|24373452|
|(long string) (true) String#endsWith|50,208,440|25107274|
|(long string) (true) String#slice and strict comparison|44,645,634|22331724|
|(short string) (false) String#endsWith|57,961,816|28996495|
|(short string) (false) String#slice and strict comparison|59,502,057|29753313|
|(long string) (false) String#endsWith|55,107,162|27557563|
|(long string) (false) String#slice and strict comparison|51,870,572|25935306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:45:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":61916283.94534327,"samples":31140279},{"name":"(short string) (true) String#slice and strict comparison","opsSec":48746891.61828953,"samples":24373452},{"name":"(long string) (true) String#endsWith","opsSec":50208440.14325657,"samples":25107274},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44645634.927411586,"samples":22331724},{"name":"(short string) (false) String#endsWith","opsSec":57961816.74387154,"samples":28996495},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59502057.67002033,"samples":29753313},{"name":"(long string) (false) String#endsWith","opsSec":55107162.904745944,"samples":27557563},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51870572.05965952,"samples":25935306}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|154,305,542|77152812|
|Using indexof|15,858,142|7929225|
|Using RegExp.test|13,808,300|6912123|
|Using RegExp.text with cached regex pattern|14,704,721|7352363|
|Using new RegExp.test|4,378,841|2189573|
|Using new RegExp.test with cached regex pattern|4,940,824|2470647|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:51:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using includes","opsSec":154305542.52667356,"samples":77152812},{"name":"Using indexof","opsSec":15858142.320322702,"samples":7929225},{"name":"Using RegExp.test","opsSec":13808300.147373213,"samples":6912123},{"name":"Using RegExp.text with cached regex pattern","opsSec":14704721.294489184,"samples":7352363},{"name":"Using new RegExp.test","opsSec":4378841.959487385,"samples":2189573},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4940824.137506171,"samples":2470647}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|76,757,827|38380116|
|(short string) (true) String#slice and strict comparison|43,936,742|21968399|
|(long string) (true) String#startsWith|47,629,526|23814768|
|(long string) (true) String#slice and strict comparison|36,289,133|18154381|
|(short string) (false) String#startsWith|87,755,514|43877769|
|(short string) (false) String#slice and strict comparison|50,907,939|25469988|
|(long string) (false) String#startsWith|76,878,983|38439574|
|(long string) (false) String#slice and strict comparison|47,152,631|23579613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:41:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":76757827.17727453,"samples":38380116},{"name":"(short string) (true) String#slice and strict comparison","opsSec":43936742.02459066,"samples":21968399},{"name":"(long string) (true) String#startsWith","opsSec":47629526.569353744,"samples":23814768},{"name":"(long string) (true) String#slice and strict comparison","opsSec":36289133.93323819,"samples":18154381},{"name":"(short string) (false) String#startsWith","opsSec":87755514.83254407,"samples":43877769},{"name":"(short string) (false) String#slice and strict comparison","opsSec":50907939.73534043,"samples":25469988},{"name":"(long string) (false) String#startsWith","opsSec":76878983.01770245,"samples":38439574},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47152631.13870368,"samples":23579613}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|102,255,073|51130836|
|Using this|86,655,759|43413487|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:43:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using super","opsSec":102255073.27561139,"samples":51130836},{"name":"Using this","opsSec":86655759.89622009,"samples":43413487}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,292,372|4146191|
|Date.now()|17,298,140|8676716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:46:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8292372.347678588,"samples":4146191},{"name":"Date.now()","opsSec":17298140.190100085,"samples":8676716}]}-->
