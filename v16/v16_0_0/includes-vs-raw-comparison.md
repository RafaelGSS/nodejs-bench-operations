## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|892,210,934|92|
|using Array.includes (first item)|898,815,308|97|
|Using raw comparison|900,410,597|99|
|Using raw comparison (first item)|896,699,853|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:53:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"using Array.includes","opsSec":892210934.0561348,"samples":6},{"name":"using Array.includes (first item)","opsSec":898815308.2660207,"samples":7},{"name":"Using raw comparison","opsSec":900410597.3258902,"samples":8},{"name":"Using raw comparison (first item)","opsSec":896699852.7538928,"samples":7}]}-->
