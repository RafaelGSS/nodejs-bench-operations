## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|129,517,485|64758769|
|~ (small)|89,417,247|44708628|
|Math.floor (long)|88,125,691|44062850|
|~ (long)|90,874,320|45437164|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:13:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":129517485.6749358,"samples":64758769},{"name":"~ (small)","opsSec":89417247.7736132,"samples":44708628},{"name":"Math.floor (long)","opsSec":88125691.01117952,"samples":44062850},{"name":"~ (long)","opsSec":90874320.18480846,"samples":45437164}]}-->
