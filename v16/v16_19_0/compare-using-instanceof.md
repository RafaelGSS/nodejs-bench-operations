## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|163,271|58|
|[True conditional] Using constructor name|131,161|91|
|[True conditional] Check if property is valid then instanceof |128,343|92|
|[False conditional] Using instanceof only|592,310,931|98|
|[False conditional] Using constructor name|591,860,889|94|
|[False conditional] Check if property is valid then instanceof |592,629,151|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>

