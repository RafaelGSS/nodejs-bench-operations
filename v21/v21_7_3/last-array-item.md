## Get the last item of an Array

|name|ops/sec|samples|
|-|-|-|
|Length = 100 - Array.at|15,149,833|7574917|
|Length = 10_000 - Array.at|15,131,279|7565640|
|Length = 1_000_000 - Array.at|15,081,778|7540890|
|Length = 100 - Array[length - 1]|15,155,088|7577545|
|Length = 10_000 - Array[length - 1]|15,075,756|7537879|
|Length = 1_000_000 - Array[length - 1]|15,163,445|7581723|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:58:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Length = 100 - Array.at","opsSec":15149833.969692992,"samples":7574917},{"name":"Length = 10_000 - Array.at","opsSec":15131279.576332863,"samples":7565640},{"name":"Length = 1_000_000 - Array.at","opsSec":15081778.823601374,"samples":7540890},{"name":"Length = 100 - Array[length - 1]","opsSec":15155088.51484278,"samples":7577545},{"name":"Length = 10_000 - Array[length - 1]","opsSec":15075756.371791543,"samples":7537879},{"name":"Length = 1_000_000 - Array[length - 1]","opsSec":15163445.54502256,"samples":7581723}]}-->
