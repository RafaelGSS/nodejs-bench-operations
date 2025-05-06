## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,247,023|1625837|
|Using replaceAll()|3,144,533|1572703|
|Using replaceAll(//g)|3,013,389|1506696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:36:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1625837,"opsSec":3247023.0032144715},{"name":"Using replaceAll()","samples":1572703,"opsSec":3144533.3039612183},{"name":"Using replaceAll(//g)","samples":1506696,"opsSec":3013389.5591544574}]}-->
