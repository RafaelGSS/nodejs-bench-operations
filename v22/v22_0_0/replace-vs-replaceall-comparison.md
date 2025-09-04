## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,408,984|1704601|
|Using replaceAll()|3,194,826|1597462|
|Using replaceAll(//g)|3,080,988|1541005|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:02:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1704601,"opsSec":3408984.7317671054},{"name":"Using replaceAll()","samples":1597462,"opsSec":3194826.3213800504},{"name":"Using replaceAll(//g)","samples":1541005,"opsSec":3080988.091707766}]}-->
