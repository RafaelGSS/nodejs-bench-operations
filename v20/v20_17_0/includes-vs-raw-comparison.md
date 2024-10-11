## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,723,922|43362469|
|using Array.includes (first item)|82,618,574|41319695|
|Using raw comparison|97,593,936|48797700|
|Using raw comparison (first item)|94,642,861|47323965|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:14:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":86723922.28942214,"samples":43362469},{"name":"using Array.includes (first item)","opsSec":82618574.58060873,"samples":41319695},{"name":"Using raw comparison","opsSec":97593936.48132853,"samples":48797700},{"name":"Using raw comparison (first item)","opsSec":94642861.68547101,"samples":47323965}]}-->
