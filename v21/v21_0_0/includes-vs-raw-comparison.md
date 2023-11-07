## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|847,589,433|99|
|using Array.includes (first item)|850,154,313|97|
|Using raw comparison|846,936,153|95|
|Using raw comparison (first item)|850,615,308|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:19:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"using Array.includes","opsSec":847589432.549216,"samples":7},{"name":"using Array.includes (first item)","opsSec":850154313.1508331,"samples":7},{"name":"Using raw comparison","opsSec":846936153.0084305,"samples":7},{"name":"Using raw comparison (first item)","opsSec":850615307.7944437,"samples":7}]}-->
