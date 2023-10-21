## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,564,866|96|
|Adding property in the object creation - small object|2,564,156|98|
|Adding property after the function creation - small class|143,131|83|
|Adding property in the function creation - small class|148,981|86|
|Adding property after the class creation - small class|119,430|81|
|Adding property in the class creation - small class|121,481|82|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:17:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2564866.0620518154,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":2564156.319142769,"samples":7},{"name":"Adding property after the function creation - small class","opsSec":143130.84951239338,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":148980.88414548317,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":119430.13444239329,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":121480.92689181764,"samples":4}]}-->
