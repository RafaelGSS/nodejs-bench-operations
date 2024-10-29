## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|7,932,427|3966286|
|Adding property in the object creation - small object|7,597,746|3799525|
|Adding property after the function creation - small class|241,558|121125|
|Adding property in the function creation - small class|260,929|130465|
|Adding property after the class creation - small class|244,354|122326|
|Adding property in the class creation - small class|250,905|125512|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:47:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":7932427.788462805,"samples":3966286},{"name":"Adding property in the object creation - small object","opsSec":7597746.8496558415,"samples":3799525},{"name":"Adding property after the function creation - small class","opsSec":241558.93178195084,"samples":121125},{"name":"Adding property in the function creation - small class","opsSec":260929.62739249208,"samples":130465},{"name":"Adding property after the class creation - small class","opsSec":244354.83080477474,"samples":122326},{"name":"Adding property in the class creation - small class","opsSec":250905.67589411646,"samples":125512}]}-->
