## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,627,220|3813647|
|Adding property in the object creation - small object|7,722,828|3861416|
|Adding property after the function creation - small class|244,733|122372|
|Adding property in the function creation - small class|249,113|124557|
|Adding property after the class creation - small class|211,464|105735|
|Adding property in the class creation - small class|210,011|108413|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:43:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Adding property after object creation - small object","samples":3813647,"opsSec":7627220.992240663},{"name":"Adding property in the object creation - small object","samples":3861416,"opsSec":7722828.648292367},{"name":"Adding property after the function creation - small class","samples":122372,"opsSec":244733.12552830024},{"name":"Adding property in the function creation - small class","samples":124557,"opsSec":249113.61038631338},{"name":"Adding property after the class creation - small class","samples":105735,"opsSec":211464.8808581642},{"name":"Adding property in the class creation - small class","samples":108413,"opsSec":210011.75366898457}]}-->
