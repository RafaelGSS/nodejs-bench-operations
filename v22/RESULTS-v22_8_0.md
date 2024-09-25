## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.09ms
new Array(length)|100|0.01ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.016ms
array.push|10,000|0.297ms
new Array(length)|10,000|0.138ms
array.push|1,000,000|28.774ms
new Array(length)|1,000,000|6.867ms
array.push|100,000,000|1,921.474ms
new Array(length)|100,000,000|4,139.22ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.004ms
array.push|100|0.016ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.02ms
array.push|10,000|176.347ms
new Array(length)|10,000|0.049ms
array.push|1,000,000|19.261ms
new Array(length)|1,000,000|7.215ms
array.push|100,000,000|2,075.939ms
new Array(length)|100,000,000|4,761.87ms

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,912|2041|
|new Blob (1024)|569|290|
|text (128)|4,141|2072|
|text (1024)|517|259|
|arrayBuffer (128)|4,152|2077|
|arrayBuffer (1024)|521|261|
|slice (0, 64)|235,542|117772|
|slice (0, 512)|39,017|19510|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":3912.7308198701585,"samples":2041},{"name":"new Blob (1024)","opsSec":569.5762108270412,"samples":290},{"name":"text (128)","opsSec":4141.745382916821,"samples":2072},{"name":"text (1024)","opsSec":517.8526605610128,"samples":259},{"name":"arrayBuffer (128)","opsSec":4152.066349484893,"samples":2077},{"name":"arrayBuffer (1024)","opsSec":521.4066965340799,"samples":261},{"name":"slice (0, 64)","opsSec":235542.96737964044,"samples":117772},{"name":"slice (0, 512)","opsSec":39017.93774593493,"samples":19510}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|288,754|144378|
|[True conditional] Using constructor name|306,969|153485|
|[True conditional] Check if property is valid then instanceof |320,325|160164|
|[False conditional] Using instanceof only|14,854,366|7427184|
|[False conditional] Using constructor name|15,214,345|7607173|
|[False conditional] Check if property is valid then instanceof |13,692,590|6846296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:25:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":288754.87039093126,"samples":144378},{"name":"[True conditional] Using constructor name","opsSec":306969.79862806445,"samples":153485},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":320325.835238135,"samples":160164},{"name":"[False conditional] Using instanceof only","opsSec":14854366.276986094,"samples":7427184},{"name":"[False conditional] Using constructor name","opsSec":15214345.574190352,"samples":7607173},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":13692590.904629616,"samples":6846296}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,118|3560|
|crypto.verify('RSA-SHA256')|7,125|3563|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:30:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7118.121285776562,"samples":3560},{"name":"crypto.verify('RSA-SHA256')","opsSec":7125.458564905455,"samples":3563}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,096,577|548289|
|fromUnixToISOString(new Date())|1,901,356|950679|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1096577.048171502,"samples":548289},{"name":"fromUnixToISOString(new Date())","opsSec":1901356.3001878657,"samples":950679}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,330|9666|
|Intl.DateTimeFormat().format(new Date())|21,292|10647|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,595|11298|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|22,299|11150|
|Reusing Intl.DateTimeFormat()|897,345|448673|
|Date.toLocaleDateString()|900,660|450331|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,947|11474|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:42:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19330.925548497555,"samples":9666},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":21292.426447101014,"samples":10647},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22595.5105812392,"samples":11298},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":22299.444966812818,"samples":11150},{"name":"Reusing Intl.DateTimeFormat()","opsSec":897345.7254123534,"samples":448673},{"name":"Date.toLocaleDateString()","opsSec":900660.5553416578,"samples":450331},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22947.641695521987,"samples":11474}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|873,702|436855|
|Using brackets {}|874,296|437149|
|Using '' + |871,236|435619|
|Using date.toString()|932,886|466444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:48:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":873702.7465198999,"samples":436855},{"name":"Using brackets {}","opsSec":874296.816202168,"samples":437149},{"name":"Using '' + ","opsSec":871236.5067010903,"samples":435619},{"name":"Using date.toString()","opsSec":932886.7536634401,"samples":466444}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,734,802|1367402|
|Using delete property (proto: null)|7,465,086|3732544|
|Using delete property (cached proto: null)|2,711,183|1355592|
|Using undefined assignment|13,737,192|6868597|
|Using undefined assignment (proto: null)|7,885,619|3942810|
|Using undefined property (cached proto: null)|13,031,192|6515597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:58:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2734802.457568355,"samples":1367402},{"name":"Using delete property (proto: null)","opsSec":7465086.402483462,"samples":3732544},{"name":"Using delete property (cached proto: null)","opsSec":2711183.468619775,"samples":1355592},{"name":"Using undefined assignment","opsSec":13737192.845988153,"samples":6868597},{"name":"Using undefined assignment (proto: null)","opsSec":7885619.132525202,"samples":3942810},{"name":"Using undefined property (cached proto: null)","opsSec":13031192.38396899,"samples":6515597}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|304,813|152407|
|NodeError|307,224|153613|
|NodeError Range|304,311|152156|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:04:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":304813.7671222729,"samples":152407},{"name":"NodeError","opsSec":307224.25742392294,"samples":153613},{"name":"NodeError Range","opsSec":304311.9963483932,"samples":152156}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,534,502|767252|
|Function returning explicitly undefined|1,503,234|751618|
|Function returning implicitly undefined|1,495,435|747718|
|Function returning string|1,506,194|753098|
|Function returning integer|1,513,091|756657|
|Function returning float|1,529,557|764779|
|Function returning functions|1,495,141|747571|
|Function returning arrow functions|1,511,164|755583|
|Function returning empty object|1,537,273|768637|
|Function returning empty array|1,526,553|763277|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:15:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1534502.137114322,"samples":767252},{"name":"Function returning explicitly undefined","opsSec":1503234.938714527,"samples":751618},{"name":"Function returning implicitly undefined","opsSec":1495435.1535845208,"samples":747718},{"name":"Function returning string","opsSec":1506194.1534076552,"samples":753098},{"name":"Function returning integer","opsSec":1513091.542251338,"samples":756657},{"name":"Function returning float","opsSec":1529557.1893352275,"samples":764779},{"name":"Function returning functions","opsSec":1495141.028149713,"samples":747571},{"name":"Function returning arrow functions","opsSec":1511164.954274784,"samples":755583},{"name":"Function returning empty object","opsSec":1537273.5111472271,"samples":768637},{"name":"Function returning empty array","opsSec":1526553.0382771913,"samples":763277}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,337,579|6668790|
|using Array.includes (first item)|13,131,139|6565571|
|Using raw comparison|14,430,227|7215114|
|Using raw comparison (first item)|14,600,295|7300148|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:26:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13337579.626500191,"samples":6668790},{"name":"using Array.includes (first item)","opsSec":13131139.00630576,"samples":6565571},{"name":"Using raw comparison","opsSec":14430227.018621072,"samples":7215114},{"name":"Using raw comparison (first item)","opsSec":14600295.561812943,"samples":7300148}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,131,123|6565562|
|Using Object.getOwnPropertyNames()|13,200,562|6600282|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:34:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":13131123.94743997,"samples":6565562},{"name":"Using Object.getOwnPropertyNames()","opsSec":13200562.917537434,"samples":6600282}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,422,998|7211500|
|Length = 10_000 - Array.at|14,249,008|7124505|
|Length = 1_000_000 - Array.at|15,055,205|7527603|
|Length = 100 - Array[length - 1]|15,124,091|7562046|
|Length = 10_000 - Array[length - 1]|14,430,418|7215210|
|Length = 1_000_000 - Array[length - 1]|14,976,832|7488417|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:48:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14422998.15391973,"samples":7211500},{"name":"Length = 10_000 - Array.at","opsSec":14249008.689082256,"samples":7124505},{"name":"Length = 1_000_000 - Array.at","opsSec":15055205.187180985,"samples":7527603},{"name":"Length = 100 - Array[length - 1]","opsSec":15124091.606540525,"samples":7562046},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14430418.210650215,"samples":7215210},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14976832.292854125,"samples":7488417}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,085,722|7542862|
|~ (small)|15,339,615|7669810|
|Math.floor (long)|14,327,293|7163647|
|~ (long)|14,268,305|7134153|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:58:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":15085722.491448697,"samples":7542862},{"name":"~ (small)","opsSec":15339615.551323708,"samples":7669810},{"name":"Math.floor (long)","opsSec":14327293.741918065,"samples":7163647},{"name":"~ (long)","opsSec":14268305.172243573,"samples":7134153}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|12,212,114|6106058|
|Object.create({})|1,813,237|906620|
|Cached Empty.prototype|14,046,879|7023440|
|Empty.prototype|2,000,531|1000266|
|Empty class|1,263,236|632922|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:07:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":12212114.534622042,"samples":6106058},{"name":"Object.create({})","opsSec":1813237.4397123342,"samples":906620},{"name":"Cached Empty.prototype","opsSec":14046879.747148873,"samples":7023440},{"name":"Empty.prototype","opsSec":2000531.7599346954,"samples":1000266},{"name":"Empty class","opsSec":1263236.8282420817,"samples":632922}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,851,474|7425738|
|Using optional chain (obj.field?.field2) (undefined)|14,531,179|7265590|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,716,355|7358178|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,812,728|7406365|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:18:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14851474.633670948,"samples":7425738},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14531179.622078823,"samples":7265590},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14716355.617422808,"samples":7358178},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14812728.4002734,"samples":7406365}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,815,103|7407552|
|Using parseInt(x, 10) - big number (10 len)|15,271,351|7635676|
|Using + - small number (2 len)|14,836,862|7418435|
|Using + - big number (10 len)|15,435,719|7717860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:28:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14815103.496370388,"samples":7407552},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15271351.205824688,"samples":7635676},{"name":"Using + - small number (2 len)","opsSec":14836862.84862591,"samples":7418435},{"name":"Using + - big number (10 len)","opsSec":15435719.44394621,"samples":7717860}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,005,345|502673|
|Using ? operator to avoid rejection|1,022,996|511499|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:34:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":1005345.185670659,"samples":502673},{"name":"Using ? operator to avoid rejection","opsSec":1022996.4204932256,"samples":511499}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,691,071|7345536|
|Raw usage underscore usage|14,347,253|7173627|
|Manipulating private properties using #|13,853,773|6926887|
|Manipulating private properties using underscore(_)|14,620,010|7310006|
|Manipulating private properties using Symbol|13,848,244|6924123|
|Manipulating private properties using PrivateSymbol|11,269,159|5634580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:46:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":14691071.706314754,"samples":7345536},{"name":"Raw usage underscore usage","opsSec":14347253.971325943,"samples":7173627},{"name":"Manipulating private properties using #","opsSec":13853773.806023413,"samples":6926887},{"name":"Manipulating private properties using underscore(_)","opsSec":14620010.537848677,"samples":7310006},{"name":"Manipulating private properties using Symbol","opsSec":13848244.420970319,"samples":6924123},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11269159.3462398,"samples":5634580}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,021,879|2510940|
|Adding property in the object creation - small object|5,065,451|2532726|
|Adding property after the function creation - small class|246,939|123470|
|Adding property in the function creation - small class|274,739|137370|
|Adding property after the class creation - small class|267,408|133705|
|Adding property in the class creation - small class|250,266|125134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:54:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5021879.387321061,"samples":2510940},{"name":"Adding property in the object creation - small object","opsSec":5065451.604898511,"samples":2532726},{"name":"Adding property after the function creation - small class","opsSec":246939.2631333846,"samples":123470},{"name":"Adding property in the function creation - small class","opsSec":274739.13512090786,"samples":137370},{"name":"Adding property after the class creation - small class","opsSec":267408.47149335995,"samples":133705},{"name":"Adding property in the class creation - small class","opsSec":250266.3712664698,"samples":125134}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|14,989,301|7494651|
|Getter|12,029,443|6014722|
|Method|14,247,347|7123674|
|DefineProperty (getter)|14,031,532|7015767|
|DefineProperty (getter & enumerable=false)|12,028,446|6014332|
|DefineProperty (getter & configurable=false)|14,478,516|7239259|
|DefineProperty (getter & enumerable=false & configurable=false)|12,592,022|6296012|
|DefineProperty (writable)|14,638,395|7319198|
|DefineProperty (writable & enumerable=false)|14,658,071|7329036|
|DefineProperty (writable & enumerable=false & configurable=false)|14,842,720|7421361|
|DefineProperties (getter)|12,682,061|6341031|
|DefineProperties (getter & enumerable=false)|12,697,216|6348609|
|DefineProperties (getter & enumerable=false & configurable=false)|12,697,950|6348976|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:15:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":14989301.13050987,"samples":7494651},{"name":"Getter","opsSec":12029443.927604323,"samples":6014722},{"name":"Method","opsSec":14247347.174048748,"samples":7123674},{"name":"DefineProperty (getter)","opsSec":14031532.90560928,"samples":7015767},{"name":"DefineProperty (getter & enumerable=false)","opsSec":12028446.694150763,"samples":6014332},{"name":"DefineProperty (getter & configurable=false)","opsSec":14478516.233873248,"samples":7239259},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12592022.992756557,"samples":6296012},{"name":"DefineProperty (writable)","opsSec":14638395.73597305,"samples":7319198},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14658071.355769018,"samples":7329036},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14842720.278632646,"samples":7421361},{"name":"DefineProperties (getter)","opsSec":12682061.51785801,"samples":6341031},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12697216.628214937,"samples":6348609},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12697950.958491053,"samples":6348976}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,627,267|7313634|
|Setter|5,975,219|2987610|
|Method|14,354,646|7177324|
|DefineProperty (setter)|14,724,123|7362062|
|DefineProperty (setter & enumerable=false)|5,911,597|2955799|
|DefineProperty (setter & configurable=false)|5,976,434|2988218|
|DefineProperty (setter & enumerable=false & configurable=false)|5,959,772|2979887|
|DefineProperty (writable)|14,540,176|7270089|
|DefineProperty (writable & enumerable=false)|14,704,376|7352190|
|DefineProperty (writable & enumerable=false & configurable=false)|15,217,289|7608645|
|DefineProperties (setter)|14,763,653|7381827|
|DefineProperties (setter & enumerable=false)|6,105,677|3052839|
|DefineProperties (setter & enumerable=false & configurable=false)|6,118,835|3059418|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:37:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14627267.063387375,"samples":7313634},{"name":"Setter","opsSec":5975219.067711781,"samples":2987610},{"name":"Method","opsSec":14354646.622319011,"samples":7177324},{"name":"DefineProperty (setter)","opsSec":14724123.175570741,"samples":7362062},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5911597.680734304,"samples":2955799},{"name":"DefineProperty (setter & configurable=false)","opsSec":5976434.613522968,"samples":2988218},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5959772.223956662,"samples":2979887},{"name":"DefineProperty (writable)","opsSec":14540176.691301348,"samples":7270089},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14704376.823767727,"samples":7352190},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15217289.939016113,"samples":7608645},{"name":"DefineProperties (setter)","opsSec":14763653.11395751,"samples":7381827},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6105677.059664374,"samples":3052839},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6118835.95103131,"samples":3059418}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,576,071|1288036|
|Using replaceAll()|2,407,649|1203825|
|Using replaceAll(//g)|2,379,218|1189610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:44:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2576071.402350567,"samples":1288036},{"name":"Using replaceAll()","opsSec":2407649.57625386,"samples":1203825},{"name":"Using replaceAll(//g)","opsSec":2379218.796113384,"samples":1189610}]}-->
