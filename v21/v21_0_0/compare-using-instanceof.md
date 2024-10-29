## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|414,495|207248|
|[True conditional] Using constructor name|335,907|168027|
|[True conditional] Check if property is valid then instanceof |332,352|166352|
|[False conditional] Using instanceof only|98,267,465|49139881|
|[False conditional] Using constructor name|96,745,829|48372923|
|[False conditional] Check if property is valid then instanceof |96,547,738|48274589|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:10:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"[True conditional] Using instanceof only","opsSec":414495.343439376,"samples":207248},{"name":"[True conditional] Using constructor name","opsSec":335907.7249502777,"samples":168027},{"name":"[True conditional] Check if property is valid then instanceof ","opsSec":332352.12883064314,"samples":166352},{"name":"[False conditional] Using instanceof only","opsSec":98267465.79200545,"samples":49139881},{"name":"[False conditional] Using constructor name","opsSec":96745829.74670061,"samples":48372923},{"name":"[False conditional] Check if property is valid then instanceof ","opsSec":96547738.47321936,"samples":48274589}]}-->
