## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|914,953,648|97|
|Using dot notation|914,610,585|97|
|Using define property (writable)|4,917,765|93|
|Using define property initialized (writable)|6,782,845|94|
|Using define property (getter)|2,663,453|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:16:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":914953648.0933666,"samples":7},{"name":"Using dot notation","opsSec":914610584.6567296,"samples":6},{"name":"Using define property (writable)","opsSec":4917765.331750559,"samples":4},{"name":"Using define property initialized (writable)","opsSec":6782845.422155006,"samples":4},{"name":"Using define property (getter)","opsSec":2663452.987433868,"samples":4}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.012ms
array.push|1,000|0.048ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.423ms
new Array(length)|10,000|0.341ms
array.push|1,000,000|32.52ms
new Array(length)|1,000,000|7.619ms
array.push|100,000,000|2,035.753ms
new Array(length)|100,000,000|4,750.853ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.019ms
array.push|100|0.023ms
new Array(length)|100|0.01ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.013ms
array.push|10,000|0.283ms
new Array(length)|10,000|0.161ms
array.push|1,000,000|25.717ms
new Array(length)|1,000,000|4.369ms
array.push|100,000,000|2,817.251ms
new Array(length)|100,000,000|4,303.947ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|217|85|
|Array.from|23|43|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:31:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":217.42398689452324,"samples":2},{"name":"Array.from","opsSec":23.285604925489636,"samples":2}]}-->

## async function vs function

