## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,208,648|52840120|
|Using dot notation|73,517,239|36759752|
|Using define property (writable)|4,334,096|2167049|
|Using define property initialized (writable)|6,033,464|3016991|
|Using define property (getter)|2,203,965|1108911|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:44:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":105208648.54541409,"samples":52840120},{"name":"Using dot notation","opsSec":73517239.22792834,"samples":36759752},{"name":"Using define property (writable)","opsSec":4334096.1190022845,"samples":2167049},{"name":"Using define property initialized (writable)","opsSec":6033464.956187115,"samples":3016991},{"name":"Using define property (getter)","opsSec":2203965.527673722,"samples":1108911}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.019ms
new Array(length)|100|0.013ms
array.push|1,000|0.029ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.252ms
new Array(length)|10,000|0.147ms
array.push|1,000,000|24.2ms
new Array(length)|1,000,000|15.7ms
array.push|100,000,000|1,755.016ms
new Array(length)|100,000,000|4,450.188ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.212ms
array.push|1,000,000|19.396ms
new Array(length)|1,000,000|7.17ms
array.push|100,000,000|1,948.875ms
new Array(length)|100,000,000|4,430.77ms

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
|Object.create(null)|11,764,643|5882322|
|Object.create({})|1,940,393|970197|
|Cached Empty.prototype|14,098,869|7049435|
|Empty.prototype|1,920,560|960281|
|Empty class|1,177,393|588697|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11764643.764687058,"samples":5882322},{"name":"Object.create({})","opsSec":1940393.3441500042,"samples":970197},{"name":"Cached Empty.prototype","opsSec":14098869.492363848,"samples":7049435},{"name":"Empty.prototype","opsSec":1920560.790040731,"samples":960281},{"name":"Empty class","opsSec":1177393.3406633353,"samples":588697}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|13,557,125|6778563|
|Using optional chain (obj.field?.field2) (undefined)|13,633,992|6816997|
|Using and operator (obj.field && obj.field.field2) (Valid)|13,707,496|6853749|
|Using and operator (obj.field && obj.field.field2) (undefined)|13,463,108|6731555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:15:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":13557125.756004008,"samples":6778563},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":13633992.227709569,"samples":6816997},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":13707496.382592373,"samples":6853749},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":13463108.384395687,"samples":6731555}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|13,988,529|6994265|
|Using parseInt(x, 10) - big number (10 len)|14,031,504|7015753|
|Using + - small number (2 len)|13,949,228|6974615|
|Using + - big number (10 len)|13,903,855|6951928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:26:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":13988529.944022553,"samples":6994265},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14031504.624943526,"samples":7015753},{"name":"Using + - small number (2 len)","opsSec":13949228.4935091,"samples":6974615},{"name":"Using + - big number (10 len)","opsSec":13903855.749770068,"samples":6951928}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|994,382|497192|
|Using ? operator to avoid rejection|1,010,394|505198|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:32:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":994382.7948082243,"samples":497192},{"name":"Using ? operator to avoid rejection","opsSec":1010394.7430692079,"samples":505198}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,875,220|7437611|
|Raw usage underscore usage|13,957,858|6978930|
|Manipulating private properties using #|14,981,086|7490544|
|Manipulating private properties using underscore(_)|15,062,640|7531321|
|Manipulating private properties using Symbol|14,776,410|7388206|
|Manipulating private properties using PrivateSymbol|11,729,795|5864898|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:42:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":14875220.363549221,"samples":7437611},{"name":"Raw usage underscore usage","opsSec":13957858.324910903,"samples":6978930},{"name":"Manipulating private properties using #","opsSec":14981086.142446607,"samples":7490544},{"name":"Manipulating private properties using underscore(_)","opsSec":15062640.76488956,"samples":7531321},{"name":"Manipulating private properties using Symbol","opsSec":14776410.463195596,"samples":7388206},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11729795.014913151,"samples":5864898}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,724,833|2362417|
|Adding property in the object creation - small object|4,728,419|2364210|
|Adding property after the function creation - small class|244,626|122314|
|Adding property in the function creation - small class|250,151|125076|
|Adding property after the class creation - small class|243,986|122626|
|Adding property in the class creation - small class|240,995|120498|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:52:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4724833.896064121,"samples":2362417},{"name":"Adding property in the object creation - small object","opsSec":4728419.148882408,"samples":2364210},{"name":"Adding property after the function creation - small class","opsSec":244626.90407144942,"samples":122314},{"name":"Adding property in the function creation - small class","opsSec":250151.50570057207,"samples":125076},{"name":"Adding property after the class creation - small class","opsSec":243986.34911619322,"samples":122626},{"name":"Adding property in the class creation - small class","opsSec":240995.94794491108,"samples":120498}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,356,604|7178303|
|Getter|12,052,720|6026361|
|Method|14,504,681|7252341|
|DefineProperty (getter)|13,880,939|6940470|
|DefineProperty (getter & enumerable=false)|12,049,790|6024896|
|DefineProperty (getter & configurable=false)|14,218,440|7109221|
|DefineProperty (getter & enumerable=false & configurable=false)|12,258,058|6129030|
|DefineProperty (writable)|14,570,567|7285284|
|DefineProperty (writable & enumerable=false)|14,388,731|7194366|
|DefineProperty (writable & enumerable=false & configurable=false)|13,543,832|6771917|
|DefineProperties (getter)|12,697,014|6348508|
|DefineProperties (getter & enumerable=false)|12,259,897|6129949|
|DefineProperties (getter & enumerable=false & configurable=false)|12,251,535|6125768|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:11:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14356604.478256237,"samples":7178303},{"name":"Getter","opsSec":12052720.336631423,"samples":6026361},{"name":"Method","opsSec":14504681.97111769,"samples":7252341},{"name":"DefineProperty (getter)","opsSec":13880939.750166835,"samples":6940470},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12049790.361226378,"samples":6024896},{"name":"DefineProperty (getter & configurable=false)","opsSec":14218440.407472478,"samples":7109221},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12258058.260171218,"samples":6129030},{"name":"DefineProperty (writable)","opsSec":14570567.62099867,"samples":7285284},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14388731.079150632,"samples":7194366},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13543832.590941906,"samples":6771917},{"name":"DefineProperties (getter)","opsSec":12697014.527447354,"samples":6348508},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12259897.435901625,"samples":6129949},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12251535.582967175,"samples":6125768}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,112,647|7056324|
|Setter|5,999,872|2999937|
|Method|14,093,394|7046698|
|DefineProperty (setter)|14,085,835|7042918|
|DefineProperty (setter & enumerable=false)|6,032,009|3016005|
|DefineProperty (setter & configurable=false)|5,993,945|2996973|
|DefineProperty (setter & enumerable=false & configurable=false)|6,021,374|3010688|
|DefineProperty (writable)|14,277,496|7138749|
|DefineProperty (writable & enumerable=false)|14,235,745|7117873|
|DefineProperty (writable & enumerable=false & configurable=false)|13,619,805|6809929|
|DefineProperties (setter)|12,864,619|6432310|
|DefineProperties (setter & enumerable=false)|6,018,242|3009122|
|DefineProperties (setter & enumerable=false & configurable=false)|6,037,704|3018853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:32:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14112647.520234512,"samples":7056324},{"name":"Setter","opsSec":5999872.692040232,"samples":2999937},{"name":"Method","opsSec":14093394.985210001,"samples":7046698},{"name":"DefineProperty (setter)","opsSec":14085835.126455938,"samples":7042918},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6032009.034887707,"samples":3016005},{"name":"DefineProperty (setter & configurable=false)","opsSec":5993945.38867179,"samples":2996973},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6021374.036811817,"samples":3010688},{"name":"DefineProperty (writable)","opsSec":14277496.601188393,"samples":7138749},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14235745.516070044,"samples":7117873},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":13619805.290458672,"samples":6809929},{"name":"DefineProperties (setter)","opsSec":12864619.433748007,"samples":6432310},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6018242.098044286,"samples":3009122},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6037704.671596982,"samples":3018853}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,559,057|1279529|
|Using replaceAll()|2,359,864|1179933|
|Using replaceAll(//g)|2,384,712|1192357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:43:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2559057.0326746525,"samples":1279529},{"name":"Using replaceAll()","opsSec":2359864.5982379583,"samples":1179933},{"name":"Using replaceAll(//g)","opsSec":2384712.316394014,"samples":1192357}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,341,929|4670965|
|{ ...object, __proto__: null }|2,102,783|1051392|
|{ ...object, newProp: true }|8,275,763|4137883|
|structuredClone|272,379|136190|
|JSON.parse + JSON.stringify|241,422|120712|
|loop + object.keys starting with {}|1,242,935|621468|
|loop + object.keys starting with { __proto__: null }|704,017|352010|
|loop + object.keys starting with { randomProp: true }|491,723|245862|
|object.keys + reduce(FN, {})|1,265,957|632979|
|object.keys + reduce(FN, { __proto__: null })|701,071|350536|
|object.keys + reduce(FN, { newProp: true })|502,217|251109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:52:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9341929.402103877,"samples":4670965},{"name":"{ ...object, __proto__: null }","opsSec":2102783.701409662,"samples":1051392},{"name":"{ ...object, newProp: true }","opsSec":8275763.566875312,"samples":4137883},{"name":"structuredClone","opsSec":272379.25694954774,"samples":136190},{"name":"JSON.parse + JSON.stringify","opsSec":241422.56595034403,"samples":120712},{"name":"loop + object.keys starting with {}","opsSec":1242935.2293780972,"samples":621468},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":704017.8752745113,"samples":352010},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":491723.3666599784,"samples":245862},{"name":"object.keys + reduce(FN, {})","opsSec":1265957.8227656975,"samples":632979},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":701071.05776173,"samples":350536},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":502217.55503485445,"samples":251109}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|308,716|154359|
|Sort using first char|1,101,951|550976|
|Sort using localeCompare|1,034,183|517092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:59:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":308716.47308837046,"samples":154359},{"name":"Sort using first char","opsSec":1101951.0082435524,"samples":550976},{"name":"Sort using localeCompare","opsSec":1034183.4456779576,"samples":517092}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,788|895|
|{...smallObject} - Total keys: 2|11,021,605|5510803|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,252|1127|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,709|3355|
|{ ...bigObject, ...anotherBigObject }|1,103|552|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,249,054|3124528|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,749,799|4874900|
|{ ...smallObject, ...anotherSmallObject }|8,070,069|4035035|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:07:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1788.7020784203778,"samples":895},{"name":"{...smallObject} - Total keys: 2","opsSec":11021605.404776009,"samples":5510803},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2252.5368556752414,"samples":1127},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6709.118193757009,"samples":3355},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1103.471975418113,"samples":552},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6249054.750153617,"samples":3124528},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9749799.86352347,"samples":4874900},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8070069.4512270475,"samples":4035035}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,049|1025|
|streams.web.Readable reading 1e3 * "some data"|1,654|828|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:14:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2049.08054887062,"samples":1025},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1654.5617920170378,"samples":828}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,277|3139|
|streams.web.WritableStream writing 1e3 * "some data"|2,043|1022|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:20:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6277.484241895007,"samples":3139},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2043.3377746605581,"samples":1022}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,088,262|7044134|
|Using backtick (`)|14,698,453|7349227|
|Using array.join|5,632,149|2816075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:27:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":14088262.477443112,"samples":7044134},{"name":"Using backtick (`)","opsSec":14698453.441534512,"samples":7349227},{"name":"Using array.join","opsSec":5632149.6395511525,"samples":2816075}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,429,106|7214554|
|(short string) (true) String#slice and strict comparison|12,691,407|6345704|
|(long string) (true) String#endsWith|13,770,792|6885397|
|(long string) (true) String#slice and strict comparison|12,270,283|6135142|
|(short string) (false) String#endsWith|15,012,111|7506056|
|(short string) (false) String#slice and strict comparison|12,265,163|6132582|
|(long string) (false) String#endsWith|14,595,885|7297943|
|(long string) (false) String#slice and strict comparison|11,836,125|5918063|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:44:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14429106.903428447,"samples":7214554},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12691407.010122,"samples":6345704},{"name":"(long string) (true) String#endsWith","opsSec":13770792.237256037,"samples":6885397},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12270283.140902583,"samples":6135142},{"name":"(short string) (false) String#endsWith","opsSec":15012111.669288656,"samples":7506056},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12265163.116787303,"samples":6132582},{"name":"(long string) (false) String#endsWith","opsSec":14595885.620743882,"samples":7297943},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11836125.28995901,"samples":5918063}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,228,348|4114175|
|Using indexof|8,157,795|4078898|
|Using RegExp.test|7,543,442|3771722|
|Using RegExp.text with cached regex pattern|7,575,204|3787603|
|Using new RegExp.test|3,370,275|1685138|
|Using new RegExp.test with cached regex pattern|3,689,512|1844758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:56:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8228348.699903432,"samples":4114175},{"name":"Using indexof","opsSec":8157795.135248552,"samples":4078898},{"name":"Using RegExp.test","opsSec":7543442.77790258,"samples":3771722},{"name":"Using RegExp.text with cached regex pattern","opsSec":7575204.909138486,"samples":3787603},{"name":"Using new RegExp.test","opsSec":3370275.1978863454,"samples":1685138},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3689512.841768502,"samples":1844758}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,979,930|6989966|
|(short string) (true) String#slice and strict comparison|12,309,121|6154561|
|(long string) (true) String#startsWith|12,987,376|6493689|
|(long string) (true) String#slice and strict comparison|11,938,543|5969272|
|(short string) (false) String#startsWith|14,124,171|7062086|
|(short string) (false) String#slice and strict comparison|12,148,129|6074065|
|(long string) (false) String#startsWith|13,940,104|6970053|
|(long string) (false) String#slice and strict comparison|11,664,499|5832250|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:10:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13979930.685753837,"samples":6989966},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12309121.876891812,"samples":6154561},{"name":"(long string) (true) String#startsWith","opsSec":12987376.67548595,"samples":6493689},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11938543.737115331,"samples":5969272},{"name":"(short string) (false) String#startsWith","opsSec":14124171.519707507,"samples":7062086},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12148129.441438295,"samples":6074065},{"name":"(long string) (false) String#startsWith","opsSec":13940104.633835,"samples":6970053},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11664499.859857911,"samples":5832250}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|13,806,409|6903205|
|Using this|13,666,195|6833098|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:24:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":13806409.22681714,"samples":6903205},{"name":"Using this","opsSec":13666195.179973222,"samples":6833098}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,079,463|3039732|
|Date.now()|8,111,223|4055612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:31:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6079463.452858101,"samples":3039732},{"name":"Date.now()","opsSec":8111223.448442476,"samples":4055612}]}-->
