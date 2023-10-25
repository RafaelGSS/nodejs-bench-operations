## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|715,598|97|
|Using brackets {}|742,736|96|
|Using '' + |736,370|99|
|Using date.toString()|807,869|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":715597.7242742995,"samples":6},{"name":"Using brackets {}","opsSec":742736.4336766147,"samples":3},{"name":"Using '' + ","opsSec":736370.2634832282,"samples":5},{"name":"Using date.toString()","opsSec":807868.9910217893,"samples":4}]}-->
