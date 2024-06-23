## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,263,022|8131512|
|Using dot notation|16,299,229|8149615|
|Using define property (writable)|3,698,630|1849316|
|Using define property initialized (writable)|4,678,296|2339149|
|Using define property (getter)|2,313,641|1156821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:42:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16263022.861585367,"samples":8131512},{"name":"Using dot notation","opsSec":16299229.641422017,"samples":8149615},{"name":"Using define property (writable)","opsSec":3698630.809045293,"samples":1849316},{"name":"Using define property initialized (writable)","opsSec":4678296.923986799,"samples":2339149},{"name":"Using define property (getter)","opsSec":2313641.157839754,"samples":1156821}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.02ms
new Array(length)|100|0.007ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.299ms
new Array(length)|10,000|0.232ms
array.push|1,000,000|22.533ms
new Array(length)|1,000,000|15.518ms
array.push|100,000,000|2,027.094ms
new Array(length)|100,000,000|4,131.195ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.01ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.347ms
new Array(length)|10,000|0.128ms
array.push|1,000,000|16.242ms
new Array(length)|1,000,000|8.093ms
array.push|100,000,000|2,626.893ms
new Array(length)|100,000,000|4,137.495ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|254|128|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:51:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":254.30670642447373,"samples":128},{"name":"Array.from","opsSec":23.999723523185,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|6,201|3112|
|new Blob (1024)|821|412|
|text (128)|6,467|3234|
|text (1024)|815|408|
|arrayBuffer (128)|6,475|3238|
|arrayBuffer (1024)|804|403|
|slice (0, 64)|200,831|100416|
|slice (0, 512)|38,431|19216|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:56:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":6201.487508880918,"samples":3112},{"name":"new Blob (1024)","opsSec":821.988725107854,"samples":412},{"name":"text (128)","opsSec":6467.896927594568,"samples":3234},{"name":"text (1024)","opsSec":815.0912059090612,"samples":408},{"name":"arrayBuffer (128)","opsSec":6475.923894942443,"samples":3238},{"name":"arrayBuffer (1024)","opsSec":804.0718774496106,"samples":403},{"name":"slice (0, 64)","opsSec":200831.728475525,"samples":100416},{"name":"slice (0, 512)","opsSec":38431.22807035604,"samples":19216}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|335,349|167675|
|[True conditional] Using constructor name|329,859|164930|
|[True conditional] Check if property is valid then instanceof |332,260|166131|
|[False conditional] Using instanceof only|14,646,397|7323200|
|[False conditional] Using constructor name|14,711,641|7355821|
|[False conditional] Check if property is valid then instanceof |14,629,328|7314665|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:02:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":335349.3393617652,"samples":167675},{"name":"[True conditional] Using constructor name","opsSec":329859.81197992706,"samples":164930},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":332260.6948799557,"samples":166131},{"name":"[False conditional] Using instanceof only","opsSec":14646397.861642292,"samples":7323200},{"name":"[False conditional] Using constructor name","opsSec":14711641.705727914,"samples":7355821},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":14629328.27374283,"samples":7314665}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,293|3647|
|crypto.verify('RSA-SHA256')|6,911|3456|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:05:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7293.409510979235,"samples":3647},{"name":"crypto.verify('RSA-SHA256')","opsSec":6911.081973337125,"samples":3456}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,289,981|644991|
|fromUnixToISOString(new Date())|1,977,570|988786|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:10:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1289981.5046469865,"samples":644991},{"name":"fromUnixToISOString(new Date())","opsSec":1977570.6512974321,"samples":988786}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|16,378|8190|
|Intl.DateTimeFormat().format(new Date())|19,808|9905|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,560|10781|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|16,341|8171|
|Reusing Intl.DateTimeFormat()|1,033,452|516727|
|Date.toLocaleDateString()|1,073,879|536940|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,398|11700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:14:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":16378.983159967356,"samples":8190},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":19808.77601572931,"samples":9905},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21560.854601160816,"samples":10781},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":16341.6940508037,"samples":8171},{"name":"Reusing Intl.DateTimeFormat()","opsSec":1033452.4477546631,"samples":516727},{"name":"Date.toLocaleDateString()","opsSec":1073879.5811872436,"samples":536940},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23398.223747241536,"samples":11700}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,728|521865|
|Using brackets {}|1,025,299|512650|
|Using '' + |1,046,030|523016|
|Using date.toString()|1,172,358|586180|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:18:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1043728.1421639698,"samples":521865},{"name":"Using brackets {}","opsSec":1025299.805193115,"samples":512650},{"name":"Using '' + ","opsSec":1046030.1171458381,"samples":523016},{"name":"Using date.toString()","opsSec":1172358.841709454,"samples":586180}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,343,147|1671574|
|Using delete property (proto: null)|7,796,564|3898283|
|Using delete property (cached proto: null)|3,297,604|1648803|
|Using undefined assignment|16,106,337|8053169|
|Using undefined assignment (proto: null)|8,458,845|4229423|
|Using undefined property (cached proto: null)|16,102,131|8051066|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:25:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3343147.5185876265,"samples":1671574},{"name":"Using delete property (proto: null)","opsSec":7796564.581029184,"samples":3898283},{"name":"Using delete property (cached proto: null)","opsSec":3297604.318218919,"samples":1648803},{"name":"Using undefined assignment","opsSec":16106337.22683051,"samples":8053169},{"name":"Using undefined assignment (proto: null)","opsSec":8458845.881581226,"samples":4229423},{"name":"Using undefined property (cached proto: null)","opsSec":16102131.420338184,"samples":8051066}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|295,443|147722|
|NodeError|311,862|155932|
|NodeError Range|320,623|160312|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:29:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":295443.92672992876,"samples":147722},{"name":"NodeError","opsSec":311862.65649565746,"samples":155932},{"name":"NodeError Range","opsSec":320623.1593260736,"samples":160312}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,654,965|827483|
|Function returning explicitly undefined|1,676,600|838301|
|Function returning implicitly undefined|1,661,934|830968|
|Function returning string|1,642,480|821241|
|Function returning integer|1,685,626|842814|
|Function returning float|1,670,523|835262|
|Function returning functions|1,622,869|811435|
|Function returning arrow functions|1,645,222|822612|
|Function returning empty object|1,657,720|828861|
|Function returning empty array|1,663,365|831683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:34:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1654965.920561591,"samples":827483},{"name":"Function returning explicitly undefined","opsSec":1676600.7324902634,"samples":838301},{"name":"Function returning implicitly undefined","opsSec":1661934.5374980099,"samples":830968},{"name":"Function returning string","opsSec":1642480.2359757696,"samples":821241},{"name":"Function returning integer","opsSec":1685626.776235558,"samples":842814},{"name":"Function returning float","opsSec":1670523.752763042,"samples":835262},{"name":"Function returning functions","opsSec":1622869.6527063316,"samples":811435},{"name":"Function returning arrow functions","opsSec":1645222.4962645161,"samples":822612},{"name":"Function returning empty object","opsSec":1657720.1665618883,"samples":828861},{"name":"Function returning empty array","opsSec":1663365.4377835866,"samples":831683}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,823,432|7411717|
|using Array.includes (first item)|15,090,001|7545002|
|Using raw comparison|16,217,123|8108562|
|Using raw comparison (first item)|16,077,055|8038528|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:41:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14823432.665890904,"samples":7411717},{"name":"using Array.includes (first item)","opsSec":15090001.495059013,"samples":7545002},{"name":"Using raw comparison","opsSec":16217123.708055863,"samples":8108562},{"name":"Using raw comparison (first item)","opsSec":16077055.260431696,"samples":8038528}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,152,779|7076390|
|Using Object.getOwnPropertyNames()|13,911,291|6955646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14152779.801858045,"samples":7076390},{"name":"Using Object.getOwnPropertyNames()","opsSec":13911291.304448484,"samples":6955646}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,766,252|7883127|
|Length = 10_000 - Array.at|15,764,748|7882375|
|Length = 1_000_000 - Array.at|15,881,509|7940755|
|Length = 100 - Array[length - 1]|15,991,144|7995573|
|Length = 10_000 - Array[length - 1]|15,990,140|7995071|
|Length = 1_000_000 - Array[length - 1]|15,987,786|7993894|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:24:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15766252.45490053,"samples":7883127},{"name":"Length = 10_000 - Array.at","opsSec":15764748.991059825,"samples":7882375},{"name":"Length = 1_000_000 - Array.at","opsSec":15881509.237614444,"samples":7940755},{"name":"Length = 100 - Array[length - 1]","opsSec":15991144.496895902,"samples":7995573},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15990140.97665006,"samples":7995071},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15987786.944704153,"samples":7993894}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,947,407|6473704|
|Object.create({})|1,905,929|952965|
|Cached Empty.prototype|16,001,405|8000703|
|Empty.prototype|2,517,862|1267986|
|Empty class|1,503,754|751878|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:24:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12947407.87052884,"samples":6473704},{"name":"Object.create({})","opsSec":1905929.5235179707,"samples":952965},{"name":"Cached Empty.prototype","opsSec":16001405.839980504,"samples":8000703},{"name":"Empty.prototype","opsSec":2517862.470568615,"samples":1267986},{"name":"Empty class","opsSec":1503754.604514571,"samples":751878}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,029,000|8014501|
|Using optional chain (obj.field?.field2) (undefined)|16,111,045|8055523|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,113,602|8056802|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,120,374|8060188|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:25:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16029000.813843086,"samples":8014501},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16111045.80669801,"samples":8055523},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16113602.453129107,"samples":8056802},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16120374.130103644,"samples":8060188}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,983,273|7991637|
|Using parseInt(x, 10) - big number (10 len)|15,923,322|7961662|
|Using + - small number (2 len)|16,048,700|8024351|
|Using + - big number (10 len)|16,092,897|8046449|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:26:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15983273.104955038,"samples":7991637},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15923322.31214806,"samples":7961662},{"name":"Using + - small number (2 len)","opsSec":16048700.684026591,"samples":8024351},{"name":"Using + - big number (10 len)","opsSec":16092897.581610221,"samples":8046449}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,042,312|523527|
|Using ? operator to avoid rejection|1,162,532|582307|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:27:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":1042312.4269616166,"samples":523527},{"name":"Using ? operator to avoid rejection","opsSec":1162532.4461291353,"samples":582307}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,005,657|8002829|
|Raw usage underscore usage|15,989,650|7994826|
|Manipulating private properties using #|15,886,354|7943178|
|Manipulating private properties using underscore(_)|16,015,277|8007639|
|Manipulating private properties using Symbol|16,024,486|8012244|
|Manipulating private properties using PrivateSymbol|12,448,557|6224279|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:28:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":16005657.35978857,"samples":8002829},{"name":"Raw usage underscore usage","opsSec":15989650.592887295,"samples":7994826},{"name":"Manipulating private properties using #","opsSec":15886354.76069908,"samples":7943178},{"name":"Manipulating private properties using underscore(_)","opsSec":16015277.83981052,"samples":8007639},{"name":"Manipulating private properties using Symbol","opsSec":16024486.52577385,"samples":8012244},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12448557.875410398,"samples":6224279}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,843,189|1921595|
|Adding property in the object creation - small object|3,958,683|1979342|
|Adding property after the function creation - small class|284,379|142190|
|Adding property in the function creation - small class|287,641|143821|
|Adding property after the class creation - small class|308,441|154221|
|Adding property in the class creation - small class|328,429|164215|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:29:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3843189.1468121684,"samples":1921595},{"name":"Adding property in the object creation - small object","opsSec":3958683.144922607,"samples":1979342},{"name":"Adding property after the function creation - small class","opsSec":284379.1627877399,"samples":142190},{"name":"Adding property in the function creation - small class","opsSec":287641.3781194413,"samples":143821},{"name":"Adding property after the class creation - small class","opsSec":308441.0913322996,"samples":154221},{"name":"Adding property in the class creation - small class","opsSec":328429.70769749704,"samples":164215}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,000,379|8000190|
|Getter|13,867,543|6933772|
|Method|15,857,475|7928738|
|DefineProperty (getter)|15,923,214|7961608|
|DefineProperty (getter & enumerable=false)|13,338,433|6669218|
|DefineProperty (getter & configurable=false)|16,127,357|8063679|
|DefineProperty (getter & enumerable=false & configurable=false)|13,308,960|6654481|
|DefineProperty (writable)|16,089,719|8044860|
|DefineProperty (writable & enumerable=false)|16,118,680|8059341|
|DefineProperty (writable & enumerable=false & configurable=false)|16,036,419|8018210|
|DefineProperties (getter)|12,992,492|6496247|
|DefineProperties (getter & enumerable=false)|12,988,893|6494447|
|DefineProperties (getter & enumerable=false & configurable=false)|13,011,132|6505567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:31:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Getter (class)","opsSec":16000379.039974108,"samples":8000190},{"name":"Getter","opsSec":13867543.195678087,"samples":6933772},{"name":"Method","opsSec":15857475.492631396,"samples":7928738},{"name":"DefineProperty (getter)","opsSec":15923214.726021728,"samples":7961608},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13338433.86590809,"samples":6669218},{"name":"DefineProperty (getter & configurable=false)","opsSec":16127357.645347156,"samples":8063679},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13308960.243198643,"samples":6654481},{"name":"DefineProperty (writable)","opsSec":16089719.0989437,"samples":8044860},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16118680.54962811,"samples":8059341},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16036419.743413232,"samples":8018210},{"name":"DefineProperties (getter)","opsSec":12992492.20706534,"samples":6496247},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12988893.818452932,"samples":6494447},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13011132.620987607,"samples":6505567}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,884,566|7942284|
|Setter|6,782,555|3391278|
|Method|15,727,669|7863835|
|DefineProperty (setter)|15,737,720|7868861|
|DefineProperty (setter & enumerable=false)|6,532,090|3266046|
|DefineProperty (setter & configurable=false)|6,492,768|3246385|
|DefineProperty (setter & enumerable=false & configurable=false)|6,723,042|3361522|
|DefineProperty (writable)|15,737,516|7868759|
|DefineProperty (writable & enumerable=false)|15,729,861|7864931|
|DefineProperty (writable & enumerable=false & configurable=false)|15,660,017|7830009|
|DefineProperties (setter)|15,778,392|7889197|
|DefineProperties (setter & enumerable=false)|6,724,451|3362226|
|DefineProperties (setter & enumerable=false & configurable=false)|6,575,568|3287785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:32:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Setter (class)","opsSec":15884566.47505942,"samples":7942284},{"name":"Setter","opsSec":6782555.565907637,"samples":3391278},{"name":"Method","opsSec":15727669.244953698,"samples":7863835},{"name":"DefineProperty (setter)","opsSec":15737720.929788353,"samples":7868861},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6532090.562924999,"samples":3266046},{"name":"DefineProperty (setter & configurable=false)","opsSec":6492768.675482017,"samples":3246385},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6723042.736064358,"samples":3361522},{"name":"DefineProperty (writable)","opsSec":15737516.489261227,"samples":7868759},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15729861.622524625,"samples":7864931},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15660017.68678735,"samples":7830009},{"name":"DefineProperties (setter)","opsSec":15778392.864155775,"samples":7889197},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6724451.663716145,"samples":3362226},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6575568.711269239,"samples":3287785}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,874,237|1437119|
|Using replaceAll()|2,661,100|1330552|
|Using replaceAll(//g)|2,657,931|1328966|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:33:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2874237.344673647,"samples":1437119},{"name":"Using replaceAll()","opsSec":2661100.929088934,"samples":1330552},{"name":"Using replaceAll(//g)","opsSec":2657931.4684123853,"samples":1328966}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,373,045|5186523|
|{ ...object, __proto__: null }|2,264,497|1132249|
|{ ...object, newProp: true }|9,931,504|4965753|
|structuredClone|311,133|155567|
|JSON.parse + JSON.stringify|289,917|144959|
|loop + object.keys starting with {}|1,457,029|728515|
|loop + object.keys starting with { __proto__: null }|892,235|446118|
|loop + object.keys starting with { randomProp: true }|652,421|326211|
|object.keys + reduce(FN, {})|1,487,645|743823|
|object.keys + reduce(FN, { __proto__: null })|889,207|444604|
|object.keys + reduce(FN, { newProp: true })|691,236|345619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:34:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10373045.917015143,"samples":5186523},{"name":"{ ...object, __proto__: null }","opsSec":2264497.2934764773,"samples":1132249},{"name":"{ ...object, newProp: true }","opsSec":9931504.212338192,"samples":4965753},{"name":"structuredClone","opsSec":311133.2663478712,"samples":155567},{"name":"JSON.parse + JSON.stringify","opsSec":289917.2711477199,"samples":144959},{"name":"loop + object.keys starting with {}","opsSec":1457029.825154724,"samples":728515},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":892235.8447513616,"samples":446118},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":652421.3880276455,"samples":326211},{"name":"object.keys + reduce(FN, {})","opsSec":1487645.53585285,"samples":743823},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":889207.9697672682,"samples":444604},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":691236.2511729875,"samples":345619}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|336,972|168487|
|Sort using first char|1,311,173|655587|
|Sort using localeCompare|1,260,330|630166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:35:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Sort using default","opsSec":336972.5941503314,"samples":168487},{"name":"Sort using first char","opsSec":1311173.378503962,"samples":655587},{"name":"Sort using localeCompare","opsSec":1260330.26074415,"samples":630166}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,251|1126|
|{...smallObject} - Total keys: 2|12,347,799|6173900|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,531|1267|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,783|3392|
|{ ...bigObject, ...anotherBigObject }|1,351|676|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,053,173|3526587|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,953,803|5476902|
|{ ...smallObject, ...anotherSmallObject }|8,894,237|4447119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:36:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2251.0551466148722,"samples":1126},{"name":"{...smallObject} - Total keys: 2","opsSec":12347799.407321183,"samples":6173900},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2531.844347213293,"samples":1267},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6783.423598929516,"samples":3392},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1351.9142588939128,"samples":676},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7053173.788410629,"samples":3526587},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10953803.474211676,"samples":5476902},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8894237.537476614,"samples":4447119}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,667|2834|
|streams.web.WritableStream writing 1e3 * "some data"|2,699|1361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:38:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5667.697651001097,"samples":2834},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2699.487917456051,"samples":1361}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,941,143|7970572|
|Using backtick (`)|16,152,863|8076432|
|Using array.join|6,214,019|3107010|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using + sign","opsSec":15941143.043542337,"samples":7970572},{"name":"Using backtick (`)","opsSec":16152863.095417853,"samples":8076432},{"name":"Using array.join","opsSec":6214019.962707413,"samples":3107010}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,596,220|7798111|
|(short string) (true) String#slice and strict comparison|15,932,357|7966179|
|(long string) (true) String#endsWith|14,209,889|7104945|
|(long string) (true) String#slice and strict comparison|16,052,976|8026538|
|(short string) (false) String#endsWith|15,977,959|7988980|
|(short string) (false) String#slice and strict comparison|16,106,407|8053204|
|(long string) (false) String#endsWith|15,515,646|7757824|
|(long string) (false) String#slice and strict comparison|16,034,363|8017182|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:40:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15596220.596372595,"samples":7798111},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15932357.522078551,"samples":7966179},{"name":"(long string) (true) String#endsWith","opsSec":14209889.147407345,"samples":7104945},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16052976.182595989,"samples":8026538},{"name":"(short string) (false) String#endsWith","opsSec":15977959.520614669,"samples":7988980},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16106407.259339394,"samples":8053204},{"name":"(long string) (false) String#endsWith","opsSec":15515646.262191037,"samples":7757824},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16034363.903640954,"samples":8017182}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|15,741,195|7870598|
|Using indexof|14,868,223|7434112|
|Using RegExp.test|8,323,630|4161816|
|Using RegExp.text with cached regex pattern|8,437,602|4218802|
|Using new RegExp.test|3,822,171|1911086|
|Using new RegExp.test with cached regex pattern|3,917,820|1958911|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:41:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using includes","opsSec":15741195.590714753,"samples":7870598},{"name":"Using indexof","opsSec":14868223.76211951,"samples":7434112},{"name":"Using RegExp.test","opsSec":8323630.0023300005,"samples":4161816},{"name":"Using RegExp.text with cached regex pattern","opsSec":8437602.58247937,"samples":4218802},{"name":"Using new RegExp.test","opsSec":3822171.5031106533,"samples":1911086},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3917820.9265125836,"samples":1958911}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,756,879|7878440|
|(short string) (true) String#slice and strict comparison|16,012,794|8006398|
|(long string) (true) String#startsWith|14,228,279|7114140|
|(long string) (true) String#slice and strict comparison|16,117,461|8058731|
|(short string) (false) String#startsWith|15,915,089|7957545|
|(short string) (false) String#slice and strict comparison|16,212,093|8106047|
|(long string) (false) String#startsWith|15,567,757|7783879|
|(long string) (false) String#slice and strict comparison|16,194,300|8097151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:43:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15756879.62181831,"samples":7878440},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16012794.686940487,"samples":8006398},{"name":"(long string) (true) String#startsWith","opsSec":14228279.772364372,"samples":7114140},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16117461.065208636,"samples":8058731},{"name":"(short string) (false) String#startsWith","opsSec":15915089.522626357,"samples":7957545},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16212093.902721388,"samples":8106047},{"name":"(long string) (false) String#startsWith","opsSec":15567757.533011857,"samples":7783879},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16194300.47780476,"samples":8097151}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,765,610|7882806|
|Using this|15,865,418|7932710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:44:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"Using super","opsSec":15765610.644152595,"samples":7882806},{"name":"Using this","opsSec":15865418.476935703,"samples":7932710}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,814,384|3407193|
|Date.now()|9,566,258|4783130|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:45:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6814384.364544781,"samples":3407193},{"name":"Date.now()","opsSec":9566258.775515547,"samples":4783130}]}-->
