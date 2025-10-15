## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,073,475|536738|
|Using brackets {}|1,083,520|541821|
|Using '' + |1,103,505|551753|
|Using date.toString()|1,201,171|600587|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:25:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using String()","samples":536738,"opsSec":1073475.8346847214},{"name":"Using brackets {}","samples":541821,"opsSec":1083520.6846900594},{"name":"Using '' + ","samples":551753,"opsSec":1103505.3445178252},{"name":"Using date.toString()","samples":600587,"opsSec":1201171.1099823094}]}-->
