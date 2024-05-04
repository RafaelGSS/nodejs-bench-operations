## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|912,217,657|100|
|Using dot notation|909,790,954|95|
|Using define property (writable)|4,992,943|98|
|Using define property initialized (writable)|6,442,186|94|
|Using define property (getter)|2,610,236|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:14:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":912217656.66744,"samples":6},{"name":"Using dot notation","opsSec":909790953.5908649,"samples":7},{"name":"Using define property (writable)","opsSec":4992942.853746876,"samples":7},{"name":"Using define property initialized (writable)","opsSec":6442186.268837996,"samples":7},{"name":"Using define property (getter)","opsSec":2610235.904254199,"samples":6}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.009ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.321ms
new Array(length)|10,000|0.162ms
array.push|1,000,000|27.197ms
new Array(length)|1,000,000|16.971ms
array.push|100,000,000|2,161.004ms
new Array(length)|100,000,000|4,243.146ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.012ms
new Array(length)|100|0.009ms
array.push|1,000|0.041ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.424ms
new Array(length)|10,000|3.044ms
array.push|1,000,000|254.734ms
new Array(length)|1,000,000|4.445ms
array.push|100,000,000|2,589.446ms
new Array(length)|100,000,000|4,625.693ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|216|83|
|Array.from|22|41|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:30:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":215.6497129086748,"samples":2},{"name":"Array.from","opsSec":22.060671820843652,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|911,405,458|98|
|[async] async function|18,815,139|87|
|[async] function|329,820|35|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:37:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":911405457.9563723,"samples":6},{"name":"[async] async function","opsSec":18815138.608408354,"samples":9},{"name":"[async] function","opsSec":329820.4757901804,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,824|95|
|new Blob (1024)|749|78|
|text (128)|33,289|76|
|text (1024)|15,861|82|
|arrayBuffer (128)|37,937|75|
|arrayBuffer (1024)|17,359|83|
|slice (0, 64)|92,680|81|
|slice (0, 512)|28,646|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:45:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5823.656913428497,"samples":5},{"name":"new Blob (1024)","opsSec":749.4485532923568,"samples":3},{"name":"text (128)","opsSec":33289.316691075845,"samples":4},{"name":"text (1024)","opsSec":15860.583011873106,"samples":4},{"name":"arrayBuffer (128)","opsSec":37937.42707690699,"samples":3},{"name":"arrayBuffer (1024)","opsSec":17359.013656625888,"samples":6},{"name":"slice (0, 64)","opsSec":92680.01520471221,"samples":3},{"name":"slice (0, 512)","opsSec":28645.833763617185,"samples":4}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|282,464|53|
|[True conditional] Using constructor name|217,096|94|
|[True conditional] Check if property is valid then instanceof |221,825|98|
|[False conditional] Using instanceof only|911,031,780|95|
|[False conditional] Using constructor name|911,700,850|99|
|[False conditional] Check if property is valid then instanceof |912,391,181|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:57:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":282463.9810966396,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":217096.20964387385,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":221825.02678540227,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":911031779.9659613,"samples":10},{"name":"[False conditional] Using constructor name","opsSec":911700850.3458937,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":912391180.7573806,"samples":9}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|3,371|93|
|crypto.verify('RSA-SHA256')|3,264|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:07:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":3370.7174611881696,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":3263.6036894799263,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,492,994|92|
|fromUnixToISOString(new Date())|2,115,925|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2492994.369263105,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":2115925.244898756,"samples":6}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,539|84|
|Intl.DateTimeFormat().format(new Date())|8,467|78|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,468|82|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|15,047|93|
|Reusing Intl.DateTimeFormat()|564,926|80|
|Date.toLocaleDateString()|739,304|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,746|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:27:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11538.922448973073,"samples":5},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":8466.762640107847,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13467.935380751727,"samples":5},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":15047.009497231902,"samples":3},{"name":"Reusing Intl.DateTimeFormat()","opsSec":564926.120669956,"samples":6},{"name":"Date.toLocaleDateString()","opsSec":739303.8499273668,"samples":6},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13746.252855543107,"samples":6},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,176,276|97|
|Using brackets {}|1,207,085|94|
|Using '' + |1,188,314|92|
|Using date.toString()|1,338,093|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:38:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1176276.1020611096,"samples":4},{"name":"Using brackets {}","opsSec":1207084.5198412158,"samples":4},{"name":"Using '' + ","opsSec":1188314.4164808537,"samples":4},{"name":"Using date.toString()","opsSec":1338093.3897024072,"samples":5}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,834,405|93|
|Using delete property (proto: null)|23,283,979|99|
|Using delete property (cached proto: null)|3,863,518|96|
|Using undefined assignment|909,320,322|100|
|Using undefined assignment (proto: null)|25,720,024|96|
|Using undefined property (cached proto: null)|906,458,343|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:48:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3834404.5726473676,"samples":5},{"name":"Using delete property (proto: null)","opsSec":23283978.64253624,"samples":5},{"name":"Using delete property (cached proto: null)","opsSec":3863517.7295859307,"samples":5},{"name":"Using undefined assignment","opsSec":909320321.6430678,"samples":7},{"name":"Using undefined assignment (proto: null)","opsSec":25720024.38167484,"samples":6},{"name":"Using undefined property (cached proto: null)","opsSec":906458343.247205,"samples":11}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|277,347|51|
|NodeError|219,266|93|
|NodeError Range|219,205|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:58:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":277346.9032556492,"samples":3},{"name":"NodeError","opsSec":219266.35749701076,"samples":3},{"name":"NodeError Range","opsSec":219204.9616794176,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|2,024,493|97|
|Function returning explicitly undefined|2,034,438|96|
|Function returning implicitly undefined|2,088,249|96|
|Function returning string|2,063,307|97|
|Function returning integer|2,087,681|96|
|Function returning float|2,054,241|96|
|Function returning functions|1,996,843|94|
|Function returning arrow functions|2,032,988|98|
|Function returning empty object|2,002,469|98|
|Function returning empty array|1,992,637|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:07:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":2024493.0145249881,"samples":6},{"name":"Function returning explicitly undefined","opsSec":2034437.5351667372,"samples":6},{"name":"Function returning implicitly undefined","opsSec":2088249.2305084404,"samples":6},{"name":"Function returning string","opsSec":2063307.4962428256,"samples":7},{"name":"Function returning integer","opsSec":2087680.7321198091,"samples":5},{"name":"Function returning float","opsSec":2054240.9435303626,"samples":5},{"name":"Function returning functions","opsSec":1996842.6526684589,"samples":5},{"name":"Function returning arrow functions","opsSec":2032988.0581651123,"samples":8},{"name":"Function returning empty object","opsSec":2002468.8199227308,"samples":6},{"name":"Function returning empty array","opsSec":1992637.257638066,"samples":6}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|115,462,392|93|
|using Array.includes (first item)|128,288,950|96|
|Using raw comparison|911,201,150|99|
|Using raw comparison (first item)|909,183,473|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:21:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":115462391.78169544,"samples":5},{"name":"using Array.includes (first item)","opsSec":128288950.45810592,"samples":6},{"name":"Using raw comparison","opsSec":911201150.1382265,"samples":6},{"name":"Using raw comparison (first item)","opsSec":909183473.2602545,"samples":6}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|100,643,668|94|
|Using Object.getOwnPropertyNames()|102,095,573|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:29:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":100643668.33944653,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":102095573.03185137,"samples":8}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|25,908,850|99|
|Length = 10_000 - Array.at|26,110,789|95|
|Length = 1_000_000 - Array.at|26,027,129|98|
|Length = 100 - Array[length - 1]|908,390,594|98|
|Length = 10_000 - Array[length - 1]|908,545,520|99|
|Length = 1_000_000 - Array[length - 1]|908,339,025|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:35:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":25908849.934851173,"samples":5},{"name":"Length = 10_000 - Array.at","opsSec":26110788.511599455,"samples":5},{"name":"Length = 1_000_000 - Array.at","opsSec":26027128.570884567,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":908390594.175983,"samples":8},{"name":"Length = 10_000 - Array[length - 1]","opsSec":908545519.7761123,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":908339025.355132,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|86,101,485|92|
|Object.create({})|2,185,370|85|
|Cached Empty.prototype|910,361,111|100|
|Empty.prototype|2,397,738|93|
|Empty class|1,439,552|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:45:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":86101485.06043148,"samples":6},{"name":"Object.create({})","opsSec":2185369.934796001,"samples":3},{"name":"Cached Empty.prototype","opsSec":910361110.7679226,"samples":6},{"name":"Empty.prototype","opsSec":2397738.3268396812,"samples":5},{"name":"Empty class","opsSec":1439552.3335358726,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|909,991,723|98|
|Using optional chain (obj.field?.field2) (undefined)|910,121,827|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|909,251,409|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|907,305,715|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:54:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":909991723.3665534,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":910121826.8672624,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":909251408.5146583,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":907305714.8150301,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|267,038,387|97|
|Using parseInt(x, 10) - big number (10 len)|20,543,041|98|
|Using + - small number (2 len)|910,073,862|100|
|Using + - big number (10 len)|908,966,092|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:04:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":267038387.46289527,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20543041.434031535,"samples":4},{"name":"Using + - small number (2 len)","opsSec":910073861.6882558,"samples":6},{"name":"Using + - big number (10 len)","opsSec":908966091.8176341,"samples":7}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,113,391|84|
|Using ? operator to avoid rejection|1,213,940|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:11:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1113390.8975668694,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1213939.8313733109,"samples":4}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|569,187,487|89|
|Raw usage underscore usage|595,964,405|96|
|Manipulating private properties using #|420,962,265|90|
|Manipulating private properties using underscore(_)|335,525,264|91|
|Manipulating private properties using Symbol|334,490,261|92|
|Manipulating private properties using PrivateSymbol|50,451,781|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:17:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":569187487.1603011,"samples":7},{"name":"Raw usage underscore usage","opsSec":595964404.8448883,"samples":7},{"name":"Manipulating private properties using #","opsSec":420962265.2393106,"samples":6},{"name":"Manipulating private properties using underscore(_)","opsSec":335525263.8885678,"samples":6},{"name":"Manipulating private properties using Symbol","opsSec":334490260.51443505,"samples":6},{"name":"Manipulating private properties using PrivateSymbol","opsSec":50451780.88001137,"samples":8}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,872,414|98|
|Adding property in the object creation - small object|3,872,321|99|
|Adding property after the function creation - small class|253,650|89|
|Adding property in the function creation - small class|254,604|89|
|Adding property after the class creation - small class|219,157|89|
|Adding property in the class creation - small class|217,953|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:28:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3872414.4806764,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3872320.69053292,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":253649.88415746318,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":254604.3421914057,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":219156.54779151978,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":217952.98898191657,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|908,719,397|98|
|Getter|102,190,929|90|
|Method|910,829,598|99|
|DefineProperty (getter)|909,615,214|99|
|DefineProperty (getter & enumerable=false)|102,310,490|95|
|DefineProperty (getter & configurable=false)|910,574,444|99|
|DefineProperty (getter & enumerable=false & configurable=false)|101,823,035|95|
|DefineProperty (writable)|912,043,380|95|
|DefineProperty (writable & enumerable=false)|913,374,524|99|
|DefineProperty (writable & enumerable=false & configurable=false)|912,036,845|98|
|DefineProperties (getter)|64,545,494|66|
|DefineProperties (getter & enumerable=false)|102,152,140|99|
|DefineProperties (getter & enumerable=false & configurable=false)|101,278,386|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:42:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":908719396.9955536,"samples":6},{"name":"Getter","opsSec":102190929.23573232,"samples":5},{"name":"Method","opsSec":910829598.1551472,"samples":6},{"name":"DefineProperty (getter)","opsSec":909615214.2773839,"samples":6},{"name":"DefineProperty (getter & enumerable=false)","opsSec":102310490.47283737,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":910574443.8816664,"samples":7},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":101823035.48869814,"samples":7},{"name":"DefineProperty (writable)","opsSec":912043379.9090273,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":913374523.781378,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":912036845.3992412,"samples":7},{"name":"DefineProperties (getter)","opsSec":64545494.41073542,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":102152140.06837134,"samples":6},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":101278385.55060078,"samples":6}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|865,262,389|99|
|Setter|9,805,148|93|
|Method|865,670,388|94|
|DefineProperty (setter)|864,858,061|96|
|DefineProperty (setter & enumerable=false)|10,822,954|97|
|DefineProperty (setter & configurable=false)|10,554,496|94|
|DefineProperty (setter & enumerable=false & configurable=false)|10,426,345|96|
|DefineProperty (writable)|906,939,368|93|
|DefineProperty (writable & enumerable=false)|907,890,691|98|
|DefineProperty (writable & enumerable=false & configurable=false)|777,603,758|86|
|DefineProperties (setter)|115,635,419|88|
|DefineProperties (setter & enumerable=false)|10,554,145|96|
|DefineProperties (setter & enumerable=false & configurable=false)|10,315,659|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:58:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":865262388.6240853,"samples":6},{"name":"Setter","opsSec":9805147.870197657,"samples":6},{"name":"Method","opsSec":865670388.4843001,"samples":7},{"name":"DefineProperty (setter)","opsSec":864858061.2141894,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10822953.78055742,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":10554496.054428425,"samples":4},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10426345.181627521,"samples":5},{"name":"DefineProperty (writable)","opsSec":906939367.6941485,"samples":8},{"name":"DefineProperty (writable & enumerable=false)","opsSec":907890691.3333101,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":777603758.0760058,"samples":8},{"name":"DefineProperties (setter)","opsSec":115635418.99758266,"samples":4},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10554145.048701225,"samples":5},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10315658.910947848,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,678,540|95|
|Using replaceAll()|3,376,719|94|
|Using replaceAll(//g)|3,319,034|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:14:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3678539.858368855,"samples":7},{"name":"Using replaceAll()","opsSec":3376718.943674366,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3319033.5960760373,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|27,614,180|94|
|{ ...object, __proto__: null }|28,476,125|97|
|{ ...object, newProp: true }|806,815|88|
|structuredClone|280,712|95|
|JSON.parse + JSON.stringify|188,236|96|
|loop + object.keys starting with {}|1,345,406|95|
|loop + object.keys starting with { __proto__: null }|735,115|95|
|loop + object.keys starting with { randomProp: true }|592,577|94|
|object.keys + reduce(FN, {})|573,149|99|
|object.keys + reduce(FN, { __proto__: null })|750,487|98|
|object.keys + reduce(FN, { newProp: true })|597,371|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:23:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":27614180.019079838,"samples":9},{"name":"{ ...object, __proto__: null }","opsSec":28476125.26322953,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":806814.9837047429,"samples":3},{"name":"structuredClone","opsSec":280711.6773982498,"samples":6},{"name":"JSON.parse + JSON.stringify","opsSec":188236.3783908569,"samples":3},{"name":"loop + object.keys starting with {}","opsSec":1345406.480734626,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":735115.3934611314,"samples":4},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":592576.5839805886,"samples":4},{"name":"object.keys + reduce(FN, {})","opsSec":573149.2033793952,"samples":5},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":750487.386139866,"samples":4},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":597370.9913641548,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|283,368|98|
|Sort using first char|1,372,905|97|
|Sort using localeCompare|1,239,298|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:38:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":283368.25122280477,"samples":6},{"name":"Sort using first char","opsSec":1372904.8754023584,"samples":5},{"name":"Sort using localeCompare","opsSec":1239298.1752449945,"samples":5}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,090|93|
|{...smallObject} - Total keys: 2|92,863,911|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,428|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,452|98|
|{ ...bigObject, ...anotherBigObject }|1,294|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,129,380|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,270,787|98|
|{ ...smallObject, ...anotherSmallObject }|24,793,331|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2089.962971101955,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":92863911.05858414,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2428.0475353800025,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6452.154877139863,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1293.934311700417,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14129379.692364221,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":35270787.34256891,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24793330.90217843,"samples":7}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,703|88|
|streams.web.Readable reading 1e3 * "some data"|588|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:57:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2703.238396071481,"samples":6},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":587.7251222247844,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,048|93|
|streams.web.WritableStream writing 1e3 * "some data"|1,058|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:02:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5048.442944096168,"samples":6},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1058.3927560861275,"samples":3}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|909,707,936|99|
|Using backtick (`)|908,859,914|96|
|Using array.join|11,968,611|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:12:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":909707935.7950077,"samples":6},{"name":"Using backtick (`)","opsSec":908859913.9045894,"samples":6},{"name":"Using array.join","opsSec":11968610.548231013,"samples":7}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|88,641,504|97|
|(short string) (true) String#slice and strict comparison|907,457,740|95|
|(long string) (true) String#endsWith|80,617,996|97|
|(long string) (true) String#slice and strict comparison|904,739,121|99|
|(short string) (false) String#endsWith|104,957,231|95|
|(short string) (false) String#slice and strict comparison|907,838,667|94|
|(long string) (false) String#endsWith|93,531,559|98|
|(long string) (false) String#slice and strict comparison|905,079,975|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:20:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":88641503.93094872,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":907457739.7512256,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":80617995.92414333,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":904739120.9705184,"samples":6},{"name":"(short string) (false) String#endsWith","opsSec":104957231.15051243,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":907838667.1363549,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":93531559.31985292,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":905079975.4923636,"samples":7}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|19,557,137|95|
|Using indexof|909,274,928|95|
|Using RegExp.test|17,864,152|99|
|Using RegExp.text with cached regex pattern|18,854,951|98|
|Using new RegExp.test|3,910,815|97|
|Using new RegExp.test with cached regex pattern|4,410,666|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:34:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":19557137.40041973,"samples":4},{"name":"Using indexof","opsSec":909274927.810384,"samples":6},{"name":"Using RegExp.test","opsSec":17864151.638627034,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":18854951.130531296,"samples":6},{"name":"Using new RegExp.test","opsSec":3910814.521348051,"samples":5},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4410666.040207417,"samples":5}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,379,490|96|
|(short string) (true) String#slice and strict comparison|906,837,072|93|
|(long string) (true) String#startsWith|78,726,722|96|
|(long string) (true) String#slice and strict comparison|904,321,777|99|
|(short string) (false) String#startsWith|104,785,169|92|
|(short string) (false) String#slice and strict comparison|906,462,964|100|
|(long string) (false) String#startsWith|90,713,786|97|
|(long string) (false) String#slice and strict comparison|904,146,202|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:45:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":88379489.97065386,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":906837072.1905942,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":78726721.82011837,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":904321777.0035138,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":104785168.89638671,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":906462963.9898578,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":90713786.06618711,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":904146202.1952468,"samples":6}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|22,469,771|85|
|Using this|181,191,649|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:55:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":22469771.250330612,"samples":6},{"name":"Using this","opsSec":181191648.83043876,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,221,400|94|
|Date.now()|19,459,753|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:31:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"new Date().getTime()","opsSec":11221400.470779033,"samples":7},{"name":"Date.now()","opsSec":19459753.153565325,"samples":5}]}-->
