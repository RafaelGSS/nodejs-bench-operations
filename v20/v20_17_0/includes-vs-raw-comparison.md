## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|86,991,005|43594809|
|using Array.includes (first item)|85,327,936|42663982|
|Using raw comparison|97,242,716|48621366|
|Using raw comparison (first item)|97,952,448|49028894|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:24:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":86991005.8767885,"samples":43594809},{"name":"using Array.includes (first item)","opsSec":85327936.18309279,"samples":42663982},{"name":"Using raw comparison","opsSec":97242716.24667996,"samples":48621366},{"name":"Using raw comparison (first item)","opsSec":97952448.1740895,"samples":49028894}]}-->
