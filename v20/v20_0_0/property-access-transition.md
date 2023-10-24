## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,900,263|96|
|Adding property in the object creation - small object|5,937,446|93|
|Adding property after the function creation - small class|199,414|84|
|Adding property in the function creation - small class|206,078|86|
|Adding property after the class creation - small class|166,398|80|
|Adding property in the class creation - small class|161,338|76|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:14:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5900263.00060981,"samples":7},{"name":"Adding property in the object creation - small object","opsSec":5937445.807945457,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":199414.27433714914,"samples":5},{"name":"Adding property in the function creation - small class","opsSec":206077.86014743085,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":166397.82195968204,"samples":4},{"name":"Adding property in the class creation - small class","opsSec":161337.8024749741,"samples":3}]}-->
