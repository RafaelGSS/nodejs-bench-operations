## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|760,273|94|
|Using brackets {}|767,713|95|
|Using '' + |767,758|97|
|Using date.toString()|843,646|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:51:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":760273.0711645162,"samples":5},{"name":"Using brackets {}","opsSec":767712.555209562,"samples":4},{"name":"Using '' + ","opsSec":767758.1680724251,"samples":6},{"name":"Using date.toString()","opsSec":843645.6626426608,"samples":5}]}-->
