## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|198,442|59|
|[True conditional] Using constructor name|155,958|94|
|[True conditional] Check if property is valid then instanceof |158,640|91|
|[False conditional] Using instanceof only|716,507,123|98|
|[False conditional] Using constructor name|717,539,742|96|
|[False conditional] Check if property is valid then instanceof |717,715,400|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:31 GMT+0000 (Coordinated Universal Time)
</details>

