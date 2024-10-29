## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|105,208,648|52840120|
|Using dot notation|73,517,239|36759752|
|Using define property (writable)|4,334,096|2167049|
|Using define property initialized (writable)|6,033,464|3016991|
|Using define property (getter)|2,203,965|1108911|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 16:44:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.2`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Directly in the object","opsSec":105208648.54541409,"samples":52840120},{"name":"Using dot notation","opsSec":73517239.22792834,"samples":36759752},{"name":"Using define property (writable)","opsSec":4334096.1190022845,"samples":2167049},{"name":"Using define property initialized (writable)","opsSec":6033464.956187115,"samples":3016991},{"name":"Using define property (getter)","opsSec":2203965.527673722,"samples":1108911}]}-->
