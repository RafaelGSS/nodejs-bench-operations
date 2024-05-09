## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,912,868|1456435|
|Adding property in the object creation - small object|2,906,996|1453499|
|Adding property after the function creation - small class|211,279|105640|
|Adding property in the function creation - small class|219,056|109530|
|Adding property after the class creation - small class|180,662|90332|
|Adding property in the class creation - small class|180,217|90109|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:40:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2912868.630481496,"samples":1456435},{"name":"Adding property in the object creation - small object","opsSec":2906996.179966934,"samples":1453499},{"name":"Adding property after the function creation - small class","opsSec":211279.96957466562,"samples":105640},{"name":"Adding property in the function creation - small class","opsSec":219056.88192988277,"samples":109530},{"name":"Adding property after the class creation - small class","opsSec":180662.91644565435,"samples":90332},{"name":"Adding property in the class creation - small class","opsSec":180217.81197520607,"samples":90109}]}-->
