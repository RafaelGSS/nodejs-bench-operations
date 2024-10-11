## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|114,069,111|57045880|
|Using dot notation|75,120,220|37566226|
|Using define property (writable)|3,729,139|1864899|
|Using define property initialized (writable)|5,433,993|2717494|
|Using define property (getter)|2,041,417|1026160|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:39:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Directly in the object","opsSec":114069111.80598915,"samples":57045880},{"name":"Using dot notation","opsSec":75120220.47498095,"samples":37566226},{"name":"Using define property (writable)","opsSec":3729139.0462139775,"samples":1864899},{"name":"Using define property initialized (writable)","opsSec":5433993.633505004,"samples":2717494},{"name":"Using define property (getter)","opsSec":2041417.4020807075,"samples":1026160}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.01ms
new Array(length)|10|0.002ms
array.push|100|0.024ms
new Array(length)|100|0.009ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.379ms
new Array(length)|10,000|0.15ms
array.push|1,000,000|25.002ms
new Array(length)|1,000,000|7.615ms
array.push|100,000,000|1,958.039ms
new Array(length)|100,000,000|3,976.7ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.008ms
new Array(length)|10|0.018ms
array.push|100|0.013ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.025ms
array.push|10,000|0.469ms
new Array(length)|10,000|3.29ms
array.push|1,000,000|255.018ms
new Array(length)|1,000,000|4.669ms
array.push|100,000,000|2,310.068ms
new Array(length)|100,000,000|4,317.688ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|258|130|
|Array.from|21|11|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:45:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Array","opsSec":258.7591850180423,"samples":130},{"name":"Array.from","opsSec":21.31844529601857,"samples":11}]}-->

## Blob

|name|ops/sec|samples|
|-|-|-|
|new Blob (128)|4,332|2167|
|new Blob (1024)|579|290|
|text (128)|48,243|24125|
|text (1024)|33,326|16672|
|arrayBuffer (128)|48,802|24415|
|arrayBuffer (1024)|30,227|15114|
|slice (0, 64)|78,309|39155|
|slice (0, 512)|31,761|15895|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:47:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Blob (128)","opsSec":4332.877646037592,"samples":2167},{"name":"new Blob (1024)","opsSec":579.3251707575424,"samples":290},{"name":"text (128)","opsSec":48243.7916029462,"samples":24125},{"name":"text (1024)","opsSec":33326.14285287514,"samples":16672},{"name":"arrayBuffer (128)","opsSec":48802.179536720214,"samples":24415},{"name":"arrayBuffer (1024)","opsSec":30227.73194047315,"samples":15114},{"name":"slice (0, 64)","opsSec":78309.56741794957,"samples":39155},{"name":"slice (0, 512)","opsSec":31761.891551785848,"samples":15895}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|399,390|200233|
|[True conditional] Using constructor name|314,836|157419|
|[True conditional] Check if property is valid then instanceof |313,145|156653|
|[False conditional] Using instanceof only|43,861,845|21930939|
|[False conditional] Using constructor name|106,372,307|53186165|
|[False conditional] Check if property is valid then instanceof |106,394,754|53199371|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:48:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":399390.99122021184,"samples":200233},{"name":"[True conditional] Using constructor name","opsSec":314836.8269179829,"samples":157419},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313145.36957751226,"samples":156653},{"name":"[False conditional] Using instanceof only","opsSec":43861845.27906342,"samples":21930939},{"name":"[False conditional] Using constructor name","opsSec":106372307.87455997,"samples":53186165},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":106394754.75017099,"samples":53199371}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,852|3427|
|crypto.verify('RSA-SHA256')|6,864|3433|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:50:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6852.931449810757,"samples":3427},{"name":"crypto.verify('RSA-SHA256')","opsSec":6864.224485966011,"samples":3433}]}-->

## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,641,346|1320675|
|fromUnixToISOString(new Date())|2,095,394|1051163|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:52:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2641346.5662494637,"samples":1320675},{"name":"fromUnixToISOString(new Date())","opsSec":2095394.59811023,"samples":1051163}]}-->

## Date format MM/DD/YYYY

