## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|276,561|138283|
|[True conditional] Using constructor name|294,660|147331|
|[True conditional] Check if property is valid then instanceof |301,799|150900|
|[False conditional] Using instanceof only|19,438,707|9719354|
|[False conditional] Using constructor name|19,524,779|9762390|
|[False conditional] Check if property is valid then instanceof |17,729,873|8864937|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:46:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":276561.3161573272,"samples":138283},{"name":"[True conditional] Using constructor name","opsSec":294660.9339165378,"samples":147331},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":301799.57023732027,"samples":150900},{"name":"[False conditional] Using instanceof only","opsSec":19438707.572121285,"samples":9719354},{"name":"[False conditional] Using constructor name","opsSec":19524779.843820743,"samples":9762390},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":17729873.7517484,"samples":8864937}]}-->
