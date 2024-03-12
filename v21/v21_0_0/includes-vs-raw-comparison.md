## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|818,300,882|93|
|using Array.includes (first item)|819,701,364|97|
|Using raw comparison|820,415,245|96|
|Using raw comparison (first item)|821,583,610|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"using Array.includes","opsSec":818300882.1203499,"samples":7},{"name":"using Array.includes (first item)","opsSec":819701363.9498702,"samples":6},{"name":"Using raw comparison","opsSec":820415244.9803745,"samples":7},{"name":"Using raw comparison (first item)","opsSec":821583610.3157591,"samples":7}]}-->
