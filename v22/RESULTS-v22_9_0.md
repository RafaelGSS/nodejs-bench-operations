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
|Length = 100 - Array.at|105,828,079|53962188|
|Length = 10_000 - Array.at|70,841,071|36094916|
|Length = 1_000_000 - Array.at|87,644,818|44059099|
|Length = 100 - Array[length - 1]|90,065,716|45032916|
|Length = 10_000 - Array[length - 1]|87,240,174|43620141|
|Length = 1_000_000 - Array[length - 1]|90,156,675|45257749|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:09:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":105828079.43032363,"samples":53962188},{"name":"Length = 10_000 - Array.at","opsSec":70841071.83154204,"samples":36094916},{"name":"Length = 1_000_000 - Array.at","opsSec":87644818.1702635,"samples":44059099},{"name":"Length = 100 - Array[length - 1]","opsSec":90065716.175489,"samples":45032916},{"name":"Length = 10_000 - Array[length - 1]","opsSec":87240174.86906527,"samples":43620141},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":90156675.51333703,"samples":45257749}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|137,670,311|68856309|
|~ (small)|98,597,539|49315322|
|Math.floor (long)|97,263,164|48933368|
|~ (long)|99,263,858|49640842|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:11:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":137670311.63789305,"samples":68856309},{"name":"~ (small)","opsSec":98597539.48172885,"samples":49315322},{"name":"Math.floor (long)","opsSec":97263164.95576145,"samples":48933368},{"name":"~ (long)","opsSec":99263858.1963451,"samples":49640842}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|42,429,518|21244475|
|Object.create({})|1,961,724|993925|
|Cached Empty.prototype|110,933,554|55501858|
|Empty.prototype|2,550,927|1283929|
|Empty class|1,564,183|791496|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:13:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Object.create(null)","opsSec":42429518.21011177,"samples":21244475},{"name":"Object.create({})","opsSec":1961724.781230803,"samples":993925},{"name":"Cached Empty.prototype","opsSec":110933554.7421007,"samples":55501858},{"name":"Empty.prototype","opsSec":2550927.413129383,"samples":1283929},{"name":"Empty class","opsSec":1564183.2315907858,"samples":791496}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|139,460,201|69761977|
|Using optional chain (obj.field?.field2) (undefined)|95,535,644|47767832|
|Using and operator (obj.field && obj.field.field2) (Valid)|91,074,334|45537977|
|Using and operator (obj.field && obj.field.field2) (undefined)|95,337,277|47668647|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:15:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":139460201.16364005,"samples":69761977},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":95535644.12858604,"samples":47767832},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":91074334.88047451,"samples":45537977},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":95337277.60198826,"samples":47668647}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,119,519|70563201|
|Using parseInt(x, 10) - big number (10 len)|94,911,125|47455568|
|Using + - small number (2 len)|96,387,491|48208840|
|Using + - big number (10 len)|97,375,006|48708328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:18:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141119519.3188038,"samples":70563201},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":94911125.36995396,"samples":47455568},{"name":"Using + - small number (2 len)","opsSec":96387491.05225247,"samples":48208840},{"name":"Using + - big number (10 len)","opsSec":97375006.56744097,"samples":48708328}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|806,428|405974|
|Using ? operator to avoid rejection|810,866|405435|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:20:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using if to check function existence","opsSec":806428.541777229,"samples":405974},{"name":"Using ? operator to avoid rejection","opsSec":810866.8084282421,"samples":405435}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|140,017,210|70016698|
|Raw usage underscore usage|94,948,442|47528231|
|Manipulating private properties using #|94,166,215|47085726|
|Manipulating private properties using underscore(_)|95,513,667|47762068|
|Manipulating private properties using Symbol|95,540,151|47774807|
|Manipulating private properties using PrivateSymbol|36,073,589|18036815|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:22:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Raw usage private field","opsSec":140017210.85052896,"samples":70016698},{"name":"Raw usage underscore usage","opsSec":94948442.57502632,"samples":47528231},{"name":"Manipulating private properties using #","opsSec":94166215.22843872,"samples":47085726},{"name":"Manipulating private properties using underscore(_)","opsSec":95513667.12900065,"samples":47762068},{"name":"Manipulating private properties using Symbol","opsSec":95540151.32125254,"samples":47774807},{"name":"Manipulating private properties using PrivateSymbol","opsSec":36073589.02040287,"samples":18036815}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,697,006|3848613|
|Adding property in the object creation - small object|7,520,602|3763677|
|Adding property after the function creation - small class|253,247|126832|
|Adding property in the function creation - small class|276,381|138193|
|Adding property after the class creation - small class|265,444|132728|
|Adding property in the class creation - small class|265,047|132535|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:26:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7697006.465981577,"samples":3848613},{"name":"Adding property in the object creation - small object","opsSec":7520602.99535037,"samples":3763677},{"name":"Adding property after the function creation - small class","opsSec":253247.5855016548,"samples":126832},{"name":"Adding property in the function creation - small class","opsSec":276381.461816397,"samples":138193},{"name":"Adding property after the class creation - small class","opsSec":265444.22807937313,"samples":132728},{"name":"Adding property in the class creation - small class","opsSec":265047.91037705337,"samples":132535}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|150,356,478|75229986|
|Getter|51,075,879|25537946|
|Method|100,857,894|50429144|
|DefineProperty (getter)|97,177,270|48588728|
|DefineProperty (getter & enumerable=false)|51,519,323|25764604|
|DefineProperty (getter & configurable=false)|98,757,004|49391127|
|DefineProperty (getter & enumerable=false & configurable=false)|51,717,099|25858671|
|DefineProperty (writable)|96,710,863|48357097|
|DefineProperty (writable & enumerable=false)|98,894,402|49453504|
|DefineProperty (writable & enumerable=false & configurable=false)|99,425,982|49713116|
|DefineProperties (getter)|50,959,804|25480439|
|DefineProperties (getter & enumerable=false)|49,659,957|24829985|
|DefineProperties (getter & enumerable=false & configurable=false)|49,906,602|24953303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:54:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Getter (class)","opsSec":150356478.62863034,"samples":75229986},{"name":"Getter","opsSec":51075879.8439406,"samples":25537946},{"name":"Method","opsSec":100857894.65421084,"samples":50429144},{"name":"DefineProperty (getter)","opsSec":97177270.7801219,"samples":48588728},{"name":"DefineProperty (getter & enumerable=false)","opsSec":51519323.502592795,"samples":25764604},{"name":"DefineProperty (getter & configurable=false)","opsSec":98757004.20419309,"samples":49391127},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":51717099.55023731,"samples":25858671},{"name":"DefineProperty (writable)","opsSec":96710863.8581139,"samples":48357097},{"name":"DefineProperty (writable & enumerable=false)","opsSec":98894402.1283495,"samples":49453504},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99425982.44078407,"samples":49713116},{"name":"DefineProperties (getter)","opsSec":50959804.27692388,"samples":25480439},{"name":"DefineProperties (getter & enumerable=false)","opsSec":49659957.68433049,"samples":24829985},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":49906602.60635102,"samples":24953303}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|123,729,015|61908175|
|Setter|11,143,180|5571594|
|Method|87,591,882|43797531|
|DefineProperty (setter)|91,729,128|45868908|
|DefineProperty (setter & enumerable=false)|11,336,056|5668030|
|DefineProperty (setter & configurable=false)|11,426,800|5713405|
|DefineProperty (setter & enumerable=false & configurable=false)|11,351,999|5676001|
|DefineProperty (writable)|91,801,036|45900529|
|DefineProperty (writable & enumerable=false)|91,697,635|45857194|
|DefineProperty (writable & enumerable=false & configurable=false)|85,461,439|42731530|
|DefineProperties (setter)|91,635,786|45825285|
|DefineProperties (setter & enumerable=false)|11,283,759|5641881|
|DefineProperties (setter & enumerable=false & configurable=false)|11,123,529|5561767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:00:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Setter (class)","opsSec":123729015.62686174,"samples":61908175},{"name":"Setter","opsSec":11143180.868364243,"samples":5571594},{"name":"Method","opsSec":87591882.06431353,"samples":43797531},{"name":"DefineProperty (setter)","opsSec":91729128.33425547,"samples":45868908},{"name":"DefineProperty (setter & enumerable=false)","opsSec":11336056.440478278,"samples":5668030},{"name":"DefineProperty (setter & configurable=false)","opsSec":11426800.218659014,"samples":5713405},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":11351999.45715212,"samples":5676001},{"name":"DefineProperty (writable)","opsSec":91801036.51855744,"samples":45900529},{"name":"DefineProperty (writable & enumerable=false)","opsSec":91697635.57556142,"samples":45857194},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":85461439.82202385,"samples":42731530},{"name":"DefineProperties (setter)","opsSec":91635786.0320963,"samples":45825285},{"name":"DefineProperties (setter & enumerable=false)","opsSec":11283759.156492693,"samples":5641881},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":11123529.639576381,"samples":5561767}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,279,966|1640114|
|Using replaceAll()|3,021,909|1513390|
|Using replaceAll(//g)|2,732,039|1366020|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:12:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using replace(//g)","opsSec":3279966.094707337,"samples":1640114},{"name":"Using replaceAll()","opsSec":3021909.727100679,"samples":1513390},{"name":"Using replaceAll(//g)","opsSec":2732039.366166867,"samples":1366020}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|23,814,769|11929371|
|{ ...object, __proto__: null }|2,551,133|1275568|
|{ ...object, newProp: true }|19,539,205|9769604|
|structuredClone|297,957|148980|
|JSON.parse + JSON.stringify|296,619|148310|
|loop + object.keys starting with {}|1,630,553|815278|
|loop + object.keys starting with { __proto__: null }|884,430|442216|
|loop + object.keys starting with { randomProp: true }|659,847|330008|
|object.keys + reduce(FN, {})|1,726,340|863171|
|object.keys + reduce(FN, { __proto__: null })|912,837|456420|
|object.keys + reduce(FN, { newProp: true })|681,810|340906|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:24:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{ ...object }","opsSec":23814769.45708366,"samples":11929371},{"name":"{ ...object, __proto__: null }","opsSec":2551133.158037662,"samples":1275568},{"name":"{ ...object, newProp: true }","opsSec":19539205.88976576,"samples":9769604},{"name":"structuredClone","opsSec":297957.88032763934,"samples":148980},{"name":"JSON.parse + JSON.stringify","opsSec":296619.778128406,"samples":148310},{"name":"loop + object.keys starting with {}","opsSec":1630553.8052745783,"samples":815278},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":884430.1709984065,"samples":442216},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":659847.9604789926,"samples":330008},{"name":"object.keys + reduce(FN, {})","opsSec":1726340.795014125,"samples":863171},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":912837.9022985004,"samples":456420},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":681810.2177480907,"samples":340906}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|301,477|151593|
|Sort using first char|1,276,433|638254|
|Sort using localeCompare|1,198,331|599233|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:27:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Sort using default","opsSec":301477.5904084047,"samples":151593},{"name":"Sort using first char","opsSec":1276433.3899154926,"samples":638254},{"name":"Sort using localeCompare","opsSec":1198331.2692187391,"samples":599233}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,883|942|
|{...smallObject} - Total keys: 2|59,327,751|29664361|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,065|533|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,630|3316|
|{ ...bigObject, ...anotherBigObject }|1,127|564|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,489,543|6744772|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,143,705|14083750|
|{ ...smallObject, ...anotherSmallObject }|19,285,009|9666678|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:30:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1883.8986989991574,"samples":942},{"name":"{...smallObject} - Total keys: 2","opsSec":59327751.75394782,"samples":29664361},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1065.468976654849,"samples":533},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6630.694548857221,"samples":3316},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1127.5164307531784,"samples":564},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13489543.676250951,"samples":6744772},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28143705.84760373,"samples":14083750},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19285009.868779678,"samples":9666678}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,000|1001|
|streams.web.Readable reading 1e3 * "some data"|1,999|1003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:31:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2000.3302243452276,"samples":1001},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1999.8914794679345,"samples":1003}]}-->

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
