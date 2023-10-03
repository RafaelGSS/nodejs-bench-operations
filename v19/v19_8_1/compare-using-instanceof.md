## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|183,064|56|
|[True conditional] Using constructor name|146,849|96|
|[True conditional] Check if property is valid then instanceof |150,597|97|
|[False conditional] Using instanceof only|715,625,464|97|
|[False conditional] Using constructor name|714,022,687|96|
|[False conditional] Check if property is valid then instanceof |714,409,793|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:29 GMT+0000 (Coordinated Universal Time)
</details>

