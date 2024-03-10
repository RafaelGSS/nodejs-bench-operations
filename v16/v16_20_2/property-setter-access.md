## Property Setter Access

|name|ops/sec|samples|
|-|-|-|
|Setter (class)|773,814,498|98|
|Setter|8,617,862|98|
|Method|784,790,502|95|
|DefineProperty (setter)|781,339,508|95|
|DefineProperty (setter & enumerable=false)|8,590,734|98|
|DefineProperty (setter & configurable=false)|8,270,933|95|
|DefineProperty (setter & enumerable=false & configurable=false)|8,599,149|96|
|DefineProperty (writable)|822,698,990|95|
|DefineProperty (writable & enumerable=false)|823,109,783|97|
|DefineProperty (writable & enumerable=false & configurable=false)|124,287,542|18|
|DefineProperties (setter)|90,337,998|89|
|DefineProperties (setter & enumerable=false)|8,596,071|94|
|DefineProperties (setter & enumerable=false & configurable=false)|8,604,459|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:10:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Setter (class)","opsSec":773814498.4695568,"samples":5},{"name":"Setter","opsSec":8617861.666200213,"samples":6},{"name":"Method","opsSec":784790502.4923285,"samples":7},{"name":"DefineProperty (setter)","opsSec":781339507.770731,"samples":7},{"name":"DefineProperty (setter & enumerable=false)","opsSec":8590733.51259045,"samples":5},{"name":"DefineProperty (setter & configurable=false)","opsSec":8270932.832130703,"samples":5},{"name":"DefineProperty (setter & enumerable=false & configurable=false)","opsSec":8599149.016430935,"samples":5},{"name":"DefineProperty (writable)","opsSec":822698989.5170308,"samples":9},{"name":"DefineProperty (writable & enumerable=false)","opsSec":823109782.600889,"samples":8},{"name":"DefineProperty (writable & enumerable=false & configurable=false)","opsSec":124287541.86873128,"samples":7},{"name":"DefineProperties (setter)","opsSec":90337997.84811203,"samples":5},{"name":"DefineProperties (setter & enumerable=false)","opsSec":8596070.97158624,"samples":6},{"name":"DefineProperties (setter & enumerable=false & configurable=false)","opsSec":8604458.929681625,"samples":7}]}-->
