## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|418,745|209373|
|[True conditional] Using constructor name|334,008|167005|
|[True conditional] Check if property is valid then instanceof |342,145|171114|
|[False conditional] Using instanceof only|96,256,877|48128457|
|[False conditional] Using constructor name|94,332,339|47176204|
|[False conditional] Check if property is valid then instanceof |84,349,697|42176799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:49:06 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":418745.14743487985,"samples":209373},{"name":"[True conditional] Using constructor name","opsSec":334008.8710500158,"samples":167005},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":342145.5483971651,"samples":171114},{"name":"[False conditional] Using instanceof only","opsSec":96256877.42238659,"samples":48128457},{"name":"[False conditional] Using constructor name","opsSec":94332339.54941958,"samples":47176204},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":84349697.33259656,"samples":42176799}]}-->
