## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|81,634,113|40820536|
|using Array.includes (first item)|77,499,150|38806635|
|Using raw comparison|94,257,400|47128710|
|Using raw comparison (first item)|93,265,514|46632858|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:04:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":81634113.9979275,"samples":40820536},{"name":"using Array.includes (first item)","opsSec":77499150.48593156,"samples":38806635},{"name":"Using raw comparison","opsSec":94257400.20594595,"samples":47128710},{"name":"Using raw comparison (first item)","opsSec":93265514.35995796,"samples":46632858}]}-->
