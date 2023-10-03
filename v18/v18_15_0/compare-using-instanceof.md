## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|188,091|57|
|[True conditional] Using constructor name|148,281|95|
|[True conditional] Check if property is valid then instanceof |149,681|93|
|[False conditional] Using instanceof only|711,699,665|97|
|[False conditional] Using constructor name|711,649,918|99|
|[False conditional] Check if property is valid then instanceof |711,726,707|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:30 GMT+0000 (Coordinated Universal Time)
</details>

