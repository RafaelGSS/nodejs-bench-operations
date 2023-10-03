## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|177,677|57|
|[True conditional] Using constructor name|144,084|93|
|[True conditional] Check if property is valid then instanceof |144,900|91|
|[False conditional] Using instanceof only|719,013,279|98|
|[False conditional] Using constructor name|716,971,271|95|
|[False conditional] Check if property is valid then instanceof |718,986,143|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>

