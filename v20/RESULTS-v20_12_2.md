## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|19,158,759|9579380|
|~ (small)|20,046,976|10023489|
|Math.floor (long)|20,039,072|10019537|
|~ (long)|20,078,758|10039380|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Wed Jul 17 2024 13:25:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245231628417969},"benchmarks":[{"name":"Math.floor (small)","opsSec":19158759.57854632,"samples":9579380},{"name":"~ (small)","opsSec":20046976.676859055,"samples":10023489},{"name":"Math.floor (long)","opsSec":20039072.276645616,"samples":10019537},{"name":"~ (long)","opsSec":20078758.233128577,"samples":10039380}]}-->
