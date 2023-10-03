## Comparison using `instanceof`

|name|ops/sec|samples|
|-|-|-|
|[True conditional] Using instanceof only|169,177|54|
|[True conditional] Using constructor name|128,558|94|
|[True conditional] Check if property is valid then instanceof |130,077|92|
|[False conditional] Using instanceof only|591,702,150|94|
|[False conditional] Using constructor name|593,045,012|94|
|[False conditional] Check if property is valid then instanceof |592,495,938|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 00:57:31 GMT+0000 (Coordinated Universal Time)
</details>

