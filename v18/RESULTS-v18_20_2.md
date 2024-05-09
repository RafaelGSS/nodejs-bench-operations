## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|17,040,491|8520246|
|Using dot notation|17,108,977|8554489|
|Using define property (writable)|3,298,720|1649361|
|Using define property initialized (writable)|4,137,830|2068927|
|Using define property (getter)|2,026,725|1013363|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:23:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":17040491.5693464,"samples":8520246},{"name":"Using dot notation","opsSec":17108977.836836074,"samples":8554489},{"name":"Using define property (writable)","opsSec":3298720.557602524,"samples":1649361},{"name":"Using define property initialized (writable)","opsSec":4137830.71183782,"samples":2068927},{"name":"Using define property (getter)","opsSec":2026725.807682783,"samples":1013363}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.011ms
new Array(length)|10|0.002ms
array.push|100|0.023ms
new Array(length)|100|0.009ms
array.push|1,000|0.044ms
new Array(length)|1,000|0.022ms
array.push|10,000|0.373ms
new Array(length)|10,000|0.156ms
array.push|1,000,000|25.647ms
new Array(length)|1,000,000|16.175ms
array.push|100,000,000|2,113.526ms
new Array(length)|100,000,000|4,257.36ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.007ms
new Array(length)|10|0.016ms
array.push|100|0.014ms
new Array(length)|100|0.009ms
array.push|1,000|0.045ms
new Array(length)|1,000|0.024ms
array.push|10,000|0.462ms
new Array(length)|10,000|3.077ms
array.push|1,000,000|255.677ms
new Array(length)|1,000,000|4.582ms
array.push|100,000,000|2,621.579ms
new Array(length)|100,000,000|4,733.294ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|222|112|
|Array.from|22|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":222.87165189892215,"samples":112},{"name":"Array.from","opsSec":22.358545098896833,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|300,449|150225|
|[True conditional] Using constructor name|307,356|153679|
|[True conditional] Check if property is valid then instanceof |313,856|156929|
|[False conditional] Using instanceof only|12,940,977|6470489|
|[False conditional] Using constructor name|16,546,632|8273317|
|[False conditional] Check if property is valid then instanceof |16,515,149|8257575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:51:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":300449.7713480782,"samples":150225},{"name":"[True conditional] Using constructor name","opsSec":307356.9677833919,"samples":153679},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313856.4683956635,"samples":156929},{"name":"[False conditional] Using instanceof only","opsSec":12940977.765511917,"samples":6470489},{"name":"[False conditional] Using constructor name","opsSec":16546632.548230939,"samples":8273317},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":16515149.86612437,"samples":8257575}]}-->

## Crypto Verify

|name|ops/sec|samples|
|-|-|-|
|crypto.createVerify('RSA-SHA256')|6,898|3450|
|crypto.verify('RSA-SHA256')|7,027|3514|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:58:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"crypto.createVerify('RSA-SHA256')","opsSec":6898.508997164198,"samples":3450},{"name":"crypto.verify('RSA-SHA256')","opsSec":7027.518685045811,"samples":3514}]}-->

## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,060,519|530260|
|Using brackets {}|1,078,786|539394|
|Using '' + |1,066,287|533144|
|Using date.toString()|1,156,164|578083|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:14:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1060519.9281912663,"samples":530260},{"name":"Using brackets {}","opsSec":1078786.6615167174,"samples":539394},{"name":"Using '' + ","opsSec":1066287.0309033007,"samples":533144},{"name":"Using date.toString()","opsSec":1156164.1840110673,"samples":578083}]}-->

## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|2,873,402|1436702|
|Using delete property (proto: null)|8,286,215|4143108|
|Using delete property (cached proto: null)|2,904,058|1452030|
|Using undefined assignment|15,246,729|7623365|
|Using undefined assignment (proto: null)|9,032,064|4516033|
|Using undefined property (cached proto: null)|15,279,532|7639767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:19:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using delete property","opsSec":2873402.9586895714,"samples":1436702},{"name":"Using delete property (proto: null)","opsSec":8286215.988146473,"samples":4143108},{"name":"Using delete property (cached proto: null)","opsSec":2904058.057177804,"samples":1452030},{"name":"Using undefined assignment","opsSec":15246729.171196401,"samples":7623365},{"name":"Using undefined assignment (proto: null)","opsSec":9032064.729486898,"samples":4516033},{"name":"Using undefined property (cached proto: null)","opsSec":15279532.484543439,"samples":7639767}]}-->

## Node.js Error

|name|ops/sec|samples|
|-|-|-|
|Error|299,157|149579|
|NodeError|296,979|148490|
|NodeError Range|305,280|152641|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:26:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Error","opsSec":299157.8406604252,"samples":149579},{"name":"NodeError","opsSec":296979.2018819896,"samples":148490},{"name":"NodeError Range","opsSec":305280.6178209943,"samples":152641}]}-->

## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,532,370|766186|
|Function returning explicitly undefined|1,455,669|727835|
|Function returning implicitly undefined|1,481,147|740574|
|Function returning string|1,466,044|733023|
|Function returning integer|1,482,180|741091|
|Function returning float|1,453,744|726873|
|Function returning functions|1,420,435|710218|
|Function returning arrow functions|1,454,915|727458|
|Function returning empty object|1,445,977|722989|
|Function returning empty array|1,478,348|739175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:33:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Function returning null","opsSec":1532370.3442539214,"samples":766186},{"name":"Function returning explicitly undefined","opsSec":1455669.8702000305,"samples":727835},{"name":"Function returning implicitly undefined","opsSec":1481147.7535130663,"samples":740574},{"name":"Function returning string","opsSec":1466044.0579994235,"samples":733023},{"name":"Function returning integer","opsSec":1482180.2005926177,"samples":741091},{"name":"Function returning float","opsSec":1453744.2905705355,"samples":726873},{"name":"Function returning functions","opsSec":1420435.304396125,"samples":710218},{"name":"Function returning arrow functions","opsSec":1454915.9389492974,"samples":727458},{"name":"Function returning empty object","opsSec":1445977.7324755858,"samples":722989},{"name":"Function returning empty array","opsSec":1478348.4315274905,"samples":739175}]}-->

## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|17,167,493|8583747|
|using Array.includes (first item)|16,400,697|8200349|
|Using raw comparison|17,119,705|8559853|
|Using raw comparison (first item)|17,206,260|8603131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:38:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":17167493.598881155,"samples":8583747},{"name":"using Array.includes (first item)","opsSec":16400697.163210584,"samples":8200349},{"name":"Using raw comparison","opsSec":17119705.78775389,"samples":8559853},{"name":"Using raw comparison (first item)","opsSec":17206260.597016066,"samples":8603131}]}-->
