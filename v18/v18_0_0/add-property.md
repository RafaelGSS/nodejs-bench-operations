## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|821,903,863|98|
|Using dot notation|820,292,038|96|
|Using define property (writable)|4,484,252|96|
|Using define property initialized (writable)|5,761,706|93|
|Using define property (getter)|2,366,994|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:33:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Directly in the object","opsSec":821903862.8002962,"samples":6},{"name":"Using dot notation","opsSec":820292038.15731,"samples":7},{"name":"Using define property (writable)","opsSec":4484252.163715559,"samples":5},{"name":"Using define property initialized (writable)","opsSec":5761705.756406169,"samples":4},{"name":"Using define property (getter)","opsSec":2366993.843300415,"samples":4}]}-->
