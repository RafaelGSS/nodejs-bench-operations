## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|909,669,196|96|
|using Array.includes (first item)|911,323,608|97|
|Using raw comparison|912,682,196|99|
|Using raw comparison (first item)|911,842,370|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:24:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":909669196.270062,"samples":7},{"name":"using Array.includes (first item)","opsSec":911323607.6722407,"samples":8},{"name":"Using raw comparison","opsSec":912682196.2182688,"samples":7},{"name":"Using raw comparison (first item)","opsSec":911842369.5436203,"samples":7}]}-->
