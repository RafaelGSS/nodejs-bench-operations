## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|90,754,886|45378116|
|using Array.includes (first item)|82,494,612|41249777|
|Using raw comparison|98,511,723|49255868|
|Using raw comparison (first item)|96,557,480|48295199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:57:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":90754886.83106738,"samples":45378116},{"name":"using Array.includes (first item)","opsSec":82494612.57270691,"samples":41249777},{"name":"Using raw comparison","opsSec":98511723.39049941,"samples":49255868},{"name":"Using raw comparison (first item)","opsSec":96557480.5892923,"samples":48295199}]}-->
