## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|2,632,711|1316356|
|Adding property in the object creation - small object|2,595,338|1297670|
|Adding property after the function creation - small class|194,441|97221|
|Adding property in the function creation - small class|193,961|96981|
|Adding property after the class creation - small class|160,759|80380|
|Adding property in the class creation - small class|155,671|77836|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:48:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":2632711.352844586,"samples":1316356},{"name":"Adding property in the object creation - small object","opsSec":2595338.599930155,"samples":1297670},{"name":"Adding property after the function creation - small class","opsSec":194441.8542277107,"samples":97221},{"name":"Adding property in the function creation - small class","opsSec":193961.7811830713,"samples":96981},{"name":"Adding property after the class creation - small class","opsSec":160759.2829501974,"samples":80380},{"name":"Adding property in the class creation - small class","opsSec":155671.5628683133,"samples":77836}]}-->
