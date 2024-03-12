## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|894,607,954|96|
|Length = 10_000 - Array.at|894,159,431|98|
|Length = 1_000_000 - Array.at|895,265,279|94|
|Length = 100 - Array[length - 1]|785,512,339|98|
|Length = 10_000 - Array[length - 1]|780,352,230|91|
|Length = 1_000_000 - Array[length - 1]|780,973,570|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:52:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":894607953.8257273,"samples":6},{"name":"Length = 10_000 - Array.at","opsSec":894159431.3725663,"samples":7},{"name":"Length = 1_000_000 - Array.at","opsSec":895265279.4795567,"samples":6},{"name":"Length = 100 - Array[length - 1]","opsSec":785512338.5323402,"samples":6},{"name":"Length = 10_000 - Array[length - 1]","opsSec":780352229.993793,"samples":6},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":780973570.2665823,"samples":5}]}-->
