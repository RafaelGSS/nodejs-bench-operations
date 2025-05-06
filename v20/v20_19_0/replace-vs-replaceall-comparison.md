## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,265,541|1633547|
|Using replaceAll()|2,957,102|1478552|
|Using replaceAll(//g)|2,992,583|1496752|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:37:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using replace(//g)","samples":1633547,"opsSec":3265541.9858603803},{"name":"Using replaceAll()","samples":1478552,"opsSec":2957102.237567066},{"name":"Using replaceAll(//g)","samples":1496752,"opsSec":2992583.385587925}]}-->
