## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|89,798,914|44900677|
|using Array.includes (first item)|79,858,458|39929236|
|Using raw comparison|94,669,378|47335183|
|Using raw comparison (first item)|92,835,632|46417821|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:57:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":89798914.88187397,"samples":44900677},{"name":"using Array.includes (first item)","opsSec":79858458.26434518,"samples":39929236},{"name":"Using raw comparison","opsSec":94669378.59838124,"samples":47335183},{"name":"Using raw comparison (first item)","opsSec":92835632.53076549,"samples":46417821}]}-->
