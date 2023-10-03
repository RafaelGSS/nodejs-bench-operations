## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|165,449|50|
|[True conditional] Using constructor name|127,758|90|
|[True conditional] Check if property is valid then instanceof |128,501|93|
|[False conditional] Using instanceof only|598,110,072|94|
|[False conditional] Using constructor name|599,303,437|97|
|[False conditional] Check if property is valid then instanceof |596,832,428|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>

