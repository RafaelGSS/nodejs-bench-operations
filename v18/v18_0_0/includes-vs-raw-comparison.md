## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|104,338,928|94|
|using Array.includes (first item)|115,891,437|97|
|Using raw comparison|822,941,540|98|
|Using raw comparison (first item)|822,568,948|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":104338927.9102693,"samples":7},{"name":"using Array.includes (first item)","opsSec":115891437.13599564,"samples":7},{"name":"Using raw comparison","opsSec":822941540.1637625,"samples":9},{"name":"Using raw comparison (first item)","opsSec":822568948.2590978,"samples":6}]}-->
