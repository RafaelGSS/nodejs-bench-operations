## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|258,386|84|
|[True conditional] Using constructor name|256,464|90|
|[True conditional] Check if property is valid then instanceof |260,555|78|
|[False conditional] Using instanceof only|611,160,541|91|
|[False conditional] Using constructor name|609,850,117|92|
|[False conditional] Check if property is valid then instanceof |598,711,230|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>

