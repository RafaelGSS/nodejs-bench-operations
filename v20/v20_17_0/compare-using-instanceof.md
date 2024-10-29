## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|389,154|194653|
|[True conditional] Using constructor name|316,366|158368|
|[True conditional] Check if property is valid then instanceof |311,526|155807|
|[False conditional] Using instanceof only|95,233,142|47629468|
|[False conditional] Using constructor name|94,440,548|47224649|
|[False conditional] Check if property is valid then instanceof |94,052,955|47026484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:09:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":389154.4897042145,"samples":194653},{"name":"[True conditional] Using constructor name","opsSec":316366.32468414126,"samples":158368},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":311526.831054349,"samples":155807},{"name":"[False conditional] Using instanceof only","opsSec":95233142.6747054,"samples":47629468},{"name":"[False conditional] Using constructor name","opsSec":94440548.0832201,"samples":47224649},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":94052955.39690398,"samples":47026484}]}-->
