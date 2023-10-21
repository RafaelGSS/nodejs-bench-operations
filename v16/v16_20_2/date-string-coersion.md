## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|703,828|96|
|Using brackets {}|703,351|96|
|Using '' + |700,587|97|
|Using date.toString()|754,854|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":703827.8908604542,"samples":7},{"name":"Using brackets {}","opsSec":703351.3931913908,"samples":6},{"name":"Using '' + ","opsSec":700586.5505075369,"samples":5},{"name":"Using date.toString()","opsSec":754853.6602382892,"samples":4}]}-->
