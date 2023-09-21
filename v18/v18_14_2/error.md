## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|126,203|60|
|[True conditional] Using constructor name|100,482|90|
|[True conditional] Check if property is valid then instanceof |103,716|92|
|[False conditional] Using instanceof only|710,767,286|92|
|[False conditional] Using constructor name|704,987,935|88|
|[False conditional] Check if property is valid then instanceof |703,669,939|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:27 GMT+0000 (Coordinated Universal Time)
</details>

