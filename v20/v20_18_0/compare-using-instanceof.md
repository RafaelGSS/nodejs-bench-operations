## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|390,674|195503|
|[True conditional] Using constructor name|317,239|158620|
|[True conditional] Check if property is valid then instanceof |316,449|158225|
|[False conditional] Using instanceof only|97,094,140|48547929|
|[False conditional] Using constructor name|97,085,882|48542946|
|[False conditional] Check if property is valid then instanceof |97,105,488|48552806|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:09:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":390674.87803767086,"samples":195503},{"name":"[True conditional] Using constructor name","opsSec":317239.634539941,"samples":158620},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":316449.57279307675,"samples":158225},{"name":"[False conditional] Using instanceof only","opsSec":97094140.2104714,"samples":48547929},{"name":"[False conditional] Using constructor name","opsSec":97085882.29141177,"samples":48542946},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":97105488.28760792,"samples":48552806}]}-->
