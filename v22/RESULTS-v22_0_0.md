## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,705,095|7852548|
|Using dot notation|15,763,733|7881867|
|Using define property (writable)|3,426,453|1713227|
|Using define property initialized (writable)|4,453,786|2226894|
|Using define property (getter)|2,236,901|1118451|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:40:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15705095.277583892,"samples":7852548},{"name":"Using dot notation","opsSec":15763733.211811867,"samples":7881867},{"name":"Using define property (writable)","opsSec":3426453.458624022,"samples":1713227},{"name":"Using define property initialized (writable)","opsSec":4453786.298675693,"samples":2226894},{"name":"Using define property (getter)","opsSec":2236901.870270471,"samples":1118451}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.022ms
new Array(length)|100|0.009ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.301ms
new Array(length)|10,000|0.144ms
array.push|1,000,000|22.458ms
new Array(length)|1,000,000|15.12ms
array.push|100,000,000|2,028.027ms
new Array(length)|100,000,000|4,163.194ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.015ms
new Array(length)|100|0.012ms
array.push|1,000|0.036ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.522ms
new Array(length)|10,000|0.301ms
array.push|1,000,000|18.075ms
new Array(length)|1,000,000|6.567ms
array.push|100,000,000|2,638.877ms
new Array(length)|100,000,000|4,126.416ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|248|125|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:50:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":248.6008278041626,"samples":125},{"name":"Array.from","opsSec":23.978964597180926,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|5,827|2914|
|new Blob (1024)|789|395|
|text (128)|6,496|3249|
|text (1024)|828|415|
|arrayBuffer (128)|6,502|3252|
|arrayBuffer (1024)|810|406|
|slice (0, 64)|247,613|130524|
|slice (0, 512)|38,619|19310|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:55:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Blob (128)","opsSec":5827.352767582675,"samples":2914},{"name":"new Blob (1024)","opsSec":789.0291989883241,"samples":395},{"name":"text (128)","opsSec":6496.429527140306,"samples":3249},{"name":"text (1024)","opsSec":828.7488064344759,"samples":415},{"name":"arrayBuffer (128)","opsSec":6502.5312992655445,"samples":3252},{"name":"arrayBuffer (1024)","opsSec":810.3278673771508,"samples":406},{"name":"slice (0, 64)","opsSec":247613.37013558764,"samples":130524},{"name":"slice (0, 512)","opsSec":38619.80303899978,"samples":19310}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|314,795|157398|
|[True conditional] Using constructor name|337,261|168631|
|[True conditional] Check if property is valid then instanceof |338,766|169384|
|[False conditional] Using instanceof only|15,712,899|7856450|
|[False conditional] Using constructor name|16,053,813|8026907|
|[False conditional] Check if property is valid then instanceof |16,127,846|8063924|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:01:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":314795.4352570501,"samples":157398},{"name":"[True conditional] Using constructor name","opsSec":337261.9419908849,"samples":168631},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":338766.77976208954,"samples":169384},{"name":"[False conditional] Using instanceof only","opsSec":15712899.842923226,"samples":7856450},{"name":"[False conditional] Using constructor name","opsSec":16053813.38995474,"samples":8026907},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16127846.064704522,"samples":8063924}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,265|3633|
|crypto.verify('RSA-SHA256')|7,274|3638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:05:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7265.274387985777,"samples":3633},{"name":"crypto.verify('RSA-SHA256')","opsSec":7274.6880391108725,"samples":3638}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,351,891|675946|
|fromUnixToISOString(new Date())|2,012,034|1006018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:09:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1351891.1456045606,"samples":675946},{"name":"fromUnixToISOString(new Date())","opsSec":2012034.4789022636,"samples":1006018}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,447|8724|
|Intl.DateTimeFormat().format(new Date())|15,869|7935|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,506|11254|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,613|10807|
|Reusing Intl.DateTimeFormat()|788,910|394456|
|Date.toLocaleDateString()|779,615|389808|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|24,409|12205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:13:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17447.783089160628,"samples":8724},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":15869.821972337135,"samples":7935},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22506.608551434158,"samples":11254},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21613.392577214636,"samples":10807},{"name":"Reusing Intl.DateTimeFormat()","opsSec":788910.6872523248,"samples":394456},{"name":"Date.toLocaleDateString()","opsSec":779615.3108202708,"samples":389808},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":24409.059030773627,"samples":12205}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,040,296|520149|
|Using brackets {}|1,067,494|533748|
|Using '' + |1,061,747|530874|
|Using date.toString()|1,170,445|585223|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:18:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1040296.3459289043,"samples":520149},{"name":"Using brackets {}","opsSec":1067494.704061443,"samples":533748},{"name":"Using '' + ","opsSec":1061747.6390056487,"samples":530874},{"name":"Using date.toString()","opsSec":1170445.5856636467,"samples":585223}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,382,956|1691479|
|Using delete property (proto: null)|8,725,931|4362966|
|Using delete property (cached proto: null)|3,306,092|1653047|
|Using undefined assignment|16,169,016|8084509|
|Using undefined assignment (proto: null)|8,391,363|4195682|
|Using undefined property (cached proto: null)|15,963,507|7981754|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:24:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3382956.8700916525,"samples":1691479},{"name":"Using delete property (proto: null)","opsSec":8725931.389189262,"samples":4362966},{"name":"Using delete property (cached proto: null)","opsSec":3306092.4196848706,"samples":1653047},{"name":"Using undefined assignment","opsSec":16169016.674122745,"samples":8084509},{"name":"Using undefined assignment (proto: null)","opsSec":8391363.664323574,"samples":4195682},{"name":"Using undefined property (cached proto: null)","opsSec":15963507.361459142,"samples":7981754}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|312,572|156287|
|NodeError|310,910|155456|
|NodeError Range|322,745|161373|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:28:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":312572.312109499,"samples":156287},{"name":"NodeError","opsSec":310910.80672435486,"samples":155456},{"name":"NodeError Range","opsSec":322745.5823672438,"samples":161373}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,675,461|837731|
|Function returning explicitly undefined|1,684,392|842197|
|Function returning implicitly undefined|1,695,872|847937|
|Function returning string|1,673,905|836953|
|Function returning integer|1,710,044|855023|
|Function returning float|1,709,287|854644|
|Function returning functions|1,656,490|828246|
|Function returning arrow functions|1,666,302|833152|
|Function returning empty object|1,686,007|843004|
|Function returning empty array|1,695,008|847505|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:33:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1675461.5576777735,"samples":837731},{"name":"Function returning explicitly undefined","opsSec":1684392.6289036234,"samples":842197},{"name":"Function returning implicitly undefined","opsSec":1695872.1955913282,"samples":847937},{"name":"Function returning string","opsSec":1673905.1831345984,"samples":836953},{"name":"Function returning integer","opsSec":1710044.0950098818,"samples":855023},{"name":"Function returning float","opsSec":1709287.3367967336,"samples":854644},{"name":"Function returning functions","opsSec":1656490.24080729,"samples":828246},{"name":"Function returning arrow functions","opsSec":1666302.896910258,"samples":833152},{"name":"Function returning empty object","opsSec":1686007.8752330747,"samples":843004},{"name":"Function returning empty array","opsSec":1695008.2507537296,"samples":847505}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|14,870,555|7435278|
|using Array.includes (first item)|15,419,409|7709705|
|Using raw comparison|16,256,761|8128381|
|Using raw comparison (first item)|16,125,230|8062616|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:40:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":14870555.048295353,"samples":7435278},{"name":"using Array.includes (first item)","opsSec":15419409.907481967,"samples":7709705},{"name":"Using raw comparison","opsSec":16256761.60984504,"samples":8128381},{"name":"Using raw comparison (first item)","opsSec":16125230.806764489,"samples":8062616}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,814,502|6907252|
|Using Object.getOwnPropertyNames()|14,063,295|7031648|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:45:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":13814502.839588862,"samples":6907252},{"name":"Using Object.getOwnPropertyNames()","opsSec":14063295.606223062,"samples":7031648}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,422,054|7711028|
|Length = 10_000 - Array.at|15,396,782|7698392|
|Length = 1_000_000 - Array.at|14,346,483|7173242|
|Length = 100 - Array[length - 1]|15,651,038|7825520|
|Length = 10_000 - Array[length - 1]|15,020,516|7510259|
|Length = 1_000_000 - Array[length - 1]|14,592,298|7296150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:52:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15422054.550317124,"samples":7711028},{"name":"Length = 10_000 - Array.at","opsSec":15396782.36790674,"samples":7698392},{"name":"Length = 1_000_000 - Array.at","opsSec":14346483.770399973,"samples":7173242},{"name":"Length = 100 - Array[length - 1]","opsSec":15651038.466134852,"samples":7825520},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15020516.828360932,"samples":7510259},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14592298.861783847,"samples":7296150}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|13,108,316|6554159|
|Object.create({})|1,728,506|864254|
|Cached Empty.prototype|16,017,800|8008901|
|Empty.prototype|2,605,788|1309439|
|Empty class|1,520,127|760064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:58:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Object.create(null)","opsSec":13108316.767814295,"samples":6554159},{"name":"Object.create({})","opsSec":1728506.9594414358,"samples":864254},{"name":"Cached Empty.prototype","opsSec":16017800.81467249,"samples":8008901},{"name":"Empty.prototype","opsSec":2605788.3745305245,"samples":1309439},{"name":"Empty class","opsSec":1520127.3007401654,"samples":760064}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,206,127|8103064|
|Using optional chain (obj.field?.field2) (undefined)|16,150,552|8075277|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,238,753|8119377|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,082,675|8041338|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:05:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16206127.384174433,"samples":8103064},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16150552.675667776,"samples":8075277},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16238753.058181483,"samples":8119377},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16082675.64618511,"samples":8041338}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,173,232|8086617|
|Using parseInt(x, 10) - big number (10 len)|16,195,834|8097918|
|Using + - small number (2 len)|16,268,693|8134347|
|Using + - big number (10 len)|16,215,300|8107651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:11:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16173232.479746133,"samples":8086617},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16195834.380403198,"samples":8097918},{"name":"Using + - small number (2 len)","opsSec":16268693.511888603,"samples":8134347},{"name":"Using + - big number (10 len)","opsSec":16215300.41092126,"samples":8107651}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|1,244,205|622103|
|Using ? operator to avoid rejection|1,271,877|635939|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:15:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using if to check function existence","opsSec":1244205.074311442,"samples":622103},{"name":"Using ? operator to avoid rejection","opsSec":1271877.4454616162,"samples":635939}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|15,519,210|7759606|
|Raw usage underscore usage|15,137,165|7568583|
|Manipulating private properties using #|15,871,933|7935967|
|Manipulating private properties using underscore(_)|15,918,235|7959118|
|Manipulating private properties using Symbol|15,914,140|7957071|
|Manipulating private properties using PrivateSymbol|12,774,797|6387399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:23:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Raw usage private field","opsSec":15519210.665355278,"samples":7759606},{"name":"Raw usage underscore usage","opsSec":15137165.485352088,"samples":7568583},{"name":"Manipulating private properties using #","opsSec":15871933.079383224,"samples":7935967},{"name":"Manipulating private properties using underscore(_)","opsSec":15918235.426923988,"samples":7959118},{"name":"Manipulating private properties using Symbol","opsSec":15914140.822240692,"samples":7957071},{"name":"Manipulating private properties using PrivateSymbol","opsSec":12774797.029181741,"samples":6387399}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,822,643|1911322|
|Adding property in the object creation - small object|3,973,637|1986819|
|Adding property after the function creation - small class|298,624|149313|
|Adding property in the function creation - small class|317,525|158763|
|Adding property after the class creation - small class|313,037|156520|
|Adding property in the class creation - small class|320,645|160323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:28:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3822643.9388366523,"samples":1911322},{"name":"Adding property in the object creation - small object","opsSec":3973637.086062586,"samples":1986819},{"name":"Adding property after the function creation - small class","opsSec":298624.8819484603,"samples":149313},{"name":"Adding property in the function creation - small class","opsSec":317525.9460205917,"samples":158763},{"name":"Adding property after the class creation - small class","opsSec":313037.99405253836,"samples":156520},{"name":"Adding property in the class creation - small class","opsSec":320645.1874848677,"samples":160323}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|16,085,140|8042571|
|Getter|13,879,805|6939903|
|Method|15,992,637|7996319|
|DefineProperty (getter)|16,016,061|8008031|
|DefineProperty (getter & enumerable=false)|13,167,784|6583893|
|DefineProperty (getter & configurable=false)|16,248,295|8124148|
|DefineProperty (getter & enumerable=false & configurable=false)|13,549,661|6774831|
|DefineProperty (writable)|16,151,466|8075734|
|DefineProperty (writable & enumerable=false)|16,043,768|8021885|
|DefineProperty (writable & enumerable=false & configurable=false)|16,148,930|8074466|
|DefineProperties (getter)|13,963,492|6981747|
|DefineProperties (getter & enumerable=false)|14,014,638|7007320|
|DefineProperties (getter & enumerable=false & configurable=false)|14,042,224|7021113|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:39:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Getter (class)","opsSec":16085140.230647845,"samples":8042571},{"name":"Getter","opsSec":13879805.55581926,"samples":6939903},{"name":"Method","opsSec":15992637.616128977,"samples":7996319},{"name":"DefineProperty (getter)","opsSec":16016061.32735829,"samples":8008031},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13167784.44616498,"samples":6583893},{"name":"DefineProperty (getter & configurable=false)","opsSec":16248295.317610262,"samples":8124148},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":13549661.756154213,"samples":6774831},{"name":"DefineProperty (writable)","opsSec":16151466.804809736,"samples":8075734},{"name":"DefineProperty (writable & enumerable=false)","opsSec":16043768.716464682,"samples":8021885},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":16148930.611268343,"samples":8074466},{"name":"DefineProperties (getter)","opsSec":13963492.71530764,"samples":6981747},{"name":"DefineProperties (getter & enumerable=false)","opsSec":14014638.262021929,"samples":7007320},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14042224.736487875,"samples":7021113}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|15,750,169|7875086|
|Setter|6,813,893|3406948|
|Method|16,008,473|8004237|
|DefineProperty (setter)|16,032,045|8016023|
|DefineProperty (setter & enumerable=false)|6,937,110|3468556|
|DefineProperty (setter & configurable=false)|6,958,285|3479143|
|DefineProperty (setter & enumerable=false & configurable=false)|6,488,839|3244420|
|DefineProperty (writable)|15,948,123|7974062|
|DefineProperty (writable & enumerable=false)|15,910,866|7955434|
|DefineProperty (writable & enumerable=false & configurable=false)|15,924,815|7962408|
|DefineProperties (setter)|15,879,229|7939615|
|DefineProperties (setter & enumerable=false)|6,608,576|3304289|
|DefineProperties (setter & enumerable=false & configurable=false)|6,525,841|3262921|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:52:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Setter (class)","opsSec":15750169.920971038,"samples":7875086},{"name":"Setter","opsSec":6813893.724158936,"samples":3406948},{"name":"Method","opsSec":16008473.583733656,"samples":8004237},{"name":"DefineProperty (setter)","opsSec":16032045.679292021,"samples":8016023},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6937110.459968882,"samples":3468556},{"name":"DefineProperty (setter & configurable=false)","opsSec":6958285.791253026,"samples":3479143},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6488839.506843167,"samples":3244420},{"name":"DefineProperty (writable)","opsSec":15948123.425970057,"samples":7974062},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15910866.504361141,"samples":7955434},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15924815.39498415,"samples":7962408},{"name":"DefineProperties (setter)","opsSec":15879229.555360394,"samples":7939615},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6608576.9558843,"samples":3304289},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6525841.399553064,"samples":3262921}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,811,395|1405698|
|Using replaceAll()|2,657,993|1328997|
|Using replaceAll(//g)|2,664,186|1332094|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:56:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using replace(//g)","opsSec":2811395.246545451,"samples":1405698},{"name":"Using replaceAll()","opsSec":2657993.138811498,"samples":1328997},{"name":"Using replaceAll(//g)","opsSec":2664186.129740006,"samples":1332094}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,441,113|5220557|
|{ ...object, __proto__: null }|2,228,206|1114104|
|{ ...object, newProp: true }|10,231,858|5115930|
|structuredClone|322,742|161372|
|JSON.parse + JSON.stringify|290,809|145405|
|loop + object.keys starting with {}|1,458,291|729146|
|loop + object.keys starting with { __proto__: null }|890,614|445308|
|loop + object.keys starting with { randomProp: true }|670,755|335378|
|object.keys + reduce(FN, {})|1,551,797|775899|
|object.keys + reduce(FN, { __proto__: null })|867,279|433640|
|object.keys + reduce(FN, { newProp: true })|684,316|342159|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:02:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{ ...object }","opsSec":10441113.436183002,"samples":5220557},{"name":"{ ...object, __proto__: null }","opsSec":2228206.5739462683,"samples":1114104},{"name":"{ ...object, newProp: true }","opsSec":10231858.894955682,"samples":5115930},{"name":"structuredClone","opsSec":322742.8355439741,"samples":161372},{"name":"JSON.parse + JSON.stringify","opsSec":290809.15083765966,"samples":145405},{"name":"loop + object.keys starting with {}","opsSec":1458291.4050168416,"samples":729146},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":890614.8600130501,"samples":445308},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":670755.3855887373,"samples":335378},{"name":"object.keys + reduce(FN, {})","opsSec":1551797.3016905375,"samples":775899},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":867279.9670429683,"samples":433640},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":684316.7778098261,"samples":342159}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|331,720|165861|
|Sort using first char|1,341,374|670688|
|Sort using localeCompare|1,277,133|638567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:07:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Sort using default","opsSec":331720.6379550669,"samples":165861},{"name":"Sort using first char","opsSec":1341374.2615789422,"samples":670688},{"name":"Sort using localeCompare","opsSec":1277133.80332106,"samples":638567}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,271|1136|
|{...smallObject} - Total keys: 2|12,265,164|6132583|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,460|1231|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,842|3422|
|{ ...bigObject, ...anotherBigObject }|1,349|675|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,844,688|3422345|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,162,978|5581490|
|{ ...smallObject, ...anotherSmallObject }|8,820,010|4410006|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:12:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2271.8825164113136,"samples":1136},{"name":"{...smallObject} - Total keys: 2","opsSec":12265164.62629672,"samples":6132583},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2460.243720576584,"samples":1231},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6842.425927285079,"samples":3422},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1349.1049767763159,"samples":675},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6844688.247753899,"samples":3422345},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11162978.548792602,"samples":5581490},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8820010.35947123,"samples":4410006}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,179|1090|
|streams.web.Readable reading 1e3 * "some data"|2,182|1092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:17:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2179.4485210640178,"samples":1090},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":2182.9239625594437,"samples":1092}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|15,467,722|7733862|
|Using backtick (`)|15,591,893|7795947|
|Using array.join|6,341,131|3170566|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:36:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using + sign","opsSec":15467722.917233562,"samples":7733862},{"name":"Using backtick (`)","opsSec":15591893.812899621,"samples":7795947},{"name":"Using array.join","opsSec":6341131.809785889,"samples":3170566}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|15,486,755|7743378|
|(short string) (true) String#slice and strict comparison|16,025,106|8012554|
|(long string) (true) String#endsWith|14,739,254|7369628|
|(long string) (true) String#slice and strict comparison|15,924,719|7962360|
|(short string) (false) String#endsWith|15,947,718|7973860|
|(short string) (false) String#slice and strict comparison|16,151,541|8075771|
|(long string) (false) String#endsWith|15,370,358|7685180|
|(long string) (false) String#slice and strict comparison|15,888,487|7944244|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:40:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":15486755.163709529,"samples":7743378},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16025106.10903614,"samples":8012554},{"name":"(long string) (true) String#endsWith","opsSec":14739254.437675606,"samples":7369628},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15924719.10822047,"samples":7962360},{"name":"(short string) (false) String#endsWith","opsSec":15947718.437000765,"samples":7973860},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16151541.580068942,"samples":8075771},{"name":"(long string) (false) String#endsWith","opsSec":15370358.954893073,"samples":7685180},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15888487.555083701,"samples":7944244}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,061,837|8030919|
|Using indexof|16,085,973|8042987|
|Using RegExp.test|7,857,109|3928555|
|Using RegExp.text with cached regex pattern|7,933,751|3966876|
|Using new RegExp.test|3,615,639|1807820|
|Using new RegExp.test with cached regex pattern|3,836,017|1918009|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:41:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using includes","opsSec":16061837.935747126,"samples":8030919},{"name":"Using indexof","opsSec":16085973.163487593,"samples":8042987},{"name":"Using RegExp.test","opsSec":7857109.780008541,"samples":3928555},{"name":"Using RegExp.text with cached regex pattern","opsSec":7933751.888924203,"samples":3966876},{"name":"Using new RegExp.test","opsSec":3615639.493809484,"samples":1807820},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3836017.455287137,"samples":1918009}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,712,032|7856017|
|(short string) (true) String#slice and strict comparison|14,735,224|7367613|
|(long string) (true) String#startsWith|13,732,627|6866315|
|(long string) (true) String#slice and strict comparison|15,163,498|7581750|
|(short string) (false) String#startsWith|14,987,933|7493967|
|(short string) (false) String#slice and strict comparison|15,251,660|7625831|
|(long string) (false) String#startsWith|15,552,531|7776266|
|(long string) (false) String#slice and strict comparison|16,071,017|8035509|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:44:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15712032.680186635,"samples":7856017},{"name":"(short string) (true) String#slice and strict comparison","opsSec":14735224.968521226,"samples":7367613},{"name":"(long string) (true) String#startsWith","opsSec":13732627.830271095,"samples":6866315},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15163498.423056751,"samples":7581750},{"name":"(short string) (false) String#startsWith","opsSec":14987933.940144973,"samples":7493967},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15251660.322393922,"samples":7625831},{"name":"(long string) (false) String#startsWith","opsSec":15552531.222382,"samples":7776266},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16071017.132135782,"samples":8035509}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|15,650,531|7825266|
|Using this|15,873,845|7936923|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:46:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using super","opsSec":15650531.499189904,"samples":7825266},{"name":"Using this","opsSec":15873845.841266742,"samples":7936923}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,649,671|3324836|
|Date.now()|9,506,508|4753255|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:48:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6649671.042446956,"samples":3324836},{"name":"Date.now()","opsSec":9506508.802181067,"samples":4753255}]}-->