|name|ops/sec|samples|
|-|-|-|
|Intl.DateTimeFormat().format(Date.now())|17,847|8925|
|Intl.DateTimeFormat().format(new Date())|17,532|8767|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())|18,476|9240|
|Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())|18,185|9093|
|Reusing Intl.DateTimeFormat()|433,102|277488|
|Date.toLocaleDateString()|758,489|379253|
|Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)|20,719|10361|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:53:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Intl.DateTimeFormat().format(Date.now())","opsSec":17847.903835086185,"samples":8925},{"name":"Intl.DateTimeFormat().format(new Date())","opsSec":17532.535647557645,"samples":8767},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())","opsSec":18476.716613550907,"samples":9240},{"name":"Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())","opsSec":18185.39515375719,"samples":9093},{"name":"Reusing Intl.DateTimeFormat()","opsSec":433102.6650007793,"samples":277488},{"name":"Date.toLocaleDateString()","opsSec":758489.0568714476,"samples":379253},{"name":"Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)","opsSec":20719.981583714,"samples":10361}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,024,375|512189|
|Using brackets {}|1,025,525|512844|
|Using '' + |1,024,039|512020|
|Using date.toString()|1,122,448|561225|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:56:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using String()","opsSec":1024375.6500822587,"samples":512189},{"name":"Using brackets {}","opsSec":1025525.616222876,"samples":512844},{"name":"Using '' + ","opsSec":1024039.9467499227,"samples":512020},{"name":"Using date.toString()","opsSec":1122448.2085726592,"samples":561225}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,278,657|1639331|
|Using delete property (proto: null)|16,408,078|8204918|
|Using delete property (cached proto: null)|3,173,312|1586823|
|Using undefined assignment|80,109,228|40054622|
|Using undefined assignment (proto: null)|19,287,922|9643964|
|Using undefined property (cached proto: null)|80,199,805|40099909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:58:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using delete property","opsSec":3278657.652499953,"samples":1639331},{"name":"Using delete property (proto: null)","opsSec":16408078.268207438,"samples":8204918},{"name":"Using delete property (cached proto: null)","opsSec":3173312.5800472144,"samples":1586823},{"name":"Using undefined assignment","opsSec":80109228.29859126,"samples":40054622},{"name":"Using undefined assignment (proto: null)","opsSec":19287922.13647167,"samples":9643964},{"name":"Using undefined property (cached proto: null)","opsSec":80199805.16803119,"samples":40099909}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|387,718|194079|
|NodeError|313,958|156994|
|NodeError Range|309,873|154957|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:00:12 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Error","opsSec":387718.09969670133,"samples":194079},{"name":"NodeError","opsSec":313958.19280917465,"samples":156994},{"name":"NodeError Range","opsSec":309873.9729591649,"samples":154957}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,305,790|654011|
|Function returning explicitly undefined|1,606,059|803051|
|Function returning implicitly undefined|1,549,238|775130|
|Function returning string|1,405,764|703022|
|Function returning integer|1,474,773|737388|
|Function returning float|1,593,385|796693|
|Function returning functions|1,577,848|788925|
|Function returning arrow functions|1,105,262|552632|
|Function returning empty object|1,038,848|521697|
|Function returning empty array|1,459,892|730028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:02:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Function returning null","opsSec":1305790.7066258204,"samples":654011},{"name":"Function returning explicitly undefined","opsSec":1606059.4137285857,"samples":803051},{"name":"Function returning implicitly undefined","opsSec":1549238.7573035732,"samples":775130},{"name":"Function returning string","opsSec":1405764.0224142398,"samples":703022},{"name":"Function returning integer","opsSec":1474773.5872704114,"samples":737388},{"name":"Function returning float","opsSec":1593385.7928598467,"samples":796693},{"name":"Function returning functions","opsSec":1577848.5988704443,"samples":788925},{"name":"Function returning arrow functions","opsSec":1105262.627263817,"samples":552632},{"name":"Function returning empty object","opsSec":1038848.7665456834,"samples":521697},{"name":"Function returning empty array","opsSec":1459892.1942562358,"samples":730028}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|76,618,392|38474716|
|using Array.includes (first item)|68,484,698|35746198|
|Using raw comparison|92,124,023|46084102|
|Using raw comparison (first item)|84,331,936|42166313|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:04:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":76618392.88609171,"samples":38474716},{"name":"using Array.includes (first item)","opsSec":68484698.56824993,"samples":35746198},{"name":"Using raw comparison","opsSec":92124023.71345164,"samples":46084102},{"name":"Using raw comparison (first item)","opsSec":84331936.50208716,"samples":42166313}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|52,753,988|26384274|
|Using Object.getOwnPropertyNames()|45,554,028|22781056|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:07:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using Object.keys()","opsSec":52753988.74317071,"samples":26384274},{"name":"Using Object.getOwnPropertyNames()","opsSec":45554028.437653735,"samples":22781056}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|20,809,617|10411301|
|Length = 10_000 - Array.at|19,728,733|9864370|
|Length = 1_000_000 - Array.at|21,448,984|10725492|
|Length = 100 - Array[length - 1]|101,700,720|50850374|
|Length = 10_000 - Array[length - 1]|101,090,654|50799685|
|Length = 1_000_000 - Array[length - 1]|62,115,886|31083079|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:08:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":20809617.96372924,"samples":10411301},{"name":"Length = 10_000 - Array.at","opsSec":19728733.213315774,"samples":9864370},{"name":"Length = 1_000_000 - Array.at","opsSec":21448984.740132373,"samples":10725492},{"name":"Length = 100 - Array[length - 1]","opsSec":101700720.54080546,"samples":50850374},{"name":"Length = 10_000 - Array[length - 1]","opsSec":101090654.33074969,"samples":50799685},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":62115886.49497367,"samples":31083079}]}-->

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
|{ ...object }|21,804,496|10905691|
|{ ...object, __proto__: null }|20,274,968|10149051|
|{ ...object, newProp: true }|606,818|307456|
|structuredClone|253,195|126598|
|JSON.parse + JSON.stringify|205,841|102925|
|loop + object.keys starting with {}|1,312,700|656541|
|loop + object.keys starting with { __proto__: null }|778,893|389448|
|loop + object.keys starting with { randomProp: true }|535,549|267775|
|object.keys + reduce(FN, {})|1,331,569|665786|
|object.keys + reduce(FN, { __proto__: null })|786,045|393030|
|object.keys + reduce(FN, { newProp: true })|554,828|277433|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:49:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{ ...object }","opsSec":21804496.8812378,"samples":10905691},{"name":"{ ...object, __proto__: null }","opsSec":20274968.747258626,"samples":10149051},{"name":"{ ...object, newProp: true }","opsSec":606818.6377329344,"samples":307456},{"name":"structuredClone","opsSec":253195.18774983767,"samples":126598},{"name":"JSON.parse + JSON.stringify","opsSec":205841.53373771734,"samples":102925},{"name":"loop + object.keys starting with {}","opsSec":1312700.7418219468,"samples":656541},{"name":"loop + object.keys starting with { __proto__: null }","opsSec":778893.4795007004,"samples":389448},{"name":"loop + object.keys starting with { randomProp: true }","opsSec":535549.1945340114,"samples":267775},{"name":"object.keys + reduce(FN, {})","opsSec":1331569.9360665993,"samples":665786},{"name":"object.keys + reduce(FN, { __proto__: null })","opsSec":786045.0258422578,"samples":393030},{"name":"object.keys + reduce(FN, { newProp: true })","opsSec":554828.5479633553,"samples":277433}]}-->

