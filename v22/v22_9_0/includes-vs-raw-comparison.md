## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|91,099,811|45549906|
|using Array.includes (first item)|81,806,767|40904263|
|Using raw comparison|99,519,406|49827641|
|Using raw comparison (first item)|99,359,178|49687404|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"using Array.includes","opsSec":91099811.2712015,"samples":45549906},{"name":"using Array.includes (first item)","opsSec":81806767.97255628,"samples":40904263},{"name":"Using raw comparison","opsSec":99519406.76067795,"samples":49827641},{"name":"Using raw comparison (first item)","opsSec":99359178.80117458,"samples":49687404}]}-->
