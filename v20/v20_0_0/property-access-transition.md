## Property access after shape transition

|name|ops/sec|samples|
|-|-|-|
|Adding property after object creation - small object|4,632,522|89|
|Adding property in the object creation - small object|4,772,044|91|
|Adding property after the function creation - small class|162,626|82|
|Adding property in the function creation - small class|168,631|83|
|Adding property after the class creation - small class|136,475|76|
|Adding property in the class creation - small class|135,076|74|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:27:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Adding property after object creation - small object","opsSec":4632521.902304837,"samples":6},{"name":"Adding property in the object creation - small object","opsSec":4772043.969145831,"samples":4},{"name":"Adding property after the function creation - small class","opsSec":162625.5559601584,"samples":4},{"name":"Adding property in the function creation - small class","opsSec":168630.51134994446,"samples":4},{"name":"Adding property after the class creation - small class","opsSec":136475.1688466461,"samples":3},{"name":"Adding property in the class creation - small class","opsSec":135076.35543171162,"samples":3}]}-->
