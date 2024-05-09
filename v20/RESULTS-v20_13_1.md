## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,868,200|9934101|
|Using dot notation|20,043,440|10021721|
|Using define property (writable)|3,652,530|1826266|
|Using define property initialized (writable)|4,238,452|2119227|
|Using define property (getter)|2,222,195|1112090|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:25:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19868200.609221067,"samples":9934101},{"name":"Using dot notation","opsSec":20043440.035736486,"samples":10021721},{"name":"Using define property (writable)","opsSec":3652530.969982901,"samples":1826266},{"name":"Using define property initialized (writable)","opsSec":4238452.999742501,"samples":2119227},{"name":"Using define property (getter)","opsSec":2222195.126427302,"samples":1112090}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.077ms
new Array(length)|100|0.006ms
array.push|1,000|0.032ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.321ms
array.push|1,000,000|33.801ms
new Array(length)|1,000,000|8.206ms
array.push|100,000,000|2,048.877ms
new Array(length)|100,000,000|4,689.738ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.01ms
array.push|1,000|0.06ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.216ms
new Array(length)|10,000|0.276ms
array.push|1,000,000|23.837ms
new Array(length)|1,000,000|4.612ms
array.push|100,000,000|2,815.316ms
new Array(length)|100,000,000|4,207.319ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|239|121|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:38:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":239.78817469357276,"samples":121},{"name":"Array.from","opsSec":23.609751954529393,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|319,971|159986|
|[True conditional] Using constructor name|316,300|158151|
|[True conditional] Check if property is valid then instanceof |322,637|161319|
|[False conditional] Using instanceof only|20,020,954|10010478|
|[False conditional] Using constructor name|19,904,156|9952079|
|[False conditional] Check if property is valid then instanceof |19,414,816|9707409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:53:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":319971.7677005002,"samples":159986},{"name":"[True conditional] Using constructor name","opsSec":316300.11105565797,"samples":158151},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":322637.135332468,"samples":161319},{"name":"[False conditional] Using instanceof only","opsSec":20020954.59855765,"samples":10010478},{"name":"[False conditional] Using constructor name","opsSec":19904156.089174483,"samples":9952079},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19414816.95166225,"samples":9707409}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|7,259|3630|
|crypto.verify('RSA-SHA256')|7,190|3596|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:00:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":7259.4732090670495,"samples":3630},{"name":"crypto.verify('RSA-SHA256')","opsSec":7190.931384450702,"samples":3596}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,009,307|504654|
|Using brackets {}|1,049,506|524754|
|Using '' + |1,046,283|523142|
|Using date.toString()|1,166,749|583375|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:15:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1009307.9152181868,"samples":504654},{"name":"Using brackets {}","opsSec":1049506.301898513,"samples":524754},{"name":"Using '' + ","opsSec":1046283.4308222575,"samples":523142},{"name":"Using date.toString()","opsSec":1166749.6336407023,"samples":583375}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,139,621|1569811|
|Using delete property (proto: null)|8,975,383|4487692|
|Using delete property (cached proto: null)|3,218,024|1609013|
|Using undefined assignment|19,998,313|9999157|
|Using undefined assignment (proto: null)|10,233,861|5116931|
|Using undefined property (cached proto: null)|19,977,183|9988592|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:21:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3139621.196257221,"samples":1569811},{"name":"Using delete property (proto: null)","opsSec":8975383.102463158,"samples":4487692},{"name":"Using delete property (cached proto: null)","opsSec":3218024.255833652,"samples":1609013},{"name":"Using undefined assignment","opsSec":19998313.880008366,"samples":9999157},{"name":"Using undefined assignment (proto: null)","opsSec":10233861.304119386,"samples":5116931},{"name":"Using undefined property (cached proto: null)","opsSec":19977183.68027047,"samples":9988592}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|307,057|153529|
|NodeError|299,054|149528|
|NodeError Range|318,652|159327|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:28:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":307057.9969294159,"samples":153529},{"name":"NodeError","opsSec":299054.87316124805,"samples":149528},{"name":"NodeError Range","opsSec":318652.026906655,"samples":159327}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,592,982|796492|
|Function returning explicitly undefined|1,586,970|793486|
|Function returning implicitly undefined|1,640,283|820142|
|Function returning string|1,595,506|797754|
|Function returning integer|1,626,137|813069|
|Function returning float|1,590,566|795284|
|Function returning functions|1,586,033|793017|
|Function returning arrow functions|1,596,911|798456|
|Function returning empty object|1,635,104|817553|
|Function returning empty array|1,622,077|811039|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:34:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1592982.1871864968,"samples":796492},{"name":"Function returning explicitly undefined","opsSec":1586970.733596881,"samples":793486},{"name":"Function returning implicitly undefined","opsSec":1640283.635857548,"samples":820142},{"name":"Function returning string","opsSec":1595506.2640891715,"samples":797754},{"name":"Function returning integer","opsSec":1626137.6975385079,"samples":813069},{"name":"Function returning float","opsSec":1590566.743452527,"samples":795284},{"name":"Function returning functions","opsSec":1586033.121337587,"samples":793017},{"name":"Function returning arrow functions","opsSec":1596911.6774246846,"samples":798456},{"name":"Function returning empty object","opsSec":1635104.652676088,"samples":817553},{"name":"Function returning empty array","opsSec":1622077.8896955505,"samples":811039}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|19,893,651|9946826|
|using Array.includes (first item)|19,861,191|9930596|
|Using raw comparison|19,939,038|9969520|
|Using raw comparison (first item)|19,900,584|9950293|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:41:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":19893651.64194739,"samples":9946826},{"name":"using Array.includes (first item)","opsSec":19861191.40408754,"samples":9930596},{"name":"Using raw comparison","opsSec":19939038.64421114,"samples":9969520},{"name":"Using raw comparison (first item)","opsSec":19900584.686552133,"samples":9950293}]}-->
