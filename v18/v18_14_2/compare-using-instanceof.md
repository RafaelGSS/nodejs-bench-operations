## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|144,343|54|
|[True conditional] Using constructor name|112,543|86|
|[True conditional] Check if property is valid then instanceof |112,750|89|
|[False conditional] Using instanceof only|640,615,896|89|
|[False conditional] Using constructor name|637,069,653|90|
|[False conditional] Check if property is valid then instanceof |637,711,766|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:34 GMT+0000 (Coordinated Universal Time)
</details>

