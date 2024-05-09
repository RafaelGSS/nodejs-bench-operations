## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|8,760,348|4380175|
|Length = 10_000 - Array.at|9,220,929|4610465|
|Length = 1_000_000 - Array.at|9,219,635|4609818|
|Length = 100 - Array[length - 1]|16,605,450|8302726|
|Length = 10_000 - Array[length - 1]|16,361,477|8180739|
|Length = 1_000_000 - Array[length - 1]|16,408,726|8204364|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:53:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":8760348.136942258,"samples":4380175},{"name":"Length = 10_000 - Array.at","opsSec":9220929.142608078,"samples":4610465},{"name":"Length = 1_000_000 - Array.at","opsSec":9219635.18669104,"samples":4609818},{"name":"Length = 100 - Array[length - 1]","opsSec":16605450.15508371,"samples":8302726},{"name":"Length = 10_000 - Array[length - 1]","opsSec":16361477.110599332,"samples":8180739},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":16408726.92024788,"samples":8204364}]}-->
