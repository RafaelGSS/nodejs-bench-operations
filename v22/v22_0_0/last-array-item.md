## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|88,072,339|44295445|
|Length = 10_000 - Array.at|92,738,843|46369452|
|Length = 1_000_000 - Array.at|93,220,999|46610523|
|Length = 100 - Array[length - 1]|90,780,557|45393359|
|Length = 10_000 - Array[length - 1]|87,536,233|43769338|
|Length = 1_000_000 - Array[length - 1]|92,426,506|46213264|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:59:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Length = 100 - Array.at","samples":44295445,"opsSec":88072339.96662533},{"name":"Length = 10_000 - Array.at","samples":46369452,"opsSec":92738843.16331887},{"name":"Length = 1_000_000 - Array.at","samples":46610523,"opsSec":93220999.20305839},{"name":"Length = 100 - Array[length - 1]","samples":45393359,"opsSec":90780557.26826154},{"name":"Length = 10_000 - Array[length - 1]","samples":43769338,"opsSec":87536233.03880835},{"name":"Length = 1_000_000 - Array[length - 1]","samples":46213264,"opsSec":92426506.74190345}]}-->
