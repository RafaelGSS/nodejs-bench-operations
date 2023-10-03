## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,387|55|
|[True conditional] Using constructor name|146,417|93|
|[True conditional] Check if property is valid then instanceof |147,504|97|
|[False conditional] Using instanceof only|718,806,538|97|
|[False conditional] Using constructor name|716,777,297|96|
|[False conditional] Check if property is valid then instanceof |718,636,789|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>

