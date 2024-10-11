## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|454,543|227279|
|[True conditional] Using constructor name|355,248|177625|
|[True conditional] Check if property is valid then instanceof |349,599|174871|
|[False conditional] Using instanceof only|97,461,125|48734473|
|[False conditional] Using constructor name|97,033,887|49136340|
|[False conditional] Check if property is valid then instanceof |98,735,233|49370107|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:04:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":454543.2455262503,"samples":227279},{"name":"[True conditional] Using constructor name","opsSec":355248.5065352786,"samples":177625},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":349599.68426133157,"samples":174871},{"name":"[False conditional] Using instanceof only","opsSec":97461125.71927229,"samples":48734473},{"name":"[False conditional] Using constructor name","opsSec":97033887.17597915,"samples":49136340},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":98735233.79480737,"samples":49370107}]}-->
