## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|84,267,529|88|
|using Array.includes (first item)|104,600,321|91|
|Using raw comparison|143,641,090|81|
|Using raw comparison (first item)|144,436,523|81|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 22:26:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":84267528.7886162,"samples":6},{"name":"using Array.includes (first item)","opsSec":104600321.44787107,"samples":5},{"name":"Using raw comparison","opsSec":143641090.03340027,"samples":4},{"name":"Using raw comparison (first item)","opsSec":144436522.75026044,"samples":4}]}-->
