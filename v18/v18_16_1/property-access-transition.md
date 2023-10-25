## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,335,956|90|
|Adding property in the object creation - small object|2,321,547|91|
|Adding property after the function creation - small class|127,332|81|
|Adding property in the function creation - small class|134,359|83|
|Adding property after the class creation - small class|108,056|81|
|Adding property in the class creation - small class|108,281|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2335956.0152767636,"samples":9},{"name":"Adding property in the object creation - small object","opsSec":2321547.3013241366,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":127332.44841373153,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":134359.074403954,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":108056.28588286894,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":108280.68664935039,"samples":3}]}-->
