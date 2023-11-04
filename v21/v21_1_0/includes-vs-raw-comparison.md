## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|703,931,615|96|
|using Array.includes (first item)|710,322,369|95|
|Using raw comparison|710,544,561|99|
|Using raw comparison (first item)|709,022,177|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:19:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"using Array.includes","opsSec":703931615.1054384,"samples":6},{"name":"using Array.includes (first item)","opsSec":710322369.0328821,"samples":7},{"name":"Using raw comparison","opsSec":710544561.379697,"samples":9},{"name":"Using raw comparison (first item)","opsSec":709022176.5600064,"samples":7}]}-->
