## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,565,765|8282883|
|Using dot notation|16,581,643|8290822|
|Using define property (writable)|3,478,612|1739307|
|Using define property initialized (writable)|4,238,077|2119039|
|Using define property (getter)|2,115,704|1057853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:40:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16565765.702395393,"samples":8282883},{"name":"Using dot notation","opsSec":16581643.567478336,"samples":8290822},{"name":"Using define property (writable)","opsSec":3478612.671154577,"samples":1739307},{"name":"Using define property initialized (writable)","opsSec":4238077.804704039,"samples":2119039},{"name":"Using define property (getter)","opsSec":2115704.616324556,"samples":1057853}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.019ms
new Array(length)|10|0.002ms
array.push|100|0.089ms
new Array(length)|100|0.011ms
array.push|1,000|0.047ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.295ms
new Array(length)|10,000|0.148ms
array.push|1,000,000|24.636ms
new Array(length)|1,000,000|18.066ms
array.push|100,000,000|1,960.683ms
new Array(length)|100,000,000|4,372.527ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.011ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.309ms
new Array(length)|10,000|0.2ms
array.push|1,000,000|22.039ms
new Array(length)|1,000,000|8.493ms
array.push|100,000,000|2,066.366ms
new Array(length)|100,000,000|4,943.758ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|227|114|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:51:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":227.93800086384525,"samples":114},{"name":"Array.from","opsSec":22.503375942402368,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,354|2678|
|new Blob (1024)|747|378|
|text (128)|6,359|3180|
|text (1024)|806|404|
|arrayBuffer (128)|6,428|3215|
|arrayBuffer (1024)|799|400|
|slice (0, 64)|328,927|164464|
|slice (0, 512)|35,851|17926|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:54:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5354.895991682849,"samples":2678},{"name":"new Blob (1024)","opsSec":747.8640838581191,"samples":378},{"name":"text (128)","opsSec":6359.618282907082,"samples":3180},{"name":"text (1024)","opsSec":806.7195054215019,"samples":404},{"name":"arrayBuffer (128)","opsSec":6428.1465211694895,"samples":3215},{"name":"arrayBuffer (1024)","opsSec":799.6518667596825,"samples":400},{"name":"slice (0, 64)","opsSec":328927.5743464039,"samples":164464},{"name":"slice (0, 512)","opsSec":35851.41590822439,"samples":17926}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|316,701|158351|
|[True conditional] Using constructor name|313,201|156601|
|[True conditional] Check if property is valid then instanceof |315,407|157704|
|[False conditional] Using instanceof only|15,938,536|7969269|
|[False conditional] Using constructor name|16,392,370|8196186|
|[False conditional] Check if property is valid then instanceof |16,387,944|8193973|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:00:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":316701.08659614157,"samples":158351},{"name":"[True conditional] Using constructor name","opsSec":313201.2645788712,"samples":156601},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":315407.1913200594,"samples":157704},{"name":"[False conditional] Using instanceof only","opsSec":15938536.20956365,"samples":7969269},{"name":"[False conditional] Using constructor name","opsSec":16392370.261677993,"samples":8196186},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16387944.687222153,"samples":8193973}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,559|3280|
|crypto.verify('RSA-SHA256')|6,847|3424|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:04:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6559.59417102274,"samples":3280},{"name":"crypto.verify('RSA-SHA256')","opsSec":6847.379956102169,"samples":3424}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,369,277|684639|
|fromUnixToISOString(new Date())|1,901,257|950629|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:08:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1369277.7726567136,"samples":684639},{"name":"fromUnixToISOString(new Date())","opsSec":1901257.0420141327,"samples":950629}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,654|8828|
|Intl.DateTimeFormat().format(new Date())|17,366|8684|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,360|11181|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|19,195|9599|
|Reusing Intl.DateTimeFormat()|769,939|390970|
|Date.toLocaleDateString()|802,392|401197|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,848|11925|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17654.84586776975,"samples":8828},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17366.69881790128,"samples":8684},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22360.9808332326,"samples":11181},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":19195.86396104558,"samples":9599},{"name":"Reusing Intl.DateTimeFormat()","opsSec":769939.0767637903,"samples":390970},{"name":"Date.toLocaleDateString()","opsSec":802392.1286443996,"samples":401197},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23848.551104965703,"samples":11925}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,049,843|524922|
|Using brackets {}|1,047,629|523815|
|Using '' + |1,042,325|521163|
|Using date.toString()|1,170,187|585094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:17:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1049843.3719361366,"samples":524922},{"name":"Using brackets {}","opsSec":1047629.3940455688,"samples":523815},{"name":"Using '' + ","opsSec":1042325.6331490619,"samples":521163},{"name":"Using date.toString()","opsSec":1170187.368427495,"samples":585094}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,285,994|1642998|
|Using delete property (proto: null)|9,144,182|4572092|
|Using delete property (cached proto: null)|3,266,870|1633436|
|Using undefined assignment|16,649,012|8324507|
|Using undefined assignment (proto: null)|9,577,821|4788911|
|Using undefined property (cached proto: null)|16,641,441|8320721|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:23:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3285994.1010803194,"samples":1642998},{"name":"Using delete property (proto: null)","opsSec":9144182.1926019,"samples":4572092},{"name":"Using delete property (cached proto: null)","opsSec":3266870.6679311385,"samples":1633436},{"name":"Using undefined assignment","opsSec":16649012.337055301,"samples":8324507},{"name":"Using undefined assignment (proto: null)","opsSec":9577821.678566303,"samples":4788911},{"name":"Using undefined property (cached proto: null)","opsSec":16641441.372510204,"samples":8320721}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|309,336|154669|
|NodeError|308,187|154094|
|NodeError Range|304,046|152024|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:28:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":309336.066631549,"samples":154669},{"name":"NodeError","opsSec":308187.9981857312,"samples":154094},{"name":"NodeError Range","opsSec":304046.31303910294,"samples":152024}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,598,575|799288|
|Function returning explicitly undefined|1,593,698|796850|
|Function returning implicitly undefined|1,606,484|803243|
|Function returning string|1,584,972|792487|
|Function returning integer|1,643,831|821916|
|Function returning float|1,611,350|805676|
|Function returning functions|1,587,171|793586|
|Function returning arrow functions|1,609,256|804629|
|Function returning empty object|1,636,081|818041|
|Function returning empty array|1,601,688|800845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:34:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1598575.4431585232,"samples":799288},{"name":"Function returning explicitly undefined","opsSec":1593698.8472441707,"samples":796850},{"name":"Function returning implicitly undefined","opsSec":1606484.836665714,"samples":803243},{"name":"Function returning string","opsSec":1584972.510560284,"samples":792487},{"name":"Function returning integer","opsSec":1643831.9020888756,"samples":821916},{"name":"Function returning float","opsSec":1611350.5455430292,"samples":805676},{"name":"Function returning functions","opsSec":1587171.5646586213,"samples":793586},{"name":"Function returning arrow functions","opsSec":1609256.9721659275,"samples":804629},{"name":"Function returning empty object","opsSec":1636081.7181605892,"samples":818041},{"name":"Function returning empty array","opsSec":1601688.3282139834,"samples":800845}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,610,548|8305275|
|using Array.includes (first item)|16,592,212|8296107|
|Using raw comparison|16,650,043|8325022|
|Using raw comparison (first item)|16,639,990|8319996|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:39:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16610548.359770307,"samples":8305275},{"name":"using Array.includes (first item)","opsSec":16592212.971050898,"samples":8296107},{"name":"Using raw comparison","opsSec":16650043.379675522,"samples":8325022},{"name":"Using raw comparison (first item)","opsSec":16639990.337925445,"samples":8319996}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|14,119,610|7059806|
|Using Object.getOwnPropertyNames()|14,245,860|7122931|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:44:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":14119610.247524409,"samples":7059806},{"name":"Using Object.getOwnPropertyNames()","opsSec":14245860.05905893,"samples":7122931}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|16,365,865|8182934|
|Length = 10_000 - Array.at|16,389,806|8194904|
|Length = 1_000_000 - Array.at|16,436,651|8218326|
|Length = 100 - Array[length - 1]|16,314,390|8157196|
|Length = 10_000 - Array[length - 1]|16,440,640|8220321|
|Length = 1_000_000 - Array[length - 1]|16,432,322|8216162|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":16365865.7793161,"samples":8182934},{"name":"Length = 10_000 - Array.at","opsSec":16389806.986335188,"samples":8194904},{"name":"Length = 1_000_000 - Array.at","opsSec":16436651.091511248,"samples":8218326},{"name":"Length = 100 - Array[length - 1]","opsSec":16314390.581795752,"samples":8157196},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16440640.722098885,"samples":8220321},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16432322.566769183,"samples":8216162}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,985,759|5992880|
|Object.create({})|1,727,846|887116|
|Cached Empty.prototype|16,465,438|8232720|
|Empty.prototype|1,860,953|930477|
|Empty class|1,239,762|619882|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:57:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":11985759.252417807,"samples":5992880},{"name":"Object.create({})","opsSec":1727846.540133678,"samples":887116},{"name":"Cached Empty.prototype","opsSec":16465438.280343432,"samples":8232720},{"name":"Empty.prototype","opsSec":1860953.6447150302,"samples":930477},{"name":"Empty class","opsSec":1239762.7314362484,"samples":619882}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,526,314|8263158|
|Using optional chain (obj.field?.field2) (undefined)|16,595,668|8297835|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,638,390|8319196|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,657,852|8328927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:04:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16526314.119764416,"samples":8263158},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16595668.488380043,"samples":8297835},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16638390.602225086,"samples":8319196},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16657852.897028428,"samples":8328927}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,719,860|8359931|
|Using parseInt(x, 10) - big number (10 len)|16,745,319|8372660|
|Using + - small number (2 len)|16,699,250|8349626|
|Using + - big number (10 len)|16,739,594|8369798|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:10:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16719860.981867554,"samples":8359931},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16745319.996880941,"samples":8372660},{"name":"Using + - small number (2 len)","opsSec":16699250.703024058,"samples":8349626},{"name":"Using + - big number (10 len)","opsSec":16739594.174945515,"samples":8369798}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,093,030|546531|
|Using ? operator to avoid rejection|1,083,111|541556|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:16:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1093030.5521574037,"samples":546531},{"name":"Using ? operator to avoid rejection","opsSec":1083111.776809186,"samples":541556}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,447,446|8223724|
|Raw usage underscore usage|16,411,062|8205532|
|Manipulating private properties using #|16,448,127|8224064|
|Manipulating private properties using underscore(_)|16,491,938|8245970|
|Manipulating private properties using Symbol|16,399,931|8199966|
|Manipulating private properties using PrivateSymbol|11,574,219|5787110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:21:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":16447446.071754904,"samples":8223724},{"name":"Raw usage underscore usage","opsSec":16411062.287459176,"samples":8205532},{"name":"Manipulating private properties using #","opsSec":16448127.664126294,"samples":8224064},{"name":"Manipulating private properties using underscore(_)","opsSec":16491938.843750771,"samples":8245970},{"name":"Manipulating private properties using Symbol","opsSec":16399931.732497703,"samples":8199966},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11574219.642492672,"samples":5787110}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,333,764|1666883|
|Adding property in the object creation - small object|3,341,353|1670677|
|Adding property after the function creation - small class|267,544|133773|
|Adding property in the function creation - small class|254,605|127303|
|Adding property after the class creation - small class|247,201|123601|
|Adding property in the class creation - small class|255,123|127562|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:27:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3333764.5267054816,"samples":1666883},{"name":"Adding property in the object creation - small object","opsSec":3341353.6598157105,"samples":1670677},{"name":"Adding property after the function creation - small class","opsSec":267544.5691983736,"samples":133773},{"name":"Adding property in the function creation - small class","opsSec":254605.72203079707,"samples":127303},{"name":"Adding property after the class creation - small class","opsSec":247201.2049313296,"samples":123601},{"name":"Adding property in the class creation - small class","opsSec":255123.65810342028,"samples":127562}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,673,393|8336697|
|Getter|13,861,099|6930704|
|Method|16,374,485|8187243|
|DefineProperty (getter)|16,411,559|8205780|
|DefineProperty (getter & enumerable=false)|13,866,980|6933491|
|DefineProperty (getter & configurable=false)|16,601,989|8300995|
|DefineProperty (getter & enumerable=false & configurable=false)|13,202,237|6601119|
|DefineProperty (writable)|16,555,865|8277933|
|DefineProperty (writable & enumerable=false)|16,445,742|8222872|
|DefineProperty (writable & enumerable=false & configurable=false)|16,645,626|8322814|
|DefineProperties (getter)|13,965,957|6982979|
|DefineProperties (getter & enumerable=false)|14,140,997|7070499|
|DefineProperties (getter & enumerable=false & configurable=false)|13,945,186|6972594|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:38:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16673393.131657049,"samples":8336697},{"name":"Getter","opsSec":13861099.783619588,"samples":6930704},{"name":"Method","opsSec":16374485.06902242,"samples":8187243},{"name":"DefineProperty (getter)","opsSec":16411559.441475417,"samples":8205780},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13866980.864519697,"samples":6933491},{"name":"DefineProperty (getter & configurable=false)","opsSec":16601989.4948009,"samples":8300995},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13202237.553548874,"samples":6601119},{"name":"DefineProperty (writable)","opsSec":16555865.764584975,"samples":8277933},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16445742.27599828,"samples":8222872},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16645626.288405774,"samples":8322814},{"name":"DefineProperties (getter)","opsSec":13965957.375334878,"samples":6982979},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14140997.137744898,"samples":7070499},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":13945186.970275655,"samples":6972594}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|16,344,656|8172329|
|Setter|6,665,790|3332896|
|Method|16,106,981|8053491|
|DefineProperty (setter)|16,116,439|8058220|
|DefineProperty (setter & enumerable=false)|6,668,063|3334032|
|DefineProperty (setter & configurable=false)|6,680,722|3340362|
|DefineProperty (setter & enumerable=false & configurable=false)|6,762,016|3381009|
|DefineProperty (writable)|16,273,574|8136788|
|DefineProperty (writable & enumerable=false)|16,312,717|8156359|
|DefineProperty (writable & enumerable=false & configurable=false)|16,125,476|8062739|
|DefineProperties (setter)|16,262,158|8131080|
|DefineProperties (setter & enumerable=false)|6,310,602|3155302|
|DefineProperties (setter & enumerable=false & configurable=false)|6,582,782|3291392|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:49:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":16344656.153127318,"samples":8172329},{"name":"Setter","opsSec":6665790.7495346945,"samples":3332896},{"name":"Method","opsSec":16106981.809519896,"samples":8053491},{"name":"DefineProperty (setter)","opsSec":16116439.805745704,"samples":8058220},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6668063.968663742,"samples":3334032},{"name":"DefineProperty (setter & configurable=false)","opsSec":6680722.192486127,"samples":3340362},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6762016.78666296,"samples":3381009},{"name":"DefineProperty (writable)","opsSec":16273574.17010127,"samples":8136788},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16312717.583758565,"samples":8156359},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16125476.307679385,"samples":8062739},{"name":"DefineProperties (setter)","opsSec":16262158.48843695,"samples":8131080},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6310602.370238898,"samples":3155302},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6582782.38134969,"samples":3291392}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,837,472|1418737|
|Using replaceAll()|2,622,071|1311036|
|Using replaceAll(//g)|2,593,490|1296746|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:56:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2837472.906660182,"samples":1418737},{"name":"Using replaceAll()","opsSec":2622071.070274284,"samples":1311036},{"name":"Using replaceAll(//g)","opsSec":2593490.38726301,"samples":1296746}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|11,019,651|5509826|
|{ ...object, __proto__: null }|2,288,333|1144167|
|{ ...object, newProp: true }|10,901,414|5450708|
|structuredClone|274,109|137055|
|JSON.parse + JSON.stringify|250,761|125381|
|loop + object.keys starting with {}|1,442,844|721423|
|loop + object.keys starting with { __proto__: null }|803,444|401723|
|loop + object.keys starting with { randomProp: true }|634,502|317252|
|object.keys + reduce(FN, {})|1,469,163|734582|
|object.keys + reduce(FN, { __proto__: null })|796,559|398280|
|object.keys + reduce(FN, { newProp: true })|656,284|328143|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:01:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":11019651.3300822,"samples":5509826},{"name":"{ ...object, __proto__: null }","opsSec":2288333.69869422,"samples":1144167},{"name":"{ ...object, newProp: true }","opsSec":10901414.38465952,"samples":5450708},{"name":"structuredClone","opsSec":274109.7845785753,"samples":137055},{"name":"JSON.parse + JSON.stringify","opsSec":250761.5623695741,"samples":125381},{"name":"loop + object.keys starting with {}","opsSec":1442844.6574340772,"samples":721423},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":803444.5948760081,"samples":401723},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":634502.5249552088,"samples":317252},{"name":"object.keys + reduce(FN, {})","opsSec":1469163.9493139707,"samples":734582},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":796559.8317207713,"samples":398280},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":656284.5782533812,"samples":328143}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|334,872|167437|
|Sort using first char|1,299,697|649849|
|Sort using localeCompare|1,240,447|620224|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:06:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":334872.79505129997,"samples":167437},{"name":"Sort using first char","opsSec":1299697.5680770997,"samples":649849},{"name":"Sort using localeCompare","opsSec":1240447.963872797,"samples":620224}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,162|1082|
|{...smallObject} - Total keys: 2|13,173,673|6586837|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,388|1195|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,764|3383|
|{ ...bigObject, ...anotherBigObject }|1,372|687|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,665,712|3332857|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,576,694|5288348|
|{ ...smallObject, ...anotherSmallObject }|9,608,266|4804134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2162.333536988389,"samples":1082},{"name":"{...smallObject} - Total keys: 2","opsSec":13173673.78082766,"samples":6586837},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2388.7318842363943,"samples":1195},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6764.809014044365,"samples":3383},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1372.744452260117,"samples":687},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6665712.38534265,"samples":3332857},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10576694.183877897,"samples":5288348},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9608266.488437034,"samples":4804134}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,306|1154|
|streams.web.Readable reading 1e3 * "some data"|2,861|1431|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:17:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2306.303229782559,"samples":1154},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2861.2466566887683,"samples":1431}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,613|3307|
|streams.web.WritableStream writing 1e3 * "some data"|3,609|1805|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:22:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6613.2714429404705,"samples":3307},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":3609.9616189252947,"samples":1805}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|16,488,430|8244216|
|Using backtick (`)|16,420,579|8210290|
|Using array.join|6,517,237|3258619|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:27:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":16488430.622132555,"samples":8244216},{"name":"Using backtick (`)","opsSec":16420579.547514964,"samples":8210290},{"name":"Using array.join","opsSec":6517237.846340722,"samples":3258619}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,667,524|7833763|
|(short string) (true) String#slice and strict comparison|16,575,361|8287681|
|(long string) (true) String#endsWith|14,358,633|7179317|
|(long string) (true) String#slice and strict comparison|16,297,353|8148677|
|(short string) (false) String#endsWith|14,489,492|7244747|
|(short string) (false) String#slice and strict comparison|16,491,846|8245924|
|(long string) (false) String#endsWith|15,992,197|7996099|
|(long string) (false) String#slice and strict comparison|16,463,680|8231841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15667524.169289667,"samples":7833763},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16575361.997159591,"samples":8287681},{"name":"(long string) (true) String#endsWith","opsSec":14358633.752875837,"samples":7179317},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16297353.240123952,"samples":8148677},{"name":"(short string) (false) String#endsWith","opsSec":14489492.048279235,"samples":7244747},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16491846.908696039,"samples":8245924},{"name":"(long string) (false) String#endsWith","opsSec":15992197.236002797,"samples":7996099},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16463680.034248468,"samples":8231841}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,276,166|8138084|
|Using indexof|16,271,955|8135978|
|Using RegExp.test|7,498,718|3749360|
|Using RegExp.text with cached regex pattern|8,568,436|4284219|
|Using new RegExp.test|3,558,142|1779072|
|Using new RegExp.test with cached regex pattern|3,830,290|1915146|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:21:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16276166.277040046,"samples":8138084},{"name":"Using indexof","opsSec":16271955.868095757,"samples":8135978},{"name":"Using RegExp.test","opsSec":7498718.791424297,"samples":3749360},{"name":"Using RegExp.text with cached regex pattern","opsSec":8568436.173670307,"samples":4284219},{"name":"Using new RegExp.test","opsSec":3558142.3966614893,"samples":1779072},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3830290.860310795,"samples":1915146}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,714,467|7857234|
|(short string) (true) String#slice and strict comparison|16,572,255|8286128|
|(long string) (true) String#startsWith|14,270,536|7135269|
|(long string) (true) String#slice and strict comparison|16,259,171|8129586|
|(short string) (false) String#startsWith|15,856,209|7928106|
|(short string) (false) String#slice and strict comparison|16,448,212|8224107|
|(long string) (false) String#startsWith|16,009,724|8004863|
|(long string) (false) String#slice and strict comparison|16,517,752|8258877|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:31:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15714467.775202734,"samples":7857234},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16572255.130750624,"samples":8286128},{"name":"(long string) (true) String#startsWith","opsSec":14270536.407695046,"samples":7135269},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16259171.170431463,"samples":8129586},{"name":"(short string) (false) String#startsWith","opsSec":15856209.943454217,"samples":7928106},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16448212.258827629,"samples":8224107},{"name":"(long string) (false) String#startsWith","opsSec":16009724.518997882,"samples":8004863},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16517752.275095105,"samples":8258877}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|16,006,487|8003244|
|Using this|16,433,671|8216836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:40:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":16006487.351238525,"samples":8003244},{"name":"Using this","opsSec":16433671.905965775,"samples":8216836}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,632,200|3316101|
|Date.now()|9,303,032|4651517|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:45:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6632200.839369913,"samples":3316101},{"name":"Date.now()","opsSec":9303032.926480308,"samples":4651517}]}-->
