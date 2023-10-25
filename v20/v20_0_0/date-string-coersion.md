## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|633,410|86|
|Using brackets {}|654,729|87|
|Using '' + |654,443|90|
|Using date.toString()|718,794|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":633409.991499142,"samples":4},{"name":"Using brackets {}","opsSec":654729.0446645044,"samples":5},{"name":"Using '' + ","opsSec":654442.8666460891,"samples":5},{"name":"Using date.toString()","opsSec":718793.6284471028,"samples":5}]}-->
