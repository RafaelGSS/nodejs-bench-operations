## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|611,011|90|
|Using brackets {}|650,779|83|
|Using '' + |614,205|90|
|Using date.toString()|715,967|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":611011.174286168,"samples":3},{"name":"Using brackets {}","opsSec":650779.4278579067,"samples":7},{"name":"Using '' + ","opsSec":614205.2094200691,"samples":6},{"name":"Using date.toString()","opsSec":715966.7825746011,"samples":6}]}-->
