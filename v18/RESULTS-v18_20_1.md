## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,007,958|8503980|
|Using dot notation|17,127,998|8564000|
|Using define property (writable)|3,133,038|1566520|
|Using define property initialized (writable)|3,844,016|1922009|
|Using define property (getter)|1,930,161|965081|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:21:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":17007958.55641526,"samples":8503980},{"name":"Using dot notation","opsSec":17127998.37471405,"samples":8564000},{"name":"Using define property (writable)","opsSec":3133038.3865349498,"samples":1566520},{"name":"Using define property initialized (writable)","opsSec":3844016.3759887177,"samples":1922009},{"name":"Using define property (getter)","opsSec":1930161.9475387426,"samples":965081}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.026ms
new Array(length)|100|0.01ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.391ms
new Array(length)|10,000|0.157ms
array.push|1,000,000|26.221ms
new Array(length)|1,000,000|16.165ms
array.push|100,000,000|2,121.806ms
new Array(length)|100,000,000|4,226.424ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.032ms
new Array(length)|10|0.016ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.043ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.451ms
new Array(length)|10,000|3.073ms
array.push|1,000,000|254.769ms
new Array(length)|1,000,000|4.473ms
array.push|100,000,000|2,608.96ms
new Array(length)|100,000,000|4,653.765ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|230|116|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:37:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":230.1448095242537,"samples":116},{"name":"Array.from","opsSec":22.460915721810473,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|306,863|153432|
|[True conditional] Using constructor name|304,263|152132|
|[True conditional] Check if property is valid then instanceof |309,732|154867|
|[False conditional] Using instanceof only|13,047,417|6523709|
|[False conditional] Using constructor name|16,307,315|8153658|
|[False conditional] Check if property is valid then instanceof |16,138,654|8069328|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:52:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":306863.5965848275,"samples":153432},{"name":"[True conditional] Using constructor name","opsSec":304263.9511065714,"samples":152132},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":309732.1141236471,"samples":154867},{"name":"[False conditional] Using instanceof only","opsSec":13047417.856905647,"samples":6523709},{"name":"[False conditional] Using constructor name","opsSec":16307315.44790869,"samples":8153658},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16138654.291596767,"samples":8069328}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,943|3472|
|crypto.verify('RSA-SHA256')|7,107|3554|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:57:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6943.364302768903,"samples":3472},{"name":"crypto.verify('RSA-SHA256')","opsSec":7107.293771921515,"samples":3554}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,015,283|507642|
|Using brackets {}|1,040,567|520284|
|Using '' + |1,020,026|510014|
|Using date.toString()|1,135,386|567694|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:14:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1015283.4180819185,"samples":507642},{"name":"Using brackets {}","opsSec":1040567.2974074874,"samples":520284},{"name":"Using '' + ","opsSec":1020026.2081525082,"samples":510014},{"name":"Using date.toString()","opsSec":1135386.058560178,"samples":567694}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,875,684|1437843|
|Using delete property (proto: null)|8,631,661|4315831|
|Using delete property (cached proto: null)|2,869,649|1434825|
|Using undefined assignment|15,840,448|7920225|
|Using undefined assignment (proto: null)|9,085,714|4542858|
|Using undefined property (cached proto: null)|15,748,995|7874500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:18:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2875684.0638189805,"samples":1437843},{"name":"Using delete property (proto: null)","opsSec":8631661.419658538,"samples":4315831},{"name":"Using delete property (cached proto: null)","opsSec":2869649.6565427473,"samples":1434825},{"name":"Using undefined assignment","opsSec":15840448.089011496,"samples":7920225},{"name":"Using undefined assignment (proto: null)","opsSec":9085714.838915072,"samples":4542858},{"name":"Using undefined property (cached proto: null)","opsSec":15748995.141220164,"samples":7874500}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|304,572|152287|
|NodeError|301,386|150694|
|NodeError Range|309,234|154618|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:27:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":304572.87285706226,"samples":152287},{"name":"NodeError","opsSec":301386.15703579056,"samples":150694},{"name":"NodeError Range","opsSec":309234.4371300701,"samples":154618}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,488,304|744153|
|Function returning explicitly undefined|1,462,248|731125|
|Function returning implicitly undefined|1,495,015|747508|
|Function returning string|1,478,354|739178|
|Function returning integer|1,511,774|755888|
|Function returning float|1,485,945|742973|
|Function returning functions|1,464,998|732500|
|Function returning arrow functions|1,497,954|748978|
|Function returning empty object|1,514,586|757294|
|Function returning empty array|1,517,224|758613|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:32:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1488304.2385773086,"samples":744153},{"name":"Function returning explicitly undefined","opsSec":1462248.684280745,"samples":731125},{"name":"Function returning implicitly undefined","opsSec":1495015.2151204338,"samples":747508},{"name":"Function returning string","opsSec":1478354.2108769477,"samples":739178},{"name":"Function returning integer","opsSec":1511774.1711525572,"samples":755888},{"name":"Function returning float","opsSec":1485945.7534231558,"samples":742973},{"name":"Function returning functions","opsSec":1464998.1585811873,"samples":732500},{"name":"Function returning arrow functions","opsSec":1497954.4642972478,"samples":748978},{"name":"Function returning empty object","opsSec":1514586.7736852926,"samples":757294},{"name":"Function returning empty array","opsSec":1517224.3938988904,"samples":758613}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,990,600|8495301|
|using Array.includes (first item)|16,921,895|8460948|
|Using raw comparison|16,926,207|8463104|
|Using raw comparison (first item)|16,974,075|8487038|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:39:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16990600.20141161,"samples":8495301},{"name":"using Array.includes (first item)","opsSec":16921895.225377113,"samples":8460948},{"name":"Using raw comparison","opsSec":16926207.98385791,"samples":8463104},{"name":"Using raw comparison (first item)","opsSec":16974075.044923373,"samples":8487038}]}-->
