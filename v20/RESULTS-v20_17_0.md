## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,898,575|8949288|
|Using dot notation|16,941,992|8470997|
|Using define property (writable)|3,320,543|1660272|
|Using define property initialized (writable)|4,123,583|2061792|
|Using define property (getter)|1,838,887|919444|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:19:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Directly in the object","opsSec":17898575.248280033,"samples":8949288},{"name":"Using dot notation","opsSec":16941992.37344935,"samples":8470997},{"name":"Using define property (writable)","opsSec":3320543.9468424316,"samples":1660272},{"name":"Using define property initialized (writable)","opsSec":4123583.7031132737,"samples":2061792},{"name":"Using define property (getter)","opsSec":1838887.5586644416,"samples":919444}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.002ms
array.push|100|0.091ms
new Array(length)|100|0.008ms
array.push|1,000|0.028ms
new Array(length)|1,000|0.014ms
array.push|10,000|0.275ms
new Array(length)|10,000|0.305ms
array.push|1,000,000|30.047ms
new Array(length)|1,000,000|7.305ms
array.push|100,000,000|1,812.531ms
new Array(length)|100,000,000|4,505.19ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.011ms
new Array(length)|100|0.013ms
array.push|1,000|0.042ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.236ms
new Array(length)|10,000|0.162ms
array.push|1,000,000|26.085ms
new Array(length)|1,000,000|4.555ms
array.push|100,000,000|2,525.456ms
new Array(length)|100,000,000|4,135.22ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|269|135|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:32:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Array","opsSec":269.1273293366554,"samples":135},{"name":"Array.from","opsSec":22.773837331410455,"samples":12}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|759|384|
|new Blob (1024)|528|265|
|text (128)|4,517|2259|
|text (1024)|569|285|
|arrayBuffer (128)|4,608|2305|
|arrayBuffer (1024)|571|286|
|slice (0, 64)|65,873|32937|
|slice (0, 512)|26,234|13118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:38:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Blob (128)","opsSec":759.2373396862507,"samples":384},{"name":"new Blob (1024)","opsSec":528.8338082823037,"samples":265},{"name":"text (128)","opsSec":4517.064407551928,"samples":2259},{"name":"text (1024)","opsSec":569.9236917770845,"samples":285},{"name":"arrayBuffer (128)","opsSec":4608.69119622137,"samples":2305},{"name":"arrayBuffer (1024)","opsSec":571.5109557890928,"samples":286},{"name":"slice (0, 64)","opsSec":65873.9250354659,"samples":32937},{"name":"slice (0, 512)","opsSec":26234.588893933884,"samples":13118}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|276,561|138283|
|[True conditional] Using constructor name|294,660|147331|
|[True conditional] Check if property is valid then instanceof |301,799|150900|
|[False conditional] Using instanceof only|19,438,707|9719354|
|[False conditional] Using constructor name|19,524,779|9762390|
|[False conditional] Check if property is valid then instanceof |17,729,873|8864937|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:46:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":276561.3161573272,"samples":138283},{"name":"[True conditional] Using constructor name","opsSec":294660.9339165378,"samples":147331},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":301799.57023732027,"samples":150900},{"name":"[False conditional] Using instanceof only","opsSec":19438707.572121285,"samples":9719354},{"name":"[False conditional] Using constructor name","opsSec":19524779.843820743,"samples":9762390},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17729873.7517484,"samples":8864937}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,015|3508|
|crypto.verify('RSA-SHA256')|6,957|3479|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:54:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7015.40544438876,"samples":3508},{"name":"crypto.verify('RSA-SHA256')","opsSec":6957.863639788312,"samples":3479}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,309,676|654839|
|fromUnixToISOString(new Date())|1,871,543|935772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:59:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1309676.5829295898,"samples":654839},{"name":"fromUnixToISOString(new Date())","opsSec":1871543.5021691376,"samples":935772}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|19,113|9557|
|Intl.DateTimeFormat().format(new Date())|20,031|10016|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|21,892|10947|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|21,341|10671|
|Reusing Intl.DateTimeFormat()|910,799|455400|
|Date.toLocaleDateString()|951,531|475766|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|21,653|10827|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:04:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":19113.841011069493,"samples":9557},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":20031.911939711903,"samples":10016},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":21892.505530003345,"samples":10947},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":21341.580040381898,"samples":10671},{"name":"Reusing Intl.DateTimeFormat()","opsSec":910799.0582317917,"samples":455400},{"name":"Date.toLocaleDateString()","opsSec":951531.016118777,"samples":475766},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":21653.671210653345,"samples":10827}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|955,789|477895|
|Using brackets {}|959,922|479962|
|Using '' + |962,991|481496|
|Using date.toString()|1,063,518|531760|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:11:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using String()","opsSec":955789.837516262,"samples":477895},{"name":"Using brackets {}","opsSec":959922.8404121143,"samples":479962},{"name":"Using '' + ","opsSec":962991.8478476044,"samples":481496},{"name":"Using date.toString()","opsSec":1063518.2217978693,"samples":531760}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,929,702|1464852|
|Using delete property (proto: null)|8,835,229|4417616|
|Using delete property (cached proto: null)|2,931,341|1465671|
|Using undefined assignment|19,397,294|9698648|
|Using undefined assignment (proto: null)|8,567,336|4283669|
|Using undefined property (cached proto: null)|16,962,467|8481366|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:18:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":2929702.8925681906,"samples":1464852},{"name":"Using delete property (proto: null)","opsSec":8835229.861818526,"samples":4417616},{"name":"Using delete property (cached proto: null)","opsSec":2931341.777225095,"samples":1465671},{"name":"Using undefined assignment","opsSec":19397294.409444608,"samples":9698648},{"name":"Using undefined assignment (proto: null)","opsSec":8567336.526430335,"samples":4283669},{"name":"Using undefined property (cached proto: null)","opsSec":16962467.41960008,"samples":8481366}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|291,689|145845|
|NodeError|288,283|144142|
|NodeError Range|286,528|143265|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:26:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Error","opsSec":291689.8751566779,"samples":145845},{"name":"NodeError","opsSec":288283.18646486895,"samples":144142},{"name":"NodeError Range","opsSec":286528.5375583605,"samples":143265}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,471,319|735660|
|Function returning explicitly undefined|1,457,468|728735|
|Function returning implicitly undefined|1,482,715|741358|
|Function returning string|1,447,601|723801|
|Function returning integer|1,484,945|742473|
|Function returning float|1,456,619|728310|
|Function returning functions|1,470,393|735197|
|Function returning arrow functions|1,479,196|739599|
|Function returning empty object|1,494,389|747195|
|Function returning empty array|1,471,218|735610|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:33:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Function returning null","opsSec":1471319.111322576,"samples":735660},{"name":"Function returning explicitly undefined","opsSec":1457468.1665064567,"samples":728735},{"name":"Function returning implicitly undefined","opsSec":1482715.8339370487,"samples":741358},{"name":"Function returning string","opsSec":1447601.67573573,"samples":723801},{"name":"Function returning integer","opsSec":1484945.2100078652,"samples":742473},{"name":"Function returning float","opsSec":1456619.7465526462,"samples":728310},{"name":"Function returning functions","opsSec":1470393.6059328075,"samples":735197},{"name":"Function returning arrow functions","opsSec":1479196.378798455,"samples":739599},{"name":"Function returning empty object","opsSec":1494389.6712364662,"samples":747195},{"name":"Function returning empty array","opsSec":1471218.6935595202,"samples":735610}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,461,865|7730933|
|using Array.includes (first item)|17,602,281|8801141|
|Using raw comparison|19,110,013|9555007|
|Using raw comparison (first item)|18,982,330|9491166|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:45:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"using Array.includes","opsSec":15461865.659896215,"samples":7730933},{"name":"using Array.includes (first item)","opsSec":17602281.71842769,"samples":8801141},{"name":"Using raw comparison","opsSec":19110013.12106396,"samples":9555007},{"name":"Using raw comparison (first item)","opsSec":18982330.177580774,"samples":9491166}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|15,777,897|7888949|
|Using Object.getOwnPropertyNames()|16,058,977|8029489|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:52:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":15777897.621330703,"samples":7888949},{"name":"Using Object.getOwnPropertyNames()","opsSec":16058977.068617517,"samples":8029489}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|18,186,653|9093327|
|Length = 10_000 - Array.at|18,515,634|9257818|
|Length = 1_000_000 - Array.at|18,038,099|9019050|
|Length = 100 - Array[length - 1]|18,600,727|9300364|
|Length = 10_000 - Array[length - 1]|16,927,671|8463836|
|Length = 1_000_000 - Array[length - 1]|16,862,605|8431303|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:03:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":18186653.708859548,"samples":9093327},{"name":"Length = 10_000 - Array.at","opsSec":18515634.222614776,"samples":9257818},{"name":"Length = 1_000_000 - Array.at","opsSec":18038099.856015127,"samples":9019050},{"name":"Length = 100 - Array[length - 1]","opsSec":18600727.552303713,"samples":9300364},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16927671.762459505,"samples":8463836},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16862605.932414345,"samples":8431303}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|16,517,397|8258699|
|~ (small)|18,307,123|9153562|
|Math.floor (long)|17,041,549|8520777|
|~ (long)|18,275,711|9137857|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:15:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Math.floor (small)","opsSec":16517397.273241967,"samples":8258699},{"name":"~ (small)","opsSec":18307123.7808984,"samples":9153562},{"name":"Math.floor (long)","opsSec":17041549.807655815,"samples":8520777},{"name":"~ (long)","opsSec":18275711.514331125,"samples":9137857}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|14,606,320|7303787|
|Object.create({})|1,802,328|903585|
|Cached Empty.prototype|17,024,053|8512027|
|Empty.prototype|1,814,769|907385|
|Empty class|1,269,649|634825|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:23:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Object.create(null)","opsSec":14606320.164301274,"samples":7303787},{"name":"Object.create({})","opsSec":1802328.9911947811,"samples":903585},{"name":"Cached Empty.prototype","opsSec":17024053.863927796,"samples":8512027},{"name":"Empty.prototype","opsSec":1814769.0163927872,"samples":907385},{"name":"Empty class","opsSec":1269649.4337374356,"samples":634825}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|19,304,917|9652460|
|Using optional chain (obj.field?.field2) (undefined)|17,501,999|8751000|
|Using and operator (obj.field && obj.field.field2) (Valid)|19,226,056|9613029|
|Using and operator (obj.field && obj.field.field2) (undefined)|18,943,527|9471764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:33:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":19304917.297359966,"samples":9652460},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":17501999.719928943,"samples":8751000},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":19226056.346260354,"samples":9613029},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":18943527.886303507,"samples":9471764}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|17,287,585|8643793|
|Using parseInt(x, 10) - big number (10 len)|17,273,075|8636538|
|Using + - small number (2 len)|17,377,841|8688921|
|Using + - big number (10 len)|17,383,318|8691660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:44:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":17287585.44687884,"samples":8643793},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":17273075.1708857,"samples":8636538},{"name":"Using + - small number (2 len)","opsSec":17377841.965254292,"samples":8688921},{"name":"Using + - big number (10 len)","opsSec":17383318.5397986,"samples":8691660}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|962,120|481061|
|Using ? operator to avoid rejection|984,903|492455|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:52:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using if to check function existence","opsSec":962120.8262128124,"samples":481061},{"name":"Using ? operator to avoid rejection","opsSec":984903.3223554317,"samples":492455}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|16,045,555|8022778|
|Raw usage underscore usage|17,167,008|8583505|
|Manipulating private properties using #|16,728,577|8364289|
|Manipulating private properties using underscore(_)|17,136,913|8568457|
|Manipulating private properties using Symbol|18,742,296|9371149|
|Manipulating private properties using PrivateSymbol|11,872,457|5936229|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:00:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Raw usage private field","opsSec":16045555.582969401,"samples":8022778},{"name":"Raw usage underscore usage","opsSec":17167008.111795593,"samples":8583505},{"name":"Manipulating private properties using #","opsSec":16728577.933122423,"samples":8364289},{"name":"Manipulating private properties using underscore(_)","opsSec":17136913.212065812,"samples":8568457},{"name":"Manipulating private properties using Symbol","opsSec":18742296.838559493,"samples":9371149},{"name":"Manipulating private properties using PrivateSymbol","opsSec":11872457.928966848,"samples":5936229}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,035,982|2517992|
|Adding property in the object creation - small object|5,054,003|2527002|
|Adding property after the function creation - small class|248,934|124468|
|Adding property in the function creation - small class|247,864|123933|
|Adding property after the class creation - small class|232,905|116453|
|Adding property in the class creation - small class|239,488|119745|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:11:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5035982.30790448,"samples":2517992},{"name":"Adding property in the object creation - small object","opsSec":5054003.252006898,"samples":2527002},{"name":"Adding property after the function creation - small class","opsSec":248934.1852697492,"samples":124468},{"name":"Adding property in the function creation - small class","opsSec":247864.2475997876,"samples":123933},{"name":"Adding property after the class creation - small class","opsSec":232905.6161714536,"samples":116453},{"name":"Adding property in the class creation - small class","opsSec":239488.50702867322,"samples":119745}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|19,060,419|9530211|
|Getter|14,945,346|7472674|
|Method|17,328,215|8664108|
|DefineProperty (getter)|17,059,837|8529919|
|DefineProperty (getter & enumerable=false)|14,730,307|7365154|
|DefineProperty (getter & configurable=false)|16,754,877|8377439|
|DefineProperty (getter & enumerable=false & configurable=false)|14,384,057|7192029|
|DefineProperty (writable)|19,073,750|9536876|
|DefineProperty (writable & enumerable=false)|19,255,748|9627875|
|DefineProperty (writable & enumerable=false & configurable=false)|17,668,776|8834389|
|DefineProperties (getter)|15,010,941|7505471|
|DefineProperties (getter & enumerable=false)|15,064,503|7532252|
|DefineProperties (getter & enumerable=false & configurable=false)|14,814,094|7407295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:25:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Getter (class)","opsSec":19060419.979151845,"samples":9530211},{"name":"Getter","opsSec":14945346.894136602,"samples":7472674},{"name":"Method","opsSec":17328215.827100057,"samples":8664108},{"name":"DefineProperty (getter)","opsSec":17059837.351597615,"samples":8529919},{"name":"DefineProperty (getter & enumerable=false)","opsSec":14730307.940769006,"samples":7365154},{"name":"DefineProperty (getter & configurable=false)","opsSec":16754877.128425233,"samples":8377439},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":14384057.539761912,"samples":7192029},{"name":"DefineProperty (writable)","opsSec":19073750.62431691,"samples":9536876},{"name":"DefineProperty (writable & enumerable=false)","opsSec":19255748.498210546,"samples":9627875},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17668776.55173654,"samples":8834389},{"name":"DefineProperties (getter)","opsSec":15010941.248888459,"samples":7505471},{"name":"DefineProperties (getter & enumerable=false)","opsSec":15064503.727889847,"samples":7532252},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":14814094.113635842,"samples":7407295}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|19,213,919|9606960|
|Setter|6,459,425|3229713|
|Method|18,872,498|9436250|
|DefineProperty (setter)|18,764,971|9382486|
|DefineProperty (setter & enumerable=false)|6,196,785|3098393|
|DefineProperty (setter & configurable=false)|6,153,645|3076823|
|DefineProperty (setter & enumerable=false & configurable=false)|6,130,168|3065085|
|DefineProperty (writable)|17,569,401|8784701|
|DefineProperty (writable & enumerable=false)|17,397,735|8698868|
|DefineProperty (writable & enumerable=false & configurable=false)|17,259,976|8629989|
|DefineProperties (setter)|17,298,605|8649303|
|DefineProperties (setter & enumerable=false)|6,170,833|3085417|
|DefineProperties (setter & enumerable=false & configurable=false)|6,237,923|3118962|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 17:49:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Setter (class)","opsSec":19213919.768098358,"samples":9606960},{"name":"Setter","opsSec":6459425.741595435,"samples":3229713},{"name":"Method","opsSec":18872498.565458383,"samples":9436250},{"name":"DefineProperty (setter)","opsSec":18764971.023493182,"samples":9382486},{"name":"DefineProperty (setter & enumerable=false)","opsSec":6196785.9256462995,"samples":3098393},{"name":"DefineProperty (setter & configurable=false)","opsSec":6153645.26161533,"samples":3076823},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":6130168.124215554,"samples":3065085},{"name":"DefineProperty (writable)","opsSec":17569401.718931917,"samples":8784701},{"name":"DefineProperty (writable & enumerable=false)","opsSec":17397735.9993053,"samples":8698868},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":17259976.239501167,"samples":8629989},{"name":"DefineProperties (setter)","opsSec":17298605.791921765,"samples":8649303},{"name":"DefineProperties (setter & enumerable=false)","opsSec":6170833.7410135595,"samples":3085417},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":6237923.138945645,"samples":3118962}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|2,770,850|1385426|
|Using replaceAll()|2,446,185|1223093|
|Using replaceAll(//g)|2,515,458|1257730|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:03:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using replace(//g)","opsSec":2770850.6312000505,"samples":1385426},{"name":"Using replaceAll()","opsSec":2446185.681993115,"samples":1223093},{"name":"Using replaceAll(//g)","opsSec":2515458.4202931602,"samples":1257730}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|10,072,429|5036215|
|{ ...object, __proto__: null }|9,971,803|4985903|
|{ ...object, newProp: true }|775,893|388507|
|structuredClone|280,107|140054|
|JSON.parse + JSON.stringify|188,884|94443|
|loop + object.keys starting with {}|1,320,373|660187|
|loop + object.keys starting with { __proto__: null }|763,335|381668|
|loop + object.keys starting with { randomProp: true }|532,691|266346|
|object.keys + reduce(FN, {})|1,302,763|651382|
|object.keys + reduce(FN, { __proto__: null })|681,493|340747|
|object.keys + reduce(FN, { newProp: true })|528,416|264209|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:11:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{ ...object }","opsSec":10072429.456084814,"samples":5036215},{"name":"{ ...object, __proto__: null }","opsSec":9971803.307713844,"samples":4985903},{"name":"{ ...object, newProp: true }","opsSec":775893.2795732272,"samples":388507},{"name":"structuredClone","opsSec":280107.2616372081,"samples":140054},{"name":"JSON.parse + JSON.stringify","opsSec":188884.80549248424,"samples":94443},{"name":"loop + object.keys starting with {}","opsSec":1320373.0255678645,"samples":660187},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":763335.4320777854,"samples":381668},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":532691.4151046243,"samples":266346},{"name":"object.keys + reduce(FN, {})","opsSec":1302763.0385615663,"samples":651382},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":681493.9850047026,"samples":340747},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":528416.7074929188,"samples":264209}]}-->
