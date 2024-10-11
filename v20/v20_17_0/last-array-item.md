## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|130,176,870|65088460|
|Length = 10_000 - Array.at|72,473,806|36236907|
|Length = 1_000_000 - Array.at|95,050,145|47525447|
|Length = 100 - Array[length - 1]|95,983,924|47991967|
|Length = 10_000 - Array[length - 1]|95,937,795|47968903|
|Length = 1_000_000 - Array[length - 1]|94,047,970|47024658|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:08:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":130176870.79314284,"samples":65088460},{"name":"Length = 10_000 - Array.at","opsSec":72473806.46272413,"samples":36236907},{"name":"Length = 1_000_000 - Array.at","opsSec":95050145.95535134,"samples":47525447},{"name":"Length = 100 - Array[length - 1]","opsSec":95983924.5935754,"samples":47991967},{"name":"Length = 10_000 - Array[length - 1]","opsSec":95937795.63871807,"samples":47968903},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":94047970.54973333,"samples":47024658}]}-->
