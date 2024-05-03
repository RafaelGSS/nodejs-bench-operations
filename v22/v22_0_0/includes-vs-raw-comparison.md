## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|85,736,035|88|
|using Array.includes (first item)|101,467,435|84|
|Using raw comparison|148,674,023|84|
|Using raw comparison (first item)|145,380,090|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:25:58 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":85736034.89863756,"samples":4},{"name":"using Array.includes (first item)","opsSec":101467434.75178717,"samples":7},{"name":"Using raw comparison","opsSec":148674023.2164436,"samples":5},{"name":"Using raw comparison (first item)","opsSec":145380090.04892954,"samples":5}]}-->
