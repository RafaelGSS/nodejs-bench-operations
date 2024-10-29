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
|new Array|262|132|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:58:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":262.5791140427123,"samples":132},{"name":"Array.from","opsSec":23.02282749031047,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,811|2406|
|new Blob (1024)|615|308|
|text (128)|4,878|2440|
|text (1024)|610|306|
|arrayBuffer (128)|4,914|2458|
|arrayBuffer (1024)|615|309|
|slice (0, 64)|176,106|88222|
|slice (0, 512)|30,094|15049|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:04:17 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":4811.961658289507,"samples":2406},{"name":"new Blob (1024)","opsSec":615.2232928971831,"samples":308},{"name":"text (128)","opsSec":4878.883867495401,"samples":2440},{"name":"text (1024)","opsSec":610.2941959869183,"samples":306},{"name":"arrayBuffer (128)","opsSec":4914.694716059751,"samples":2458},{"name":"arrayBuffer (1024)","opsSec":615.1766810721136,"samples":309},{"name":"slice (0, 64)","opsSec":176106.07814752232,"samples":88222},{"name":"slice (0, 512)","opsSec":30094.822528447803,"samples":15049}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|424,890|212508|
|[True conditional] Using constructor name|355,140|177580|
|[True conditional] Check if property is valid then instanceof |347,584|173793|
|[False conditional] Using instanceof only|101,795,566|50897791|
|[False conditional] Using constructor name|99,727,975|49864025|
|[False conditional] Check if property is valid then instanceof |100,692,606|50346310|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:10:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":424890.469509907,"samples":212508},{"name":"[True conditional] Using constructor name","opsSec":355140.7144386431,"samples":177580},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":347584.64372472017,"samples":173793},{"name":"[False conditional] Using instanceof only","opsSec":101795566.93425609,"samples":50897791},{"name":"[False conditional] Using constructor name","opsSec":99727975.6029302,"samples":49864025},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":100692606.10442035,"samples":50346310}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,333|3186|
|crypto.verify('RSA-SHA256')|7,013|3507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:15:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6333.681757397016,"samples":3186},{"name":"crypto.verify('RSA-SHA256')","opsSec":7013.751124055113,"samples":3507}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,486,039|743066|
|fromUnixToISOString(new Date())|2,265,223|1132612|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:21:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1486039.8714721284,"samples":743066},{"name":"fromUnixToISOString(new Date())","opsSec":2265223.719112259,"samples":1132612}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,941|9472|
|Intl.DateTimeFormat().format(new Date())|18,841|9422|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|19,017|9509|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,681|9341|
|Reusing Intl.DateTimeFormat()|449,348|287541|
|Date.toLocaleDateString()|723,780|362312|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|23,191|11596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:28:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18941.028001178394,"samples":9472},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18841.96107370829,"samples":9422},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":19017.395056663245,"samples":9509},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18681.572378808247,"samples":9341},{"name":"Reusing Intl.DateTimeFormat()","opsSec":449348.0311540842,"samples":287541},{"name":"Date.toLocaleDateString()","opsSec":723780.3977573938,"samples":362312},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":23191.974442444167,"samples":11596}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,043,528|521787|
|Using brackets {}|1,043,374|521923|
|Using '' + |1,064,636|533001|
|Using date.toString()|1,181,372|590687|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:33:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1043528.1306774878,"samples":521787},{"name":"Using brackets {}","opsSec":1043374.9224827486,"samples":521923},{"name":"Using '' + ","opsSec":1064636.2377901685,"samples":533001},{"name":"Using date.toString()","opsSec":1181372.1003536626,"samples":590687}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,958,457|1979280|
|Using delete property (proto: null)|16,410,517|8205859|
|Using delete property (cached proto: null)|3,909,592|1954928|
|Using undefined assignment|78,499,523|39253399|
|Using undefined assignment (proto: null)|18,318,591|9160830|
|Using undefined property (cached proto: null)|77,506,170|39265773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:39:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":3958457.2622002168,"samples":1979280},{"name":"Using delete property (proto: null)","opsSec":16410517.176816104,"samples":8205859},{"name":"Using delete property (cached proto: null)","opsSec":3909592.860942901,"samples":1954928},{"name":"Using undefined assignment","opsSec":78499523.44916198,"samples":39253399},{"name":"Using undefined assignment (proto: null)","opsSec":18318591.196328424,"samples":9160830},{"name":"Using undefined property (cached proto: null)","opsSec":77506170.67446972,"samples":39265773}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|399,373|199689|
|NodeError|331,174|165588|
|NodeError Range|327,391|163740|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:44:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":399373.7762229427,"samples":199689},{"name":"NodeError","opsSec":331174.9415648868,"samples":165588},{"name":"NodeError Range","opsSec":327391.21412185987,"samples":163740}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,947,854|974113|
|Function returning explicitly undefined|1,868,437|935006|
|Function returning implicitly undefined|1,925,913|962957|
|Function returning string|1,886,693|943458|
|Function returning integer|1,960,481|980339|
|Function returning float|1,927,699|964359|
|Function returning functions|1,860,171|930108|
|Function returning arrow functions|1,980,377|990189|
|Function returning empty object|1,933,612|967371|
|Function returning empty array|1,940,634|971184|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:51:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1947854.9141603035,"samples":974113},{"name":"Function returning explicitly undefined","opsSec":1868437.0757045178,"samples":935006},{"name":"Function returning implicitly undefined","opsSec":1925913.125635441,"samples":962957},{"name":"Function returning string","opsSec":1886693.12116821,"samples":943458},{"name":"Function returning integer","opsSec":1960481.4264483328,"samples":980339},{"name":"Function returning float","opsSec":1927699.0683926232,"samples":964359},{"name":"Function returning functions","opsSec":1860171.5121381157,"samples":930108},{"name":"Function returning arrow functions","opsSec":1980377.0850657867,"samples":990189},{"name":"Function returning empty object","opsSec":1933612.0589883132,"samples":967371},{"name":"Function returning empty array","opsSec":1940634.0861379856,"samples":971184}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|90,267,260|45141615|
|using Array.includes (first item)|83,213,825|41609906|
|Using raw comparison|99,702,862|49851450|
|Using raw comparison (first item)|99,043,573|49521794|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:56:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":90267260.63838595,"samples":45141615},{"name":"using Array.includes (first item)","opsSec":83213825.26455516,"samples":41609906},{"name":"Using raw comparison","opsSec":99702862.5117237,"samples":49851450},{"name":"Using raw comparison (first item)","opsSec":99043573.73772539,"samples":49521794}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|52,310,619|26192902|
|Using Object.getOwnPropertyNames()|42,894,121|21447065|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:01:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":52310619.5158884,"samples":26192902},{"name":"Using Object.getOwnPropertyNames()","opsSec":42894121.76432863,"samples":21447065}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|134,039,212|67075437|
|Length = 10_000 - Array.at|96,563,509|48281764|
|Length = 1_000_000 - Array.at|97,056,804|48528409|
|Length = 100 - Array[length - 1]|95,221,818|47610911|
|Length = 10_000 - Array[length - 1]|97,521,430|48865955|
|Length = 1_000_000 - Array[length - 1]|97,652,751|48826381|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:08:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":134039212.90177059,"samples":67075437},{"name":"Length = 10_000 - Array.at","opsSec":96563509.2666792,"samples":48281764},{"name":"Length = 1_000_000 - Array.at","opsSec":97056804.99438813,"samples":48528409},{"name":"Length = 100 - Array[length - 1]","opsSec":95221818.00068365,"samples":47610911},{"name":"Length = 10_000 - Array[length - 1]","opsSec":97521430.47182697,"samples":48865955},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":97652751.45350283,"samples":48826381}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|141,245,277|70622770|
|~ (small)|96,330,168|48174301|
|Math.floor (long)|97,137,384|48568737|
|~ (long)|103,618,719|51811947|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:13:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":141245277.84876433,"samples":70622770},{"name":"~ (small)","opsSec":96330168.45162544,"samples":48174301},{"name":"Math.floor (long)","opsSec":97137384.82788073,"samples":48568737},{"name":"~ (long)","opsSec":103618719.073932,"samples":51811947}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|46,027,270|23016721|
|Object.create({})|2,015,543|1008737|
|Cached Empty.prototype|111,061,733|55531392|
|Empty.prototype|2,183,711|1096235|
|Empty class|1,353,790|685211|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:19:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":46027270.29538063,"samples":23016721},{"name":"Object.create({})","opsSec":2015543.5607505587,"samples":1008737},{"name":"Cached Empty.prototype","opsSec":111061733.13388109,"samples":55531392},{"name":"Empty.prototype","opsSec":2183711.1955386084,"samples":1096235},{"name":"Empty class","opsSec":1353790.4862233354,"samples":685211}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|148,721,418|74360710|
|Using optional chain (obj.field?.field2) (undefined)|101,417,453|50729201|
|Using and operator (obj.field && obj.field.field2) (Valid)|103,209,971|51604997|
|Using and operator (obj.field && obj.field.field2) (undefined)|98,845,260|49422639|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:24:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":148721418.21534297,"samples":74360710},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":101417453.68889858,"samples":50729201},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":103209971.08738643,"samples":51604997},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":98845260.60323414,"samples":49422639}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,102,138|70590428|
|Using parseInt(x, 10) - big number (10 len)|100,350,387|50179770|
|Using + - small number (2 len)|102,470,319|51240711|
|Using + - big number (10 len)|102,877,639|51455826|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:31:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141102138.22133335,"samples":70590428},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":100350387.44256291,"samples":50179770},{"name":"Using + - small number (2 len)","opsSec":102470319.13598098,"samples":51240711},{"name":"Using + - big number (10 len)","opsSec":102877639.62356405,"samples":51455826}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|983,058|491541|
|Using ? operator to avoid rejection|1,138,704|581436|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:36:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":983058.0939932703,"samples":491541},{"name":"Using ? operator to avoid rejection","opsSec":1138704.9416315502,"samples":581436}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|136,316,694|68159305|
|Raw usage underscore usage|98,378,399|49245130|
|Manipulating private properties using #|98,410,324|49215799|
|Manipulating private properties using underscore(_)|98,208,400|49108495|
|Manipulating private properties using Symbol|98,708,922|49355266|
|Manipulating private properties using PrivateSymbol|36,928,418|18474035|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:41:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":136316694.75043875,"samples":68159305},{"name":"Raw usage underscore usage","opsSec":98378399.62773047,"samples":49245130},{"name":"Manipulating private properties using #","opsSec":98410324.44334443,"samples":49215799},{"name":"Manipulating private properties using underscore(_)","opsSec":98208400.30047613,"samples":49108495},{"name":"Manipulating private properties using Symbol","opsSec":98708922.84713976,"samples":49355266},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36928418.83734306,"samples":18474035}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,932,427|3966286|
|Adding property in the object creation - small object|7,597,746|3799525|
|Adding property after the function creation - small class|241,558|121125|
|Adding property in the function creation - small class|260,929|130465|
|Adding property after the class creation - small class|244,354|122326|
|Adding property in the class creation - small class|250,905|125512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:47:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7932427.788462805,"samples":3966286},{"name":"Adding property in the object creation - small object","opsSec":7597746.8496558415,"samples":3799525},{"name":"Adding property after the function creation - small class","opsSec":241558.93178195084,"samples":121125},{"name":"Adding property in the function creation - small class","opsSec":260929.62739249208,"samples":130465},{"name":"Adding property after the class creation - small class","opsSec":244354.83080477474,"samples":122326},{"name":"Adding property in the class creation - small class","opsSec":250905.67589411646,"samples":125512}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|153,248,186|76746535|
|Getter|51,200,059|25627494|
|Method|101,340,641|50694229|
|DefineProperty (getter)|103,509,882|51761076|
|DefineProperty (getter & enumerable=false)|51,948,186|25977350|
|DefineProperty (getter & configurable=false)|103,552,083|51776314|
|DefineProperty (getter & enumerable=false & configurable=false)|52,131,329|26067406|
|DefineProperty (writable)|103,647,428|51823733|
|DefineProperty (writable & enumerable=false)|102,977,063|51492343|
|DefineProperty (writable & enumerable=false & configurable=false)|101,827,849|50914250|
|DefineProperties (getter)|49,633,362|24817414|
|DefineProperties (getter & enumerable=false)|50,315,494|25157752|
|DefineProperties (getter & enumerable=false & configurable=false)|52,624,200|26315722|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:54:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":153248186.14146614,"samples":76746535},{"name":"Getter","opsSec":51200059.24524017,"samples":25627494},{"name":"Method","opsSec":101340641.22916114,"samples":50694229},{"name":"DefineProperty (getter)","opsSec":103509882.55958068,"samples":51761076},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51948186.216930255,"samples":25977350},{"name":"DefineProperty (getter & configurable=false)","opsSec":103552083.52314483,"samples":51776314},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":52131329.835692294,"samples":26067406},{"name":"DefineProperty (writable)","opsSec":103647428.06504132,"samples":51823733},{"name":"DefineProperty (writable & enumerable=false)","opsSec":102977063.84368841,"samples":51492343},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101827849.52369723,"samples":50914250},{"name":"DefineProperties (getter)","opsSec":49633362.723865665,"samples":24817414},{"name":"DefineProperties (getter & enumerable=false)","opsSec":50315494.23879411,"samples":25157752},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":52624200.8050012,"samples":26315722}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|144,646,100|72323067|
|Setter|11,514,104|5757055|
|Method|97,200,233|48613253|
|DefineProperty (setter)|97,374,524|48687273|
|DefineProperty (setter & enumerable=false)|11,485,471|5742741|
|DefineProperty (setter & configurable=false)|11,705,611|5854188|
|DefineProperty (setter & enumerable=false & configurable=false)|11,516,856|5758432|
|DefineProperty (writable)|97,585,401|48796304|
|DefineProperty (writable & enumerable=false)|99,265,760|49633569|
|DefineProperty (writable & enumerable=false & configurable=false)|100,130,307|50065156|
|DefineProperties (setter)|98,797,744|49398930|
|DefineProperties (setter & enumerable=false)|11,468,801|5734404|
|DefineProperties (setter & enumerable=false & configurable=false)|11,306,408|5653218|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:00:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":144646100.73139685,"samples":72323067},{"name":"Setter","opsSec":11514104.335060665,"samples":5757055},{"name":"Method","opsSec":97200233.74882004,"samples":48613253},{"name":"DefineProperty (setter)","opsSec":97374524.77235359,"samples":48687273},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11485471.98466843,"samples":5742741},{"name":"DefineProperty (setter & configurable=false)","opsSec":11705611.392112633,"samples":5854188},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11516856.974717245,"samples":5758432},{"name":"DefineProperty (writable)","opsSec":97585401.51326905,"samples":48796304},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99265760.78683485,"samples":49633569},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":100130307.59426646,"samples":50065156},{"name":"DefineProperties (setter)","opsSec":98797744.99942483,"samples":49398930},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11468801.072844151,"samples":5734404},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11306408.412363473,"samples":5653218}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,395,388|1697982|
|Using replaceAll()|3,103,564|1554409|
|Using replaceAll(//g)|3,078,037|1540531|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:07:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3395388.7600270538,"samples":1697982},{"name":"Using replaceAll()","opsSec":3103564.9742030934,"samples":1554409},{"name":"Using replaceAll(//g)","opsSec":3078037.6310331016,"samples":1540531}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|25,115,228|12559614|
|{ ...object, __proto__: null }|2,577,548|1288775|
|{ ...object, newProp: true }|21,737,231|10880334|
|structuredClone|289,468|144767|
|JSON.parse + JSON.stringify|268,016|134035|
|loop + object.keys starting with {}|1,583,892|793725|
|loop + object.keys starting with { __proto__: null }|876,948|438615|
|loop + object.keys starting with { randomProp: true }|645,538|322798|
|object.keys + reduce(FN, {})|1,667,799|833901|
|object.keys + reduce(FN, { __proto__: null })|893,122|446594|
|object.keys + reduce(FN, { newProp: true })|672,449|336226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:13:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":25115228.65098962,"samples":12559614},{"name":"{ ...object, __proto__: null }","opsSec":2577548.02044312,"samples":1288775},{"name":"{ ...object, newProp: true }","opsSec":21737231.13476281,"samples":10880334},{"name":"structuredClone","opsSec":289468.3080621684,"samples":144767},{"name":"JSON.parse + JSON.stringify","opsSec":268016.537669165,"samples":134035},{"name":"loop + object.keys starting with {}","opsSec":1583892.254881516,"samples":793725},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":876948.7362318282,"samples":438615},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":645538.0978147783,"samples":322798},{"name":"object.keys + reduce(FN, {})","opsSec":1667799.9319280845,"samples":833901},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":893122.4144486175,"samples":446594},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":672449.7056016044,"samples":336226}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|308,601|154326|
|Sort using first char|1,365,149|682579|
|Sort using localeCompare|1,290,164|645120|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:18:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":308601.83368591603,"samples":154326},{"name":"Sort using first char","opsSec":1365149.3859073748,"samples":682579},{"name":"Sort using localeCompare","opsSec":1290164.3086403406,"samples":645120}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,853|927|
|{...smallObject} - Total keys: 2|54,749,179|27375594|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,100|551|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,550|3276|
|{ ...bigObject, ...anotherBigObject }|1,163|582|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,111,027|6555741|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|29,660,411|14830211|
|{ ...smallObject, ...anotherSmallObject }|21,233,824|10618656|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:24:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1853.9616637807162,"samples":927},{"name":"{...smallObject} - Total keys: 2","opsSec":54749179.03362454,"samples":27375594},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1100.3630778780869,"samples":551},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6550.720814543661,"samples":3276},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1163.5661899445354,"samples":582},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13111027.073582599,"samples":6555741},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":29660411.381572723,"samples":14830211},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21233824.21696942,"samples":10618656}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,104|1066|
|streams.web.Readable reading 1e3 * "some data"|1,810|906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:30:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2104.352852295722,"samples":1066},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1810.0929584626822,"samples":906}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,672|3337|
|streams.web.WritableStream writing 1e3 * "some data"|1,898|958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:36:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6672.652324410039,"samples":3337},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1898.4050805346637,"samples":958}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|152,549,011|76274521|
|Using backtick (`)|101,703,711|50867120|
|Using array.join|10,359,591|5180905|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:41:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using + sign","opsSec":152549011.49019772,"samples":76274521},{"name":"Using backtick (`)","opsSec":101703711.80023633,"samples":50867120},{"name":"Using array.join","opsSec":10359591.84563238,"samples":5180905}]}-->

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
