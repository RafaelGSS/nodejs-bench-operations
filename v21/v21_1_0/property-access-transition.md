## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|5,678,241|98|
|Adding property in the object creation - small object|5,720,551|99|
|Adding property after the function creation - small class|287,744|89|
|Adding property in the function creation - small class|291,904|92|
|Adding property after the class creation - small class|294,874|88|
|Adding property in the class creation - small class|291,510|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:00:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":5678241.39246706,"samples":5},{"name":"Adding property in the object creation - small object","opsSec":5720550.524755492,"samples":6},{"name":"Adding property after the function creation - small class","opsSec":287743.7202524514,"samples":3},{"name":"Adding property in the function creation - small class","opsSec":291904.460006997,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":294874.1031723559,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":291510.1964441651,"samples":4}]}-->
