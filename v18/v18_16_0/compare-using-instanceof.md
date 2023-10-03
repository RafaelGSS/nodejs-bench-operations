## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|184,817|56|
|[True conditional] Using constructor name|145,298|93|
|[True conditional] Check if property is valid then instanceof |146,350|92|
|[False conditional] Using instanceof only|710,824,497|97|
|[False conditional] Using constructor name|712,391,222|95|
|[False conditional] Check if property is valid then instanceof |712,701,960|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>

