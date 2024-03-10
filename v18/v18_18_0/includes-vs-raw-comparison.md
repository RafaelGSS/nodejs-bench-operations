## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|821,490,024|99|
|using Array.includes (first item)|821,456,350|100|
|Using raw comparison|823,084,273|99|
|Using raw comparison (first item)|821,966,068|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":821490024.4522263,"samples":6},{"name":"using Array.includes (first item)","opsSec":821456350.0673611,"samples":7},{"name":"Using raw comparison","opsSec":823084272.7637917,"samples":7},{"name":"Using raw comparison (first item)","opsSec":821966067.7752811,"samples":8}]}-->
