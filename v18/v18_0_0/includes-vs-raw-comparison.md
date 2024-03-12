## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|104,226,042|94|
|using Array.includes (first item)|114,999,781|94|
|Using raw comparison|820,257,708|94|
|Using raw comparison (first item)|819,242,249|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:49:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"using Array.includes","opsSec":104226041.82179572,"samples":7},{"name":"using Array.includes (first item)","opsSec":114999781.39441405,"samples":6},{"name":"Using raw comparison","opsSec":820257708.463046,"samples":7},{"name":"Using raw comparison (first item)","opsSec":819242249.2563151,"samples":6}]}-->
