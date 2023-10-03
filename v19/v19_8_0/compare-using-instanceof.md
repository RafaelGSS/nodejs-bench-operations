## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|164,487|49|
|[True conditional] Using constructor name|125,674|90|
|[True conditional] Check if property is valid then instanceof |128,045|95|
|[False conditional] Using instanceof only|597,024,692|95|
|[False conditional] Using constructor name|595,601,379|96|
|[False conditional] Check if property is valid then instanceof |596,369,804|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>

