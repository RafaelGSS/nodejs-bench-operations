## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|3,872,414|98|
|Adding property in the object creation - small object|3,872,321|99|
|Adding property after the function creation - small class|253,650|89|
|Adding property in the function creation - small class|254,604|89|
|Adding property after the class creation - small class|219,157|89|
|Adding property in the class creation - small class|217,953|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:28:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":3872414.4806764,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":3872320.69053292,"samples":5},{"name":"Adding property after the function creation - small class","opsSec":253649.88415746318,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":254604.3421914057,"samples":3},{"name":"Adding property after the class creation - small class","opsSec":219156.54779151978,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":217952.98898191657,"samples":3}]}-->
