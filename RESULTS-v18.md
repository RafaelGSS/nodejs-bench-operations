## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|116,118,963|58091287|
|Using dot notation|73,083,781|36675254|
|Using define property (writable)|3,742,762|1871601|
|Using define property initialized (writable)|5,549,566|2775255|
|Using define property (getter)|2,116,479|1058275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:00:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Directly in the object","opsSec":116118963.33517122,"samples":58091287},{"name":"Using dot notation","opsSec":73083781.72256047,"samples":36675254},{"name":"Using define property (writable)","opsSec":3742762.6820019125,"samples":1871601},{"name":"Using define property initialized (writable)","opsSec":5549566.274056831,"samples":2775255},{"name":"Using define property (getter)","opsSec":2116479.783666697,"samples":1058275}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.009ms
array.push|1,000|0.037ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.356ms
new Array(length)|10,000|0.139ms
array.push|1,000,000|26.413ms
new Array(length)|1,000,000|7.818ms
array.push|100,000,000|1,968.763ms
new Array(length)|100,000,000|3,996.269ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.019ms
array.push|100|0.033ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.026ms
array.push|10,000|0.448ms
new Array(length)|10,000|3.311ms
array.push|1,000,000|254.78ms
new Array(length)|1,000,000|4.669ms
array.push|100,000,000|2,342.245ms
new Array(length)|100,000,000|4,305.645ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|254|128|
|Array.from|20|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:05:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Array","opsSec":254.3800538882681,"samples":128},{"name":"Array.from","opsSec":20.836585142902198,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|3,573|1800|
|new Blob (1024)|514|264|
|text (128)|45,501|22751|
|text (1024)|30,782|15392|
|arrayBuffer (128)|46,226|23114|
|arrayBuffer (1024)|28,562|14282|
|slice (0, 64)|81,176|40589|
|slice (0, 512)|48,351|24176|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:11:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Blob (128)","opsSec":3573.7993334709627,"samples":1800},{"name":"new Blob (1024)","opsSec":514.2275094117886,"samples":264},{"name":"text (128)","opsSec":45501.66428927929,"samples":22751},{"name":"text (1024)","opsSec":30782.96433767337,"samples":15392},{"name":"arrayBuffer (128)","opsSec":46226.26411324473,"samples":23114},{"name":"arrayBuffer (1024)","opsSec":28562.17156467963,"samples":14282},{"name":"slice (0, 64)","opsSec":81176.51933782038,"samples":40589},{"name":"slice (0, 512)","opsSec":48351.263706145546,"samples":24176}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|399,440|200109|
|[True conditional] Using constructor name|312,658|156330|
|[True conditional] Check if property is valid then instanceof |314,085|157043|
|[False conditional] Using instanceof only|39,975,262|19990829|
|[False conditional] Using constructor name|99,592,605|49806727|
|[False conditional] Check if property is valid then instanceof |99,458,813|49733050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":399440.7569907063,"samples":200109},{"name":"[True conditional] Using constructor name","opsSec":312658.8500407496,"samples":156330},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":314085.25247709913,"samples":157043},{"name":"[False conditional] Using instanceof only","opsSec":39975262.43771312,"samples":19990829},{"name":"[False conditional] Using constructor name","opsSec":99592605.28400984,"samples":49806727},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":99458813.24950609,"samples":49733050}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,909|3456|
|crypto.verify('RSA-SHA256')|7,064|3533|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:11:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6909.789544505134,"samples":3456},{"name":"crypto.verify('RSA-SHA256')","opsSec":7064.895841558715,"samples":3533}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,675,085|1337563|
|fromUnixToISOString(new Date())|2,041,101|1021154|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:12:47 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2675085.1300493833,"samples":1337563},{"name":"fromUnixToISOString(new Date())","opsSec":2041101.0194053869,"samples":1021154}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,735|8869|
|Intl.DateTimeFormat().format(new Date())|17,648|8825|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,496|9249|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,237|9119|
|Reusing Intl.DateTimeFormat()|436,901|277862|
|Date.toLocaleDateString()|756,086|378073|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,668|10336|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:14:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17735.81803325064,"samples":8869},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17648.105934678668,"samples":8825},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18496.34620469315,"samples":9249},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18237.760246403803,"samples":9119},{"name":"Reusing Intl.DateTimeFormat()","opsSec":436901.73826251825,"samples":277862},{"name":"Date.toLocaleDateString()","opsSec":756086.7454817566,"samples":378073},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20668.978195387834,"samples":10336}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,005,123|502627|
|Using brackets {}|1,022,441|511226|
|Using '' + |1,026,234|513198|
|Using date.toString()|1,116,785|558404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:16:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using String()","opsSec":1005123.9972621942,"samples":502627},{"name":"Using brackets {}","opsSec":1022441.5342884549,"samples":511226},{"name":"Using '' + ","opsSec":1026234.2777926312,"samples":513198},{"name":"Using date.toString()","opsSec":1116785.6575861343,"samples":558404}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,244,260|1622452|
|Using delete property (proto: null)|16,551,248|8275625|
|Using delete property (cached proto: null)|3,181,796|1592033|
|Using undefined assignment|81,000,685|40500343|
|Using undefined assignment (proto: null)|19,252,895|9627568|
|Using undefined property (cached proto: null)|80,007,538|40003778|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:17:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using delete property","opsSec":3244260.4101083633,"samples":1622452},{"name":"Using delete property (proto: null)","opsSec":16551248.245567685,"samples":8275625},{"name":"Using delete property (cached proto: null)","opsSec":3181796.882462491,"samples":1592033},{"name":"Using undefined assignment","opsSec":81000685.35199451,"samples":40500343},{"name":"Using undefined assignment (proto: null)","opsSec":19252895.309538085,"samples":9627568},{"name":"Using undefined property (cached proto: null)","opsSec":80007538.39834155,"samples":40003778}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|384,794|192646|
|NodeError|312,601|156323|
|NodeError Range|304,962|152482|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:19:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Error","opsSec":384794.52455564064,"samples":192646},{"name":"NodeError","opsSec":312601.6149471001,"samples":156323},{"name":"NodeError Range","opsSec":304962.9783740224,"samples":152482}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,795,403|897784|
|Function returning explicitly undefined|1,789,037|894519|
|Function returning implicitly undefined|1,786,008|893088|
|Function returning string|1,833,210|916815|
|Function returning integer|1,862,611|931355|
|Function returning float|1,810,658|905357|
|Function returning functions|1,774,920|887602|
|Function returning arrow functions|1,834,775|917527|
|Function returning empty object|1,850,521|925361|
|Function returning empty array|1,850,414|925319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:21:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Function returning null","opsSec":1795403.8821311344,"samples":897784},{"name":"Function returning explicitly undefined","opsSec":1789037.609989801,"samples":894519},{"name":"Function returning implicitly undefined","opsSec":1786008.9117222726,"samples":893088},{"name":"Function returning string","opsSec":1833210.1105570171,"samples":916815},{"name":"Function returning integer","opsSec":1862611.8738812602,"samples":931355},{"name":"Function returning float","opsSec":1810658.8980284152,"samples":905357},{"name":"Function returning functions","opsSec":1774920.8752715022,"samples":887602},{"name":"Function returning arrow functions","opsSec":1834775.3820191387,"samples":917527},{"name":"Function returning empty object","opsSec":1850521.4515882055,"samples":925361},{"name":"Function returning empty array","opsSec":1850414.3182163853,"samples":925319}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|91,930,277|46001596|
|using Array.includes (first item)|80,116,170|40077189|
|Using raw comparison|95,861,118|48013691|
|Using raw comparison (first item)|96,552,553|48276289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:24:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":91930277.6841154,"samples":46001596},{"name":"using Array.includes (first item)","opsSec":80116170.43808573,"samples":40077189},{"name":"Using raw comparison","opsSec":95861118.55874933,"samples":48013691},{"name":"Using raw comparison (first item)","opsSec":96552553.86186153,"samples":48276289}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|53,393,353|26699572|
|Using Object.getOwnPropertyNames()|45,142,545|22571959|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:26:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using Object.keys()","opsSec":53393353.59758905,"samples":26699572},{"name":"Using Object.getOwnPropertyNames()","opsSec":45142545.124917656,"samples":22571959}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|23,282,965|11641491|
|Length = 10_000 - Array.at|21,299,810|10649912|
|Length = 1_000_000 - Array.at|21,243,575|10622779|
|Length = 100 - Array[length - 1]|91,304,344|45652194|
|Length = 10_000 - Array[length - 1]|101,099,362|50560613|
|Length = 1_000_000 - Array[length - 1]|101,187,398|50593710|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:28:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":23282965.888187606,"samples":11641491},{"name":"Length = 10_000 - Array.at","opsSec":21299810.79411731,"samples":10649912},{"name":"Length = 1_000_000 - Array.at","opsSec":21243575.592012905,"samples":10622779},{"name":"Length = 100 - Array[length - 1]","opsSec":91304344.3565234,"samples":45652194},{"name":"Length = 10_000 - Array[length - 1]","opsSec":101099362.04976441,"samples":50560613},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":101187398.95302103,"samples":50593710}]}-->

## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|144,744,209|72484811|
|~ (small)|99,437,812|49719874|
|Math.floor (long)|98,911,613|49455819|
|~ (long)|101,994,984|50997526|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:29:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Math.floor (small)","opsSec":144744209.2375586,"samples":72484811},{"name":"~ (small)","opsSec":99437812.34354493,"samples":49719874},{"name":"Math.floor (long)","opsSec":98911613.66774304,"samples":49455819},{"name":"~ (long)","opsSec":101994984.47932029,"samples":50997526}]}-->

## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|41,094,321|20555638|
|Object.create({})|1,267,733|642116|
|Cached Empty.prototype|113,841,209|56920680|
|Empty.prototype|1,462,290|741907|
|Empty class|920,121|465185|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:32:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Object.create(null)","opsSec":41094321.55138026,"samples":20555638},{"name":"Object.create({})","opsSec":1267733.648377861,"samples":642116},{"name":"Cached Empty.prototype","opsSec":113841209.50192104,"samples":56920680},{"name":"Empty.prototype","opsSec":1462290.1996024044,"samples":741907},{"name":"Empty class","opsSec":920121.3097618924,"samples":465185}]}-->

## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|160,767,160|80389822|
|Using optional chain (obj.field?.field2) (undefined)|103,778,050|51997894|
|Using and operator (obj.field && obj.field.field2) (Valid)|106,322,569|53189593|
|Using and operator (obj.field && obj.field.field2) (undefined)|105,927,519|53026098|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:34:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":160767160.42999262,"samples":80389822},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":103778050.02789985,"samples":51997894},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":106322569.01935206,"samples":53189593},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":105927519.52137837,"samples":53026098}]}-->

## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|128,636,674|64321147|
|Using parseInt(x, 10) - big number (10 len)|16,923,584|8461795|
|Using + - small number (2 len)|93,405,788|46708164|
|Using + - big number (10 len)|89,709,247|44854631|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:35:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":128636674.63550523,"samples":64321147},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16923584.99061884,"samples":8461795},{"name":"Using + - small number (2 len)","opsSec":93405788.09087184,"samples":46708164},{"name":"Using + - big number (10 len)","opsSec":89709247.10826498,"samples":44854631}]}-->

## Possible undefined Function

|name|ops/sec|samples|
|-|-|-|
|Using if to check function existence|682,458|341275|
|Using ? operator to avoid rejection|739,197|372193|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:37:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using if to check function existence","opsSec":682458.6133320059,"samples":341275},{"name":"Using ? operator to avoid rejection","opsSec":739197.3358779306,"samples":372193}]}-->

## Private Property

|name|ops/sec|samples|
|-|-|-|
|Raw usage private field|105,097,544|52613838|
|Raw usage underscore usage|81,816,218|40913065|
|Manipulating private properties using #|74,671,820|37339808|
|Manipulating private properties using underscore(_)|74,435,087|37222763|
|Manipulating private properties using Symbol|67,296,139|33654601|
|Manipulating private properties using PrivateSymbol|35,552,708|17777502|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:39:41 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Raw usage private field","opsSec":105097544.01081073,"samples":52613838},{"name":"Raw usage underscore usage","opsSec":81816218.61964397,"samples":40913065},{"name":"Manipulating private properties using #","opsSec":74671820.26196466,"samples":37339808},{"name":"Manipulating private properties using underscore(_)","opsSec":74435087.3722171,"samples":37222763},{"name":"Manipulating private properties using Symbol","opsSec":67296139.55012876,"samples":33654601},{"name":"Manipulating private properties using PrivateSymbol","opsSec":35552708.29052026,"samples":17777502}]}-->

## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,797,973|1899285|
|Adding property in the object creation - small object|3,717,756|1858879|
|Adding property after the function creation - small class|184,526|93526|
|Adding property in the function creation - small class|187,924|93967|
|Adding property after the class creation - small class|162,170|81250|
|Adding property in the class creation - small class|159,911|79956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:41:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3797973.7712895405,"samples":1899285},{"name":"Adding property in the object creation - small object","opsSec":3717756.4088002564,"samples":1858879},{"name":"Adding property after the function creation - small class","opsSec":184526.402263386,"samples":93526},{"name":"Adding property in the function creation - small class","opsSec":187924.96419187172,"samples":93967},{"name":"Adding property after the class creation - small class","opsSec":162170.43529534756,"samples":81250},{"name":"Adding property in the class creation - small class","opsSec":159911.02614185077,"samples":79956}]}-->

## Property Getter Access

|name|ops/sec|samples|
|-|-|-|
|Getter (class)|161,768,127|80884153|
|Getter|55,618,295|27810112|
|Method|102,003,735|52085680|
|DefineProperty (getter)|107,024,079|53538967|
|DefineProperty (getter & enumerable=false)|56,574,478|28291027|
|DefineProperty (getter & configurable=false)|106,801,354|53405683|
|DefineProperty (getter & enumerable=false & configurable=false)|56,608,374|28407994|
|DefineProperty (writable)|105,693,759|52850596|
|DefineProperty (writable & enumerable=false)|107,156,475|53580731|
|DefineProperty (writable & enumerable=false & configurable=false)|99,580,157|49843613|
|DefineProperties (getter)|55,156,762|27578390|
|DefineProperties (getter & enumerable=false)|52,558,013|26284083|
|DefineProperties (getter & enumerable=false & configurable=false)|54,203,184|27101599|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:42:53 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Getter (class)","opsSec":161768127.40798733,"samples":80884153},{"name":"Getter","opsSec":55618295.936153084,"samples":27810112},{"name":"Method","opsSec":102003735.33448373,"samples":52085680},{"name":"DefineProperty (getter)","opsSec":107024079.91108507,"samples":53538967},{"name":"DefineProperty (getter & enumerable=false)","opsSec":56574478.11163607,"samples":28291027},{"name":"DefineProperty (getter & configurable=false)","opsSec":106801354.22745201,"samples":53405683},{"name":"DefineProperty (getter & enumerable=false & configurable=false)","opsSec":56608374.40930215,"samples":28407994},{"name":"DefineProperty (writable)","opsSec":105693759.61482388,"samples":52850596},{"name":"DefineProperty (writable & enumerable=false)","opsSec":107156475.7948683,"samples":53580731},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":99580157.61369406,"samples":49843613},{"name":"DefineProperties (getter)","opsSec":55156762.23952256,"samples":27578390},{"name":"DefineProperties (getter & enumerable=false)","opsSec":52558013.99913195,"samples":26284083},{"name":"DefineProperties (getter & enumerable=false & configurable=false)","opsSec":54203184.34079755,"samples":27101599}]}-->

## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|153,031,902|76516060|
|Setter|10,484,290|5242147|
|Method|100,814,737|50407379|
|DefineProperty (setter)|104,315,798|52158853|
|DefineProperty (setter & enumerable=false)|10,479,817|5241141|
|DefineProperty (setter & configurable=false)|10,409,338|5204932|
|DefineProperty (setter & enumerable=false & configurable=false)|10,694,096|5348339|
|DefineProperty (writable)|99,371,186|49685680|
|DefineProperty (writable & enumerable=false)|100,361,349|50193516|
|DefineProperty (writable & enumerable=false & configurable=false)|101,119,767|50559898|
|DefineProperties (setter)|97,439,202|48721183|
|DefineProperties (setter & enumerable=false)|10,448,569|5224288|
|DefineProperties (setter & enumerable=false & configurable=false)|10,182,617|5091375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:45:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Setter (class)","opsSec":153031902.69469815,"samples":76516060},{"name":"Setter","opsSec":10484290.267592665,"samples":5242147},{"name":"Method","opsSec":100814737.23216413,"samples":50407379},{"name":"DefineProperty (setter)","opsSec":104315798.48130897,"samples":52158853},{"name":"DefineProperty (setter & enumerable=false)","opsSec":10479817.377508791,"samples":5241141},{"name":"DefineProperty (setter & configurable=false)","opsSec":10409338.141055789,"samples":5204932},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":10694096.552033305,"samples":5348339},{"name":"DefineProperty (writable)","opsSec":99371186.49790838,"samples":49685680},{"name":"DefineProperty (writable & enumerable=false)","opsSec":100361349.32998377,"samples":50193516},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":101119767.07974662,"samples":50559898},{"name":"DefineProperties (setter)","opsSec":97439202.73372245,"samples":48721183},{"name":"DefineProperties (setter & enumerable=false)","opsSec":10448569.229327139,"samples":5224288},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":10182617.768525658,"samples":5091375}]}-->

## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,440,987|1720512|
|Using replaceAll()|2,948,499|1474251|
|Using replaceAll(//g)|2,971,639|1485821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:47:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using replace(//g)","opsSec":3440987.6975797904,"samples":1720512},{"name":"Using replaceAll()","opsSec":2948499.3758355556,"samples":1474251},{"name":"Using replaceAll(//g)","opsSec":2971639.016474427,"samples":1485821}]}-->

## Shallow Copy

|name|ops/sec|samples|
|-|-|-|
|{ ...object }|8,422,483|4211242|
|{ ...object, __proto__: null }|8,586,325|4293163|
|{ ...object, newProp: true }|561,150|280576|
|structuredClone|243,994|121998|
|JSON.parse + JSON.stringify|188,705|94353|
|loop + object.keys starting with {}|1,082,516|541259|
|loop + object.keys starting with { __proto__: null }|625,493|312747|
|loop + object.keys starting with { randomProp: true }|454,761|227381|
|object.keys + reduce(FN, {})|1,035,673|517837|
|object.keys + reduce(FN, { __proto__: null })|592,088|296045|
|object.keys + reduce(FN, { newProp: true })|437,492|218747|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:47:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{ ...object }","opsSec":8422483.889744041,"samples":4211242},{"name":"{ ...object, __proto__: null }","opsSec":8586325.011071732,"samples":4293163},{"name":"{ ...object, newProp: true }","opsSec":561150.8607759029,"samples":280576},{"name":"structuredClone","opsSec":243994.16714412606,"samples":121998},{"name":"JSON.parse + JSON.stringify","opsSec":188705.95874465298,"samples":94353},{"name":"loop + object.keys starting with {}","opsSec":1082516.9637962864,"samples":541259},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":625493.5122004736,"samples":312747},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":454761.97464579454,"samples":227381},{"name":"object.keys + reduce(FN, {})","opsSec":1035673.6112994503,"samples":517837},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":592088.4856690239,"samples":296045},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":437492.05284219695,"samples":218747}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|250,890|125446|
|Sort using first char|988,393|494197|
|Sort using localeCompare|909,711|454856|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 22:56:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Sort using default","opsSec":250890.40844053763,"samples":125446},{"name":"Sort using first char","opsSec":988393.6553819038,"samples":494197},{"name":"Sort using localeCompare","opsSec":909711.3754524388,"samples":454856}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,738|870|
|{...smallObject} - Total keys: 2|11,323,178|5661590|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,156|1079|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,091|3046|
|{ ...bigObject, ...anotherBigObject }|1,073|537|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,072,913|3036457|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,237,926|4618964|
|{ ...smallObject, ...anotherSmallObject }|7,684,843|3842422|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:02:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1738.1146635481819,"samples":870},{"name":"{...smallObject} - Total keys: 2","opsSec":11323178.410957105,"samples":5661590},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2156.6708179571747,"samples":1079},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6091.846388397672,"samples":3046},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1073.1230374320862,"samples":537},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6072913.097078909,"samples":3036457},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9237926.595394291,"samples":4618964},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7684843.363135452,"samples":3842422}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,208|1105|
|streams.web.Readable reading 1e3 * "some data"|606|304|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:12:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2208.4044985094765,"samples":1105},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":606.0914568105885,"samples":304}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|5,036|2519|
|streams.web.WritableStream writing 1e3 * "some data"|1,847|932|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:17:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":5036.105467225245,"samples":2519},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1847.6781690929367,"samples":932}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|14,756,733|7378367|
|Using backtick (`)|14,867,806|7433904|
|Using array.join|5,598,283|2799142|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:23:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using + sign","opsSec":14756733.864876077,"samples":7378367},{"name":"Using backtick (`)","opsSec":14867806.593283623,"samples":7433904},{"name":"Using array.join","opsSec":5598283.21721979,"samples":2799142}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,871,050|5935567|
|(short string) (true) String#slice and strict comparison|12,191,789|6095895|
|(long string) (true) String#endsWith|11,746,269|5873135|
|(long string) (true) String#slice and strict comparison|11,886,005|5943003|
|(short string) (false) String#endsWith|11,900,151|5950076|
|(short string) (false) String#slice and strict comparison|12,835,016|6417509|
|(long string) (false) String#endsWith|11,970,854|5985428|
|(long string) (false) String#slice and strict comparison|12,275,549|6137775|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:35:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11871050.822697347,"samples":5935567},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12191789.874010589,"samples":6095895},{"name":"(long string) (true) String#endsWith","opsSec":11746269.392547788,"samples":5873135},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11886005.469274053,"samples":5943003},{"name":"(short string) (false) String#endsWith","opsSec":11900151.082514916,"samples":5950076},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12835016.71542469,"samples":6417509},{"name":"(long string) (false) String#endsWith","opsSec":11970854.3230531,"samples":5985428},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12275549.981525086,"samples":6137775}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,234,221|4117111|
|Using indexof|8,157,862|4078932|
|Using RegExp.test|7,513,995|3756998|
|Using RegExp.text with cached regex pattern|7,676,740|3838453|
|Using new RegExp.test|3,143,441|1571721|
|Using new RegExp.test with cached regex pattern|3,501,367|1750684|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:51:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8234221.304355417,"samples":4117111},{"name":"Using indexof","opsSec":8157862.875311802,"samples":4078932},{"name":"Using RegExp.test","opsSec":7513995.379701399,"samples":3756998},{"name":"Using RegExp.text with cached regex pattern","opsSec":7676740.104107891,"samples":3838453},{"name":"Using new RegExp.test","opsSec":3143441.325537508,"samples":1571721},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3501367.2109138113,"samples":1750684}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|13,100,701|6550351|
|(short string) (true) String#slice and strict comparison|12,143,875|6071938|
|(long string) (true) String#startsWith|12,549,261|6274631|
|(long string) (true) String#slice and strict comparison|11,246,120|5623061|
|(short string) (false) String#startsWith|13,918,737|6959369|
|(short string) (false) String#slice and strict comparison|11,915,181|5957591|
|(long string) (false) String#startsWith|13,881,808|6940905|
|(long string) (false) String#slice and strict comparison|11,645,075|5822538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":13100701.85895668,"samples":6550351},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12143875.286211787,"samples":6071938},{"name":"(long string) (true) String#startsWith","opsSec":12549261.314743755,"samples":6274631},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11246120.866235752,"samples":5623061},{"name":"(short string) (false) String#startsWith","opsSec":13918737.410346592,"samples":6959369},{"name":"(short string) (false) String#slice and strict comparison","opsSec":11915181.43796535,"samples":5957591},{"name":"(long string) (false) String#startsWith","opsSec":13881808.814720444,"samples":6940905},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11645075.962431803,"samples":5822538}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|14,497,172|7248587|
|Using this|14,873,010|7436506|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:21:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using super","opsSec":14497172.757533893,"samples":7248587},{"name":"Using this","opsSec":14873010.470010938,"samples":7436506}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,719,772|2859887|
|Date.now()|8,612,409|4306205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":5719772.305347074,"samples":2859887},{"name":"Date.now()","opsSec":8612409.670692634,"samples":4306205}]}-->
