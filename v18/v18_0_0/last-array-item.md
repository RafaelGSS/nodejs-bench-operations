## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|20,785,255|10392632|
|Length = 10_000 - Array.at|20,849,691|10428108|
|Length = 1_000_000 - Array.at|20,188,602|10094313|
|Length = 100 - Array[length - 1]|93,986,403|46993222|
|Length = 10_000 - Array[length - 1]|93,665,380|46842138|
|Length = 1_000_000 - Array[length - 1]|102,339,344|51169682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:19:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Length = 100 - Array.at","samples":10392632,"opsSec":20785255.394904267},{"name":"Length = 10_000 - Array.at","samples":10428108,"opsSec":20849691.756155044},{"name":"Length = 1_000_000 - Array.at","samples":10094313,"opsSec":20188602.17744943},{"name":"Length = 100 - Array[length - 1]","samples":46993222,"opsSec":93986403.20990102},{"name":"Length = 10_000 - Array[length - 1]","samples":46842138,"opsSec":93665380.3208356},{"name":"Length = 1_000_000 - Array[length - 1]","samples":51169682,"opsSec":102339344.96488182}]}-->
