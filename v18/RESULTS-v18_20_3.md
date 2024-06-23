## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|16,543,791|8271896|
|Using dot notation|16,692,177|8346089|
|Using define property (writable)|3,218,839|1609420|
|Using define property initialized (writable)|3,963,717|1981859|
|Using define property (getter)|1,988,190|994096|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 22:37:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Directly in the object","opsSec":16543791.768994715,"samples":8271896},{"name":"Using dot notation","opsSec":16692177.198183998,"samples":8346089},{"name":"Using define property (writable)","opsSec":3218839.8390401076,"samples":1609420},{"name":"Using define property initialized (writable)","opsSec":3963717.6195752667,"samples":1981859},{"name":"Using define property (getter)","opsSec":1988190.4174227482,"samples":994096}]}-->
