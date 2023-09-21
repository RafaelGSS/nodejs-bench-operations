## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|308,972|88|
|[True conditional] Using constructor name|303,133|85|
|[True conditional] Check if property is valid then instanceof |302,621|88|
|[False conditional] Using instanceof only|708,955,050|98|
|[False conditional] Using constructor name|708,457,531|97|
|[False conditional] Check if property is valid then instanceof |710,207,339|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:18 GMT+0000 (Coordinated Universal Time)
</details>

