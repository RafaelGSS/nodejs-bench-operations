## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|92,192,714|46096460|
|using Array.includes (first item)|82,169,994|41085002|
|Using raw comparison|99,624,251|49812131|
|Using raw comparison (first item)|99,706,392|49853202|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:15:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":92192714.7790169,"samples":46096460},{"name":"using Array.includes (first item)","opsSec":82169994.13960071,"samples":41085002},{"name":"Using raw comparison","opsSec":99624251.43982933,"samples":49812131},{"name":"Using raw comparison (first item)","opsSec":99706392.03523296,"samples":49853202}]}-->
