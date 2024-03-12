## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|239,117|57|
|[True conditional] Using constructor name|193,161|96|
|[True conditional] Check if property is valid then instanceof |196,364|97|
|[False conditional] Using instanceof only|827,650,680|97|
|[False conditional] Using constructor name|826,888,840|98|
|[False conditional] Check if property is valid then instanceof |827,518,494|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:32:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":239116.80991963012,"samples":3},{"name":"[True conditional] Using constructor name","opsSec":193161.34991541068,"samples":3},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":196364.23180952383,"samples":3},{"name":"[False conditional] Using instanceof only","opsSec":827650680.4010621,"samples":7},{"name":"[False conditional] Using constructor name","opsSec":826888840.131358,"samples":6},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":827518494.1217151,"samples":7}]}-->
