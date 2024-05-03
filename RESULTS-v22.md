## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|144,927,768|82|
|Using dot notation|147,218,272|85|
|Using define property (writable)|5,198,625|95|
|Using define property initialized (writable)|7,913,677|96|
|Using define property (getter)|2,819,505|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:22:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":144927768.27405336,"samples":5},{"name":"Using dot notation","opsSec":147218271.75846058,"samples":5},{"name":"Using define property (writable)","opsSec":5198625.005940904,"samples":6},{"name":"Using define property initialized (writable)","opsSec":7913676.657708174,"samples":5},{"name":"Using define property (getter)","opsSec":2819504.5574301598,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.066ms
new Array(length)|100|0.008ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.284ms
new Array(length)|10,000|0.167ms
array.push|1,000,000|27.812ms
new Array(length)|1,000,000|6.486ms
array.push|100,000,000|2,023.091ms
new Array(length)|100,000,000|4,030.398ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.014ms
new Array(length)|100|0.011ms
array.push|1,000|0.034ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.342ms
new Array(length)|10,000|0.118ms
array.push|1,000,000|16.197ms
new Array(length)|1,000,000|8.163ms
array.push|100,000,000|2,622.882ms
new Array(length)|100,000,000|4,032.636ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|251|91|
|Array.from|25|45|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:34:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":251.48374602344674,"samples":3},{"name":"Array.from","opsSec":24.99870908055125,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|139,367,380|78|
|[async] async function|19,255,413|89|
|[async] function|221,145|23|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:41:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":139367380.38977394,"samples":4},{"name":"[async] async function","opsSec":19255413.35297198,"samples":8},{"name":"[async] function","opsSec":221145.49805896837,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,334|84|
|new Blob (1024)|798|75|
|text (128)|6,482|89|
|text (1024)|828|89|
|arrayBuffer (128)|6,497|91|
|arrayBuffer (1024)|825|91|
|slice (0, 64)|203,608|57|
|slice (0, 512)|36,125|67|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:54:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6334.468492398966,"samples":2},{"name":"new Blob (1024)","opsSec":798.170749045239,"samples":2},{"name":"text (128)","opsSec":6481.878126620119,"samples":6},{"name":"text (1024)","opsSec":827.6999183060182,"samples":3},{"name":"arrayBuffer (128)","opsSec":6496.892331436602,"samples":4},{"name":"arrayBuffer (1024)","opsSec":825.1620181981906,"samples":3},{"name":"slice (0, 64)","opsSec":203607.919681793,"samples":3},{"name":"slice (0, 512)","opsSec":36124.58903672448,"samples":6}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|262,877|58|
|[True conditional] Using constructor name|217,273|95|
|[True conditional] Check if property is valid then instanceof |222,110|100|
|[False conditional] Using instanceof only|145,116,176|83|
|[False conditional] Using constructor name|145,303,080|83|
|[False conditional] Check if property is valid then instanceof |147,403,750|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":262876.9631897255,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":217272.66937502782,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":222109.51585693946,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":145116175.907225,"samples":5},{"name":"[False conditional] Using constructor name","opsSec":145303080.03071555,"samples":5},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":147403750.13155952,"samples":5}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,543|93|
|crypto.verify('RSA-SHA256')|7,452|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:12:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7543.22126115289,"samples":6},{"name":"crypto.verify('RSA-SHA256')","opsSec":7451.555665211268,"samples":3}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,747|79|
|Intl.DateTimeFormat().format(new Date())|17,964|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,028|89|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,113|79|
|Reusing Intl.DateTimeFormat()|1,005,121|86|
|Date.toLocaleDateString()|1,178,821|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,862|87|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:36:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17747.344851079517,"samples":3},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17963.801204840453,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21028.245150117342,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18113.377460215906,"samples":5},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1005121.473992268,"samples":5},{"name":"Date.toLocaleDateString()","opsSec":1178821.0593873744,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20862.495193080107,"samples":8},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,154,298|96|
|Using brackets {}|1,225,401|96|
|Using '' + |1,182,984|97|
|Using date.toString()|1,350,445|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:46:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1154298.4537901836,"samples":6},{"name":"Using brackets {}","opsSec":1225400.5383298602,"samples":4},{"name":"Using '' + ","opsSec":1182984.4208674433,"samples":6},{"name":"Using date.toString()","opsSec":1350444.857227936,"samples":4}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,241,019|92|
|Using delete property (proto: null)|20,973,699|93|
|Using delete property (cached proto: null)|4,300,541|94|
|Using undefined assignment|141,193,013|82|
|Using undefined assignment (proto: null)|24,005,004|92|
|Using undefined property (cached proto: null)|149,009,474|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:56:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4241019.081265636,"samples":4},{"name":"Using delete property (proto: null)","opsSec":20973698.929169904,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":4300540.768940318,"samples":5},{"name":"Using undefined assignment","opsSec":141193013.39633432,"samples":5},{"name":"Using undefined assignment (proto: null)","opsSec":24005004.11950233,"samples":4},{"name":"Using undefined property (cached proto: null)","opsSec":149009474.49016783,"samples":5}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|254,297|61|
|NodeError|213,596|93|
|NodeError Range|216,148|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:03:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":254297.274149979,"samples":3},{"name":"NodeError","opsSec":213596.249347319,"samples":3},{"name":"NodeError Range","opsSec":216147.91729636834,"samples":4}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,002,800|96|
|Function returning explicitly undefined|1,965,494|97|
|Function returning implicitly undefined|2,018,074|97|
|Function returning string|1,922,486|98|
|Function returning integer|2,050,556|97|
|Function returning float|2,003,071|97|
|Function returning functions|1,976,325|97|
|Function returning arrow functions|1,988,551|96|
|Function returning empty object|2,013,364|94|
|Function returning empty array|2,015,740|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:18:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2002800.1611261922,"samples":4},{"name":"Function returning explicitly undefined","opsSec":1965494.30686029,"samples":6},{"name":"Function returning implicitly undefined","opsSec":2018074.1961018897,"samples":7},{"name":"Function returning string","opsSec":1922486.3930012016,"samples":4},{"name":"Function returning integer","opsSec":2050556.3634409893,"samples":5},{"name":"Function returning float","opsSec":2003071.444446296,"samples":6},{"name":"Function returning functions","opsSec":1976324.948121165,"samples":6},{"name":"Function returning arrow functions","opsSec":1988550.9140535225,"samples":4},{"name":"Function returning empty object","opsSec":2013363.7100518143,"samples":6},{"name":"Function returning empty array","opsSec":2015740.0617820965,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|84,267,529|88|
|using Array.includes (first item)|104,600,321|91|
|Using raw comparison|143,641,090|81|
|Using raw comparison (first item)|144,436,523|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":84267528.7886162,"samples":6},{"name":"using Array.includes (first item)","opsSec":104600321.44787107,"samples":5},{"name":"Using raw comparison","opsSec":143641090.03340027,"samples":4},{"name":"Using raw comparison (first item)","opsSec":144436522.75026044,"samples":4}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|60,460,261|89|
|Using Object.getOwnPropertyNames()|59,914,062|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:32:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":60460260.89449351,"samples":4},{"name":"Using Object.getOwnPropertyNames()","opsSec":59914061.99650493,"samples":4}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,131,679|85|
|Length = 10_000 - Array.at|129,874,951|83|
|Length = 1_000_000 - Array.at|128,233,539|83|
|Length = 100 - Array[length - 1]|138,662,777|86|
|Length = 10_000 - Array[length - 1]|137,770,527|85|
|Length = 1_000_000 - Array[length - 1]|140,628,378|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:43:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131131678.54073644,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":129874950.73540103,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":128233538.99886686,"samples":4},{"name":"Length = 100 - Array[length - 1]","opsSec":138662776.63819444,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":137770526.9366006,"samples":5},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":140628378.05939806,"samples":4}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|56,542,920|91|
|Object.create({})|2,476,118|81|
|Cached Empty.prototype|143,462,603|83|
|Empty.prototype|2,596,795|91|
|Empty class|1,701,892|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:52:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":56542920.490159005,"samples":6},{"name":"Object.create({})","opsSec":2476117.7888551094,"samples":3},{"name":"Cached Empty.prototype","opsSec":143462603.2015119,"samples":5},{"name":"Empty.prototype","opsSec":2596795.382710834,"samples":3},{"name":"Empty class","opsSec":1701892.3777312064,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|143,164,516|81|
|Using optional chain (obj.field?.field2) (undefined)|147,456,621|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|142,548,141|80|
|Using and operator (obj.field && obj.field.field2) (undefined)|143,966,501|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":143164515.64778346,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":147456620.62158588,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":142548140.5359494,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":143966500.99744987,"samples":5}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,142,816|80|
|Using parseInt(x, 10) - big number (10 len)|140,220,725|78|
|Using + - small number (2 len)|143,722,853|82|
|Using + - big number (10 len)|145,534,655|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:10:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":142142815.70996103,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":140220724.9980938,"samples":5},{"name":"Using + - small number (2 len)","opsSec":143722852.82834992,"samples":5},{"name":"Using + - big number (10 len)","opsSec":145534655.1921107,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,347,820|85|
|Using ? operator to avoid rejection|1,394,957|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:16:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1347820.27898202,"samples":4},{"name":"Using ? operator to avoid rejection","opsSec":1394956.7608255502,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|134,562,476|76|
|Raw usage underscore usage|143,971,748|84|
|Manipulating private properties using #|131,637,734|74|
|Manipulating private properties using underscore(_)|138,761,558|78|
|Manipulating private properties using Symbol|134,202,064|75|
|Manipulating private properties using PrivateSymbol|42,522,156|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:26:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":134562476.28679478,"samples":6},{"name":"Raw usage underscore usage","opsSec":143971748.13738945,"samples":6},{"name":"Manipulating private properties using #","opsSec":131637733.50855243,"samples":5},{"name":"Manipulating private properties using underscore(_)","opsSec":138761558.27641955,"samples":5},{"name":"Manipulating private properties using Symbol","opsSec":134202063.72344217,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":42522156.20654151,"samples":7}]}-->
