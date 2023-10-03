## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|577,222,196|97|
|Setter|8,125,934|97|
|Method|582,640,714|99|
|DefineProperty (setter)|583,052,628|95|
|DefineProperty (setter & enumerable=false)|8,483,697|93|
|DefineProperty (setter & configurable=false)|8,431,931|97|
|DefineProperty (setter & enumerable=false & configurable=false)|8,330,185|98|
|DefineProperty (writable)|589,817,700|93|
|DefineProperty (writable & enumerable=false)|590,596,532|98|
|DefineProperty (writable & enumerable=false & configurable=false)|590,176,654|96|
|DefineProperties (setter)|95,979,650|22|
|DefineProperties (setter & enumerable=false)|8,486,893|96|
|DefineProperties (setter & enumerable=false & configurable=false)|8,349,480|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 03 2023 01:38:43 GMT+0000 (Coordinated Universal Time)
</details>

