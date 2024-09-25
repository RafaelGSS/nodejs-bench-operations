## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|15,954,720|7977361|
|using Array.includes (first item)|17,231,057|8615529|
|Using raw comparison|18,880,653|9440327|
|Using raw comparison (first item)|18,878,635|9439318|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:20:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"using Array.includes","opsSec":15954720.340621807,"samples":7977361},{"name":"using Array.includes (first item)","opsSec":17231057.34520117,"samples":8615529},{"name":"Using raw comparison","opsSec":18880653.39602316,"samples":9440327},{"name":"Using raw comparison (first item)","opsSec":18878635.093716007,"samples":9439318}]}-->
