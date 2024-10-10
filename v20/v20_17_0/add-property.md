## Adding property

|name|ops/sec|samples|
|-|-|-|
|Directly in the object|100,948,665|50507552|
|Using dot notation|67,474,805|33741191|
|Using define property (writable)|4,218,627|2110098|
|Using define property initialized (writable)|5,458,792|2729677|
|Using define property (getter)|1,838,640|924597|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:05:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Directly in the object","opsSec":100948665.64519227,"samples":50507552},{"name":"Using dot notation","opsSec":67474805.79385586,"samples":33741191},{"name":"Using define property (writable)","opsSec":4218627.176925445,"samples":2110098},{"name":"Using define property initialized (writable)","opsSec":5458792.323022715,"samples":2729677},{"name":"Using define property (getter)","opsSec":1838640.7573224779,"samples":924597}]}-->
