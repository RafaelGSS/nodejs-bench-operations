## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|910,470,863|99|
|Using dot notation|908,559,355|98|
|Using define property (writable)|4,997,267|98|
|Using define property initialized (writable)|6,381,523|96|
|Using define property (getter)|2,567,771|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 02 2024 22:16:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":910470862.8158627,"samples":8},{"name":"Using dot notation","opsSec":908559355.4045215,"samples":8},{"name":"Using define property (writable)","opsSec":4997267.344811426,"samples":5},{"name":"Using define property initialized (writable)","opsSec":6381523.059786999,"samples":4},{"name":"Using define property (getter)","opsSec":2567770.611333556,"samples":6}]}-->
