## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,812,518|1906506|
|Using delete property (proto: null)|16,995,964|8497984|
|Using delete property (cached proto: null)|3,815,936|1908745|
|Using undefined assignment|85,075,448|42541953|
|Using undefined assignment (proto: null)|16,945,279|8476165|
|Using undefined property (cached proto: null)|84,578,360|42304895|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:29:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using delete property","samples":1906506,"opsSec":3812518.2178904912},{"name":"Using delete property (proto: null)","samples":8497984,"opsSec":16995964.532823235},{"name":"Using delete property (cached proto: null)","samples":1908745,"opsSec":3815936.486465122},{"name":"Using undefined assignment","samples":42541953,"opsSec":85075448.13924778},{"name":"Using undefined assignment (proto: null)","samples":8476165,"opsSec":16945279.780784965},{"name":"Using undefined property (cached proto: null)","samples":42304895,"opsSec":84578360.68117088}]}-->
