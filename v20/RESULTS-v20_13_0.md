## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|19,934,418|9967210|
|Using dot notation|19,968,250|9984126|
|Using define property (writable)|3,590,025|1795013|
|Using define property initialized (writable)|3,946,251|1973126|
|Using define property (getter)|2,185,765|1092883|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:24:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":19934418.325500306,"samples":9967210},{"name":"Using dot notation","opsSec":19968250.16281365,"samples":9984126},{"name":"Using define property (writable)","opsSec":3590025.9856333607,"samples":1795013},{"name":"Using define property initialized (writable)","opsSec":3946251.384385279,"samples":1973126},{"name":"Using define property (getter)","opsSec":2185765.4710485926,"samples":1092883}]}-->

## Array.append (number)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.004ms
new Array(length)|10|0.001ms
array.push|100|0.079ms
new Array(length)|100|0.006ms
array.push|1,000|0.033ms
new Array(length)|1,000|0.018ms
array.push|10,000|0.277ms
new Array(length)|10,000|0.328ms
array.push|1,000,000|31.444ms
new Array(length)|1,000,000|8.358ms
array.push|100,000,000|2,030.506ms
new Array(length)|100,000,000|4,703.547ms
## Array.append (string)

|type|amount|time elapsed|
|-|-|-|
array.push|10|0.005ms
new Array(length)|10|0.003ms
array.push|100|0.012ms
new Array(length)|100|0.011ms
array.push|1,000|0.04ms
new Array(length)|1,000|0.023ms
array.push|10,000|0.225ms
new Array(length)|10,000|0.263ms
array.push|1,000,000|23.978ms
new Array(length)|1,000,000|4.69ms
array.push|100,000,000|2,813.259ms
new Array(length)|100,000,000|4,215.718ms

## Array Creation

|name|ops/sec|samples|
|-|-|-|
|new Array|235|118|
|Array.from|23|12|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:38:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Array","opsSec":235.57581323880123,"samples":118},{"name":"Array.from","opsSec":23.44092081781577,"samples":12}]}-->

## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|316,315|158158|
|[True conditional] Using constructor name|321,276|160639|
|[True conditional] Check if property is valid then instanceof |323,701|161851|
|[False conditional] Using instanceof only|19,901,088|9950545|
|[False conditional] Using constructor name|19,977,676|9988839|
|[False conditional] Check if property is valid then instanceof |19,847,148|9923575|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 20:53:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":316315.98038837593,"samples":158158},{"name":"[True conditional] Using constructor name","opsSec":321276.2901675791,"samples":160639},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":323701.28008834104,"samples":161851},{"name":"[False conditional] Using instanceof only","opsSec":19901088.487519223,"samples":9950545},{"name":"[False conditional] Using constructor name","opsSec":19977676.80146534,"samples":9988839},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":19847148.72975223,"samples":9923575}]}-->
