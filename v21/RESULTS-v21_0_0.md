## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|10,194,541|5097271|
|Using dot notation|13,545,077|6775140|
|Using define property (writable)|3,034,735|1517368|
|Using define property initialized (writable)|3,879,726|1939864|
|Using define property (getter)|1,665,947|832974|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:20:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":10194541.999836221,"samples":5097271},{"name":"Using dot notation","opsSec":13545077.770303827,"samples":6775140},{"name":"Using define property (writable)","opsSec":3034735.404906466,"samples":1517368},{"name":"Using define property initialized (writable)","opsSec":3879726.137659913,"samples":1939864},{"name":"Using define property (getter)","opsSec":1665947.7601424237,"samples":832974}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.018ms
new Array(length)|10|0.002ms
array.push|100|0.129ms
new Array(length)|100|0.016ms
array.push|1,000|0.039ms
new Array(length)|1,000|0.017ms
array.push|10,000|0.354ms
new Array(length)|10,000|0.133ms
array.push|1,000,000|26.694ms
new Array(length)|1,000,000|17.796ms
array.push|100,000,000|1,869.956ms
new Array(length)|100,000,000|4,720.779ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.003ms
array.push|100|0.018ms
new Array(length)|100|0.012ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.333ms
new Array(length)|10,000|0.214ms
array.push|1,000,000|20.44ms
new Array(length)|1,000,000|8.171ms
array.push|100,000,000|2,007.135ms
new Array(length)|100,000,000|4,714.528ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|272|137|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":272.54273850710587,"samples":137},{"name":"Array.from","opsSec":22.981196890041673,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|2,335|1168|
|new Blob (1024)|554|278|
|text (128)|4,887|2444|
|text (1024)|613|307|
|arrayBuffer (128)|4,897|2449|
|arrayBuffer (1024)|620|311|
|slice (0, 64)|274,087|137044|
|slice (0, 512)|29,891|14946|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:13:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":2335.8331093869533,"samples":1168},{"name":"new Blob (1024)","opsSec":554.8143229593883,"samples":278},{"name":"text (128)","opsSec":4887.720735194246,"samples":2444},{"name":"text (1024)","opsSec":613.7422000416715,"samples":307},{"name":"arrayBuffer (128)","opsSec":4897.388864721513,"samples":2449},{"name":"arrayBuffer (1024)","opsSec":620.9327457629786,"samples":311},{"name":"slice (0, 64)","opsSec":274087.6026036449,"samples":137044},{"name":"slice (0, 512)","opsSec":29891.533213868097,"samples":14946}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|302,073|151037|
|[True conditional] Using constructor name|296,215|148108|
|[True conditional] Check if property is valid then instanceof |298,490|149246|
|[False conditional] Using instanceof only|15,760,887|7880444|
|[False conditional] Using constructor name|15,341,057|7670529|
|[False conditional] Check if property is valid then instanceof |15,918,991|7959496|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:22:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":302073.9329507514,"samples":151037},{"name":"[True conditional] Using constructor name","opsSec":296215.87852670206,"samples":148108},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":298490.07173750806,"samples":149246},{"name":"[False conditional] Using instanceof only","opsSec":15760887.135584904,"samples":7880444},{"name":"[False conditional] Using constructor name","opsSec":15341057.896201504,"samples":7670529},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15918991.575702827,"samples":7959496}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,792|3397|
|crypto.verify('RSA-SHA256')|6,819|3410|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:29:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6792.949171164876,"samples":3397},{"name":"crypto.verify('RSA-SHA256')","opsSec":6819.980985779986,"samples":3410}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,248,114|624058|
|fromUnixToISOString(new Date())|1,798,326|899164|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:34:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1248114.8769600582,"samples":624058},{"name":"fromUnixToISOString(new Date())","opsSec":1798326.5980281448,"samples":899164}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|23,126|11564|
|Intl.DateTimeFormat().format(new Date())|20,236|10119|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|22,387|11194|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,835|10918|
|Reusing Intl.DateTimeFormat()|674,043|337022|
|Date.toLocaleDateString()|673,023|336512|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|22,963|11482|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:40:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":23126.254383557443,"samples":11564},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20236.359277020514,"samples":10119},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":22387.73063092151,"samples":11194},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21835.246595998582,"samples":10918},{"name":"Reusing Intl.DateTimeFormat()","opsSec":674043.1576715915,"samples":337022},{"name":"Date.toLocaleDateString()","opsSec":673023.7696877887,"samples":336512},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":22963.353397387757,"samples":11482}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|956,002|478002|
|Using brackets {}|966,105|483053|
|Using '' + |955,008|477505|
|Using date.toString()|1,050,839|525420|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:46:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using String()","opsSec":956002.7709570406,"samples":478002},{"name":"Using brackets {}","opsSec":966105.9865405454,"samples":483053},{"name":"Using '' + ","opsSec":955008.4546747109,"samples":477505},{"name":"Using date.toString()","opsSec":1050839.5612208634,"samples":525420}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,758,965|1379483|
|Using delete property (proto: null)|7,727,699|3863850|
|Using delete property (cached proto: null)|2,796,131|1398066|
|Using undefined assignment|12,390,992|6195497|
|Using undefined assignment (proto: null)|8,302,043|4151022|
|Using undefined property (cached proto: null)|11,967,305|5983653|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:53:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using delete property","opsSec":2758965.0541052357,"samples":1379483},{"name":"Using delete property (proto: null)","opsSec":7727699.305721655,"samples":3863850},{"name":"Using delete property (cached proto: null)","opsSec":2796131.6293062926,"samples":1398066},{"name":"Using undefined assignment","opsSec":12390992.764895674,"samples":6195497},{"name":"Using undefined assignment (proto: null)","opsSec":8302043.229966579,"samples":4151022},{"name":"Using undefined property (cached proto: null)","opsSec":11967305.029300675,"samples":5983653}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|288,709|144356|
|NodeError|290,427|145214|
|NodeError Range|287,704|143853|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:02:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Error","opsSec":288709.8641454016,"samples":144356},{"name":"NodeError","opsSec":290427.32205537765,"samples":145214},{"name":"NodeError Range","opsSec":287704.5264759183,"samples":143853}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,603,111|801556|
|Function returning explicitly undefined|1,585,431|792716|
|Function returning implicitly undefined|1,679,293|839647|
|Function returning string|1,574,210|787106|
|Function returning integer|1,675,927|837964|
|Function returning float|1,599,202|799602|
|Function returning functions|1,554,646|777324|
|Function returning arrow functions|1,632,737|816369|
|Function returning empty object|1,675,108|837555|
|Function returning empty array|1,567,855|783928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:14:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1603111.6753709596,"samples":801556},{"name":"Function returning explicitly undefined","opsSec":1585431.836867973,"samples":792716},{"name":"Function returning implicitly undefined","opsSec":1679293.6793122867,"samples":839647},{"name":"Function returning string","opsSec":1574210.7510574951,"samples":787106},{"name":"Function returning integer","opsSec":1675927.263563468,"samples":837964},{"name":"Function returning float","opsSec":1599202.3198053024,"samples":799602},{"name":"Function returning functions","opsSec":1554646.7354874103,"samples":777324},{"name":"Function returning arrow functions","opsSec":1632737.0469700212,"samples":816369},{"name":"Function returning empty object","opsSec":1675108.9035445356,"samples":837555},{"name":"Function returning empty array","opsSec":1567855.9504794676,"samples":783928}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|13,296,995|6648498|
|using Array.includes (first item)|14,555,853|7277927|
|Using raw comparison|15,457,507|7728754|
|Using raw comparison (first item)|15,420,037|7710019|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:23:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":13296995.15123968,"samples":6648498},{"name":"using Array.includes (first item)","opsSec":14555853.74888504,"samples":7277927},{"name":"Using raw comparison","opsSec":15457507.774387049,"samples":7728754},{"name":"Using raw comparison (first item)","opsSec":15420037.523587221,"samples":7710019}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,164,795|6082398|
|Using Object.getOwnPropertyNames()|12,300,348|6150178|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:31:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using Object.keys()","opsSec":12164795.942288296,"samples":6082398},{"name":"Using Object.getOwnPropertyNames()","opsSec":12300348.368811492,"samples":6150178}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|14,288,096|7144049|
|Length = 10_000 - Array.at|13,819,150|6909576|
|Length = 1_000_000 - Array.at|14,934,496|7467249|
|Length = 100 - Array[length - 1]|15,288,655|7644328|
|Length = 10_000 - Array[length - 1]|14,470,854|7235428|
|Length = 1_000_000 - Array[length - 1]|14,432,404|7216203|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:42:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":14288096.765711948,"samples":7144049},{"name":"Length = 10_000 - Array.at","opsSec":13819150.19031139,"samples":6909576},{"name":"Length = 1_000_000 - Array.at","opsSec":14934496.393334994,"samples":7467249},{"name":"Length = 100 - Array[length - 1]","opsSec":15288655.486895287,"samples":7644328},{"name":"Length = 10_000 - Array[length - 1]","opsSec":14470854.434669524,"samples":7235428},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":14432404.701389557,"samples":7216203}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|15,200,923|7600462|
|~ (small)|15,725,533|7862767|
|Math.floor (long)|15,679,782|7839892|
|~ (long)|15,207,900|7603951|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:54:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Math.floor (small)","opsSec":15200923.744438495,"samples":7600462},{"name":"~ (small)","opsSec":15725533.938664457,"samples":7862767},{"name":"Math.floor (long)","opsSec":15679782.939826861,"samples":7839892},{"name":"~ (long)","opsSec":15207900.43136837,"samples":7603951}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|11,699,186|5849594|
|Object.create({})|1,673,287|836644|
|Cached Empty.prototype|15,351,951|7675977|
|Empty.prototype|1,841,671|920836|
|Empty class|1,207,685|603843|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:04:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Object.create(null)","opsSec":11699186.330340428,"samples":5849594},{"name":"Object.create({})","opsSec":1673287.5376439523,"samples":836644},{"name":"Cached Empty.prototype","opsSec":15351951.171301927,"samples":7675977},{"name":"Empty.prototype","opsSec":1841671.4877481463,"samples":920836},{"name":"Empty class","opsSec":1207685.2615107263,"samples":603843}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,012,605|7506303|
|Using optional chain (obj.field?.field2) (undefined)|13,995,767|6997884|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,217,323|7608662|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,305,275|7652638|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:14:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15012605.673837734,"samples":7506303},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":13995767.216934934,"samples":6997884},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15217323.589742083,"samples":7608662},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15305275.476929765,"samples":7652638}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,604,202|7302102|
|Using parseInt(x, 10) - big number (10 len)|14,489,575|7244788|
|Using + - small number (2 len)|14,258,159|7129080|
|Using + - big number (10 len)|14,199,234|7099618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:25:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14604202.171179533,"samples":7302102},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14489575.254619537,"samples":7244788},{"name":"Using + - small number (2 len)","opsSec":14258159.648107933,"samples":7129080},{"name":"Using + - big number (10 len)","opsSec":14199234.745088855,"samples":7099618}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|986,456|493229|
|Using ? operator to avoid rejection|955,398|477700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:32:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using if to check function existence","opsSec":986456.5926659815,"samples":493229},{"name":"Using ? operator to avoid rejection","opsSec":955398.1277025987,"samples":477700}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|14,102,657|7051329|
|Raw usage underscore usage|14,119,835|7059918|
|Manipulating private properties using #|14,048,115|7024107|
|Manipulating private properties using underscore(_)|14,931,415|7465708|
|Manipulating private properties using Symbol|14,783,474|7391817|
|Manipulating private properties using PrivateSymbol|10,485,701|5242851|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:45:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Raw usage private field","opsSec":14102657.503792822,"samples":7051329},{"name":"Raw usage underscore usage","opsSec":14119835.256439539,"samples":7059918},{"name":"Manipulating private properties using #","opsSec":14048115.714539023,"samples":7024107},{"name":"Manipulating private properties using underscore(_)","opsSec":14931415.217650462,"samples":7465708},{"name":"Manipulating private properties using Symbol","opsSec":14783474.937657896,"samples":7391817},{"name":"Manipulating private properties using PrivateSymbol","opsSec":10485701.219223127,"samples":5242851}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,870,019|2435068|
|Adding property in the object creation - small object|4,854,172|2427087|
|Adding property after the function creation - small class|236,800|118401|
|Adding property in the function creation - small class|229,780|114891|
|Adding property after the class creation - small class|241,106|120554|
|Adding property in the class creation - small class|226,479|113240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:52:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4870019.523975287,"samples":2435068},{"name":"Adding property in the object creation - small object","opsSec":4854172.254085045,"samples":2427087},{"name":"Adding property after the function creation - small class","opsSec":236800.63790045024,"samples":118401},{"name":"Adding property in the function creation - small class","opsSec":229780.79097939417,"samples":114891},{"name":"Adding property after the class creation - small class","opsSec":241106.86105708077,"samples":120554},{"name":"Adding property in the class creation - small class","opsSec":226479.0794183349,"samples":113240}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|15,371,533|7685767|
|Getter|12,965,982|6482992|
|Method|15,827,950|7913976|
|DefineProperty (getter)|15,972,263|7986132|
|DefineProperty (getter & enumerable=false)|13,050,958|6525480|
|DefineProperty (getter & configurable=false)|15,812,705|7906353|
|DefineProperty (getter & enumerable=false & configurable=false)|12,750,317|6375159|
|DefineProperty (writable)|15,954,462|7977232|
|DefineProperty (writable & enumerable=false)|15,819,008|7909505|
|DefineProperty (writable & enumerable=false & configurable=false)|15,895,176|7947589|
|DefineProperties (getter)|12,863,369|6431685|
|DefineProperties (getter & enumerable=false)|12,730,976|6365489|
|DefineProperties (getter & enumerable=false & configurable=false)|12,882,702|6441352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:09:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Getter (class)","opsSec":15371533.331449524,"samples":7685767},{"name":"Getter","opsSec":12965982.667056642,"samples":6482992},{"name":"Method","opsSec":15827950.954042712,"samples":7913976},{"name":"DefineProperty (getter)","opsSec":15972263.025249433,"samples":7986132},{"name":"DefineProperty (getter & enumerable=false)","opsSec":13050958.885661447,"samples":6525480},{"name":"DefineProperty (getter & configurable=false)","opsSec":15812705.345897585,"samples":7906353},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":12750317.571087332,"samples":6375159},{"name":"DefineProperty (writable)","opsSec":15954462.921551816,"samples":7977232},{"name":"DefineProperty (writable & enumerable=false)","opsSec":15819008.315887082,"samples":7909505},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":15895176.807959987,"samples":7947589},{"name":"DefineProperties (getter)","opsSec":12863369.855857281,"samples":6431685},{"name":"DefineProperties (getter & enumerable=false)","opsSec":12730976.201868564,"samples":6365489},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":12882702.809227265,"samples":6441352}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|14,355,174|7177588|
|Setter|5,887,130|2943566|
|Method|14,297,870|7148936|
|DefineProperty (setter)|14,361,001|7180501|
|DefineProperty (setter & enumerable=false)|5,964,775|2982388|
|DefineProperty (setter & configurable=false)|5,969,394|2984698|
|DefineProperty (setter & enumerable=false & configurable=false)|5,902,583|2951292|
|DefineProperty (writable)|14,427,826|7213914|
|DefineProperty (writable & enumerable=false)|14,491,341|7245671|
|DefineProperty (writable & enumerable=false & configurable=false)|14,395,669|7197835|
|DefineProperties (setter)|14,496,276|7248139|
|DefineProperties (setter & enumerable=false)|5,933,831|2966916|
|DefineProperties (setter & enumerable=false & configurable=false)|5,936,388|2968195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:31:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Setter (class)","opsSec":14355174.94227458,"samples":7177588},{"name":"Setter","opsSec":5887130.1930388855,"samples":2943566},{"name":"Method","opsSec":14297870.65125611,"samples":7148936},{"name":"DefineProperty (setter)","opsSec":14361001.083296383,"samples":7180501},{"name":"DefineProperty (setter & enumerable=false)","opsSec":5964775.573943738,"samples":2982388},{"name":"DefineProperty (setter & configurable=false)","opsSec":5969394.898431862,"samples":2984698},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":5902583.969303581,"samples":2951292},{"name":"DefineProperty (writable)","opsSec":14427826.562621454,"samples":7213914},{"name":"DefineProperty (writable & enumerable=false)","opsSec":14491341.506420137,"samples":7245671},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":14395669.228506917,"samples":7197835},{"name":"DefineProperties (setter)","opsSec":14496276.181778481,"samples":7248139},{"name":"DefineProperties (setter & enumerable=false)","opsSec":5933831.221453311,"samples":2966916},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":5936388.818938504,"samples":2968195}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,474,459|1237231|
|Using replaceAll()|2,366,252|1183127|
|Using replaceAll(//g)|2,285,919|1142960|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:43:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using replace(//g)","opsSec":2474459.802676791,"samples":1237231},{"name":"Using replaceAll()","opsSec":2366252.397516498,"samples":1183127},{"name":"Using replaceAll(//g)","opsSec":2285919.273924771,"samples":1142960}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|9,632,468|4816235|
|{ ...object, __proto__: null }|2,128,037|1064019|
|{ ...object, newProp: true }|9,747,100|4873551|
|structuredClone|244,343|122172|
|JSON.parse + JSON.stringify|236,997|118499|
|loop + object.keys starting with {}|1,221,371|610686|
|loop + object.keys starting with { __proto__: null }|692,604|346303|
|loop + object.keys starting with { randomProp: true }|517,193|258597|
|object.keys + reduce(FN, {})|1,246,345|623173|
|object.keys + reduce(FN, { __proto__: null })|739,966|369984|
|object.keys + reduce(FN, { newProp: true })|502,300|251151|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:51:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":9632468.757166581,"samples":4816235},{"name":"{ ...object, __proto__: null }","opsSec":2128037.086246123,"samples":1064019},{"name":"{ ...object, newProp: true }","opsSec":9747100.891940225,"samples":4873551},{"name":"structuredClone","opsSec":244343.36107098163,"samples":122172},{"name":"JSON.parse + JSON.stringify","opsSec":236997.28597046423,"samples":118499},{"name":"loop + object.keys starting with {}","opsSec":1221371.1755195512,"samples":610686},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":692604.6643268102,"samples":346303},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":517193.07797463593,"samples":258597},{"name":"object.keys + reduce(FN, {})","opsSec":1246345.7657095876,"samples":623173},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":739966.5169600465,"samples":369984},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":502300.25050449447,"samples":251151}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|299,254|149628|
|Sort using first char|1,090,018|545010|
|Sort using localeCompare|991,085|495543|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:58:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":299254.0527544497,"samples":149628},{"name":"Sort using first char","opsSec":1090018.9708558915,"samples":545010},{"name":"Sort using localeCompare","opsSec":991085.1957098946,"samples":495543}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,830|916|
|{...smallObject} - Total keys: 2|11,594,934|5797469|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,200|1101|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,745|3373|
|{ ...bigObject, ...anotherBigObject }|1,129|565|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,201,429|3100715|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,338,694|5169348|
|{ ...smallObject, ...anotherSmallObject }|8,829,834|4414918|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1830.765599026013,"samples":916},{"name":"{...smallObject} - Total keys: 2","opsSec":11594934.309375849,"samples":5797469},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2200.5164073167,"samples":1101},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6745.053803545074,"samples":3373},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1129.265304534885,"samples":565},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6201429.300421468,"samples":3100715},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10338694.506402325,"samples":5169348},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8829834.661226517,"samples":4414918}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,150|1076|
|streams.web.Readable reading 1e3 * "some data"|1,974|988|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:13:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2150.329976318947,"samples":1076},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":1974.1842126057632,"samples":988}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|6,097|3049|
|streams.web.WritableStream writing 1e3 * "some data"|2,441|1228|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:39:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":6097.345132934519,"samples":3049},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":2441.1952881264774,"samples":1228}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,663,406|7331704|
|Using backtick (`)|14,637,804|7319052|
|Using array.join|5,877,300|2938651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:46:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using + sign","opsSec":14663406.4251484,"samples":7331704},{"name":"Using backtick (`)","opsSec":14637804.8371716,"samples":7319052},{"name":"Using array.join","opsSec":5877300.544180885,"samples":2938651}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,486,200|7243101|
|(short string) (true) String#slice and strict comparison|12,683,808|6341905|
|(long string) (true) String#endsWith|13,773,246|6886624|
|(long string) (true) String#slice and strict comparison|12,225,952|6112977|
|(short string) (false) String#endsWith|15,088,046|7544106|
|(short string) (false) String#slice and strict comparison|12,793,372|6396687|
|(long string) (false) String#endsWith|14,872,064|7436033|
|(long string) (false) String#slice and strict comparison|12,467,888|6233945|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:58:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14486200.870506195,"samples":7243101},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12683808.253702426,"samples":6341905},{"name":"(long string) (true) String#endsWith","opsSec":13773246.366926292,"samples":6886624},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12225952.690210478,"samples":6112977},{"name":"(short string) (false) String#endsWith","opsSec":15088046.559500622,"samples":7544106},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12793372.111368155,"samples":6396687},{"name":"(long string) (false) String#endsWith","opsSec":14872064.914438337,"samples":7436033},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12467888.648313822,"samples":6233945}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,365,866|4182934|
|Using indexof|8,317,458|4158730|
|Using RegExp.test|7,233,120|3616561|
|Using RegExp.text with cached regex pattern|7,879,090|3939546|
|Using new RegExp.test|3,383,130|1691566|
|Using new RegExp.test with cached regex pattern|3,636,872|1818437|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:12:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using includes","opsSec":8365866.215787705,"samples":4182934},{"name":"Using indexof","opsSec":8317458.523319369,"samples":4158730},{"name":"Using RegExp.test","opsSec":7233120.2530711135,"samples":3616561},{"name":"Using RegExp.text with cached regex pattern","opsSec":7879090.914566703,"samples":3939546},{"name":"Using new RegExp.test","opsSec":3383130.101034221,"samples":1691566},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3636872.6755077806,"samples":1818437}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,516,171|6758087|
|(short string) (true) String#slice and strict comparison|12,487,184|6243593|
|(long string) (true) String#startsWith|13,119,128|6559565|
|(long string) (true) String#slice and strict comparison|12,004,277|6002139|
|(short string) (false) String#startsWith|14,726,947|7363474|
|(short string) (false) String#slice and strict comparison|12,235,081|6117541|
|(long string) (false) String#startsWith|14,270,933|7135467|
|(long string) (false) String#slice and strict comparison|12,223,853|6111927|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:25:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13516171.560764048,"samples":6758087},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12487184.752097718,"samples":6243593},{"name":"(long string) (true) String#startsWith","opsSec":13119128.882968687,"samples":6559565},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12004277.372139372,"samples":6002139},{"name":"(short string) (false) String#startsWith","opsSec":14726947.239391102,"samples":7363474},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12235081.65669723,"samples":6117541},{"name":"(long string) (false) String#startsWith","opsSec":14270933.739074176,"samples":7135467},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12223853.659744522,"samples":6111927}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,738,865|7369433|
|Using this|14,526,884|7263443|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:36:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using super","opsSec":14738865.341890065,"samples":7369433},{"name":"Using this","opsSec":14526884.325949015,"samples":7263443}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,069,228|3034615|
|Date.now()|8,257,644|4128823|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:43:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6069228.227133141,"samples":3034615},{"name":"Date.now()","opsSec":8257644.181774031,"samples":4128823}]}-->
