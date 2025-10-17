## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,903,804|3951906|
|Adding property in the object creation - small object|7,419,733|3709867|
|Adding property after the function creation - small class|249,331|124670|
|Adding property in the function creation - small class|265,936|135234|
|Adding property after the class creation - small class|279,681|139973|
|Adding property in the class creation - small class|274,126|137064|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:43:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3951906,"opsSec":7903804.428155358},{"name":"Adding property in the object creation - small object","samples":3709867,"opsSec":7419733.970321063},{"name":"Adding property after the function creation - small class","samples":124670,"opsSec":249331.73664758404},{"name":"Adding property in the function creation - small class","samples":135234,"opsSec":265936.22493627435},{"name":"Adding property after the class creation - small class","samples":139973,"opsSec":279681.4359050685},{"name":"Adding property in the class creation - small class","samples":137064,"opsSec":274126.20611810713}]}-->
