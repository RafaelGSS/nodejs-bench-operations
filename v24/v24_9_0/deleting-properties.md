## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|4,211,499|2105821|
|Using delete property (proto: null)|18,246,343|9125807|
|Using delete property (cached proto: null)|4,305,800|2153307|
|Using undefined assignment|79,334,063|39673481|
|Using undefined assignment (proto: null)|20,417,028|10215241|
|Using undefined property (cached proto: null)|78,733,874|39370890|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:31:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":2105821,"opsSec":4211499.221753384},{"name":"Using delete property (proto: null)","samples":9125807,"opsSec":18246343.79904246},{"name":"Using delete property (cached proto: null)","samples":2153307,"opsSec":4305800.918389377},{"name":"Using undefined assignment","samples":39673481,"opsSec":79334063.39196935},{"name":"Using undefined assignment (proto: null)","samples":10215241,"opsSec":20417028.11765376},{"name":"Using undefined property (cached proto: null)","samples":39370890,"opsSec":78733874.64658223}]}-->
