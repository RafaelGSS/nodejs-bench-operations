## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|15,206,474|7603238|
|Using dot notation|15,112,090|7556046|
|Using define property (writable)|3,394,423|1697212|
|Using define property initialized (writable)|4,206,441|2103221|
|Using define property (getter)|2,098,849|1049425|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":15206474.570586722,"samples":7603238},{"name":"Using dot notation","opsSec":15112090.186548922,"samples":7556046},{"name":"Using define property (writable)","opsSec":3394423.619818937,"samples":1697212},{"name":"Using define property initialized (writable)","opsSec":4206441.79808644,"samples":2103221},{"name":"Using define property (getter)","opsSec":2098849.7817223584,"samples":1049425}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.002ms
array.push|100|0.021ms
new Array(length)|100|0.011ms
array.push|1,000|0.031ms
new Array(length)|1,000|0.015ms
array.push|10,000|0.3ms
new Array(length)|10,000|0.163ms
array.push|1,000,000|29.957ms
new Array(length)|1,000,000|7.765ms
array.push|100,000,000|1,903.614ms
new Array(length)|100,000,000|4,170.727ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.016ms
new Array(length)|100|0.011ms
array.push|1,000|0.038ms
new Array(length)|1,000|0.021ms
array.push|10,000|0.318ms
new Array(length)|10,000|0.201ms
array.push|1,000,000|19.236ms
new Array(length)|1,000,000|7.981ms
array.push|100,000,000|2,116.482ms
new Array(length)|100,000,000|4,798.587ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|236|119|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:40:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":236.7840377218385,"samples":119},{"name":"Array.from","opsSec":23.404131331198588,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|330,557|165279|
|[True conditional] Using constructor name|326,182|163092|
|[True conditional] Check if property is valid then instanceof |334,792|167397|
|[False conditional] Using instanceof only|15,366,493|7683247|
|[False conditional] Using constructor name|15,315,702|7657852|
|[False conditional] Check if property is valid then instanceof |15,338,555|7669278|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:55:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":330557.3269852781,"samples":165279},{"name":"[True conditional] Using constructor name","opsSec":326182.05008368543,"samples":163092},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":334792.7753280481,"samples":167397},{"name":"[False conditional] Using instanceof only","opsSec":15366493.723380392,"samples":7683247},{"name":"[False conditional] Using constructor name","opsSec":15315702.713506222,"samples":7657852},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":15338555.907929517,"samples":7669278}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,880|3441|
|crypto.verify('RSA-SHA256')|6,984|3493|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:01:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6880.64971377759,"samples":3441},{"name":"crypto.verify('RSA-SHA256')","opsSec":6984.5801605758315,"samples":3493}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,056,221|528111|
|Using brackets {}|1,077,612|538807|
|Using '' + |1,076,848|538425|
|Using date.toString()|1,187,348|593675|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:16:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1056221.1486855405,"samples":528111},{"name":"Using brackets {}","opsSec":1077612.4503931345,"samples":538807},{"name":"Using '' + ","opsSec":1076848.1930490688,"samples":538425},{"name":"Using date.toString()","opsSec":1187348.0859950937,"samples":593675}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,229,679|1614840|
|Using delete property (proto: null)|8,924,528|4462265|
|Using delete property (cached proto: null)|3,103,523|1551762|
|Using undefined assignment|15,452,340|7726171|
|Using undefined assignment (proto: null)|9,287,437|4643719|
|Using undefined property (cached proto: null)|15,459,632|7729817|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:23:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":3229679.580143805,"samples":1614840},{"name":"Using delete property (proto: null)","opsSec":8924528.375728248,"samples":4462265},{"name":"Using delete property (cached proto: null)","opsSec":3103523.925513374,"samples":1551762},{"name":"Using undefined assignment","opsSec":15452340.176612843,"samples":7726171},{"name":"Using undefined assignment (proto: null)","opsSec":9287437.294134187,"samples":4643719},{"name":"Using undefined property (cached proto: null)","opsSec":15459632.763150053,"samples":7729817}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|306,029|153015|
|NodeError|309,680|154841|
|NodeError Range|315,307|157654|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:29:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":306029.22574605234,"samples":153015},{"name":"NodeError","opsSec":309680.9260265702,"samples":154841},{"name":"NodeError Range","opsSec":315307.2659647115,"samples":157654}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,672,396|836199|
|Function returning explicitly undefined|1,629,672|814837|
|Function returning implicitly undefined|1,650,434|825218|
|Function returning string|1,631,082|815542|
|Function returning integer|1,651,652|825827|
|Function returning float|1,641,064|820533|
|Function returning functions|1,623,975|811988|
|Function returning arrow functions|1,638,297|819149|
|Function returning empty object|1,676,883|838442|
|Function returning empty array|1,653,733|826867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:35:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1672396.4747747001,"samples":836199},{"name":"Function returning explicitly undefined","opsSec":1629672.2823251414,"samples":814837},{"name":"Function returning implicitly undefined","opsSec":1650434.2736450844,"samples":825218},{"name":"Function returning string","opsSec":1631082.8908660165,"samples":815542},{"name":"Function returning integer","opsSec":1651652.153453388,"samples":825827},{"name":"Function returning float","opsSec":1641064.276883344,"samples":820533},{"name":"Function returning functions","opsSec":1623975.714180538,"samples":811988},{"name":"Function returning arrow functions","opsSec":1638297.6395762658,"samples":819149},{"name":"Function returning empty object","opsSec":1676883.128023626,"samples":838442},{"name":"Function returning empty array","opsSec":1653733.8180888456,"samples":826867}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,226,038|7613020|
|using Array.includes (first item)|14,690,061|7345031|
|Using raw comparison|15,304,652|7652327|
|Using raw comparison (first item)|15,243,915|7621958|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:43:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":15226038.842857173,"samples":7613020},{"name":"using Array.includes (first item)","opsSec":14690061.999978248,"samples":7345031},{"name":"Using raw comparison","opsSec":15304652.714373548,"samples":7652327},{"name":"Using raw comparison (first item)","opsSec":15243915.451285904,"samples":7621958}]}-->

## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,797,878|6398940|
|Using Object.getOwnPropertyNames()|12,933,738|6466870|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:50:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using Object.keys()","opsSec":12797878.336265294,"samples":6398940},{"name":"Using Object.getOwnPropertyNames()","opsSec":12933738.913585138,"samples":6466870}]}-->

## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,149,833|7574917|
|Length = 10_000 - Array.at|15,131,279|7565640|
|Length = 1_000_000 - Array.at|15,081,778|7540890|
|Length = 100 - Array[length - 1]|15,155,088|7577545|
|Length = 10_000 - Array[length - 1]|15,075,756|7537879|
|Length = 1_000_000 - Array[length - 1]|15,163,445|7581723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:58:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15149833.969692992,"samples":7574917},{"name":"Length = 10_000 - Array.at","opsSec":15131279.576332863,"samples":7565640},{"name":"Length = 1_000_000 - Array.at","opsSec":15081778.823601374,"samples":7540890},{"name":"Length = 100 - Array[length - 1]","opsSec":15155088.51484278,"samples":7577545},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15075756.371791543,"samples":7537879},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15163445.54502256,"samples":7581723}]}-->
