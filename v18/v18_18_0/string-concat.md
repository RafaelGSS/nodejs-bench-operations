## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|819,806,940|99|
|Using backtick (`)|819,821,013|96|
|Using array.join|11,416,874|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:26:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using + sign","opsSec":819806940.2558787,"samples":6},{"name":"Using backtick (`)","opsSec":819821013.484086,"samples":6},{"name":"Using array.join","opsSec":11416873.984910969,"samples":6}]}-->
