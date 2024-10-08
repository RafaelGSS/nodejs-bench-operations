## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|422,361|211181|
|[True conditional] Using constructor name|340,854|170430|
|[True conditional] Check if property is valid then instanceof |331,980|166007|
|[False conditional] Using instanceof only|94,572,157|47291935|
|[False conditional] Using constructor name|96,492,893|48273136|
|[False conditional] Check if property is valid then instanceof |96,232,925|48128060|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:05:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":422361.77023519704,"samples":211181},{"name":"[True conditional] Using constructor name","opsSec":340854.8449113256,"samples":170430},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":331980.13072310336,"samples":166007},{"name":"[False conditional] Using instanceof only","opsSec":94572157.23832603,"samples":47291935},{"name":"[False conditional] Using constructor name","opsSec":96492893.48222613,"samples":48273136},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96232925.55535096,"samples":48128060}]}-->
