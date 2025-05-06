## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,219,736|1609869|
|Using replaceAll()|3,159,707|1580647|
|Using replaceAll(//g)|2,972,112|1486346|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:36:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1609869,"opsSec":3219736.943926282},{"name":"Using replaceAll()","samples":1580647,"opsSec":3159707.447696363},{"name":"Using replaceAll(//g)","samples":1486346,"opsSec":2972112.6341957655}]}-->
