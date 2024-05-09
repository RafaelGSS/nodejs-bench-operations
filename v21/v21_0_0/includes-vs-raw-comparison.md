## Array.includes vs raw comparison

|name|ops/sec|samples|
|-|-|-|
|using Array.includes|16,464,949|8232475|
|using Array.includes (first item)|16,516,749|8258375|
|Using raw comparison|16,499,465|8249733|
|Using raw comparison (first item)|16,525,302|8262652|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:42:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"using Array.includes","opsSec":16464949.717360405,"samples":8232475},{"name":"using Array.includes (first item)","opsSec":16516749.070655636,"samples":8258375},{"name":"Using raw comparison","opsSec":16499465.205376633,"samples":8249733},{"name":"Using raw comparison (first item)","opsSec":16525302.636781046,"samples":8262652}]}-->
