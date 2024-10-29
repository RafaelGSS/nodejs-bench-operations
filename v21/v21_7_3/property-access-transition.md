## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,605,274|3802844|
|Adding property in the object creation - small object|7,352,817|3676816|
|Adding property after the function creation - small class|237,578|119201|
|Adding property in the function creation - small class|250,902|126024|
|Adding property after the class creation - small class|242,140|121072|
|Adding property in the class creation - small class|241,428|121382|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:47:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7605274.987936505,"samples":3802844},{"name":"Adding property in the object creation - small object","opsSec":7352817.469586354,"samples":3676816},{"name":"Adding property after the function creation - small class","opsSec":237578.34344237312,"samples":119201},{"name":"Adding property in the function creation - small class","opsSec":250902.55856382952,"samples":126024},{"name":"Adding property after the class creation - small class","opsSec":242140.15094016065,"samples":121072},{"name":"Adding property in the class creation - small class","opsSec":241428.70323102543,"samples":121382}]}-->
