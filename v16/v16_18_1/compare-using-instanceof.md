## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|157,107|55|
|[True conditional] Using constructor name|124,530|88|
|[True conditional] Check if property is valid then instanceof |126,564|93|
|[False conditional] Using instanceof only|780,188,462|93|
|[False conditional] Using constructor name|774,171,316|88|
|[False conditional] Check if property is valid then instanceof |783,333,715|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>

