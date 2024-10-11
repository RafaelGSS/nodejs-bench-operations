## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|8,126,805|4063407|
|Adding property in the object creation - small object|7,839,474|3919739|
|Adding property after the function creation - small class|258,999|129845|
|Adding property in the function creation - small class|268,329|134168|
|Adding property after the class creation - small class|262,428|131215|
|Adding property in the class creation - small class|263,218|131996|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:24:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":8126805.986969296,"samples":4063407},{"name":"Adding property in the object creation - small object","opsSec":7839474.237052366,"samples":3919739},{"name":"Adding property after the function creation - small class","opsSec":258999.35594343225,"samples":129845},{"name":"Adding property in the function creation - small class","opsSec":268329.96311248984,"samples":134168},{"name":"Adding property after the class creation - small class","opsSec":262428.53827304184,"samples":131215},{"name":"Adding property in the class creation - small class","opsSec":263218.3549284349,"samples":131996}]}-->
