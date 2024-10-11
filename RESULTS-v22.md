## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|90,089,393|45060451|
|Using dot notation|68,577,012|34294399|
|Using define property (writable)|4,412,085|2206462|
|Using define property initialized (writable)|6,045,521|3023066|
|Using define property (getter)|2,189,460|1094761|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:58:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":90089393.05460037,"samples":45060451},{"name":"Using dot notation","opsSec":68577012.35465673,"samples":34294399},{"name":"Using define property (writable)","opsSec":4412085.015561781,"samples":2206462},{"name":"Using define property initialized (writable)","opsSec":6045521.885931272,"samples":3023066},{"name":"Using define property (getter)","opsSec":2189460.9403132964,"samples":1094761}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.108ms
new Array(length)|100|0.01ms
array.push|1,000|0.027ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.253ms
new Array(length)|10,000|0.136ms
array.push|1,000,000|29.892ms
new Array(length)|1,000,000|6.314ms
array.push|100,000,000|1,891.71ms
new Array(length)|100,000,000|4,114.286ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.006ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.013ms
array.push|1,000|0.035ms
new Array(length)|1,000|0.02ms
array.push|10,000|18.266ms
new Array(length)|10,000|5.231ms
array.push|1,000,000|165.476ms
new Array(length)|1,000,000|7.576ms
array.push|100,000,000|2,014.58ms
new Array(length)|100,000,000|4,719.61ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|321|161|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:01:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Array","opsSec":321.0080350943051,"samples":161},{"name":"Array.from","opsSec":23.280188355813554,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,302|2656|
|new Blob (1024)|655|329|
|text (128)|4,222|2116|
|text (1024)|532|267|
|arrayBuffer (128)|4,231|2116|
|arrayBuffer (1024)|533|268|
|slice (0, 64)|157,721|79259|
|slice (0, 512)|32,687|16348|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:03:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Blob (128)","opsSec":5302.734023777786,"samples":2656},{"name":"new Blob (1024)","opsSec":655.8444387066805,"samples":329},{"name":"text (128)","opsSec":4222.186877702581,"samples":2116},{"name":"text (1024)","opsSec":532.4939548025474,"samples":267},{"name":"arrayBuffer (128)","opsSec":4231.988108113416,"samples":2116},{"name":"arrayBuffer (1024)","opsSec":533.5061511049552,"samples":268},{"name":"slice (0, 64)","opsSec":157721.57544151356,"samples":79259},{"name":"slice (0, 512)","opsSec":32687.406284763303,"samples":16348}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|454,543|227279|
|[True conditional] Using constructor name|355,248|177625|
|[True conditional] Check if property is valid then instanceof |349,599|174871|
|[False conditional] Using instanceof only|97,461,125|48734473|
|[False conditional] Using constructor name|97,033,887|49136340|
|[False conditional] Check if property is valid then instanceof |98,735,233|49370107|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:04:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":454543.2455262503,"samples":227279},{"name":"[True conditional] Using constructor name","opsSec":355248.5065352786,"samples":177625},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":349599.68426133157,"samples":174871},{"name":"[False conditional] Using instanceof only","opsSec":97461125.71927229,"samples":48734473},{"name":"[False conditional] Using constructor name","opsSec":97033887.17597915,"samples":49136340},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":98735233.79480737,"samples":49370107}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,771|3386|
|crypto.verify('RSA-SHA256')|6,909|3455|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:05:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6771.677288947118,"samples":3386},{"name":"crypto.verify('RSA-SHA256')","opsSec":6909.292612803717,"samples":3455}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,374,137|687136|
|fromUnixToISOString(new Date())|1,994,792|997499|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:07:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1374137.790710257,"samples":687136},{"name":"fromUnixToISOString(new Date())","opsSec":1994792.3329208912,"samples":997499}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|18,420|9211|
|Intl.DateTimeFormat().format(new Date())|18,446|9224|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,379|9190|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,109|9055|
|Reusing Intl.DateTimeFormat()|476,467|238235|
|Date.toLocaleDateString()|937,911|468956|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,327|11166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:08:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":18420.016900980438,"samples":9211},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":18446.736656793324,"samples":9224},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18379.421121752348,"samples":9190},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18109.969430371602,"samples":9055},{"name":"Reusing Intl.DateTimeFormat()","opsSec":476467.3641825413,"samples":238235},{"name":"Date.toLocaleDateString()","opsSec":937911.1258668306,"samples":468956},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22327.15938253723,"samples":11166}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|868,752|434377|
|Using brackets {}|895,435|447719|
|Using '' + |1,010,711|505410|
|Using date.toString()|1,172,828|587682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:09:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":868752.1912579378,"samples":434377},{"name":"Using brackets {}","opsSec":895435.8706534996,"samples":447719},{"name":"Using '' + ","opsSec":1010711.8376619807,"samples":505410},{"name":"Using date.toString()","opsSec":1172828.733656973,"samples":587682}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,025,729|2012979|
|Using delete property (proto: null)|15,874,867|7946781|
|Using delete property (cached proto: null)|3,954,631|1977479|
|Using undefined assignment|69,901,466|34953365|
|Using undefined assignment (proto: null)|17,089,541|8546085|
|Using undefined property (cached proto: null)|70,112,166|35056230|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:11:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using delete property","opsSec":4025729.725021673,"samples":2012979},{"name":"Using delete property (proto: null)","opsSec":15874867.089770667,"samples":7946781},{"name":"Using delete property (cached proto: null)","opsSec":3954631.2209129534,"samples":1977479},{"name":"Using undefined assignment","opsSec":69901466.97874823,"samples":34953365},{"name":"Using undefined assignment (proto: null)","opsSec":17089541.457628403,"samples":8546085},{"name":"Using undefined property (cached proto: null)","opsSec":70112166.93114224,"samples":35056230}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|419,699|209931|
|NodeError|338,800|169403|
|NodeError Range|330,638|165500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:12:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Error","opsSec":419699.2171404368,"samples":209931},{"name":"NodeError","opsSec":338800.23565279064,"samples":169403},{"name":"NodeError Range","opsSec":330638.0227828657,"samples":165500}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,926,490|963453|
|Function returning explicitly undefined|1,858,048|930461|
|Function returning implicitly undefined|1,708,379|854225|
|Function returning string|1,866,335|933451|
|Function returning integer|1,733,730|866880|
|Function returning float|1,858,100|929478|
|Function returning functions|1,818,245|909586|
|Function returning arrow functions|1,735,588|867868|
|Function returning empty object|1,749,101|874652|
|Function returning empty array|1,772,475|887711|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:13:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Function returning null","opsSec":1926490.7718849909,"samples":963453},{"name":"Function returning explicitly undefined","opsSec":1858048.988036151,"samples":930461},{"name":"Function returning implicitly undefined","opsSec":1708379.949588547,"samples":854225},{"name":"Function returning string","opsSec":1866335.8507523458,"samples":933451},{"name":"Function returning integer","opsSec":1733730.2353193199,"samples":866880},{"name":"Function returning float","opsSec":1858100.8053881184,"samples":929478},{"name":"Function returning functions","opsSec":1818245.4148636037,"samples":909586},{"name":"Function returning arrow functions","opsSec":1735588.4923340366,"samples":867868},{"name":"Function returning empty object","opsSec":1749101.6044569416,"samples":874652},{"name":"Function returning empty array","opsSec":1772475.5076151607,"samples":887711}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|92,192,714|46096460|
|using Array.includes (first item)|82,169,994|41085002|
|Using raw comparison|99,624,251|49812131|
|Using raw comparison (first item)|99,706,392|49853202|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:15:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":92192714.7790169,"samples":46096460},{"name":"using Array.includes (first item)","opsSec":82169994.13960071,"samples":41085002},{"name":"Using raw comparison","opsSec":99624251.43982933,"samples":49812131},{"name":"Using raw comparison (first item)","opsSec":99706392.03523296,"samples":49853202}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|49,036,589|24521916|
|Using Object.getOwnPropertyNames()|41,561,813|20812793|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:16:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using Object.keys()","opsSec":49036589.491878405,"samples":24521916},{"name":"Using Object.getOwnPropertyNames()","opsSec":41561813.22129874,"samples":20812793}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|131,081,537|65540792|
|Length = 10_000 - Array.at|97,857,346|49008243|
|Length = 1_000_000 - Array.at|97,742,413|48871227|
|Length = 100 - Array[length - 1]|98,712,758|49366822|
|Length = 10_000 - Array[length - 1]|98,323,969|49162033|
|Length = 1_000_000 - Array[length - 1]|96,703,460|48354152|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:17:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":131081537.07280971,"samples":65540792},{"name":"Length = 10_000 - Array.at","opsSec":97857346.27348153,"samples":49008243},{"name":"Length = 1_000_000 - Array.at","opsSec":97742413.92561029,"samples":48871227},{"name":"Length = 100 - Array[length - 1]","opsSec":98712758.74935484,"samples":49366822},{"name":"Length = 10_000 - Array[length - 1]","opsSec":98323969.44586201,"samples":49162033},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":96703460.12368241,"samples":48354152}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|138,961,287|69483505|
|~ (small)|96,156,888|48078872|
|Math.floor (long)|98,592,829|49312884|
|~ (long)|95,472,506|47741867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:18:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":138961287.8520888,"samples":69483505},{"name":"~ (small)","opsSec":96156888.78063118,"samples":48078872},{"name":"Math.floor (long)","opsSec":98592829.71307814,"samples":49312884},{"name":"~ (long)","opsSec":95472506.81508859,"samples":47741867}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,586,636|21306387|
|Object.create({})|1,952,616|983951|
|Cached Empty.prototype|73,515,860|36758748|
|Empty.prototype|2,397,832|1213550|
|Empty class|1,509,930|754966|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:20:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Object.create(null)","opsSec":42586636.36675663,"samples":21306387},{"name":"Object.create({})","opsSec":1952616.7520451832,"samples":983951},{"name":"Cached Empty.prototype","opsSec":73515860.41913739,"samples":36758748},{"name":"Empty.prototype","opsSec":2397832.715674309,"samples":1213550},{"name":"Empty class","opsSec":1509930.556506388,"samples":754966}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|145,835,956|72918530|
|Using optional chain (obj.field?.field2) (undefined)|99,021,733|49510872|
|Using and operator (obj.field && obj.field.field2) (Valid)|98,400,632|49200342|
|Using and operator (obj.field && obj.field.field2) (undefined)|98,924,022|49462695|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:21:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":145835956.02181292,"samples":72918530},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":99021733.89978315,"samples":49510872},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":98400632.4380686,"samples":49200342},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":98924022.27646801,"samples":49462695}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|136,529,625|68267206|
|Using parseInt(x, 10) - big number (10 len)|97,121,606|48561689|
|Using + - small number (2 len)|92,679,462|46363940|
|Using + - big number (10 len)|96,166,195|48083144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:22:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":136529625.54438767,"samples":68267206},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97121606.11341806,"samples":48561689},{"name":"Using + - small number (2 len)","opsSec":92679462.76577976,"samples":46363940},{"name":"Using + - big number (10 len)","opsSec":96166195.87278436,"samples":48083144}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|962,415|481221|
|Using ? operator to avoid rejection|1,025,993|515879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:23:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using if to check function existence","opsSec":962415.2737278485,"samples":481221},{"name":"Using ? operator to avoid rejection","opsSec":1025993.0435834368,"samples":515879}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|135,881,932|67942180|
|Raw usage underscore usage|98,821,632|49410825|
|Manipulating private properties using #|96,267,213|48133615|
|Manipulating private properties using underscore(_)|98,311,292|49194032|
|Manipulating private properties using Symbol|97,176,293|48588958|
|Manipulating private properties using PrivateSymbol|35,622,437|17813540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:24:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Raw usage private field","opsSec":135881932.0616379,"samples":67942180},{"name":"Raw usage underscore usage","opsSec":98821632.80503589,"samples":49410825},{"name":"Manipulating private properties using #","opsSec":96267213.2495049,"samples":48133615},{"name":"Manipulating private properties using underscore(_)","opsSec":98311292.71152157,"samples":49194032},{"name":"Manipulating private properties using Symbol","opsSec":97176293.93330167,"samples":48588958},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35622437.04280072,"samples":17813540}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,077,968|4039040|
|Adding property in the object creation - small object|7,528,168|3797190|
|Adding property after the function creation - small class|249,619|125148|
|Adding property in the function creation - small class|271,863|135932|
|Adding property after the class creation - small class|258,211|129530|
|Adding property in the class creation - small class|259,234|132556|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:26:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8077968.394788657,"samples":4039040},{"name":"Adding property in the object creation - small object","opsSec":7528168.926195527,"samples":3797190},{"name":"Adding property after the function creation - small class","opsSec":249619.1242955101,"samples":125148},{"name":"Adding property in the function creation - small class","opsSec":271863.07240319694,"samples":135932},{"name":"Adding property after the class creation - small class","opsSec":258211.04752089563,"samples":129530},{"name":"Adding property in the class creation - small class","opsSec":259234.2172019496,"samples":132556}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|150,277,841|75171410|
|Getter|51,307,048|25659764|
|Method|100,763,960|50389402|
|DefineProperty (getter)|98,660,471|49330276|
|DefineProperty (getter & enumerable=false)|50,087,425|25044953|
|DefineProperty (getter & configurable=false)|97,355,154|48677653|
|DefineProperty (getter & enumerable=false & configurable=false)|51,476,272|25773810|
|DefineProperty (writable)|99,292,951|49647351|
|DefineProperty (writable & enumerable=false)|99,082,142|49541103|
|DefineProperty (writable & enumerable=false & configurable=false)|98,473,294|49241307|
|DefineProperties (getter)|49,285,533|24643112|
|DefineProperties (getter & enumerable=false)|49,379,727|24695435|
|DefineProperties (getter & enumerable=false & configurable=false)|51,477,071|25738748|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:28:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Getter (class)","opsSec":150277841.66459835,"samples":75171410},{"name":"Getter","opsSec":51307048.27880486,"samples":25659764},{"name":"Method","opsSec":100763960.66248272,"samples":50389402},{"name":"DefineProperty (getter)","opsSec":98660471.29573448,"samples":49330276},{"name":"DefineProperty (getter & enumerable=false)","opsSec":50087425.470341004,"samples":25044953},{"name":"DefineProperty (getter & configurable=false)","opsSec":97355154.32066958,"samples":48677653},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51476272.75348567,"samples":25773810},{"name":"DefineProperty (writable)","opsSec":99292951.66384807,"samples":49647351},{"name":"DefineProperty (writable & enumerable=false)","opsSec":99082142.58742873,"samples":49541103},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":98473294.88126561,"samples":49241307},{"name":"DefineProperties (getter)","opsSec":49285533.0168271,"samples":24643112},{"name":"DefineProperties (getter & enumerable=false)","opsSec":49379727.95818351,"samples":24695435},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":51477071.52006825,"samples":25738748}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|120,914,193|60467040|
|Setter|10,922,153|5461549|
|Method|80,219,166|40110265|
|DefineProperty (setter)|82,091,910|41045961|
|DefineProperty (setter & enumerable=false)|10,820,384|5410195|
|DefineProperty (setter & configurable=false)|11,026,152|5513079|
|DefineProperty (setter & enumerable=false & configurable=false)|10,865,002|5432505|
|DefineProperty (writable)|57,544,427|28774877|
|DefineProperty (writable & enumerable=false)|82,988,435|41494464|
|DefineProperty (writable & enumerable=false & configurable=false)|82,750,662|41377334|
|DefineProperties (setter)|79,515,602|39760345|
|DefineProperties (setter & enumerable=false)|10,808,961|5404486|
|DefineProperties (setter & enumerable=false & configurable=false)|10,745,003|5372522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:29:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Setter (class)","opsSec":120914193.00084876,"samples":60467040},{"name":"Setter","opsSec":10922153.190060448,"samples":5461549},{"name":"Method","opsSec":80219166.75548016,"samples":40110265},{"name":"DefineProperty (setter)","opsSec":82091910.83550014,"samples":41045961},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10820384.4383224,"samples":5410195},{"name":"DefineProperty (setter & configurable=false)","opsSec":11026152.99412654,"samples":5513079},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10865002.78563815,"samples":5432505},{"name":"DefineProperty (writable)","opsSec":57544427.80285142,"samples":28774877},{"name":"DefineProperty (writable & enumerable=false)","opsSec":82988435.71259935,"samples":41494464},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":82750662.53693056,"samples":41377334},{"name":"DefineProperties (setter)","opsSec":79515602.59174618,"samples":39760345},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10808961.19103881,"samples":5404486},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10745003.147498034,"samples":5372522}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,327,761|1664123|
|Using replaceAll()|3,173,138|1586727|
|Using replaceAll(//g)|2,954,547|1477275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:30:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using replace(//g)","opsSec":3327761.670910892,"samples":1664123},{"name":"Using replaceAll()","opsSec":3173138.1267920304,"samples":1586727},{"name":"Using replaceAll(//g)","opsSec":2954547.612725529,"samples":1477275}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,866,701|11934262|
|{ ...object, __proto__: null }|2,542,283|1272917|
|{ ...object, newProp: true }|20,859,609|10429888|
|structuredClone|296,628|148329|
|JSON.parse + JSON.stringify|296,454|148228|
|loop + object.keys starting with {}|1,625,988|813079|
|loop + object.keys starting with { __proto__: null }|898,386|451373|
|loop + object.keys starting with { randomProp: true }|655,443|327751|
|object.keys + reduce(FN, {})|1,706,517|853313|
|object.keys + reduce(FN, { __proto__: null })|922,009|461012|
|object.keys + reduce(FN, { newProp: true })|648,998|324507|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:31:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{ ...object }","opsSec":23866701.25229196,"samples":11934262},{"name":"{ ...object, __proto__: null }","opsSec":2542283.6652694796,"samples":1272917},{"name":"{ ...object, newProp: true }","opsSec":20859609.33172144,"samples":10429888},{"name":"structuredClone","opsSec":296628.6414768385,"samples":148329},{"name":"JSON.parse + JSON.stringify","opsSec":296454.8420473869,"samples":148228},{"name":"loop + object.keys starting with {}","opsSec":1625988.4711900167,"samples":813079},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":898386.8705846079,"samples":451373},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":655443.5134644065,"samples":327751},{"name":"object.keys + reduce(FN, {})","opsSec":1706517.8545505214,"samples":853313},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":922009.0487012663,"samples":461012},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":648998.0670974527,"samples":324507}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|306,352|153177|
|Sort using first char|1,291,047|645916|
|Sort using localeCompare|1,179,265|589723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:33:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Sort using default","opsSec":306352.29423042573,"samples":153177},{"name":"Sort using first char","opsSec":1291047.985289973,"samples":645916},{"name":"Sort using localeCompare","opsSec":1179265.942600288,"samples":589723}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,699|850|
|{...smallObject} - Total keys: 2|55,195,465|27598245|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,027|514|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,554|3278|
|{ ...bigObject, ...anotherBigObject }|1,078|540|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,618,800|6309516|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,351,755|14175881|
|{ ...smallObject, ...anotherSmallObject }|20,053,238|10029196|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:34:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1699.2220213928374,"samples":850},{"name":"{...smallObject} - Total keys: 2","opsSec":55195465.57215898,"samples":27598245},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1027.81267497311,"samples":514},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6554.830434715195,"samples":3278},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1078.1936547297107,"samples":540},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12618800.243114736,"samples":6309516},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28351755.025468268,"samples":14175881},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20053238.798906412,"samples":10029196}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|1,787|894|
|streams.web.Readable reading 1e3 * "some data"|1,705|854|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:35:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":1787.6836872483782,"samples":894},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1705.0287589137392,"samples":854}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|9,073|4537|
|streams.web.WritableStream writing 1e3 * "some data"|1,167|587|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:34:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":9073.64251663213,"samples":4537},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1167.8488954892005,"samples":587}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|151,379,167|76493231|
|Using backtick (`)|97,593,092|48799515|
|Using array.join|9,622,591|4811298|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:36:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using + sign","opsSec":151379167.0511015,"samples":76493231},{"name":"Using backtick (`)","opsSec":97593092.43625619,"samples":48799515},{"name":"Using array.join","opsSec":9622591.785304798,"samples":4811298}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|117,624,065|58812855|
|(short string) (true) String#slice and strict comparison|58,119,139|29118941|
|(long string) (true) String#endsWith|64,066,240|32033338|
|(long string) (true) String#slice and strict comparison|52,563,643|26281827|
|(short string) (false) String#endsWith|93,197,191|46602604|
|(short string) (false) String#slice and strict comparison|58,106,310|29053166|
|(long string) (false) String#endsWith|87,657,892|43839787|
|(long string) (false) String#slice and strict comparison|52,471,463|26236720|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:38:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":117624065.61556269,"samples":58812855},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58119139.48355083,"samples":29118941},{"name":"(long string) (true) String#endsWith","opsSec":64066240.60582884,"samples":32033338},{"name":"(long string) (true) String#slice and strict comparison","opsSec":52563643.066762246,"samples":26281827},{"name":"(short string) (false) String#endsWith","opsSec":93197191.73674995,"samples":46602604},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58106310.26823995,"samples":29053166},{"name":"(long string) (false) String#endsWith","opsSec":87657892.34627551,"samples":43839787},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52471463.190095775,"samples":26236720}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|132,346,169|66174322|
|Using indexof|14,758,714|7379412|
|Using RegExp.test|12,288,834|6145173|
|Using RegExp.text with cached regex pattern|13,388,675|6705020|
|Using new RegExp.test|4,746,172|2373371|
|Using new RegExp.test with cached regex pattern|5,303,883|2651943|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:40:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using includes","opsSec":132346169.9206995,"samples":66174322},{"name":"Using indexof","opsSec":14758714.077097552,"samples":7379412},{"name":"Using RegExp.test","opsSec":12288834.006441517,"samples":6145173},{"name":"Using RegExp.text with cached regex pattern","opsSec":13388675.850609291,"samples":6705020},{"name":"Using new RegExp.test","opsSec":4746172.098639084,"samples":2373371},{"name":"Using new RegExp.test with cached regex pattern","opsSec":5303883.040433263,"samples":2651943}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|92,636,791|46529592|
|(short string) (true) String#slice and strict comparison|47,912,546|23958605|
|(long string) (true) String#startsWith|53,203,374|26601699|
|(long string) (true) String#slice and strict comparison|45,979,155|23035563|
|(short string) (false) String#startsWith|83,678,157|41918209|
|(short string) (false) String#slice and strict comparison|43,105,363|21553190|
|(long string) (false) String#startsWith|68,142,843|34080923|
|(long string) (false) String#slice and strict comparison|45,795,408|22897716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:42:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":92636791.91067018,"samples":46529592},{"name":"(short string) (true) String#slice and strict comparison","opsSec":47912546.1927536,"samples":23958605},{"name":"(long string) (true) String#startsWith","opsSec":53203374.80332858,"samples":26601699},{"name":"(long string) (true) String#slice and strict comparison","opsSec":45979155.642176874,"samples":23035563},{"name":"(short string) (false) String#startsWith","opsSec":83678157.50071889,"samples":41918209},{"name":"(short string) (false) String#slice and strict comparison","opsSec":43105363.05827473,"samples":21553190},{"name":"(long string) (false) String#startsWith","opsSec":68142843.14161877,"samples":34080923},{"name":"(long string) (false) String#slice and strict comparison","opsSec":45795408.827523135,"samples":22897716}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|107,417,805|53868982|
|Using this|80,819,079|40907121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:44:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using super","opsSec":107417805.87409908,"samples":53868982},{"name":"Using this","opsSec":80819079.49737228,"samples":40907121}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,328,447|3665418|
|Date.now()|15,048,480|7536167|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:46:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7328447.702864323,"samples":3665418},{"name":"Date.now()","opsSec":15048480.262675148,"samples":7536167}]}-->