|name|ops/sec|samples|
|-|-|-|
|function|916,920,915|98|
|[async] async function|19,478,582|87|
|[async] function|392,799|38|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:38:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"function","opsSec":916920915.2119774,"samples":6},{"name":"[async] async function","opsSec":19478582.476929903,"samples":6},{"name":"[async] function","opsSec":392799.22467141727,"samples":3}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,781|90|
|new Blob (1024)|753|79|
|text (128)|6,196|90|
|text (1024)|790|89|
|arrayBuffer (128)|6,228|90|
|arrayBuffer (1024)|792|90|
|slice (0, 64)|83,611|70|
|slice (0, 512)|27,376|59|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 20:46:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5781.09165227992,"samples":6},{"name":"new Blob (1024)","opsSec":753.1680276147437,"samples":2},{"name":"text (128)","opsSec":6195.827548705374,"samples":5},{"name":"text (1024)","opsSec":789.6881188410536,"samples":2},{"name":"arrayBuffer (128)","opsSec":6228.361351078386,"samples":3},{"name":"arrayBuffer (1024)","opsSec":792.3378036449587,"samples":2},{"name":"slice (0, 64)","opsSec":83610.73947590876,"samples":3},{"name":"slice (0, 512)","opsSec":27376.447277714968,"samples":3}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|260,628|53|
|[True conditional] Using constructor name|213,422|97|
|[True conditional] Check if property is valid then instanceof |214,866|97|
|[False conditional] Using instanceof only|916,266,149|95|
|[False conditional] Using constructor name|916,931,038|99|
|[False conditional] Check if property is valid then instanceof |917,245,242|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:01:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":260627.89823526435,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":213422.2307025607,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":214866.4762376148,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":916266148.5159158,"samples":6},{"name":"[False conditional] Using constructor name","opsSec":916931037.9747696,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":917245241.5597596,"samples":6}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,021|93|
|crypto.verify('RSA-SHA256')|6,891|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:08:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7021.345146316398,"samples":4},{"name":"crypto.verify('RSA-SHA256')","opsSec":6891.011874264464,"samples":3}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,498,726|95|
|fromUnixToISOString(new Date())|2,313,687|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1498725.555129517,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2313687.4734178875,"samples":4}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|11,012|85|
|Intl.DateTimeFormat().format(new Date())|9,409|81|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|13,334|79|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,557|89|
|Reusing Intl.DateTimeFormat()|623,141|96|
|Date.toLocaleDateString()|759,018|96|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|13,954|81|
|Format using date.get*|0|0|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:28:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":11011.741119083226,"samples":4},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":9409.061016327247,"samples":4},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":13334.160735805095,"samples":3},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14556.928886775604,"samples":4},{"name":"Reusing Intl.DateTimeFormat()","opsSec":623141.3847792421,"samples":3},{"name":"Date.toLocaleDateString()","opsSec":759017.5279646413,"samples":4},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":13953.886349435648,"samples":5},{"name":"Format using date.get*","opsSec":0,"samples":0}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,223,244|95|
|Using brackets {}|1,240,324|99|
|Using '' + |1,232,594|98|
|Using date.toString()|1,359,325|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:41:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1223243.8964557736,"samples":5},{"name":"Using brackets {}","opsSec":1240324.371809764,"samples":5},{"name":"Using '' + ","opsSec":1232593.7463212346,"samples":5},{"name":"Using date.toString()","opsSec":1359324.6609302068,"samples":6}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,196,556|95|
|Using delete property (proto: null)|22,401,503|96|
|Using delete property (cached proto: null)|4,215,020|91|
|Using undefined assignment|914,986,563|96|
|Using undefined assignment (proto: null)|24,535,011|97|
|Using undefined property (cached proto: null)|909,659,526|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:50:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":4196556.292378978,"samples":4},{"name":"Using delete property (proto: null)","opsSec":22401502.67716328,"samples":7},{"name":"Using delete property (cached proto: null)","opsSec":4215019.733554495,"samples":4},{"name":"Using undefined assignment","opsSec":914986562.8212337,"samples":6},{"name":"Using undefined assignment (proto: null)","opsSec":24535010.816344503,"samples":5},{"name":"Using undefined property (cached proto: null)","opsSec":909659525.8302804,"samples":6}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|256,146|52|
|NodeError|211,709|94|
|NodeError Range|213,287|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 21:59:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":256145.77660220783,"samples":3},{"name":"NodeError","opsSec":211709.1080002739,"samples":3},{"name":"NodeError Range","opsSec":213286.5688673855,"samples":3}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,922,084|96|
|Function returning explicitly undefined|1,942,204|95|
|Function returning implicitly undefined|1,901,454|94|
|Function returning string|1,925,977|96|
|Function returning integer|1,941,279|99|
|Function returning float|1,946,706|99|
|Function returning functions|1,920,978|99|
|Function returning arrow functions|1,928,841|99|
|Function returning empty object|1,918,960|96|
|Function returning empty array|1,959,642|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:09:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1922083.8438991518,"samples":7},{"name":"Function returning explicitly undefined","opsSec":1942204.4439900506,"samples":7},{"name":"Function returning implicitly undefined","opsSec":1901453.8250584775,"samples":5},{"name":"Function returning string","opsSec":1925976.869362837,"samples":7},{"name":"Function returning integer","opsSec":1941278.5559627765,"samples":5},{"name":"Function returning float","opsSec":1946706.0888306343,"samples":5},{"name":"Function returning functions","opsSec":1920977.5173730904,"samples":6},{"name":"Function returning arrow functions","opsSec":1928841.3259237027,"samples":5},{"name":"Function returning empty object","opsSec":1918960.0831476008,"samples":5},{"name":"Function returning empty array","opsSec":1959642.0754714785,"samples":5}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|914,234,712|99|
|using Array.includes (first item)|914,901,289|97|
|Using raw comparison|916,520,703|95|
|Using raw comparison (first item)|915,135,439|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:23:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":914234712.1959611,"samples":6},{"name":"using Array.includes (first item)","opsSec":914901288.7639852,"samples":6},{"name":"Using raw comparison","opsSec":916520702.5725727,"samples":7},{"name":"Using raw comparison (first item)","opsSec":915135438.8073635,"samples":9}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|103,851,306|94|
|Using Object.getOwnPropertyNames()|105,689,428|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:29:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":103851306.46128727,"samples":5},{"name":"Using Object.getOwnPropertyNames()","opsSec":105689427.62328833,"samples":5}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|1,002,699,684|98|
|Length = 10_000 - Array.at|1,004,271,918|97|
|Length = 1_000_000 - Array.at|1,003,835,239|99|
|Length = 100 - Array[length - 1]|913,989,741|95|
|Length = 10_000 - Array[length - 1]|914,777,213|99|
|Length = 1_000_000 - Array[length - 1]|913,941,144|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:37:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":1002699683.6448263,"samples":7},{"name":"Length = 10_000 - Array.at","opsSec":1004271917.6295959,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":1003835238.5718048,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":913989741.2410219,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":914777212.858826,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":913941143.773282,"samples":6}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|95,799,014|93|
|Object.create({})|2,847,500|85|
|Cached Empty.prototype|914,966,858|98|
|Empty.prototype|2,610,985|88|
|Empty class|1,677,854|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:47:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":95799013.97655317,"samples":8},{"name":"Object.create({})","opsSec":2847500.376256694,"samples":3},{"name":"Cached Empty.prototype","opsSec":914966858.4349002,"samples":7},{"name":"Empty.prototype","opsSec":2610984.798725185,"samples":3},{"name":"Empty class","opsSec":1677853.5545746589,"samples":3}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|915,318,294|99|
|Using optional chain (obj.field?.field2) (undefined)|915,443,047|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|914,995,970|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|914,009,225|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:57:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":915318293.7312914,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":915443047.4479927,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":914995969.6877705,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":914009224.8899934,"samples":7}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|916,490,395|99|
|Using parseInt(x, 10) - big number (10 len)|915,904,407|96|
|Using + - small number (2 len)|916,165,091|98|
|Using + - big number (10 len)|914,983,687|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:05:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":916490395.4005027,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":915904407.2573998,"samples":6},{"name":"Using + - small number (2 len)","opsSec":916165090.9576342,"samples":6},{"name":"Using + - big number (10 len)","opsSec":914983686.788669,"samples":6}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,413,464|81|
|Using ? operator to avoid rejection|1,498,080|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:12:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1413463.7823841658,"samples":3},{"name":"Using ? operator to avoid rejection","opsSec":1498079.733106796,"samples":3}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|909,647,679|94|
|Raw usage underscore usage|910,485,048|96|
|Manipulating private properties using #|900,957,736|93|
|Manipulating private properties using underscore(_)|902,839,007|96|
|Manipulating private properties using Symbol|901,214,407|97|
|Manipulating private properties using PrivateSymbol|56,269,496|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:20:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":909647679.2930503,"samples":8},{"name":"Raw usage underscore usage","opsSec":910485048.1715364,"samples":6},{"name":"Manipulating private properties using #","opsSec":900957735.5027527,"samples":9},{"name":"Manipulating private properties using underscore(_)","opsSec":902839006.5670812,"samples":8},{"name":"Manipulating private properties using Symbol","opsSec":901214406.818594,"samples":8},{"name":"Manipulating private properties using PrivateSymbol","opsSec":56269496.21777687,"samples":5}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,644,117|98|
|Adding property in the object creation - small object|5,661,336|95|
|Adding property after the function creation - small class|291,234|86|
|Adding property in the function creation - small class|292,669|90|
|Adding property after the class creation - small class|245,246|85|
|Adding property in the class creation - small class|245,274|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:32:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5644116.527483965,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5661335.6521332525,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":291233.73715388327,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":292669.3899071785,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":245246.47760236223,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":245274.3942764345,"samples":3}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|916,885,246|95|
|Getter|98,674,587|97|
|Method|916,695,746|95|
|DefineProperty (getter)|916,859,065|97|
|DefineProperty (getter & enumerable=false)|98,701,345|98|
|DefineProperty (getter & configurable=false)|916,930,754|96|
|DefineProperty (getter & enumerable=false & configurable=false)|98,349,970|97|
|DefineProperty (writable)|916,265,747|98|
|DefineProperty (writable & enumerable=false)|914,827,639|99|
|DefineProperty (writable & enumerable=false & configurable=false)|914,306,947|97|
|DefineProperties (getter)|98,241,263|99|
|DefineProperties (getter & enumerable=false)|95,584,091|94|
|DefineProperties (getter & enumerable=false & configurable=false)|61,111,848|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:46:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":916885245.867472,"samples":8},{"name":"Getter","opsSec":98674587.05188034,"samples":5},{"name":"Method","opsSec":916695745.838416,"samples":7},{"name":"DefineProperty (getter)","opsSec":916859065.2549706,"samples":8},{"name":"DefineProperty (getter & enumerable=false)","opsSec":98701345.45336883,"samples":6},{"name":"DefineProperty (getter & configurable=false)","opsSec":916930753.5835447,"samples":6},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":98349969.51240472,"samples":5},{"name":"DefineProperty (writable)","opsSec":916265746.5723487,"samples":10},{"name":"DefineProperty (writable & enumerable=false)","opsSec":914827638.9594095,"samples":7},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":914306946.853288,"samples":6},{"name":"DefineProperties (getter)","opsSec":98241262.90627857,"samples":6},{"name":"DefineProperties (getter & enumerable=false)","opsSec":95584091.48364554,"samples":5},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":61111847.69274824,"samples":4}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|869,462,132|96|
|Setter|13,008,368|96|
|Method|871,923,940|97|
|DefineProperty (setter)|871,454,023|98|
|DefineProperty (setter & enumerable=false)|13,076,051|95|
|DefineProperty (setter & configurable=false)|13,158,508|98|
|DefineProperty (setter & enumerable=false & configurable=false)|13,086,871|96|
|DefineProperty (writable)|871,237,927|97|
|DefineProperty (writable & enumerable=false)|872,527,590|98|
|DefineProperty (writable & enumerable=false & configurable=false)|839,953,118|95|
|DefineProperties (setter)|876,178,079|95|
|DefineProperties (setter & enumerable=false)|13,182,400|97|
|DefineProperties (setter & enumerable=false & configurable=false)|12,485,305|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:01:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":869462131.6381599,"samples":5},{"name":"Setter","opsSec":13008368.076064505,"samples":4},{"name":"Method","opsSec":871923940.012955,"samples":6},{"name":"DefineProperty (setter)","opsSec":871454022.5063307,"samples":6},{"name":"DefineProperty (setter & enumerable=false)","opsSec":13076050.93528155,"samples":4},{"name":"DefineProperty (setter & configurable=false)","opsSec":13158507.753082706,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":13086871.262462363,"samples":6},{"name":"DefineProperty (writable)","opsSec":871237927.2451229,"samples":6},{"name":"DefineProperty (writable & enumerable=false)","opsSec":872527590.4826556,"samples":6},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":839953118.1206075,"samples":6},{"name":"DefineProperties (setter)","opsSec":876178078.8027428,"samples":6},{"name":"DefineProperties (setter & enumerable=false)","opsSec":13182399.722063629,"samples":4},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":12485305.386217084,"samples":5}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,659,432|94|
|Using replaceAll()|3,185,391|96|
|Using replaceAll(//g)|3,387,033|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:16:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":3659432.401757251,"samples":5},{"name":"Using replaceAll()","opsSec":3185390.811448281,"samples":4},{"name":"Using replaceAll(//g)","opsSec":3387033.355069915,"samples":5}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|29,415,366|94|
|{ ...object, __proto__: null }|30,037,139|98|
|{ ...object, newProp: true }|946,360|88|
|structuredClone|283,455|98|
|JSON.parse + JSON.stringify|192,266|97|
|loop + object.keys starting with {}|1,622,267|96|
|loop + object.keys starting with { __proto__: null }|868,133|92|
|loop + object.keys starting with { randomProp: true }|684,001|98|
|object.keys + reduce(FN, {})|662,991|97|
|object.keys + reduce(FN, { __proto__: null })|868,277|96|
|object.keys + reduce(FN, { newProp: true })|688,119|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:26:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":29415366.16499367,"samples":5},{"name":"{ ...object, __proto__: null }","opsSec":30037138.65406706,"samples":5},{"name":"{ ...object, newProp: true }","opsSec":946359.8667782436,"samples":3},{"name":"structuredClone","opsSec":283454.93417931814,"samples":7},{"name":"JSON.parse + JSON.stringify","opsSec":192266.0070361466,"samples":5},{"name":"loop + object.keys starting with {}","opsSec":1622267.4746338434,"samples":5},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":868133.0812995968,"samples":5},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":684001.438483786,"samples":5},{"name":"object.keys + reduce(FN, {})","opsSec":662991.0270640156,"samples":4},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":868277.4373836389,"samples":10},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":688118.9639875551,"samples":4}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|275,991|97|
|Sort using first char|1,537,295|98|
|Sort using localeCompare|1,399,458|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:39:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":275990.94456870714,"samples":4},{"name":"Sort using first char","opsSec":1537294.5355636738,"samples":6},{"name":"Sort using localeCompare","opsSec":1399457.9680046139,"samples":4}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,174|93|
|{...smallObject} - Total keys: 2|113,671,751|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,294|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,522|99|
|{ ...bigObject, ...anotherBigObject }|1,338|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,126,859|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|41,227,030|99|
|{ ...smallObject, ...anotherSmallObject }|27,538,298|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:47:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2173.615433243295,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":113671751.13472864,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1293.7129585097384,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6521.6230701230925,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1337.768171497854,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15126858.879034959,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":41227029.85086566,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27538297.69729671,"samples":5}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,545|85|
|streams.web.Readable reading 1e3 * "some data"|624|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:57:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2544.7290803305973,"samples":5},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":623.6579226048707,"samples":5}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,677|92|
|streams.web.WritableStream writing 1e3 * "some data"|1,098|51|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:04:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6676.768848675738,"samples":4},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1097.637898537226,"samples":4}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|914,419,818|98|
|Using backtick (`)|914,723,053|98|
|Using array.join|12,100,474|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:14:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":914419818.130921,"samples":6},{"name":"Using backtick (`)","opsSec":914723052.778176,"samples":6},{"name":"Using array.join","opsSec":12100473.900885882,"samples":4}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,815,963|95|
|(short string) (true) String#slice and strict comparison|913,076,452|99|
|(long string) (true) String#endsWith|85,279,526|99|
|(long string) (true) String#slice and strict comparison|911,812,163|95|
|(short string) (false) String#endsWith|109,404,853|100|
|(short string) (false) String#slice and strict comparison|912,496,091|97|
|(long string) (false) String#endsWith|100,098,839|98|
|(long string) (false) String#slice and strict comparison|912,550,285|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:23:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":91815962.61061105,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":913076451.6286936,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":85279525.99345198,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":911812162.9724456,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":109404852.66320549,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":912496090.9218223,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":100098838.79230697,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":912550285.2473636,"samples":6}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|914,463,689|99|
|Using indexof|915,358,371|97|
|Using RegExp.test|16,791,170|97|
|Using RegExp.text with cached regex pattern|17,409,351|98|
|Using new RegExp.test|4,893,242|96|
|Using new RegExp.test with cached regex pattern|5,817,925|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:35:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":914463689.0374608,"samples":8},{"name":"Using indexof","opsSec":915358370.7991023,"samples":6},{"name":"Using RegExp.test","opsSec":16791170.205320023,"samples":6},{"name":"Using RegExp.text with cached regex pattern","opsSec":17409351.001412954,"samples":7},{"name":"Using new RegExp.test","opsSec":4893242.237977236,"samples":6},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5817924.553266885,"samples":5}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|309,309,099|96|
|(short string) (true) String#slice and strict comparison|913,539,366|98|
|(long string) (true) String#startsWith|195,727,937|95|
|(long string) (true) String#slice and strict comparison|912,313,355|97|
|(short string) (false) String#startsWith|957,987,278|98|
|(short string) (false) String#slice and strict comparison|913,594,403|98|
|(long string) (false) String#startsWith|955,677,665|99|
|(long string) (false) String#slice and strict comparison|913,328,609|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:47:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":309309098.8265051,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":913539365.9187286,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":195727936.64058283,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":912313355.3531978,"samples":6},{"name":"(short string) (false) String#startsWith","opsSec":957987277.5829635,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":913594402.5484104,"samples":8},{"name":"(long string) (false) String#startsWith","opsSec":955677665.105909,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":913328609.3477162,"samples":7}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|909,584,798|97|
|Using this|911,328,960|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:57:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":909584798.1266441,"samples":6},{"name":"Using this","opsSec":911328959.7717098,"samples":6}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|13,041,530|96|
|Date.now()|23,975,517|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 02:03:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":13041529.568679605,"samples":5},{"name":"Date.now()","opsSec":23975516.666572284,"samples":6}]}-->
