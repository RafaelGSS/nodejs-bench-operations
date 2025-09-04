## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|65,531,218|32765636|
|using Array.includes (first item)|77,987,443|38995587|
|Using raw comparison|88,621,782|44310908|
|Using raw comparison (first item)|92,772,743|46386402|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:11:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"using Array.includes","samples":32765636,"opsSec":65531218.52652568},{"name":"using Array.includes (first item)","samples":38995587,"opsSec":77987443.39265786},{"name":"Using raw comparison","samples":44310908,"opsSec":88621782.85545321},{"name":"Using raw comparison (first item)","samples":46386402,"opsSec":92772743.32662587}]}-->
