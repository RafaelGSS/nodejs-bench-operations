## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,041,836|2021113|
|Using replaceAll()|3,047,726|1523864|
|Using replaceAll(//g)|3,430,851|1715716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:37:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using replace(//g)","samples":2021113,"opsSec":4041836.439720267},{"name":"Using replaceAll()","samples":1523864,"opsSec":3047726.451754962},{"name":"Using replaceAll(//g)","samples":1715716,"opsSec":3430851.170620219}]}-->
