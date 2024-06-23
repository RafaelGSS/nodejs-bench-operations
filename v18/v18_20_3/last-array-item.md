## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,853,961|4426981|
|Length = 10_000 - Array.at|7,894,959|3947480|
|Length = 1_000_000 - Array.at|8,332,204|4166103|
|Length = 100 - Array[length - 1]|16,438,308|8219155|
|Length = 10_000 - Array[length - 1]|17,024,379|8512190|
|Length = 1_000_000 - Array[length - 1]|17,071,602|8535802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:47:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8853961.389276098,"samples":4426981},{"name":"Length = 10_000 - Array.at","opsSec":7894959.954148223,"samples":3947480},{"name":"Length = 1_000_000 - Array.at","opsSec":8332204.497297302,"samples":4166103},{"name":"Length = 100 - Array[length - 1]","opsSec":16438308.577820962,"samples":8219155},{"name":"Length = 10_000 - Array[length - 1]","opsSec":17024379.215770658,"samples":8512190},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":17071602.026976805,"samples":8535802}]}-->
