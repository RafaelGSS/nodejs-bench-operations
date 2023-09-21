## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|156,843|57|
|[True conditional] Using constructor name|122,918|91|
|[True conditional] Check if property is valid then instanceof |123,131|92|
|[False conditional] Using instanceof only|587,544,728|97|
|[False conditional] Using constructor name|588,093,186|96|
|[False conditional] Check if property is valid then instanceof |588,210,194|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Thu Sep 21 2023 22:07:21 GMT+0000 (Coordinated Universal Time)
</details>