## Sorting Map

|name|ops/sec|samples|
|-|-|-|
|Sort using default|254,082|127288|
|Sort using first char|1,272,837|636556|
|Sort using localeCompare|1,160,739|581038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:52:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Sort using default","opsSec":254082.393118559,"samples":127288},{"name":"Sort using first char","opsSec":1272837.344612105,"samples":636556},{"name":"Sort using localeCompare","opsSec":1160739.0004608412,"samples":581038}]}-->

## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,931|967|
|{...smallObject} - Total keys: 2|58,235,492|29125049|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,106|554|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,195|3099|
|{ ...bigObject, ...anotherBigObject }|1,169|585|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,372,260|6191755|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,085,032|14043577|
|{ ...smallObject, ...anotherSmallObject }|19,965,691|9986773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:53:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1931.4395446759302,"samples":967},{"name":"{...smallObject} - Total keys: 2","opsSec":58235492.30558779,"samples":29125049},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1106.6495533367643,"samples":554},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6195.930472479165,"samples":3099},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1169.6128020211165,"samples":585},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12372260.176011678,"samples":6191755},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28085032.849808984,"samples":14043577},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19965691.057892624,"samples":9986773}]}-->

## Stream.Readable

|name|ops/sec|samples|
|-|-|-|
|streams.Readable reading 1e3 * "some data"|2,324|1165|
|streams.web.Readable reading 1e3 * "some data"|600|301|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:55:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Readable reading 1e3 * \"some data\"","opsSec":2324.370402776919,"samples":1165},{"name":"streams.web.Readable reading 1e3 * \"some data\"","opsSec":600.1574458227457,"samples":301}]}-->

