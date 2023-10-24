## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|717,300|97|
|Using brackets {}|731,997|94|
|Using '' + |734,412|98|
|Using date.toString()|793,721|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using String()","opsSec":717299.6399118021,"samples":6},{"name":"Using brackets {}","opsSec":731996.5965366189,"samples":4},{"name":"Using '' + ","opsSec":734412.4249236775,"samples":6},{"name":"Using date.toString()","opsSec":793720.6541232369,"samples":5}]}-->
