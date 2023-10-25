## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|671,645,215|87|
|using Array.includes (first item)|673,875,921|89|
|Using raw comparison|668,800,387|88|
|Using raw comparison (first item)|676,171,733|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:01:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":671645215.3319832,"samples":6},{"name":"using Array.includes (first item)","opsSec":673875921.439882,"samples":6},{"name":"Using raw comparison","opsSec":668800387.3062022,"samples":6},{"name":"Using raw comparison (first item)","opsSec":676171732.9859108,"samples":5}]}-->
