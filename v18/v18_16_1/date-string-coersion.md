## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|689,223|96|
|Using brackets {}|699,056|95|
|Using '' + |690,419|95|
|Using date.toString()|754,478|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":689222.9658939454,"samples":6},{"name":"Using brackets {}","opsSec":699055.8190362732,"samples":4},{"name":"Using '' + ","opsSec":690418.8967144209,"samples":3},{"name":"Using date.toString()","opsSec":754477.9095854331,"samples":5}]}-->