## Stream.Writable

|name|ops/sec|samples|
|-|-|-|
|streams.Writable writing 1e3 * "some data"|4,909|2455|
|streams.web.WritableStream writing 1e3 * "some data"|1,611|806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:57:18 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"streams.Writable writing 1e3 * \"some data\"","opsSec":4909.229417895191,"samples":2455},{"name":"streams.web.WritableStream writing 1e3 * \"some data\"","opsSec":1611.5667528404333,"samples":806}]}-->

## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|158,072,135|79037264|
|Using backtick (`)|104,853,183|52426598|
|Using array.join|10,573,977|5287723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:59:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using + sign","opsSec":158072135.73629776,"samples":79037264},{"name":"Using backtick (`)","opsSec":104853183.41761799,"samples":52426598},{"name":"Using array.join","opsSec":10573977.782037009,"samples":5287723}]}-->

## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|62,476,714|31269878|
|(short string) (true) String#slice and strict comparison|50,303,958|25155314|
|(long string) (true) String#endsWith|49,940,490|24983819|
|(long string) (true) String#slice and strict comparison|44,413,657|22308239|
|(short string) (false) String#endsWith|58,176,297|29089080|
|(short string) (false) String#slice and strict comparison|59,601,278|29801478|
|(long string) (false) String#endsWith|53,969,324|26984738|
|(long string) (false) String#slice and strict comparison|51,998,917|25999462|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:01:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":62476714.24635001,"samples":31269878},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50303958.399371654,"samples":25155314},{"name":"(long string) (true) String#endsWith","opsSec":49940490.64892618,"samples":24983819},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44413657.525615744,"samples":22308239},{"name":"(short string) (false) String#endsWith","opsSec":58176297.77670817,"samples":29089080},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59601278.93921321,"samples":29801478},{"name":"(long string) (false) String#endsWith","opsSec":53969324.23826025,"samples":26984738},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51998917.13614294,"samples":25999462}]}-->

## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|156,135,927|78069521|
|Using indexof|15,721,557|7863853|
|Using RegExp.test|13,864,472|6932794|
|Using RegExp.text with cached regex pattern|14,696,578|7348291|
|Using new RegExp.test|4,355,721|2177862|
|Using new RegExp.test with cached regex pattern|4,897,821|2449028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:03:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using includes","opsSec":156135927.0882546,"samples":78069521},{"name":"Using indexof","opsSec":15721557.9904185,"samples":7863853},{"name":"Using RegExp.test","opsSec":13864472.38136536,"samples":6932794},{"name":"Using RegExp.text with cached regex pattern","opsSec":14696578.472821165,"samples":7348291},{"name":"Using new RegExp.test","opsSec":4355721.386567169,"samples":2177862},{"name":"Using new RegExp.test with cached regex pattern","opsSec":4897821.75677666,"samples":2449028}]}-->

## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|99,805,208|49903304|
|(short string) (true) String#slice and strict comparison|50,094,614|25055752|
|(long string) (true) String#startsWith|54,061,481|27030747|
|(long string) (true) String#slice and strict comparison|44,728,726|22364366|
|(short string) (false) String#startsWith|102,700,653|51360712|
|(short string) (false) String#slice and strict comparison|59,380,577|29690297|
|(long string) (false) String#startsWith|90,298,887|45149453|
|(long string) (false) String#slice and strict comparison|51,073,707|25544150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:05:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":99805208.33175837,"samples":49903304},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50094614.09991008,"samples":25055752},{"name":"(long string) (true) String#startsWith","opsSec":54061481.34961336,"samples":27030747},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44728726.095808156,"samples":22364366},{"name":"(short string) (false) String#startsWith","opsSec":102700653.20369217,"samples":51360712},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59380577.967243955,"samples":29690297},{"name":"(long string) (false) String#startsWith","opsSec":90298887.57902694,"samples":45149453},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51073707.62884595,"samples":25544150}]}-->

## Super vs This

|name|ops/sec|samples|
|-|-|-|
|Using super|101,935,756|50975528|
|Using this|82,371,037|41196601|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:07:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using super","opsSec":101935756.46231258,"samples":50975528},{"name":"Using this","opsSec":82371037.60120226,"samples":41196601}]}-->

## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,009,607|5006251|
|Date.now()|19,012,526|9510306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:09:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().getTime()","opsSec":10009607.621860065,"samples":5006251},{"name":"Date.now()","opsSec":19012526.694872685,"samples":9510306}]}-->
