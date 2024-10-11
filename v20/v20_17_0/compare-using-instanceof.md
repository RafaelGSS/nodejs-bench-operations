## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|384,035|192065|
|[True conditional] Using constructor name|321,645|160824|
|[True conditional] Check if property is valid then instanceof |313,081|156584|
|[False conditional] Using instanceof only|83,037,918|41518963|
|[False conditional] Using constructor name|83,478,370|41745158|
|[False conditional] Check if property is valid then instanceof |83,341,405|41672439|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:04:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":384035.08035339956,"samples":192065},{"name":"[True conditional] Using constructor name","opsSec":321645.2943197842,"samples":160824},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":313081.579465457,"samples":156584},{"name":"[False conditional] Using instanceof only","opsSec":83037918.85873897,"samples":41518963},{"name":"[False conditional] Using constructor name","opsSec":83478370.41215077,"samples":41745158},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":83341405.3303227,"samples":41672439}]}-->
