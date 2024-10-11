## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|447,408|223826|
|[True conditional] Using constructor name|357,577|178790|
|[True conditional] Check if property is valid then instanceof |343,301|171677|
|[False conditional] Using instanceof only|98,239,972|49133431|
|[False conditional] Using constructor name|98,107,066|49062712|
|[False conditional] Check if property is valid then instanceof |98,548,090|49274054|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:09:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":447408.61508229864,"samples":223826},{"name":"[True conditional] Using constructor name","opsSec":357577.8838540833,"samples":178790},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":343301.7920366742,"samples":171677},{"name":"[False conditional] Using instanceof only","opsSec":98239972.54063596,"samples":49133431},{"name":"[False conditional] Using constructor name","opsSec":98107066.20577157,"samples":49062712},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":98548090.65553606,"samples":49274054}]}-->
