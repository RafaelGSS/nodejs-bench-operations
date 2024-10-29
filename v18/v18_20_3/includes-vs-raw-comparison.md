## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|91,693,232|45847832|
|using Array.includes (first item)|79,827,928|39913977|
|Using raw comparison|96,398,189|48202113|
|Using raw comparison (first item)|96,942,086|48475311|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:54:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"using Array.includes","opsSec":91693232.47886112,"samples":45847832},{"name":"using Array.includes (first item)","opsSec":79827928.77437451,"samples":39913977},{"name":"Using raw comparison","opsSec":96398189.54537067,"samples":48202113},{"name":"Using raw comparison (first item)","opsSec":96942086.44317284,"samples":48475311}]}-->
