## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|14,932,250|7466126|
|Using dot notation|13,966,219|6983110|
|Using define property (writable)|3,120,230|1560116|
|Using define property initialized (writable)|3,778,930|1889466|
|Using define property (getter)|1,673,887|836944|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:20:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":14932250.626255834,"samples":7466126},{"name":"Using dot notation","opsSec":13966219.608990937,"samples":6983110},{"name":"Using define property (writable)","opsSec":3120230.1840278925,"samples":1560116},{"name":"Using define property initialized (writable)","opsSec":3778930.8965389645,"samples":1889466},{"name":"Using define property (getter)","opsSec":1673887.5279614015,"samples":836944}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.027ms
new Array(length)|100|0.015ms
array.push|1,000|0.03ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.26ms
new Array(length)|10,000|0.136ms
array.push|1,000,000|30.69ms
new Array(length)|1,000,000|7.843ms
array.push|100,000,000|1,843.985ms
new Array(length)|100,000,000|4,050.092ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.024ms
new Array(length)|100|0.013ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.34ms
new Array(length)|10,000|0.218ms
array.push|1,000,000|20.151ms
new Array(length)|1,000,000|7.728ms
array.push|100,000,000|1,990.441ms
new Array(length)|100,000,000|4,692.212ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|283|142|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:34:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":283.9766338346155,"samples":142},{"name":"Array.from","opsSec":22.844738425260644,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,097|2049|
|new Blob (1024)|596|299|
|text (128)|4,818|2411|
|text (1024)|606|304|
|arrayBuffer (128)|4,800|2401|
|arrayBuffer (1024)|589|297|
|slice (0, 64)|223,155|111578|
|slice (0, 512)|39,002|19502|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:14:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":4097.877481658782,"samples":2049},{"name":"new Blob (1024)","opsSec":596.7112350088537,"samples":299},{"name":"text (128)","opsSec":4818.8100537583205,"samples":2411},{"name":"text (1024)","opsSec":606.7191430826941,"samples":304},{"name":"arrayBuffer (128)","opsSec":4800.692608179012,"samples":2401},{"name":"arrayBuffer (1024)","opsSec":589.7711169782397,"samples":297},{"name":"slice (0, 64)","opsSec":223155.9785770854,"samples":111578},{"name":"slice (0, 512)","opsSec":39002.98405026211,"samples":19502}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|312,139|156070|
|[True conditional] Using constructor name|304,775|152389|
|[True conditional] Check if property is valid then instanceof |308,705|154353|
|[False conditional] Using instanceof only|15,005,222|7502612|
|[False conditional] Using constructor name|13,964,020|6982011|
|[False conditional] Check if property is valid then instanceof |13,360,419|6680210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:23:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":312139.7465422038,"samples":156070},{"name":"[True conditional] Using constructor name","opsSec":304775.4654872026,"samples":152389},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":308705.9203537501,"samples":154353},{"name":"[False conditional] Using instanceof only","opsSec":15005222.259343408,"samples":7502612},{"name":"[False conditional] Using constructor name","opsSec":13964020.408146245,"samples":6982011},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13360419.011348976,"samples":6680210}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,287|3644|
|crypto.verify('RSA-SHA256')|7,365|3683|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:29:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7287.825471155212,"samples":3644},{"name":"crypto.verify('RSA-SHA256')","opsSec":7365.653328160496,"samples":3683}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,189,145|594573|
|fromUnixToISOString(new Date())|1,865,224|932613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:34:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1189145.3126740544,"samples":594573},{"name":"fromUnixToISOString(new Date())","opsSec":1865224.4145599375,"samples":932613}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,147|11574|
|Intl.DateTimeFormat().format(new Date())|22,494|11248|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,915|10958|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|14,953|7477|
|Reusing Intl.DateTimeFormat()|653,931|326966|
|Date.toLocaleDateString()|644,721|322361|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,078|11540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:41:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23147.395204856795,"samples":11574},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":22494.871882171774,"samples":11248},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21915.11230646057,"samples":10958},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":14953.522743366058,"samples":7477},{"name":"Reusing Intl.DateTimeFormat()","opsSec":653931.1747386138,"samples":326966},{"name":"Date.toLocaleDateString()","opsSec":644721.4210405848,"samples":322361},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23078.885843707565,"samples":11540}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|936,080|468041|
|Using brackets {}|960,957|480479|
|Using '' + |948,957|474479|
|Using date.toString()|1,033,520|516761|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:47:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":936080.719442026,"samples":468041},{"name":"Using brackets {}","opsSec":960957.0544180676,"samples":480479},{"name":"Using '' + ","opsSec":948957.8709410421,"samples":474479},{"name":"Using date.toString()","opsSec":1033520.10245619,"samples":516761}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,813,187|1406594|
|Using delete property (proto: null)|7,755,323|3877663|
|Using delete property (cached proto: null)|2,789,206|1394604|
|Using undefined assignment|13,747,244|6873624|
|Using undefined assignment (proto: null)|7,957,409|3978705|
|Using undefined property (cached proto: null)|14,157,305|7078653|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:56:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2813187.0153850503,"samples":1406594},{"name":"Using delete property (proto: null)","opsSec":7755323.502758973,"samples":3877663},{"name":"Using delete property (cached proto: null)","opsSec":2789206.4491884923,"samples":1394604},{"name":"Using undefined assignment","opsSec":13747244.205712603,"samples":6873624},{"name":"Using undefined assignment (proto: null)","opsSec":7957409.57025811,"samples":3978705},{"name":"Using undefined property (cached proto: null)","opsSec":14157305.20704921,"samples":7078653}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|293,933|146968|
|NodeError|298,520|149261|
|NodeError Range|295,007|147504|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:03:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":293933.5756359304,"samples":146968},{"name":"NodeError","opsSec":298520.3778402132,"samples":149261},{"name":"NodeError Range","opsSec":295007.22236103076,"samples":147504}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,501,627|750814|
|Function returning explicitly undefined|1,502,969|751485|
|Function returning implicitly undefined|1,519,280|759641|
|Function returning string|1,494,794|747398|
|Function returning integer|1,522,989|761495|
|Function returning float|1,513,205|756604|
|Function returning functions|1,480,656|740329|
|Function returning arrow functions|1,499,559|749780|
|Function returning empty object|1,508,195|754098|
|Function returning empty array|1,489,719|744860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1501627.57053367,"samples":750814},{"name":"Function returning explicitly undefined","opsSec":1502969.2364929714,"samples":751485},{"name":"Function returning implicitly undefined","opsSec":1519280.6721463194,"samples":759641},{"name":"Function returning string","opsSec":1494794.989516592,"samples":747398},{"name":"Function returning integer","opsSec":1522989.576610993,"samples":761495},{"name":"Function returning float","opsSec":1513205.896645822,"samples":756604},{"name":"Function returning functions","opsSec":1480656.7858653232,"samples":740329},{"name":"Function returning arrow functions","opsSec":1499559.220231211,"samples":749780},{"name":"Function returning empty object","opsSec":1508195.6169139587,"samples":754098},{"name":"Function returning empty array","opsSec":1489719.2968532078,"samples":744860}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,455,103|6727552|
|using Array.includes (first item)|13,962,563|6981282|
|Using raw comparison|14,239,006|7119504|
|Using raw comparison (first item)|14,313,418|7156710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:24:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13455103.703969996,"samples":6727552},{"name":"using Array.includes (first item)","opsSec":13962563.245892715,"samples":6981282},{"name":"Using raw comparison","opsSec":14239006.80376679,"samples":7119504},{"name":"Using raw comparison (first item)","opsSec":14313418.797509637,"samples":7156710}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,024,069|6012035|
|Using Object.getOwnPropertyNames()|12,126,387|6063194|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:32:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":12024069.446898194,"samples":6012035},{"name":"Using Object.getOwnPropertyNames()","opsSec":12126387.878786372,"samples":6063194}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|13,888,111|6944056|
|Length = 10_000 - Array.at|14,772,150|7386076|
|Length = 1_000_000 - Array.at|14,748,971|7374486|
|Length = 100 - Array[length - 1]|14,244,723|7122362|
|Length = 10_000 - Array[length - 1]|14,393,693|7196847|
|Length = 1_000_000 - Array[length - 1]|14,525,057|7262529|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:43:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":13888111.416781984,"samples":6944056},{"name":"Length = 10_000 - Array.at","opsSec":14772150.72972079,"samples":7386076},{"name":"Length = 1_000_000 - Array.at","opsSec":14748971.763969906,"samples":7374486},{"name":"Length = 100 - Array[length - 1]","opsSec":14244723.31633835,"samples":7122362},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14393693.798214668,"samples":7196847},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14525057.796732822,"samples":7262529}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|13,732,333|6866167|
|~ (small)|14,254,505|7127253|
|Math.floor (long)|14,080,506|7040254|
|~ (long)|14,375,485|7187743|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:55:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":13732333.258447759,"samples":6866167},{"name":"~ (small)","opsSec":14254505.48674916,"samples":7127253},{"name":"Math.floor (long)","opsSec":14080506.761007499,"samples":7040254},{"name":"~ (long)","opsSec":14375485.281155938,"samples":7187743}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,368,911|6184456|
|Object.create({})|1,908,167|954085|
|Cached Empty.prototype|14,764,168|7382085|
|Empty.prototype|1,989,332|994667|
|Empty class|1,197,082|598542|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:26:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":12368911.134203872,"samples":6184456},{"name":"Object.create({})","opsSec":1908167.2598702346,"samples":954085},{"name":"Cached Empty.prototype","opsSec":14764168.878005017,"samples":7382085},{"name":"Empty.prototype","opsSec":1989332.9854436407,"samples":994667},{"name":"Empty class","opsSec":1197082.9345993986,"samples":598542}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,392,633|7196317|
|Using optional chain (obj.field?.field2) (undefined)|14,844,247|7422124|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,120,124|7060063|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,739,167|7369584|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:36:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14392633.395494115,"samples":7196317},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14844247.732783793,"samples":7422124},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14120124.559823243,"samples":7060063},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14739167.11582973,"samples":7369584}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,868,515|7434258|
|Using parseInt(x, 10) - big number (10 len)|15,207,144|7603573|
|Using + - small number (2 len)|15,360,363|7680182|
|Using + - big number (10 len)|15,702,063|7851032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:46:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14868515.078141043,"samples":7434258},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15207144.813743273,"samples":7603573},{"name":"Using + - small number (2 len)","opsSec":15360363.539133059,"samples":7680182},{"name":"Using + - big number (10 len)","opsSec":15702063.246400448,"samples":7851032}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|982,873|491437|
|Using ? operator to avoid rejection|1,018,683|509343|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:53:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":982873.6520627631,"samples":491437},{"name":"Using ? operator to avoid rejection","opsSec":1018683.803717349,"samples":509343}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,506,804|7753403|
|Raw usage underscore usage|15,345,499|7672750|
|Manipulating private properties using #|13,830,695|6915348|
|Manipulating private properties using underscore(_)|13,762,394|6881198|
|Manipulating private properties using Symbol|15,076,016|7538009|
|Manipulating private properties using PrivateSymbol|11,870,881|5935441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:06:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":15506804.418143505,"samples":7753403},{"name":"Raw usage underscore usage","opsSec":15345499.232628087,"samples":7672750},{"name":"Manipulating private properties using #","opsSec":13830695.917040752,"samples":6915348},{"name":"Manipulating private properties using underscore(_)","opsSec":13762394.844027134,"samples":6881198},{"name":"Manipulating private properties using Symbol","opsSec":15076016.190966735,"samples":7538009},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11870881.810129397,"samples":5935441}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,830,357|2415179|
|Adding property in the object creation - small object|4,831,869|2415935|
|Adding property after the function creation - small class|249,495|124748|
|Adding property in the function creation - small class|251,972|125987|
|Adding property after the class creation - small class|238,926|119464|
|Adding property in the class creation - small class|240,104|120053|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:13:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4830357.381717456,"samples":2415179},{"name":"Adding property in the object creation - small object","opsSec":4831869.826068149,"samples":2415935},{"name":"Adding property after the function creation - small class","opsSec":249495.33384753534,"samples":124748},{"name":"Adding property in the function creation - small class","opsSec":251972.61616640934,"samples":125987},{"name":"Adding property after the class creation - small class","opsSec":238926.92817362424,"samples":119464},{"name":"Adding property in the class creation - small class","opsSec":240104.44508371095,"samples":120053}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|13,515,540|6757771|
|Getter|12,059,907|6029954|
|Method|14,149,256|7074633|
|DefineProperty (getter)|13,394,082|6697042|
|DefineProperty (getter & enumerable=false)|12,147,344|6073673|
|DefineProperty (getter & configurable=false)|14,128,255|7064128|
|DefineProperty (getter & enumerable=false & configurable=false)|12,126,725|6063364|
|DefineProperty (writable)|13,553,112|6776557|
|DefineProperty (writable & enumerable=false)|14,137,526|7068764|
|DefineProperty (writable & enumerable=false & configurable=false)|13,786,088|6893045|
|DefineProperties (getter)|12,097,765|6048883|
|DefineProperties (getter & enumerable=false)|12,168,507|6084254|
|DefineProperties (getter & enumerable=false & configurable=false)|12,282,085|6141043|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:31:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":13515540.29734167,"samples":6757771},{"name":"Getter","opsSec":12059907.975834372,"samples":6029954},{"name":"Method","opsSec":14149256.944197822,"samples":7074633},{"name":"DefineProperty (getter)","opsSec":13394082.499783704,"samples":6697042},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12147344.760976426,"samples":6073673},{"name":"DefineProperty (getter & configurable=false)","opsSec":14128255.971666792,"samples":7064128},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12126725.477840537,"samples":6063364},{"name":"DefineProperty (writable)","opsSec":13553112.129108397,"samples":6776557},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14137526.586252622,"samples":7068764},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13786088.732006809,"samples":6893045},{"name":"DefineProperties (getter)","opsSec":12097765.105108544,"samples":6048883},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12168507.318495361,"samples":6084254},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12282085.87675891,"samples":6141043}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|12,825,592|6412797|
|Setter|5,920,117|2960059|
|Method|13,172,357|6586180|
|DefineProperty (setter)|13,253,369|6626685|
|DefineProperty (setter & enumerable=false)|5,803,339|2901670|
|DefineProperty (setter & configurable=false)|5,944,492|2972247|
|DefineProperty (setter & enumerable=false & configurable=false)|5,943,339|2971670|
|DefineProperty (writable)|13,128,931|6564467|
|DefineProperty (writable & enumerable=false)|13,231,839|6615920|
|DefineProperty (writable & enumerable=false & configurable=false)|13,431,266|6715634|
|DefineProperties (setter)|13,418,920|6709461|
|DefineProperties (setter & enumerable=false)|5,975,479|2987740|
|DefineProperties (setter & enumerable=false & configurable=false)|5,923,135|2961568|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:53:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":12825592.742881892,"samples":6412797},{"name":"Setter","opsSec":5920117.479045767,"samples":2960059},{"name":"Method","opsSec":13172357.866189823,"samples":6586180},{"name":"DefineProperty (setter)","opsSec":13253369.363872578,"samples":6626685},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5803339.2572366735,"samples":2901670},{"name":"DefineProperty (setter & configurable=false)","opsSec":5944492.906209042,"samples":2972247},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5943339.239190395,"samples":2971670},{"name":"DefineProperty (writable)","opsSec":13128931.032850266,"samples":6564467},{"name":"DefineProperty (writable & enumerable=false)","opsSec":13231839.417871267,"samples":6615920},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13431266.03887872,"samples":6715634},{"name":"DefineProperties (setter)","opsSec":13418920.900072047,"samples":6709461},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5975479.318885299,"samples":2987740},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5923135.478721149,"samples":2961568}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,744,726|1372364|
|Using replaceAll()|2,506,247|1253124|
|Using replaceAll(//g)|2,473,902|1236952|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:03:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2744726.1939732027,"samples":1372364},{"name":"Using replaceAll()","opsSec":2506247.203013056,"samples":1253124},{"name":"Using replaceAll(//g)","opsSec":2473902.906534842,"samples":1236952}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,676,198|4838100|
|{ ...object, __proto__: null }|2,172,126|1086064|
|{ ...object, newProp: true }|9,153,897|4576949|
|structuredClone|279,127|139564|
|JSON.parse + JSON.stringify|243,399|121700|
|loop + object.keys starting with {}|1,269,083|634542|
|loop + object.keys starting with { __proto__: null }|732,581|366291|
|loop + object.keys starting with { randomProp: true }|504,223|252112|
|object.keys + reduce(FN, {})|1,316,415|658208|
|object.keys + reduce(FN, { __proto__: null })|736,715|368358|
|object.keys + reduce(FN, { newProp: true })|515,888|257945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:12:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":9676198.064788667,"samples":4838100},{"name":"{ ...object, __proto__: null }","opsSec":2172126.7358222543,"samples":1086064},{"name":"{ ...object, newProp: true }","opsSec":9153897.212723013,"samples":4576949},{"name":"structuredClone","opsSec":279127.7124987264,"samples":139564},{"name":"JSON.parse + JSON.stringify","opsSec":243399.6202964142,"samples":121700},{"name":"loop + object.keys starting with {}","opsSec":1269083.1903292304,"samples":634542},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":732581.1487388073,"samples":366291},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":504223.7388109546,"samples":252112},{"name":"object.keys + reduce(FN, {})","opsSec":1316415.9289117916,"samples":658208},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":736715.7450951939,"samples":368358},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":515888.3212995511,"samples":257945}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|308,638|154320|
|Sort using first char|1,140,080|570041|
|Sort using localeCompare|978,477|489239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:19:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Sort using default","opsSec":308638.1018756529,"samples":154320},{"name":"Sort using first char","opsSec":1140080.3058397726,"samples":570041},{"name":"Sort using localeCompare","opsSec":978477.4207414698,"samples":489239}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,822|912|
|{...smallObject} - Total keys: 2|10,917,183|5459256|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,269|1135|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,661|3331|
|{ ...bigObject, ...anotherBigObject }|1,143|572|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,228,365|3114183|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,914,048|4957025|
|{ ...smallObject, ...anotherSmallObject }|8,762,736|4381369|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:28:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1822.8294882724208,"samples":912},{"name":"{...smallObject} - Total keys: 2","opsSec":10917183.116788505,"samples":5459256},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2269.827261605723,"samples":1135},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6661.170884060335,"samples":3331},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1143.8444440187172,"samples":572},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6228365.937653872,"samples":3114183},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9914048.195603376,"samples":4957025},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8762736.212472424,"samples":4381369}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,149|1075|
|streams.web.Readable reading 1e3 * "some data"|1,832|917|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2149.6005268364897,"samples":1075},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1832.9003514341623,"samples":917}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,385|3193|
|streams.web.WritableStream writing 1e3 * "some data"|2,077|1045|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:40:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6385.518353121927,"samples":3193},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2077.4194428477135,"samples":1045}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,775,566|7387784|
|Using backtick (`)|14,946,555|7473278|
|Using array.join|5,674,538|2837270|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:48:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14775566.906571718,"samples":7387784},{"name":"Using backtick (`)","opsSec":14946555.970221393,"samples":7473278},{"name":"Using array.join","opsSec":5674538.445194436,"samples":2837270}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,952,272|5976137|
|(short string) (true) String#slice and strict comparison|10,367,051|5183625|
|(long string) (true) String#endsWith|11,337,469|5668735|
|(long string) (true) String#slice and strict comparison|10,248,267|5124134|
|(short string) (false) String#endsWith|12,305,529|6152765|
|(short string) (false) String#slice and strict comparison|10,460,917|5230459|
|(long string) (false) String#endsWith|12,057,705|6028853|
|(long string) (false) String#slice and strict comparison|10,163,975|5081988|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:01:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11952272.517878834,"samples":5976137},{"name":"(short string) (true) String#slice and strict comparison","opsSec":10367051.927094795,"samples":5183625},{"name":"(long string) (true) String#endsWith","opsSec":11337469.455802519,"samples":5668735},{"name":"(long string) (true) String#slice and strict comparison","opsSec":10248267.385224247,"samples":5124134},{"name":"(short string) (false) String#endsWith","opsSec":12305529.04047641,"samples":6152765},{"name":"(short string) (false) String#slice and strict comparison","opsSec":10460917.309586683,"samples":5230459},{"name":"(long string) (false) String#endsWith","opsSec":12057705.059478858,"samples":6028853},{"name":"(long string) (false) String#slice and strict comparison","opsSec":10163975.206986329,"samples":5081988}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,599,019|4299510|
|Using indexof|8,412,892|4206447|
|Using RegExp.test|7,767,118|3883584|
|Using RegExp.text with cached regex pattern|7,846,557|3923280|
|Using new RegExp.test|3,481,354|1740678|
|Using new RegExp.test with cached regex pattern|3,770,895|1885448|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:13:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8599019.845166568,"samples":4299510},{"name":"Using indexof","opsSec":8412892.182807572,"samples":4206447},{"name":"Using RegExp.test","opsSec":7767118.07299633,"samples":3883584},{"name":"Using RegExp.text with cached regex pattern","opsSec":7846557.190953212,"samples":3923280},{"name":"Using new RegExp.test","opsSec":3481354.5238946197,"samples":1740678},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3770895.939644491,"samples":1885448}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,843,311|6921656|
|(short string) (true) String#slice and strict comparison|12,854,782|6427392|
|(long string) (true) String#startsWith|14,134,622|7067312|
|(long string) (true) String#slice and strict comparison|12,717,235|6358618|
|(short string) (false) String#startsWith|14,695,017|7347509|
|(short string) (false) String#slice and strict comparison|12,948,625|6474313|
|(long string) (false) String#startsWith|14,636,824|7318413|
|(long string) (false) String#slice and strict comparison|12,329,829|6164915|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:27:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13843311.833960276,"samples":6921656},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12854782.097686244,"samples":6427392},{"name":"(long string) (true) String#startsWith","opsSec":14134622.50163551,"samples":7067312},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12717235.262314979,"samples":6358618},{"name":"(short string) (false) String#startsWith","opsSec":14695017.059834218,"samples":7347509},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12948625.301078308,"samples":6474313},{"name":"(long string) (false) String#startsWith","opsSec":14636824.448493954,"samples":7318413},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12329829.555799257,"samples":6164915}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|13,204,204|6602103|
|Using this|13,379,340|6689671|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:37:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":13204204.309897112,"samples":6602103},{"name":"Using this","opsSec":13379340.501479529,"samples":6689671}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,176,169|3088085|
|Date.now()|8,033,453|4016727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:44:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6176169.34532275,"samples":3088085},{"name":"Date.now()","opsSec":8033453.469812641,"samples":4016727}]}-->
