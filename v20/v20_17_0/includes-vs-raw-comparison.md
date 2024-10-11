## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|85,490,263|42745152|
|using Array.includes (first item)|85,517,913|42759058|
|Using raw comparison|95,899,162|47949585|
|Using raw comparison (first item)|97,935,148|48985764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:04:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"using Array.includes","opsSec":85490263.64859556,"samples":42745152},{"name":"using Array.includes (first item)","opsSec":85517913.49358083,"samples":42759058},{"name":"Using raw comparison","opsSec":95899162.51986532,"samples":47949585},{"name":"Using raw comparison (first item)","opsSec":97935148.81375135,"samples":48985764}]}-->
