## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|848,579,096|101|
|using Array.includes (first item)|849,626,075|98|
|Using raw comparison|850,556,973|99|
|Using raw comparison (first item)|849,989,019|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:13:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":848579096.1825773,"samples":7},{"name":"using Array.includes (first item)","opsSec":849626075.449059,"samples":8},{"name":"Using raw comparison","opsSec":850556972.7062522,"samples":8},{"name":"Using raw comparison (first item)","opsSec":849989019.4355488,"samples":8}]}-->
